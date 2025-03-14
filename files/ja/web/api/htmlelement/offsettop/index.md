---
title: "HTMLElement: offsetTop プロパティ"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: 352f16613106ce1b1980e3f3da37cf153db553ea
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetTop`** は読み取り専用プロパティで、現在の要素の外枠（そのマージンを含む）から、最も近い位置指定祖先要素である {{domxref("HTMLelement.offsetParent","offsetParent")}} のパディング上辺までの距離を返します。

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
