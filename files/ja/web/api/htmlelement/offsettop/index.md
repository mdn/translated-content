---
title: "HTMLElement: offsetTop プロパティ"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

**`offsetTop`** は {{domxref("HTMLElement")}} インターフェイスの読み取り専用プロパティで、現在の要素の外枠（マージンを含む）から、最も近い位置指定祖先要素である {{domxref("HTMLelement.offsetParent","offsetParent")}} のパディング上辺までの距離を返します。

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

## 関連情報

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientTop")}}
- {{domxref("Element.scrollTop")}}
- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("Element.getBoundingClientRect()")}}
