import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const organ: AppRouteModule = {
  path: '/organ',
  name: 'orgs',
  component: LAYOUT,
  redirect: '/organ/organlist',
  meta: {
    icon: 'vaadin:spline-area-chart',
    title: t('routes.demo.organ.orgs'),
  },
  children: [
    {
      path: 'organlist',
      name: 'orgs',
      meta: {
        title: t('routes.demo.organ.orgs'),
      },
      component: () => import('/@/views/demo/organ/organ.vue'),
    },
  ],
};

export default organ;
