// UserDataContext.js
import React, { createContext, useContext, useState } from 'react';

// Bağlamı tanımla
export const UserDataContext = createContext();

// UserData arayüzünü tanımla
export const UserData = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Bağlamı tüketmek için özel bir kancayı (hook) tanımla
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData, UserDataProvider içinde kullanılmalıdır');
  }
  return context;
};