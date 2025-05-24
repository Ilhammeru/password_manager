<script setup>
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
    <div>
        <AppTopbar></AppTopbar>
        <div class="mt-5 mb-5">
            <router-view></router-view>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>