<template>
    <div>
        <span>B组件</span>
        <br>
        {{number}}
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            number: 0
        }
    },
    created() {
        this.$bus.on('addNumber', this.addNumber);
    },
    methods:{
        addNumber(number) {
            this.number = number;
            this.$bus.emit('number2chg', this.number);
        }
    },
    beforeDestroy() {
        this.$bus.off('addNumber',this.addNumber);
    }
}
</script>
