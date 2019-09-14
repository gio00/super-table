import axios from "axios";
import { decorate, action, observable, computed } from "mobx";
import { Query } from "cogent-js";

class Store {
  constructor(base, resource) {
    this.base = base;
    this.resource = resource;
  }

  // @observable
  filters = {};
  sorters = [];
  page = 1;
  total = 0;
  per_page = 6;
  rows = [];
  loading = false;
  search = "";

  // @computed
  get endpoint() {
    var url = new Query({ base_url: this.base }).for(this.resource);

    Object.keys(this.filters).forEach(key => {
      url = url.where(key, this.filters[key]);
    });

    if (this.search !== "") {
      url.where("search", this.search);
    }

    if (this.sorters.length > 0) {
      url = url.sort(this.sorters[0]);
    }

    return url.page(this.page).get();
  }

  // @action
  async fetch() {
    let result = await axios.get(this.endpoint);
    this.rows = result.data.data;
    this.page = result.data.page;
    this.total = result.data.total;
    this.loading = false;
  }

  // @action
  setPage(page) {
    this.page = page;
    this.fetch();
  }

  // @action
  setFilter(key, value) {
    if (value !== "") {
      this.filters[key] = value;
      this.fetch();
    } else {
      delete this.filters[key];
      this.fetch();
    }
  }

  // @action
  setSorter(sorter) {
    this.sorters = [sorter, this.sorters.filter(s => s !== sorter)];
    this.fetch();
  }

  setSearch(query) {
    this.search = query;
    this.page = 1;
    this.fetch();
  }
}

export default decorate(Store, {
  filters: observable,
  sorters: observable,
  page: observable,
  total: observable,
  per_page: observable,
  rows: observable,
  loading: observable,
  search: observable,
  endpoint: computed,
  fetch: action,
  setPage: action,
  setFilter: action,
  setSorter: action,
  setSearch: action
});
