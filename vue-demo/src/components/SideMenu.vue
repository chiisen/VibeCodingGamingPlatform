<template>
  <aside class="side-menu">
    <ul>
      <li><a href="#" class="active">遊戲總覽</a></li>
      <li><a href="#">最新活動</a></li>
      <li><a href="#">系統公告</a></li>
      <li><a href="#">遊戲教學</a></li>
      <li><a href="#">VIP專區</a></li>
    </ul>
  </aside>
</template>

<script setup>
// Side menu logic
</script>

<style scoped>
.side-menu {
  width: 200px;
  background-color: #222;
  padding: 20px 0;
  height: 100%;
  flex-shrink: 0;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-menu li {
  border-bottom: 1px solid #333;
}

.side-menu a {
  display: block;
  padding: 15px 20px;
  color: #aaa;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
}

.side-menu a:hover, .side-menu a.active {
  background-color: #333;
  color: #ffd700;
  border-left: 4px solid #ffd700;
}
</style>
