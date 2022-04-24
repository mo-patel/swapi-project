import SearchComponent from "@/components/SearchComponent.vue";
import { createStore, Store } from "vuex";
import { mount, VueWrapper } from "@vue/test-utils";
import { Plugin } from "vue";
describe("SearchComponent.vue", () => {
  const mockedFunc = jest.fn();
  let store: Plugin | [Plugin, ...unknown[]] | Store<unknown>;
  beforeEach(() => {
    store = createStore({
      state() {
        return {
          searchText: "t",
        };
      },
      mutations: {
        setSearch: mockedFunc,
      },
    });
  });
  it("Input renders", () => {
    const wrapper: VueWrapper = mount(SearchComponent, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("Search fires mutation", async () => {
    const wrapper: VueWrapper = mount(SearchComponent, {
      global: {
        plugins: [store],
      },
    });
    const inputEl = wrapper.find("input");
    await inputEl.trigger("keyup");
    expect(mockedFunc).toBeCalled();
  });
});
