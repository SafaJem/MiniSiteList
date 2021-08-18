import React from 'react'
import TextField from '@material-ui/core/TextField';

const Filter=({setSearchbytitle})=>{
return(
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center'}}>
    
<form  onSubmit={(event) => {
        event.preventDefault();
        
      }}>
      <TextField variant="outlined"  placeholder="Search by Title" margin="normal" onChange={(e)=>setSearchbytitle(e.target.value)}  />
    </form>
    </div>
    
</div>

);
}
export default Filter;