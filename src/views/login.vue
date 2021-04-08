<template>
    <div class="Login_main_div">
        <div class="Login_div">
            <v-card class="Login_card">
            <h1><center>Login Form</center></h1>
            <v-form class="Login_form">
            <p v-if="errors.length">
                <ul>
                    <li v-for="e in errors" :key="e">
                        {{e}}
                    </li>
                </ul>
            </p>
                <v-row>
                    <v-col cols=5>
                        <label for="email">Email Id</label>
                        <v-text-field outlined dense v-model="login_user.email_id"></v-text-field>
                        <p class="error" v-if="!$v.login_user.email_id.required">Email id is required</p>
                        <p class="error" v-if="!$v.login_user.email_id.email">Email has not valide type</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols=5>
                        <label for="password">Password</label>
                        <v-text-field outlined dense v-model="login_user.password"></v-text-field>
                        <p class="error" v-if="!$v.login_user.password.required">Password is required</p>
                        <p class="error" v-if="!$v.login_user.password.minLength">Password have atleast 8 character</p>
                    </v-col>
                </v-row>
                <v-btn outlined @click="gotoHome()">Login</v-btn>
            </v-form>
            </v-card>
        </div>
    </div>
</template>

<script>
import {required,minLength,email} from 'vuelidate/lib/validators'
import Store from '../store/store.js'
export default {
    data()
    {
        return{
            errors:[],
            login_user:{
                email_id:null,
                password:null,
            },
            
        }
    },
    validations:{
        login_user:{
            email_id:{
                required,email
            },
            password:{
                required,minLength : minLength(8)
            }
        }
    },
    methods:
    {
        gotoHome()
        {
            this.errors=[];
            if (!this.login_user.email_id) {
                this.errors.push("Email Id is Required");
            }else if(!this.validateEmail(this.login_user.email_id))
            {
                this.errors.push("Not Valid Email Id Pls Fill Valid Email Id");
            }
            if (!this.login_user.password) {
                this.errors.push("password is Required");
            }
            else{
                var userJson = JSON.parse(localStorage.getItem("User"));
                console.log("USerJson", userJson);

                 if (userJson == null) {
                     console.log("No Registration")
                 }
                 else{
                    var isvalid = false;
                     for(var i=0;i<userJson.length;i++)
                     {
                         if (userJson[i].user_email_id == this.login_user.email_id && userJson[i].user_password == this.login_user.password) {
                             isvalid = true;
                             Store.current_login_user={
                                first_name : userJson[i].user_first_name,
                                last_name : userJson[i].user_last_name,
                                email : userJson[i].user_email_id,
                                password : userJson[i].user_password,
                                islogin:true,
                             }
                            
                         }
                         if (isvalid) {
                            Store.islogin = true;
                             this.$router.push('/home')
                         }
                         else{
                             console.log("wrong password");
                         }
                     }
                 }
            }
        },
        validateEmail(email_id)
        {
            var emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            return emailRegex.test(email_id);
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/_variable.scss";

.Login_main_div{
    width: $width;
    float: $float;
    height:$height;
    background-color:cornsilk;
    
    .Login_div{
        width: $width;
        float: $float;
        margin: $common_margin;
        .Login_card{
            width: $width;
            float: $float;
        }
        .Login_form
        {           
            width: $width;
            float: $float;
            margin: $common_margin;
        }
        .error{
            color: red;
        }
    }
}
</style>