<template>
  <div>
    <h1>Pokedex</h1>
    <h1>{{ $store.state.pokedex.length }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokedexPage',
  updated() {
    console.log(this.$store.state.pokedex);
  }
});
</script>
