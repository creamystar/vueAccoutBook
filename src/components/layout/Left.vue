<template>
    <div id="left-wrap">
        <router-link to="/game/memoGrid"><div>memo grid</div></router-link>
        <router-link to="/game/typingGame"><div>typing game</div></router-link>
    </div>
</template>
<script>
export default {
    name: "left",
}
</script>
<style>
#left-wrap{
    border-right: 1px solid rgba(50,150,140,0.5);;
    width: 250px;
    height: 100%;
}
#left-wrap div:hover{
    background-color: rgba(50,150,140,0.2);
}
#left-wrap div{
    cursor:pointer;
    text-align: center;
    opacity: 1;
    padding-top:10px;
    padding-bottom:10px;
    color: #444!important;
    text-decoration-line: none!important;
}
</style>