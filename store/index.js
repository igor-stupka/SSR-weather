import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
	return new Vuex.Store({
		state: {
			users: [],
			counter: 0
		},
		getters: {
			counter(state) {
				return state.counter
			},
			users(state) {
				return state.users
			}
		},
		mutations: {
		 	increment (state) {
		    	state.counter++
			},
			getUsers(state, users) {
				state.users = users
			}
		},
		actions: {
			async getUsers(store, url) {
				const request = await axios.get('https://jsonplaceholder.typicode.com/users');
				store.commit('getUsers', request.data)
			}
		}
	})
}


export default createStore