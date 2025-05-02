---
title: "文件：createRange() 方法"
short-title: createRange()
slug: Web/API/Document/createRange
page-type: web-api-instance-method
browser-compat: api.Document.createRange
---

{{APIRef("DOM")}}

**`Document.createRange()`** 方法會回傳一個新的 {{domxref("Range")}} 物件。

## 語法

```js-nolint
createRange()
```

### 參數

無。

### 回傳值

建立的 {{domxref("Range")}} 物件。

## 範例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 注意事項

一旦建立了 `Range`，你需要設定其邊界點，才能使用其大多數的方法。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
