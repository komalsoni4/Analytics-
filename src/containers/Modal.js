import React,{useState,useEffect,useFilters} from 'react';
import data from "./appdata.json";
const Modal = () => {

const [data,setData]=useState([]);
const [searchData,setSearchData]=useState([]);
const [filterVal,setFilterVal]=useState('');

useEffect(()=>{
const fetchData=()=>{}
fetch('http://go-dev.greedygame.com/v3/dummy/apps').then(response=>response.json())
.then(json=>{
setData(json)
setSearchData(json)
})
fetchData();
},[])

const handlefilter=(e)=>{
if(e.target.value=='')
{
setData(searchData)
}
else
{
//const filterData=searchData.filter(item.name.tolowerCase().includes(e.target.value.tolowerCase()))
setData()
}
setFilterVal(e.target.value)
}


   const [modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }

    console.log(data.data);
  return (
   <>
   <button onClick={toggleModal}>open</button>

   <div>

<div><h3>Select Apps</h3>
   <input placeholder="Search" value={filterVal} onInput={(e)=>handlefilter(e)}/>
</div>
  <list>
{

// data.map(item=>{
// return(
// <>
//     <ul>{item.name}</ul>
//       <ul>{item.name}</ul>
//          <ul>{item.name}</ul>
//         <ul>{item.name}</ul>
//         </>
    
// )
// }
// )
}
       </list>
</div>
   </>
  )
}

export default Modal;
