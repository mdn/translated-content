---
title: "ARIA: aria-rowcount 属性"
short-title: aria-rowcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-rowcount` 属性は、表、グリッド、ツリーグリッドの行の合計数を定義します。

## 解説

表によっては、数百、さらには数百万もの行があります。行数がそれほど多くない表でも、設計上の要件、パフォーマンスの向上、またはユーザー体験の向上のために、行の一部だけを読み込む場合があります。行の一部だけを読み込む場合は、データの一部だけが表示されていることをすべてのユーザーに知らせる必要があります。`aria-rowcount` 属性は、表、グリッド、またはツリーグリッドの行の合計数を定義するために使用します。

{{HTMLElement('table')}} 要素、または [`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) ロールを持つ要素に指定します。値は表全体の行数を表す整数です。行の合計数が分からない場合は `aria-rowcount="-1"` を指定します。これにより、ブラウザーに行の合計数を数えないよう伝えます。

すべての行が読み込まれ、DOM に存在する場合は、ブラウザーが行の合計数を自動的に数えるため、`aria-rowcount` を含める必要はありません。ただし、どの時点でもすべての行が DOM に存在するとは限らない場合は、表全体の行数が分かっているときにその数を示し、分からないときにブラウザーが行を自動的に数えないようにするため、この属性が必要です。

## 値

- `<integer>`
  - : 表全体の行数を表す整数、または表の行数が分からない場合は `-1`。

## 関連するインターフェイス

- {{domxref("Element.ariaRowCount")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaRowCount`](/ja/docs/Web/API/Element/ariaRowCount) プロパティは、`aria-rowcount` 属性の値を反映します。
- {{domxref("ElementInternals.ariaRowCount")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaRowCount`](/ja/docs/Web/API/ElementInternals/ariaRowCount) プロパティは、`aria-rowcount` 属性の値を反映します。

## 関連するロール

次のロールで使用されます。

- [`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

次のロールに継承されます。

- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)

## 例

次の例は 24 行あるグリッドで、1 行目と 7 行目から 9 行目までをユーザーに表示しています。

```html
<div role="grid" aria-rowcount="24">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Position</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="7">
      <span role="gridcell">Morgan</span>
      <span role="gridcell">Brian</span>
      <span role="gridcell">Midfielder</span>
    </div>
    <div role="row" aria-rowindex="8">
      <span role="gridcell">Abby</span>
      <span role="gridcell">Dahlkemper</span>
      <span role="gridcell">Defender</span>
    </div>
    <div role="row" aria-rowindex="9">
      <span role="gridcell">Ashlyn</span>
      <span role="gridcell">Harris</span>
      <span role="gridcell">Goalkeeper</span>
    </div>
  </div>
</div>
```

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
