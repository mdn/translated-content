---
title: "ShadowRoot: activeElement プロパティ"
short-title: activeElement
slug: Web/API/ShadowRoot/activeElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

**`activeElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウツリー内でフォーカスを持っている要素を返します。

## 値

現在フォーカスを持っている {{domxref('Element')}}、またはフォーカスを持っている要素がなければ `null` です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let focusedElem = shadow.activeElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.activeElement")}}
