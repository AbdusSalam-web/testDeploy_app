import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../store/UseAuth";
import axios from "axios";
const AdminServices = () => {
  const [services, setServices] = useState([]);

  const { URL, token } = UseAuth();
  const getServices = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${URL}/admin/services`, config);
      if (response.status === 200) {
        setServices(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(
        `${URL}/admin/service/delete/${id}`,
        config,
      );
      if (response.status === 200) {
        console.log("🚀 ~ handleDelete ~ response:", response);
        getServices();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <>
      <div className=" grid grid-cols-6 mx-auto space-x-7.5 space-y-7.5 ">
        {services.map((item) => {
          const { _id, service, description, price, provider } = item;
          return (
            <div
              key={_id}
              className="  w-50 p-5 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg  "
            >
              <p>Service: {service}</p>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Provider: {provider}</p>
              <div className="flex  justify-between  ">
                <Link to={`/admin/service/edit/${_id}`} className="  cursor-pointer ">
                  Edit
                </Link>
                <button
                  className="  cursor-pointer "
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminServices;
