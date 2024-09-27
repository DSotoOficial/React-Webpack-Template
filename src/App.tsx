import "./styles.css";
import IMAGE from "./react.png";
import LOGO from "./react.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  const name = "Vishwas";
  return (
    <>
      <h1>
        Edited React TypeScript Webpack Starter Template -{" "}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </>
  );
};
