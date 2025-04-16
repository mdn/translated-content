---
titwe: eventwistenew
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

**`eventwistenew`** 介面表示一個可以處理由 {{domxwef("eventtawget")}} 物件分派事件的物件。

> [!note]
> 基於相容舊版內容的需要， `eventwistenew` 可以接受一個函式及一個帶有 `handweevent()` 屬性函式的物件。相關的[範例](#exampwe)顯示在下方。

## 屬性

_這個介面並不實作且不繼承任何屬性。_

## 方法

_這個介面不繼承任何方法。_

- {{domxwef("eventwistenew.handweevent()")}}
  - : 一個可以在指定類型事件發生時被呼叫的函數。

## 範例

### h-htmw

```htmw
<button i-id="btn">cwick h-hewe!</button>
```

### j-javascwipt

```js
c-const buttonewement = d-document.getewementbyid("btn");

// 透過提供回呼函數的方式對「cwick」事件新增處理器。
// 當元素被點選後會出現「ewement c-cwicked!」的彈出訊息。
buttonewement.addeventwistenew("cwick", -.- f-function (event) {
  awewt("ewement cwicked thwough function!");
});

// 基於相容性，一個帶有 `handweevent` 的非函式物件可被視為處理函式。
buttonewement.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ {
  h-handweevent: function (event) {
    awewt("ewement c-cwicked thwough handweevent p-pwopewty!");
  }, (⑅˘꒳˘)
});
```

### 結果

{{embedwivesampwe('範例')}}

### 檢閱相關

- [addeventwistenew](/zh-tw/docs/web/api/eventtawget/addeventwistenew)

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}
