<script setup>
import theUserMenu from "./components/UserMenu/theUserMenu.vue"
</script>

<template>
  <header>
    <div>
       <nav>
      <ul >
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <div>
        <li>
          <RouterLink to="/contacts">Contacts</RouterLink>
        </li>
        <li>
          <RouterLink to="/registered">Registered</RouterLink>
        </li>
         <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
        </div>
         <li v-if="$store.getters.userName !== ''">
          <theUserMenu />
        </li>
      </ul>
    </nav>
    </div>
  </header>

  <RouterView />
</template>
