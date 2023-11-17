---
title: "ARIA: cell ロール"
slug: Web/Accessibility/ARIA/Roles/cell_role
l10n:
  sourceCommit: a33aa4b21a269539354089513b22846f4be83f3c
---

`cell` は ARIA の _role_ 属性の値で、要素を列ヘッダーや行ヘッダーの情報を含まない表形式コンテナー内のセルとして識別します。サポートされるには、セルが行 (`row`) ロールを持つ要素内にネストされている必要があります。

```html
<div role="row">
  <span role="cell">フランス</span>
  <span role="cell">6700 万</span>
</div>
```

上のセルの書き方のより良い、より意味論的な方法は、意味論的な `<td>` 要素を使うことです。

```html
<tr role="row">
  <td role="cell">フランス</td>
  <td role="cell">6700 万</td>
</tr>
```

## 解説

`role="cell"` を持つ要素は、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)) の中にあり、任意で行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/rowgroup_role))の中にある、行の中のセルです。セルがグリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/grid_role)) またはツリーグリッド ([`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)) 内にある場合は、グリッドセル ([`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/gridcell_role)) を選択してください。
可能であれば、ネイティブの HTML の {{HTMLElement('td')}} 要素を使用することを強く推奨します。

`role="cell"` を持つ各要素は、 [`role="row"`](/ja/docs/Web/Accessibility/ARIA/Roles/row_role) を持つコンテナー要素内に入っていなければなりません (MUST)。この行は、[`role="rowgroup"`](/ja/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) を持つ要素内に入れることができ、グリッド (`grid`)、表 (`table`)、ツリーグリッド (`treegrid`) のいずれかの中に入れてください。セルに列または行のヘッダーの情報が含まれている場合は、それぞれ列ヘッダー (`columnheader`) ロールや行ヘッダー (`rowheader`) ロールを使用してください。セルにヘッダー情報が含まれておらず、グリッド (`grid`) やツリーグリッド (`treegrid`) の中に入っている場合は、グリッドセル (`gridcell`) ロールの方が適切な場合があります。

セルには、 [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindex), [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colspan), [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex), [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) など、表形式データ構造内のセルの位置を明確にする多数のプロパティ属性を含めることができます。

