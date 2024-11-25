<template>
  <section class="body_actualite">
    <div class="titre_actualite">
      <h1>Nos partenaires</h1>
    </div>
  </section>

  <section class="section_partenaire">
    <div class="div_partenaire">
      <div class="divider">Direction générale des Impôts</div>
      <div class="info_partenaire">
        <img
          src="../../assets/dgi.png"
          alt="Logo de la Direction générale des Impôts"
        />
        <p>
          La Direction Générale des Impôts (DGI) du Cameroun est l'institution
          responsable de la collecte des impôts et taxes, ainsi que de la
          gestion de la fiscalité au Cameroun. Elle joue un rôle crucial dans le
          financement des dépenses publiques et le développement économique du
          pays.
        </p>
      </div>
    </div>
    <div class="div_partenaire">
      <div class="divider">La Caisse Nationale de Prévoyance Sociale</div>
      <div class="info_partenaire">
        <img src="../../assets/cnps.png" alt="Logo de la CNPS" />
        <p>
          La Caisse Nationale de Prévoyance Sociale (CNPS) est l'institution
          camerounaise responsable de la gestion de la sécurité sociale. Elle
          joue un rôle crucial dans la protection sociale des travailleurs et de
          leurs familles, et contribue au bien-être social au Cameroun.
        </p>
      </div>
    </div>
    <div class="div_partenaire">
      <div class="divider">Energy of Cameroon</div>
      <div class="info_partenaire">
        <img src="../../assets/eneo.png" alt="Logo d'Energy of Cameroon" />
        <p>
          ENEO (Energy of Cameroon) est la principale société de production et
          de distribution d'électricité au Cameroun. Elle joue un rôle crucial
          dans l'approvisionnement en électricité du pays, contribuant ainsi au
          développement économique et social.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Le code JavaScript lié à Owl Carousel devrait être placé correctement dans un fichier séparé ou dans `mounted()` pour être compatible avec Vue.
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
</script>

<script>
export default {
  mounted() {
    // Initialisation du carrousel
    // $(".caroussel_actualite").owlCarousel({
    //   loop: true,
    //   margin: 20,
    //   nav: false,
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   responsive: {
    //     0: { items: 1 },
    //     600: { items: 2 },
    //     1000: { items: 3 },
    //   },
    // });

  //   $(".owl-carousel").owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: false,
  //     autoplay: true,
  //     autoplayTimeout: 1000,
  //     responsive: {
  //       0: { items: 1 },
  //       600: { items: 3 },
  //       1000: { items: 5 },
  //     },
  //   });
  },
};
</script>

<style>
@import "../../../css/nos_partenaires.css";

/* Ajoutez ici vos styles CSS supplémentaires si nécessaire */
</style>
