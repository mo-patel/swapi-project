import { UserDetails } from "@/types/dataTypes";
import { createStore } from "vuex";
import data from "../../data/sampleData.json";
import dayjs from "dayjs";
export interface State {
  allUserDetails: UserDetails[];
}

export default createStore<State>({
  state: {
    allUserDetails: [],
  },
  getters: {
    getUserData(state) {
      return state.allUserDetails;
    },
  },
  mutations: {
    setUserDetails(state, detailsArray: UserDetails[]) {
      state.allUserDetails = detailsArray;
    },
  },
  actions: {
    async setUserDetails({ commit }) {
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
