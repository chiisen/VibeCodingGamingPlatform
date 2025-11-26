<template>
  <div class="game-card">
    <div class="icon-wrapper">
      <img :src="game.icon" :alt="game.name" loading="lazy">
    </div>
    <div class="info">
      <h3>{{ game.name }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.game-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-align: center;
  padding-bottom: 10px;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.icon-wrapper {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #000;
}

.icon-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.game-card:hover .icon-wrapper img {
  transform: scale(1.1);
}

.info h3 {
  margin: 10px 0 0;
  font-size: 1rem;
  color: #eee;
  padding: 0 10px;
}
</style>
