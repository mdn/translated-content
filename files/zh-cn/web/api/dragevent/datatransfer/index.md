---
title: DragEvent.dataTransfer
slug: Web/API/DragEvent/dataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

**`DataEvent.dataTransfer`** 属性保存着拖拽操作中的数据（作为一个 DataTransfer 对象）

This property is {{readonlyInline}}.

## 语法

```plain
var data = dragEvent.dataTransfer;
```

### 返回值

- `data`
  - : {{domxref("DataTransfer")}} 对象包含着 {{domxref("DragEvent","drag event's data")}}.

## 示例

这个例子展示了在[`dragend`](/zh-CN/docs/Web/API/HTMLElement/dragend_event) 事件处理程序中获取拖拽中数据的方式。

```js
function process_data(d) {
  // Process the data ...
}

dragTarget.addEventListener(
  "dragend",
  function (ev) {
    // Call the drag and drop data processor
    if (ev.dataTransfer != null) process_data(ev.dataTransfer);
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
