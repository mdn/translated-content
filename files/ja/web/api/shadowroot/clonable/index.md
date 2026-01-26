---
title: "ShadowRoot: clonable プロパティ"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

**`clonable`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウルートが複製可能であれば `true` を返し、そうでなければ `false` を返します。

値が `true` の場合、{{domxref("Node.cloneNode()")}} または {{domxref("Document.importNode()")}} で複製されたシャドウホストにはシャドウルートのコピーが含まれます。

既定値は `false` です。
`true` に設定するには、{{domxref("Element.attachShadow()")}} メソッドの `clonable` オプションを使用するか、またはシャドウルートを宣言的に関連付ける使用される `<template>` 要素の [`shadowrootclonable`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) 属性を設定します。

## 値

シャドウルートが複製可能であれば `true`、そうでなければ `false` です。

## 例

```js
const host = document.createElement("div");
const shadowRoot = host.attachShadow({
  mode: "open",
  clonable: true,
});

shadowRoot.clonable;
// true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
