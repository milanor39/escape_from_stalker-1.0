<template>
    <div class="display-setting">
        <div v-if="currentScene === 0" @click="nextScene()" class="storyscene-setting storyscene-advancedsetting scene00">
            <StorySceenVue>
                <p>這天，不小心加班加太晚錯過了最後一班電車。</p>
                <p>幸好家裡離公司只有15分鐘的路程。沒辦法，只好走路回家。</p>
            </StorySceenVue>
        </div>
        <div v-if="currentScene === 1" @click="nextScene()" class="storyscene-setting storyscene-advancedsetting scene01">
            <StorySceenVue>
                <p>躂躂...躂躂...</p>
                <p>深夜的街道，一片寂靜</p>
                <p>除了我的腳步聲外什麼聲音也沒有。</p>
            </StorySceenVue>
        </div>
        <div v-if="currentScene === 2" @click="nextScene()" class="storyscene-setting storyscene-advancedsetting scene02">
            <StorySceenVue>
                <p>!?</p>
                <p>躂躂...躂躂...</p>
                <p>...什麼時候...多了一個腳步聲...?</p>
            </StorySceenVue>
        </div>
        <div v-if="currentScene === 3" @click="nextScene()" class="storyscene-setting storyscene-advancedsetting scene03">
            <StorySceenVue>
                <p>出現在眼前的...是一個穿著白色連身裙、留著一頭漆黑長髮的詭異女人</p>
                <p>嘴裡喃喃自語說著一些完全無法理解的語言</p>
                <p>彷彿黑洞一般的漆黑雙眼，眼神一旦對上靈魂就好像會被吸進去一樣</p>
            </StorySceenVue>
        </div>
        <div v-if="currentScene === 4" @click="nextScene()" class="storyscene-setting storyscene-advancedsetting scene04">
            <StorySceenVue>
                <p>我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨我好恨</p>
            </StorySceenVue>
        </div>
        <div v-if="currentScene === 5" class="storyscene-setting scene05">
            <div class="introduction-content">
                <h2>操作說明</h2>
                <p>玩家必須要在怨靈追上之前搶先回到家</p>
                <div class="introduction-imgbox">
                    <img src="../assets/introduction01.jpg" alt="說明">
                </div>
                <p>紅色計量表：玩家到家的距離，歸零表示玩家勝利</p>
                <p>綠色計量表：怨靈和玩家間的距離，歸零表示玩家失敗</p>
                <div class="introduction-imgbox2">
                    <img src="../assets/introduction02.jpg" alt="說明">
                </div>
                <p>快走：以一般速度前進</p>
                <p>跑步：以較快速度前進，無法連續使用</p>
                <p>躲藏：躲在隱密地方等待怨靈離去</p>
                <p>放棄：遊戲認輸</p>
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
import StorySceenVue from './StorySceen.vue';
export default {
    data() {
        return {
            currentScene: 0
        }
    },
    components: {
        StorySceenVue
    },
    methods: {
        nextScene() {
            this.currentScene++
        }
    }
}
</script>

<style lang="scss">
/*畫面尺寸設定 */
.storyscene-advancedsetting {
    display: flex;
    flex-direction: column-reverse;
}

.storyscene-setting {
    width: 1200px;
    height: 800px;
    background-position: center;
    background-size: cover;
}

/*操作說明畫面設定 */
.introduction-content{
    position: relative;
    padding: 20px;
    h2{
        margin: 0;
        margin-bottom: 30px;
        color: whitesmoke;
        font-size: 3rem;
    }
    p{
        color: whitesmoke;
        font-size: 1.5rem;
    }
    .introduction-imgbox{
        width: 600px;
        img{
            width: 100%;
        }
    }
    .introduction-imgbox2{
        width: 300px;
        img{
            width: 100%;
        }
    }
}

/*劇情背景CG */
.scene00 {
    background-image: url("../assets/story/scene00.jpg");
}

.scene01 {
    background-image: url("../assets/story/scene01.jpg");
}

.scene02 {
    background-image: url("../assets/story/scene02.jpg");
}

.scene03 {
    background-image: url("../assets/story/scene03.jpg");
}

.scene04 {
    background-image: url("../assets/story/scene04.jpg");
}

.scene05 {
    background-image: url("../assets/story/scene05.jpg");
}
</style>