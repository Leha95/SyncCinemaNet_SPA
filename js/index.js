import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../vue-components/App.vue';
import Homepage from '../vue-components/Homepage.vue';
import Login from '../vue-components/Login.vue';
import Signup from '../vue-components/Signup.vue';
import Stream from '../vue-components/Stream.vue';

let router = new VueRouter({
    routes : [
        { path: '/', component: Homepage },
        { path: '/login', component: Login },
        { path: '/registration', component: Signup },
        { path: '/stream/:stream_id', component: Stream , props:true },
    ]
})

new Vue({ render: h => h(App) , router }).$mount('#app')