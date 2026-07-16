import { Navigate, Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import { UseAuth } from "../store/UseAuth";

const AdminLayout = () => {
  const { currentUser } = UseAuth();
  if (currentUser && currentUser === null) {
    return <Navigate to="/login" replace />;
  }

  if (currentUser && !currentUser.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <section>
        <div className="  flex ">
          <AdminNavbar />
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AdminLayout;
