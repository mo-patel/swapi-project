<template>
  <div>
    <input
      type="text"
      name="personSearch"
      placeholder="Search by name"
      v-model="this.$store.state.searchText"
      v-on:keyup="search"
    />
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  methods: {
    search() {
      this.$store.commit("setSearch", this.$store.state.searchText);
    },
  },
  props: {},
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  padding: 5%;
}

input {
  margin-right: 2%;
  font-size: 1em;
  width: 100%;
  background: transparent;
  font-size: 2em;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
}
</style>
