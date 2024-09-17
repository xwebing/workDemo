<template>
  <div class="demo">
    <span class="tooltip" data-tooltip="CSS 实现 Tooltip">hover me</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.demo {
  text-align: center;
  margin: 20px;
  width: 100%;
}

.demo .tooltip {
  position: relative;
  overflow: hidden;
}

.demo .tooltip:before {
  opacity: 0;
}

.demo .tooltip:hover:before {
  opacity: 1;
}

.demo .tooltip:before {
  position: absolute;
  left: -20px;
  display: block;
  content: attr(data-tooltip);
  font-size: 12px;
  background: #e6e6e6;
  margin-top: 32px;
  padding: 8px 4px;
  width: 120px;
  border-radius: 6px;
  z-index: 99;
  text-align: center;
  color: #000;
  transition:
    opacity 0.25s,
    transform 0.25s;
  border: 1px solid #409eff;
}
</style>
