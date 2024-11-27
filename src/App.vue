<template>
  <main>
    <!-- <Loader /> -->
    <Layout v-if="!isAdminRoute">
      <router-view />
    </Layout>
    <AdminLayout v-else>
      <router-view />
    </AdminLayout>
  </main>
</template>

<script>
import Layout from "./components/frontend/layout/Layout.vue";

import AdminLayout from "./components/Admin/Layout.vue"; //
export default {
  name: "App",
  components: {
    Layout,
    AdminLayout,
  },

  computed: {
    isAdminRoute() {
      // Check if the current route is an Admin route
      return this.$route.path.startsWith("/Admin");
    },
  },
};
</script>

<style>
/* Styles globaux si nécessaire */
</style>
