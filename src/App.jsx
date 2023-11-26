import { useRef } from "react";
import { CloseOutline } from "react-ionicons";
import { CallOutline } from "react-ionicons";
import { ChatboxOutline } from "react-ionicons";
import { EarthOutline } from "react-ionicons";
import { FilmOutline } from "react-ionicons";
import { NavigateCircleOutline } from "react-ionicons";
import { NotificationsOutline } from "react-ionicons";
import { TodayOutline } from "react-ionicons";
import { WifiOutline } from "react-ionicons";

import "./App.css";

function App() {
  const navigationRef = useRef(null);
  const handleNavigation = () => {
    navigationRef.current.classList.add("active");
    // console.log(navigationRef.current.classList)
  };
  const handleNavigationClose = () => {
    navigationRef.current.classList.remove("active");
    console.log(navigationRef.current.classList);
  };
  return (
    <div className="main">
      <div
        className="navigation"
        ref={navigationRef}
        onClick={handleNavigation}
      >
        <span
          style={{ "--i": 0, "--x": -1, "--y": 0 }}
          className="icon-container"
        >
          <CallOutline
            color={"white"}
            title={"Make a call"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 1, "--x": 1, "--y": 0 }}
          className="icon-container"
        >
          <ChatboxOutline
            color={"white"}
            title={"Message"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 2, "--x": 0, "--y": -1 }}
          className="icon-container"
        >
          <EarthOutline
            color={"white"}
            title={"Internet"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 3, "--x": 0, "--y": 1 }}
          className="icon-container"
        >
          <FilmOutline
            color={"white"}
            title={"Gallery"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 4, "--x": -1, "--y": 1 }}
          className="icon-container"
        >
          <NavigateCircleOutline
            color={"white"}
            title={"Gps"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 5, "--x": -1, "--y": -1 }}
          className="icon-container"
        >
          <WifiOutline
            color={"white"}
            title={"Wifi"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 6, "--x": 1, "--y": -1 }}
          className="icon-container"
        >
          <TodayOutline
            color={"white"}
            title={"Calendar"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
        <span
          style={{ "--i": 7, "--x": 1, "--y": 1 }}
          className="icon-container"
        >
          <NotificationsOutline
            color={"white"}
            title={"Alarm"}
            height="50%"
            width="50%"
            className={'icon-place'}
          />
        </span>
      </div>
      <div className="close" onClick={handleNavigationClose}>
        <CloseOutline
          color={"white"}
          title={"close"}
          height="50%"
          width="50%"
          className={'icon-place'}
        />
      </div>
    </div>
  );
}

export default App;
