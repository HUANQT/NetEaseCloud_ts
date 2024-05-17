<template>
  <div class="bg-[#f6f8fc]">
    <!-- 导航 -->
    <div class="flex items-center px-[5vw] pt-[5vw] text-[6vw]">
      <!-- 返回 -->
      <Icon icon="mage:arrow-left" />
      <div class="ml-[30vw]">排行榜</div>
    </div>
    <van-tabs
      scrollspy
      sticky
      v-model:active="activeName"
      class="px-[5vw] pt-[4vw]"
    >
      <van-tab title="官方" name="a" class="mt-[4vw]">
        <!-- 榜单推荐 -->
        <div>
          <div class="text-[6vw]">榜单推荐</div>
          <div class="flex justify-between">
            <div class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden">
              <img :src="ToplistDetail?.[37]?.coverImgUrl" alt="" />
            </div>
            <div class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden">
              <img :src="ToplistDetail?.[50]?.coverImgUrl" alt="" />
            </div>
            <div class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden">
              <img :src="ToplistDetail?.[25]?.coverImgUrl" alt="" />
            </div>
          </div>
          <!-- 官方推荐 -->
          <div class="mt-[4vw]">
            <div class="text-[6vw] flex items-center">
              <Icon
                icon="simple-icons:neteasecloudmusic"
                style="color: #ff0000"
              />
              官方榜
            </div>
            <div
              class="my-[4vw] bg-white rounded-[5vw]"
              v-for="item in ToplistDetail?.slice(0, 4)"
              :key="item?.id"
            >
              <!-- 标题 -->
              <div class="flex items-center justify-between px-[2vw]">
                <span class="text-[6vw]">{{ item?.name }}</span>
                <span class="text-[#999da7] text-[3vw]">
                  {{ item?.updateFrequency }}
                </span>
              </div>
              <!-- 内容 -->
              <div
                class="px-[2vw] mt-[4vw] flex"
                v-for="itemtracks in item?.tracks"
                :key="itemtracks.first"
              >
                <div class="w-[25vw] mt-[1vw]"></div>
                <div class="truncate">
                  <span>{{ itemtracks?.first }}</span>
                  <span class="text-[#ccc]"> -{{ itemtracks?.second }}</span>
                </div>
              </div>
            </div>
            <!-- mv排行 -->
            <div class="my-[4vw] bg-white rounded-[5vw]">
              <!-- 标题 -->
              <div class="flex items-center justify-between px-[2vw]">
                <span class="text-[6vw]">mv排行</span>
                <span class="text-[#999da7] text-[3vw]"> 刚刚更新 </span>
              </div>
              <!-- 内容 -->
              <div
                class="px-[2vw] mt-[4vw] flex"
                v-for="item in TopMv"
                :key="item.id"
              >
                <div class="w-[25vw] mt-[1vw]">
                  <img :src="item.cover" />
                </div>
                <div class="truncate">
                  <span>{{ item.name }}</span>
                  <span class="text-[#ccc]">{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="精选" name="b" class="mt-[4vw]">
        <div class="text-[6vw]">精选榜</div>
        <div class="flex flex-wrap">
          <div
            class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden mt-[2vw] ml-[1vw]"
            v-for="item in ToplistDetail?.slice(0, 11)"
            :key="item.id"
          >
            <img :src="item?.coverImgUrl" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="曲风" class="mt-[4vw]" name="c">
        <div class="text-[6vw]">精选榜</div>
        <div class="flex flex-wrap">
          <div
            class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden mt-[2vw] ml-[1vw]"
            v-for="item in ToplistDetail?.slice(11, 19)"
            :key="item.id"
          >
            <img :src="item?.coverImgUrl" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="全球" name="d" class="mt-[4vw]">
        <div class="text-[6vw]">全球榜</div>
        <div class="flex flex-wrap">
          <div
            class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden mt-[2vw] ml-[1vw]"
            v-for="item in ToplistDetail?.slice(19, 25)"
            :key="item.id"
          >
            <img :src="item?.coverImgUrl" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="语种" name="e" class="mt-[4vw]">
        <div class="text-[6vw]">语种榜</div>
        <div class="flex flex-wrap">
          <div
            class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden mt-[2vw] ml-[1vw]"
            v-for="item in ToplistDetail?.slice(25, 32)"
            :key="item.id"
          >
            <img :src="item?.coverImgUrl" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="特色" name="f" class="mt-[4vw] pb-[15vw]">
        <div class="text-[6vw]">特色榜</div>
        <div class="flex flex-wrap">
          <div
            class="w-[29vw] h-[29vw] rounded-[5vw] overflow-hidden mt-[2vw] ml-[1vw]"
            v-for="item in ToplistDetail?.slice(32, 38)"
            :key="item.id"
          >
            <img :src="item?.coverImgUrl" alt="" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { getToplistDetail, getPlaylistDetail, getTopMv } from "@/service";
import { useRequest } from "vue-request";
const activeName = ref("a");
const ToplistDetailId = ref();
// 榜单内容摘要
const { data: ToplistDetail } = useRequest(getToplistDetail);
// 榜单详情
// 循环我的ToplistDetailId?.value 请求
const { data: PlaylistDetail } = useRequest(() =>
  getPlaylistDetail({ id: ToplistDetailId?.value })
);
// mv排行
const { data: TopMv } = useRequest(getTopMv);

watchEffect(() => {
  console.log(ToplistDetail?.value);
  // 获得id
  if (ToplistDetail?.value) {
    // 循环ToplistDetail?.value的id取四个
    ToplistDetailId.value = ToplistDetail.value
      .slice(0, 4)
      .map((item: { id: number }) => item.id);
    console.log(ToplistDetailId?.value);
  }

  console.log(PlaylistDetail?.value);
  console.log(TopMv?.value);
});
</script>
