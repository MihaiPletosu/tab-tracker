<template>
  <div class="home">
    <Welcome 
      title="Welcome to Tab Tracker app!"
      description="Tab Tracker is a web application that helps with keeping track of guitar tabs."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'home',
  components: {
    Welcome
  }
};
</script>
