<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4" dark>
             <span 
                class="home" 
                @click="navigateTo({name: 'root'})">
                 Tab Tracker
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
                @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            <v-btn flat dark
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default{
        methods:{
            navigateTo (route){
                this.$router.push(route);
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
