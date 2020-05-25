import Vuex from 'vuex';
import axios from "../.nuxt/axios";

const LOCATION_QUERY = `query ($lat: Float!, $lng: Float!, $radius: Float!, $search: String, $price: Float) {
  locations(
    lat: $lat,
    lng: $lng,
    radius: $radius,
    search: $search,
    price: $price
  ) {
    id
    position {
      lat
      lng
    }
    name
    address {
      city
      street
      postCode
    }
    phone
    products {
      name
      price
    }
  }
}`;

const PRODUCTS_QUERY = `{
  products
}`;

const state = {
  products: [],

  position: {
    lat: 45.4356958,
    lng: -122.5305477,
  },

  radius: 5,
  searchTerm: '',
  price: 10,

  activeStore: null,
  locations: [],
};

const createStore = () => {
  const store = new Vuex.Store({
    state,
    mutations: {
      LOCATIONS_SET(state, locations) {
        state.locations = locations;
      },
      PRODUCTS_SET(state, products) {
        state.products = products;
      },
      POSITION_SET(state, pos) {
        state.position = pos;
        state.activeStore = null;
      },
      PRICE_SET(state, price) {
        state.price = price;
        state.activeStore = null;
      },
      RADIUS_SET(state, radius) {
        state.radius = radius;
        state.activeStore = null;
      },
      SEARCH_TERM_SET(state, searchTerm) {
        state.searchTerm = searchTerm;
        state.activeStore = null;
      },
      ACTIVE_STORE_SET(state, activeStore) {
        state.activeStore = activeStore;
      },
    },
  });
}
