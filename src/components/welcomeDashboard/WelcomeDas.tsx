import "./WelcomeDas.css";
import smartschool from "../../images/smartschool.png";

export const WelcomeDash = () => {
  return (
    <div className="main">
      <div className="welcome-container">
        <img src={smartschool} alt="school logo" />
        <h1 className="welcome-banner">Welcome To SMS</h1>
        <button className="watch-tut btn">WATCH TUTORIAL</button>
        <button className="skip btn">SKIP</button>
      </div>
    </div>
  );
};
