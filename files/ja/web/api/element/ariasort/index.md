---
title: "Element: ariaSort プロパティ"
short-title: ariaSort
slug: Web/API/Element/ariaSort
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaSort`** は {{domxref("Element")}} インターフェイスのプロパティで、表やグリッド内の項目が昇順か降順かを示す [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-sort) 属性の値を反映します。

## 値

以下のいずれかの値を持つ文字列です。

- `"ascending"`
  - : 項目はこの列で昇順に整列されています。
- `"descending"`
  - : 項目はこの列で降順に整列されています。
- `"none"`
  - : この列で定義された並べ替えはありません。
- `"other"`
  - : 昇順または降順以外のソートアルゴリズムが適用されました。

## 例

この例では、ID が `role-heading` の要素の `aria-sort` 属性は "none" に設定されています。`ariaSort` を使用して、値を "ascending" に更新します。

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
        aria-rowindex="1"
        aria-colindex="1">
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
console.log(el.ariaSort); // none
el.ariaSort = "ascending";
console.log(el.ariaSort); // ascending
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: table ロール](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
