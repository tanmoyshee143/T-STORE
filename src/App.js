import React from "react";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header";

const App = () => {
  const theme = {
    colors: {
      heading : "rgb(24 24 29)",
      text : "rgba(29,29,29, 0.8)",
      white : "#fff",
      black : "#212529",
      helper : "#4C4CF6",
      bg: "#A2F687",
      header_bg: "#F17145",
      service_bg : "#F1EA08",
      trusted_bg : "#F297E8 ",
      footer_bg : "#0a1435",
      btn : "rgb(98 84 243)",
      border : "rgba(98, 84, 243, 0.5)",
      hr : "#ffffff",
      gradient : 
      "linear-gradient(0deg, rgb(132 144 255)0%, rgb(98 189 252))", 
      shadow : "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport : "rgba(0.0,0,0.16) opx 1px4px"
    },
    media: {
       mobile : "780px",
       tab : "1000px"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/: id" element={<SingleProduct />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
