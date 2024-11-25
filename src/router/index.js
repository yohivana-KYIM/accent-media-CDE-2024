import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ContactUs from "../components/frontend/ContactUs/contact_us.vue";
import LacDec from "../components/frontend/LacDec/lacdec.vue";
import Missions from "../components/frontend/Missions/missions.vue";

import ConsAdmin from "../components/frontend/Serviceslist/cons_admin.vue";
import ConsJudiciaire from "../components/frontend/Serviceslist/cons_judiciaire.vue";
import ConsConvention from "../components/frontend/Serviceslist/cons_convention.vue";
import Actualites from "../components/frontend/Publications/actualites.vue";
import GuideUtilisateurs from "../components/frontend/Publications/guide_utilisateurs.vue";
import Communique from "../components/frontend/Publications/communique.vue"; // Assurez-vous que le chemin est correct
import Partenaires from "../components/frontend/partenaires/partenaires.vue"; // Vérifiez le nom et la casse
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact_us",
    name: "contact_us",
    component: ContactUs,
  },
  { path: "/lacdec", name: "lacdec", component: LacDec },
  { path: "/missions", name: "missions", component: Missions },
  { path: "/partenaires", name: "partenaires", component: Partenaires },
  { path: "/cons_admin", name: "cons_admin", component: ConsAdmin },
  {
    path: "/cons_judiciaire",
    name: "cons_judiciaire",
    component: ConsJudiciaire,
  },
  {
    path: "/guide_utilisateurs",
    name: "guide_utilisateurs",
    component: GuideUtilisateurs,
  },
  {
    path: "/actualites",
    name: "actualites",
    component: Actualites,
  },
  {
    path: "/cons_convention",
    name: "cons_convention",
    component: ConsConvention,
  },
  {
    path: "/communique",
    name: "communique",
    component: Communique,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
