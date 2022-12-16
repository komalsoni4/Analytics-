import React,{useEffect,useState, useMemo} from 'react';
import axios from 'axios';
import {useTable} from 'react-table';
import {COLUMNS} from './Column';
import Mdata from './Mdata.json';
// import {useSelector} from 'react-redux'

function  BasicTable () {
  

   // const products=useSelector((state)=>state.allProcucts.products.data );

    // const [products,setProducts]=useState([]);
    // console.log("Pr",products.data);

    // useEffect(()=>{
    //     const fetchProducts=async()=>{
    //         try{
    //             const{data}=await axios.get("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03");
    //             setProducts(data);
    //         } catch (error){
    //             console.log(error);
    //         }
    //     };
    //     fetchProducts();
    // },[]);
   // console.log("Products",products);
   const columns =useMemo(()=>COLUMNS,[])
   const data = useMemo(()=>Mdata,[])
   const tableInstance = useTable({
    columns,
    data
   });
   
 
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

   }=tableInstance

    return (
        <div>
            <table {...getTableProps()}>
                <thead> 
                    {headerGroups.map((headerGroup)=>(
                         <tr{...headerGroup.getHeaderGroupProps()}>
                         {headerGroup.headers.map((column)=>(
                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                         ))}
                         </tr>
                        ))}
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                        {
                            rows.map(row=>{
                                prepareRow(row)
                                return(
                                    <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>{
                                            return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                    </tr>
                                )
                            })
                        }
                </tbody>
                
            </table>
        </div>
    );
};
export default BasicTable;