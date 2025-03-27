import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Dashboard2 from './pages/admin/dashboard2'; 
import Dashboard3 from './pages/admin/dashboard3'; 
import RemainItems1 from './pages/admin/remain_items1';
import ReserveEquipment from './pages/admin/remain_items2';
import BorrowedItems2 from './pages/admin/borrowed_items2';
import Sidebar from './pages/admin/sidebar';
import RegistrationPage from './pages/user/Register';
import Dashboard1 from './pages/admin/dashboard1';
import BorrowedItems from './pages/admin/borrowed_items1';
import LoginPage from './pages/user/Login';
import BorrowedItems_user from './pages/user/borrowed_items_user';
import RemainItems1User from './pages/user/remain_items1_user';
import Home2 from './pages/user/Home2';
import Home  from './pages/user/Home';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Define routes where Sidebar should be HIDDEN
  const hideSidebarRoutes = ["/", "/Home", "/login", "/Register", "/remain_items2", "/borrowed_items_user", "/remain_items1_user" ,"/Home2"];

  return (
    <div style={{ display: 'flex' }}>
      
      {/* Only render Sidebar if the current path is NOT in hideSidebarRoutes */}
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

      

      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/dashboard3" element={<Dashboard3 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/remain_items1" element={<RemainItems1 />} />
          <Route path="/borrowed_items2" element={<BorrowedItems2 />} />
          <Route path="/Register" element={<RegistrationPage />} />
          <Route path="/remain_items2" element={<ReserveEquipment />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/borrowed_items_user" element={<BorrowedItems_user />} />
          <Route path="/borrowed_items1" element={<BorrowedItems />} />
          <Route path="/remain_items1_user" element={<RemainItems1User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
