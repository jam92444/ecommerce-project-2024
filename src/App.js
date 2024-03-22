// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouter from './Router/CustomerRouter';



function App() {
  // const isAdmin=true;
  return (
    <Routes>
    <Route path="/*" element={<CustomerRouter/>} />
    {/* <Route path="/admin/*" element={<AdminPannel />} /> */}
    
  </Routes>
  );
}

export default App;