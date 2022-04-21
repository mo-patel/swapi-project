<template>
  <div class="parent" v-if="$store.state.allUserDetails.length > 0">
    <div class="noRows" v-if="showNoRows">
      No items for your selected search
    </div>
    <table v-else>
      <thead>
        <tr>
          <th
            @click="sortUsers(user)"
            v-for="user in Object.keys(userDetails[0])"
            :key="user[0]"
          >
            {{ user }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in userDetails"
          :key="user"
          @click="setModalDetails(user)"
        >
          <td v-for="(userDetail, key) in user" :key="userDetail">
            <div v-if="key === 'homeworld'">Click for more...</div>
            <div v-else>{{ userDetail }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsComponent",
  methods: {
    sortUsers(field) {
      this.$store.commit("sortUsers", field);
    },
    setModalDetails(data) {
      this.$emit("setModalContent", data);
    },
  },
  computed: {
    userDetails() {
      return this.$store.getters.userDetails;
    },
    showNoRows() {
      const { getSearchText, getFilteredUsers } = this.$store.getters;
      return getSearchText.length > 0 && getFilteredUsers.length < 1;
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
  /* position: sticky; */
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

.parent {
  overflow-y: scroll;
  overflow-x: scroll;
  width: 100%;
  height: 400px;
}
</style>
