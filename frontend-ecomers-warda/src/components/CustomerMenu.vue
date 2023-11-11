<template>

    <div class="card border-0 rounded shadow">
  
      <div class="card-body">
  
          <h5 class="font-weight-bold">MAIN MENU</h5>
  
          <hr>
  
          <ul class="list-group">
  
              <router-link :to="{name: 'dashboard' }" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
  
              <router-link :to="{name: 'order'}" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> My Order</router-link>
  
              <a @click="logout" style="cursor:pointer" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-sign-out-alt"></i> Logout</a>
  
          </ul>
  
      </div>
  
    </div>
  
  </template>
  
  
  
  <script>
  
  import { useStore } from 'vuex'
  
  import { useRouter } from 'vue-router'
  
  
  
  export default {
  
  
  
    name: 'CustomerMenuComponent',
  
  
  
    setup() {
  
  
  
      //store vuex
  
      const store = useStore()
  
  
  
      //vue router
  
      const router = useRouter()
  
  
  
      //method logout
  
      function logout() {
  
  
  
        //panggil action "logout" di dalam module "auth"
  
        store.dispatch('auth/logout')  
  
        .then(() => {
  
  
  
            //jika berhasil, akan di arahkan ke route login
  
            router.push({
  
              name: 'login'
  
            })
  
            
  
        })
  
  
  
      }
  
  
  
      //return a state and function
  
      return{
  
        store,
  
        router,
  
        logout
  
      }
  
  
  
    }
  
  
  
  }
  
  </script>