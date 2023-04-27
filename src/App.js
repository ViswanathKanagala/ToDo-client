import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserfnContext } from "./Context/Context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector} from "react-redux";
import Home from "./components/Home";
import User from "./components/user";

import Settings from "./components/Settings";
import Public from "./components/Public";
import Image from "./components/Image";
import Alltodos from "./components/Alltodos";

function App() {
  const authState = useSelector((state) => state.user.isAuth);
  console.log(authState);

  

  return (
      <UserfnContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route
              path="user"
              element={authState === true ? <User /> : <Navigate to="/" />}
            />
            <Route
              path="image"
              element={<Image />}
            />
                        <Route
              path="todo"
              element={<Alltodos />}
            />


            <Route
              path="settings"
              element={authState === true ? <Settings /> : <Navigate to="/" />}
            />
            <Route
              path="public"
              element={authState === true ? <Public /> : <Navigate to="/" />}
            />

          </Routes>
        </Router>
      </UserfnContext>
  );
}

export default App;
