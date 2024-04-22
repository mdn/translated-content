---
title: DragEvent.dataTransfer
slug: Web/API/DragEvent/dataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

**`DataEvent.dataTransfer`** 屬性保留了拖曳操作中的資料（指向一個 {{domxref("DataTransfer")}} 物件）。

此屬性為 {{readonlyInline}}。

## 語法

```plain
var data = dragEvent.dataTransfer;
```

### 回傳值

- `data`
  - : 一個保存 {{domxref("DragEvent")}} 當中資料的 {{domxref("DataTransfer")}} 物件。

## 範例

This example illustrates accessing the drag and drop data within the [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event) event handler.

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

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
