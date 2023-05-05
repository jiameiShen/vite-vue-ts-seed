import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

// 全局前置守卫
router.beforeEach((to) => {
  if (to.path === '/login') {
    //在登录页做清除操作，如清除token等
  } else if (!localStorage.getItem('token') && to.meta.auth) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
