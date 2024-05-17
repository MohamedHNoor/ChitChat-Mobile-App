import React, { useState, useContext, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };

  const logout = async () => {
    try {
    } catch (error) {}
  };

  const register = async (email, password, username, profileUrl) => {
    try {
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be wrapped inside AuthContextProvider');
  }
  return value;
};
