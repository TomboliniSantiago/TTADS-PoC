<template>
  <div>
    <progress-bar :value="25"/>
    <Pokemons/>
  </div>

</template>



<script>
  import Pokemons from '../components/Pokemons'
  import bar from "../components/Bar.vue"

  export default {


    components: {
      Pokemons,
      bar
    },
  }
</script>
