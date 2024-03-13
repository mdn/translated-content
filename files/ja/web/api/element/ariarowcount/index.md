---
title: "Element: ariaRowCount プロパティ"
short-title: ariaRowCount
slug: Web/API/Element/ariaRowCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaRowCount`** は {{domxref("Element")}} インターフェイスのプロパティで、表、グリッド、ツリーグリッドの行の総数を定義する [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、ID が `semantic-table` の要素の `aria-rowcount` 属性は、現在表示されている行ではなく、表の行の総数を表します。`ariaRowCount` を使用して、値を "101" に更新します。

```html
<table
  id="semantic-table"
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100">
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
console.log(el.ariaRowCount); // 100
el.ariaRowCount = "101";
console.log(el.ariaRowCount); // 101
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
