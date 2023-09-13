import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Package from "./Pages/Package";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { useEffect, useState } from "react";
import Admin from "./Pages/Team";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    status: false,
    isAdmin: false,
  });

  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("session"));
    if (token) {
      setIsLoggedIn({
        status: true,
        isAdmin: token.isAdmin,
      });
    }
  }, [fetchAgain]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={
            <SignUp
              isLoggedIn={isLoggedIn}
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
            />
          }
          exact
        />
        <Route
          path="/"
          element={
            <HomePage
              isLoggedIn={isLoggedIn}
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
            />
          }
          exact
        />
        <Route
          path="/about"
          element={
            <AboutPage
              isLoggedIn={isLoggedIn}
              fetchAgain={fetchAgain}
              setFetchAgain={setFetchAgain}
            />
          }
          exact
        />
        <Route
          path="/package"
          element={<Package isLoggedIn={isLoggedIn} fetchAgain={fetchAgain} />}
          exact
        />
        <Route
          path="/signin"
          element={
            <SignIn
              isLoggedIn={isLoggedIn}
              setFetchAgain={setFetchAgain}
              fetchAgain={fetchAgain}
            />
          }
          exact
        />
        <Route
          path="/admin"
          element={
            <Admin
              isLoggedIn={isLoggedIn}
              setFetchAgain={setFetchAgain}
              fetchAgain={fetchAgain}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
