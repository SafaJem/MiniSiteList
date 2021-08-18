import {GET_LISTS} from '../constants/actionTypes'

const initState={
    lists:[]
}
export const reducerList=(state=initState,{type,payload})=>{
switch(type){
    case GET_LISTS : return {...state,lists:payload};
    default : return state;
}
}