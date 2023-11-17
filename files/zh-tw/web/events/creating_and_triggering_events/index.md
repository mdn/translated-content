---
title: 建立或觸發事件
slug: Web/Events/Creating_and_triggering_events
---

本文介紹如何建立和觸發事件。

## 建立自定義事件

事件可以用 {{domxref("Event")}} constructor 建立，如下所示：

```js
var event = new Event('build');

// 監聽事件
elem.addEventListener('build', function (e) { ... }, false);

// 觸發事件
elem.dispatchEvent(event);
```

除了 Internet Explorer 以外，大多數的瀏覽器都支持這個 constructor 。若要能夠支援 Internet Explore 的更詳細的方法，可以參考段落《[早期的做法](#早期的做法)》。

### 增加自定義的資料－－CustomEvent()

要在事件的 object 追加其他資料，能使用 {{domxref("CustomEvent")}} 介面。它有 **detail** 屬性，可以用來傳送自訂資料。

舉例來說，可以以下面方式建立事件：

```js
var event = new CustomEvent("build", { detail: elem.dataset.time });
```

它可以讓你傳送自訂資料到事件的監聽器：

```js
function eventHandler(e) {
  log("The time is: " + e.detail);
}
```

### 早期的做法

早期建立事件的方式參考了 Java 的 API 。下為一個早期作法的例子：

```js
// 建立事件
var event = document.createEvent("Event");

// 設定事件名稱為 「build」 。
event.initEvent("build", true, true);

// 監聽事件
elem.addEventListener(
  "build",
  function (e) {
    // e.target matches elem
  },
  false,
);

// 事件對象可以是任一 HTML 元素或是 EventTarget 。
elem.dispatchEvent(event);
```

## 觸發自定義事件

下面的例子演示了一個複選框藉由 DOM 的 methods 模擬一次點擊（換言之，讓程式執行一次「點擊事件」。）。 [觀看實例](http://developer.mozilla.org/samples/domref/dispatchEvent.html)。

```js
function simulateClick() {
  var event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  var cb = document.getElementById("checkbox");
  var canceled = !cb.dispatchEvent(event);
  if (canceled) {
    // A handler called preventDefault.
    alert("canceled");
  } else {
    // None of the handlers called preventDefault.
    alert("not canceled");
  }
}
```

## 參見

- {{domxref("document.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}
