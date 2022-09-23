<template>
  <!--遊戲標題-->
  <GameTitleVue v-if="currentSection === 'gameTitle'">
    <template v-slot:button>
      <button id="start-game" @click="nextSection('gameStory')">遊戲開始</button>
    </template>
  </GameTitleVue>

  <!--遊戲劇情-->
  <GameStoryVue v-if="currentSection === 'gameStory'">
    <button id="close-instroduction" @click="nextSection('gameBattle')">關閉說明</button>
  </GameStoryVue>

  <!--遊戲戰鬥-->
  <GameBattleVue v-if="currentSection === 'gameBattle'">
    <button @click="nextSection('gameTitle')">重新開始</button>
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

/*遊戲開始 */
#start-game {
  position: absolute;
  top: 500px;
  right: 350px;
  font-size: 2rem;
  background-color: darkred;
  border: none;
  color: whitesmoke;
  padding: 10px 20px;
}
#start-game:hover{
  background-color: red;
}
#start-game:active{
  background-color: darkred;
}
/*關閉說明 */
#close-instroduction{
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-size: 2rem;
  background-color: darkred;
  border: none;
  color: whitesmoke;
  padding: 10px 20px;
}
#close-instroduction:hover{
  background-color: red;
}
#close-instroduction:active{
  background-color: darkred;
}
</style>
