<template>
  <div>
    <div>manage</div>
    <router-link to="/home"> 跳转home </router-link>
    <router-link v-slot="{ href, navigate, isExactActive }" to="/home/user" custom>
      <div :class="{ active: isExactActive }" :href="href" @dblclick="navigate">跳转user</div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';

// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave(() => {
  const answer = window.confirm('确定离开吗');
  // 取消导航并停留在同一页面上
  if (!answer) return false;
});
</script>
