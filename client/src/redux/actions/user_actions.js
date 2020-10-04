import axios from 'axios'
import {LOGIN_USER, REGISTER_USER, AUTH_USER} from './Types'
import {USER_SERVER} from '../../components/utils/Misc'

function registerUser(dataToSubmit){
    const request = 
        axios.post(`${USER_SERVER}/registers`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER, 
        payload: request
    }
}

function loginUser(dataToSubmit){
    const request = 
        axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER, 
        payload: request
    }
}

function auth(){
    const request = 
        axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);
    
    return {
        type: AUTH_USER, 
        payload: request
    }
}

export {loginUser, registerUser, auth}

