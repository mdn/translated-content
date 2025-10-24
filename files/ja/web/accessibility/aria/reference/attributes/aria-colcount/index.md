---
title: aria-colcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colcount
original_slug: Web/Accessibility/ARIA/Attributes/aria-colcount
l10n:
  sourceCommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{AccessibilitySidebar}}

`aria-colcount` 属性は、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) や [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) において [DOM](/ja/docs/Glossary/DOM) に全ての列が表示されていない場合に、列の総数を定義します。

## 解説

非常に大きい表の場合、すべての列をユーザーに表示できないことがあります。または、表示は可能ですが、そのように幅の広い表ではユーザー体験が悪くなることがあります。`aria-colcount` 属性を使用して、全ての列が表示されている場合に表に何列あるかを支援技術に知らせます。値は、表全体を構成する列の数を表す整数です。表に含まれる列の合計数が分からないが、全ては DOM に含まれないことがわかっている場合は、-1 を使用し、`aria-colcount="-1"` と指定します。この値は、DOM に存在する現在の列数が、表内の実際の列数ではない可能性があることをユーザーエージェントに伝えます。

表内の全ての列が DOM に存在する場合、ブラウザーは列の合計数を自動的に計算するため、`aria-colcount` 属性は必要ありません。ただし、特定の時点で列の一部だけが DOM に存在する場合は、この属性が役立ち、必要になります。

`aria-colcount` を列数が分かっている場合に使用するときは、各列に [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) を用いてラベルを付けることも忘れないでください。また、列が連続している場合（中断のない元の順序の列のグループである場合）は、各行にラベルを付けるようにしてください。

次の例は、6 列のグリッドを示しています。そのうち 1、2、5、6 列目がユーザーに表示されています。表を構成する列の合計数は、`aria-colcount="6"` として表自体に設定されています。列は連続していないため、すべての [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) （この場合は [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) および [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) の要素）に `aria-colindex` 属性が設定されています。

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

ARIA の使用に関する第一のルールは、「要素を再利用して ARIA のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。{{HTMLElement('table')}}、 {{HTMLElement('th')}}、 {{HTMLElement('td')}} などのネイティブ HTML セマンティクスを利用する場合、`aria-colcount` 属性は依然として必要ですが、マークアップはそれほど冗長ではありません。セマンティック表ヘッダー要素を使用し、すべての列が DOM 内に存在しているわけではない場合、 `aria-colcount` は依然として使用する必要がありますが、`aria-colindex` 属性は表の列見出し {{HTMLElement('th')}} の列ごとに 1 回だけ定義する必要があります。

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

## 値

- `<integer>`
  - : 完全な表の列数

## 関連付けられたロール

使用するロール:

- [`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

継承先のロール:

- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
