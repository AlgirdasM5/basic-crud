import { mapActions, mapGetters } from 'vuex';
import StoreNamespaces from '../../store/client/constants';

export default {
  computed: {
    ...mapGetters({
      $_client_list: `${StoreNamespaces.CLIENT}getList`,
    }),
  },

  methods: {
    ...mapActions({
      $_client_setList: `${StoreNamespaces.CLIENT}setList`,
    }),
  },
};
