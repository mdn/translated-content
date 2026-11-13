---
title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
original_slug: Web/Accessibility/ARIA/Attributes/aria-colspan
l10n:
  sourceCommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{AccessibilitySidebar}}

`aria-colspan` 属性は、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) や [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、 [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) 内のセルまたはグリッドセルがまたがる列の数を定義します。

## 解説

{{HTMLElement('table')}} ネイティブ HTML に含まれていない [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) および [`gridcell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) を対象としており、`aria-colspan` 属性の値は、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) や [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、 [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) の各セルにまたがる列の数を定義します。

HTML では、{{HTMLElement('th')}} 要素と {{HTMLElement('td')}} 要素が [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#attributes) 属性を持っています。セマンティック {{HTMLElement('table')}} を使用する場合は、設計どおりにネイティブ属性である `colspan` 属性を使用してください。この ARIA 属性は、ネイティブの表に含まれていないセルとグリッドセルを対象としており、{{HTMLElement('table')}} 内のセルで使用された場合、無視されます。

> [!NOTE]
> ARIA の使用に関する第一のルールは、「要素を再利用して ARIA のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。可能な場合、セマンティックでない要素を ARIA のロールや属性と一緒に使う代わりに、`coslpan` 属性を使った {{HTMLElement('th')}} や {{HTMLElement('td')}} を含む {{HTMLElement('table')}} を用いてください。

`aria-colspan` の値は正の整数である必要があります。セル範囲の既定値または想定値は 1 です。含まれる値によって、セルまたはグリッドセルが同じ行の次のセルまたはグリッドセルと重ならないようにし、セルが含まれるテーブル、グリッド、またはツリーグリッドの外側にセルが広がることがないようにします。

## 例

以下は、ボウリングトーナメントリーグのスコアスプレッドシートの一部の例です。各ゲームは 10 フレームにまたがり、各フレームには 3 つのスコア (2 つのボールと現在の合計) が含まれます。各ゲームの 10 番目 (最後の) フレームは、誰かが全てストライクを取る場合に備えて 4 つの列にまたがります。

```html
<div role="grid" aria-rowcount="27" aria-label="Bowling League Scores">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspanとaria-colspanは、ヘッダーセルが複数の行や列にまたがるとき、正しいデータセルのヘッダー情報を支援技術に提供します。
          -->

      <span role="columnheader" aria-rowspan="2">Team</span>
      <span role="columnheader" aria-colspan="2">Player</span>
      <span role="columnheader" aria-colspan="31">Game 1 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 2 Frames</span>
      <span role="columnheader" aria-colspan="31">Game 3 Frames</span>
      <span role="columnheader" aria-rowspan="2">Total</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">Last Name</span>
      <span role="columnheader">First Name</span>
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

もし {{HTMLElement('table')}} とセマンティックなテーブル要素を使用していた場合、マークアップはより簡潔になり、デフォルトでアクセシブルになっていたでしょう。

## 値

- `<integer>`
  - : セルがまたがる列の数を定義する、既定値である 1 以上の整数。この値は、セルが同じ行の次のセルと重なる値よりも小さくする必要があります。

## 関連インターフェイス

- {{domxref("Element.ariaColSpan")}}
  - : 各要素のインターフェイスの一部である [`ariaColSpan`](/ja/docs/Web/API/Element/ariaColSpan) プロパティは、テーブル、グリッド、またはツリーグリッド内のセルまたはグリッドセルがまたがる列の数を定義する `ariaColSpan` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

継承先のロール:

- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('th')}} と {{HTMLElement('td')}} の [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#attributes) 属性
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 属性
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) 属性
- [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) ロール
- [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロール
- [`rowheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロール
