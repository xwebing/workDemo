<template>
  <div class="demo">
    <div class="card">1</div>
    <div class="card spreadjs">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
    <div class="card">5</div>
    <div class="card">6</div>
    <div class="card">7</div>
    <div class="card spreadjs">8</div>
    <div class="card">9</div>
  </div>

  <!-- <div id="dddd" class="sortable-list">
      <div class="sortable-item speadjs">speadjs 1</div>
      <div class="sortable-item cc">项目 1</div>
      <div class="sortable-item cc">项目 2</div>
      <div class="sortable-item cc">项目 2</div>
      <div class="sortable-item cc">项目 3</div>
      <div class="sortable-item cc">项目 4</div>
      <div class="sortable-item cc">项目 5</div>
      <div class="sortable-item cc">项目 6</div>
      <div class="sortable-item speadjs">speadjs 2</div>
      <div class="sortable-item cc">项目 7</div>
    </div>
       <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      .sortable-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;

        position: relative;
        width: 100%;
        flex-wrap: wrap;
      }
      .sortable-item {
        background-color: #f0f0f0;
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 5px;
        width: 50%;
        flex: auto;
      }
      .sortable-item:hover {
        background-color: #e0e0e0;
      }
      .speadjs {
        width: 100% !important;
      }
      .sortable-list-auto .sortable-item {
        width: 50%;
      }
      /* .sortable-item ~ .sortable-item {
        width: 50%;
      } */
      /* .speadjs ~ .cc:nth-child(odd) {
        width: 100% !important;
      } */
      /* spreadjs上一个元素是奇数行*/
      /* .speadjs + .cc {
        width: 100% !important;
      } */
    </style>
    var sortable = new Sortable(document.querySelector('.sortable-list'), {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: function (/**Event*/ evt) {
          var itemEl = evt.item // dragged HTMLElement
          evt.to // target list
          evt.from // previous list
          evt.oldIndex // element's old index within old parent
          evt.newIndex // element's new index within new parent
          evt.clone // the clone element
          evt.pullMode // when item is in another sortable: `"clone"` if cloning, `true` if moving
          document.querySelector('#dddd').classList.remove('sortable-list-auto')
        },
        // 拖拽移动的时候
        onMove: function (/**Event*/ evt, /**Event*/ originalEvent, c, d, e) {
          // Example: https://jsbin.com/nawahef/edit?js,output
          evt.dragged // dragged HTMLElement
          evt.draggedRect // DOMRect {left, top, right, bottom}
          evt.related // HTMLElement on which have guided
          evt.relatedRect // DOMRect
          evt.willInsertAfter // Boolean that is true if Sortable will insert drag element after target by default
          originalEvent.clientY // mouse position
          // return false; — for cancel
          // return -1; — insert before target
          // return 1; — insert after target
          console.log(evt, originalEvent, c, d, e)
          // evt.related.classList.add('speadjs11')

          var items = sortable.toArray()
          console.log(evt.item, items)

          //   var draggedElement = evt.item // 拖拽的元素
          //   var index = items.indexOf(draggedElement.getAttribute('data-sortable-id')) // 拖拽元素的当前索引
          //   console.log(index)
          document.querySelector('#dddd').classList.add('sortable-list-auto')
        }
      }) -->
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.demo {
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  .card {
    width: calc(50% - 12px);
    background: rebeccapurple;
    color: #fff;
    padding: 24px;
    margin-bottom: 12px;
    flex: auto;
  }
  .spreadjs {
    width: 100% !important;
  }
}
</style>
