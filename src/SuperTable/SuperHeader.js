import React from "react";
import SuperHeaderCell from "./SuperHeaderCell";

export default function SuperHeader(props) {
  return (
    <thead>
      <tr>
        {props.columns.map(col => {
          return (
            <th key={col.key}>
              <SuperHeaderCell col={col} onChange={props.onChange} />
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
