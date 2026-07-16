import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [currentUser, setCurrentUser] = useState(null);
  

  const isLoggedIn = !!token;
  const URL =
    import.meta.env.VITE_URL || 'https://testdeployapi-production.up.railway.app/api';
  const setTokenToLS = async (data) => {
    try {
      await localStorage.setItem("Token", data);
      setToken(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logOutUser = async () => {
    try {
      await localStorage.removeItem("Token");
      setToken(null);
    } catch (error) {
      console.log(error);
    }
  };

  const authenticateUser = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${URL}/auth/user`, config);

      if (response.statusText === "OK") {
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.log("Error fetching user data.");
    }
  };
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ URL, setTokenToLS, token, logOutUser, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
