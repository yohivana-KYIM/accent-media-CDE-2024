<template>
  <section class="section_stat">
    <div class="divider">Principaux Indicateurs de 2023</div>

    <div class="stat_information">
      <div class="wrapper">
        <div class="num_information">
          <!-- <i class="fa-solid fa-utensils"></i> -->
          <span class="num" data-val="1564">1 564 </span>
          <hr />
          <span class="text"
            >Total dépôts et consignations (millions FCFA)</span
          >
        </div>
        <div class="num_information">
          <!-- <i class="fa-solid fa-star"></i> -->
          <span class="num" data-val="40">40 </span>
          <hr />
          <span class="text"
            >Provisions pour risques et charges(millions FCFA)</span
          >
        </div>
        <div class="num_information">
          <!-- <i class="fa-solid fa-print"></i> -->
          <span class="num" data-val="1587"> 1 587 </span>
          <hr />
          <span class="text">Total des fonds transférés(millions FCFA) </span>
        </div>
        <div class="num_information">
          <!-- <i class="fa-regular fa-user"></i> -->
          <span class="num" data-val="3917">3 917 </span>
          <hr />
          <span class="text">Bilan(millions FCFA)</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "../../../css/accueil.css";
</style>
<script setup>
let valueDisplays = document.querySelectorAll(".num");
let intervall = 5000;

valueDisplays.forEach((valueDisplay) => {
  let starvalue = 0;
  let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(intervall / endvalue);

  let counter = setInterval(function () {
    starvalue += 1;
    valueDisplay.textContent = starvalue;
    if (starvalue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});
</script>
