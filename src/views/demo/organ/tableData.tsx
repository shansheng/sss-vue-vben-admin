import { BasicColumn } from '/@/components/Table/src/types/table';

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
