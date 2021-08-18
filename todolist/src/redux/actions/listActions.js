import {GET_LISTS} from '../constants/actionTypes'
import axios from 'axios'
export const getlists=()=> (dispatch) => {
     axios.get('/api/list/')
     .then(res=>dispatch({type:GET_LISTS,payload:res.data}))
     .catch(err=>console.log(err))
}
export const addList=(newList)=> (dispatch) => {
     axios.post('/api/list/add',newList)
     .then(res=>dispatch(getlists()))
     .catch(err=>console.log(err))
}
export const deleteList=(idList)=> (dispatch) => {
    axios.delete(`/api/list/delete/${idList}`)
    .then(res=>dispatch(getlists()))
    .catch(err=>console.log(err))
}
