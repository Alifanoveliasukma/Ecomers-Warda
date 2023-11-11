<template>

    <div class="card border-0 shadow rounded">

        <div class="card-body">

            <h5 class="font-weight-bold"><i class="fa fa-shopping-bag"></i> KATEGORI</h5>

            <hr>

            <ul class="list-group">

                

                <router-link :to="{name: 'detail_category', params:{slug: category.slug}}" v-for="category in categories" :key="category.id" class="list-group-item shadow-sm font-weight-bold text-decoration-none text-dark">

                <img :src="category.image" style="width:35px"> {{ category.name }}

                </router-link>

                

                <router-link :to="{name: 'categories'}" class="list-group-item text-center active shadow-sm font-weight-bold text-decoration-none">LIHAT KATEGORI LAINNYA <i class="fa fa-long-arrow-alt-right"></i></router-link>

            </ul>

        </div>

    </div>

</template>



<script>

    import { computed, onMounted } from 'vue'

    import { useStore } from 'vuex'



    export default {



        name: 'CategoryComponent',



        setup() {

            

            //store vuex

            const store = useStore()



            //onMounted akan menjalankan action getCategories di module category, sebelum computed di atas dijalankan

            onMounted(() => {

                store.dispatch('category/getCategories')

            })



            //computed properti digunakan untuk get data categories dari state di module category 

            const categories = computed(() => {

                return store.state.category.categories

            })



            return {

                categories

            }



        }



    }

</script>