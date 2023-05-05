// 路由独享守卫
const auth = () => {
  if (!localStorage.getItem('token')) {
    // 未登陆,重定向到登录页面
    return '/login';
  }
};

const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/home',
    name: 'Home', //增加name，动态路由通过name挂载到该子路由下
    component: () => import('@/pages/home.vue'),
    redirect: '/home/user', //新增
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user.vue'),
        beforeEnter: auth, //路由独享守卫
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue'),
  },
];

// 动态路由
// 将/home/manage拆出来
export const manageRoute = {
  path: '/home/manage',
  component: () => import('@/pages/manage.vue'),
};

export default routes;
