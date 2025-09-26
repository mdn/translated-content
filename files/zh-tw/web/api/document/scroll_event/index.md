---
title: Document：scroll 事件
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

**`scroll`** 事件會在文件視區被捲動時觸發。若要偵測捲動完成的時機，參見 `Document` 的 {{domxref("Document/scrollend_event", "scrollend")}} 事件。若是元素的捲動，參見 `Element` 的 {{domxref("Element/scroll_event", "scroll")}} 事件。

## 語法

在例如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理屬性。

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## 事件類型

通用的 {{domxref("Event")}}。

## 範例

### 捲動事件的節流

由於 `scroll` 事件可能以高頻率觸發，事件處理器不應執行計算量大的操作，例如 DOM 修改。建議透過 {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}、{{DOMxRef("Window.setTimeout", "setTimeout()")}} 或 {{DOMxRef("CustomEvent")}} 進行{{glossary("throttle", "節流")}}處理，如下所示。

然而需要注意的是，輸入事件和動畫幀的觸發頻率大致相同，因此以下的最佳化通常不是必要的。此範例針對 `requestAnimationFrame` 最佳化了 `scroll` 事件。

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Document：`scrollend` 事件](/zh-TW/docs/Web/API/Document/scrollend_event)
- [Element：`scroll` 事件](/zh-TW/docs/Web/API/Element/scroll_event)
- [Element：`scrollend` 事件](/zh-TW/docs/Web/API/Element/scrollend_event)
