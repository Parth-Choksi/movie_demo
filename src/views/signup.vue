<template>
    <div class="Signup_main_div">
        <div class="Signup_div">
            <v-card class="Signup_card">
                <h1><center>SignUp Form</center></h1>
            <v-form class="Signup_form">
                <p v-if="errors.length">
                    <ul>
                        <li v-for="e in errors" :key="e.id">{{e}}</li>
                    </ul>
                </p>
                <br>
               <v-row>
                    <v-col cols="5">
                        <label for="first_name">FirstName</label>
                        <v-text-field outlined dense v-model="$v.register_user.first_name.$model"></v-text-field>
                        <p class="error" v-if="!$v.register_user.first_name.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.first_name.minLength">Minimum 5 Character</p>
                    </v-col>

                    <v-col cols="5">
                        <label for="last_name">LastName</label>
                        <v-text-field outlined dense v-model="register_user.last_name"></v-text-field>
                        <p class="error" v-if="!$v.register_user.last_name.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.last_name.minLength">Minimum 5 Character</p>
                    </v-col>
               </v-row>

               <v-row>
                    <v-col cols="5">
                        <label for="email">Email Id</label>
                        <v-text-field outlined dense v-model="register_user.email_id"></v-text-field>
                        <p class="error" v-if="!$v.register_user.email_id.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.email_id.email">not valid email type</p>
                    </v-col>

                    <v-col cols="5">
                        <label for="contact_number">Contact Number</label>
                        <v-text-field outlined dense v-model="register_user.contact_number"></v-text-field>
                        <p class="error" v-if="!$v.register_user.contact_number.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.contact_number.numeric">it Should be Number</p>
                    </v-col>
               </v-row>

               <v-row>
                    <v-col cols="5">
                        <label for="password">Password</label>
                        <v-text-field outlined dense v-model="register_user.password"></v-text-field>
                        <p class="error" v-if="!$v.register_user.password.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.password.minLength">Password Have atleast 8 Character</p>
                    </v-col>

                    <v-col cols="5">
                        <label for="confirm_password">Confirm Password</label>
                        <v-text-field outlined dense v-model="register_user.confirm_password"></v-text-field>
                        <p class="error" v-if="!$v.register_user.confirm_password.required">this field is required</p>
                        <p class="error" v-if="!$v.register_user.confirm_password.sameas">Confirm Password does not match with your password</p>
                    </v-col>
               </v-row>

                <v-btn color="success" outlined @click="gotoLogin()">SignUp</v-btn>
            </v-form>
            </v-card>
        </div>
    </div>
</template>

<script>
import {required, minLength, email,numeric,sameAs} from 'vuelidate/lib/validators'
export default {
    data()
    {
        return{
            errors:[],
            register_user:{
                first_name:null,
                last_name:null,
                email_id:null,
                contact_number:null,
                password:null,
                confirm_password:null,
            },
            User:{
                user_first_name:null,
                user_last_name:null,
                user_email_id:null,
                user_contact_number:null,
                user_password:null,   
            },
            localuser:{
                User:{}
            },
            userStringify:'',
        }
    },
    validations:{
        register_user:{
            first_name:{
                required,
                minLength : minLength(5),
            },
            last_name:{
                required,
                minLength : minLength(5)
            },
            email_id:{
                required,
                email,
            },
            contact_number:{
                required,
                numeric,
            },
            password:{
                required,minLength : minLength(8),
            },
            confirm_password:{
                required,sameas :sameAs(function()
                {
                    return this.register_user.password;
                })
            }

        }
    },
    methods:
    {
        gotoLogin()
        {
            this.errors=[];
            if(!this.register_user.password)
            {
                this.errors.push("Password Is Required");
            }
            if(!this.register_user.confirm_password) {
                this.errors.push("Confirm Passsword Is Required");
            }else if(this.register_user.password != this.register_user.confirm_password)
            {
                this.errors.push("Password and Confirm Password Does not Match");
            }
            else{
                // State Management

                console.log(localStorage.getItem("User"));
                var userJson = JSON.parse(localStorage.getItem("User"))
                if (userJson == null) {
                    this.User = {
                        user_first_name : this.register_user.first_name,
                        user_last_name : this.register_user.last_name,
                        user_email_id : this.register_user.email_id,
                        user_contact_number : this.register_user.contact_number,
                        user_password : this.register_user.password,
                    }
                    this.localuser = this.User;
                    var arr=[];
                    console.log(this.localuser);
                    arr.push(this.localuser);
                    //conver to user stringify
                    this.userStringify = JSON.stringify(arr);
                    console.log(this.userStringify);
                    localStorage.setItem("User",this.userStringify);
                    this.$router.push('/login');
                    
                }
                else{
                    this.User = {
                        user_first_name : this.register_user.first_name,
                        user_last_name : this.register_user.last_name,
                        user_email_id : this.register_user.email_id,
                        user_contact_number : this.register_user.contact_number,
                        user_password : this.register_user.password,
                    }
                    userJson.push(this.User);
                    console.log("User json",userJson);
                    this.userStringify = JSON.stringify(userJson);
                    console.log(this.userStringify);

                    localStorage.setItem("User",this.userStringify);

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
.Signup_main_div{
    width: $width;
    float: $float;
    height:$height;
    background-color:cornsilk;
    
    .Signup_div{
        width: $width;
        float: $float;
        margin: $common_margin;
        .Signup_card{
            width: $width;
            float: $float;
        }
        .Signup_form
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