<template>
  <div>
    <div>login</div>
    <button @click="handleClick">count: {{ count }}</button>
    <button @click="handleClickCounter">counter.count: {{ counter.count }}</button>
    <button @click="handleCounterReset">counterReset</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/store/counter';
// 用于解构store，同时保持响应式
// import { storeToRefs } from 'pinia';

localStorage.setItem('role', 'admin'); //在登录页存储用户等级
const count = ref(0);
const counter = useCounterStore();

const handleClick = () => {
  count.value++;
};

const handleClickCounter = () => {
  // 直接改变state
  counter.count++;
  // 使用action
  counter.increment();
  counter.$patch({ count: counter.count + 1 });
  counter.$patch((state) => {
    // $patch 方法也接受一个函数来批量修改集合内部分对象的情况
    state.count++;
  });
};

// 重置状态
const handleCounterReset = () => {
  counter.$reset();
};
</script>
