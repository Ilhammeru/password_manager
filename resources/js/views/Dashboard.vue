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
        <div class="grid grid-flow-col grid-rows-2 gap-4">
            <div class="row-span-3">
                <div class="flex w-full gap-3 px-3">
                    <Card class="w-full">
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
                    <Card class="w-full">
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

                <div class="flex w-full gap-3 px-3 mt-3">
                    <Card class="w-full">
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
                    <Card class="w-full">
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

                <Divider :style="{
                    margin: '40px 0'
                }" />
            </div>
            <div class="col-span-2">2</div>
        </div>
    </div>
</template>