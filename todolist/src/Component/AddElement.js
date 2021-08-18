import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { addList } from '../redux/actions/listActions';

const AddElement=()=>{
    const [titre,setTitre]=useState("");
    const dispatch=useDispatch();
    const add=()=>{
        dispatch(addList({titre}));
        setTitre("")
    }
         
    return(  
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center'}}>
    
<form  onSubmit={(event) => {
        event.preventDefault();
        {add()};
      }}>
      <TextField variant="outlined"  placeholder="Add New Title" margin="normal" value={titre} onChange={(e)=>setTitre(e.target.value)}  />
    </form>
    </div>
    
</div>

    );
}

export default AddElement