// import { WindowSharp } from "@mui/icons-material";
import { api } from "../../Config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_REQUEST } from "./ActionType"


export const createPayment=(orderId)=>async(dispatch)=>{

    dispatch({type: CREATE_PAYMENT_REQUEST })
    try{
        const {data}= await api.post(`/api/payments/${orderId}`,{});
        if(data.payment_link_url){
            window.location.href= data.payment_link_url;
        }

    } catch (error){
        dispatch({type:CREATE_PAYMENT_FAILURE,payload: error.message});

    }

}

export const updatePayment=(reqdata)=>async(dispatch)=>{

    dispatch({type: UPDATE_PAYMENT_REQUEST })
    try{
        const {data}= await api.get(`/api/payments?=${reqdata.paymentId}&orderId=${reqdata.orderId}`);
        
        console.log("update payment link --",data);
    } catch (error){
        dispatch({type:CREATE_PAYMENT_FAILURE,payload: error.message});

    }

}