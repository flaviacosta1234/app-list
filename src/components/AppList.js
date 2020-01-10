import React, { useState, useEffect } from "react";
import axios from "axios";

const AppList = () => {
  const [apps, setApps] = useState([]);

  // UseEffect - Similar to componentDidMount and componentDidUpdate
  //Making an HTTP request using Axios and UseEffect Hook

  useEffect(() => {
    axios.get("http://localhost:5000/apps").then(res => setApps(res.data));
  }, []);
  //só para testar
  console.log(apps);

  return (
    <div>
      {apps.map(app => (
        <div>
          {app.name}
          {app.description}
          {app.categories}
        </div>
      ))}
    </div>
  );
};

export default AppList;
