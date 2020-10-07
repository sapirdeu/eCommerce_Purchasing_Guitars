import axios from 'axios'
import {
        GET_PRODUCTS_BY_ARRIVAL,
        GET_PRODUCTS_BY_SELL,
        GET_BRANDS,
        GET_WOODS,
        GET_PRODUCTS_TO_SHOP
} from './Types'
import {PRODUCT_SERVER} from '../../components/utils/Misc'

function getProductsByArrival(){
    //sort by ARRIVAL: /api/product/articles?sortBy=createdAt&order=desc&limit=4
    const request = 
        axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data);
    
    return {
        type: GET_PRODUCTS_BY_ARRIVAL, 
        payload: request
    }
}

function getProductsBySell(){
    //sort by SELL: /api/product/articles?sortBy=sold&order=desc&limit=4
    const request = 
        axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data);
    
    return {
        type: GET_PRODUCTS_BY_SELL, 
        payload: request
    }
}

function getProductsToShop(skip, limit, filters=[], previousState=[]){
    const data = {skip, limit, filters}
    const request = 
        axios.post(`${PRODUCT_SERVER}/shop`, data)
        .then(response => {
            let newState = [
                ...previousState,
                ...response.data.articles
            ]

            return{
                size: response.data.size,
                articles: newState
            }
    });
    
    return {
        type: GET_PRODUCTS_TO_SHOP, 
        payload: request
    }
}

function getBrands(){
    const request = 
        axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data);
    
    return {
        type: GET_BRANDS, 
        payload: request
    }
}

function getWoods(){
    const request = 
        axios.get(`${PRODUCT_SERVER}/woods`)
        .then(response => response.data);
    
    return {
        type: GET_WOODS, 
        payload: request
    }
}


export {getProductsByArrival, getProductsBySell, getBrands, getWoods, getProductsToShop}

