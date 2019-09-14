import React, { useState } from "react";

export default function SuperHeaderCell(props) {
  const [asc, setAsc] = useState(false);

  return (
    <button
      className={`truncate cursor-pointer block p-2 h-full w-full text-${props
        .col.align || "left"} font-medium focus:outline-none`}
      onClick={() => {
        if (asc) {
          props.onChange("-" + props.col.dataKey);
        } else {
          props.onChange(props.col.dataKey);
        }
        setAsc(!asc);
      }}
    >
      {props.col.title}
    </button>
  );
}
