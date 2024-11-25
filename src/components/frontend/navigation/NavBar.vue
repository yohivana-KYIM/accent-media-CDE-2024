// src/components/NavBar.vue
<template>
  <nav>
    <div class="logo">
      <router-link to="/"><img src="../../../assets/cdec.png" alt="" /></router-link>
    </div>
    <div class="toggle">
      <a href="#"><ion-icon name="menu-outline"></ion-icon></a>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/" class="lien">Accueil</router-link>
      </li>
      <li>
        <a href="#" class="lien">CDEC</a>
        <ul class="dropdown">
          <li>
            <router-link to="/lacdec" class="lien">Présentation</router-link>
          </li>
          <li>
            <router-link to="/missions" class="lien">Missions</router-link>
          </li>
          <li>
            <a class="lien">Gouvernance</a>
          </li>
          <li>
            <a  class="lien">Organigramme</a>
          </li>
          <li>
            <a class="lien">Textes réglementaires</a>
          </li>
          <li>
            <router-link to="/partenaires" class="lien"
              >Coopération et partenariats</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="lien">Services</a>
        <ul class="dropdown">
          <li>
            <router-link to="/cons_admin" class="lien"
              >Consignation Administrative</router-link
            >
          </li>
          <li>
            <router-link to="/cons_judiciaire" class="lien"
              >Consignation Judiciaire</router-link
            >
          </li>
          <li>
            <router-link to="/cons_convention" class="lien"
              >Consignation Conventionnelle</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="lien">Actualités</a>
        <ul class="dropdown">
          <li>
            <router-link to="/communique" class="lien">Communiqués</router-link>
          </li>
          <li>
            <router-link to="/actualites" class="lien">Publications</router-link>
          </li>
          <li>
            <a class="lien">Interviews</a>
          </li>
          <li>
            <a class="lien">Mediathèque</a>
          </li>
          <!-- <li>
            <router-link to="/guide_utilisateurs" class="lien"
              >Guide utilisateur</router-link
            >
          </li> -->
        </ul>
      </li>
      <li>
          <a class="lien">Projets et Programme</a>
      </li>
    </ul>
  </nav>
  <section class="flag_cameroun">
    <div></div>
    <div><img class="star" src="../../../assets/star.png" alt="" /></div>
    <div></div>
  </section>
</template>

<script setup>
// Ajout de la fonctionnalité toggle menu pour mobile
import { onMounted } from "vue";

onMounted(() => {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  toggle?.addEventListener("click", (e) => {
    e.preventDefault();
    menu?.classList.toggle("active");
  });
});
</script>

<style scoped>
@import "../../../css/accueil.css";
</style>
