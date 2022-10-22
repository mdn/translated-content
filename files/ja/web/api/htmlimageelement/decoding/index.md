---
title: HTMLImageElement.decoding
slug: Web/API/HTMLImageElement/decoding
---

{{APIRef}}

**`decoding`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、ブラウザーが画像をどのようにデコードすべきかというヒントを表します。

## 値

デコードヒントを表す文字列です。使用可能な値は以下の通りです。

- **`sync`**: 画像を他のコンテンツと同期してデコードし、アトミックに表示します。
- **`async`**: 画像を非同期でデコードすることで、他のコンテンツ提示の遅延を減らすことができます。
- **`auto`**: 既定のモードで、デコードモードに対する優先順位がないことを示します。ブラウザーが最適なものを決定します。

## 使用上の注意

`decoding` プロパティは、ブラウザーが画像の読み込みを並列化させるかどうかを制御することができます。もし、そうすることで問題が発生する場合は、 `sync` を指定して、非同期読み込みを無効にすることができます。これは {{HTMLElement("img")}} 要素に適用すると便利ですが、画面外にある画像オブジェクトに使用するとより効果的でしょう。

## 例

```js
var img = new Image();
img.decoding = 'sync';
img.src = 'img/logo.png';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
