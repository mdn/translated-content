---
title: "Element: ariaColCount プロパティ"
short-title: ariaColCount
slug: Web/API/Element/ariaColCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaColCount`** は {{domxref("Element")}} インターフェイスのプロパティで、テーブル、グリッド、ツリーグリッドの列数を定義する [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) 属性の値を反映します。

## 値

文字列です。

## 例

この例では、`semantic-table` という ID を持つ要素の `aria-colcount` 属性は "2" に設定されています。`ariaColCount` を使用して値を "3" に更新します。

```html
<table
  id="semantic-table"
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100"
  aria-colcount="2">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA Role</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
        Semantic Element
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("semantic-table");
console.log(el.ariaColCount); // 2
el.ariaColCount = "3";
console.log(el.ariaColCount); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
