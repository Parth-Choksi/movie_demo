<template>
    <div class="overview_main">
        <v-card class="overview_card">
            <v-card-title>Overview By Some Person</v-card-title>
            <v-divider></v-divider>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam reiciendis esse exercitationem eum, modi non ab sit quasi 
            aperiam ipsum nisi ullam similique doloribus doloremque omnis quas 
            dolorem inventore qui.</v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';
    .overview_main{
        float: $float;
        width: $width;

        .overview_card{
            float: $float;
            width:$width;
        }
    }
</style>