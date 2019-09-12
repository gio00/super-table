import React from "react";
import Pagination from "react-js-pagination";

export default function SuperFooter(props) {
  return (
    <div>
      <Pagination
        activePage={props.page}
        itemsCountPerPage={props.per_page}
        totalItemsCount={props.total}
        pageRangeDisplayed={5}
        onChange={page => props.onChange(page)}
        innerClass="flex bg-gray-100"
        itemClass="m-2 rounded"
        linkClass="block p-2"
        activeClass="bg-primary-400 text-blue-500"
      />
    </div>
  );
}
