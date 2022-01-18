<template>
    <div id="memo-wrap">
        <div class="memo-small memo-new">
            <div>
                <button>추가</button>
            </div>
            <div>
                <textarea ref="memoTextarea" @click="clickTextarea" class="memo-textarea" placeholder="메모 빠른입력" v-model="memo"></textarea>
            </div>
        </div>
        <div class="memo-small" :id="i" v-for="(d,i) in memoList" :key="d.wrt_dt">
            <div>
                <div>{{d.wrt_dt.replace("T"," ").replace(".000Z","")}}</div>
                <button @click="updateStart">수정</button>
                <button>삭제</button>
            </div>
            <div>
            {{d.cntnt}}
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            memoList: [],
            memo: '',
        }
    },
    watch: {
        memoList() {
            console.log("memoList")
        },
    },
    methods: {
        clickTextarea(){
            console.log(this.$memoTextarea.innerText)
            $memoTextarea.
        },
        memoRead(){
            axios.get('http://localhost:3000/getMemo')
            .then (res => {
                this.memoList = res.data
                console.log(res.data)
            })
            .catch (res => {
                // this.error = res.response.data
                console.log(res.response.data)
            })
            .finally (() => {
                // this.loading = false; // loading end 
                console.log("finally")
            })
        },
        memoCreate(param){
            axios.post('http://localhost:3000/createMemo', param)
        },
        updateStart(e){
            console.log(e.target.tagName) // 수정 
            // if(this.memo != ''){
            //     if(confirm("빠른입력에서 추가하던 메모는 취소됩니다. 계속 하시겠습니까?")){
                    
            //     }
            // }
        },
        memoUpdate(){},
        memoDelete(){},
        memoSearch(){},
    },
    mounted() {
        this.memoRead()
    },
    
}
</script>
<style>
#memo-wrap {
    padding-right: 10px;
    padding-left: 10px;
    font-size: 9.5pt;
}
.memo-small {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 250px;
    background-color: rgba(250,240,200);
    margin: 20px 10px; 
    margin-right:10px;
    padding: 10px;
}
.memo-small > div:first-child{
    font-size: 6pt;
    text-align: right;
}
.memo-small > div:first-child > div{
    display: inline-block;
    float: left;
    padding-top: 3px;
}
.memo-textarea{
    border: 0;
    outline: 0;
    font-size: 9.5pt;
    background-color: rgba(250,240,200);
    width: 100%;
    height: 210px;
    padding: 15px;
    resize: none;
}
button:hover{
    background-color: rgba(200,200,200);
}
button{
    outline: 0;
    border: 0;
    background-color: rgba(220,220,210);
    border-radius: 3px;
    padding: 3px 7px;
    margin-left: 5px;
}
</style>