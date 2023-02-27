import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { EmpCreate, EmpDetail, EmpEdit, EmpList } from "./pages";

function App() {
  return (
    <div className="App">
      <h1> React JS CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpList />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empId" element={<EmpDetail />} />
          <Route path="/employee/edit/:empId" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
