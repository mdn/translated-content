---
title: "ARIA: rowgroup ロール"
slug: Web/Accessibility/ARIA/Roles/rowgroup_role
---

行グループロール (`role="rowgroup"`) を持つ要素は、表形式の構造内の行 ([`row`](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)) のグループです。 行グループ (`rowgroup`) には、グリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role))、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role))、ツリーグリッド ([`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_Role)) 内のセル ([`cell`](/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role))、グリッドセル ([`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role))、列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role))、行ヘッダー ([`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_Role)) の行が 1 つ以上含まれます。

```html
<div role="table" aria-label="人口" aria-describedby="country_population_desc">
  <div id="country_population_desc">国別世界人口</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">国</span>
      <span role="columnheader" aria-sort="none">人口</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">フィンランド</span>
      <span role="cell">550 万</span>
    </div>
    <div role="row">
      <span role="cell">フランス</span>
      <span role="cell">6700 万</span>
    </div>
  </div>
</div>
```

## 説明

行グループ (`rowgroup`) は、所有する行の要素間の関係を確立し、HTML の表ヘッダー ([`<thead>`](/ja/docs/Web/HTML/Element/thead))、表フッター ([`<tfoot>`](/ja/docs/Web/HTML/Element/tfoot)) 、および表本体 ([`<tbody>`](/ja/docs/Web/HTML/Element/tbody)) の要素と構造的に同等です。 ただし、異なる種類の行グループ間には区別がありません。 それらの要素は、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role)) やグリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)) のロールを持つ要素に含まれているか、またはそれらの要素によって所有されている必要があります。 可能な限り、ネイティブな HTML の [`<thead>`](/ja/docs/Web/HTML/Element/thead)、[`<tfoot>`](/ja/docs/Web/HTML/Element/tfoot)、[`<tbody>`](/ja/docs/Web/HTML/Element/tbody) の要素を使用することを強く推奨します。

ARIA の表ヘッダー、表フッター、表本体を作成するには、行グループロール (`role="rowgroup"`) を要素に追加します。 その行グループは、1 つ以上の行のグループを含むグリッド、表、またはツリーグリッド内にネストするべきです。 各行には子のセルが含まれています。 これらのセルには、列や行のヘッダー、プレーンなセルやグリッドセルとさまざまな種類のセルがあります。

> **メモ:** 可能な限り、ネイティブな HTML の表要素（`<table>`）を表ヘッダー（`<thead>`）、表フッター（`<tfoot>`）、表本体（`<tbody>`）の要素と共に使用することを強く推奨します。

### 関連する WAI-ARIA のロール、ステート、プロパティ

#### コンテキストロール

- [role="table"](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role)
  - : グリッドとツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つです。 ネイティブな HTML の [`<table>`](/ja/docs/Web/HTML/Element/table) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [role="grid"](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)
  - : 表とツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つです。 ネイティブな HTML の [`<table>`](/ja/docs/Web/HTML/Element/table) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [role="treegrid"](/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_Role)
  - : グリッドに似ていますが、ツリー (`tree`) と同じ方法で展開と折りたたみができる行があります (訳注: [W3C のツリーグリッドによるメール受信ボックスの例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treegrid/treegrid-1.html)では、行単位でのインタラクションも可能となっています) 。

#### 子孫のロール

- [role="row"](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)
  - : 表形式の構造内のセルの一行。 行には、1 つ以上のセル（[`cell`](/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role)）、グリッドセル（[`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)）、または列ヘッダー（[`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role)）が含まれ、場合によっては行ヘッダー（[`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_Role)）も含まれます。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し。

> **メモ:** ARIA の使用の第一のルールは、要素を転用して ARIA のロール、ステート、プロパティを**追加する**ことでアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できることです。 可能な限り、ARIA の表ロールの代わりに HTML の `<table>` 要素を使用してください。

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
      <span role="columnheader" aria-sort="none">ARIA のロール</span>
      <span role="columnheader" aria-sort="none">意味論的な要素</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

上記は、表のヘッダーと表の本体を備えた意味論的でない ARIA の表であり、DOM 内には 81 行のうち 5 行が存在しています。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 ヘッダー行は、ヘッダーの行グループ内に単独であり、2 つの列ヘッダーを持ちます。 列はソート可能ですが、`aria-sort` プロパティで示されているように、現在はソートされていません。 表の本体は別の行グループにあり、現在 DOM 内に 4 行あります。 全ての行が DOM 内にあるわけではないため、全ての行に `aria-rowindex` プロパティを含めています。

## ベストプラクティス

データ表構造には、`<table>`、`<tbody>`、`<thead>`、`<tr>`、`<th>`、`<td>` などのみを使用してください。 これらに ARIA ロールを追加することで、CSS などで表のネイティブな意味論が取り除かれても、アクセシビリティを確保することができます。 ARIA の表ロールの関連するユースケースは、`display: grid` など、CSS の `display` プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、ARIA の表ロールを使用して意味論を追加し直すことができます。

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
      <th role="columnheader" aria-sort="none">ARIA のロール</th>
      <th role="columnheader" aria-sort="none">意味論的な要素</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

上記は、表の意味論的な書き方です。 ARIA のロールが必要になるのは、[`display` プロパティを `flex` や `grid`](/ja/docs/Web/CSS/display#accessibility_concerns) に設定するなどして、表のネイティブな意味論、つまり表の行が完全に破壊されてしまう場合だけです (訳注: ここでの grid は、CSS グリッドレイアウトというグリッドロールとは全く別のものであることに注意してください) 。

### 追加された利点

無し

## 仕様

{{Specifications}}

## 関連情報

- [HTML の表](/ja/docs/Web/HTML/Element/table)
- [HTML の表本体](/ja/docs/Web/HTML/Element/tbody)
- [HTML の表フッター](/ja/docs/Web/HTML/Element/tfoot)
- [HTML の表ヘッダー](/ja/docs/Web/HTML/Element/thead)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
