<template>
  <div>
    <h1>{{ $store.state.pokemon.name }}</h1>
    <h1>{{ $store.state.pokemon.id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonPage',
  updated() {
    console.log(this.$store.state.pokemon);
  }
});
</script>
