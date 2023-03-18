import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForms";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [Switch11, setSwitch] = useState("Enable DarkMode");
  const [Switch1, setSwitch1] = useState("Enable purple");
  const [Switch2, setSwitch2] = useState("Enable purple");
  const [alert, setAlert] = useState(null); //! Alert ko ham 1 Object bana rahea ha

  //! method with  arrow funtion
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    //! 12:55
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setSwitch("Disable DarkMood");
      showAlert(" DarkMode has been Enable", "success ");
      document.title = "textUtils Dark Mode";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      setSwitch("Enable DarkMood");
      showAlert(" DarkMode has been Disable", "success ");
      document.title = "textUtils Light Mode";
    }
  };
  const bgcolor = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6f42c1";
      setSwitch1("Disable PurpleMode");
      showAlert(" Disable PurpleMode", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setSwitch1("Enable PurpleMood");
      showAlert(" PurpleMode has been Disable", "success ");
    }
  };
  const bgcolor2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#adb5bd";
      setSwitch2("Disable GrayMode");
      showAlert(" Disable GrayMode", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setSwitch2("Enable GrayMode");
      showAlert(" GrayMode has been Disable", "success ");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        switch={Switch11}
        toggleMode={toggleMode}
        switch1={Switch1}
        bgcolor={bgcolor}
        switch2={Switch2}
        bgcolor2={bgcolor2}
      />
      <Alert alert={alert} />
      <div className="container my-3 px-5">
        {/* <Routes>
            <Route
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below "
          mode={mode}
          //! react router set up completed
        />
        {/* }
            />
            <Route path="/About" element={<About />} />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
