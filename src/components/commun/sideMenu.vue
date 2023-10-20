<template>
    <div class="w-full h-full sideMenu px-4 pb-4 pt-3 flex flex-col border-r pixa-border">
        <div class="w-full h-10 flex items-center justify-center">
            <span class="pixa-title uppercase">pixa.manager</span>
        </div>
        <div class="w-full grow flex flex-col justify-between mt-7">
            <nav class="w-full h-20 flex flex-col gap-2 nav-menu">

                <router-link :to="{ name: 'dashboard' }"
                    class="btn btn-sm pixa-btn capitalize flex items-center justify-between nav-element">
                    dashboard
                    <app-icon class="w-5 h-5" />
                </router-link>

                <router-link :to="{ name: 'projects' }"
                    class="btn btn-sm pixa-btn capitalize flex items-center justify-between nav-element">projects
                    <folder-icon class="w-5 h-5" />
                </router-link>


                <router-link :to="{ name: 'support' }"
                    class="btn btn-sm pixa-btn capitalize flex items-center justify-between nav-element">support
                    <comment-question-icon class="w-5 h-5" />
                </router-link>

                <router-link :to="{ name: 'feedback' }"
                    class="btn btn-sm pixa-btn capitalize flex items-center justify-between nav-element">feedback
                    <feedback-icon class="w-5 h-5" />
                </router-link>

            </nav>


            <theme-switcher />
        </div>

    </div>
</template>

<script setup>
import appIcon from '../../assets/icons/appIcon.vue';
import themeSwitcher from './themeSwitcher.vue';
import folderIcon from '../../assets/icons/folderIcon.vue';
import feedbackIcon from '../../assets/icons/feedbackIcon.vue';
import commentQuestionIcon from '../../assets/icons/commentQuestionIcon.vue';
</script>

<style lang="scss" scoped>
nav {
    a {

        &.router-link-exact-active {
            background-color: #6366f1;
            box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.4);
            color: #fff;
            fill: #fff;
        }

        &.router-link-active {
            background-color: #6366f1;
            box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.4);
            color: #fff;
            fill: #fff;
        }
    }

}
</style>