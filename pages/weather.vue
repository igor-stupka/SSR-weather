<template>
  <div class="container">
  	<nuxt-link to="/">Back home</nuxt-link>
    <h1>weather</h1>
    <form @submit.prevent="checkWeather">
		<input type="text" v-model="city">
    </form>
    <hr>
    <section>
    	<template v-if="weather">
	    	<b>{{weather.name}}:</b>
			<br>
	    	<i>{{weather.weather[0].description}}</i>
    	</template>
    	<h4 v-else>Sorry, problems on server</h4>
    </section>
  </div>
</template>

<script>

export default {
	 async asyncData({ $axios }) {
	 	const userCity = await $axios.$get('http://ip-api.com/json')
	 	.then(resolve => resolve.city, error => 'New York')

		const userWeather = await $axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${process.env.weatherAppId}`)
		.then(resolve => resolve, err => false)

		return {
			weather: userWeather,
			userCity: userCity
		}
	},
	data: () => ({
		city: ''
	}),
	methods: {
		checkWeather() {
			this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city || this.userCity}&appid=${process.env.weatherAppId}`).then(req => {
				this.weather = req
			}, err => this.weather = false)
		}
	},
}
</script>

<style>
</style>
