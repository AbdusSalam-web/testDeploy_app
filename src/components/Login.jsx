import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { UseAuth } from "../store/UseAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { URL, setTokenToLS } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const logInUser = async () => {
    try {
      const response = await axios.post(`${URL}/auth/login`, formData);

      if (response.statusText === "OK") {
        setTokenToLS(response.data.token);
        setFormData({ email: "", password: "" });
        setTimeout(() => {navigate('/')}, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-75 flex items-center flex-col justify-center mx-auto "
      >
        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="  flex ">
          <label htmlFor="password">Password:</label>
          <div className=" flex items-center ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
            <div>
              {showPassword ? (
                <BsEye onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <BsEyeSlash onClick={() => setShowPassword(!showPassword)} />
              )}
            </div>
          </div>
        </div>

        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </>
  );
};

export default Login;
