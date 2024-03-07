
import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Buttons from "./IndexSections/Buttons.js";
import Inputs from "./IndexSections/Inputs.js";
import Navbars from "./IndexSections/Navbars.js";
import Alerts from "./IndexSections/Alerts.js";
import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";
import Datepicker from "./IndexSections/Datepicker.js";
import Login from "./IndexSections/Login.js";
import Download from "./IndexSections/Download.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
         <main ref="main">
          <Buttons />
          <Typography />
          <Inputs />
          <Navbars />
        </main>

      </>
    );
  }
}

export default Index;
