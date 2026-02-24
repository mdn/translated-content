---
title: DragEvent：dataTransfer 属性
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent.dataTransfer`** 只读属性保存着拖拽操作中的数据（以 {{domxref("DataTransfer")}} 对象的形式）。

## 值

包含{{domxref("DragEvent","拖拽事件的数据", "", 1)}}的 {{domxref("DataTransfer")}} 对象。

当事件是使用构造函数创建时，该属性可以是 `null`。但若是由浏览器派发时，它永远不会是 `null`。

## 示例

下述示例展示了在 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件处理器中访问拖放数据的方法：

```js
function process_data(d) {
  // 处理数据……
}

dragTarget.addEventListener("dragend", (ev) => {
  // 调用拖放数据处理器
  if (ev.dataTransfer !== null) processData(ev.dataTransfer);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
