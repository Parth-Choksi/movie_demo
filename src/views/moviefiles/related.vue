<template>
    <div class="related_main">
        <div class="related_cards">
            <v-card class="movie_card" v-for="movie in movielist" :key="movie.name">
                <v-card-title class="movie_title">{{movie.title}}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-img :src="movie.img" max-width="250" max-height="250" style="margin:auto"></v-img>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>{{movie.description}}</v-card-text>
                <v-btn class="related_btn" outlined dense @click="viewMovie()">View</v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            movielist:[
                {title:'ABCD',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Joker',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Drive',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
            ],
        }
    },
    methods:
    {
        viewMovie()
        {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';

.related_main{
    float: $float;
    width: $width;
    .movie_card{
        float: left;
        width: 30%;
        margin: 5px 10px 5px 15px;
    }
    .related_btn{
        float: left;
        margin: 0 0 5% 33%;
        width: 35%;
    }
}
</style>