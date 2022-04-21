import { PlanetDetails, UserDetails } from "@/types/dataTypes";
import { createStore } from "vuex";
import data from "../../data/sampleData.json";
import planetData from "../../data/samplePlanetData.json";
import dayjs from "dayjs";
export interface State {
  allUserDetails: UserDetails[];
  filteredUsers: UserDetails[];
  searchText: string;
  filterSet: string | null;
  planetDetails: PlanetDetails[];
}

export default createStore<State>({
  state: {
    allUserDetails: [],
    filteredUsers: [],
    searchText: "",
    filterSet: null,
    planetDetails: [],
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
    getPlanetData:
      (state: State) =>
      (homeUrl: string): PlanetDetails | null => {
        const checkState = state.planetDetails.find((item) => {
          return homeUrl === item.url;
        });
        return checkState ?? null;
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
    setFilter(state: State, flag: string) {
      state.filterSet = flag;
    },
    setPlanetDetails(state: State, planetData: PlanetDetails): void {
      state.planetDetails.push(planetData);
    },
    sortUsers(state: State, field: string): void {
      const numberFields: string[] = ["height", "mass"];
      const filterUnchanged: boolean = state.filterSet === field;
      state.filterSet = filterUnchanged ? null : field;
      state.allUserDetails.sort((a, b) => {
        let valA: number | string = a[field as keyof UserDetails];
        let valB: number | string = b[field as keyof UserDetails];
        const valTrue: number = filterUnchanged ? -1 : 1;
        const valFalse: number = filterUnchanged ? 1 : -1;
        if (numberFields.includes(field)) {
          valA = parseInt(valA);
          valB = parseInt(valB);
        }
        return valA > valB ? valTrue : valFalse;
      });
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
    async setPlanetDetails({ commit }, payload) {
      //fetch goes here
      const cachedData = this.getters.getPlanetData(payload.homeUrl);
      if (cachedData) {
        return commit("setPlanetDetails", cachedData);
      }
      const pData: PlanetDetails = {
        name: planetData.name,
        diameter: planetData.diameter,
        climate: planetData.climate,
        population: planetData.population,
        url: planetData.url,
      };
      commit("setPlanetDetails", pData);
    },
  },
  modules: {},
});
