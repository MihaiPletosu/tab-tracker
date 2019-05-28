<template>
    <panel title="Song">
        {{song.title}}
        {{song.artist}}
        {{song.genre}}
        {{song.album}}
    </panel>
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
</style>
