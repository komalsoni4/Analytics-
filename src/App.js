
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './containers/Header';
import {Editing} from './containers/Editing';
import Error from './components/Error';
import TableComponent from './components/TableComponent';
import BasicTable from './containers/BasicTable';
import Modal from './containers/Modal';
function App() {
  return (
    <div className="main">
       <div className="sidebar"></div>
       <div className="container">
        <Router>
        <Header/>
        {/* <Editing/> */}
        {/* <TableComponent/> */}
        <BasicTable/>
        <Modal/>
        <Routes>
         
        {/* <Route path="/" exact component={Table}/> */}
        <Route path="/setting/" exact component={Editing}/>
        <Route exact component={Error}/>

        </Routes>
       
        </Router>
       
          
       </div>
    </div>
  );
}

export default App;
