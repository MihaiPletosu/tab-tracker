<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <panel title="Login">
                    <v-text-field
                            type="email"
                            name="email"
                            label="email"
                            box
                            v-model="email">
                        </v-text-field>
                        <br>
                        <v-text-field
                            type="password"
                            name="password"
                            label="password"
                            box
                            v-model="password">
                        </v-text-field>
                        <br/>
                        <div class="error" v-html="error">
                        <br>
                        </div>
                        <v-btn class="cyan"
                            dark
                            @click="login">
                            Login
                        </v-btn>
                </panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';
export default {
    name: 'register',
    data () {
        return {
            email: '',
            password: '',
            error: null
        };
    },
    methods: {
        async login () {
            try{
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                });

                this.$store.dispatch('setToken', response.data.token);
                this.$store.dispatch('setUser', response.data.user);
            }
            catch(error){
                this.error = error.response.data.error;
            }
        }
    },
    components: {
        Panel
    }
};
</script>

<style scoped>

</style>
