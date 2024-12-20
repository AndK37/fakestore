<template>
  <my-header/>

  <router-view/>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'


export default {
  components: {
    "my-header": MyHeader,

  }
}
</script>

<style>
* {
  font-family: 'Space Mono';
  color: white;
}
html, body {
  margin: 0;
  padding: 0;
  background-color: #413f54;
}
#app {
  background-color: #413F54;
  padding-left: 5vw;
  padding-right: 5vw;
  
}
</style>
