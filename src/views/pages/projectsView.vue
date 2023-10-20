<template>
    <div class="w-full h-full">
        <router-view></router-view>
    </div>
</template>

<script setup>
import topBar from '../../components/commun/topBar.vue';
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease-out;
}
</style>