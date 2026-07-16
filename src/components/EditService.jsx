import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UseAuth } from "../store/UseAuth";
import { useEffect, useState } from "react";

const EditService = () => {
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { URL, token } = UseAuth();
  const getEditData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${URL}/admin/services/${id}`, config);
      if (response.status === 200) {
        const { service, description, price, provider } = response.data;

        setFormData({
          service,
          description,
          price,
          provider,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const editService = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.patch(
        `${URL}/admin/service/edit/${id}`,
        formData,
        config,
      );
      if (response.status === 200) {
        setFormData({
          service: "",
          description: "",
          price: "",
          provider: "",
        });
        setTimeout(() => {
          navigate("/admin/services");
        }, 1000);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editService();
  };
  useEffect(() => {
    getEditData();
  }, [id]);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="service">Service:</label>
          <input
            type="text"
            name="service"
            id="service"
            onChange={handleChange}
            value={formData.service}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleChange}
              value={formData.price}
            />
          </label>
        </div>
        <div>
          <label htmlFor="provider">
            Provider:
            <input
              type="text"
              name="provider"
              id="provider"
              onChange={handleChange}
              value={formData.provider}
            />
          </label>
        </div>
        <button type="submit">Edit</button>
      </form>
    </>
  );
};

export default EditService;
