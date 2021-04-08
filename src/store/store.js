import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        current_login_user:{
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            islogin:false,
        },
        movie:{}
    },
    actions:{

    },
    mutations:{

    },
    getters:{

    },
    modules:{

    }
})
export default store;