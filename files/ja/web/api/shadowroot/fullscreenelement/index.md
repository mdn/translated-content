---
title: "ShadowRoot: fullscreenElement プロパティ"
short-title: fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef("Shadow DOM")}}

**`fullscreenElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、現在全画面モードで表示されているシャドウツリー内の要素を返します。

## 値

現在全画面モードで表示されている要素の {{domxref('Element')}}、または全画面モードの要素がなければ `null` を返します。

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
