<template>
  <div class="layout">
    <div class="layout-menu">
      <input type="text" v-model="searchStr" placeholder="搜索" />
      <data-tree v-bind="{ datalist: datalistTemp }"></data-tree>
    </div>
    <router-view class="layout-page"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DataTree from '@/components/tree/index.vue'

type DataItem = {
  name: string
  url: string
  children?: DataItem[]
}

const demoList: DataItem[] = [
  {
    name: '文本',
    url: '/',
    children: [
      {
        name: '文本溢出',
        url: '/',
        children: [
          {
            name: '单行文本溢出',
            url: '/',
            children: [
              {
                name: '测试1',
                url: '/',
                children: [
                  {
                    name: '测试2',
                    url: '/',
                    children: [
                      {
                        name: '测试3',
                        url: '/text-overflow',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: '多行文本溢出',
            url: '/',
          },
        ],
      },
      {
        name: '文本省略号',
        url: '/',
      },
    ],
  },
]
const searchStr = ref('')

const datalistTemp = computed(() => {
  return treeSearch(demoList, searchStr.value)
})

function treeSearch(list: DataItem[], key: string) {
  if (!key) {
    return list
  }
  const result: DataItem[] = []
  list.forEach((item: DataItem) => {
    if (item.name.includes(key)) {
      result.push(item)
    } else if (item?.children?.length) {
      const children = treeSearch(item.children, key)
      if (children?.length) {
        result.push({
          ...item,
          children,
        })
      }
    }
  })

  return result
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.layout {
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: auto;
  color: #40485b;
  .layout-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 12px;
  }

  input {
    height: 36px;
    line-height: 36px;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 12px;
    outline: lightslategrey;
    transition: all 0.3s;
    border: 1px solid #ccc;
  }
}
</style>
