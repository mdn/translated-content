---
title: window.onpopstate
slug: Web/API/Window/popstate_event
---

{{ApiRef}}

## 摘要

視窗上 popstate 事件的事件處理器。

在同一文件的當前歷史紀錄變動時，如果其變動介於兩個歷史紀錄間，`popstate` 就會被呼叫。如果當前的歷史紀錄是藉由呼叫 `history.pushState()`建立，或曾被 `history.replaceState()` 修改過，`popstate` 事件的 `state` 屬性，將包含一份歷史紀錄的 `state` 物件。

請注意：直接呼叫 `history.pushState()` 或 `history.replaceState()` 不會驅動 `popstate` 事件。`popstate` 事件只會被瀏覽器的行為驅動，例如點擊上一頁按鈕（或透過 JavaScript 呼叫 `history.back()`）。且此事件只會在用戶於同文件的兩個歷史紀錄間瀏覽時作動。

在頁面載入時，不同瀏覽器具有不同的 `popstate` 行為。Chrome 與 Safari 會在頁面載入時觸發 `popstate` 事件，但 Firefox 則不會。

## 語法

```plain
window.onpopstate = funcRef;
```

- _funcRef_ 是一個事件處理函數

## popstate 事件

以下範例，位於 `http://example.com/example.html` 並執行下列程式的頁面，將會產生如標示的對話框：

```js
window.onpopstate = function (event) {
  alert(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
};

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // 跳出 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 跳出 "location: http://example.com/example.html, state: null
history.go(2); // 跳出 "location: http://example.com/example.html?page=3, state: {"page":3}
```

請注意，雖然原始的歷史紀錄（`http://example.com/example.html`）沒有關聯的 `state` 物件，在我們第二次呼叫 `history.back()` 時仍然會觸發 `popstate` 事件。

## 標準

- [HTML5 popstate event](http://www.whatwg.org/specs/web-apps/current-work/#handler-window-onpopstate)

## 請參照

- {{domxref("window.history")}}
- [Manipulating the browser history](/zh-TW/docs/Web/Guide/DOM/Manipulating_the_browser_history)
- [Ajax navigation example](/zh-TW/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
