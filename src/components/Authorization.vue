<template>
  <section>
    <button @click="login" v-if="!isLogin">Login</button>
    <button @click="logout" v-else>Logout</button>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: ['title'],
  methods: {
    login() {
      this.$store.commit('authorizationModule/logIn')
    },
    logout() {
      this.$store.commit('authorizationModule/logOut')
    }
  },
  computed: {
    ...mapGetters('authorizationModule', ['isLogin'])
  }
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>