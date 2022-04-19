<template>
  <PopupComponent v-if="!true" />
  <div id="mainContent">
    <SearchComponent />
    <DetailsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import PopupComponent from "./components/PopupComponent.vue";

export default defineComponent({
  name: "App",
  components: { DetailsComponent, SearchComponent, PopupComponent },
});
</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}
body {
  background-color: #1e213a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  height: 100%;
}

#mainContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
}
</style>
