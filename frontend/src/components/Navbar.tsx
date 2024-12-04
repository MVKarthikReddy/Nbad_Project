import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">B94</div>
        <div className="flex space-x-6">
          <Link to="/dashboard" className="hover:text-blue-200 transition-colors">
            Dashboard
          </Link>
          <Link to="/summary" className="hover:text-blue-200 transition-colors">
            Summary
          </Link>
          <Link to="/reports" className="hover:text-blue-200 transition-colors">
            Reports
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center hover:text-blue-200 transition-colors"
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;