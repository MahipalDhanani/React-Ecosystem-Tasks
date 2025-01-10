import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PrivateRoute from "./PrivateRoute";
import Login from "./Components/Login";
import Users from "./Components/Users";
import AddProduct from "./Components/AddProduct";
import Dashboard from "./Components/Dashbord";
import Navbar from "./Components/Navbar";
import PublicRoute from "./PublicRoute";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import Cards from "./Components/Styled-components/Cards";

import ThemeProvider from "styled-components";
import { GlobaleStyle } from "./Components/Styled-components/GlobalStyle";
// import ImageUploader from "./Components/ImageUploader";

function App() {
  const theme = {
    color: {
      bgColor: "lightblue", // Define the bgColor
      textColor: "yellow",
    },
  };

  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PublicRoute role="user" />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<PublicRoute role="user" />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/contact" element={<PublicRoute role="user" />}>
            <Route path="" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<PrivateRoute role="admin" />}>
            <Route path="" element={<Dashboard />} />
          </Route>
          <Route path="/add-product" element={<PrivateRoute role="admin" />}>
            <Route path="" element={<AddProduct />} />
          </Route>
          <Route path="/users" element={<PrivateRoute role="admin" />}>
            <Route path="" element={<Users />} />
          </Route>
          <Route path="/*" element={<div>Page Not Found !</div>} />
        </Routes>
      </Router> */}

      {/* styled-components Exampale */}
      {/* <ThemeProvider theme={theme}>
        <GlobaleStyle />
        <Cards /> 
      </ThemeProvider> */}

      {/* <ImageUploader /> */}
    </>
  );
}

export default App;
