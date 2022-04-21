<template>
  <h1>SWAPI test</h1>
  <PopupComponent
    v-if="modalContent"
    :content="modalContent"
    @close="clearModal"
  />
  <div id="mainContent">
    <SearchComponent />
    <DetailsComponent @setModalContent="setModalContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import PopupComponent from "./components/PopupComponent.vue";
import { UserDetails } from "./types/dataTypes";

interface AppLocalState {
  modalContent: UserDetails | null;
}

export default defineComponent({
  name: "App",
  components: { DetailsComponent, SearchComponent, PopupComponent },
  data(): AppLocalState {
    return {
      modalContent: null,
    };
  },
  methods: {
    setModalContent(data: UserDetails) {
      this.modalContent = data;
      const { dispatch } = this.$store;
      dispatch("setPlanetDetails", {
        homeUrl: this.modalContent.homeworld,
      });
    },
    clearModal() {
      this.modalContent = null;
    },
  },
  mounted() {
    const { dispatch } = this.$store;
    dispatch("setUserDetails");
  },
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
