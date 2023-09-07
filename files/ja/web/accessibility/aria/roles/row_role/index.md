---
title: "ARIA: row ロール"
slug: Web/Accessibility/ARIA/Roles/row_role
---

行ロール (`role="row"`) を持つ要素は、表形式の構造内に並んだセルの一行です。 行には、1 つ以上のセル、グリッドセル、列ヘッダー、場合によっては行ヘッダーが含まれます。 行は、グリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role))、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role))、ツリーグリッド ([`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)) 内に含まれ、任意で行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)) 内に含まれることもあります。

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

行ロール (`role="row"`) 要素は、グリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role))、表 ([`table`](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role))、ツリーグリッド ([`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)) 内の行であり、任意で行グループ ([`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)) 内の行です。 行は、静的な表構造内の 1 つ以上のセル ([`cell`](/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role))、グリッドセル ([`gridcell`](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role))、列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role))、行ヘッダー ([`rowheader`](/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_role)) のコンテナーです。 可能な限り、ネイティブな [HTML の `<tr>`](/ja/docs/Web/HTML/Element/tr) 要素を使用することを強く推奨します。

ARIA の行を作成するには、コンテナー要素に行ロール (`role="row"`) を追加します。 その行は、グリッド、表、ツリーグリッド内にネストするべきです。 行のグループは、グリッド、表、ツリーグリッド内に直接ネストすることも、これらのコンテナー内の行グループ内にネストすることもできます。 それぞれの行には子のセルが含まれています。 これらのセルには、列や行のヘッダー、グリッドや普通のセルとさまざまな種類のセルがあります。

行には、`aria-colindex`、`aria-level`、`aria-rowindex`、`aria-selected` など、行のロールを明確にする多くの属性を含めることができます。

行がツリーグリッド内にある場合、行には `aria-expanded` 属性を含めることができ、この属性を使って現在の (展開、折りたたみ) 状態を示すことができます。 これは、`aria-expanded` 属性が存在しない通常の表やグリッドの場合には当てはまりません。

表形式の構造を持つインタラクティブなウィジェットを作成するには、代わりにグリッドパターンを使用します。 インタラクションが個々のセルの選択状態を提供する場合や、上下左右のナビゲーションを提供する場合や、ユーザーインターフェイスでセルの順序を入れ替えたり、ドラッグアンドドロップなどで個々のセルの順序を変更したりできる場合は、代わりにグリッド ([`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)) やツリーグリッド ([`treegrid`](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)) を使用してください。

> **メモ:** 可能な限り、ネイティブな HTML の表要素 (`<table>`) を表の行要素 (`<tr>`) と共に使用することを強く推奨します。

### 関連する WAI-ARIA のロール、ステート、プロパティ

#### コンテキストロール

- [role="rowgroup"](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
  - : 任意のコンテキスト上の行の親であり、子孫の行の間の関係を確立します。 これは、HTML の表要素の `thead`、`tfoot`、`tbody` 要素と構造的に同等です。
- [role="table"](/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role)
  - : グリッドとツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つであり、ネイティブな HTML の `<table>` 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [role="grid"](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)
  - : 表とツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つであり、ネイティブな HTML の `<table>` 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [role="treegrid"](/ja/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
  - : グリッドに似ていますが、ツリー (`tree`) と同じ方法で展開と折りたたみができる行があります (訳注: [W3C のツリーグリッドによるメール受信ボックスの例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treegrid/treegrid-1.html)では、行単位でのインタラクションも可能となっています) 。

#### 子孫のロール

- [role="cell"](/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role)
  - : 表形式のコンテナー内の行にあるセル。
- [role="gridcell"](/ja/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)
  - : グリッドやツリーグリッド内の行にあるセル。
- role="columnheader"
  - : 列スコープを持つ HTML の `<th>` 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、列ヘッダーロールは、対応する列の全てのセルとの関係を確立します。
- role="rowheader"
  - : 行スコープを持つ HTML の `<th>` 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、行ヘッダーロールは、対応する行の全てのセルとの関係を確立します。

#### ステートとプロパティ

- aria-expanded ステート

  - : 行の状態を定義する `aria-expanded` 属性は、次の 3 つの値のいずれかを取るか省略することができます。

    - `aria-expanded="true`: 行は現在展開されています。
    - `aria-expanded="false"`: 行は現在折りたたまれています。
    - `aria-expended="undefined"`、または属性がない: 行は展開も折りたたみもできません。

    `aria-expanded` 属性を持つ要素が、その要素が「所有」していない別のグループ化コンテナーの展開を制御する場合、作成者は `aria-controls` 属性を使用してそのコンテナーを参照する**べき**です。

- aria-selected ステート

  - : グリッドやツリーグリッドなどのインタラクティブなコンテナー内に行がある場合にのみ関連し、表内に行がある場合は関連しません。 `aria-selected` 属性は、次の 3 つの値のいずれかを取るか省略することができます。

    - `aria-selected="true`: 行は現在選択されています。
    - `aria-selected="false"`: 行は現在選択されていません。
    - `aria-selected="undefined"`、または属性がない: 行は選択できません。

- aria-colindex 属性

  - : `aria-colindex` 属性は、列が DOM から隠されている場合にのみ必要です。 一般的に、行自体ではなく、行の子に配置されます。 表示される列が連続している場合は、行に配置できます。

    この属性は、値として、1 と表、グリッド、ツリーグリッド内の全列数の間の整数をとります。 `aria-colindex` は、行に配置されると、行内の全列数に対する要素の列インデックスまたは位置を定義します。 例えば、表内に 15 列あり、4、5、6 の列のみが DOM にある場合、全ての行に `aria-colindex="4"` を設定できます。

    DOM に存在する列のセットが連続して**いない**場合や、複数の行や列にまたがるセルがある場合は、行自体ではなく各行の全ての子に `aria-colindex` を配置します (訳注: 全ての列を 1 から昇順に数えたものを昇順に配置します) 。

    全ての列が DOM にある場合、この属性は必要ありません。

- aria-rowindex 属性

  - : `aria-rowindex` 属性は、行が DOM から隠されている場合にのみ必要であり、全行のリスト内のどの行が読み込まれているかを示します。 属性は、それぞれの行に一意の値が設定され、値として、1 と表、グリッド、ツリーグリッド内の全行数の間の整数をとり、各行の位置またはインデックスを示します。 例えば、1,500 行ある表で、ヘッダーと 47 行目と 52 行目のみが DOM に存在する場合、ヘッダー行に `aria-rowindex="1"` が設定され、47 行目と 52 行目にそれぞれ `aria-rowindex="47"` と `aria-rowindex="52"` が設定されます (訳注: ヘッダー行も含んだ全ての行を 1 から昇順に数えたものを昇順に配置します) 。

    全ての行が DOM に存在する場合、この属性は必要ありません。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し。 ソート可能な列については、列ヘッダー ([`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role)) ロールを参照してください。

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

上記は、DOM 内に 81 行のうち 5 行が存在する意味論的でない ARIA の表です。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 ヘッダー行は、ヘッダーの行グループ内に単独であり、2 つの列ヘッダーを持ちます。 列はソート可能ですが、`aria-sort` プロパティで示されているように、現在はソートされていません。 表の本体は別の行グループにあり、現在 DOM 内に 4 行あります。 全ての行が DOM 内にあるわけではないため、全ての行に `aria-rowindex` プロパティを含めています。

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
    <tr role="row" aria-rowindex="18">
      <td role="cell">rowgroup</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">term</td>
      <td role="cell">dt</td>
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

- [HTML の表の行要素](/ja/docs/Web/HTML/Element/tr)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
