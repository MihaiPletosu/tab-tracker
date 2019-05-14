<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <panel title="Songs">
                    <div 
                        v-for="song in songs"
                        :key="song.title">
                        {{song.title}} - 
                        {{song.artist}} - 
                        {{song.album}}
                    </div>
                </panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';
export default {
    components: {
        Panel
    },
    data () {
        return {
            songs: null
        };
    },
    async mounted () {
        // do a request to the backend for all the songs
        this.songs = await SongsService.index();
    }
};
</script>

<style scoped>
</style>
