<template>
  <div>
    <h1>Pokedex</h1>
    <h1>{{ $store.state.pokedex.length }}</h1>
    <input type="text" v-model="input_name"/>
    <button @click="selectType('fire')">poison</button>
    <h1 v-if="$store.state.pokedex.length !== 9">Carregando...</h1>
  <div v-else>
    <div className="card">
    <router-link v-for="pokemons in $store.state.pokedex.filter((e) => e.data.name.startsWith(this.input_name)).filter((e) => {
      const crossTypes = e.data.types.length === 1 ? e.data.types[0].type.name : e.data.types[0].type.name + e.data.types[1].type.name;
      return crossTypes.includes(selectedType);
    })" :key="pokemons.data.id" @click="selectPokemon(pokemons.data)" :to="pokemons.data.name">
      <img :alt="pokemons.data.name" :src="Object.values(pokemons.data.sprites.other)[2].front_default" />
      <div className="name">
        <h2>{{ pokemons.data.name[0].toUpperCase() + pokemons.data.name.substring(1) }}</h2>
        <h2>{{ "#" + `00${pokemons.data.id}`.slice(-3) }}</h2>
      </div>
      <div className="types">

        <h3 v-for="types in pokemons.data.types" :key="types.type.name" :style="{color: this.colours[types.type.name]}">{{ types.type.name }}</h3>
        
      </div>
    </router-link>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokedexPage',
  data() {
    return {
      colours: {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  },
  input_name: '',
  selectedType: '',
    }
  },
  methods: {
  selectPokemon(pokeData) {
    this.$store.commit('storePokemon', pokeData);
  },
  selectType(type) {
    console.log('fire' + undefined);
    console.log(this.$store.state.pokedex[2].data.types.length === 1 ? this.$store.state.pokedex[2].data.types[0].type.name : this.$store.state.pokedex[2].data.types[0].type.name + this.$store.state.pokedex[2].data.types[1].type.name);

    this.selectedType === type ? this.selectedType = '' : this.selectedType = type;
    
  }
  },
  updated() {
    console.log(this.$store.state.pokedex);
    /* console.log(this.colours['normal']); */
  }
});
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  cursor: default;
}
.card img {
  background: lightgray;
  border-radius: 15px;
  width: 350px;
}
.name {
  display: flex;
}
.name h2 {
  margin: 5px 2.5px;
}
.name h2:nth-child(2) {
  color: gray;
}
.types {
  display: flex;
}
.types h3 {
  width: 25%;
  text-align: center;
  padding: 2px 0 2px 0;
  margin-right: 10px;
  border-radius: 15px;
}
@media screen and (max-width: 760px) {
  .card {
    width: 40%;
  }
  .card img {
    width: 100%;
  }
  .name h2 {
    margin: 1px 0.5px;
    font-size: 90%;
  }
  .types h3 {
    width: 37.5%;
    font-size: 80%;
  }
}
</style>
