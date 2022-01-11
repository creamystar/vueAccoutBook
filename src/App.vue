<template>
  <div id="app">
    <Header/>
    <div :id="leftId">
      <Left/>
    </div>
    <div :id="contentId" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Left from './components/layout/Left.vue'

export default {
  name: 'App',
  components: {
    Header,
    Left,
  },
  data() {
    return {
      leftId: "left-none",
      contentId: "content",
      pathname: "/",
    }
  },
  watch: {
    '$route' (to,from) {
      if(to.path != from.path){
        if(window.location.pathname.substr(0,5) == "/game"){
          this.leftId = "left"
          this.contentId = "content-game";
        }else{
          this.leftId = "left-none";
          this.contentId = "content";
        }
      }
    }
  }, // watch 
  mounted() {
    if(window.location.pathname.substr(0,5) == "/game"){
      this.leftId = "left"
      this.contentId = "content-game";
    }else{
      this.leftId = "left-none";
      this.contentId = "content";
    }
  },
}
</script>

<style>
#left{
  display: inline-block;
  vertical-align: top;
  height: calc(100vh - 50px);
}
#left-none{
  display: none;
}
#content {
  display: inline-block;
  vertical-align: top;
  width: 100vw;
  height: calc(100vh - 50px);
}
#content-game {
  display: inline-block;
  vertical-align: top;
  width: calc(100vw - 250px);
  height: calc(100vh - 50px);
}
</style>
