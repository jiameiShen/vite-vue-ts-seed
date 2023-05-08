import { defineStore } from 'pinia';
import { ref } from 'vue';

// 写法一
export const useCounterStore = defineStore('counter', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// 写法二
export const useCounterStore2 = defineStore('counter2', () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return {
    count,
    increment,
  };
});
