<template>
  <div class="p-4">
    <BasicTable @register="registerTable"> </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';

  import { orgListApi } from '/@/api/demo/organ';
  export default defineComponent({
    name: 'OrganList',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '组织机构列表',
        api: orgListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
      });

      return {
        registerTable,
      };
    },
  });
</script>
