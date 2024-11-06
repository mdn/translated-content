---
title: "ShadowRoot: fullscreenElement プロパティ"
short-title: fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

**`fullscreenElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、現在全画面モードで表示されているシャドウツリー内の要素を返します。

## 値

現在全画面モードで表示されている {{domxref('Element')}}、または全画面モードの要素がなければ `null` を返します。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.fullscreenElement")}}
