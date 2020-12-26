import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 7,
  menu: {
    name: t('routes.demo.organ.orgs'),
    path: '/organ',
    tag: {
      dot: true,
    },
    children: [
      {
        path: 'organlist',
        name: t('routes.demo.organ.orgs'),
      },
    ],
  },
};
export default menu;
