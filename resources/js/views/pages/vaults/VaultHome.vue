<script setup>
import { ref } from 'vue';
import RecordForm from './RecordForm.vue';

const showRecordForm = ref(false);

const openRecordForm = () => {
    showRecordForm.value = true;
};

const hideRecordForm = () => {
    showRecordForm.value = false;
};
</script>

<template>
    <div class="rounded-[6px] w-full h-auto md:h-[800px] bg-white p-5">
        <div class="h-full m-auto flex items-center justify-center">

            <RecordForm :is-show="showRecordForm" @onHide="hideRecordForm" />

            <div class="grid grid-cols-12 gap-0 md:gap-[30px] w-full max-w-full md:max-w-[950px]">
                <div class="col-span-12 mb-10">
                    <div class="text-center">
                        <p class="font-bold text-xl md:text-2xl" :style="{
                            margin: '0'
                        }">WELCOME TO CIPHERVAULT</p>
                        <p class="text-grey-500 text-sm md:text-md">Your digital fortress starts here.</p>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-4 w-full mb-10 md:mb-0">
                    <div class="flex items-center justify-center">
                        <Skeleton width="15rem" height="5rem"></Skeleton>
                    </div>

                    <div class="description mt-2 w-full">
                        <div class="text-center">
                            <i class="pi pi-lock"></i>
                            <span class="font-bold text-lg ms-3">Records</span>
                        </div>
                        
                        <span class="w-full ms-2 flex items-center justify-center">Save password, cards, notes and others.</span>

                        <div class="flex items-center justify-center mt-3">
                            <Button type="button"
                                severity="primary"
                                label="Create Record"
                                icon="pi pi-plus"
                                size="small"
                                @click.prevent="openRecordForm"></Button>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-4 w-full mb-10 md:mb-0">
                    <div class="flex items-center justify-center">
                        <Skeleton width="15rem" height="5rem"></Skeleton>
                    </div>

                    <div class="description mt-2 w-full">
                        <div class="text-center">
                            <i class="pi pi-folder"></i>
                            <span class="font-bold text-lg ms-3">Folders</span>
                        </div>
                        
                        <span class="w-full ms-2 flex items-center justify-center">Organize secrets like a pro.</span>

                        <div class="flex items-center justify-center mt-3">
                            <Button type="button" severity="primary" label="Create Folder" icon="pi pi-plus" size="small"></Button>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-4 w-full mb-10 md:mb-0">
                    <div class="flex items-center justify-center">
                        <Skeleton width="15rem" height="5rem"></Skeleton>
                    </div>

                    <div class="description mt-2 w-full">
                        <div class="text-center">
                            <i class="pi pi-share-alt"></i>
                            <span class="font-bold text-lg ms-3">Share</span>
                        </div>
                        
                        <span class="w-full ms-2 flex items-center justify-center">Share securely—when you're ready.</span>

                        <div class="flex items-center justify-center mt-3">
                            <Button type="button" severity="primary" label="Share Your Secret" icon="pi pi-share-alt" size="small"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>