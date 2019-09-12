import React from "react";
import SuperBodyCell from "./SuperBodyCell";

export default function SuperRow(props) {
  return (
    <tr>
      {props.columns.map(col => {
        return <SuperBodyCell key={col.key} column={col} row={props.row} />;
      })}
    </tr>
  );
}
