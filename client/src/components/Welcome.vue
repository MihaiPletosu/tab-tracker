<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs4>
                <v-card>
                    <v-img 
                        :src="require(`@/assets/guitar.jpg`)"
                        position="center center">
                    </v-img>
                    <v-card-title primary-title>
                        <h3 class="headline mb-3">{{ title }}</h3>
                        <p>{{ description }}</p>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: [
        'title',
        'description'
    ]
};
</script>

<style scoped>

</style>
