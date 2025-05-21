<script setup>
import AppFooter from "./layout/AppFooter.vue";
import AppTopbar from "./layout/AppTopbar.vue";
</script>

<template>
    <div
        class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6"
    >
        <AppTopbar />
        <router-view></router-view>
        <AppFooter />
    </div>
</template>