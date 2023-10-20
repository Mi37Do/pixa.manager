<template>
    <div class="w-full h-full flex flex-col">
        <top-bar>
            <template v-slot:page-title>
                <span class="pixa-title capitalize">support</span>
            </template>
        </top-bar>

        <div class="w-full grow overflow-hidden">
            <div class="w-full h-full overflow-auto px-4">
                <RouterView v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </RouterView>
            </div>
        </div>

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