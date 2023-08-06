---
title: "Element: ariaPosInSet プロパティ"
short-title: ariaPosInSet
slug: Web/API/Element/ariaPosInSet
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaPosInSet`** は {{domxref("Element")}} インターフェイスのプロパティで、現在のリストアイテムまたはツリーアイテムの集合における要素の番号または位置を定義する [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、IDが `article2` の要素の `aria-posinset` 属性は "2" に設定されています。`ariaPosInSet` を使用して、値を "3" に更新します。

```html
<article id="article1" aria-posinset="1">…</article>
<article id="article2" aria-posinset="2">…</article>
```

```js
let el = document.getElementById("article2");
console.log(el.ariaPosInSet); // "2"
el.ariaPosInSet = "3";
console.log(el.ariaPosInSet); // "3"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
