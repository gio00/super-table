import React from "react";
import { inject, observer } from "mobx-react";

const SuperSearch = props => {
  return (
    <div>
      <input
        className="form-input"
        onChange={e => props.store.setSearch(e.target.value)}
      />
    </div>
  );
};

export default inject("store")(observer(SuperSearch));
