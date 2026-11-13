---
title: "ShadowRoot: pictureInPictureElement プロパティ"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{APIRef("Shadow DOM")}}

**`pictureInPictureElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウツリー内で現在、ピクチャインピクチャモードで表示されている要素 ({{domxref("Element")}}) を返します。現在、ピクチャインピクチャモードが使用されていない場合は `null` を返します。

## 値

現在ピクチャインピクチャモードになっている {{domxref("Element")}} オブジェクトへの参照です。

ピクチャインピクチャモードにおいて、シャドウツリーに関連付けられた要素がない場合は、`null` を返します。例えば、ピクチャインピクチャ要素が存在しない場合や、その要素がシャドウツリーに含まれていない場合などが該当します。

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
