<template>
  <v-app>
    <v-main>
      <client-list />
    </v-main>
  </v-app>
</template>

<script>
import ClientList from './components/crud/ClientList';

export default {
  name: 'App',

  components: {
    ClientList,
  },
};
</script>
