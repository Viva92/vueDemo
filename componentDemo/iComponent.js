import myComponent from './views/myComponent.vue';
import emitComponent from './views/emitComponent.vue';
import componentA from './views/componentA.vue';
import componentB from './views/componentB.vue';
import sComponent from './views/slotComponent.vue';
import nsComponent from './views/namedSlotComponent.vue';
import scComponent from './views/scopedSlotComponent.vue';

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
    Vue.component('emitComponent', emitComponent);
    Vue.component('componentA', componentA);
    Vue.component('componentB', componentB);
    Vue.component('sComponent', sComponent);
    Vue.component('nsComponent', nsComponent);
    Vue.component('scComponent', scComponent);
}

export default iComponent;