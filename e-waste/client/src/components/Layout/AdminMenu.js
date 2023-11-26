import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <NavLink
            to="/dashboard/admin/formcarousel"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
