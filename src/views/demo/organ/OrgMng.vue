<template>
  <OrgTree />
  <OrganList />
  <!-- <Layout :class="prefixCls"> -->

  <!-- </Layout> -->
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import OrgTree from './OrgTree.vue';
  import OrganList from './Organ.vue';

  export default defineComponent({
    name: 'OrganMng',
    components: {
      //Layout,
      OrgTree,
      OrganList,
    },
  });
</script>
