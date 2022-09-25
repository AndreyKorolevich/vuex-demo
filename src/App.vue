<template>
  <base-container title="Vuex" v-if="isLogin">
    <article class="block">
      <span>Current value: {{ counter }}</span>
      <span>Normalized value: {{ normalizedCounter }}</span>
      <button @click="increaseCount">Add</button>
      <button @click="increaseCountAsync">Add asynchronously</button>
    </article>
  </base-container>
  <base-container title="Authorization">
    <Authorization/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import {mapGetters} from "vuex";
import Authorization from "@/components/Authorization";

export default {
  components: {
    Authorization,
    BaseContainer,
  },
  methods: {
    increaseCount() {
      this.$store.commit('counterModule/increaseCount', this.$store.getters['counterModule/doubleCounter'])
    },
    increaseCountAsync() {
      this.$store.dispatch({
        type: "counterModule/increaseCount",
        parameter: this.$store.getters['counterModule/doubleCounter']
      })
    },
  },
  computed: {
    ...mapGetters('counterModule', ['normalizedCounter', 'counter']),
    ...mapGetters('authorizationModule', ['isLogin']),
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.block {
  display: flex;
  flex-direction: column;
}
</style>