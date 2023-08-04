---
title: Window.history
slug: Web/API/Window/history
---

{{APIRef}}

{{ APIRef }}

`Window.history` 唯讀屬性會回傳一個 {{domxref("History")}} 物件，其提供了一個介面來操控瀏覽器的 _session history_ 紀錄（為當前面頁所在分頁中訪問、或於當前面頁中透過頁面框架（frame）所載入的頁面）。

相關範例及細節請參考[操控瀏覽器歷史紀錄](/zh-TW/docs/Web/API/History_API)一文。文章中解釋了在使用 `pushState()` 與 `replaceState()` 方法前應該要知道的安全性功能。

## 語法

```plain
var historyObj = window.history;
```

## 範例

```js
history.back(); // 相當於按下上一頁按鈕
history.go(-1); // 相當於 history.back();
```

## 備註

For top-level pages you can see the list of pages in the session history, accessible via the `History` object, in the browser's dropdowns next to the back and forward buttons.

For security reasons the `History` object doesn't allow the non-privileged code to access the URLs of other pages in the session history, but it does allow it to navigate the session history.

There is no way to clear the session history or to disable the back/forward navigation from unprivileged code. The closest available solution is the [`location.replace()`](/zh-TW/DOM/window.location#replace) method, which replaces the current item of the session history with the provided URL.

## 規範

{{Specifications}}
