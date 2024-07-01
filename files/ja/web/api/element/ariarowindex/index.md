---
title: "Element: ariaRowIndex プロパティ"
short-title: ariaRowIndex
slug: Web/API/Element/ariaRowIndex
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaRowIndex`** は {{domxref("Element")}} インターフェイスのプロパティで、表やグリッドやツリーグリッド内の行の総数に対する要素の行インデックスや位置を定義する [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) 属性の値を反映します。

## 値

整数の入った文字列です。

## 例

この例では、ID が `role-heading` の要素の `aria-rowindex` 属性は "1" に設定されています。`ariaRowIndex` を使用して、値を "2" に更新します。

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
      <th
        role="columnheader"
        id="role-heading"
        aria-sort="none"
        aria-rowindex="1">
        ARIA Role
      </th>
      <th
        role="columnheader"
        id="element-heading"
        aria-sort="none"
        aria-rowindex="1">
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
let el = document.getElementById("role-heading");
console.log(el.ariaRowIndex); // 1
el.ariaRowIndex = "2";
console.log(el.ariaRowIndex); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
