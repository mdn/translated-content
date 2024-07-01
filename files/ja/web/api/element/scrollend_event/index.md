---
title: "Element: scrollend イベント"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef}}

**`scrollend`** イベントは、要素のスクロールが完了した時に発行されます。
スクロールが完了したと見なされるのは、スクロール位置に保留中の更新値がなくなり、かつユーザーがジェスチャーを完了したときです。

スクロール位置の更新には、マウスホイールのスムーズなスクロールや瞬間的なスクロール、キーボードスクロール、スクロールスナップイベント、他にもスクロール位置を更新させるAPIや ジェスチャーなどがあります。
タッチパンやトラックパッドのスクロールなどのユーザージェスチャーは、ポインターまたはキーが離されるまで完了しません。
スクロール位置が変化しなかった場合、scrollend イベントは発行されません。

文書内のスクロールが完了した時を検出したい場合は、 {{domxref("Document/scrollend_event", "Document: scrollend イベント")}}を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### `scrollend` をイベントリスナーで使用

次の例では、`scrollend` イベントを使用して、ユーザーが要素の内部をスクロールしていることを検出する方法を示します。

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.innerHTML = "Scroll event fired, waiting for scrollend...";
});

element.addEventListener("scrollend", (event) => {
  output.innerHTML = "Scrollend event fired!";
});
```

{{EmbedLiveSample("Using_scrollend_with_an_event_listener", "100%", 130)}}

### `onscrollend` イベントハンドラープロパティの使用

次の例では、`onscrollend` イベントハンドラープロパティを使用して、ユーザーがスクロールしていることを検出する方法を示しています。

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.innerHTML = "Element scroll event fired, waiting for scrollend...";
};

element.onscrollend = (event) => {
  output.innerHTML = "Element scrollend event fired!";
};
```

{{EmbedLiveSample("Using_onscrollend_event_handler_property", "100%", 130)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Element の `scroll` イベント](/ja/docs/Web/API/Element/scroll_event)
- [Document の `scrollend` イベント](/ja/docs/Web/API/Document/scrollend_event)
- [Document の `scroll` イベント](/ja/docs/Web/API/Document/scroll_event)
