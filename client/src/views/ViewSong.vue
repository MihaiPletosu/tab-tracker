<template>
    <div>
        <v-layout>
            <v-flex xs6>
               <song-metadata :song="song"/>
            </v-flex>
            <v-flex xs6 class="ml-2">
                <you-tube :youtubeId="song.youtubeId"/>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs6>
            </v-flex>
            <v-flex xs6 class="ml-2 mt-2">
                <lyrics :song="song"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService';
import SongMetadata from '@/components/SongMetadata';
import YouTube from '@/components/YouTube';
import Lyrics from '@/components/Lyrics';

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
        SongMetadata,
        YouTube,
        Lyrics
    }
};
</script>

<style scoped>
</style>
