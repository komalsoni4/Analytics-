
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Table from './components/Table';
import Editing from './components/Editing';
import Error from './components/Error';
function App() {
  return (
    <div className="main">
       <div className="sidebar"></div>
       <div className="container">
        <Router>
        <Header/>
        <Table/>
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
