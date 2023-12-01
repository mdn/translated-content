---
title: EventListener
slug: Web/API/EventTarget/addEventListener
---

{{APIRef("DOM Events")}}

**`EventListener`** 介面表示一個可以處理由 {{domxref("EventTarget")}} 物件分派事件的物件。

> **備註：** 基於相容舊版內容的需要， `EventListener` 可以接受一個函式及一個帶有 `handleEvent()` 屬性函式的物件。相關的[範例](#Example)顯示在下方。

## 屬性

_這個介面並不實作且不繼承任何屬性。_

## 方法

_這個介面不繼承任何方法。_

- {{domxref("EventListener.handleEvent()")}}
  - : 一個可以在指定類型事件發生時被呼叫的函數。

## 範例

### HTML

```html
<button id="btn">Click here!</button>
```

### JavaScript

```js
const buttonElement = document.getElementById("btn");

// 透過提供回呼函數的方式對「click」事件新增處理器。
// 當元素被點選後會出現「Element clicked!」的彈出訊息。
buttonElement.addEventListener("click", function (event) {
  alert("Element clicked through function!");
});

// 基於相容性，一個帶有 `handleEvent` 的非函式物件可被視為處理函式。
buttonElement.addEventListener("click", {
  handleEvent: function (event) {
    alert("Element clicked through handleEvent property!");
  },
});
```

### 結果

{{EmbedLiveSample('範例')}}

### 檢閱相關

- [addEventListener](/zh-TW/docs/Web/API/EventTarget/addEventListener)

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
