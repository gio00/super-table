import React from "react";
import SuperFilter from "./SuperFilter";
import SuperSearch from "./SuperSearch";

export default function SuperToolbar(props) {
  return (
    <div class="p-2 flex justify-end">
      <SuperSearch />
      {props.filters.map(filter => {
        return <SuperFilter key={filter.key} filter={filter} />;
      })}
    </div>
  );
}
