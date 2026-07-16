import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  console.log("🚀 ~ AuthProvider ~ currentUser:", currentUser);

  const isLoggedIn = !!token;
  const URL = import.meta.env.VITE_URL;

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
      setLoading(true);
      const response = await axios.get(`${URL}/auth/user`, config);
      console.log("🚀 ~ authenticateUser ~ response:", response);
      if (response.status === 200) {
        setLoading(false);
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.log("Error fetching user data.");
    } finally {
      setLoading(true);
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
