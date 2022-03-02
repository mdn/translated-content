---
title: 'Document: scroll事件'
slug: Web/API/Document/scroll_event
tags:
  - API
  - DOM
  - Document
  - Event
  - 事件
  - Reference
  - 參考文件
  - Scroll
  - UIEvent
browser-compat: api.Document.scroll_event
---
{{APIRef}}

**`scroll`** 事件會在捲動文件的可視區域時觸發。元件（Element）捲動相關請參見{{domxref("Element/scroll_event", "Element:&nbsp;scroll事件")}}。

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>是</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>否</td>
    </tr>
    <tr>
      <th>介面</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>事件處理常式的屬性</th>
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **註：**iOS的UIWebViews中，`scroll`事件不會在捲動時觸發，而只在捲動結束後觸發。請參見[Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202)。Safari和WKWebViews不受本bug影響。

## 範例

### 限制捲動事件的觸發次數

Since scroll events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using requestAnimationFrame(), setTimeout(), or a CustomEvent, as follows.

Note, however, that input events and animation frames are fired at about the same rate, and therefore the optimization below is often unnecessary. This example optimizes thescroll event for requestAnimationFrame.



有鑒於`scroll`事件可能會以很高的速率觸發，事件處理常式不應執行計算密集的操作（如DOM修改）。所以，建議改用{{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}、{{DOMxRef("setTimeout()")}}或{{DOMxRef("CustomEvent")}}以調控事件的觸發次數，如下。

不過需要注意，輸入事件和動畫影格的觸發速率大致相同，因此通常沒有必要進行下述的最佳化。本範例最佳化`requestAnimationFrame`的`scroll`事件。

```js
// 參考來源：http://www.html5rocks.com/en/tutorials/speed/animations/

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // 依據捲動位置進行某些操作
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

更多類似範例可見[`resize`](/zh-TW/docs/Web/API/Window/resize_event)事件頁面。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- [Element: `scroll`事件](/zh-TW/docs/Web/API/Element/scroll_event)
