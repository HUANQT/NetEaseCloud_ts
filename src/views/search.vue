<template>
  <div>123</div>
  <div></div>
</template>
<script setup lang="ts">
import { getDefaultKey } from "../service";
import { watchEffect } from "vue";
import { useRequest } from "vue-request";

const { data: DefaultKey } = useRequest(getDefaultKey, {});
watchEffect(() => {
  console.log(DefaultKey?.value);
});
</script>
