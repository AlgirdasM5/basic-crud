<template>
  <v-dialog
    v-model="dialog"
    persistent
    scrollable
    max-width="800"
    @keydown.esc="hideModal"
  >
    <v-card v-if="dialog">
      <v-card-title>
        <div class="text-h5">
          Record modal
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="record.name"
              clearable
              label="Name"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="record.surname"
              clearable
              label="Surname"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="record.phone"
              clearable
              label="Phone"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-autocomplete
              v-model="record.address"
              :items="addresses"
              label="Address"
              @update:search-input="searchAddress"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions class="d-flex justify-end">
        <v-btn
          color="primary"
          :disabled="isDisabled"
          @click="saveRecord"
        >
          Save
        </v-btn>
        <v-btn
          outlined
          @click="hideModal"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import clientAPI from '@/api/repository/clientRepository';
import AddressRepository from '@/api/repository/addressRepository';
import clientManagement from '@/mixins/client';

export default {
  name: 'RecordModal',

  mixins: [
    clientManagement,
  ],

  data() {
    return {
      dialog: false,
      record: null,
      addresses: [],
    };
  },

  computed: {
    isDisabled() {
      return Object.keys(this.record).some((key) => {
        if (key === 'id') {
          return false;
        }

        return !this.record[key];
      });
    },
  },

  mounted() {
    this.$eventBus.$on('open-modal', (record) => {
      this.record = JSON.parse(JSON.stringify(record));

      if (this.record.address) {
        this.addresses.push(this.record.address);
      }

      this.dialog = true;
    });
  },

  methods: {
    hideModal() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },

    searchAddress(input) {
      AddressRepository.getAddress({
        params: {
          input,
        },
      }).then(({ data }) => {
        if (data.status === 'OK') {
          this.addresses = data.candidates.map((candidate) => ({ text: candidate.formatted_address, value: candidate.formatted_address }));
        }
      });
    },

    saveRecord() {
      if (!this.isDisabled) {
        this.record.id ? this.updateItem() : this.saveNewItem();
      }
    },

    saveNewItem() {
      clientAPI.postItem(this.record)
        .then(({ data }) => {
          this.$_client_setList({ ...this.$_client_list, data });
          this.hideModal();
        });
    },

    updateItem() {
      clientAPI.putItem(this.record)
        .then(({ data }) => {
          const list = JSON.parse(JSON.stringify(this.$_client_list));
          const index = this.$_client_list.findIndex((item) => item.id === data.id);

          list[index] = data;

          this.$_client_setList(list);
          this.hideModal();
        });
    },
  },
};
</script>
