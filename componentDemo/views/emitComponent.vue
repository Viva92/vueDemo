<template>
    <div>
        <hr>
        <span>子组件2 - 子组件向父组件通信emit</span>
        <div>{{msg}}</div>
        <br>
        <Input v-model="msg"></Input>
        <Button type="primary" @click="handleMsgChg">change</Button>
        <div>{{cnt}}</div>
        <Button type="primary" @click="handleCounterAdd">+1</Button>
        <hr>
    </div>
</template>
<script>
export default {
    // 父组件向子组件通信，通过props传递数据
    props: {
        message:{
            type: String,
            // require: true,
            default: 'message props'
        },
        counter:{
            type: Number,
            // require: true,
            default: 'counter props'
        }
    },
    data(){
        return{
            // 不直接修改prop，定义变量或者计算属性
            msg: this.message,
            cnt: this.counter
        }        
    },
    methods:{
        handleMsgChg() {
            this.msg = 'hello vue';
            // 子组件向父组件通信emit
            this.$emit('msgChg', this.msg);
        },
        handleCounterAdd() {
            this.cnt++;
            // emit特殊的input事件
            this.$emit('input', this.cnt);
        }
    }
}
</script>
