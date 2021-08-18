import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteList } from '../redux/actions/listActions';

const Element=({el})=>{
 const dispatch = useDispatch();

const delet =()=>{
  dispatch(deleteList(el._id))
 }

    return ( 
     
     <div>
          
          <List>
            <ListItem key={el.id} dense button>
            
              <ListItemText  primary={el.titre} />
              <ListItemSecondaryAction>
             
                <IconButton style={{color:'red'}}
                  aria-label="Delete"
                  onClick={delet} >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </List>
          
           </div>
        )
     }
     
  
export default Element