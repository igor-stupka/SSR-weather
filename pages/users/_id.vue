<template>
	<div class="container">
		<nuxt-link to="/">Back home</nuxt-link>

		<h1>{{usr.name}}</h1>
		<hr>
		<h2>{{ usr.username }}</h2>
	</div>
</template>

<script>
export default {
	async asyncData({ store }) {
    	await store.dispatch('getUsers', 'https://jsonplaceholder.typicode.com/users');
    	return {
     		usrs: store.getters.users
    	}
	},
	computed: {
		usr() {
			return this.usrs.find(user => user.id == this.$route.params.id)
		}
	},
}
</script>