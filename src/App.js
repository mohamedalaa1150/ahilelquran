import "./App.css";
import ArkanSection from "./components/ArkanSection/ArkanSection";
import Landing from "./components/Landing/Landing";
import PrayerTimings from "./components/PrayerTimings/PrayerTimings";
import TimeTable from "./components/TimeTable/TimeTable";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <ArkanSection />
      <TimeTable />
      <PrayerTimings />
    </div>
  );
};

export default App;
