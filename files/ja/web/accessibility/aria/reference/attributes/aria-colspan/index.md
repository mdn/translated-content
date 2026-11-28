---
title: "ARIA: aria-colspan 属性"
short-title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-colspan` 属性は、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) や [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、 [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) 内のセルまたはグリッドセルがまたがる列の数を定義します。

## 解説

ネイティブ HTML の {{HTMLElement('table')}} に含まれていない [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) および [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) を対象としており、`aria-colspan` 属性の値は、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) や [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、 [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) 内の個々のセルがまたがる列の数を定義します。

HTML では、{{HTMLElement('th')}} 要素と {{HTMLElement('td')}} 要素が [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#attributes) 属性を持っています。意味づけされた {{HTMLElement('table')}} を使用する場合は、設計どおりにネイティブ属性である `colspan` 属性を使用してください。この ARIA 属性は、ネイティブの表に含まれていないセルとグリッドセルを対象としており、{{HTMLElement('table')}} 内のセルで使用された場合は無視されます。

> [!NOTE]
> ARIA を使用する際の第一のルールは、必要な意味や動作がすでに組み込まれているネイティブ機能を使用できる場合は、要素を再利用して ARIA のロール、状態、プロパティを**追加して**アクセシブルにするのではなく、その機能を使うことです。可能な場合は、意味づけのない要素に ARIA のロールや属性を指定する代わりに、`colspan` 属性を持つ {{HTMLElement('th')}} や {{HTMLElement('td')}} を含む HTML の {{HTMLElement('table')}} 要素を使用してください。

`aria-colspan` の値は正の整数である必要があります。セルがまたがる列数のデフォルト値または想定値は 1 です。指定する値によって、セルまたはグリッドセルが同じ行の次のセルまたはグリッドセルと重ならないようにし、包含する表、グリッド、またはツリーグリッドの外側にセルが広がることがないようにしてください。

## 値

- `<integer>`
  - : セルがまたがる列数を定義する、デフォルト値の 1 以上の整数です。この値は、セルが同じ行の次のセルと重ならない範囲にしてください。

## 関連インターフェイス

- {{domxref("Element.ariaColSpan")}}
  - : 各要素のインターフェイスの一部である [`ariaColSpan`](/ja/docs/Web/API/Element/ariaColSpan) プロパティは、表、グリッド、またはツリーグリッド内のセルまたはグリッドセルがまたがる列数を定義する `aria-colspan` 属性の値を反映します。

## 関連付けられたロール

次のロールで使用されます。

- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

次のロールに継承されます。

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## 例

以下は、ボウリングトーナメントリーグのスコアスプレッドシートの一部の例です。各ゲームは 10 フレームにまたがり、各フレームには 3 つのスコア (2 つのボールと現在の合計) が含まれます。各ゲームの 10 番目 (最後の) フレームは、誰かが全てストライクを取る場合に備えて 4 つの列にまたがります。

```html
<div role="grid" aria-rowcount="27" aria-label="ボウリングリーグのスコア">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan と aria-colspan は、ヘッダーセルが複数の行や列にまたがるとき、正しいデータセルのヘッダー情報を支援技術に提供します。
          -->

      <span role="columnheader" aria-rowspan="2">チーム</span>
      <span role="columnheader" aria-colspan="2">選手</span>
      <span role="columnheader" aria-colspan="31">第 1 ゲームのフレーム</span>
      <span role="columnheader" aria-colspan="31">第 2 ゲームのフレーム</span>
      <span role="columnheader" aria-colspan="31">第 3 ゲームのフレーム</span>
      <span role="columnheader" aria-rowspan="2">合計</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">姓</span>
      <span role="columnheader">名</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">The Mighty Quokkas</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

もし {{HTMLElement('table')}} と意味づけされた表要素を使用していた場合、マークアップはより簡潔になり、デフォルトでアクセシブルになっていたでしょう。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('th')}} と {{HTMLElement('td')}} の [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#attributes) 属性
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 属性
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) 属性
- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) ロール
- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロール
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) ロール
