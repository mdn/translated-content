---
title: "Document: fullscreenEnabled プロパティ"
short-title: fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Fullscreen API")}}

**`fullscreenEnabled`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、全画面モードが使用できるかどうかを示します。

全画面モードは、文書内にウィンドウ化されたプラグインを含まないページ、および文書内のすべての {{HTMLElement("iframe")}} 要素が [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性を持つページに限り使用することができます。

このプロパティは読み取り専用ですが、変更されても（厳格モードでも）例外を発生させません。セッターは何もしないので、無視されます。

## 値

論理値であり、文書や要素が {{domxref("Element.requestFullscreen()")}} を呼び出すことで全画面モードに移行できるのであれば `true` です。全画面モードが利用できないのであれば、値は `false` になります。

## 例

この例では、 {{htmlElement("video")}} 要素に全画面モードへの移行を試みる前に `fullscreenEnabled` の値をチェックし、利用できない場合には移行を試みないようにします。

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log("このブラウザーは全画面モードを使用することができません");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenElement")}}
- {{cssxref(":fullscreen")}} および {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} 要素の [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性
