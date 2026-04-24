import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Hospitality Staff at Ikkoku (Japan)",
        position: "Hall & Kitchen",
        from: "2025",
        to: "2026",
        link: "https://share.google/EkWYpcO28KDsASyYy",
      },  
      {
        id: 2,
        name: "XCIDIC",
        position: "Front-End Developer (Intern)",
        from: "2022",
        to: "2023",
        link: "https://xcidic.com/",
      },  
      {
        id: 3,
        name: "Mahaka Group",
        position: "Content Creator & Planner",
        from: "2022",
        to: "2022",
        link: "https://share.google/EkWYpcO28KDsASyYy",
      },  
      {
        id: 4,
        name: "Freelance",
        position: "Web, Content & other Tech Related",
        from: "2022",
        to: "current",
        link: "www.linkedin.com/in/vito-anggana-3169b7191",
      },  
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
