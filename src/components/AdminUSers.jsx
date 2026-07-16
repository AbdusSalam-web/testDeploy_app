import axios from "axios";
import { UseAuth } from "../store/UseAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminUSers = () => {
  const [users, setUsers] = useState([]);

  const { token, URL } = UseAuth();

  const getAllUser = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`${URL}/admin/users`, config);
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error(error.response?.data);
    }
  };

  const deleteUser = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(
        `${URL}/admin/users/delete/${id}`,
        config,
      );

      if (response.status === 200) {
        getAllUser();
      }
    } catch (error) {
      console.error(error.response?.data);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Admin</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            const { _id, userName, email, phone, isAdmin } = item;
            return (
              <tr key={_id}>
                <td>{userName} </td>
                <td>{email} </td>
                <td>{phone} </td>
                <td className=" px-5 ">{isAdmin ? "Yes" : "N/A"} </td>
                <td>
                  <Link to={`/admin/user/edit/${_id}`}>Edit</Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(_id)}
                    className=" cursor-pointer "
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminUSers;
