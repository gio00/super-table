import React from "react";
import SuperTable from "./SuperTable";
import "./index.css";

// prettier-ignore
const columns = [
  { title: "ID", key: "id", dataKey: "id", width: "1", align: "center" },
  { title: "First Name", key: "first_name", dataKey: "first_name", width: "1.67" },
  { title: "Last Name", key: "last_name", dataKey: "last_name", width: "1.67" },
  { title: "Email", key: "email", dataKey: "email", width: "1.67" },
  { title: "Avatar", key: "avatar", dataKey: "avatar", width: "3.33" }
];

const filters = [
  // filter[email]=yahoo.com
  {
    title: "Email",
    type: "select",
    key: "type",
    options: { "gmail.com": 1, "yahoo.com": 2 },
    selected: null
  }
];

function App() {
  return (
    <SuperTable
      filters={filters}
      columns={columns}
      base="https://reqres.in/api"
      resource="users"
    />
  );
}

export default App;
