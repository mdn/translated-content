---
title: aria-sort
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-sort
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-sort` 属性は、表またはグリッド内の項目が昇順または降順のどちらで並べ替えられているかを示します。

## 解説

表またはグリッドが並べ替え機能を提供する場合、並べ替えられた列または行の見出しセル要素の `aria-sort` 属性に `ascending` または `descending`（または `other`）を設定する必要があります。

`aria-sort` 属性は、現在並び替えられている列または行にのみ設定されます。列または行のデータセルが昇順でソートされていることを示すためには `aria-sort="ascending"` を設定してください。並び替え順序が逆になっている場合は、値を `aria-sort="descending"` に切り替えてください。別の列または行が並び替えられると、単一の `aria-sort` 属性が、適切な並び替え順序を示す値で、新しく並び替えられた列または行の見出しセルに移動されます。

`aria-sort` 属性は、一度に表またはグリッドの 1 つの見出しにのみ追加する必要があります。この属性は支援技術のユーザーに、どの列または行が並べ替えられているかを通知するために設定されます。実際の並べ替え順序には影響しません。

## 例

この表は、姓の列が昇順で並べ替えられて読み込まれます。

```html
<table>
  <caption>
    Steering Committee Members
  </caption>
  <thead>
    <tr>
      <th>
        <button>First Name</button>
      </th>
      <th aria-sort="ascending">
        <button>Last Name</button>
      </th>
      <th>
        <button>Company</button>
      </th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

ユーザーが _Last Name_ ボタンをクリックすると、[`aria-pressed="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) が {{HTMLElement('button')}} 要素に追加され、 JavaScript によって `aria-sort` の値が `"descending"` に切り替わります。ユーザーが別の見出しボタンをクリックすると、`aria-sort` が _Last Name_ 見出しから削除され、クリックしたボタンの親の {{HTMLElement('th')}} に設定されます。

`th[aria-sort="ascending"]` および `th[aria-sort="descending"]` セレクターを対象にした CSS を使用して追加する下向き矢印が表示されない可能性がある支援技術のために、説明を提供しました。

## 値

- `ascending`
  - : 項目はこの列の昇順で並べ替えられます。
- `descending`
  - : 項目はこの列の降順で並べ替えられます。
- `none` (既定値)
  - : 列には定義された並べ替えが適用されていません。
- `other`
  - : 昇順または降順以外の並び替えアルゴリズムが適用されました。

## 関連インターフェイス

- {{domxref("Element.ariaSort")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaSort`](/ja/docs/Web/API/Element/ariaSort) プロパティは、`aria-sort` 属性の値を反映します。
- {{domxref("ElementInternals.ariaSort")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaSort`](/ja/docs/Web/API/ElementInternals/ariaSort) プロパティは、`aria-sort` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## 仕様書

{{Specifications}}

## 関連情報

- [Sortable table example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html) - W3C
- [`aria-pressed`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- {{HTMLElement('th')}} 要素
