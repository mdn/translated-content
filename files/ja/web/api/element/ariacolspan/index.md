---
title: "Element: ariaColSpan プロパティ"
short-title: ariaColSpan
slug: Web/API/Element/ariaColSpan
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaColSpan`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) 属性の値を反映し、表、グリッド、ツリーグリッドの中にあるセル、グリッドセルがまたがる列の数を定義します。

## 値

整数の入った文字列です。

## 例

この例では、`spanning-heading` という ID を持つ要素の `aria-colspan` 属性は "2" に設定されています。`ariaColSpan` を使用して、値を "3" に更新します。

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</td>
  </tr>
  <tr>
    <td colspan="2" aria-colspan="2" id="spanning-column">Spanning</td>
    <td>One</td>
  </tr>
</table>
```

```js
let el = document.getElementById("spanning-column");
console.log(el.ariaColSpan);
el.ariaColSpan = "3";
console.log(el.ariaColSpan);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
