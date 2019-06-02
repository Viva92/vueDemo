<template>
    <div>
        <h1>首页</h1>
        <button @click="handleDecrease">-1</button>
        {{count}}
        <button @click="handleIncrease">+1</button>
        <button @click="handleIncrease5">+5</button>
        <button @click="handleIncrease10">+10</button>
        <router-link to="/about">跳转到 about</router-link>
        {{list}}
        {{listCount}}
        <br>
        <span>以上父组件</span>
        <!-- <myComponent></myComponent> -->
        <!-- <myComponent></myComponent> -->
        <!-- 1.父组件向子组件通信，通过props传递数据 -->
        <!-- <myComponent message="abcde"></myComponent> -->
        <!-- <myComponent :message="data"></myComponent> -->
        <!-- 2.1 子组件向父组件通信，通过emit自定义或原生事件，父组件中v-on：或@来接收 -->
        <!-- <emitComponent :message="data" @msgChg="msgChg"></emitComponent> -->
        <!-- 2.2 子组件向父组件通信，通过emit input事件，父组件中v-model来接收，直接修改父组件的变量 -->
        <!-- <emitComponent :counter="counter" v-model="counter" :message="data" @msgChg="msgChg"></emitComponent> -->
        <!-- 3.事件总线 -->
        <!-- <componentA></componentA>
        <hr>
        <componentB></componentB> -->
        <!-- 4.1 单个slot -->
        <!-- <sComponent>
            <span>父组件定义了一些文本</span>
        </sComponent> -->
        <!-- 4.2具名slot -->
        <!-- <nsComponent>
            <h4 slot="header">标题</h4>
            <span>正文</span>
            <div slot="footer">
                底部信息
            </div>
        </nsComponent> -->
        <!-- 4.3作用域slot -->
        <scComponent>
            <template slot-scope="props">
                <p>来自父组件的消息</p>
                {{props.msg}}
            </template>
        </scComponent>
        <span>以下父组件</span>
        <br>
        data:<Input v-model="data"></Input>
        counter:<Input v-model="counter"></Input>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data: '123',
                counter: 0
            }
        },
        methods: {
            handleDecrease() {
                this.$store.commit('decrease');
            },
            handleIncrease() {
                this.$store.commit('increment');
            },
            handleIncrease5() {
                this.$store.commit('increment',5);
            },
            handleIncrease10() {
                this.$store.commit({
                    'type': 'increment10',
                    'count': 10
                })
            },
            msgChg(msg) {
                this.data = msg;
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
            list() {
                return this.$store.getters.filteredList;
            },
            listCount() {
                return this.$store.getters.listCount;
            }
        }
    }
</script>