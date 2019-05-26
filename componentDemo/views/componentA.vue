<template>
    <div>
        <span>A组件</span>
        <br>
        number:{{number}}
        <br>
        total:{{total}}
        <br>
        <Button type="primary" @click="handleNumberAdd">+1</Button> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            number: 0,
            number2: 0,
            total: 0
        }
    },
    created() {
        this.$bus.on('number2chg', this.handleNumber2chg);
    },
    beforeDestroy() {
        this.$bus.off('number2chg', this.handleNumber2chg);
    },
    methods:{
        handleNumberAdd() {
            this.number++;
            this.$bus.emit('addNumber', this.number);
        },
        handleNumber2chg(number2) {
            this.number2 = number2;
            this.total = this.number + this.number2;
        }
    }
}
</script>
