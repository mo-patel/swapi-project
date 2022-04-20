<template>
  <div v-if="$store.state.allUserDetails.length > 0">
    <table>
      <thead>
        <tr>
          <th v-for="user in Object.keys(userDetails[0])" :key="user[0]">
            {{ user }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userDetails" :key="user">
          <td v-for="userDetail in user" :key="userDetail">
            {{ userDetail }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",
  data: function () {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  computed: {
    userDetails() {
      return this.$store.state.allUserDetails;
    },
  },
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

th {
  text-transform: capitalize;
  position: sticky;
  top: 0;
  background-color: #88869d;
}

tr:hover {
  background-color: rgba(128, 255, 0, 0.448);
  cursor: pointer;
}

.blur {
  filter: blur(3px);
}

div {
  overflow-y: scroll;
  overflow-x: scroll;
  width: 100%;
  height: 400px;
}
</style>
