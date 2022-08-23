import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Freelancer",
        position: "Front-End Web Developer",
        from: "2020",
        to: "Cur.",
        link: "https://www.linkedin.com/in/vitoprwr/",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
