<template>
    <div class="Home_main_div">
        <div class="Home_div">
            <Navigation/>
            <h1><center>Home Page</center></h1>
            <div class="carousel_section">
            
            <v-select class="filter_select" :items="selectfield" outlined dense></v-select>

            <v-text-field class="search_bar" append-icon="fas fa-search" outlined v-model="search" placeholder="Search here . . .">Search</v-text-field>
                <v-card class="home_card">
                    <v-carousel height="500px">
                        <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </div>
            <div class="mid_section">
                <div class="movie_list">
                    <v-card class="movie_card" v-for="movie in searchResult" :key="movie.name">
                        <v-card-title class="movie_title">{{movie.title}}</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-img :src="movie.img" max-width="250" max-height="250" style="margin:auto"></v-img>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>{{movie.description}}</v-card-text>
                        <v-btn class="card_btn" outlined @click="aboutMovie()">View</v-btn>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../views/nav_drawer'
import Axios from 'axios'
export default {
    components:{
        Navigation,
    },
    data()
    {
        return{
            items:[
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ],
            search:'',
            movielist:[
                {title:'ABCD',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Joker',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'ABCD 2',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Hera Pheri',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Golmal',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Silence',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Golmal Again',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Fan',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
                {title:'Drive',img:'https://picsum.photos/id/11/500/300',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, iure enim, culpa doloremque eos, adipisci rerum perferendis ipsa nostrum.'},
            ],
           selectfield:['Movie','series'],
           getName :'',
        }
    },
    computed:{
        searchResult(){
            let temp = this.movielist

            if (this.search !== '' && this.search) {
                temp = temp.filter((item)=>
                {
                    return item.title.toLowerCase().includes(this.search.toLowerCase())
                })                
            }
            return temp;
        }
    },
    mounted()
    {
        var movie={};
        for(let j=0;j<10;j++)
        {
        Axios.get(`https://api.themoviedb.org/3/movie/${j}?api_key=e0244348993c24d99c532b32a08bed4a`)
        .then(response=>{
            console.log(response.data);
            this.$store.state.movie[`movie${j}`]
            
        }).catch(err=>
        {
            console.log(err);
        })
        }
        console.log(movie);
    },
    methods:{
        aboutMovie()
        {
            console.log(this.$store.state.movie)
            this.$router.push('/movie_view_page');
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/_variable.scss";
.Home_main_div{
    width: $width;
    float: $float;
    background-color:cornsilk;

    .search_bar{
        float: right;
        width: auto;
        right: 7%;
    }
    .filter_select{
        float: $float;
        width: 40%;
        
    }

    .Home_div{
        width: $width;
        float: $float;
        margin: $common_margin;

        .carousel_section{
            width: $width;
            float: $float;

            .v-window__next{
                right: 0;
            }
            .v-window__prev{
                left:0;
            }

            .home_card{
            float: $float;
            width:$width;
            width: 96%;
            }
         }   
        .mid_section{
            float: $float;
            width: $width;

            .movie_list{
            float: $float;
            width: 100%;
            margin-top: 20px;
            }
            .movie_card{
                float: left;
                width: 30%;
                margin: 10px;  

                .movie_title{
                    justify-content: center;
                }

                .card_btn{
                    float: left;
                    margin: 0 0 5% 33%;
                    width: 35%;
                } 
            }
        }
    }
}

</style>