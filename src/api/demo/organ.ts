import { defHttp } from '/@/utils/http/axios';
import { OragnParams, OrgListGetResultModel } from './model/orgModel';

enum Api {
  ORG_LIST = '/org',
}

/**
 * @description: Get sample list value
 */
export function orgListApi(params: OragnParams) {
  return defHttp.request<OrgListGetResultModel>({
    url: Api.ORG_LIST,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
