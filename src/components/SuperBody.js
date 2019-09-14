import React from "react";
import SuperRow from "./SuperRow";

export default function SuperBody(props) {
  return (
    <tbody>
      {props.rows.map(row => {
        return <SuperRow key={row.id} row={row} columns={props.columns} />;
      })}
    </tbody>
  );
}
