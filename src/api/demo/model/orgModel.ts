import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type OragnParams = BasicPageParams;

export interface OrgListItem {
  orgid: string;
  orgcode: string;
  orgname: string;
  orgseq: string;
  startdate: string;
  createtime: string;
  //no: number;
  //status: number;
}

/**
 * @description: Request list return value
 */
export type OrgListGetResultModel = BasicFetchResult<OrgListItem>;
