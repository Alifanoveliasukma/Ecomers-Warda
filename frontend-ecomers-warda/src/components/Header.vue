<template>

    <header class="section-header">

        <section class="header-main border-bottom">

            <div class="container-fluid">

                <div class="row align-items-center">

                    <div class="col-md-3 col-7">

                        <router-link :to="{name: 'home'}" class="text-decoration-none" data-abc="true">

                            <span class="logo"><i class="fab fa-app-store"></i> Warda Ecomers </span>

                        </router-link>

                    </div>

                    <div class="col-md-5 d-none d-md-block">

                        <form class="search-wrap">

                            <div class="input-group w-100"><input type="text" class="form-control search-form"

                                    style="width:55%;border: 1px solid #ffffff" name="q"

                                    placeholder="mau beli apa hari ini ?">

                                <div class="input-group-append">

                                    <button class="btn search-button" type="submit"><i class="fa fa-search"></i>

                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                    <div class="col-md-4 col-5">

                        <div class="d-flex justify-content-end">



                            <div class="cart-header">

                            <router-link :to="{name: 'cart'}" class="btn search-button btn-md" style="color: #ffffff;background-color: #6677ef;border-color: #ffffff;"><i class="fa fa-shopping-cart"></i> {{ cartCount }} | Rp. {{ moneyFormat(cartTotal) }} </router-link>

                            </div>



                            <div class="account">

                                <router-link :to="{name: 'login'}" v-if="!isLoggedIn" class="btn search-button btn-md d-none d-md-block ml-4"><i class="fa fa-user-circle"></i> ACCOUNT</router-link>

                                <router-link :to="{name: 'dashboard'}" v-else class="btn search-button btn-md d-none d-md-block ml-4"><i class="fa fa-tachometer-alt"></i> DASHBOARD </router-link>      

                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </section>

    </header>

</template>



<script>

    import { computed, onMounted } from 'vue'

    import { useStore } from 'vuex'



    export default {



        name: 'HeaderComponent',



        setup() {



            //store vuex

            const store = useStore()



            //computed

            const isLoggedIn = computed(() => {



                //get getter "isLoggedIn" dari module "auth"

                return store.getters['auth/isLoggedIn']



            })



            //cart count

            const cartCount = computed(() => {



                //get getter "cartCount" dari module "auth"

                return store.getters['cart/cartCount']

            })



            //cart total

            const cartTotal = computed(() => {



                //get getter "cartTotal" dari module "auth"

                return store.getters['cart/cartTotal']

            })



            //mounted

            onMounted(() => {



                //check state token

                const token = store.state.auth.token



                if(!token) {

                    return

                }



                //saat mounted, akan memanggil action "cartCount" di module "cart"

                store.dispatch('cart/cartCount')



                //saat mounted, akan memanggil action "cartTotal" di module "cart"

                store.dispatch('cart/cartTotal')

            })





            return {

                store,

                isLoggedIn,

                cartTotal,

                cartCount

            }



        }



    }

</script>