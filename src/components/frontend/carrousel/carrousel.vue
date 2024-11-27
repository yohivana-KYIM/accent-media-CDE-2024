<template>
  <div class="containers">
    <div class="arrow l" @click="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
      >
        <path d="M15 18l-6-6 6-6v12z" fill="#324C9C" />
      </svg>
    </div>

    <div class="slide slide-1">
      <div class="caption">
        <h3 data-text="Bienvenue à la Caisse des Dépôts et Consignations"></h3>
        <p
          data-text="Des services de consignation et de dépôt fiables pour votre tranquillité d'esprit."
        ></p>
      </div>
    </div>

    <div class="slide slide-2">
      <div class="caption">
        <h3 data-text="La Banque, les Administrations Publiques"></h3>
        <p data-text="Au coeur de la finance camerounaise"></p>
      </div>
    </div>

    <div class="slide slide-3">
      <div class="caption">
        <h3 data-text="Sécurisez Vos Économies avec la CDEC Cameroun"></h3>
        <p
          data-text="Des solutions sur mesure pour la gestion de vos finances personnelles et professionnelles."
        ></p>
      </div>
    </div>

    <div class="arrow r" @click="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
      >
        <path d="M9 18l6-6-6-6v12z" fill="#324C9C" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let slides;
let current = 0;
let autoScrollInterval;
let typingInterval;

const cls = () => {
  slides.forEach((slide) => {
    slide.style.visibility = "hidden"; // Cacher la diapositive
    slide.style.opacity = 0; // Réinitialiser l'opacité
  });
};

const next = () => {
  cls();
  current = (current + 1) % slides.length; // Passer à la diapositive suivante
  showSlide();
};

const prev = () => {
  cls();
  current = (current - 1 + slides.length) % slides.length; // Passer à la diapositive précédente
  showSlide();
};

const showSlide = () => {
  slides[current].style.visibility = "visible"; // Rendre la diapositive visible
  slides[current].style.opacity = 0; // Commencer avec une opacité de 0

  let x = 0;
  const intX = setInterval(() => {
    x += 0.1;
    slides[current].style.opacity = x; // Augmenter l'opacité
    if (x >= 1) {
      clearInterval(intX);
    }
  }, 100);

  startTyping(slides[current]);
};

const typeText = (element, text, callback) => {
  clearInterval(typingInterval);
  element.innerHTML = "";
  let i = 0;
  typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, 100);
};

const startTyping = (slide) => {
  const h3 = slide.querySelector("h3");
  const p = slide.querySelector("p");
  typeText(h3, h3.getAttribute("data-text"), () => {
    typeText(p, p.getAttribute("data-text"));
  });
};

const start = () => {
  cls();
  slides[current].style.visibility = "visible"; // Rendre la première diapositive visible
  slides[current].style.opacity = 1; // Assurer que l'opacité est à 1
  startTyping(slides[current]);
};

const autoScroll = () => {
  autoScrollInterval = setInterval(next, 20000);
};

const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};

onMounted(() => {
  slides = document.querySelectorAll(".slide");
  start();
  autoScroll();
});

onBeforeUnmount(() => {
  stopAutoScroll();
  clearInterval(typingInterval);
});
</script>
<style scoped>
@import "../../../css/accueil.css";

.containers {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden; /* Commencer par cacher les diapositives */
  opacity: 0; /* Opacité initiale */
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out; /* Transition fluide pour l'opacité */
}

.arrow {
  cursor: pointer;
}

.l {
  left: 20px;
}

.r {
  right: 20px;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .caption h3 {
    font-size: 2em;
  }

  .caption p {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 768px) {
  .caption {
    width: 90%;
    padding: 15px;
  }

  .caption h3 {
    font-size: 1.8em;
    margin-bottom: 15px;
  }

  .caption p {
    font-size: 1em;
  }

  .arrow {
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 480px) {
  .caption {
    width: 95%;
    padding: 10px;
  }

  .caption h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .caption p {
    font-size: 0.9em;
    line-height: 1.4;
  }

  .arrow {
    width: 35px;
    height: 35px;
  }
}
</style>
