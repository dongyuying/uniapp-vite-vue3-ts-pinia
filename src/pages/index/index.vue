<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <text class="title">{{obj.mark}}</text>
    </view>
    <view>
      <view>userStore中state.count数据:{{useStore.count}}</view>
      <view>userStore中getters中的doubleCount数据:{{useStore.doubleCount}}</view>
      <view>userStore中getters中的doubleCount数据:{{appCount}}-1</view>
    </view>
    <view class="din">156</view>
    <i class="icof icof-jsfk"></i>
    <view>
      <tm-button label="按钮" @click="onSubmit"></tm-button>
      <tm-icon :font-size="50" name="tmicon-playcircle-fill"></tm-icon>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  import { useUserStore } from '@/store/user'
  const title = ref('Hello1111');
  const obj = reactive({mark: '525252'});
  const useStore = useUserStore()
  const appStore = useAppStore()
  
  const {appContext} = getCurrentInstance()
  const globalProxy = appContext.config.globalProperties;
  
  
  const { appCount } = storeToRefs(appStore)
  
  const onSubmit = () => {
    title.value = 'world';
    // 更改store中的数据，三种写法，与mutation更改数据一致
    // 1.useStore.count++
    // 2.useStore.$patch({
    //   count: useStore.count + 1
    // })
    useStore.$patch((user: any) => {
      user.count += 1
    });
    appStore.getDoubleCount();
    
    const num = globalProxy.$tools.dealInput(2);
    
    console.log(num)
  }
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 18rpx;
  color: #8f8f94;
}
</style>
