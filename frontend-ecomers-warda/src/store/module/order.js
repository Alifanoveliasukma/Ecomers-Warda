//import global API

import Api from '../../api/Api'



const order = {



    //set namespace true

    namespaced: true,



    //state

    state: {

        

        //define state orders

        orders: [],

        //define detail order

        detailOrder: {},

        //define product in order

        productInOrder: []



    },



    //mutations

    mutations: {



        //GET ORDER

        GET_ORDER(state, orders) {

            state.orders = orders // <-- assign state orders dari hasil response

        },



        //detail order

        DETAIL_ORDER(state, detailOrder) {

            state.detailOrder = detailOrder // <-- assign state detailOrder dari hasil response

        },



        //product in order

        PRODUCT_IN_ORDER(state, product) {

            state.productInOrder = product // <-- assign state productInOrder dari hasil response

        }



    },



    //actions

    actions: {



        //action getOrder

        getOrder({ commit }) {



            //define variable token

            const token = localStorage.getItem('token')



            Api.defaults.headers.common['Authorization'] = "Bearer " +token

            Api.get('/order')

            .then(response => {

                

                //commit ke mutation GET_ORDER

                commit('GET_ORDER', response.data.data)



            })



        },



        //action detailOrder

        detailOrder({ commit }, snap_token) {



            //define variable token

            const token = localStorage.getItem('token')



            Api.defaults.headers.common['Authorization'] = "Bearer " +token

            Api.get(`order/${snap_token}`)

            .then(response => {

                

                //commit mutation DETAIL_ORDER

                commit('DETAIL_ORDER', response.data.data)



                //commit mutation PRODUCT_IN_ORDER

                commit('PRODUCT_IN_ORDER', response.data.product)



            })



        }



    },



    //getters

    getters: {



        //getter getOrder

        getOrder(state) {

            return state.orders

        },



        //getter detailOrder

        detailOrder(state) {

            return state.detailOrder

        },



        //getter productInOrder

        productInOrder(state) {

            return state.productInOrder

        }



    }



}



export default order