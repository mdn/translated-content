---
title: "ARIA: rowheader ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`role="rowheader"` を持つ要素は、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[`table`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)、または [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) の表形式構造内で、[row](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) の見出し情報を含む [cell](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) です。

## 説明

`rowheader` は行の見出し [`cell`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) で、同じ [`row`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 内の他のセルとの関係を確立します。

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">World Populations by Country</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Country</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="rowheader">Finland</span>
      <span role="cell">5.5 million</span>
    </div>
    <div role="row">
      <span role="rowheader">France</span>
      <span role="cell">67 million</span>
    </div>
  </div>
</div>
```

これは、`row` のスコープを持つ {{HTMLElement('th')}} 要素である `<th scope="row">` と構造的に同等です。ネイティブの {{HTMLElement('th')}} HTML 要素の使用を強く推奨します。

ARIA 行見出しを作成するには、要素に `role="rowheader"` を追加します。その行見出しは `row` 内にネストされ、さらに `rowgroup` 内にネストされるか、`grid`、`table`、または `treegrid` 内に直接ネストされる必要があります。

> [!NOTE]
> 可能な限り、ネイティブの [表要素](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) を使用することを強く推奨します。

### 関連する WAI-ARIA のロール、ステート、プロパティ

#### コンテキストロール

- [role="row"](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : 行を見つけることができる唯一のコンテキストです。これはセルまたはセルのグループの行を包含し、そのうち rowheader タイプは一つだけであるべきです。ネイティブの {{HTMLElement('tr')}} HTML 要素と同様です。

### キーボードインタラクション

なし。

### 必要な JavaScript 機能

なし。

> [!NOTE]
> ARIA 使用の最初のルールは、必要なセマンティクスと動作が既に組み込まれているネイティブ機能を使用できる場合、要素を再利用して ARIA ロール、ステート、プロパティを**追加**してアクセシブルにするのではなく、そのネイティブ機能を使用することです。可能な限り、ARIA 表ロールの代わりに HTML の `<table>`、`<tr>`、`<th>`、`<td>`、およびその他の [表要素](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) を使用してください。

## 例

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA Role</span>
      <span role="columnheader" aria-sort="none">Semantic Element</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="rowheader">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="rowheader">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="rowheader">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="rowheader">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

この例では、表見出しと表ボディを持つ非セマンティック ARIA table で、DOM に存在する 81 行のうち 5 行があります：表見出し内に 1 行、表ボディ内に 4 行。見出し行は、見出し rowgroup 内に単独で存在し、2 つの列見出しを持ちます。[`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) プロパティで示されているように、列はソート可能ですが、現在はソートされていません。表ボディは別の rowgroup で、現在 DOM に 4 行があります。各データ表行には行見出しがあります。すべての行が DOM にあるわけではないため、すべての行に [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) プロパティを含めています。

## ベストプラクティス

データ表の構造には、{{HTMLElement('table')}}、{{HTMLElement('tbody')}}、{{HTMLElement('thead')}}、{{HTMLElement('tr')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} などのみを使用してください。CSS で表のネイティブセマンティクスが削除される場合にアクセシビリティを確保するために、これらの ARIA ロールを追加できます。すべての ARIA table ロールの関連する使用例は、CSS の `display` プロパティが表のネイティブセマンティクスを上書きする場合です（例：`display: grid`）。この場合、ARIA table ロールを使用してセマンティクスを追加できます。

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <th role="rowheader">header</th>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <th role="rowheader">header</th>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

上記は、表を書く際のセマンティックな方法です。ARIA ロールは、表のネイティブセマンティクス、したがって表行見出しが抹消される場合（[display プロパティを flex または grid に設定する](/ja/docs/Web/CSS/Reference/Properties/display#accessibility) など）にのみ必要です。

### 追加の利点

なし

## 仕様書

{{Specifications}}

## 関連情報

- [HTML の `<table>` 要素](/ja/docs/Web/HTML/Reference/Elements/table)
- [HTML の `<th>` 要素](/ja/docs/Web/HTML/Reference/Elements/th)
- [HTML 表のチュートリアル](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA `cell` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA `row` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA `gridcell` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
