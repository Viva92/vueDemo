import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'Vuex';
import App from './app.vue';
import iComponent from './iComponent';
import vueBus from './utils/vueBus';
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iComponent);
Vue.use(vueBus);
Vue.use(iView);

// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {
        count: 0,
        list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    },
    mutations: {
        increment(state, n = 1) {
            state.count = state.count + n;
        },
        increment10(state, param) {
            state.count = state.count + param.count;
        },
        decrease(state) {
            state.count--;
        }
    },
    getters: {
        filteredList: function(state) {
            return state.list.filter(item => item<10);
        },
        listCount: function(state,getters) {
            return getters.filteredList.length;
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});