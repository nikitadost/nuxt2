<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link to="/"
          ><img class="navbar-logo" src="/images/logo.png" alt="logo"
        /></nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/about" class="navbar-item"> О нас </nuxt-link>
          <nuxt-link to="/contacts" class="navbar-item" no-prefetch>
            Контакты
          </nuxt-link>
          <nuxt-link to="/todolist" class="navbar-item"> Список дел </nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#root {
  width: 100%;
  height: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
}

input,
button {
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
}

a {
  text-decoration: none;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-logo {
  width: 100px;
  height: 100px;
}
.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
