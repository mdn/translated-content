---
title: "Element: scroll イベント"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

**`scroll`** イベントは、要素がスクロールしたときに発行されます。
スクロールの終了を検出するには、 {{domxref("Element/scrollend_event", "Element: scrollend イベント")}}を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例では、`scroll` イベントをイベントリスナーと `onscroll` イベントハンドラープロパティによって使用する方法を示しています。
`scroll` イベントは高頻度で発行されるため、{{DOMxRef("setTimeout()")}} メソッドを使用してイベントハンドラをスロットルで制御しています。
その他の {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame")}} を使用した例については、{{domxref("Document/scroll_event", "Document: scroll イベント")}}ページを参照してください。

### `scroll` をイベントリスナーで使用

次の例では、`scroll` イベントを使用して、ユーザーが要素の内部をスクロールしていることを検出する方法を示します。

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p style="text-align: center;" id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired!";
  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
});
```

{{EmbedLiveSample("Using_scroll_with_an_event_listener", "100%", 120)}}

### `onscroll` イベントハンドラープロパティの使用

次の例では、`onscroll` イベントハンドラープロパティを使用して、ユーザーがスクロールしていることを検出する方法を示しています。

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p id="output" style="text-align: center;">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.innerHTML = "Element scroll event fired!";
  setTimeout(() => {
    output.innerHTML = "Waiting on scroll events...";
  }, 1000);
};
```

{{EmbedLiveSample("Using_onscroll_event_handler_property", "100%", 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Element の `scrollend` イベント](/ja/docs/Web/API/Element/scrollend_event)
- [Document の `scroll` イベント](/ja/docs/Web/API/Document/scroll_event)
- [Document の `scrollend` イベント](/ja/docs/Web/API/Document/scrollend_event)
