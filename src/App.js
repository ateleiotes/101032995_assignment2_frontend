import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
   
    <div class="container">
      <NavBar/>
      <BrowserRouter>
          <Routes>
            <Route path= "/" element={<EmployeeList/>} />
            <Route path="/employees/add" element={<AddEmployee/> } />
            <Route path="/employees/add/:id" element={<AddEmployee/> } />
            <Route path="/employees/delete/:id" element={<DeleteEmployee/>}/>
            <Route path="/employees/:id" element={<EmployeeDetails/>} />
          </Routes>
      </BrowserRouter>
    </div>


  );
}
export default App;
