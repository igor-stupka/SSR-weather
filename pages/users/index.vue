<template>
  <div class="container">
    <h1>Users page</h1>
    <hr>
    <nuxt-link to="/">Back home</nuxt-link>
    <br>

    <ul>
      <li v-for="user in users">
        <nuxt-link :to="`users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>

    <div> {{$store.state.counter}} </div>
    <button @click="$store.commit('increment')">increment</button>
  
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('getUsers');
    return {
      users: store.getters.users
    }
  }
}
</script>

<style>

</style>
