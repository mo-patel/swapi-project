<template>
  <div>
    <input type="text" name="personSearch" placeholder="Type To Search" />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
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
}
</style>
