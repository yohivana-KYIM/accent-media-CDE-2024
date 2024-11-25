<template>
  <section class="section_stat">
    <div class="divider">Principaux Indicateurs</div>
    <!-- <h1 class="service_title"> Principaux Indicateurs de 2023</h1> -->
    <div class="stat_information">
      <div class="wrapper">
        <div class="num_information">
          <!-- <i class="fa-solid fa-utensils"></i> -->
          <span class="num" data-val="400">400</span>
          <hr />
          <span class="text">Dépôt CDEC (en milliard)</span>
        </div>
        <div class="num_information">
          <!-- <i class="fa-solid fa-star"></i> -->
          <span class="num" data-val="560">560</span>
          <hr />
          <span class="text">Bilan consolide</span>
        </div>
        <div class="num_information">
          <!-- <i class="fa-solid fa-print"></i> -->
          <span class="num" data-val="600">600</span>
          <hr />
          <span class="text">Part du groupe (en %)</span>
        </div>
        <div class="num_information">
          <!-- <i class="fa-regular fa-user"></i> -->
          <span class="num" data-val="360">360</span>
          <hr />
          <span class="text">PNB consolide (en milliard)</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "../../../css/accueil.css";
</style>
<script setup>
  let valueDisplays = document.querySelectorAll(".num")
  let intervall  = 5000

    valueDisplays.forEach((valueDisplay) => {
    let starvalue = 0
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(intervall / endvalue)

    let counter = setInterval(function() {
        starvalue +=1
        valueDisplay.textContent = starvalue
        if(starvalue == endvalue){
            clearInterval(counter)
        }
    }, duration)

})
</script>
