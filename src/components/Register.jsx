import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { UseAuth } from "../store/UseAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { URL, setTokenToLS } = UseAuth();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const { data } = await axios.post(`${URL}/auth/register`, formData);
      console.log("🚀 ~ handleRegister ~ data:", data);

      setFormData({
        userName: "",
        email: "",
        password: "",
        phone: "",
      });

      toast.success("Registration successful.");

      setTokenToLS(data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.extraDetails || "Registration failed.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" w-75 flex items-center flex-col justify-center mx-auto "
      >
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleChange}
            value={formData.userName}
          />
        </div>
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
          <label htmlFor="phone">User Phone No:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div>
          <button type="submit" className="  cursor-pointer ">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
