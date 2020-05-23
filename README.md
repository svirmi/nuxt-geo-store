# nuxt-geo-store

> My stylish Nuxt.js project

## To seed random data, run from the project root
```
node data/generate.js
```

## http://localhost:3000/graphql

```graphql
{
  locations(lat:45.4356958,lng:-122.53054,radius:5){
    id
    name
  }
  products
}
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
