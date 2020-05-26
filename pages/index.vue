<template>
  <div>
    <Map
      @click="onMapClick"
    />
    <Toolbar />
    <v-navigation-drawer
      v-model="showStorePanel"
      right
      temporary
      fixed
      :width="400"
    >
<!--      <StoreInfo />-->
    </v-navigation-drawer>
  </div>
</template>

<script>
  import Map from '@/components/Map';
  import Toolbar from "@/components/Toolbar";

  export default {
    components: {
      Map,
      Toolbar
    },
    data: () => ({
      showStorePanel: false,
    }),
    methods: {
      onMapClick(store) {
        this.showStorePanel = store !== null;
      },
    },
  }
</script>
