<template>

    <div class="container-fluid mb-5 mt-4">
  
          <div class="row">
  
              <div class="col-md-6">
  
                  <div class="card border-0 shadow rounded">
  
                      <div class="card-body">
  
                          <h5><i class="fa fa-shopping-cart"></i> DETAIL PESENAN</h5>
  
                          <hr>
  
                          <table class="table"
  
                              style="border-style: solid !important;border-color: rgb(198, 206, 214) !important;">
  
                              <tbody>
  
                                  <tr v-for="cart in carts" :key="cart.id" style="background: #edf2f7;">
  
                                      <td class="b-none" width="25%">
  
                                          <div class="wrapper-image-cart">
  
                                              <img :src="cart.product.image" style="width: 100%;border-radius: .5rem">
  
                                          </div>
  
                                      </td>
  
                                      <td class="b-none" width="50%">
  
                                          <h5><b>{{ cart.product.title }}</b></h5>
  
                                          <table class="table-borderless" style="font-size: 14px">
  
                                              <tr>
  
                                                  <td style="padding: .20rem">QTY</td>
  
                                                  <td style="padding: .20rem">:</td>
  
                                                  <td style="padding: .20rem"><b>{{ cart.quantity }}</b></td>
  
                                              </tr>
  
                                          </table>
  
  
  
                                      </td>
  
                                      <td class="b-none text-right">
  
                                          <p class="m-0 font-weight-bold">Rp. {{ moneyFormat(cart.price) }}
  
                                          </p>
  
  
  
                                          <p class="m-0">
  
                                              <s style="text-decoration-color:red">Rp.
  
                                                  {{ moneyFormat(cart.product.price * cart.quantity) }}</s>
  
                                          </p>
  
  
  
                                          <br>
  
                                          <div class="text-right">
  
                                              <button @click.prevent="removeCart(cart.id)" class="btn btn-sm btn-danger">
  
                                                  <i class="fa fa-trash"></i>
  
                                              </button>
  
                                          </div>
  
                                      </td>
  
                                  </tr>
  
                              </tbody>
  
                          </table>
  
  
  
                          <table class="table table-default">
  
                              <tbody>
  
                                  <tr>
  
                                      <td class="set-td text-left" width="60%">
  
                                          <p class="m-0">JUMLAH </p>
  
                                      </td>
  
                                      <td class="set-td  text-right" width="30%">&nbsp; : Rp.</td>
  
                                      <td class="text-right set-td ">
  
                                          <p class="m-0" id="subtotal"> {{ moneyFormat(cartTotal) }}
  
                                          </p>
  
                                      </td>
  
                                  </tr>
  
                                  <tr>
  
                                      <td class="set-td text-left border-0">
  
                                          <p class="m-0">ONGKOS KIRIM (<strong>{{ cartWeight }}</strong> gram)</p>
  
                                      </td>
  
                                      <td class="set-td border-0 text-right">&nbsp; : Rp.</td>
  
                                      <td class="set-td border-0 text-right">
  
                                          <p class="m-0" id="ongkir-cart"> {{ moneyFormat(state.courier_cost) }}</p>
  
                                      </td>
  
                                  </tr>
  
                                  <tr>
  
                                      <td class=" text-left border-0">
  
                                          <p class="font-weight-bold m-0 h5 text-uppercase">Grand Total </p>
  
                                      </td>
  
                                      <td class=" border-0 text-right">&nbsp; : Rp.</td>
  
                                      <td class=" border-0 text-right">
  
                                          <p class="font-weight-bold m-0 h5" align="right">
  
                                              {{ moneyFormat(state.grandTotal) }} </p>
  
                                      </td>
  
                                  </tr>
  
                              </tbody>
  
                          </table>
  
  
  
                      </div>
  
                  </div>
  
              </div>
  
              <div class="col-md-6">
  
                  <div class="card border-0 shadow rounded">
  
                      
  
                      <!-- start ongkos kirim -->
  
  
  
                      <div class="card-body">
  
                          <h5><i class="fa fa-user-circle"></i> RINCIAN PENGIRIMAN</h5>
  
                          <hr>
  
                          
  
                          <div class="row">
  
                              
  
                              <div class="col-md-6">
  
                                  <div class="form-group">
  
                                      <label class="font-weight-bold">NAMA LENGKAP</label>
  
                                      <input type="text" class="form-control" id="nama_lengkap" placeholder="Nama Lengkap"
  
                                          v-model="state.name">
  
                                      <div v-if="validation.name" class="mt-2 alert alert-danger">
  
                                          Masukkan Nama Lengkap
  
                                      </div>
  
                                  </div>
  
                              </div>
  
                              
  
                              <div class="col-md-6">
  
                                  <div class="form-group">
  
                                      <label class="font-weight-bold">NO. HP / WHATSAPP</label>
  
                                      <input type="number" class="form-control" id="phone" placeholder="No. HP / WhatsApp"
  
                                          v-model="state.phone">
  
                                      <div v-if="validation.phone" class="mt-2 alert alert-danger">
  
                                          Masukkan No. Telp
  
                                      </div>
  
                                  </div>
  
                              </div>
  
                              
  
                              <div class="col-md-12">
  
                                  <div class="form-group">
  
                                      <label class="font-weight-bold">PROVINSI</label>
  
                                      <select class="form-control" v-model="state.province_id" @change="getCities">
  
                                          <option value="">-- pilih provinsi --</option>
  
                                          <option v-for="province in state.provinces" :key="province.id" :value="province.province_id">
  
                                              {{ province.name }}</option>
  
                                      </select>
  
                                  </div>
  
                              </div>
  
                              
  
                              <div class="col-md-12">
  
                                  <div class="form-group">
  
                                      <label class="font-weight-bold">KOTA / KABUPATEN</label>
  
                                      <select class="form-control" v-model="state.city_id" @change="getCourier">
  
                                          <option value="">-- pilih kota --</option>
  
                                          <option v-for="city in state.cities" :key="city.id" :value="city.city_id">{{ city.name }}
  
                                          </option>
  
                                      </select>
  
                                  </div>
  
                              </div>
  
  
  
                              <div class="col-md-12">
  
                                  <div class="form-group" v-if="state.courier">
  
                                      <label class="font-weight-bold">KURIR PENGIRIMAN</label>
  
                                      <br>
  
                                      <div class="form-check form-check-inline">
  
                                          <input class="form-check-input select-courier" type="radio" name="courier"
  
                                              id="ongkos_kirim-jne" value="jne" v-model="state.courier_type" @change="getOngkir">
  
                                          <label class="form-check-label font-weight-bold mr-4" for="ongkos_kirim-jne">
  
                                              JNE</label>
  
                                          <input class="form-check-input select-courier" type="radio" name="courier"
  
                                              id="ongkos_kirim-tiki" value="tiki" v-model="state.courier_type" @change="getOngkir">
  
                                          <label class="form-check-label font-weight-bold mr-4"
  
                                              for="ongkos_kirim-jnt">TIKI</label>
  
                                          <input class="form-check-input select-courier" type="radio" name="courier"
  
                                              id="ongkos_kirim-pos" value="pos" v-model="state.courier_type" @change="getOngkir">
  
                                          <label class="form-check-label font-weight-bold" for="ongkos_kirim-jnt">POS</label>
  
                                      </div>
  
                                  </div>
  
                              </div>
  
  
  
                              <div class="col-md-12">
  
                                  <div class="form-group" v-if="state.cost">
  
                                      <hr>
  
                                      <label class="font-weight-bold">SERVICE KURIR</label>
  
                                      <br>
  
                                      <div v-for="value in state.costs" :key="value.service" class="form-check form-check-inline">
  
                                          <input class="form-check-input" type="radio" name="cost" :id="value.service"
  
                                              :value="value.cost[0].value+'|'+value.service" v-model="state.costService"
  
                                              @change="getCostService">
  
                                          <label class="form-check-label font-weight-normal mr-5" :for="value.service">
  
                                              {{ value.service }} - Rp. {{ moneyFormat(value.cost[0].value) }}</label>
  
                                      </div>
  
                                  </div>
  
                              </div>
  
  
  
                              <div class="col-md-12">
  
                                  <div class="form-group">
  
                                      <label class="font-weight-bold">ALAMAT LENGKAP</label>
  
                                      <textarea class="form-control" id="alamat" rows="3"
  
                                          placeholder="Alamat Lengkap&#10;&#10;Contoh: Perum. Griya Palem Indah, B-17 Jombang Jawa Timur 61419"
  
                                          v-model="state.address"></textarea>
  
                                      <div v-if="validation.address" class="mt-2 alert alert-danger">
  
                                          Masukkan Alamat Lengkap
  
                                      </div>
  
                                  </div>
  
                              </div>
  
  
  
                              <div v-if="state.buttonCheckout" class="col-md-12">
  
                                  <button @click.prevent="checkout" class="btn btn-primary btn-lg btn-block">CHECKOUT</button>
  
                              </div>
  
  
  
                          </div>
  
  
  
                      </div>
  
  
  
                      <!-- end ongkos kirim -->
  
  
  
                  </div>
  
              </div>
  
          </div>
  
      </div>
  
  </template>
  
  
  
  <script>
  
      import { onMounted, computed, reactive } from 'vue'
  
      import { useStore } from 'vuex' // <-- vuex
  
      import Api from '../../api/Api' // <-- global API endpoint
  
      import { useRouter } from 'vue-router' // vue router
  
  
  
      export default {
  
  
  
          name: 'CartComponent',
  
  
  
          setup() {
  
  
  
              //store vuex
  
              const store = useStore()
  
  
  
              //vue router
  
              const router = useRouter()
  
  
  
              //mounted cart
  
              onMounted(() => {
  
              
  
                  //menjalankan beberapa actions di module cart
  
                      store.dispatch('cart/cartCount')  // <-- untuk memanggil action "cartCount" di module "cart"
  
                      store.dispatch('cart/cartTotal')  // <-- untuk memanggil action "cartTotal" di module "cart"
  
                      store.dispatch('cart/cartWeight') // <-- untuk memanggil action "cartWeight" di module "cart"
  
              
  
              })
  
  
  
              //get data cart dari getters cart di module cart
  
              const carts = computed(() => {
  
                  return store.getters['cart/getCart']
  
              })
  
  
  
              //get total cart dari state cartTotal di module cart
  
              const cartTotal = computed(() => {
  
                  return store.state.cart.cartTotal
  
              })
  
  
  
              //get cart weight dari state cartWeight di module cart
  
              const cartWeight = computed(() => {
  
                  return store.state.cart.cartWeight
  
              })
  
  
  
              /**
  
               * remove cart
  
               */
  
              function removeCart(cart_id) {
  
                  //panggil actions "removeCart" di module "cart" dengan parameter "cart_id"
  
                  store.dispatch('cart/removeCart', cart_id)
  
              }
  
  
  
              /**
  
               * ongkos kirim
  
              */
  
  
  
              //define state form
  
              const state = reactive({
  
                  name:           '',     // <-- state name
  
                  phone:          '',     // <-- state phone  
  
                  address:        '',     // <-- state address  
  
                  provinces:      [],     // <-- state provinces
  
                  province_id:    '',     // <-- state ID province
  
                  cities:         [],     // <-- state cities
  
                  city_id:        '',     // <-- state ID City
  
                  courier:        false,  // <-- state pilihan kurir
  
                  courier_type:   '',     // <-- state jenis kurir 
  
                  cost:           false,  // <-- state cost kurir
  
                  costs:          '',     // <-- state costs kurir
  
                  costService:    '',     // <-- state get data cost dan service pengiriman
  
                  courier_cost:   0,      // <-- state untuk menyimpan cost kurir
  
                  courier_service:'',     // <- state untuk menyimpan service kurir        
  
                  buttonCheckout: false,  // <-- state button checkout 
  
                  grandTotal:     0       // <-- state untuk grand total 
  
              })
  
  
  
              //define state validation
  
              const validation = reactive({
  
                  name:       false, // <-- validation name
  
                  phone:      false, // <-- validation phone
  
                  address:    false  // <-- validation address 
  
              })
  
  
  
              //mounted data provinces
  
              const provinces = onMounted(() => {
  
  
  
              Api.get('/rajaongkir/provinces')
  
  
  
                  .then(response => {
  
  
  
                      state.provinces = response.data.data // <-- assign state provinces dengan data hasil response
  
  
  
                  }).catch(error => {
  
                      console.log(error)
  
                  }) 
  
  
  
              })
  
  
  
              //fungsi mendapatkan data kota berdasarkan ID provinsi
  
              function getCities() {
  
                  
  
                  Api.get('/rajaongkir/cities', {
  
                      params: {
  
                          province_id: state.province_id // ID provinsi
  
                      }
  
                  })
  
                  .then(response => {
  
  
  
                      state.cities = response.data.data // <-- assign state cities dengan data hasil response
  
  
  
                  }).catch(error => {
  
                      console.log(error)
  
                  }) 
  
  
  
              }
  
  
  
              //fungsi menampilkan pilihan courier
  
              function getCourier() {
  
                  // set state courier menjadi true, untuk menampilkan pilihan kurir
  
                  state.courier = true 
  
              }
  
  
  
              //fungsi untuk mendapatkan biaya ongkos kirim
  
              function getOngkir() {
  
                  
  
                  //check berat produk
  
                  if (cartWeight.value == 0) {
  
                      alert('silahkan pilih produk terlebih dahulu!')
  
                      return
  
                  }
  
  
  
                  Api.post('/rajaongkir/checkOngkir', {
  
                      city_destination: state.city_id,    // <-- ID kota
  
                      weight: cartWeight.value,           // <-- berat produk
  
                      courier: state.courier_type         // <-- jenis kurir
  
                  })
  
                  .then(response => {
  
  
  
                      // set state cost menjadi true, untuk menampilkan pilihan cost pengiriman
  
                      state.cost = true
  
                      
  
                      //assign state costs dengan hasil response
  
                      state.costs = response.data.data.costs
  
  
  
                  }).catch(error => {
  
                      console.log(error)
  
                  })
  
  
  
              }
  
  
  
              //fungsi untuk mengambil biaya ongkos kirim dan service kurir
  
              function getCostService() {
  
                  
  
                  //split value dengan menghapus string -> | 
  
                  let shipping = state.costService.split("|")
  
  
  
                  //set state cost dan service
  
                  state.courier_cost    = shipping[0]
  
                  state.courier_service = shipping[1]
  
  
  
                  //hitung grandrotal
  
                  const token = store.state.auth.token
  
  
  
                  Api.defaults.headers.common['Authorization'] = "Bearer " +token
  
                  Api.get('cart/total')
  
                  .then(response => {
  
  
  
                      //jumlahkan total cart dan cost pengiriman
  
                      state.grandTotal = parseInt(response.data.total) + parseInt(state.courier_cost)
  
  
  
                  })
  
  
  
                  //show button checkout
  
                  state.buttonCheckout = true
  
              }
  
  
  
              //method/function checkout
  
              function checkout() {
  
  
  
                  //ceck apakah ada nama, phone, address dan berat produk ?
  
                  if (state.name && state.phone && state.address && cartWeight.value) {
  
                      
  
                      //define variable
  
                      let data = {
  
                          name:               state.name,
  
                          phone:              state.phone,
  
                          province_id:        state.province_id,
  
                          city_id:            state.city_id,
  
                          courier_type:       state.courier_type,
  
                          courier_service:    state.courier_service,
  
                          courier_cost:       state.courier_cost,
  
                          weight:             cartWeight.value,
  
                          address:            state.address,
  
                          grandTotal:         state.grandTotal
  
                      }
  
                      store.dispatch('cart/checkout', data)
  
                          .then(response => {
  
  
  
                              //jika berhasil, arahakan ke detail order dengan parameter snap_token midtrans
  
                              router.push({
  
                                  name: 'detail_order',
  
                                  params: {
  
                                      snap_token: response[0].snap_token
  
                                  }
  
                              })
  
                          }).catch(error => {
  
                              console.log(error)
  
                          })
  
  
  
                  }
  
  
  
                  //check validasi name
  
                  if (!state.name) {
  
                      validation.name = true
  
                  }
  
  
  
                      //check validasi phone
  
                  if (!state.phone) {
  
                      validation.phone = true
  
                  }
  
  
  
                      //check validasi address
  
                  if (!state.address) {
  
                      validation.address = true
  
                  }
  
  
  
              }
  
  
  
              return {
  
                  carts,              // <-- state carts
  
                  cartTotal,          // <-- state cartTotal
  
                  cartWeight,         // <-- state cartWeight
  
                  removeCart,         // <-- method removeCart
  
                  state,              // <-- state form
  
                  validation,         // <-- state validation
  
                  provinces,          // <-- data provinces
  
                  getCities,          // <-- data city
  
                  getCourier,         // <-- get data courier
  
                  getOngkir,          // <-- get data ongkir
  
                  getCostService,     // <-- get cost dan service shipping
  
                  checkout            // <-- function checkout 
  
              }
  
  
  
          }
  
  
  
      }
  
  </script>