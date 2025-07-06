import { useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/DeashBoard/Deashboard.jsx';
import ManageCategory from './pages/ManageCategory/ManageCategory.jsx';
import ManageItems from './pages/Manageitems/Manageitems.jsx';
import Manageusers from './pages/Manageusers/Manageusers.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Login from './component/Login/Login.jsx';
import Menubar from './component/Menubar/Menubar.jsx';
import { AppcontextProvider, AppContext } from './Context/Appcontext.jsx';
import './App.css';

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  const { auth } = useContext(AppContext);
  return auth.token ? children : <Navigate to="/login" />;
}

function AppContent() {
  const location = useLocation();
  const { auth } = useContext(AppContext);
  const hideMenubarPaths = ['/login'];

  return (
    <>
      {!hideMenubarPaths.includes(location.pathname) && <Menubar />}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/category" element={<ProtectedRoute><ManageCategory /></ProtectedRoute>} />
        <Route path="/items" element={<ProtectedRoute><ManageItems /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Manageusers /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        
        {/* Default route based on auth status */}
        <Route
          path="/"
          element={
            auth.token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AppcontextProvider>
      <AppContent />
    </AppcontextProvider>
  );
}

export default App;
