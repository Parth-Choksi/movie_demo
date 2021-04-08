<template>
    <div class="rating_main">
        <v-card class="rating_card">
            <v-card-title>Rating</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <label for="imdb Rating">IMDB Rating :- <b>9/10</b></label>
                <label for="user Rating">Avg of User Rating :- <b>8.5/10</b></label>
                <v-divider></v-divider>
                <v-card-title>Review By Some Person</v-card-title>
                <v-divider></v-divider>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.
            <br><br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.
            </v-card-text>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';
    .rating_main{
        width:$width;
        float:$float;

        .rating_card{
            float: $float;
            width:$width;
        }
    }
</style>