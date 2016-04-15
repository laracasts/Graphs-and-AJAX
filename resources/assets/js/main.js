import Vue from 'vue';
import VueResource from 'vue-resource';

import Graph from './components/Graph';

Vue.use(VueResource);

new Vue({
    el: 'body',

    components: { Graph }
});
