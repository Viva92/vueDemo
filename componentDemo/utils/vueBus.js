// 定义一个插件，组件之间的事件传递总线

function vueBus(Vue) {
    if(vueBus.installed) {
        return;
    }
    const Bus = new Vue({
        methods: {
            // 三个方法的参数不同
            emit(event, ...args) {
                this.$emit(event, ...args);
            },
            on(event, callback) {
                this.$on(event, callback);
            },
            off(event, callback) {
                this.$off(event, callback);
            }
        }
    });
    // 实例属性或方法
    Vue.prototype.$bus = Bus;
};

export default vueBus;