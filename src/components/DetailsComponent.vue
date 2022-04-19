<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Darth Vader</td>
          <td>172</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",
  props: {},
};
</script>

<style scoped>
table,
th,
td {
  width: 100%;
  table-layout: fixed;
  border: 2px solid black;
  border-collapse: collapse;
}

tr:hover {
  background-color: rgba(128, 255, 0, 0.448);
  cursor: pointer;
}

.blur {
  filter: blur(3px);
}
</style>
