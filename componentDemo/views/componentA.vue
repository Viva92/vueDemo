<template>
    <div>
        <span>A组件</span>
        <br>
        {{number}}
        <br>
        <Button type="primary" @click="handleNumberAdd">+1</Button> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            number: 0
        }
    },
    methods:{
        handleNumberAdd() {
            this.number++;
            this.$bus.emit('addNumber', this.number);
        }
    }
}
</script>
