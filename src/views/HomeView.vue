<template>
  <div class="drawer lg:drawer-open w-full h-screen">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col w-full h-full overflow-hidden">
      <!-- Page content here -->
      <RouterView>
      </RouterView>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-0 w-60 h-full text-base-content">
        <!-- Sidebar content here -->
        <side-menu />
      </ul>

    </div>
  </div>
</template>
<script setup>
import sideMenu from "../components/commun/sideMenu.vue";
import topBar from "../components/commun/topBar.vue";

</script>

<style scoped></style>