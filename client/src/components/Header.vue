<template>
    <v-toolbar sticky class="cyan">
        <v-toolbar-title class="mr-4" dark>
             <span 
                class="home" 
                @click="navigateTo({name: 'root'})">
                 Tab Tracker
            </span>
        </v-toolbar-title>
        <v-toolbar-items>
             <v-btn
                flat 
                dark
                @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark
                @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                flat 
                dark
                @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default{
        methods:{
            navigateTo (route){
                this.$router.push(route);
            },
            logout () {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push({
                    name: 'root'
                });
            }
        }
    };
</script>

<style scoped>
    .home{
        cursor: pointer;
        color: #fff;
    }

    .home:hover{
        color: #333;
    }
</style>
