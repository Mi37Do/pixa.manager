<template>
    <div class="w-full h-full flex flex-col overflow-hidden">
        <top-bar>
            <template v-slot:page-title>
                <div class="w-full h-16 py-3 px-4 border-b pixa-border flex items-start justify-between  sideMenu">
                    <search-input @search-query="getSearchQuery" />
                    <div class="w-fit h-full flex gap-2">
                        <button class="btn btn-sm pixa-btn w-10 pixa-btn-float p-0">
                            <slider-v-icon class="w-5 h-5" />
                        </button>
                        <button class="btn btn-sm pixa-btn btn-primary w-10 p-0">
                            <plus-icon class="w-5 h-5" />
                        </button>
                        <span class="h-full border-r pixa-border ml-2"></span>
                    </div>
                </div>
            </template>
        </top-bar>

        <div class="w-full h-full overflow-hidden flex">
            <div class="w-full h-full overflow-auto no-scrollbar flex flex-col gap-4 px-4 capitalize">

                <div class="w-full h-fit flex flex-col gap-4  mt-6">
                    <span class="pixa-title">tasks</span>
                    <div class="w-full h-fit grid grid-cols-4 gap-4">

                        <div class="w-full h-fit pixa-card p-4 overflow-hidden">
                            <div class="w-full h-full flex flex-col gap-4 relative ">
                                <sync-icon class="absolute w-28 -top-10 -right-6 fill-primary opacity-25" />
                                <span class="text-5xl font-bold text-primary">30</span>
                                <span>ongoing</span>
                            </div>
                        </div>

                        <div class="w-full h-fit pixa-card p-4 overflow-hidden">
                            <div class="w-full h-full flex flex-col gap-4 relative ">
                                <clock-icon class="absolute w-28 -top-10 -right-6 fill-secondary opacity-25" />
                                <span class="text-5xl font-bold text-secondary">12</span>
                                <span>in process</span>
                            </div>
                        </div>

                        <div class="w-full h-fit pixa-card p-4 overflow-hidden">
                            <div class="w-full h-full flex flex-col gap-4 relative ">
                                <file-check-icon class="absolute w-28 -top-10 -right-6 fill-success opacity-25" />
                                <span class="text-5xl font-bold text-success">04</span>
                                <span>complet</span>
                            </div>
                        </div>


                    </div>
                    <div class="w-full h-[6000px]"></div>
                </div>
            </div>

            <div class="w-[600px] h-full bg-red-200"></div>
        </div>

    </div>
</template>

<script setup>
import plusIcon from '../../assets/icons/plusIcon.vue';
import sliderVIcon from '../../assets/icons/sliderVIcon.vue';
import searchInput from '../commun/searchInput.vue';
import topBar from '../commun/topBar.vue';
import syncIcon from '../../assets/icons/syncIcon.vue';
import clockIcon from '../../assets/icons/clockIcon.vue';
import fileCheckIcon from '../../assets/icons/fileCheckIcon.vue';
const getSearchQuery = (searchQueryText) => {
    console.log(searchQueryText);
}

</script>

<style lang="scss" scoped></style>