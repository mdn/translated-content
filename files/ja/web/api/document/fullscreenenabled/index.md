---
title: Document.fullscreenEnabled
slug: Web/API/Document/fullscreenEnabled
---

{{APIRef("Fullscreen API")}}

{{domxref("Document")}} インターフェイスの **`fullscreenEnabled`** プロパティは読み取り専用で、全画面モードが使用できるかを示します。全画面モードは文書内にウィンドウ化されたプラグインを含まないページ、および文書内のすべての {{HTMLElement("iframe")}} 要素が [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性を持つページに限り使用することができます。

このプロパティは読み取り専用ですが、変更されても (strict モードでも) 例外を投げません。セッターは何もしないので、無視されます。

## 構文

```
var isFullscreenAvailable = document.fullscreenEnabled;
```

### 値

{{domxref("Boolean")}} 値であり、文書や要素が {{domxref("Element.requestFullscreen()")}} を呼び出すことで全画面モードに移行できるのであれば `true` です。全画面モードが利用できないのであれば、値は `false` になります。

## 例

この例では、 {{htmlElement("video")}} 要素に全画面モードへの移行を試みる前に `fullscreenEnabled` の値をチェックし、利用できない場合には移行を試みないようにします。

```js
function requestFullScreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullScreen();
  } else {
    console.log("現在ブラウザーは全画面モードを使用することができません");
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenElement")}}
- {{cssxref(":fullscreen")}} および {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} 要素の [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性
