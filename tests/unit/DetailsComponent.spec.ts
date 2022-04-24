import DetailsComponent from "@/components/DetailsComponent.vue";
import { UserDetails } from "@/types/dataTypes";
import { mount, VueWrapper } from "@vue/test-utils";
import { Plugin } from "vue";
import { createStore, Store } from "vuex";
import data from "../../data/sampleData.json";

describe("DetailsComponent", () => {
  let store:
    | Plugin
    | [Plugin, ...unknown[]]
    | Store<{
        allUserDetails: UserDetails;
      }>;

  beforeEach(() => {
    store = createStore({
      state() {
        return {
          allUserDetails: data,
        };
      },
      getters: {
        getSearchText() {
          return "vdvd";
        },
        getFilteredUsers() {
          return [];
        },
        userDetails() {
          return [data.results];
        },
      },
    });
  });
  it("table renders", () => {
    const wrapper: VueWrapper = mount(DetailsComponent, {
      global: {
        plugins: [store],
      },
      props: {
        dataLoaded: true,
      },
      computed: {
        userDetails() {
          return data.results;
        },
        showNoRows() {
          return false;
        },
      },
    });
    expect(wrapper.find("table").exists()).toBe(true);
  });

  it("No Filter data shows no rows", async () => {
    const wrapper: VueWrapper = mount(DetailsComponent, {
      global: {
        plugins: [store],
      },
      props: {
        dataLoaded: true,
      },
    });
    expect(wrapper.html()).toContain("noRows");
  });

  it("Clicking row emits event", async () => {
    const wrapper: VueWrapper = mount(DetailsComponent, {
      global: {
        plugins: [store],
      },
      props: {
        dataLoaded: true,
      },
      computed: {
        userDetails() {
          return data.results;
        },
        showNoRows() {
          return false;
        },
      },
    });
    const btn = wrapper.find("tbody").find("tr");
    await btn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("setModalContent");
  });

  it("sort function called", async () => {
    const mockedFunc = jest.fn();
    store = createStore({
      state() {
        return {
          allUserDetails: data,
        };
      },
      mutations: {
        sortUsers: mockedFunc,
      },
    });
    const wrapper: VueWrapper = mount(DetailsComponent, {
      global: {
        plugins: [store],
      },
      props: {
        dataLoaded: true,
      },
      computed: {
        userDetails() {
          return data.results;
        },
        showNoRows() {
          return false;
        },
      },
    });
    const btn = wrapper.find("thead").find("tr").find("th");
    await btn.trigger("click");
    expect(mockedFunc).toHaveBeenCalled();
  });
});
