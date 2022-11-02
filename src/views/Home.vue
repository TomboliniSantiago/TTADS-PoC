<template>
  <div>
    <progress-bar/>
    <Pokemons/>
  </div>

</template>



<script>
  import Pokemons from '../components/Pokemons'
  import bar from "../components/Bar.vue"

  export default {


    components: {
      Pokemons,
      // eslint-disable-next-line vue/no-unused-components
      bar
    },
  }
</script>
