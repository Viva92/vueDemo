import myComponent from './views/myComponent.vue'

// 写法一
// const iComponent = {
//     install: function(Vue) {
//         Vue.component('myComponent', myComponent);
//     }
// }
// 写法二
function iComponent(Vue) {
    if(iComponent.intalled) {
        return;
    }
    Vue.component('myComponent', myComponent);
}

export default iComponent;