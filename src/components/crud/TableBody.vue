<template>
  <tbody>
    <tr
      v-for="(item, index) in $_client_list"
      :key="index"
    >
      <td>
        {{ item.name }}
      </td>
      <td>
        {{ item.surname }}
      </td>
      <td>
        {{ item.phone }}
      </td>
      <td>
        {{ item.address }}
      </td>
      <td>
        <v-btn
          icon
          color="primary"
          @click="openModal(item)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </td>
      <td>
        <v-btn
          icon
          color="pink"
          @click="deleteItem(item)"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </td>
    </tr>
  </tbody>
</template>

<script>
import clientAPI from '@/api/repository/clientRepository';
import clientManagement from '@/mixins/client';

export default {
  name: 'TableBody',

  mixins: [
    clientManagement,
  ],

  methods: {
    openModal(item) {
      this.$eventBus.$emit('open-modal', item);
    },

    deleteItem(item) {
      clientAPI.deleteItem(item)
        .then(() => {
          const list = JSON.parse(JSON.stringify(this.$_client_list));

          list.splice(this.$_client_list.indexOf(item), 1);

          this.$_client_setList(list);
        });
    },
  },
};
</script>
