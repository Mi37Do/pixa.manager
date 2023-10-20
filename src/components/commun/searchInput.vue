<template>
    <div class="w-96 h-10 relative overflow-hidden flex items-center">
        <input v-model="searchQuery" :class="searchQuery ? 'pl-10' : 'pl-3'" type="text" placeholder="Recherche" class="pixa-input w-96 transition-all duration-200
                ">
        <button @click="clearSearch" :class="searchQuery ? 'left-1 opacity-100' : '-left-14 opacity-0'"
            class="btn btn-sm btn-square absolute  btn-ghost transition-all duration-300">
            <times-icon class="w-5 h-5 fill-slate-500 hover:fill-red-500" />
        </button>
        <search-icon :class="searchQuery ? 'fill-primary' : 'fill-slate-500'" class="w-5 h-5 absolute right-3" />
    </div>
</template>

<script setup>
import searchIcon from '@/assets/icons/searchIcon.vue'
import { ref, watch } from 'vue'
import timesIcon from '@/assets/icons/timesIcon.vue'

const searchQuery = ref('')
const emits = defineEmits(['searchQuery'])

const clearSearch = () => {
    searchQuery.value = ''
}

watch(() => searchQuery.value, () => {
    emits('searchQuery', searchQuery.value)
})
</script>

<style lang="scss" scoped></style>