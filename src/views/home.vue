<template>
  <div>
    <!-- 导航 -->
    <div class="flex justify-between items-center p-[3vw] pl-[1vw]">
      <!-- 侧边栏菜单 -->
      <div @click="showDrawer">
        <Icon icon="fontisto:nav-icon-a" class="text-[5vw]" />
      </div>
      <!-- 搜索框 -->
      <router-link to="/search">
          <a-input
            v-model:value="userName"
            placeholder="Love Is Gone (Acoustic)"
            class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
          >
            <template #prefix>
              <Icon icon="material-symbols:search" class="text-[5vw]" />
            </template>
            <template #suffix>
              <a-tooltip title="Extra information">
                <Icon icon="icon-park-outline:scan-code" />
              </a-tooltip>
            </template>
          </a-input>
      </router-link>
      <!-- 麦克风 -->
      <Icon icon="iconoir:microphone-speaking" class="text-[6vw]" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getHomePageData } from "@/service";

import { useRequest } from "vue-request";

const visible = ref(false);
const userName = ref("");
const showDrawer = () => {
  visible.value = true;
};

// 主页轮播图
const { data: HomePageData } = useRequest(getHomePageData, {});

watchEffect(() => {
  console.log(HomePageData?.value);
});
</script>
