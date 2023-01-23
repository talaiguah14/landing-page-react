import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../organisms/footer/footer";
import Menu from "../organisms/menu/menu";

const LandinHome = () => {
  return (
    <div>
      <div>
        <Menu></Menu>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default LandinHome;
