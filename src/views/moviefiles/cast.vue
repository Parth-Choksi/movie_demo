<template>
    <div class="cast_main">
        <v-card class="cast_card">
            <div class="cast_first_sec">
                <v-card-title>Director</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                img
                <span>Director name</span>
                </v-card-text>

                <v-card-title>Cast</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                img
                <span>Cast name</span>
                </v-card-text>

                <v-card-title>Crew</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                img
                <span>Crew Name</span>
                </v-card-text>
            </div>
            <div class="cast_second_sec">
                <v-card-title>Role</v-card-title>
                <v-divider></v-divider>
                <v-card-text>-</v-card-text>

                <v-card-title>Role</v-card-title>
                <v-divider></v-divider>
                <v-card-text>-</v-card-text>

                <v-card-title>Role</v-card-title>
                <v-divider></v-divider>
                <v-card-text>-</v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/_variable.scss';
.cast_main{
    float: $float;
    width: $width;

    .cast_card{
        float: $float;
        width: $width;

        .cast_first_sec,.cast_second_sec{
            float: $float;
            width: 50%;

        }    
    }
}
</style>