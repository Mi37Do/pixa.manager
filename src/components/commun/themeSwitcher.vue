<template>
    <div @click="enabled = !enabled"
        class="w-full h-14 border pixa-border rounded-lg flex items-center justify-between px-3 cursor-pointer">
        <span class="text-xs font-medium uppercase">mode : {{ userTheme === 'light-theme' ? 'light' : 'dark' }}</span>
        <div class="w-8 h-8 border pixa-border rounded flex items-center justify-center relative">
            <sun-icon :class="userTheme === 'light-theme' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'"
                class="w-6 h-6 absolute transition-all duration-300 fill-amber-500" />
            <moon-icon :class="userTheme === 'dark-theme' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'"
                class="w-5 h-5 absolute transition-all duration-300 fill-indigo-200" />
        </div>
    </div>
</template>
  
<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'
import sunIcon from '../../assets/icons/sunIcon.vue'
import moonIcon from '../../assets/icons/moonIcon.vue'

const enabled = ref(true)
const userTheme = ref("light-theme")

onBeforeMount(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
})

onMounted(() => {

})

watch(() => enabled.value, () => {
    toggleTheme()
})


const toggleTheme = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
        setTheme("dark-theme");
    } else {
        setTheme("light-theme");
    }
}

const setTheme = (theme) => {

    localStorage.setItem("user-theme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
}

const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
        return "dark-theme";

    } else {
        return "light-theme";

    }
}

const getTheme = () => {
    return localStorage.getItem("user-theme");
}
</script>