---
title: "ARIA: table ロール"
short-title: table
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

`table` は ARIA の `role` 属性の値で、このロールを含む要素を、ネイティブの HTML {{HTMLElement('table')}} 要素と同様に、行と列に配置されたデータを含む非対話的な表構造を持つものとして識別します。

```html
<div
  role="table"
  aria-label="意味論的な表の要素"
  aria-describedby="semantic_elements_table_desc">
  <div id="semantic_elements_table_desc">
    ARIA の table ロールの代わりに使用する意味論的な要素
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">ARIA の table ロール</span>
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

## 解説

`role="table"` を持つ要素はセルを含む行を持つ静的な表構造です。 表の個々のセル内のウィジェットは対話的になることがありますが、セルはフォーカス可能または選択可能ではありません。 可能な限りネイティブの HTML {{HTMLElement('table')}} 要素を使用することを強くお勧めします。

> [!WARNING]
> 表が選択状態を維持している場合、2 次元ナビゲーションを使用している場合、またはユーザーがセルの順序を並べ替えることができる場合は、代わりに [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) または [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) を使用します。

ARIA の表を作成するには、`role="table"` をコンテナー要素に追加します。 そのコンテナー内では、各行に `role="row"` を設定し、子セルを含ませます。各セルには、`columnheader`、`rowheader`、`cell` のいずれかのロールを設定します。行は、表の子になることも、`rowgroup` の中になることもあります。

ARIA では必須ではありませんが、`table` ロールにはアクセシブル名を設定することを強く推奨します。アクセシブル名は、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) または [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用して定義してください。目に見えるキャプションが存在する場合は、`aria-labelledby` を使用してそれを参照してください。その他の意味論的な票要素、例えば {{HTMLElement('tbody')}}、 {{HTMLElement('thead')}}、{{HTMLElement('tr')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} などについては、関連付けられたロール（`rowgroup`、`row`、`columnheader`、`cell` など）を介して追加する必要があります。

表にソート可能な列または行が含まれる場合は、[`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) 属性をヘッダーのセル要素に追加する必要があります（表自体ではありません）。ある行または列が隠されている場合は、それぞれ列または行の総数を示す [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) または [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) を含め、それぞれのセルに [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) または [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) を設定する必要があります。 [`aria-colindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) または [`aria-rowindex`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) は、それぞれ行または列内のセルの位置に設定します。 表に複数行または複数列にわたるセルが含まれる場合は、[`aria-rowspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) または [`aria-colspan`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) も含める必要があります。{{HTMLElement("table")}} 要素を使用するほうが、はるかに簡単であることにご留意ください。この要素には、すべての支援技術で対応している関連する意味的要素や属性がすべて含まれています。

表構造を持つ対話的なウィジェットを作成するには、代わりにグリッドパターンを使用してください。 インタラクションが個々のセルの選択状態を提供する場合、左から右へ、上から下へのナビゲーションを提供する場合、またはユーザーインターフェイスでセルの順序の並べ替えやドラッグアンドドロップなどの個々のセルの順序の変更を許可する場合、代わりに [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) または [`treegrid`](/ja/docs/Web) を使用してください。

> [!NOTE]
> 可能な限りネイティブの HTML の表要素を使用することを強くお勧めします。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- `role="rowgroup"`
  - : 表のオプションの子である行グループは、{{HTMLElement('thead')}}、{{HTMLElement('tbody')}}、{{HTMLElement('tfoot')}} と同様に、行のグループをカプセル化します。
- [`role="row"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : 表内の行、およびオプションで行グループ内の行、つまり 1 つ以上のセル、列ヘッダー、または行ヘッダーのコンテナーです。
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性
  - : 値として、表のキャプションとして機能する要素の `id` を取ります。
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性
  - : [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) は、表にアクセス可能な名前を提供します。
- [`aria-colcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性
  - : この属性は、ある列が常に DOM に存在しない場合にのみ必要です。 全表の列数を明示的に示します。 値を全表の列の総数に設定します。 不明な場合は、`aria-colcount="-1"` を設定してください。
- [`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) 属性
  - : この属性は、DOM ノードの数を最小限に抑えるために行を再利用するスクロール可能な表など、ある行が常に DOM に存在しない場合にのみ必要です。 全表の行数を明示的に示します。 値を全表の行の総数に設定します。 不明な場合は、`aria-rowcount="-1"` を設定してください。

### キーボード操作

なし。

### 必要な JavaScript 機能

ない。 ソート可能な列については、 [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ロールを参照してください。

> [!NOTE]
> ARIA の最初のルールは、要素を再定義し、ARIA のロール、ステート、プロパティを**追加して**アクセス可能にするのではなく、すでに組み込まれている意味論と挙動を持つネイティブな機能を使用できることです。 可能な限り、ARIA の `table` ロールの代わりに HTML の {{htmlelement("table")}} 要素を使用してください。

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

上記は表の一部です。[`aria-rowcount`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) プロパティで示されるように、全表には 81 のエントリーがありますが、現在表示されているのは 4 つだけです。 列ヘッダーの [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) プロパティで示されるように、列はソート可能ですが、現在はソートされていません。

## ベストプラクティス

データ表構造には、{{HTMLElement('table')}}、{{HTMLElement('tbody')}}、{{HTMLElement('thead')}}、{{HTMLElement('tr')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} などのみを使用します。 アクセシビリティを確保するために ARIA のロールを追加し、例えば CSS で表のネイティブな意味論を削除するべきです。 ARIA の `table` ロールの関連するユースケースは、`display: grid` など、CSS の display プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、ARIA の `table` ロールを使用して意味論を戻すことができます。

## 仕様書

{{Specifications}}

## 関連情報

- [学習: HTML 表のアクセシビリティ](/ja/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA: `grid` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
