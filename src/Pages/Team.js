import Footer from "../Components/Footer";
import Navbar from "../Components/NavBar";
import AdminPanel from "../Components/AdminPanel";

const Admin = ({ isLoggedIn, setFetchAgain, fetchAgain }) => {
  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setFetchAgain={setFetchAgain}
        fetchAgain={fetchAgain}
      />
      <AdminPanel />
      <Footer />
    </>
  );
};

export default Admin;
