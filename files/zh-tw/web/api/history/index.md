---
title: History
slug: Web/API/History
---

{{ APIRef("HTML DOM") }}

**`History`** 介面允許操控瀏覽器的 _session history_ 紀錄，為當前面頁所在分頁中訪問、或於當前面頁中透過頁面框架（frame）所載入的頁面。

## 屬性

_The `History`_ _interface doesn't inherit any property._

- {{domxref("History.length")}} {{readOnlyInline}}
  - : Returns an `Integer` representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns `1`.
- {{domxref("History.current")}} {{readOnlyInline}} {{ non-standard_inline() }} {{Deprecated_Inline}}
  - : Returns a {{domxref("DOMString")}} representing the URL of the active item of the session history. This property was never available to web content and is no more supported by any browser. Use {{domxref("Location.href")}} instead.
- {{domxref("History.next")}} {{readOnlyInline}} {{ non-standard_inline() }} {{Deprecated_Inline}}
  - : Returns a {{domxref("DOMString")}} representing the URL of the next item in the session history. This property was never available to web content and is not supported by other browsers.
- {{domxref("History.previous")}} {{readOnlyInline}} {{ non-standard_inline() }} {{Deprecated_Inline}}
  - : Returns a {{domxref("DOMString")}} representing the URL of the previous item in the session history. This property was never available to web content and is not supported by other browsers.
- {{domxref("History.scrollRestoration")}} {{experimental_inline}}
  - : Allows web applications to explicitly set default scroll restoration behavior on history navigation. This property can be either `auto` or `manual`.
- {{domxref("History.state")}} {{readOnlyInline}}
  - : Returns an `any` value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a [`popstate`](/zh-TW/docs/Web/API/Window/popstate_event) event.

## 方法

_The `History`_ _interface doesn't inherit any methods._

- {{domxref("History.back()")}}

  - : 回到 session history 紀錄中的前一頁，等同於使用者按下瀏覽器的上一頁按鈕。相當於 `history.go(-1)`。

    > [!NOTE]
    > Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.forward()")}}

  - : 回到 session history 紀錄中的下一頁，等同於使用者按下瀏覽器的下一頁按鈕。相當於 `history.go(1)`。

    > [!NOTE]
    > Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.

- {{domxref("History.go()")}}
  - : 自 session history 紀錄中載入一個頁面，利用該頁面相對於目前頁面的所在位置，例如 -1 為前一頁或 1 為下一頁。若指定了一個超出範圍的值（舉例來說，在 session history 沒有先前訪頁面的情況下指定 -1），此方法將會是靜默（不會產生錯誤）且沒有任何效果的。不帶參數或是傳入 0 呼叫 `go()` 會重新載入目前頁面。Internet Explorer 也可以傳入字串來前往一個於瀏覽歷史列表中指定的頁面。
- {{domxref("History.pushState()")}}
  - : 插入給定的資料與指定的標題（title）以及選擇性的 URL 至 session history 堆疊（stack）中。給定的資料將被 DOM 視為不透明的（opaque）；可以指定任何可被序列化的 JavaScript 物件。請注意 Firefox 目前會忽略標題（title）參數；更多資訊請參閱[操控瀏覽器歷史紀錄](/zh-TW/docs/Web/API/History_API)。
- {{domxref("History.replaceState()")}}
  - : 以指定的資料、標題（title）及可選的 URL 來更新歷史紀錄堆疊（history stack）中近期的項目。給定的資料將被 DOM 視為不透明的（opaque）；可以指定任何可被序列化的 JavaScript 物件。請注意 Firefox 目前會忽略標題（title）參數；更多資訊請參閱[操控瀏覽器歷史紀錄](/zh-TW/docs/Web/API/History_API)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The {{domxref("Window.history")}} property returning the history of the current session.
