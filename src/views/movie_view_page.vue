<template>
    <div class="movie_detail_main">
        <Navigation/>
        <h1><center>Detail Page</center></h1>
        <div class="mid_section">
            <div>
                <v-card class="movie_video_card">
                    <v-card-text>
                        <iframe src="" frameborder="0">
                        </iframe>
                    </v-card-text>
                </v-card>
            </div>
            <div class="movie_detail">
                <v-card class="movie_photo_card">
                    <v-card-title>
                        movie name
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <img src="https://picsum.photos/id/11/500/300" alt="movie photo" width="100%" height="400px">
                    </v-card-text>
                </v-card>
                <v-card class="movie_description_card">
                    <v-tabs v-model="tabs">
                        <v-tab v-for="item in items" :key="item">{{item}}</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tabs">
                        <v-tab-item><Overview/></v-tab-item>
                        <v-tab-item><Rating/></v-tab-item>
                        <v-tab-item><UserReview/></v-tab-item>
                        <v-tab-item><Cast/></v-tab-item>
                        <v-tab-item><Related/></v-tab-item>
                    </v-tabs-items>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../views/nav_drawer'
import Overview from '../views/moviefiles/overview.vue'
import Rating from '../views/moviefiles/rating.vue'
import UserReview from '../views/moviefiles/user_review.vue'
import Cast from '../views/moviefiles/cast.vue'
import Related from '../views/moviefiles/related.vue'
export default {
    components:{
        Navigation,
        Overview,
        Rating,
        UserReview,
        Cast,
        Related,
    },
    data()
    {
        return{
            tabs:0,
            items:['Overview','Rating','User Reviews','Cast','Related']
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';
    .movie_detail_main{
        float: $float;
        width: $width;
        height:$height;
        background-color:cornsilk;

        .mid_section{
            float: $float;
            width: 96%;

            .movie_video_card{
                float: $float;
                width: $width;
                margin: 30px;
            }

            .movie_photo_card{
                float: $float;
                width: 18%;
                margin: 30px;

            }

            .movie_detail{
                .movie_description_card{
                    float: $float;
                    width: 70%;
                    margin: 30px 0px 0px 0px;
                }
            }
        }
    }
</style>