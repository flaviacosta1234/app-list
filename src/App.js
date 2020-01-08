import React from "react";
import "./styles.css";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchApp from "./components/SearchApp";
import Pagination from "./components/Pagination";
import AppList from "./components/AppList";

const App = () => {
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
