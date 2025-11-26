<template>
  <header class="header-nav">
    <div class="logo">
      <h1>星城Online</h1>
    </div>
    <nav class="main-menu">
      <ul>
        <li><a href="#">遊戲介紹</a></li>
        <li><a href="#">下載專區</a></li>
        <li><a href="#">儲值中心</a></li>
        <li><a href="#">客服中心</a></li>
      </ul>
    </nav>
    <div class="user-actions">
      <button class="login-btn">會員登入</button>
      <button class="register-btn">立即註冊</button>
    </div>
  </header>
</template>

<script setup>
// Header logic
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #1a1a1a;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #ffd700; /* Gold */
}

.main-menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.main-menu a {
  color: #ddd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.main-menu a:hover {
  color: #ffd700;
}

.user-actions button {
  margin-left: 10px;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.login-btn {
  background-color: #333;
  color: #fff;
}

.register-btn {
  background-color: #ffd700;
  color: #000;
}
</style>
