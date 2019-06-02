<template>
    <div>
        <!-- 递归组件 -->
        <childComponent :count="count + 1" v-if="count < 3">
        </childComponent>
        {{count}}
    </div>
</template>
<script>
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>
