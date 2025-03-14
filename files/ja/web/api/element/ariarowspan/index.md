---
title: "Element: ariaRowSpan プロパティ"
short-title: ariaRowSpan
slug: Web/API/Element/ariaRowSpan
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaRowSpan`** は {{domxref("Element")}} インターフェイスのプロパティで、表、グリッド、ツリーグリッド内のセルやグリッドセルにまたがる行数を定義する [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、`spanning-heading` という ID を持つ要素の `aria-rowspan` 属性は "3" に設定されています。`ariaRowSpan` を使用して、値を "2" に更新します。

```html
<table>
  <tr>
    <th id="spanning-heading" rowspan="3" aria-rowspan="3">Spanning heading</th>
    <th>Heading</th>
  </tr>
  <tr>
    <td>One</td>
  </tr>
  <tr>
    <td>Two</td>
  </tr>
</table>
```

```js
let el = document.getElementById("spanning-heading");
console.log(el.ariaRowSpan);
el.ariaRowSpan = "2";
console.log(el.ariaRowSpan);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
