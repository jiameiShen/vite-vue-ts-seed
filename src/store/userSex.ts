import { defineStore } from 'pinia';
import { useUserStore } from './user';

enum Sex {
  man = '男',
  woman = '女',
}

export const useUserSex = defineStore('userSex', {
  state: () => {
    return {
      sex: Sex.man,
    };
  },
  getters: {
    newSex: () => {
      const userStore = useUserStore();
      return userStore.userInfo.name !== 'zhangsan' ? Sex.woman : Sex.man;
    },
  },
  actions: {
    updateSex() {
      const userStore = useUserStore();
      if (userStore.userInfo.name !== 'zhangsan') this.sex = Sex.woman;
    },
  },
});
