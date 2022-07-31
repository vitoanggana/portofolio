import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Mahaka Media",
        position: "Content Creator/Planner",
        from: "2022",
        to: "Cur.",
        link: "https://mahakamedia.com/",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
