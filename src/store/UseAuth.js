import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const UseAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
