import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import App from './App.vue';

import {messages} from './localization/i18n';
import storeData from './store/store';

Vue.use(Vuex);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

Vue.component('App', App);

new Vue({
    el: '#app',
    i18n,
    store : new Vuex.Store(storeData),
});


