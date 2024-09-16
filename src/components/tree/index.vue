<template>
  <div class="demo-list" v-for="item in datalist" :key="item.name">
    <div class="demo-item-name">
      <div class="group-name">
        <router-link :to="item.url" class="name">{{ item.name }}</router-link>
      </div>
    </div>
    <data-tree v-if="item.children" v-bind="{ datalist: item.children }" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'data-tree',
})
type DataItem = {
  name: string
  url: string
  children?: DataItem[]
}
interface Props {
  datalist: DataItem[]
}
// 没有默认值
defineProps<Props>()
// 有默认值
// withDefaults(defineProps<Props>(), {
//   msg: '子组件默认值',
//   list: () => [1, 2, 3],
// })
</script>

<style lang="less" scoped>
.demo-item-name {
  counter-reset: count;
  counter-increment: count;
  display: inline-flex;
  height: 30px;
  span {
    padding: 0 4px;
  }
  &:hover {
    background-color: #eef2ff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

.demo-item-name::before {
  content: counters(count, '-');
  color: transparent;
}

.demo-list:has(.demo-list) > .demo-item-name > .group-name::before {
  background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.354 2.646A.5.5 0 0 0 4.5 3v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 0-.708l-3-3z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E")
    right 2px center no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.354 5.354A.5.5 0 0 0 9 4.5H3a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E");
}
.demo-list:has(.demo-list) > .demo-item-name > .group-name > .name::before {
  display: inline-flex;
  content: '';
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 8px;
  // background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.833 3.75c0-.92.746-1.667 1.667-1.667h5.417c.247 0 .481.11.64.3l1.833 2.2h7.11c.92 0 1.667.747 1.667 1.667v10c0 .92-.747 1.667-1.667 1.667h-15c-.92 0-1.667-.746-1.667-1.667V3.75zm6.693 0H2.5v4.584h15V6.25H10a.833.833 0 0 1-.64-.3l-1.834-2.2zM17.5 10h-15v6.25h15V10z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E")
  //   center no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.917 2.083c.247 0 .481.11.64.3l1.833 2.2h5.443c.92 0 1.667.747 1.667 1.667v1.667h.833a.833.833 0 0 1 .817.997l-1.666 8.333a.833.833 0 0 1-.817.67H1.677a.814.814 0 0 1-.157-.013.83.83 0 0 1-.687-.82V3.75c0-.92.746-1.667 1.667-1.667h5.417zM10 6.25a.833.833 0 0 1-.64-.3l-1.834-2.2H2.5v6.564l.441-1.766a.833.833 0 0 1 .809-.631h12.083V6.25H10zm-7.266 10L4.4 9.584h12.916l-1.334 6.666H2.733z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E");
}

.group-name {
  display: inline-flex;
  align-items: center;
  > .name {
    display: flex;
    align-items: center;
  }
  &::before,
  .name::before {
    display: inline-flex;
    content: '';
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .name::before {
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.833 3.75c0-.92.746-1.667 1.667-1.667h5.417c.247 0 .481.11.64.3l1.833 2.2h7.11c.92 0 1.667.747 1.667 1.667v10c0 .92-.747 1.667-1.667 1.667h-15c-.92 0-1.667-.746-1.667-1.667V3.75zm6.693 0H2.5v4.584h15V6.25H10a.833.833 0 0 1-.64-.3l-1.834-2.2zM17.5 10h-15v6.25h15V10z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E")
      center no-repeat;
  }
}
// ul {
//   counter-reset: listCounter; /*初始化计数器*/
// }
// li {
//   counter-increment: listCounter; /*计数器增长*/
// }
// li::before {
//   content: counter(listCounter); /*计数器显示*/
// }
</style>
