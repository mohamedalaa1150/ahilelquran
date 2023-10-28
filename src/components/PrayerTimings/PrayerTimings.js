import React from "react";

import "./PrayerTimings.css";
import SeactionHead from "../SeactionHead/SeactionHead";

const PrayerTimings = () => {
  return (
    <div className="prayer-timings">
      <SeactionHead title="مواقيت الصلاة" subtitle="مواقيت الصلاة للمسلمين" />

      <div className="t-table"></div>
    </div>
  );
};

export default PrayerTimings;
