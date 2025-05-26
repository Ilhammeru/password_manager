<script setup>
import StatsWidget from "../components/dashboard/StatsWidget.vue";
import SalesTrendWidget from "../components/dashboard/SalesTrendWidget.vue";
import RecentActivityWidget from "../components/dashboard/RecentActivityWidget.vue";
import ProductOverviewWidget from "../components/dashboard/ProductOverviewWidget.vue";
import axios from "axios";

const checkButton = async () => {
    const resp = await axios.post('/check');

    console.log('resp', resp);
}
</script>

<template>
    <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div class="md:col-span-4">

                <!-- start upper content 2 item -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card class="w-full cursor-pointer">
                        <template #content>
                            <div class="items-header border-1 border-blue-400 bg-sky-300/20"
                                :style="{
                                    maxWidth: '60px',
                                    fontSize: '18px',
                                    padding: '4px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }">
                                <span class="h-[20px] text-sky-800">***</span>
                            </div>

                            <p class="mt-2 text-[14px] font-bold">All Passwords</p>

                            <p class="value mt-5 text-[22px] font-bold">
                                5
                            </p>
                        </template>
                    </Card>
                    <Card class="w-full cursor-pointer">
                        <template #content>
                            <div class="items-header border-1 border-blue-400 bg-sky-300/20"
                                :style="{
                                    maxWidth: '60px',
                                    fontSize: '18px',
                                    padding: '4px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }">
                                <span class="h-[20px] text-sky-800">***</span>
                            </div>

                            <p class="mt-2 text-[14px] font-bold">Payments Apps</p>

                            <p class="value mt-5 text-[22px] font-bold">
                                10
                            </p>
                        </template>
                    </Card>

                </div>
                <!-- end upper content 2 item -->

                <!-- start last content 2 item -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Card class="w-full cursor-pointer">
                        <template #content>
                            <div class="items-header border-1 border-blue-400 bg-sky-300/20"
                                :style="{
                                    maxWidth: '60px',
                                    fontSize: '18px',
                                    padding: '4px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }">
                                <span class="h-[20px] text-sky-800">***</span>
                            </div>

                            <p class="mt-2 text-[14px] font-bold">Social Media Apps</p>

                            <p class="value mt-5 text-[22px] font-bold">
                                5
                            </p>
                        </template>
                    </Card>
                    <Card class="w-full cursor-pointer">
                        <template #content>
                            <div class="items-header border-1 border-blue-400 bg-sky-300/20"
                                :style="{
                                    maxWidth: '60px',
                                    fontSize: '18px',
                                    padding: '4px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }">
                                <span class="h-[20px] text-sky-800">***</span>
                            </div>

                            <p class="mt-2 text-[14px] font-bold">Websites</p>

                            <p class="value mt-5 text-[22px] font-bold">
                                10
                            </p>
                        </template>
                    </Card>

                </div>
                <!-- end last content 2 item -->

                <Divider :style="{
                    margin: '40px 0'
                }" />

                <!-- start password generator -->
                 <div class="grid grid-cols-1">
                    <Card>
                        <template #content>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="generator-icon">
                                    
                                </div>

                                <div class="generator-content">
                                    <p class="generator-title font-bold text-[24px]">Generate Password</p>
                                </div>
                            </div>
                        </template>
                    </Card>
                 </div>
                <!-- end password generator -->

            </div>
        </div>
    </div>
</template>