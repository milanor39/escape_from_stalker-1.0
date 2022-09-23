<template>
    <div class="display-setting">
        <div class="end-setting"
            :class="{'end-win': winner === 'ghost','end-lose': winner === 'player','end-draw': winner === 'draw'}"
            v-if="winner">
            <div v-if="winner === 'ghost'">
                <EndingSceenVue>
                    <h2>Game Over</h2>
                    <p>當我趕回家時，在後面追著我的「那個」早已不見蹤影。</p>
                    <p>之後就再也沒有發生過類似的事情了，一切的生活都回歸正常，彷彿這一切都不曾發生似的</p>
                    <p>直到今天，我還是不曉得那個晚上究竟發生了什麼事情</p>
                    <p>只知道，無論如何再也不要加班晚歸了...</p>
                </EndingSceenVue>
                <slot></slot>
            </div>
            <div v-else-if="winner === 'player'">你被追上了
                <EndingSceenVue></EndingSceenVue>
                <slot></slot>
            </div>
            <div v-else>平手
                <EndingSceenVue></EndingSceenVue>
                <slot></slot>
            </div>
        </div>
        <div class="battlescene-setting" v-else>
            <!--HP量表-->>
            <div class="healthbar">
                <i class="fa-solid fa-house fa-2x"></i>
                <div class="home-distance" :style="playerHealthStyle"></div>
            </div>
            <div class="healthbar">
                <i class="fa-solid fa-ghost fa-2x"></i>
                <div class="ghost-distance" :style="ghostHealthStyle"></div>
            </div>
            <!--指令-->
            <div class="introduction-ui">
                <ul>
                    <li>
                        <button @click="playerAttack()">快走</button>
                    </li>
                    <li>
                        <button @click="playerSpecialAttack()" :disabled="canUseSpecialAttack">跑步</button>
                    </li>
                    <li>
                        <button @click="playerHeal()">躲藏</button>
                    </li>
                    <li>
                        <button @click="surrenderGame()">放棄</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import EndingSceenVue from './EndingSceen.vue'
export default {
    data() {
        return {
            playerHealth: 100,
            ghostHealth: 100,
            winner: null,
            currentRound: 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.ghostHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'ghost'
            }
            if (value < 50) {
                return {

                }
            }
        },
        ghostHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
    methods: {
        /*隨機數字 */
        randomValue(min, max) {
            return Math.floor(Math.random() * (max - min)) + min
        },
        /*指令-快走 */
        playerAttack() {
            this.currentRound++;
            const atkValue = this.randomValue(5, 12)
            if (this.playerHealth - atkValue < 0) {
                this.playerHealth = 0
            } else {
                this.playerHealth -= atkValue
            }
            this.ghostAttack();
        },
        /*指令-躲藏 */
        playerHeal() {
            this.currentRound++;
            const ghostDistance = this.randomValue(8, 20)
            if (this.ghostHealth + ghostDistance > 100) {
                this.ghostHealth = 100
            } else {
                this.ghostHealth += ghostDistance
            }
            this.ghostAttack();
        },
        /*指令-跑步 */
        playerSpecialAttack() {
            this.currentRound++;
            const atkValue = this.randomValue(10, 25)
            if (this.playerHealth - atkValue < 0) {
                this.playerHealth = 0
            } else {
                this.playerHealth -= atkValue
            }
            this.ghostAttack();
        },
        surrenderGame() {
            this.winner = 'ghost'
        },
        ghostAttack() {
            const atkValue = this.randomValue(8, 15)
            if (this.ghostHealth - atkValue < 0) {
                this.ghostHealth = 0
            } else {
                this.ghostHealth -= atkValue
            }
        }
    },
    computed: {
        playerHealthStyle() {
            return {
                width: this.playerHealth + '%'
            }
        },
        ghostHealthStyle() {
            return {
                width: this.ghostHealth + '%'
            }
        },
        canUseSpecialAttack() {
            return this.currentRound % 3 != 0
        }
    },
    components: {
        EndingSceenVue
    }
}
</script>

<style lang="scss">
/*結局 */
.end-setting {
    width: 1200px;
    height: 800px;
    padding-top: 20px;
    background-position: center;
    background-size: cover;
}

.end-win {
    background-image: url("../assets/ending/end-win.jpg");
}

.end-lose {
    background-image: url("../assets/ending/ending-lose.jpg");
}

.end-draw {
    background-image: url("../assets/ending/end-draw.jpg");
}
/*戰鬥畫面 */
.battlescene-setting {
    background-image: url("https://pakutaso.cdn.rabify.me/shared/img/thumb/kazukihiro512124.jpg.webp?d=1420");
    width: 1200px;
    height: 800px;
    padding-top: 20px;
    position: relative;

    .healthbar {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        margin-bottom: 20px;
        align-items: center;

        .fa-solid {
            color: whitesmoke;
        }

        .fa-house {
            margin-right: 8px;
        }

        .fa-ghost {
            margin-left: 5px;
            margin-right: 15px;
        }

        .home-distance {
            background-color: darkgreen;
            width: 100%;
            height: 28px;
        }

        .ghost-distance {
            background-color: darkred;
            width: 100%;
            height: 28px;
        }
    }

    .introduction-ui {
        position: absolute;
        bottom: 50px;
        right: 50px;
        width: 400px;

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 0;
            padding-left: 0;

            li {
                list-style: none;
                margin-bottom: 16px;

                button {
                    background-color: darkred;
                    font-size: 2rem;
                    border: 0;
                    position: relative;
                    padding: 20px 60px;
                    color: whitesmoke;
                }

                button:hover {
                    background-color: red;
                }

                button:active {
                    background-color: darkred;
                }

                button:disabled {
                    background-color: silver;
                }
            }
        }
    }
}
</style>