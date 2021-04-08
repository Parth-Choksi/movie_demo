<template>
    <div>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer app dark v-model="drawer">
            <v-list nav dense>
                <v-list-group v-model="group" v-for="item in itemlist" :key="item.id" :to="item.route" :prepend-icon="item.icon">
                    <template v-slot:activator >
                        <v-list-item-content>
                            <v-list-item-title  v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="subitem in item.submenu" :key="subitem.id" :to="subitem.route">
                        <v-list-item-content>
                            <v-list-item-title  v-text="subitem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            
            itemlist:[
                {title:'Home',icon:'fas fa-home',route:'/login'},
                {title:'Profile',icon:'fas fa-user',route:'/login'},
                {title:'Section',icon:'fas fa-puzzle-piece',route:'/login',submenu:[{title:'Movie' ,route:'/home'},{title:'Series'}]},
                {title:'About Us',icon:'fas fa-smile ',route:'/login'},
                {title:'Logout',icon:'fas fa-sign-out-alt',route:'/login'},
            ],
            drawer:false,
            group:null,
        }
    },
    watch:
    {
        group()
        {
            this.drawer=false;
        }
    }
}
</script>

<style lang="scss">
.v-list-item__content{
    margin-left: 10px;
}
</style>