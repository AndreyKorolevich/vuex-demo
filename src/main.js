import { createApp } from 'vue';
import { createStore } from "vuex";

import App from './App.vue';

const app = createApp(App);

const counterModule = {
    namespaced: true,
    state() {
        return {
            count: 1,
        }
    },
    mutations: {
        increaseCount(state, parameter) {
            state.count += parameter
        },
    },
    actions: {
        increaseCount(context, { parameter } ){
            setTimeout(() => {
                context.commit('increaseCount', parameter)
            }, 1000)
        }
    },
    getters: {
        counter(state){
            return state.count
        },
        doubleCounter(state, _,  rootState) {
            console.log(state, rootState)
            return state.count * 2
        },
        normalizedCounter(state, getters){
            const finalCounter = getters.doubleCounter
            if(finalCounter < 0){
                return 0
            } else if( finalCounter > 100){
                return 100
            }
            return finalCounter
        },
    },

}

const store = createStore({
    modules: {
      counterModule
    },
    state() {
        return {
            isLogin: false
        }
    },
    mutations: {
        logIn(state){
            state.isLogin = true
        },
        logOut(state){
            state.isLogin = false
        }
    },
    getters: {
        isLogin(state){

            return state.isLogin
        }
    },

})

app.use(store)
window.state = store.state

app.mount('#app');
