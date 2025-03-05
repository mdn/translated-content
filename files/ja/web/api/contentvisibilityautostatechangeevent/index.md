---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{APIRef("CSS Containment")}}

**`ContentVisibilityAutoStateChangeEvent`** インターフェイスは {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベントのイベントオブジェクトです。これは、{{cssxref("content-visibility", "content-visibility: auto")}}が設定されている要素で、[ユーザーに関連する](/ja/docs/Web/CSS/CSS_containment#relevant_to_the_user)、[コンテンツをスキップする](/ja/docs/Web/CSS/CSS_containment#skips_its_contents)ことを開始または停止するときに発行されます。

要素が関係ない間（開始イベントと終了イベントの間）、ユーザーエージェントはレイアウトと描画を含む要素のレンダリングをスキップします。
これにより、ページのレンダリング速度が大幅に向上します。
{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベントは、アプリのコードがレンダリング処理（例えば {{htmlelement("canvas")}} への描画）を不要なときに開始または停止する方法を提供し、処理能力を節約します。

非表示になっても要素のコンテンツは意味づけされたままなので（例えば支援技術のユーザーにとって）、このシグナルは重要な意味づけされた DOM の更新をスキップするために使用すべきではありません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}}
  - : 新しい `ContentVisibilityAutoStateChangeEvent` オブジェクトインスタンスを作成します。

## インスタンスプロパティ

_親である {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} {{ReadOnlyInline}}
  - : ユーザーエージェントが要素のレンダリングをスキップする場合は `true` を返し、そうでない場合は `false` を返します。

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

// キャンバスの更新を始める必要があるときに呼び出されます。
function startCanvasUpdates(canvas) {
  // …
}

// キャンバスの更新を停止する必要がある場合に呼び出されます。
function stopCanvasUpdates(canvas) {
  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベント
- [CSS 拘束](/ja/docs/Web/CSS/CSS_containment)
- {{cssxref("content-visibility")}} プロパティ
- {{cssxref("contain")}} プロパティ
