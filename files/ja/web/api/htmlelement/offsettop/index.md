---
title: "HTMLElement: offsetTop プロパティ"
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetTop`** は読み取り専用プロパティで、現在の要素の外枠から、*最も近い位置にある*祖先要素である {{domxref("HTMLelement.offsetParent", "offsetParent")}} の上枠の内側までの距離を相対的に返します。

## 値

数値です。

## 例

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // 要素が offsetParent から 11px 以上離れている場合の処理をここに記述
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
