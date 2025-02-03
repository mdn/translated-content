---
title: "Element: scroll イベント"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef}}

**`scroll`** イベントは、要素がスクロールしたときに発行されます。
スクロールの終了を検出するには、 `Element` の {{domxref("Element/scrollend_event", "scrollend")}} イベントを参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下の例では、 `scroll` イベントをイベントリスナーと `onscroll` イベントハンドラープロパティによって使用する方法を示しています。
`scroll` イベントは高頻度で発行されるため、 {{DOMxRef("Window.setTimeout", "setTimeout()")}} メソッドを使用してイベントハンドラーを{{glossary("throttle","スロットル")}}で制御しています。
その他の {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame")}} を使用した例については、 `Document` の {{domxref("Document/scroll_event", "scroll")}} イベントページを参照してください。

### `scroll` をイベントリスナーで使用

次の例では、`scroll` イベントを使用して、ユーザーが要素の内部をスクロールしていることを検出する方法を示します。

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">スクロールしてね</p>
</div>
<p style="text-align: center;" id="output">scroll イベントを待っています...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "scroll イベントが発生しました！";
  setTimeout(() => {
    output.textContent = "scroll イベントを待っています...";
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
  <p style="height: 200px; width: 200px;">スクロールしてね</p>
</div>
<p id="output" style="text-align: center;">scroll イベントを待っています...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "scroll イベントが発生しました！";
  setTimeout(() => {
    output.textContent = "scroll イベントを待っています...";
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
