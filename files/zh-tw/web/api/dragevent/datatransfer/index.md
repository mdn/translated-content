---
title: DragEvent：dataTransfer 屬性
slug: Web/API/DragEvent/dataTransfer
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent.dataTransfer`** 唯讀屬性用來保存拖曳操作的資料（以 {{domxref("DataTransfer")}} 物件表示）。

## 值

一個 {{domxref("DataTransfer")}} 物件，其中包含{{domxref("DragEvent","拖曳事件的資料","",1)}}。

當事件是透過建構子建立時，此屬性可能為 `null`。但當事件由瀏覽器派發時，該屬性永遠不會為 `null`。

## 範例

以下範例展示了如何在 {{domxref("HTMLElement/dragend_event", "dragend")}} 事件處理器中存取拖曳與放置的資料。

```js
function processData(d) {
  // 處理資料 …
}

dragTarget.addEventListener(
  "dragend",
  (ev) => {
    // 呼叫拖曳與放置資料處理器
    if (ev.dataTransfer !== null) processData(ev.dataTransfer);
  },
  false,
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
