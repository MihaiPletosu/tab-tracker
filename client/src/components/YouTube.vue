<template>
<panel title="Youtube Video">
    <youtube 
        :video-id="youtubeId"
        :width="800"
        :height="400">
    </youtube>
</panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
    props: [
        'youtubeId'
    ],
    components: {
        Panel
    }
};
</script>

<style scoped>
iframe {
  width: 100%;
  max-width: 500px;
}
</style>
