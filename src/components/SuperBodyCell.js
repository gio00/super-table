import React from "react";
import _ from "lodash";

export default function SuperBodyCell(props) {
  return (
    <td className={`p-2 text-${props.column.align}`}>
      {_.get(props.row, props.column.dataKey) ? (
        <>{_.get(props.row, props.column.dataKey)}</>
      ) : (
        <span className=" text-gray-600">{props.column.default || "/"}</span>
      )}
    </td>
  );
}
