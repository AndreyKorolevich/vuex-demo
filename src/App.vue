<template>
  <base-container title="Vuex">
    <article class="block">
      <span>{{ $store.state.count }}</span>
      <button @click="increaseCount">Add</button>
    </article>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount', 12)
    }
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