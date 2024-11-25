<template>
  <main>
    <Layout>
      <router-view />
    </Layout>
  </main>
</template>

<script>
import Layout from "./components/frontend/layout/Layout.vue";
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
/* Ajoutez des styles globaux si nécessaire */
</style>
