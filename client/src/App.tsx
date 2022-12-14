import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Pages from "./Pages";
import "./index.css";
import { useEffect } from "react";
import { setupAxiosInterceptor } from "./AxiosInterceptor"
import { useNavigate } from "react-router-dom";

const App = () => {
  useEffect(() => {
    setupAxiosInterceptor(useNavigate);
  }, []);

  return (
    <Routes>
      {/* Routes kunnen we wss makkelijk opsplitsen in public Reactroute (betere naam) en admin routes */}
      <Route path="/" element={<Layout />}>
        {Pages}
      </Route>
    </Routes>
  );
};

export default App;
