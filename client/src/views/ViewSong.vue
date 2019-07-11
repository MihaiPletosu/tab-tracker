<template>
    <v-layout>
        <v-flex xs6>
            <panel title="Song">
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
                    </v-flex>

                    <v-flex xs6>
                        <img class="album-image" :src="song.albumImageUrl"/>
                        <br/>
                        {{song.album}}
                    </v-flex>
                </v-layout>
            </panel>
        </v-flex>
        <v-flex xs6 class="ml-2">
            <panel title="Tabs">
                 <textarea
                    readonly
                    v-model="song.tab"
                    ></textarea>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';

export default {
    data () {
        return {
            song: {}
        };
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId;
        this.song = (await SongsService.show(songId)).data;
    },
    components: {
        Panel
    }
};
</script>

<style scoped>
.album-image{
    max-width: 100%;
}

textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
