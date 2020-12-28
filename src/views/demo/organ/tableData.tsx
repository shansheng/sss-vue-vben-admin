import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormProps } from '/@/components/Table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'orgid',
    },
    {
      title: '编号',
      dataIndex: 'orgcode',
      width: 280,
    },
    {
      title: '名称',
      dataIndex: 'orgname',
      sorter: true,
      width: 180,
    },
    {
      title: '序列',
      dataIndex: 'orgseq',
    },
    {
      title: '开始时间',
      dataIndex: 'startdate',
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createtime',
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `orgname`,
        label: `组织名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `status`,
        label: `状态`,
        component: 'Select',
        defaultValue: '',
        componentProps: {
          options: [
            {
              label: '全部',
              value: '',
            },
            {
              label: '启用',
              value: 'running',
            },
          ],
        },
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
