import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './features/blogapp/navbar';
function App() {
  return (
   <div>
      <Nav></Nav>
     <Outlet></Outlet>
   </div>
  );
}

export default App;
