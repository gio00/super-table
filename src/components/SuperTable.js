import React from "react";
import SuperBody from "./SuperBody";
import SuperToolbar from "./SuperToolbar";
import SuperFooter from "./SuperFooter";
import SuperHeader from "./SuperHeader";
import { inject, observer } from "mobx-react";

class SuperTable extends React.Component {
  constructor(props) {
    super(props);
    this.props.store.fetch();
  }

  render() {
    return (
      <div>
        <pre style={{ padding: "1rem" }}>{this.props.store.endpoint}</pre>
        <SuperToolbar filters={this.props.filters} />
        <table
          style={{
            gridTemplateColumns: this.props.columns.reduce((acc, c) => {
              return acc + `minmax(50px, ${c.width}fr) `;
            }, "")
          }}
        >
          <SuperHeader
            columns={this.props.columns}
            rows={this.props.store.rows}
            onChange={sorter => {
              this.props.store.setSorter(sorter);
            }}
          />
          <SuperBody
            columns={this.props.columns}
            rows={this.props.store.rows}
          />
        </table>
        <SuperFooter
          page={this.props.store.page}
          per_page={this.props.store.per_page}
          total={this.props.store.total}
          onChange={page => {
            this.props.store.setPage(page);
          }}
        />
      </div>
    );
  }
}

export default inject("store")(observer(SuperTable));
