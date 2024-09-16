<template>
  <div class="demo">
    <div class="demo-left">
      <div>
        <div>
          <span
            >在我们的日常开发工作中，文本溢出截断省略是很常见的一种需考虑的业务场景细节。看上去
            “稀松平常”
            ，但在实现上却有不同的区分，是单行截断还是多行截断？多行的截断判断是基于行数还是基于高度？这些问题之下，都有哪些实现方案？他们之间的差异性和场景适应性又是如何？凡事就怕较真，较真必有成长。本文试图通过编码实践，给出一些答案。</span
          ><i class="icon-test">icon</i>
        </div>
      </div>
      <!-- 112223333333333333333333331112223333333333333333333331112223333333333333333333331112223333333333333333333331112223333333333333333333331112223333333333333333333331 -->
    </div>
    <div class="demo-right">button</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 全屏时，保存获取不到全部数据
</script>

<style lang="less" scoped>
.demo {
  display: flex;
  color: #fff;
  justify-content: space-between;
  overflow: hidden;
  gap: 60px;
  .demo-left {
    display: flex;
    overflow: hidden;
    background-color: darkmagenta;
    div {
      display: flex;
      min-width: 0;
      // 或使用 overflow: hidden;
      span {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      i {
      }
    }
  }
  .demo-right {
    background-color: cadetblue;
  }
}
.icon-test {
  mask: url('@/assets/svg/tools/icon-temp.svg');
  mask-size: 100% 100%;
  background-position: center;
  background-size: cover;
  transition: all 0.3s;
  background-color: aliceblue;
  cursor: pointer;
  outline: none;
  user-select: none;
  height: 20px;
}
</style>
