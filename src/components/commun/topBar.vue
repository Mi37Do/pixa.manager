<template>
    <div class="w-full h-16 sideMenu">
        <div class="w-full h-full border-b pixa-border py-3 px-4">
            <div class="w-full h-full  flex items-center justify-between">

                <transition name="fade" mode="out-in">
                    <slot name="page-title" />
                </transition>


                <div class="flex gap-2">
                    <button class="btn btn-sm pixa-btn pixa-btn-float w-10 p-0">
                        <chat-icon class="w-5 h-5" />
                    </button>
                    <button class="btn btn-sm pixa-btn pixa-btn-float w-10 p-0">
                        <bell-icon class="w-7 h-7" />
                    </button>
                    <button class="btn btn-sm pixa-btn pixa-btn-float w-10 p-0 overflow-hidden">
                        <img src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            class="w-full h-full object-cover rounded" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import bellIcon from '../../assets/icons/bellIcon.vue';
import chatIcon from '../../assets/icons/chatIcon.vue';

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