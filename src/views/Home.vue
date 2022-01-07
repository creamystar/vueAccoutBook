<template>
    <div>
        <h1>content page</h1>
        <h3>{{title}}</h3>
        <input type="text" v-model="input" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "개발",
            input: "abc",
            options: [
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"b", t:"Busan"},
            ],
            region: "J",
            tableShow: true,
        };
    },
    watch: { // 데이터가 변동되는 시점을 잡아냄 
        input() {
            console.log(this.input)
        },
    },
    methods: {
        getData() {
            alert(this.input);
        },
        setData() {
            this.input = "12345";
        },
        changeRegion() {
            alert(this.region)
        },
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");

    },
    beforeMount() {
        console.log("beforeMount");

    },
    mounted() {
        console.log("mounted");

    },
    beforeUpdate() {
        console.log("beforeUpdate");

    },
    updated() {
        console.log("updated");

    },
    beforeDestroy() {
        console.log("beforeDestroy");

    },
    destroyed() {
        console.log("destroyed");

    },
}; 
</script>
