<template>

  <router-view/>

</template>

<script lang="ts">
import axios from "axios";

export default {
  name: 'App',
  created() {
      this.getPokemons()
  },
  methods: {
    async getPokemons() {
    let results = [];
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => (results = res.data.results || res.data.pokemon))
      .catch((err) => console.log(err));
    let endPoints = results.map((e) => e.url || e.pokemon.url);
    await axios
      .all(endPoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => results = res);
      console.log(results);
      this.$store.commit('storePokedex', results);
      this.loading = false;
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
