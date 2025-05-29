<script setup>
import { ref, watch } from 'vue';

const visible = ref(false);

const folderListRef = ref();

const selectedFolderName = ref('');

const locationName = ref('');

const showFolderSuggestion = (event) => {
    folderListRef.value.toggle(event);
};

const onNodeSelect = (node) => {
    selectedFolderName.value = node.label;
};

const nodes = ref([
    {
        key: 1,
        label: 'My Vault',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: []
    },
    {
        key: 2,
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: 4,
                label: 'Work',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-folder',
                children: []
            },
            {
                key: 3,
                label: 'Home',
                data: 'Home Folder',
                icon: 'pi pi-fw pi-folder',
                children: []
            }
        ]
    },
]);
const selectedKey = ref(null);

const chooseFolder = () => {
    locationName.value = selectedFolderName.value

    showFolderSuggestion();
};
</script>

<template>
    <Dialog v-model:visible="visible"
        header="Create Folder"
        :style="{ width: '25rem' }"
        position="right"
        :modal="true"
        :draggable="false"
        @hide="$emit('on-hide')">
    
        <div class="flex flex-col mb-3">
            <label for="location">Location</label>
            <InputGroup class="mt-2">
                <InputText type="text" placeholder="Record Title" v-model="locationName" />
                <InputGroupAddon class="cursor-pointer">
                    <Button icon="pi pi-chevron-right" variant="outlined" type="button" @click.prevent="showFolderSuggestion"></Button>

                    <Popover ref="folderListRef">
                        <div class="flex flex-col gap-4 w-[25rem]">
                            <Tree v-model:selectionKeys="selectedKey"
                                :value="nodes"
                                selectionMode="single"
                                class="w-full"
                                @nodeSelect="onNodeSelect"
                                :style="{
                                    padding: '0'
                                }"></Tree>

                            <div class="flex justify-end gap-2 mt-5">
                                <Button type="button" label="Cancel" severity="secondary" @click.prevent="showFolderSuggestion"></Button>
                                <Button type="button" label="Select" :disabled="!selectedFolderName.length" @click.prevent="chooseFolder"></Button>
                            </div>
                        </div>
                    </Popover>
                </InputGroupAddon>
            </InputGroup>
        </div>

        <div class="flex flex-col mb-3">
            <label for="name">Folder Name</label>
            <InputText type="text" placeholder="Folder Name" class="mt-2" />
        </div>

        <div class="flex justify-end gap-2 mt-5">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Save" @click="visible = false"></Button>
        </div>

    </Dialog>
</template>