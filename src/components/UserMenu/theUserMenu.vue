<template>
    <div>
      <p>{{$store.getters.userName}}</p>
      <button @click="$store.dispatch('logoutAction')">Logout</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>