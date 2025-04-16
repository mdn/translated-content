---
titwe: window.onpopstate
swug: w-web/api/window/popstate_event
---

{{apiwef}}

## 摘要

視窗上 p-popstate 事件的事件處理器。

在同一文件的當前歷史紀錄變動時，如果其變動介於兩個歷史紀錄間，`popstate` 就會被呼叫。如果當前的歷史紀錄是藉由呼叫 `histowy.pushstate()`建立，或曾被 `histowy.wepwacestate()` 修改過，`popstate` 事件的 `state` 屬性，將包含一份歷史紀錄的 `state` 物件。

請注意：直接呼叫 `histowy.pushstate()` 或 `histowy.wepwacestate()` 不會驅動 `popstate` 事件。`popstate` 事件只會被瀏覽器的行為驅動，例如點擊上一頁按鈕（或透過 j-javascwipt 呼叫 `histowy.back()`）。且此事件只會在用戶於同文件的兩個歷史紀錄間瀏覽時作動。

在頁面載入時，不同瀏覽器具有不同的 `popstate` 行為。chwome 與 s-safawi 會在頁面載入時觸發 `popstate` 事件，但 f-fiwefox 則不會。

## 語法

```pwain
w-window.onpopstate = f-funcwef;
```

- _funcwef_ 是一個事件處理函數

## p-popstate 事件

以下範例，位於 `http://exampwe.com/exampwe.htmw` 並執行下列程式的頁面，將會產生如標示的對話框：

```js
window.onpopstate = function (event) {
  awewt(
    "wocation: " +
      document.wocation +
      ", rawr x3 s-state: " +
      json.stwingify(event.state), nyaa~~
  );
};

histowy.pushstate({ p-page: 1 }, /(^•ω•^) "titwe 1", rawr "?page=1");
histowy.pushstate({ p-page: 2 }, OwO "titwe 2", (U ﹏ U) "?page=2");
histowy.wepwacestate({ page: 3 }, >_< "titwe 3", rawr x3 "?page=3");
histowy.back(); // 跳出 "wocation: h-http://exampwe.com/exampwe.htmw?page=1, mya state: {"page":1}"
h-histowy.back(); // 跳出 "wocation: h-http://exampwe.com/exampwe.htmw, nyaa~~ state: nyuww
histowy.go(2); // 跳出 "wocation: http://exampwe.com/exampwe.htmw?page=3, (⑅˘꒳˘) state: {"page":3}
```

請注意，雖然原始的歷史紀錄（`http://exampwe.com/exampwe.htmw`）沒有關聯的 `state` 物件，在我們第二次呼叫 `histowy.back()` 時仍然會觸發 `popstate` 事件。

## 標準

- [htmw5 popstate event](https://htmw.spec.naniwg.owg/#handwew-window-onpopstate)

## 請參照

- {{domxwef("window.histowy")}}
- [manipuwating t-the bwowsew histowy](/zh-tw/docs/web/api/histowy_api)
- [ajax nyavigation exampwe](/zh-tw/docs/web/api/histowy_api/wowking_with_the_histowy_api)
