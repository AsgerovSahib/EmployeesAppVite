import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Router } from "./shared/constant/router";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import DetailSetting from "./pages/DetailSetting";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path={Router.Home} element={<HomePage />} />
        <Route path={Router.Detail} element={<Detail />} />
        <Route path={Router.Detail_setting} element={<DetailSetting />} />
        <Route path={Router.About} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
