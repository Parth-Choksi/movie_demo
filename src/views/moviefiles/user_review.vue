<template>
    <div class="user_review_main">
        <v-card class="user_review_card">
            <v-card-title>Your Review</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div class="rating">
                    <v-rating v-model="rate"                   
                    half-increments
                    large
                    hover
                    >
                    </v-rating>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <div class="btn_div">
                <v-btn class="rating_submit_btn" @click="submitRating()" outlined dense>Submit</v-btn>
                <v-btn class="rating_clear_btn" @click="clearRating()" outlined dense>Clear</v-btn>
            </div>
             <v-card-title>User Rating</v-card-title>
             <v-divider></v-divider>
             <v-card-text>
                <div class="username_section">
                <h3>UserName</h3>
                </div>
                <div class="review_section">
                <h3>Review</h3>
                </div>
             </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            rate:0,
        }
    },
    methods:{
        submitRating()
        {
            console.log("Rating",this.rate);
        },

        clearRating()
        {
            this.rate = 0;
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';

.user_review_main{
    float: $float;
    width: $width;
    .user_review_card
    {
        float: $float;
        width: $width;
    }
    .btn_div
    {
        float: $float;
        width: $width;
    }
    .mdi-star::before,.mdi-star-half-full::before  {
        color: steelblue;
    }
    .rating_submit_btn,.rating_clear_btn{
        float: left;
        margin: 5% 0 5% 5%;
        width: 25%;
    }
    .username_section,.review_section{
        float: left;
        width: 50%;
    }
}
</style>