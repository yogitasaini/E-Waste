import React from "react";
import { NavLink, Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const Loadingpage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"RunEWaste"}>
      <div style={{ backgroundColor: "#f9f9f9" }}>
        {/* home section ends */}
        {/* features section starts  */}
        <section
          className="home"
          id="home"
          style={{ padding: "50px 0", textAlign: "center" }}
        >
          <div className="content"></div>
          <div className="image">
            <img
              src="/images/giphy.png"
              alt="contactus"
              style={{
                marginTop: "1.5%",
                width: "30%",
                height: "30%",
                borderRadius: "25px",
              }}
            />
          </div>
          <h3 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            RunEWaste <span style={{ color: "#f64c71" }} />
          </h3>
          <p style={{ fontSize: "1.2rem" }}>
            Our Webpage helps a user to Buy and Sell Ewaste and provide a user
            friendly experience to trade as well as Solve a big problem on
            earth.{" "}
          </p>
          <NavLink
            to="/HomePage"
            className="btn"
            style={{
              backgroundColor: "#f64c71",
              color: "#fff",
              padding: "12px 30px",
              marginRight: "10px",
              borderRadius: "18px",
              fontSize: "1.2rem",
              width: "200px",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            BUY
          </NavLink>
          {!auth?.user ? (
            <NavLink
              to="/login"
              className="btn"
              style={{
                backgroundColor: "#f64c71",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "29px",
                fontSize: "1.2rem",
                textDecoration: "none",
                width: "195px",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              SELL
            </NavLink>
          ) : (
            <NavLink
              to={`/dashboard/admin`}
              className="btn"
              style={{
                backgroundColor: "#f64c71",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "29px",
                fontSize: "1.2rem",
                width: "200px",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              SELL
            </NavLink>
          )}
        </section>

        {/* features section ends */}
      </div>
    </Layout>
  );
};

export default Loadingpage;
