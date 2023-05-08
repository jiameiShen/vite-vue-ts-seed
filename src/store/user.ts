import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        name: 'zhangsan',
        age: 23,
      },
      token: 'S1',
    };
  },
  getters: {
    newName: (state) => state.userInfo.name + 'vip',
  },
  actions: {
    // 更新整个对象
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo;
    },
    // 更新对象中某个属性
    updateAge(age: number) {
      this.userInfo.age = age;
    },
    // 更新基础数据类型
    updateToken(token: string) {
      this.token = token;
    },
  },
  // 开始数据持久化
  // persist: true,
  persist: {
    key: 'USER', // 修改存储的键名，默认为当前 Store 的 id
    storage: window.sessionStorage, // 存储位置修改为 sessionStorage
    paths: ['userInfo.name', 'token'], //存储userInfo的name，token，默认存储全部state
  },
});
