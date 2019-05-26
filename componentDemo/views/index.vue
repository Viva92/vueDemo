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
        <span>以上父组件</span>
        <!-- <myComponent></myComponent> -->
        <!-- <myComponent></myComponent> -->
        <!-- 父组件向子组件通信，通过props传递数据 -->
        <!-- <myComponent message="abcde"></myComponent> -->
        <myComponent :message="data"></myComponent>
        <span>以下父组件</span>
        <Input v-model="data"></Input>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data: '123'
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