> **メモ:** 可能であれば、ネイティブな HTML 表要素 ({{HTMLElement('table')}} を、表の行要素 ({{HTMLElement('tr')}} および表のセル要素 ({{HTMLElement('td')}} と共に使用することを強く推奨します。

### 関連する WAI-ARIA のロール、ステート、プロパティ

#### コンテキストのロール

- [role="row"](/ja/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : `role="row"` の要素は、表形式構造内のセルの行です。 行には、グリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/grid_role))、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/table_role))、ツリーグリッド (`treegrid`) 内において、そして任意で行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)) 内において、1 つ以上のセル、グリッドセル、列ヘッダー、行ヘッダーが含まれます。
- [role="rowgroup"](/ja/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : 行はセルの親として必須です。 行グループ (`rowgroup`) は、任意のコンテキスト上の行の親で、子孫となる行との間に関係を確立します。 これは、[HTML 表 (`table`)](/ja/docs/Learn/HTML/Tables/Basics) 要素の [`thead`](/ja/docs/Web/HTML/Element/thead), [`tfoot`](/ja/docs/Web/HTML/Element/tfoot), [`tbody`](/ja/docs/Web/HTML/Element/tbody) 要素と構造的に同等です。
- [role="table"](/ja/docs/Web/Accessibility/ARIA/Roles/table_role)
  - : セルを含む行を見つけることができる、グリッド (`grid`) とツリーグリッド (`treegrid`) と共に 3 つの可能なコンテキストのうちの 1 つ。 表 (`table`) は、セルを、ネイティブな HTML の [`<table>`](/ja/docs/Web/HTML/Element/table) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として識別します。
- [role="grid"](/ja/docs/Web/Accessibility/ARIA/Roles/grid_role)
  - : セル (`cell`) とグリッドセル (`gridcell`) を含む行を見つけることができる、表 (`table`) とツリーグリッド (`treegrid`) と共に 3 つの可能なコンテキストのうちの 1 つ。 グリッド (`grid`) は、セルを、ネイティブな HTML [`<table>`](/ja/docs/Web/HTML/Element/table) 要素と同様に、行と列に配置されたデータを含むインタラクティブかもしれない表構造の一部として識別します。
- [role="treegrid"](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : グリッド (`grid`) に似ていますが、ツリー (`tree`) と同じ方法で展開や折りたたみができる行があります。

#### サブクラスのロール

- [role="gridcell"](/ja/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
  - : グリッド (`grid`) やツリーグリッド (`treegrid`) 内の行内のセル。
- [role="columnheader"](/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
  - : 列スコープを持つ HTML [`<th>`](/ja/docs/Web/HTML/Element/th) 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、列ヘッダー (`columnheader`) ロールは、対応する列の全てのセルとの関係を確立します。
- [role="rowheader"](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
  - : 行スコープを持つ HTML [`<th>`](/ja/docs/Web/HTML/Element/th) 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、行ヘッダー (`rowheader`) ロールは、対応する行の全てのセルとの関係を確立します。

#### ステートとプロパティ

- [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
  - : HTML の [`<th>`](/ja/docs/Web/HTML/Element/th) と [`<td>` 要素の `colspan` 属性](/ja/docs/Web/HTML/Element/td)と同様に、セルにまたがる列数を定義します。
- [`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
  - : HTML の [`<th>`](/ja/docs/Web/HTML/Element/th) と [`<td>` 要素の `rowspan` 属性](/ja/docs/Web/HTML/Element/td)と同様に、セルにまたがる行数を定義します。
- [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 属性
  - : `aria-colindex` 属性は、列が DOM から隠されている場合にのみ必要です。 この属性は、値として 1 から表 (`table`)、グリッド (`grid`)、ツリーグリッド (`treegrid`) 内の総列数の間の整数をとります。 `aria-colindex` は、行内の総列数に対する要素の列インデックスまたは位置を定義します。 全ての列が DOM 内にある場合、この属性は必要ありません。
- [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) 属性
  - : `aria-rowindex` 属性は、行が DOM から隠されている場合にのみ必要で、現在のセルが総ての行のリスト内のどの行かを示します。 この属性は、値として 1 から表 (`table`)、グリッド (`grid`)、ツリーグリッド (`treegrid`) 内の総行数の間の整数をとり、セルの位置またはインデックスを示します。 たとえば、最初のヘッダーの最初の行のセルは `aria-rowindex="1"` と設定され、47 行目のセルは、DOM 内に全ての行が存在しないために `aria-rowindex` が必要な場合は、`aria-rowindex="47"` となるでしょう。 表示されている行が連続していて、`colspan` や `rowspan` が 1 より大きいセルがない場合、このプロパティは行の全てのセルの代わりに親の行に追加できます。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

ARIA の第一のルールは、要素を転用して、ARIA のロール、ステート、プロパティを**追加**してアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できる場合は、そうすることです。 可能な限り、ARIA のセル (`cell`) ロールの代わりに HTML の `<td>` 要素を使用してください。

## 例

```html
<div
  role="table"
  aria-label="意味論的な要素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    ARIA のロールの代わりに使用する意味論的な要素
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >ARIA ロール</span
      >
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >意味論的な要素</span
      >
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell" aria-rowindex="11">header</span>
      <span role="cell" aria-rowindex="11">h1</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="16">header</span>
      <span role="cell" aria-rowindex="16">h6</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="18">rowgroup</span>
      <span role="cell" aria-rowindex="18">thead</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="24">term</span>
      <span role="cell" aria-rowindex="24">dt</span>
    </div>
  </div>
</div>
```

上記は、DOM 内に 81 行のうち 5 行が存在する意味論的でない ARIA の表です。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 全ての行が DOM 内にあるわけではないので、全てのセルに `aria-rowindex` プロパティを含めています。 複数の行や列にまたがるセルがない場合、`aria-rowindex` は行の個々のセルではなく行に配置されている可能性があります。

## ベストプラクティス

データ表構造には、{{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, などのみを使用してください。 CSS などを使用して、表のネイティブな意味論を削除しなくてはならない場合は、 ARIA ロールを追加してアクセシビリティを確保できます。 ARIA の表 (`table`) ロールの関連するユースケースは、[display: grid など、CSS の display プロパティ](/ja/docs/Web/CSS/display#accessibility_concerns)によって表のネイティブな意味論が上書きされる場合です。 この場合、ARIA の表 (`table`) ロールを使用して意味論を戻すことができます。

```html
<table
  role="table"
  aria-label="意味論的な要素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    ARIA のロールの代わりに使用する意味論的な要素
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
        ARIA ロール
      </th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
        意味論的な要素
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

上記は、表を作成する意味論的な方法です。 表のネイティブな意味論、つまり表の行が、[display プロパティ](/ja/docs/Web/CSS/display#accessibility_concerns)などを介して変更されていない場合、ARIA ロールは必要ありません。

### 追加された利点

{{HTMLElement('td')}} に適用すると、`display: grid;` などで意味づけが削除された場合に、その要素にセルの意味づけを返します。

## 仕様

{{Specifications}}

## 関連情報

- [role="row"](/ja/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`role="gridcell"`](/ja/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [HTML `<td>` 要素](/ja/docs/Web/HTML/Element/td)
- [HTML `<th>` 要素](/ja/docs/Web/HTML/Element/th)
- [HTML 表の高度な機能とアクセシビリティ](/ja/docs/Learn/HTML/Tables/Advanced)
- [HTML の表の基本](/ja/docs/Learn/HTML/Tables/Basics)

<section id="Quick_links">

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}

</section>
