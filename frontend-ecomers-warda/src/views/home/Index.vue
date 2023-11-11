<template>

    <div>

        <div class="container-fluid mt-3">

            <div class="row">

                <div class="col-md-3 mb-4">

                    <Category /> <!-- component Category -->

                </div>

                <div class="col-md-9 mb-4">

                    <Slider /> <!-- component Slider -->

                </div>

            </div>

        </div>



        <div class="container-fluid mb-5 mt-4">

            <!-- data product -->
            <div class="row">

                <div class="col-md-12">

                <h4 class="font-weight-bold"><i class="fa fa-shopping-bag"></i> PRODUK TERBARU</h4>

                <hr style="border-top: 5px solid rgb(154 155 156);border-radius:.5rem">

                </div>

            </div>
            <div class="row">
                <div v-for="product in products" :key="product.id" class="col-md-3 col-6 mb-3">

                <div class="card h-100 border-0 shadow rounded-md">

                    <div class="card-img">

                        <img :src="product.image"

                            class="w-100"

                            style="height: 15em;object-fit:cover;border-top-left-radius: .25rem;border-top-right-radius: .25rem;">

                    </div>

                    <div class="card-body">

                        <router-link :to="{name: 'detail_product', params:{slug: product.slug }}" class="card-title font-weight-bold" style="font-size:20px">

                            {{ product.title }}

                        </router-link>



                        <div class="discount mt-2" style="color: #999"><s>Rp. {{ moneyFormat(product.price) }}</s> <span

                                style="background-color: darkorange" class="badge badge-pill badge-success text-white">DISKON

                                {{ product.discount }} %</span>

                        </div>



                        <div class="price font-weight-bold mt-3" style="color: #47b04b;font-size:20px">

                            Rp. {{ moneyFormat(calculateDiscount(product)) }}</div>

                        <router-link :to="{name: 'detail_product', params:{slug: product.slug}}" class="btn btn-primary btn-md mt-3 btn-block shadow-md">LIHAT PRODUK</router-link>

                    </div>

                </div>

                </div>

            </div>
        </div>

    </div>

</template>



<script>

    import Category from '../../components/Category.vue' // <-- component Category

    import Slider from '../../components/Slider.vue' // <-- component Slider
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'



    export default {
        components: {

Category,       // <-- register component Category

Slider          // <-- register component slider

},



setup() {



//store vuex

const store = useStore()



//onMounted akan menjalankan action "getProducts" di module "product"

onMounted(() => {

    store.dispatch('product/getProducts')

})



//computed properti digunakan untuk get data products dari state di module product 

const products = computed(() => {

    return store.state.product.products

})



return {

    store,

    products

}



}



}

</script>