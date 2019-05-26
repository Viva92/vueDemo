<template>
    <div>
        <hr>
        <span>子组件1 - 父组件向子组件通信props</span>
        <div>{{msg}}</div>
        <br>
        <Input v-model="msg"></Input>
        <!-- <div>{{counter}}</div> -->
        <!-- <Button type="primary" @click="handleCounterAdd">+1</Button> -->
        <hr>
    </div>
</template>
<script>
export default {
    // 父组件向子组件通信，通过props传递数据
    props: {
        message:{
            type: String,
            require: true,
            default: 'message props'
        }
    },
    data(){
        return{
            // message:'自定义组件传值',
            counter: 0,
            // 不直接修改prop，定义变量或者计算属性
            msg: this.message
        }        
    },
    methods:{
        handleCounterAdd() {
            this.counter++;
        }
    }
}
</script>
