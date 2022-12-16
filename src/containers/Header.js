import React,{useState} from 'react'
import {DatePicker,Space} from 'antd';
import moment from 'moment';
const {RangePicker} = DatePicker;

const Header = () => {
    const [date,setDate]=useState([])
  return (
    <div className="heading">
    <div className="Topic"><h3>Analytics</h3></div>
    <div className="buttons">
   
    <Space direction="vertical" size={10}>
<RangePicker 
onChange={(values)=>{
  setDate(values.map(item=>{
    return moment(item).format('YYYY-MM-DD')
  }));
}}/>
</Space>
      <button class="buttonS">Setting</button>
   

</div>
</div>
  )
}

export default Header;