//import global API

import Api from '../../api/Api'



const slider = {



    //set namespace true

    namespaced: true,



    //state

    state: {



        //index slider

        sliders: []

    

    },



    //mutations

    mutations: {



        //set state sliders dengan data dari response 

        GET_SLIDERS(state, sliders) {

            state.sliders = sliders

        } 



    },



    //actions

    actions: {



        //action getSliders

        getSliders({ commit }) {



            //get data sliders ke server

            Api.get('/sliders')

            .then(response => {



                //commit ke mutation GET_SLIDERS dengan response data

                commit('GET_SLIDERS', response.data.sliders)



            }).catch(error => {



                //show error log dari response

                console.log(error)



            })

        }



    },



    //getters

    getters: {



    }



}



export default slider