import React,{ useMemo} from 'react';
import {useTable,useSortBy,useColumnOrder} from 'react-table';
import {COLUMNS} from './Column';
import Mdata from './Mdata.json';
import styled from "styled-components";
import {DragDropContext, Droppable,Draggable } from "react-beautiful-dnd";

const getItemStyle = ({ isDragging, isDropAnimating }, draggableStyle) => ({
    ...draggableStyle,
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
  
    // change background colour if dragging
    background: isDragging ? "lightgrey" : "white",
  
    ...(!isDragging && { transform: "translate(0,0)" }),
    ...(isDropAnimating && { transitionDuration: "0.001s" })
  
    // styles we need to apply on draggables
  });
  

export const Editing = ()=> {

   const columns =useMemo(()=>COLUMNS,[])
   const data = useMemo(()=>Mdata,[])
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
    allColumns,
    getToggleHideAllColumnsProps
   }=useTable({
    columns,
    data
   },
   useSortBy,useColumnOrder);
   const currentColOrder = React.useRef();
    return (
        <div>
            <div className="containerButton">
                <div className="Edit">
                    {
                        allColumns.map(column=>(
                            
                            <div key = {column.id}>
                                <label>
                                    <input type='checkbox'{...column.getToggleHiddenProps()}/>
                                    {column.Header}
                                </label>
                                </div>
                        ))
                    }
              </div>  
             
                 <div class="Command">
                       <button class="buttonClose"></button>
                       <button clas="buttonApply"></button>
                 </div>
            </div>
            <table {...getTableProps()}>
                <thead> 
                    {headerGroups.map((headerGroup)=>(
                         <tr{...headerGroup.getHeaderGroupProps()}>
                         {headerGroup.headers.map((column)=>(
                             <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                               {column.isSorted? '^':''}
                                </span>
                                </th>
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
export default Editing;