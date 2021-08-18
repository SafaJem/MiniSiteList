import React , { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getlists } from '../redux/actions/listActions';
import Element from './Element';
const ListElements=({searchbytitle})=>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getlists());
  }, []);
  const lists = useSelector((state) => state.lists.lists);
  return (
    <div >
      {lists &&
        lists.filter(el=>el.titre.toLowerCase().includes(searchbytitle.toLowerCase().trim())).map((el) => (
          <Element key={el._id} el={el} />
        ))}
    </div>
  );

}
export default ListElements