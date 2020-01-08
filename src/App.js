import React from "react";
import "./styles.css";
import CategoriesMenu from "./components/CategoriesMenu";

function App() {
  return (
    <div className="App">
      <body>
        <CategoriesMenu />
        <div class="flex-container">
          <section class="apps-list">
            <header>
              <input type="text" placeholder="Search by App" />
            </header>
            <ul>
              <li>
                <div class="app-item">
                  <div class="box-info">
                    <div class="box-info--content">
                      <div class="description">
                        <h1>Voice Report</h1>
                        <p>Calls reporting and analytics of your calls.</p>
                      </div>
                      <div class="tags">
                        <span>Voice Analytics</span> / <span>Reporting</span> /{" "}
                        <span>Optimization</span>
                      </div>
                    </div>
                    <div className="box-info--footer">
                      <ul>
                        <li>
                          <span>Trial</span>{" "}
                          <h3>
                            Free<sup></sup>
                          </h3>
                        </li>
                        <li>
                          <span>Professional</span>{" "}
                          <h3>
                            35.00<sup>€</sup>
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="app-item">
                  <div class="box-info">
                    <div class="box-info--content">
                      <div class="description">
                        <h1>Power Dialer</h1>
                        <p>
                          Auto dialer that will help increase your connect rates
                          and talk time.
                        </p>
                      </div>
                      <div class="tags">
                        <span>Dialer</span>
                      </div>
                    </div>
                    <div class="box-info--footer">
                      <ul>
                        <li>
                          <span>Trial</span>{" "}
                          <h3>
                            Free<sup></sup>
                          </h3>
                        </li>
                        <li>
                          <span>Professional</span>{" "}
                          <h3>
                            45.00<sup>€</sup>
                          </h3>
                        </li>
                        <li>
                          <span>Premium</span>{" "}
                          <h3>
                            60.00<sup>€</sup>
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="app-item">
                  <div class="box-info">
                    <div class="box-info--content">
                      <div class="description">
                        <h1>Smart Text</h1>
                        <p>
                          Use SMS to help you communicate with your customers.
                        </p>
                      </div>
                      <div class="tags">
                        <span>Channels</span>
                      </div>
                    </div>
                    <div class="box-info--footer">
                      <ul>
                        <li>
                          <span>Trial</span>{" "}
                          <h3>
                            Free<sup></sup>
                          </h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="pagination">
              <li>
                <a href="#">&lt;</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li class="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
