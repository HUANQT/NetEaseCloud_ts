<template>
  <router-view />
  <!-- 底部导航 -->
  <div class="fixed bottom-0 z-[10]">
    <div class="w-[100vw] h-[5vh] bg-white flex justify-around">
      <div class="mt-[2vw]">
        <router-link to="/" :class="{ 'text-red-500': $route.path === '/' }">
          <div class="flex flex-col items-center">
            <Icon icon="ri:netease-cloud-music-fill" />
            <span> 首页 </span>
          </div>
        </router-link>
      </div>
      <div class="mt-[2vw]">
        <router-link
          to="/community"
          :class="{ 'text-red-500': $route.path === '/community' }"
        >
          <div class="flex flex-col items-center">
            <Icon icon="icon-park-outline:ranking-list" />
            <span> 排行榜 </span>
          </div>
        </router-link>
      </div>
      <div class="mt-[2vw]">
        <router-link
          to="/myUser"
          :class="{ 'text-red-500': $route.path === '/myUser' }"
        >
          <div class="flex flex-col items-center">
            <Icon icon="ph:user-light" />
            <span> 我的 </span>
          </div>
        </router-link>
      </div>
      <!-- <div class="mt-[2vw]">
        <router-link to="/">
          <div class="flex flex-col items-center">
            <Icon icon="gridicons:reader-following-conversation" />
            <span> 关注 </span>
          </div>
        </router-link>
      </div>
      <div class="mt-[2vw]">
        <router-link to="/">
          <div class="flex flex-col items-center">
            <Icon icon="iconoir:community" />
            <span> 社区 </span>
          </div>
        </router-link>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts"></script>
