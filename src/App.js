import React, { Fragment } from "react";
import "./App.css";

import "./Progress.css";
import "./Calendar.css";

import Sidenav from "./components/Sidenav";
import ContentWrapper from "./components/ContentWrapper";
import FadeModal from "./components/FadeModal";
import FadeModalRequest from "./components/FadeModalRequest";
import FadeModalApproval from "./components/FadeModalApproval";
import ExampleModal from "./components/ExampleModal";
import ScheduleModal from "./components/ScheduleModal";
import RunningModal from "./components/RunningModal";
import ExistingModal from "./components/ExistingModal";
import PendingModal from "./components/PendingModal";

function toggleClass() {
  const element = document.querySelector("#wrapper");
  element.classList.toggle("toggled");
}

function App() {
  return (
    <Fragment>
      <div className="d-flex" id="wrapper">
        <Sidenav />
        <ContentWrapper toggleClass={toggleClass} />
      </div>
      <FadeModal />
      <FadeModalRequest />
      <FadeModalApproval />
      <ExampleModal />
      <ScheduleModal />
      <RunningModal />
      <ExistingModal />
      <PendingModal />
    </Fragment>
  );
}

export default App;
