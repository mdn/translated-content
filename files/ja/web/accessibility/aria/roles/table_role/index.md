---
title: "ARIA: table ロール"
slug: Web/Accessibility/ARIA/Roles/table_role
---

\\{{ariaref}}

ARIA の role 属性の table 値は、このロールを含む要素を、ネイティブの {{htmlelement("table")}} HTML 要素と同様に、行と列に配置されたデータを含む非インタラクティブな表構造を持つものとして識別します。

```html
<div
  role="table"
  aria-label="意味論的な表の要素"
  aria-describedby="semantic_table_desc">
  <div id="semantic_table_desc">
    ARIA の table ロールの代わりに使用する意味論的な要素
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader">ARIA の table ロール</span>
      <span role="columnheader">意味論的な要素</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">table</span>
      <span role="cell">table</span>
    </div>
    <div role="row">
      <span role="cell">rowgroup</span>
      <span role="cell">thead, tbody, or tfoot </span>
    </div>
  </div>
</div>
```

## 説明

`role="table"` を持つ要素はセルを含む行を持つ静的な表構造です。 表の個々のセル内のウィジェットはインタラクティブになることがありますが、セルはフォーカス可能または選択可能ではありません。 可能な限りネイティブの HTML {{htmlelement("table")}} 要素を使用することを強くお勧めします。

> **警告:** 表が選択状態を維持している場合、2 次元ナビゲーションを使用している場合、またはユーザーがセルの順序を並べ替えることができる場合は、代わりにグリッド（[`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)）またはツリーグリッド（[`treegrid`](/ja/docs/)）を使用します。

ARIA の表を作成するには、`role="table"` をコンテナ要素に追加します。 そのコンテナ内では、各行に `role="row"` を設定し、子セルを含ませます。 各セルには、列ヘッダー（`columnheader`）、行ヘッダー（`rowheader`）、または単なるセル（[`cell`](/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role)）のいずれかのロールがあります。 行は、表の子になることも、行グループ（[`rowgroup`](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)）内になることもあります。

表のキャプションは、`aria-labelledby`、`aria-label`、または `aria-describeby` によって定義できます。 {{htmlelement("tbody")}}、{{htmlelement("thead")}}、{{htmlelement("tr")}}、{{htmlelement("th")}}、{{htmlelement("td")}} など、他のすべての意味論的な表の要素は、`rowgroup`、`row`、`columnheader`、`cell` などの関連するロールを介して追加する必要があります。

表にソート可能な列または行が含まれる場合は、`aria-sort` 属性をヘッダーのセル要素に追加する必要があります（表自体ではありません）。 ある行または列が隠されている場合は、それぞれのセルの `aria-colindex` または `aria-rowindex` とともに、それぞれ列または行の総数を示す `aria-colcount` または `aria-rowcount` を含める必要があります。 `aria-colindex` または `aria-rowindex` は、それぞれ行または列内のセルの位置に設定します。 表に複数行または複数列にわたるセルが含まれる場合は、`aria-rowspan` または `aria-colspan` も含める必要があります。 すべての支援技術でサポートされているすべての関連する意味論的な要素および属性と共に、{{htmlelement("table")}} 要素を単純に使用する方がはるかに簡単です。

表構造を持つインタラクティブなウィジェットを作成するには、代わりにグリッドパターンを使用してください。 インタラクションが個々のセルの選択状態を提供する場合、左から右へ、上から下へのナビゲーションを提供する場合、またはユーザーインターフェイスでセルの順序の並べ替えやドラッグアンドドロップなどの個々のセルの順序の変更を許可する場合、代わりに [`grid`](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role) または [`treegrid`](/ja/docs/) を使用してください。

> **メモ:** 可能な限りネイティブの [HTML の表要素](/ja/docs/Learn/HTML/Tables/Advanced)を使用することを強くお勧めします。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [role="rowgroup"](/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
  - : 表のオプションの子である行グループは、{{htmlelement("thead")}}、{{htmlelement("tbody")}}、および {{htmlelement("tfoot")}} と同様に、行のグループをカプセル化します。
- [role="row"](/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role)
  - : 表内の行、およびオプションで行グループ（`rowgroup`）内の行、つまり 1 つ以上のセル（`cell`）、列ヘッダー（`columnheader`）、または行ヘッダー（`rowheader`）のコンテナです。
- aria-describedby 属性
  - : 値として、表のキャプションとして機能する要素の `id` を取ります。
- aria-label 属性
  - : `aria-label` は、表にアクセス可能な名前を提供します。
- aria-colcount 属性
  - : この属性は、ある列が常に DOM に存在しない場合にのみ必要です。 全表の列数を明示的に示します。 値を全表の列の総数に設定します。 不明な場合は、`aria-colcount="-1"` を設定してください。
- aria-rowcount 属性
  - : この属性は、DOM ノードの数を最小限に抑えるために行を再利用するスクロール可能な表など、ある行が常に DOM に存在しない場合にのみ必要です。 全表の行数を明示的に示します。 値を全表の行の総数に設定します。 不明な場合は、`aria-rowcount="-1"` を設定してください。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し。 ソート可能な列については、 [`columnheader`](/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role) ロールを参照してください。

> **メモ:** ARIA の最初のルールは、要素を再定義し、ARIA のロール、ステート、プロパティを**追加して**アクセス可能にするのではなく、すでに組み込まれている意味論と挙動を持つネイティブな機能を使用できることです。 可能な限り、ARIA の `table` ロールの代わりに HTML の {{htmlelement("table")}} 要素を使用してください。

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

上記は表の一部です。 `aria-rowcount` プロパティで示されるように、全表には 81 のエントリがありますが、現在表示されているのは 4 つだけです。 列ヘッダーの `aria-sort` プロパティで示されるように、列はソート可能ですが、現在はソートされていません。

## ベストプラクティス

データ表構造には、{{htmlelement("table")}}、{{htmlelement("tbody")}}、{{htmlelement("thead")}}、{{htmlelement("tr")}}、{{htmlelement("th")}}、{{htmlelement("td")}} などのみを使用します。 アクセシビリティを確保するために ARIA のロールを追加し、例えば CSS で表のネイティブな意味論を削除するべきです。 ARIA の `table` ロールの関連するユースケースは、`display: grid` など、CSS の {{cssxref("display")}} プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、ARIA の `table` ロールを使用して意味論を戻すことができます。

### 追加された利点

無し

## 仕様

{{Specifications}}

## 関連情報

- [HTML の表要素](/ja/docs/Learn/HTML/Tables/Advanced)
- [ARIA: grid ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role)
