import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "KPR ",
        image: new URL("../assets/featured/kpr.png", import.meta.url)
          .href,
        description:
          "A website that regulates and manages mortgage loans, made using Laravel.",
        tech: ["Laravel", "MySQL", "Bootstrap"],
        link: "https://kprtniad.btn.co.id/",
        featured: true,
      },
      {
        id: 3,
        name: "KBRI-Lima",
        image: new URL("../assets/featured/kbri.png", import.meta.url).href,
        description:
          "A website that represents the Indonesian government abroad. Made mainly using ReactJS.",
        tech: ["React JS", "TailwindCSS"],
        link: "https://indonesiacomercio.pe/",
        featured: true,
      },
    ],
    grave: [
      {
        id: 1,
        name: "Absensi-Digital",
        image: new URL("../assets/featured/case_changer.jpg", import.meta.url)
          .href,
        description:
          "Web-based digital attendance application and flutter.",
        tech: ["Flutter", "Pandas"],
        link: "https://github.com/vitoanggana/Absensi-Digital",
      },
      {
        id: 2,
        name: "Accounting",
        image: new URL("../assets/featured/tic_tac_toe.jpg", import.meta.url)
          .href,
        description:
          "Accounting-based Application",
        tech: ["Laravel", "Bootstrap"],
        link: "https://github.com/vitoanggana/accounting",
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
