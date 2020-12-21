import React from "react";

import Logo2 from "../../images/Logo2.png";
import Navber from "../Navber/Navber";

const NoPage = () => {
  return (
    <div>
      <Navber color="black" image={Logo2} />
      <h1
        className="text-danger text-center"
        style={{ marginTop: "200px", fontSize: "100px" }}
      >
        Page Not Found
      </h1>
    </div>
  );
};

export default NoPage;