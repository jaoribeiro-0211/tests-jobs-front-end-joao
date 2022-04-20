<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- Home -->
  <main class="container p-3 p-sm-5 rounded-3 shadow">
    <h1 class="text-center fw-bolder">Get started today</h1>
    <p class="text-center mt-1 mb-4">
      Choose the right plan and start creating projects
    </p>
    <RouterView />
  </main>
</template>

<style >
@import "@/assets/base.css";

main {
  background-color: white;
}
h1 {
  color: var(--title-color);
}

p {
  color: var(--subtitle-color);
  font-weight: 500;
  font-family: "Nunito", sans-serif;
}
</style>
