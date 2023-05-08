<template>
  <div>
    <div>姓名：{{ userInfo.name }} 年龄：{{ userInfo.age }}</div>
    <div>性别：{{ newSex }}</div>
    <div>token：{{ token }}</div>
    <div>getter值：{{ newName }}</div>
    <button @click="handleUser">更新用户</button>
    <button @click="handleAge">更新年龄</button>
    <button @click="handleToken">更新token</button>
    <button @click="handleReset">重置</button>
    <ul>
      <li v-for="item in numList" :key="item">{{ item }}</li>
    </ul>
    <button @click="handleUpdateList">更新list</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';
import { useUserSex } from '@/store/userSex';
import { useListStore } from '@/store/list';

const userStore = useUserStore();
const { userInfo, token, newName } = storeToRefs(userStore);
const { updateUserInfo, updateAge, updateToken } = userStore;

const userSex = useUserSex();
const { newSex } = storeToRefs(userSex);

const listStore = useListStore();
const { list: numList } = storeToRefs(listStore);
const { updateList } = listStore;

const handleUser = () => {
  updateUserInfo({
    name: 'lisi',
    age: 24,
  });
};

const handleAge = () => {
  updateAge(userInfo.value.age + 1);
};

const handleToken = () => {
  updateToken('123456');
};

const handleReset = () => {
  userStore.$reset();
};

const handleUpdateList = () => {
  updateList();
};
</script>
