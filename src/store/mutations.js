// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    ALL_USERS,
    ALL_USERS_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE, GET_MESSAGE, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAILURE, USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE,
} from './mutation-types'

export const productMutations = {
    [ALL_PRODUCTS](state) {
        state.showLoader = true
        // this[]
    },
    [ALL_PRODUCTS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.products = payload
    },
    [PRODUCT_BY_ID](state) {
        state.showLoader = true
    },
    [PRODUCT_BY_ID_SUCCESS](state, payload) {
        state.showLoader = false;
        state.product = payload
    },
    [ADD_PRODUCT]: (state) => {
        state.showLoader = true
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products.push(payload)
    },
    [UPDATE_PRODUCT]: (state) => {
        state.showLoader = true
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products = state.products.map(p => {
            if (p._id === payload._id) {
                payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
                return payload
            }
            return p
        })
    },
    [REMOVE_PRODUCT]: (state) => {
        state.showLoader = true
    },
    [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        const index = state.products.findIndex(p => p._id === payload);
        console.debug('index', index);
        state.products.splice(index, 1)
    }
};

export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p._id === payload);
        state.cart.splice(index, 1);
        console.log(state.cart, state.cart.length, index)
    }
};

export const manufacturerMutations = {
    [ALL_MANUFACTURERS](state) {
        state.showLoader = true
    },
    [ALL_MANUFACTURERS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.manufacturers = payload
    }
};

export const userMutations = {
    [ALL_USERS](state) {
        state.showLoader = true;
    },
    [ALL_USERS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.users = payload;
    },
    [ADD_USER]: (state) => {
        state.showLoader = true
    },
    [ADD_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.users.push(payload)
    },
    [DELETE_USER]: (state) => {
        state.showLoader = false;
    },
    [DELETE_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.deleted = payload;

    },

};

export const loginMutations = {
    [LOGIN](state) {
        state.showLoader = true;
    },
    [LOGIN_SUCCESS](state, token, user) {
        state.showLoader = false;
        state.user = user;
        state.token = token;
    },
    [LOGIN_ERROR](state) {
        state.showLoader = false
    },
    [LOGOUT](state) {
        state.token = ''
    },
    [USER_PROFILE](state){
        state.showLoader = true;
    },
    [USER_PROFILE_SUCCESS](state, profile){
        state.showLoader = false;
        state.profile= profile;
    },
    [USER_PROFILE_FAILURE](state){
        state.showLoader = false;
    },
    [UPDATE_PROFILE](state){
        state.showLoader = true;
    },
    [UPDATE_PROFILE_SUCCESS](state, profile){
        state.showLoader = false;
        state.profile = profile;
    },
    [UPDATE_PROFILE_FAILURE](state){
        state.showLoader = false;
    },
};
export const messageMutation = {
    [SEND_MESSAGE](state){
        state.showLoader = true;
    },
    [SEND_MESSAGE_SUCCESS](state, message){
        state.showLoader = false;
        state.message  = message;
    },
    [SEND_MESSAGE_FAILURE](state){
        state.showLoader = false;
    },
    [GET_MESSAGE](state){
        state.showLoader = true;
    },
    [GET_MESSAGE_SUCCESS](state, message){
        state.showLoader = false;
        state.messages  = message;
    },
    [GET_MESSAGE_FAILURE](state){
        state.showLoader = false;
    },



};

export const registrationMutations = {
    [REGISTRATION](state) {
        state.showLoader = true;
    },
    [REGISTRATION_SUCCESS](state, payload) {
        state.showLoader = true;
        state.auth = payload;
    }
};
