---
title: HTML `<tr>` 表の行要素
short-title: <tr>
slug: Web/HTML/Reference/Elements/tr
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<tr>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の中のセルの行を定義します。行のセルには {{HTMLElement("td")}} （行のセル）および {{HTMLElement("th")}} （見出しセル）要素を混在させることができます。

{{InteractiveExample("HTML デモ: &lt;tr&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Alien football stars
  </caption>
  <thead>
    <tr>
      <th scope="col">Player</th>
      <th scope="col">Gloobles</th>
      <th scope="col">Za'taak</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">TR-7</th>
      <td>7</td>
      <td>4,569</td>
    </tr>
    <tr>
      <th scope="row">Khiresh Odo</th>
      <td>7</td>
      <td>7,223</td>
    </tr>
    <tr>
      <th scope="row">Mia Oolong</th>
      <td>9</td>
      <td>6,219</td>
    </tr>
  </tbody>
</table>
```

```css interactive-example
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: white;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eeeeee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

### 非推奨の属性

以下の属性は非推奨となっているため、使用しないでください。これらは、既存のコードを更新する際の参考として、また歴史的な関心のためだけに、下記に記載されています。

- `align` {{deprecated_inline}}
  - : それぞれの行のセルの水平方向の配置を指定します。使用可能な{{Glossary("enumerated", "列挙")}}値は、`left`、`center`、`right`、`justify`、`char` です。対応していても、`char` 値は、[`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて、テキストコンテンツを配置します。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `bgcolor` {{deprecated_inline}}
  - : 文字列で、行の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : それぞれの行のセル内のコンテンツを、そのセル内の文字に対して配置する位置を指定します。よくある値としては、数値や金額を配置する場合のピリオド (`.`) があります。[`align`](#align) が `char` に設定されていない場合、この属性は無視されます。

- `charoff` {{deprecated_inline}}
  - : [`char`](#char) 属性で指定された配置文字から、行のセルのコンテンツをオフセットする文字数を指定します。

- `valign` {{deprecated_inline}}
  - : 列内の各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 使用上の注意

- `<tr>` 要素は、{{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}} 要素の子要素としてのみ有効です。
- `<tr>` が親要素である {{HTMLElement("table")}} の直接の子要素として配置されている場合、`<tbody>` 要素が暗黙的に親として扱われ、ブラウザーがマークアップに `<tbody>` を追加します。
- 暗黙の親要素 `<tbody>` は、`<table>` が子要素として `<tbody>` を持っていない場合であり、かつ `<tr>` が {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}}、`<thead>` 要素のどれよりも後に記載されている場合にのみ対応します。
- CSS の擬似クラス {{cssxref(":nth-of-type")}}、 {{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}} は、多くの場合、目的の行のセットとその行のセルおよび見出しセル（{{HTMLElement("td")}} および {{HTMLElement("th")}} 要素）を選択する際に役立ちます。
- `<tr>` が `<table>` の直接の子要素として含まれている場合、ブラウザーがマークアップに `<tbody>` を追加するため、`table > tr` などの CSS セレクターが期待通りに動作しない、あるいはまったく動作しないことがあります。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

### 基本的な行の作成

この例では、4 行 3 列の表を示しています。最初の列には、行のデータセルに対する見出しが含まれています。

#### HTML

4 つの `<tr>` 要素を使用して、表に 4 つの行を作成します。それぞれの行には 3 つのセル（1 つの見出しセル（{{HTMLElement("th")}}）と 2 つのデータセル（{{HTMLElement("td")}}））が含まれており、3 つの列が形成されます。それぞれの見出しセルに設定された [`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope) 属性は、そのセルがどのセルに関連するかを指定します。この例では、`row` 内のすべてのデータセルが対象となります。

```html
<table>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

CSS の {{cssxref(":nth-of-type")}} 擬似クラスを使用して、すべての奇数 (`odd`) 行を選択し、それらの行の {{cssxref("background-color")}} を少し濃い色に設定することで、いわゆる「ゼブラストライプ」効果を作成しています。背景色を交互にすることにより、表内のデータ行を解釈し読み取りやすくします。行と列の数が多い中で、特定の行にあるデータを探す場面を想像してみてください。さらに、行ヘッダーの見出しセル（{{HTMLElement("th")}} 要素）は、{{cssxref("background-color")}}をつけて強調表示し、データセル（{{HTMLElement("td")}}要素）と判別できるようにしています。

```css
tr:nth-of-type(odd) {
  background-color: #eeeeee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### 結果

{{EmbedLiveSample("Basic_row_setup", 650, 140)}}

### ヘッダー行

この例では、[前回の例](#基本的な行の作成)の基本的な表を拡張し、表の 1 行目としてヘッダー行を追加しています。

#### HTML

表の 1 行目として追加の行 (`<tr>`) が追加され、それぞれの列のヘッダーとなる見出しセル ({{HTMLElement("th")}}) が指定されます。この行を {{HTMLElement("thead")}} グループ化要素内に配置することで、これが表のヘッダーである旨を示します。[`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope) 属性を、このヘッダー行内の各見出しセル (`<th>`) に追加し、たとえそれらのセルが {{HTMLElement("tbody")}} 内にあったとしても、各見出しセルが同じの列内のすべてのセルに関連していることを明示的に指定します。

```html
<table>
  <thead>
    <tr>
      <th scope="col">記号</th>
      <th scope="col">Code word</th>
      <th scope="col">発音</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

CSS は[前の例](#基本的な行の作成)とほぼ同じですが、「ヘッダー行」を強調するためのスタイル設定をいくつか追加しており、これにより列の見出しを他のセルと区別しやすくなっています。

```css
tr:nth-of-type(odd) {
  background-color: #eeeeee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: white;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### 結果

{{EmbedLiveSample("Header_row", 650, 170)}}

### 行の並べ替え

{{HTMLElement("table")}} の行（`<tr>` 要素）をソートするための組み込み機能はありません。しかし、{{jsxref("Array.prototype.sort()")}}、{{domxref("Node.removeChild")}}、{{domxref("Node.appendChild")}} を使用することで、`<tr>` 要素の {{domxref("HTMLCollection")}} をソートするための独自の `sort()` 関数を JavaScript で実装することができます。

#### HTML

この基本的な表では、{{HTMLElement("tbody")}} 要素を使用して表の本体部分を指定し、データ（{{HTMLElement("td")}} 要素）を含む 3 つの行（`<tr>` 要素）を配置することで、降順で並んだ数値からなる 1 つの列を作成しています。

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

下記の JavaScript コードでは、作成された `sort()` 関数を {{HTMLElement("tbody")}} 要素に取り付け、表のセルを値の昇順で並べ替え、それに応じて表示を更新します。

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### 結果

{{EmbedLiveSample('Sorting_rows', '650', '80')}}

### 見出しセルをクリックすることで行を並べ替え

この例では、[前の例](#行の並べ替え)の基本的な表を拡張し、複数の列に対して、対話的かつ個別に並べ替えを行えるようにしています。

#### HTML

追加のデータセル（{{HTMLElement("td")}} 要素）を、テーブル本体（{{HTMLElement("tbody")}} 要素）内のそれぞれの行（`<tr>` 要素）に追加し、アルファベットの昇順に並んだ 2 つ目となる列を作成します。{{HTMLElement("thead")}} 要素を使用し、本体セクションの前にヘッダーセクションを追加して、表見出しセル（`<th>` 要素）を含むヘッダー行を導入します。これらの見出しセルは、後述の JavaScript コードで使用して、クリック可能に設定し、クリックによってアクティブ化された際に対応するソートを実行します。

```html
<table>
  <thead>
    <tr>
      <th>番号</th>
      <th>数値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

クリックイベントハンドラーを、{{domxref("HTMLDocument", "document")}} 内の各 {{HTMLElement("table")}} のそれぞれの見出し行（{{HTMLElement("th")}} 要素）に追加します。これにより、行に含まれているデータセル（{{HTMLElement("td")}} 要素）の内容に基づいて、{{HTMLElement("tbody")}} のすべての行（`<tr>` 要素）がソートされます。

> [!NOTE]
> この解決策では、{{HTMLElement("td")}} 要素には子要素を含まないプレーンテキストが仮定されていることを想定しています。

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: white;
  cursor: pointer;
}
```

#### 結果

{{EmbedLiveSample('Sorting_rows_with_a_click_on_header_cells', '650', '100')}}

> [!NOTE]
> 使いやすく、アクセシビリティを確保するためには、並べ替え可能なそれぞれの列の見出しセルが並べ替えボタンとして識別可能である必要があり、また、その列が現在昇順で並べ替えられているか降順で並べ替えられているかを、視覚的に、および [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) 属性によって明確に定義する必要があります。情報については、[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) の [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) をご覧ください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("td")}} 要素または {{HTMLElement("th")}} 要素。 {{Glossary("script-supporting element", "スクリプト対応要素")}} ({{HTMLElement("script")}} および {{HTMLElement("template")}}) も許可されています。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。 <code>&lt;tr&gt;</code> 要素の直後に <code>&lt;tr&gt;</code> 要素がある場合、または親の表グループ要素 ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}) 内で最後の要素である場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素 (子の {{HTMLElement("tbody")}} を持たない場合で、 {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}} の各要素より後に限る)、 {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} の各要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/row_role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) `<tr>` を含む、表の使用について説明します。
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: その他の表関連要素
- {{cssxref("background-color")}}: 行の各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: 行のセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: 行の各セルの内容を水平方向に位置ぞろえするための CSS プロパティ
- {{cssxref("vertical-align")}}: 行の各セルの内容を垂直方向に位置ぞろえするための CSS プロパティ
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: 目的の行のセルを選択するための CSS 擬似クラス
