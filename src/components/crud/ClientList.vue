<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h4 mb-2">
          Client list
        </div>
      </v-col>
    </v-row>
    <v-btn
      class="mb-4"
      color="primary"
      @click="openModal"
    >
      <v-icon>mdi-plus</v-icon>
      Create new client
    </v-btn>
    <v-card class="pt-0">
      <v-simple-table
        class="font--text pt-2"
        dense
      >
        <table-head />
        <table-body />
      </v-simple-table>
    </v-card>

    <record-modal />
  </v-container>
</template>

<script>
import clientAPI from '@/api/repository/clientRepository';
import TableHead from '@/components/crud/TableHead';
import TableBody from '@/components/crud/TableBody';
import RecordModal from '@/components/crud/modals/RecordModal';
import Client from '@/models/Client';
import clientManagement from '@/mixins/client';

export default {
  name: 'ClientList',

  components: {
    TableHead,
    TableBody,
    RecordModal,
  },

  mixins: [
    clientManagement,
  ],

  created() {
    this.loadList();
  },

  methods: {
    async loadList() {
      let list = [];
      const storage = localStorage.getItem('list');

      if (storage) {
        list = JSON.parse(storage);
      } else {
        const response = await clientAPI.getClientList();

        list = response.data;
      }

      this.$_client_setList(list);
    },

    openModal() {
      this.$eventBus.$emit('open-modal', new Client());
    },
  },
};
</script>
