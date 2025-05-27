<script setup>
import { ref, watch } from 'vue';

const visible = ref(false);

const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    }
});

watch(props, (values) => {
    if (values) {
        visible.value = values.isShow;
    }
})

const checkPasswordStrength = {
    state: {
        infoText: "Test"
    }
};
</script>

<template>
    <Dialog v-model:visible="visible"
        header="Create Record"
        :style="{ width: '25rem', height: '100%' }"
        position="right"
        :modal="true"
        :draggable="false"
        @hide="$emit('on-hide')">

        <div class="flex flex-col mb-3">
            <label for="title">Title</label>
            <InputText type="text" placeholder="Record Title" class="mt-2" />
        </div>

        <div class="flex flex-col mb-3">
            <label for="login">Login</label>
            <InputText type="text" placeholder="Login / Email / Username" class="mt-2" />
        </div>

        <div class="flex flex-col mb-3">
            <label for="password">Password</label>
            <Password placeholder="Secret Word"
                class="mt-2
                password-input"
                toggle-mask
                :aria-valuemin="20" />
        </div>

        <div class="flex flex-col mb-3">
            <label for="website">Website</label>
            <InputGroup class="mt-2">
                <InputGroupAddon>
                    <span>https://</span>
                </InputGroupAddon>
                <InputText type="text" placeholder="Login / Email / Username" />
            </InputGroup>
        </div>

        <div class="flex flex-col mb-3">
            <label for="note">Note</label>
            <Textarea rows="3" cols="5" class="mt-2" />
        </div>

        <div class="flex justify-end gap-2 mt-5">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Save" @click="visible = false"></Button>
        </div>
    </Dialog>
</template>