import {createStore} from "vuex";
import counterModule from "@/store/modules/counterModule";
import authorizationModule from "@/store/modules/authorizationModule";

export default createStore({
    modules: {
        counterModule,
        authorizationModule
    }
})
