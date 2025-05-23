import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

import { LogOut,Settings, User } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

   const { logout, authUser } = useAuthStore();

  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
               🔒ChatSecure 💬
               </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4 bg-transparent">
                <Link
                  to="/settings"
                  className="flex items-center gap-2 text-white hover:opacity-80 transition-all"
                >
                  <Settings className="w-5 h-5" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>

                {authUser && (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 text-white hover:opacity-80 transition-all"
                    >
                      <User className="w-5 h-5" />
                      <span className="hidden sm:inline">Profile</span>
                    </Link>

                    <button
                      className="flex items-center gap-3 text-white hover:opacity-80 transition-all"
                      onClick={logout}
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="hidden sm:inline">Logout</span>
                    </button>
                  </>
                )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;