---
title: 建立與觸發事件
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

本文將示範如何建立與分派 DOM 事件。這類事件通常被稱為**合成事件**，以區別於瀏覽器本身觸發的事件。

## 建立自訂事件

事件可以使用 [`Event`](/zh-TW/docs/Web/API/Event) 建構子建立，如下所示：

```js
const event = new Event("build");

// 監聽此事件。
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// 分派此事件。
elem.dispatchEvent(event);
```

上述程式碼範例使用了 [EventTarget.dispatchEvent()](/zh-TW/docs/Web/API/EventTarget/dispatchEvent) 方法。

### 新增自訂資料——CustomEvent()

若要為事件物件新增更多資料，可以使用 [CustomEvent](/zh-TW/docs/Web/API/CustomEvent) 介面，並透過 **detail** 屬性傳遞自訂資料。例如，可以像這樣建立事件：

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

這樣你就可以在事件監聽器中存取額外的資料：

```js
function eventHandler(e) {
  console.log(`時間是：${e.detail}`);
}
```

### 新增自訂資料——子類別化 Event

[`Event`](/zh-TW/docs/Web/API/Event) 介面也可以被子類別化。這對於重用、處理更複雜的自訂資料，甚至為事件新增方法特別有用。

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

上述程式碼範例定義了一個 `BuildEvent` 類別，它具有一個唯讀屬性與一個固定的事件類型。

可以像這樣建立事件：

```js
const event = new BuildEvent(elem.dataset.time);
```

可以在事件監聽器中使用自訂屬性來存取額外的資料：

```js
function eventHandler(e) {
  console.log(`時間是：${e.buildTime}`);
}
```

### 事件冒泡

我們通常會希望從子元素觸發事件，並讓祖先元素捕捉它；也可以選擇性地傳遞資料：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// 建立一個新事件，允許冒泡傳遞，並提供任何你想傳遞到「detail」屬性的資料
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// form 元素會監聽自訂的「awesome」事件，然後在主控台輸出傳入的 text() 方法的回傳值
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// 當使用者輸入時，表單內的 textarea 會分派／觸發事件，並以自身作為起點
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### 動態建立與分派事件

元素可以監聽尚未建立的事件：

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // 即時建立並分派／觸發事件
  // 備註：我們也選擇性地利用了「函式表達式」（而非「箭頭函式表達式」），這樣「this」就會代表該元素
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## 觸發內建事件

此範例示範了如何使用 DOM 方法在核取方塊上模擬點擊（也就是以程式設計方式產生點擊事件）。[觀看實際範例。](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // 有一個處理常式呼叫了 preventDefault。
    alert("已取消");
  } else {
    // 沒有任何處理常式呼叫 preventDefault。
    alert("未取消");
  }
}
```

## 參見

- [CustomEvent()](/zh-TW/docs/Web/API/CustomEvent/CustomEvent)
- {{domxref("document.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}

<section id="Quick_links">
  <ol>
    <li><a href="/zh-TW/docs/Learn_web_development/Core/Scripting/Events">事件簡介</a></li>
    <li><a href="/zh-TW/docs/Web/Events">事件參考</a></li>
    <li><a href="/zh-TW/docs/Web/Events/Creating_and_triggering_events">建立與觸發事件</a></li>
    <li><a href="/zh-TW/docs/Web/Events/Event_handlers">事件處理（概覽）</a></li>
  </ol>
</section>
