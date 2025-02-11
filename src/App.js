import Login from './components/users/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashbaord.js';
import ProtectedRoutes from './components/auth/ProtectedRoutes.js';
/**
 * Main application component that renders the overall structure
 * of the app and includes the Login component.
 */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
