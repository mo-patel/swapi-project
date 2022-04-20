import { UserDetails } from "@/types/dataTypes";
import { createStore } from "vuex";
import data from "../../data/sampleData.json";
import dayjs from "dayjs";
export interface State {
  allUserDetails: UserDetails[];
  filteredUsers: UserDetails[];
  searchText: string;
}

export default createStore<State>({
  state: {
    allUserDetails: [],
    filteredUsers: [],
    searchText: "",
  },
  getters: {
    userDetails(state: State): UserDetails[] | string {
      if (state.filteredUsers.length > 0) {
        return state.filteredUsers;
      }
      return state.allUserDetails;
    },
    getSearchText(state: State): string {
      return state.searchText;
    },
    getFilteredUsers(state: State): UserDetails[] {
      return state.filteredUsers;
    },
  },
  mutations: {
    setUserDetails(state: State, detailsArray: UserDetails[]): void {
      state.allUserDetails = detailsArray;
    },
    setSearch(state: State, searchText: string): void {
      const filtered: UserDetails[] = state.allUserDetails.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
      state.filteredUsers = filtered;
      state.searchText = searchText;
    },
  },
  actions: {
    async setUserDetails({ commit }): Promise<void> {
      const fields = [
        "name",
        "height",
        "mass",
        "created",
        "edited",
        "homeworld",
      ];
      //add fetch here
      const reducedData = data.results.map((item) =>
        fields.reduce((acc: Record<string, string>, key) => {
          let itemToAdd = item[key as keyof UserDetails];
          if (key === "created" || key === "edited") {
            itemToAdd = dayjs(itemToAdd).format("DD/MM/YYYY");
          }
          acc[key] = itemToAdd;
          return acc;
        }, {})
      );
      commit("setUserDetails", reducedData);
    },
  },
  modules: {},
});
