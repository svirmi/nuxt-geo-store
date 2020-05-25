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
