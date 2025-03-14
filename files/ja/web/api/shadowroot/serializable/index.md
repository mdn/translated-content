---
title: "ShadowRoot: serializable プロパティ"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Shadow DOM")}}

**`serializable`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウルートがシリアライズ可能であれば、`true` を返します。

設定されている場合、このシャドウルートは、{{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} メソッドを `options.serializableShadowRoots` 引数に `true` を指定して呼び出すことでシリアライズできます。

シャドウルートの serializable プロパティは、シャドウルートが作成された際に指定されます。`<template>` 要素に [`shadowrootserializable`](/ja/docs/Web/HTML/Element/template#shadowrootserializable) 属性を（許可された [`shadowrootmode`](/ja/docs/Web/HTML/Element/template#shadowrootmode) 値とともに）追加することで宣言的に指定するか、[`options.serializable`](/ja/docs/Web/API/Element/attachShadow#serializable) 引数を `true` に設定して [`Element.attachShadow()`](/ja/docs/Web/API/Element/attachShadow) を使用します。

## 値

このシャドウルートがシリアライズ可能であれば `true`、そうでなければ `false`。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// シリアライズ可能かどうか
let hostElem = shadow.serializable;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
