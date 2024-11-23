---
title: "ShadowRoot: pictureInPictureElement プロパティ"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

**`pictureInPictureElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウツリー内で現在、ピクチャインピクチャモードで表示されている要素 ({{domxref("Element")}}) を返します。現在、ピクチャインピクチャモードが使用されていない場合は `null` を返します。

## 値

現在ピクチャインピクチャモードになっている {{domxref("Element")}} オブジェクトへの参照、またはピクチャインピクチャモードが現在シャドウツリーで使われていない場合は `null` が返されます。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.pictureInPictureElement")}}
