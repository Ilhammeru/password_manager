<script setup>
import { ref } from "vue";
import { useLayout } from "../../composables/useLayout";
import AppConfig from "./AppConfig.vue";

const { isDarkMode, toggleDarkMode } = useLayout();

const menuDetail = ref();

const toggleProfile = (event) => {
    menuDetail.value.toggle(event)
}
</script>

<template>
    <div
        class="bg-surface-0 dark:bg-surface-900 p-6 rounded-2xl max-w-7xl mx-auto border border-surface-200 dark:border-surface-700 w-full"
    >
        <div class="block md:flex justify-between items-center">
            <div class="flex gap-10 items-center">
                <span class="hidden sm:flex flex-col"
                    ><span
                        class="text-xl font-light text-surface-700 dark:text-surface-100 leading-none"
                        >CipherVault</span
                    >
                    <span class="font-medium text-primary leading-tight text-[10px]"
                        >Locked Down. Not Locked Out.</span
                    ></span
                >

                <InputGroup class="w-full md:size-auto">
                    <InputGroupAddon>
                        <i class="pi pi-search"></i>
                    </InputGroupAddon>
                    <InputText type="text" placeholder="Search ..."
                        :style="{
                            borderLeft: 'none'
                        }" />
                </InputGroup>
            </div>
            <div class="block md:flex items-center gap-2">
                <button
                    type="button"
                    class="w-10 h-10 hidden md:flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950"
                    @click="toggleDarkMode"
                >
                    <i
                        :class="[
                            'pi text-base',
                            { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode },
                        ]"
                    />
                </button>
                <Button variant="text" aria-haspopup="true" aria-controls="profile-overlays"
                    severity="secondary"
                    type="button"
                    class="size-auto md:w-full mt-2 md:mt-0"
                    @click.prevent="toggleProfile"
                    :style="{
                        width: 'auto !important',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    }">
                    <template #default>
                        <Avatar shape="circle"
                            label="I">
                        </Avatar>

                        <span class="text-dark">
                            gumilang.dev@gmail.com
                        </span>
                    </template>
                </Button>

                <Popover ref="menuDetail">
                    <div class="flex flex-col gap-4 size-auto md:w-[25rem]">
                        <div class="flex align-center justify-end">
                            <button
                                type="button"
                                class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all text-surface-900 dark:text-surface-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950"
                                @click="toggleDarkMode"
                            >
                                <i
                                    :class="[
                                        'pi text-base',
                                        { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode },
                                    ]"
                                />
                            </button>

                            <Button
                                v-styleclass="{
                                    selector: '@next',
                                    enterFromClass: 'hidden',
                                    enterActiveClass: 'animate-scalein',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'animate-fadeout',
                                    hideOnOutsideClick: true,
                                }"
                                icon="pi pi-cog"
                                text
                                rounded
                                aria-label="Settings"
                            />
                            <AppConfig />
                        </div>
                        <div>
                            <span class="font-medium block mb-2">Share this document</span>
                            <InputGroup>
                                <InputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]"></InputText>
                                <InputGroupAddon>
                                    <i class="pi pi-copy"></i>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <div>
                            <span class="font-medium block mb-2">Invite Member</span>
                            <InputGroup>
                                <InputText disabled />
                                <Button label="Invite" icon="pi pi-users"></Button>
                            </InputGroup>
                        </div>
                        <div>
                            <span class="font-medium block mb-2">Team Members</span>
                            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                                <li v-for="member in members" :key="member.name" class="flex items-center gap-2">
                                    <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`" style="width: 32px" />
                                    <div>
                                        <span class="font-medium">{{ member.name }}</span>
                                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                                    </div>
                                    <div class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm">
                                        <span>{{ member.role }}</span>
                                        <i class="pi pi-angle-down"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Popover>
                <!-- <div class="relative">
                    <Button
                        v-styleclass="{
                            selector: '@next',
                            enterFromClass: 'hidden',
                            enterActiveClass: 'animate-scalein',
                            leaveToClass: 'hidden',
                            leaveActiveClass: 'animate-fadeout',
                            hideOnOutsideClick: true,
                        }"
                        icon="pi pi-cog"
                        text
                        rounded
                        aria-label="Settings"
                    />
                    <AppConfig />
                </div> -->
            </div>
        </div>
    </div>
</template>