import React from "react";
import { inject, observer } from "mobx-react";

const FilterSelect = inject("store")(
  observer(({ filter, store }) => {
    return (
      <select
        className="form-select"
        onChange={e => store.setFilter(filter.key, e.target.value)}
      >
        <option value={""}>{filter.title}...</option>
        {Object.keys(filter.options).map(key => {
          return (
            <option key={filter.options[key]} value={filter.options[key]}>
              {key}
            </option>
          );
        })}
      </select>
    );
  })
);

const types = {
  select: FilterSelect
};

export default function SuperFilter(props) {
  const Component = types[props.filter.type];

  return <Component filter={props.filter} />;
}
