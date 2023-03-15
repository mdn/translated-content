---
title: DataTransfer.items
slug: Web/API/DataTransfer/items
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransfer")}}的`items` 属性只读，是拖动操作中 {{domxref("DataTransferItem","数据传输项")}}的{{domxref("DataTransferItemList","列表")}}。该列表包含了操作中每一项目的对应项，如果操作没有项目，则列表为空。

## 语法

```plain
itemList = dataTransfer.items;
```

### 返回值

一个{{domxref("DataTransferItemList")}} 对象，包含了表示拖动操作中被拖动项的{{domxref("DataTransferItem")}}对象，每一个拖动项对应一个列表项。如果拖动操作中没有数据，则列表为空。

## 示例

这个例子演示了 `items` 和 {{domxref("DataTransfer.types","types")}} 属性的用法。

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer.{types,items} properties</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart: target.id = " + ev.target.id);
 // Add this element's id to the drag payload so the drop handler will
 // know which element to add to its tree
 ev.dataTransfer.setData("text/plain", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: target.id = " + ev.target.id);
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // Print each format type
 if (ev.dataTransfer.types != null) {
   for (var i=0; i < ev.dataTransfer.types.length; i++) {
     console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
   }
 }
 // Print each item's "kind" and "type"
 if (ev.dataTransfer.items != null) {
   for (var i=0; i < ev.dataTransfer.items.length; i++) {
     console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
   }
 }
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>.{<code>types</code>, <code>items</code>} properties</h1>
 <ul>
   <li id="i1" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 1 to the Drop Zone</li>
   <li id="i2" ondragstart="dragstart_handler(event);" draggable="true">Drag Item 2 to the Drop Zone</li>
 </ul>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推荐的拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
