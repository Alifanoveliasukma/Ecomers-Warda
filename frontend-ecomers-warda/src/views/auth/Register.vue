<template>

    <div class="container-fluid mb-5 mt-4">

        <div class="row justify-content-center">

            <div class="col-md-6">

                <div class="card border-0 shadow rounded">

                    <div class="card-body">

                        <h4>REGISTER</h4>

                        <hr>

                        <form @submit.prevent="register">

                            <div class="row">

                                <div class="col-md-6">

                                    <div class="form-group">

                                        <label>Full Name</label>

                                        <input type="text" v-model="user.name" class="form-control" placeholder="Full Name">

                                    </div>

                                    <div v-if="validation.name" class="mt-2 alert alert-danger">

                                        {{ validation.name[0] }}

                                    </div>

                                </div>

                                <div class="col-md-6">

                                    <div class="form-group">

                                        <label>Email address</label>

                                        <input type="email" v-model="user.email" class="form-control"

                                            placeholder="Email Address">

                                    </div>

                                    <div v-if="validation.email" class="mt-2 alert alert-danger">

                                        {{ validation.email[0] }}

                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-md-6">

                                    <div class="form-group">

                                        <label>Password</label>

                                        <input type="password" v-model="user.password" class="form-control"

                                            placeholder="Password">

                                    </div>

                                    <div v-if="validation.password" class="mt-2 alert alert-danger">

                                        {{ validation.password[0] }}

                                    </div>

                                </div>

                                <div class="col-md-6">

                                    <div class="form-group">

                                        <label>Konfirmasi Password</label>

                                        <input type="password" v-model="user.password_confirmation" class="form-control"

                                            placeholder="Konfirmasi Password">

                                    </div>

                                </div>

                            </div>

                            <button type="submit" class="btn btn-primary btn-block">REGISTER</button>

                        </form>

                    </div>

                </div>

                <div class="register mt-3 text-center">

                    <p>

                        Suda punya akun ? <router-link :to="{name: 'login'}">Login Disini !</router-link>

                    </p>

                </div>

            </div>

        </div>

    </div>

</template>



<script>

    import { ref, reactive } from 'vue'

    import { useStore } from 'vuex'

    import { useRouter } from 'vue-router'



    export default {



        name: 'RegisterComponent',



        setup() {



            //user state

            const user = reactive({

                name: '',

                email: '',

                password: '',

                password_confirmation: ''

            })



            //validation state

            const validation = ref([])



            //store vuex

            const store = useStore()



            //route

            const router = useRouter()



            //function register, fungsi ini di jalankan ketika form di submit

            function register() {



                //define variable 

                let name     = user.name

                let email    = user.email

                let password = user.password

                let password_confirmation = user.password_confirmation



               //panggil action "register" di dalam module "auth" vuex

                store.dispatch('auth/register', {

                    name,

                    email,

                    password,

                    password_confirmation

                })

                .then(() => {

                    //redirect ke dashboard

                    router.push({name: 'dashboard'})

                }).catch(error => {

                    //show validaation message

                    validation.value = error

                })

            }



            //return a state and function

            return {

                user,

                validation,

                register

            }



        }



    }

</script>