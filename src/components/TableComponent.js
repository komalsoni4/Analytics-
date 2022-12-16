import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from "../redux/actions/ProductAction";
import Table from './Table';
const TableComponent = () => {


       const products=useSelector((state)=>state);
      const dispatch = useDispatch();
      const fetchProducts=async()=>
      {
          const response=await axios.get("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03").catch((er)=>{
              console.log("ERR",er);
      });
      dispatch(setProducts(response.data));  
      };
     useEffect(()=>{fetchProducts()},[]);
     console.log("Products",products);
  return (
    <div className="container">
        <Table/>
    </div>
  );
};

export default TableComponent;