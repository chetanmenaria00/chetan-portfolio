import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/about"} element={<About />} />
      <Route exact path={'/project'} element={<Portfolio />} />
      <Route
        exact
        path={"*"}
        element={
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
              fontSize:"20px"
            }}
          >
            No Page.. 🤨
          </div>
        }
      />
    </Routes>
  );
}
