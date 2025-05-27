<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorEmail = ref('');
const errorPassword = ref('');

const router = useRouter();

const emailSection = ref(true);
const passwordSection = ref(false);

const loading = ref(false);

const gotoLogin = () => {
    passwordSection.value = false;
    emailSection.value = true;
}
const gotoPassword = () => {
    if (!email.value.length) {
        errorEmail.value = 'Email is required';
        return;
    }

    errorEmail.value = '';
    passwordSection.value = true;
    emailSection.value = false;
}

const login = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        router.push('/');
    }, 1000);
}

watch(email, (values) => {
    if (values.length) {
        errorEmail.value = '';
    } else {
        errorEmail.value = 'Email is required';
    }
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 h-full layout-wrapper">
        <div class="m-auto h-full w-full flex justify-center items-center px-10 md:px-0 max-w-[420px]">
            <div class="w-full" v-if="emailSection">
                <div class="logo font-bold text-lg">CipherVault</div>
    
                <div class="mt-10">
                    <div class="form-group">
                        <label for="email" class="w-full">Email Address</label>
                        <InputText
                            type="text"
                            autocomplete="off"
                            placeholder="Type your safe email"
                            class="w-full mt-2"
                            v-model="email"
                            :invalid="errorEmail.length"></InputText>
                        <Message size="small" variant="simple" class="text-red-600 ps-2 pt-1" severity="danger">{{ errorEmail }}</Message>
                    </div>

                    <Button class="w-full mt-5" severity="primary"
                        type="button"
                        @click.prevent="gotoPassword">Next</Button>

                    <div class="flex items-center justify-between">
                        <Button variant="link"
                            label="Create an Account"
                            :style="{
                                paddingLeft: '0'
                            }"></Button>
                        <Button variant="link"
                            label="Forgot Password"
                            :style="{
                                paddingLeft: '0'
                            }"></Button>
                    </div>
                </div>
            </div>
            <div class="w-full" v-if="passwordSection">
                <div class="logo font-bold text-lg">CipherVault</div>
    
                <div class="mt-5">
                    <!-- email preview -->
                    <div class="email-preview mb-5 flex items-center justify-center">
                        <div class="bg-white px-3 py-2 rounded-full cursor-pointer text-md shadow-md">
                            <Avatar icon="pi pi-user" shape="circle" size="normal"></Avatar>
    
                            <span class="ms-3">{{ email }}</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Password</label>
                        <Password autocomplete="off" placeholder="Master Password" class="w-full mt-2 password-input" toggle-mask></Password>
                    </div>

                    <Button class="w-full mt-5" severity="primary" icon="pi pi-sign-in" :loading="loading" label="Login" type="button" @click.prevent="login"></Button>

                    <div class="flex items-center justify-between">
                        <Button variant="link"
                            label="Login with Different Account"
                            @click.prevent="gotoLogin"
                            :style="{
                                paddingLeft: '0'
                            }"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden m-auto h-full w-full md:flex justify-center items-center bg-gray-300">
            <div class="w-full flex items-center justify-center">
                <Skeleton width="30rem" height="50rem" class="bg-amber-400"></Skeleton>
            </div>
        </div>
    </div>
</template>