<template>
    <div id="header-bar">
       <router-link to="/"><span>Home</span></router-link>
       <router-link to="/game"><span>Game</span></router-link>
       <span id="header-menu">Menu</span>
    </div>
</template>
<script>
export default {
    name: "header",
}; 
</script>
<style>
#header-bar{
    width: 100%;
    height: 50px;
    background-color: rgba(50,150,140);
}
#header-bar span:first-child{
    margin-left: 20px;
}
#header-menu{
    float: right;
    margin-right: 20px;
}
#header-bar span:hover { 
    opacity: 0.7;
}
#header-bar span {
    font-size: 15pt;
    color: white!important;
    padding: 8px;
    display: inline-block;
    font-weight: 400;
    cursor: pointer;
}
</style>
