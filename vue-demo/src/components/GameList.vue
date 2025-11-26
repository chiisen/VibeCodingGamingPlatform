<template>
  <div class="game-list">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
    <div v-if="games.length === 0" class="no-data">
      沒有找到相關遊戲
    </div>
  </div>
</template>

<script setup>
import GameCard from './GameCard.vue'

defineProps({
  games: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
}

.no-data {
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: #888;
}
</style>
