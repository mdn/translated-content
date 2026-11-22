---
title: "ARIA: aria-rowindex 属性"
short-title: aria-rowindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-rowindex` 属性は、表、グリッド、またはツリーグリッドの行の合計数に対する要素の位置を定義します。

## 解説

行数が非常に多い表もあります。設計上の要件、パフォーマンスの向上、またはユーザー体験の向上のために、行の一部だけを読み込む場合があります。

行の一部だけを読み込む場合は、どの行が表示されているかをすべてのユーザーに知らせる必要があります。`aria-rowindex` 属性は、表、グリッド、またはツリーグリッドの行の合計数に対するセルまたは行のインデックス、つまり位置を定義するために使用します。

{{HTMLElement('tr')}} 要素、または [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) ロールを持つ要素に指定します。また、{{HTMLElement('td')}}、{{HTMLElement('th')}}、または [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) か [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) ロールを持つ要素に直接指定することもできます。値は、表全体におけるその行の位置です。

`aria-rowindex` の値は `1` 以上の整数で、前にある行の `aria-rowindex` の値より大きく、表全体の行数以下でなければなりません。

すべての行が読み込まれ、DOM に存在する場合は、ブラウザーが各行のインデックスを自動的に計算するため、`aria-rowindex` を含める必要はありません。ただし、DOM に行の一部だけが存在する場合は、表全体における各行の位置を示すために `aria-rowindex` が必要です。行の一部だけを読み込む場合は、合計行数が分からなくても、祖先の表に [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) も含める必要があります。

行の一部だけを含む表に複数行にまたがるセルがある場合、行とセルの両方に `aria-rowindex` を設定する必要があります。セルが複数行にまたがる場合、つまり、セルロールに `aria-rowspan` 属性が含まれるか、HTML のセルで `rowspan` 属性に `1` より大きい値が設定されている場合は、適切な行またがり属性に加えて、またがるセルにも行の `aria-rowindex` の値を含めてください。この値は、またがりが始まる行のインデックスにしてください。

> [!NOTE]
> `aria-rowindex` は各行に追加する必要がありますが、セルへの指定は任意です。ただし、複数行にまたがるセルでは例外で、すべての該当セルに `aria-rowindex` 属性が必要です。

## 値

- `<integer>`
  - : `1` 以上の整数で、前の行がある場合はその `aria-rowindex` より大きく、[`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) の値以下。

## 関連するインターフェイス

- {{domxref("Element.ariaRowIndex")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaRowIndex`](/ja/docs/Web/API/Element/ariaRowIndex) プロパティは、`aria-rowindex` 属性の値を反映します。
- {{domxref("ElementInternals.ariaRowIndex")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaRowIndex`](/ja/docs/Web/API/ElementInternals/ariaRowIndex) プロパティは、`aria-rowindex` 属性の値を反映します。

## 関連するロール

次のロールで使用されます。

- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

次のロールに継承されます。

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## 例

次の例は 24 行あるグリッドで、1 行目と 7 行目から 10 行目までをユーザーに表示しています。最後の "Position" セルは 9 行目から 10 行目までにまたがっています。

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
      <span role="gridcell" aria-rowspan="2" aria-rowindex="9">Goalkeeper</span>
    </div>
    <div role="row" aria-rowindex="10">
      <span role="gridcell">Alyssa</span>
      <span role="gridcell">Naeher</span>
    </div>
  </div>
</div>
```

2 行にまたがる "Goalkeeper" セルには、`aria-rowspan` と `aria-rowindex` の両方があることに注目してください。

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-rowindextext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- {{HTMLElement('td')}} の [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/td#rowspan) 属性
