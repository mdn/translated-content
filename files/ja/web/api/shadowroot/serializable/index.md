---
title: "ShadowRoot: serializable プロパティ"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Shadow DOM")}}

**`serializable`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウルートがシリアライズ可能であれば、`true` を返します。

設定されている場合、このシャドウルートは、{{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} メソッドを `options.serializableShadowRoots` 引数に `true` を指定して呼び出すことでシリアライズできます。

シャドウルートの serializable プロパティは、シャドウルートが作成された際に指定されます。`<template>` 要素に [`shadowrootserializable`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootserializable) 属性を（許可された [`shadowrootmode`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootmode) 値とともに）追加することで宣言的に指定するか、[`options.serializable`](/ja/docs/Web/API/Element/attachShadow#serializable) 引数を `true` に設定して [`Element.attachShadow()`](/ja/docs/Web/API/Element/attachShadow) を使用します。

## 値

このシャドウルートがシリアライズ可能であれば `true`、そうでなければ `false`。

## 例

```js
const customElem = document.querySelector("my-shadow-dom-element");
const shadow = customElem.shadowRoot;

// …

// シリアライズ可能かどうか
const hostElem = shadow.serializable;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
