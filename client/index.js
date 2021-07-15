import Vue from "vue";
import Datetime from "vue-datetime";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "vue-datetime/dist/vue-datetime.css";

import App from "./App";

Vue.use(Datetime);

new Vue ({
    el: "#app",
    render: h => h(App)
});