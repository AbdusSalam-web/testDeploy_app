import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UseAuth } from "../store/UseAuth";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

const EditUser = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    isAdmin: "",
  });
  const navigate = useNavigate();
  const { URL, token } = UseAuth();

  const { id } = useParams();

  const getEditData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${URL}/admin/user/${id}`, config);
      if (response.status === 200) {
        const { userName, email, phone, isAdmin } = response.data;
        setFormData({
          userName,
          email,
          phone,
          isAdmin,
        });
        console.log();
      }
    } catch (error) {
      toast.error(error.response?.data?.extraDetails);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdate = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.patch(
        `${URL}/admin/user/edit/${id}`,
        formData,
        config,
      );
      if (response.status === 200) {
        setFormData({
          userName: "",
          email: "",
          phone: "",
          isAdmin: "",
        });
        setTimeout(() => {
          navigate("/admin/users");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  useEffect(() => {
    getEditData();
  }, [id]);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
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
        <div>
          <label htmlFor="phone">User Phone:</label>
          <input
            type="tel"
            onChange={handleChange}
            name="phone"
            id="phone"
            value={formData.phone}
          />
        </div>
        <div>
          <label htmlFor="isAdmin">
            <input
              type="checkbox"
              name="isAdmin"
              id="isAdmin"
              checked={formData.isAdmin}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  isAdmin: e.target.checked,
                }));
              }}
            />
            Is Admin
          </label>
        </div>
        <div>
          <button type="submit">Edit</button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
