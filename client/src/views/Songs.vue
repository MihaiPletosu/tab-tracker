<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <panel title="Songs">
                    <v-btn
                        slot="action"
                        @click="navigateTo({name: 'song-create'})"
                        class="cyan accent-3"
                        small
                        light
                        absolute
                        right
                        middle
                        fab>
                        <v-icon>add</v-icon>
                    </v-btn>

                    <div 
                        v-for="song in songs"
                        :key="song.id"
                        class="song"
                        >

                        <v-layout row wrap>
                            <v-flex xs6>
                                <div class="song-title">
                                    {{song.title}}
                                </div>
                                <div class="song-artist">
                                    {{song.artist}}
                                </div>
                                <div class="song-genre">
                                    {{song.genre}}
                                </div>
                                <v-btn
                                    dark
                                    class="cyan"
                                    @click="navigateTo({
                                        name: 'song', 
                                        params: {
                                            songId: song.id
                                        }
                                    })">
                                    View
                                </v-btn>
                            </v-flex>

                            <v-flex xs6>
                                <img class="album-image" :src="song.albumImageUrl"/>
                            </v-flex>
                        </v-layout>
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
    methods: {
        navigateTo (route) {
            this.$router.push(route);
        }
    },
    async mounted () {
        // do a request to the backend for all the songs
        this.songs = (await SongsService.index()).data;
    }
};
</script>

<style scoped>
.song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
}

.song-title{
    font-size: 30px;
}

.song-artist{
    font-size: 24px;
}

.song-genre{
    font-size: 18px;
}

.album-image{
    width: 70%;
    margin: 0 auto;
}
</style>
