<template>
  <div class="app-container">
    <HeaderNav />
    
    <div class="main-layout">
      <SideMenu class="side-menu-container" />
      
      <main class="content-area">
        <CategoryTabs 
          :tabs="categories" 
          v-model="activeCategory" 
        />
        
        <div class="scrollable-content">
          <GameList :games="filteredGames" />
          <FooterInfo />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import SideMenu from './components/SideMenu.vue'
import CategoryTabs from './components/CategoryTabs.vue'
import GameList from './components/GameList.vue'
import FooterInfo from './components/FooterInfo.vue'
import gamesData from './data/games.json'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: '全部' },
  { id: 'global', label: '國際區' },
  { id: 'classic', label: 'SLOT' },
  { id: 'chess', label: '棋牌' },
  { id: 'fish', label: '捕魚' },
  { id: 'special', label: '特殊' },
  { id: 'jackpot', label: '彩金' }
]

const filteredGames = computed(() => {
  if (activeCategory.value === 'all') {
    return gamesData
  }
  return gamesData.filter(game => game.category === activeCategory.value)
})
</script>

<style>
/* Global Reset */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #121212;
  color: #fff;
}

* {
  box-sizing: border-box;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden; /* Prevent body scroll */
}

.side-menu-container {
  display: none; /* Hidden on mobile by default */
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  overflow: hidden;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .side-menu-container {
    display: block;
  }
}
</style>
