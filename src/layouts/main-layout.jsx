import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./mainLayout/sideBar";
import TopNav from "./mainLayout/top-nav";
import Footer from "./mainLayout/footer";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  const [collapseSidebar, setCollapseSidebar] = useState();
  const { t } = useTranslation();
  return (
    <div className="wrapper" style={{ minHeight: "100h" }}>
      <Sidebar />
      <div className="main">
        <TopNav />
        <main className="content">
          <div className="container-fluid p-0">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
