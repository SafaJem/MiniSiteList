import React , {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

import ListElements from './Component/ListElements';
import AddElement from './Component/AddElement';
import Filter from './Component/Filter';

function App() {
  const [searchbytitle,setSearchbytitle]=useState("")

  return (
    <div className="App">
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: 'rgb(227, 227, 233)', height: 'auto' }} >
        <h2 style={{margin:'5px', fontStyle:'oblique'}}>My List Application !</h2>
        
       <Filter setSearchbytitle={setSearchbytitle}/>
       <ListElements searchbytitle={searchbytitle}/>
       <AddElement /> 
      </Typography>
    </Container>
    </React.Fragment>  
    </div>
  );
}

export default App;
