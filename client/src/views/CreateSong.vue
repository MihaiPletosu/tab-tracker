<template>
    <v-container>
        <v-layout>
            <v-flex xs4>
                <panel title="Add a song">
                    <v-text-field
                        label="Title"
                        v-model="song.title"
                    ></v-text-field>

                    <v-text-field
                        label="Artist"
                        v-model="song.artist"
                    ></v-text-field>

                    <v-text-field
                        label="Genre"
                        v-model="song.genre"
                    ></v-text-field>

                    <v-text-field
                        label="Album"
                        v-model="song.album"
                    ></v-text-field>

                    <v-text-field
                        label="Album Image Url"
                        v-model="song.albumImageUrl"
                    ></v-text-field>

                    <v-text-field
                        label="Youtube ID"
                        v-model="song.youtubeId"
                    ></v-text-field>
                </panel>
            </v-flex>

            <v-flex xs8>
                <panel class="ml-2">
                    <v-textarea
                        label="Tab"
                        v-model="song.tab"
                    ></v-textarea>
                    <v-textarea
                        label="Lyrics"
                        v-model="song.lyrics"
                    ></v-textarea>
                </panel>

                <v-btn class="cyan"
                dark
                @click="create">
                Add Song
            </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';

export default {
    data () {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            }
        };
    },
    methods: {
        async create () {
            // call AP
            try{
               await SongsService.post(this.song);
               this.$router.push({
                   name: 'song'
               });
            }catch(err){
                console.log(err);
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
