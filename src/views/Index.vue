<template>
  <v-container>
      <ul>
        <li>
          <router-link to="/">
            Dex
          </router-link>
        <ul>
        <li>
          <p>Track your main Pokédex completion in Pokémon GO.</p>
        </li>
          </ul>
        </li>


        <li>
          <router-link to="/">
            ShinyDex

          </router-link>
          <ul>
            <li>
              <p>Track which of the available shinies you’ve caught.</p>
            </li>
          </ul>
        </li>


        <li>
          <router-link to="/">
            LuckyDex

          </router-link>
          <ul>
            <li>
              <p>Track how many lucky Pokémon you’ve acquired.</p>
            </li>
          </ul>
        </li>


        <li>
          <router-link to="/">
            UnownDex

          </router-link>
          <ul>
            <li>
              <p>Track how many Unown you own.</p>
            </li>
          </ul>
        </li>


        <li>
          <router-link to="/">
            ShadowDex
          </router-link>
          <ul>
            <li>
              <p>Track how many shadow Pokémon you have.</p>
            </li>
          </ul>
        </li>
      </ul>



  </v-container>
</template>

<script>

export default {
  name: "Index"
};
</script>

<style>
.wrap-text {
  white-space: normal;
}
</style>