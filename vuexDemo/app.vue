<template>
<div>
    <v-title title="Vue title组件"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <router-view></router-view>
</div>
</template>
<script>
import vButton from './button.vue';
import vTitle from './title.vue';
export default {
    components:{vTitle,vButton},
    methods: {
        handleClick(e) {
            console.log("根实例组件");
            console.log(e);
        }
    }
}
</script>