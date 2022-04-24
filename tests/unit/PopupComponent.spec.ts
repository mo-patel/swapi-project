import PopupComponent from "@/components/PopupComponent.vue";
import { createStore, Store } from "vuex";
import { mount, VueWrapper } from "@vue/test-utils";
import { Plugin } from "vue";
import planetData from "../../data/samplePlanetData.json";
import userData from "../../data/sampleData.json";
describe("PopupComponent.vue", () => {
  let store: Plugin | [Plugin, ...unknown[]] | Store<unknown>;
  let wrapper: VueWrapper;
  const closeFuncMock = jest.fn();
  beforeEach(() => {
    store = createStore({
      mutations: {
        close: closeFuncMock,
      },
    });
    wrapper = mount(PopupComponent, {
      global: {
        plugins: [store],
      },
      props: {
        content: userData.results[1],
      },
      computed: {
        getPlanets() {
          return planetData;
        },
      },
    });
  });
  it("Renders a table", () => {
    expect(wrapper.find("table").exists()).toBe(true);
  });

  it("Popup close event emitted on close action", async () => {
    const btn = wrapper.find(".closeBtn");
    await btn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("close");
  });
});
