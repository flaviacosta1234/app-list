import React, { useEffect } from "react";
import "./styles.css";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchApp from "./components/SearchApp";
import Pagination from "./components/Pagination";
import AppList from "./components/AppList";
import axios from "axios";

const App = () => {
  //const [data, setData] = useState([]);

  // UseEffect - Similar to componentDidMount and componentDidUpdate
  //Making an HTTP request using Axios and UseEffect Hook

  useEffect(() => {
    axios.get("http://localhost:5000").then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <body>
        <div class="flex-container">
          <nav class="nav-categories">
            <CategoriesMenu />
          </nav>
          <section class="apps-list">
            <SearchApp />
            <AppList />
            <Pagination />
          </section>
        </div>
      </body>
    </div>
  );
};

export default App;
