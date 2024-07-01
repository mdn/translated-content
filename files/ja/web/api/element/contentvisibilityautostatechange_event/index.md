---
title: "Element: contentvisibilityautostatechange イベント"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`contentvisibilityautostatechange`** イベントは、{{cssxref("content-visibility", "content-visibility: auto")}} が設定されている要素に対して、[ユーザーとの関連](/ja/docs/Web/CSS/CSS_containment#ユーザーとの関連)、[コンテンツをスキップ](/ja/docs/Web/CSS/CSS_containment#コンテンツのスキップ)を開始または停止するときに発行されます。

要素が関係ない間（開始イベントと終了イベントの間）、ユーザーエージェントはレイアウトや描画を含む要素の描画をスキップし、ページの描画速度を大幅に向上させることができます。
{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベントは、アプリのコードがレンダリング処理（例えば {{htmlelement("canvas")}} への描画）を不要なときに開始または停止する方法を提供します。

非表示になっても要素のコンテンツは意味づけされたままなので（例えば支援技術ユーザーにとって）、この指示は重要な意味づけされた DOM の更新をスキップするために使用すべきではありません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
oncontentvisibilityautostatechange = (event) => {};
```

> **メモ:** イベントオブジェクトの型は {{domxref("ContentVisibilityAutoStateChangeEvent")}} です。

## 例

```js
const canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("contentvisibilityautostatechange", stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) {
  // …
}

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) {
  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
- [CSS Containment](/ja/docs/Web/CSS/CSS_containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
