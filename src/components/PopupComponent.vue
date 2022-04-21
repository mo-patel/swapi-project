<template>
  <div v-if="content" class="popupParent">
    <div class="popupOverlay" @click="close"></div>
    <div class="popupContent">
      <h1>Planet Details</h1>
      <table>
        <tbody>
          <tr v-for="(modData, title) in getPlanets" :key="modData.name">
            <th>{{ title }}</th>
            <td>{{ modData }}</td>
          </tr>
        </tbody>
      </table>
      <div class="closeBtn" @click="close">Close</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: ["content"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {
    getPlanets() {
      return this.$store.getters.getPlanetData(this.content.homeworld);
    },
  },
};
</script>

<style scoped>
.popupParent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
}
.popupOverlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.popupContent {
  width: 60%;
  height: 60%;
  border: 2px solid black;
  border-radius: 15px;
  background-color: #88869d;
  padding: 3%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.popupContent table {
  width: 100%;
  table-layout: fixed;
  border: 2px solid black;
  border-collapse: collapse;
  z-index: 4;
}

h1 {
  text-align: center;
}

th {
  text-transform: capitalize;
}

table,
th,
td {
  width: 100%;
  table-layout: fixed;
  border: 2px solid black;
  border-collapse: collapse;
}

.closeBtn {
  width: 100%;
  background-color: rgb(38, 55, 179);
  font-size: 1.5em;
  border-radius: 5px;
  cursor: pointer;
}
</style>
