---
title: aria-colindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
original_slug: Web/Accessibility/ARIA/Attributes/aria-colindex
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`aria-colindex` 属性は `table`、`grid`、`treegrid` 内の全列数に対する要素の列インデックスまたは位置を定義します。

## 解説

表によってはとても大きく、コンテンツの一部しか表示されないものもあります。列の一部だけを読み込むことでユーザー使い勝手を向上させることができますが、コンテンツのどの部分が表示されているのか、また表のコンテンツがすべて存在するわけではないことをすべてのユーザーに知らせる必要があります。

ARIA は `table`, `grid`, `treegrid` 構造に関する情報を提供するためにいくつかの属性を指定されました。 `aria-colindex` 属性は、そのような構造内の部分構造、要素の列インデックス、または列の総数に対する位置を定義します。

[`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性と併用することで、 `aria-colindex` は、表の列がすべて表示された場合に、その列がいくつあるかを支援技術に通知します。

すべての列が DOM に存在している場合、ユーザーエージェントは各セルまたはグリッドセルの列インデックスを計算することができるため、 `aria-colindex` を記載する必要はありません。しかし、いずれかの列がいずれかの時点で DOM から抜けている場合は、`aria-colindex` を使用して、表の全列に対する各セルまたはグリッドセルの列を示します。

`aria-colindex` の値は 1 以上の整数です。それぞれの値は前回の `aria-colindex` より大きく、表の列数以下の値でなければなりません。

セルまたはグリッドセルが複数の列にまたがっている場合、 {{htmlelement('td')}} と {{htmlelement('th')}} を使用していない場合は、 [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) にその列の数を設定します。また、 `aria-colindex` にはまたがる範囲の始まりの値を設定します。最初の列のみにまたがる幅が 1 列であった場合の値を示します。

DOM に存在する一連の列が連続しており、複数の行や列にまたがるセルが存在しない場合、 `aria-colindex` を各行の 1 行目に設定するだけでよくなります。列が連続していない場合は、各行の子要素または自分自身で所有する要素すべてに `aria-colindex` の値を記載します。

次の例は 6 列のグリッドを表示させており、そのうち 1、2、5、6 列目がユーザーに表示されます。表を構成する列の総数は表自体で `aria-colcount="6"` として設定します。列は連続していないので、すべての [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) - この場合、[`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) と [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)要素 - には `aria-colindex` 属性が設定されています。

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">First name</div>
      <div role="columnheader" aria-colindex="2">Last name</div>
      <div role="columnheader" aria-colindex="5">City</div>
      <div role="columnheader" aria-colindex="6">Zip</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

ARIA 使用の最初のルールは、「要素を再利用し、それをアクセシビリティにするために ARIA ロール、状態、プロパティを**追加**する代わりに、要求される意味づけと動作がすでに組み込まれたネイティブ機能を使用することができるのであれば、そうすること」です。 {{HTMLElement('table')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} などでネイティブの HTML の意味づけを採用し、列のサブセクションのみを表示する場合、 `aria-colcount` 属性と `aria-colindex` 属性はまだ必要ですが、マークアップはそれほど冗長ではありません。

意味づけされた表のヘッダー要素を使用していて、すべての列が DOM にない場合、`aria-colindex` 属性は列ヘッダー {{HTMLElement('th')}} の列ごとに一度だけ定義する必要があります。

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">First name</th>
      <th aria-colindex="2" scope="col">Last name</th>
      <th aria-colindex="5" scope="col">City</th>
      <th aria-colindex="6" scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>New York</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

すべての列が DOM 内にある場合は、`aria-colcount` も `aria-colindex` も必要ありません。

## 値

- `<integer>`
  - : すべて表示する場合の、 1 以上、列の総数以下の整数。

## 関連インターフェイス

- {{domxref("Element.ariaColIndex")}}
  - : [`ariaColIndex`](/ja/docs/Web/API/Element/ariaColIndex) プロパティは {{domxref("Element")}} インターフェイスの一部で、 `aria-colindex` 属性の値を反映します。
- {{domxref("ElementInternals.ariaColIndex")}}
  - : [`ariaColIndex`](/ja/docs/Web/API/ElementInternals/ariaColIndex) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、 `aria-colindex` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-colindextext`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) 属性
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性
- [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) 属性
- HTML {{HTMLElement('table')}} 要素
- HTML {{HTMLElement('th')}} 要素
- HTML {{HTMLElement('td')}} 要素

<section id="Quick_links">
<strong><a href="/ja/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA 状態とプロパティ</a></strong>
{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}
</section>
