<template>
  <!--遊戲標題-->
  <GameTitleVue v-if="currentSection === 'gameTitle'">
    <template v-slot:button>
      <button id="start-game" class="bottom-setting" @click="nextSection('gameStory')">遊戲開始</button>
    </template>
  </GameTitleVue>

  <!--遊戲劇情-->
  <GameStoryVue v-if="currentSection === 'gameStory'">
    <button id="close-instroduction" class="bottom-setting" @click="nextSection('gameBattle')">關閉說明</button>
  </GameStoryVue>

  <!--遊戲戰鬥-->
  <GameBattleVue v-if="currentSection === 'gameBattle'">
    <button id="restart" class="bottom-setting" @click="nextSection('gameTitle')">重新開始</button>
  </GameBattleVue>
</template>

<script>
import GameTitleVue from './components/GameTitle.vue';
import GameStoryVue from './components/GameStory.vue';
import GameBattleVue from './components/GameBattle.vue';

export default {
  data() {
    return {
      currentSection: 'gameTitle'
    }
  },
  methods: {
    nextSection(section) {
      this.currentSection = section
    }
  },
  components: {
    GameTitleVue,
    GameStoryVue,
    GameBattleVue
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

/*畫面尺寸設定 */
.display-setting {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
}
/*按鈕設定 */
.bottom-setting{
  background-color: darkred;
  border: none;
  font-size: 2rem;
  border: none;
  color: whitesmoke;
  border: thick double gray;
}
.bottom-setting:hover{
  background-color: red;
}
.bottom-setting:active{
  background-color: darkred;
}

/*遊戲開始 */
#start-game {
  position: absolute;
  top: 500px;
  right: 350px;
  font-size: 2rem;
  padding: 10px 20px;
}
/*關閉說明 */
#close-instroduction{
  position: absolute;
  right: 40px;
  bottom: 40px;
  padding: 10px 20px;
}
/*重新開始*/
#restart{
  margin-left: 280px;
  margin-top: 20px;
}
</style>
