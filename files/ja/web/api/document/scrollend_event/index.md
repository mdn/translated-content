---
title: "Document: scrollend イベント"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef}}

**`scrollend`** イベントは、文書のビューのスクロールが完了した時に発生します。
スクロールが完了したと見なされるのは、スクロール位置に保留中の更新値がなくなり、かつユーザーがジェスチャーを完了したときです。

スクロール位置の更新には、マウスホイールのスムーズなスクロールや瞬間的なスクロール、キーボードスクロール、スクロールスナップイベント、他にもスクロール位置を更新させるAPIや ジェスチャーなどがあります。
タッチパンやトラックパッドのスクロールなどのユーザージェスチャーは、ポインターまたはキーが離されるまで完了しません。
スクロール位置が変化しなかった場合、scrollend イベントは発行されません。

要素内のスクロールが完了したときを検出する場合は、 {{domxref("Element/scrollend_event", "Element: scrollend イベント")}}を参照してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### 文書の `scrollend` をイベントリスナーで使用

以下の例では、イベントリスナーを使用して `scrollend` イベントを使用し、ユーザーが文書のスクロールを停止したときを検出する方法を示しています。
この例では、埋め込まれている iframe 内に iframe 自身よりも縦長で横長のコンテンツがあり、iframe 内で両方向にスクロールすることが可能です。
ユーザーがスクロールを止めると、`scrollend` イベントが発行されます。

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const output = document.querySelector("p#output");

document.addEventListener("scroll", (event) => {
  output.innerHTML = `Document scroll event fired!`;
});

document.addEventListener("scrollend", (event) => {
  output.innerHTML = `Document scrollend event fired!`;
});
```

{{EmbedLiveSample("Using_document_scrollend_with_an_event_listener", "100%", 200)}}

### `onscrollend` イベントハンドラープロパティの使用

以下の例では、`scrollend` イベントハンドラープロパティを使用して、ユーザーが文書のスクロールを停止したときを検出する方法を示しています。
この例では、埋め込まれている iframe 内に iframe 自身よりも縦長で横長のコンテンツがあるため、iframe 内で両方の方向にスクロールすることが可能です。
これは最初の例を基に作成したものですが、イベントリスナーの代わりに `document.onscrollend` を使用しています。

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
document.onscroll = (event) => {
  output.innerHTML = "Document scroll event fired!";
};

document.onscrollend = (event) => {
  output.innerHTML = "Document scrollend event fired!";
};
```

{{EmbedLiveSample("Using_scrollend_with_an_event_handler_property", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Document の `scroll` イベント](/ja/docs/Web/API/Document/scroll_event)
- [Element の `scrollend` イベント](/ja/docs/Web/API/Element/scrollend_event)
- [Element の `scroll` イベント](/ja/docs/Web/API/Element/scroll_event)
