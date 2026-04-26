---
title: HTML `<td>` 表データセル要素
short-title: <td>
slug: Web/HTML/Reference/Elements/td
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<td>`** は [HTML](/ja/docs/Web/HTML) の要素で、データを含む表のセルを定義するもので、{{HTMLElement("tr")}} 要素の子要素として使用できます。

{{InteractiveExample("HTML デモ: &lt;td&gt;", "tabbed-taller")}}

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

- `colspan`
  - : この属性はセルをいくつの列に広げるかを示す、負でない整数を持ちます。既定値は `1` です。1000 を超える値は正しくないとみなされ、既定値 (`1`) が設定されるでしょう。
- `headers`
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各々の文字列は、この要素に当てはめる {{HTMLElement("th")}} 要素の `id` 属性に対応します。
- `rowspan`
  - : この属性はセルをいくつの行に広げるかを示す、負でない整数を持ちます。既定値は `1` です。`0` を設定した場合は、セルが属する表グループ化区間 ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}) の終端 (暗黙的に定義されるものであっても) まで拡張します。`65534` より大きな値は、`65534` に切り詰めます。

### 非推奨の属性

以下の属性は非推奨となっているため、使用しないでください。これらは、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、下記に記載されています。

- `abbr` {{deprecated_inline}}
  - : データセルのコンテンツに関する短い要約を記述します。音声読み上げソフトなどの一部のユーザーエージェントは、コンテンツ本体の前にこの要約を表示する場合があります。要約はセル内に記述し、詳しい説明は [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性に記述してください。なお、この属性は非推奨となっています。できれば、内容をデータセル内に含むようにし、CSS を使用して[あふれたテキストを視覚的に切り取る](/ja/docs/Web/CSS/Reference/Properties/text-overflow)ようにしてください。

- `align` {{deprecated_inline}}
  - : データセルの水平方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `axis` {{deprecated_inline}}
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各文字列は、このヘッダーを適用するセルグループの `id` です。
- `bgcolor` {{deprecated_inline}}
  - : この属性は、列の各セルの背景色を定義します。値は [6 桁の 16 進数による RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)で、先頭に '`#`' が付きます。定義済みの[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)の一つを使うこともできます。 その他の CSS {{cssxref("&lt;color&gt;")}} 値は対応していません。この属性は非推奨となっているため、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 何の効果もありません。元々は、コンテンツをデータセルの文字に対して配置することを指定するためのものでした。典型的な値に、数値や金額を揃えようとするときのピリオド (`.`) があります。 [`align`](#align) 属性が `char` に設定されていない場合、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : 何の効果もありません。本来は、[`char`](#char) 属性で指定された配置文字から、データセルのコンテンツをオフセットする文字数を指定するためのものでした。
- `height` {{deprecated_inline}}
  - : 推奨されるデータセルの高さを定義します。代わりに CSS の {{cssxref("height")}} プロパティを使用してください。
- `scope` {{deprecated_inline}}
  - : ヘッダー（{{HTMLElement("th")}}で定義された要素）が関連するセルを指定します。利用可能な値は `row`、`col`、`rowgroup`、`colgroup` のいずれかです。この属性は、{{HTMLElement("th")}} 要素に対してのみ使用し、その要素がヘッダーとなる行または列を定義してください。なお、`<td>` 要素に対しては、この属性は非推奨となっています。
- `valign` {{deprecated_inline}}
  - : データセルの垂直方向の配置を指定します。指定可能な値は `baseline`、`bottom`、`middle`、および `top` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

- `width` {{deprecated_inline}}
  - : セルの推奨される幅を定義します。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 使用上のメモ

- `<td>` は、{{HTMLElement("tr")}} 要素内でのみ使用できます。
- [`colspan`](#colspan) および [`rowspan`](#rowspan) 属性を使用してデータセルを複数の列や行にまたがって配置する場合、これらの属性が定義されていないセル（デフォルト値は `1`）は、次の図に示すように、テーブル構造内の 1x1 セル分の余白に自動的に配置されます。

  ![表のセルの列および行にわたる配置を示す図：セル 1、3、4 は 2 行にわたって配置され、セル 2 は 2 列にわたって配置され、セル 5 と 6 は 2 行目の 2 列目と 3 列目にあたる利用できる空きセルに収まっています](/shared-assets/images/diagrams/html/table/column-row-span.png)

  > [!NOTE]
  > これらの属性は、セルを重ね合わせるために使用することはできません。

## 例

`<td>` 要素の例については、 {{HTMLElement("table")}} を参照してください。

### 基本データセル

この例では、`<td>`要素やその他の表関連要素を用いて、発音記号に関するデータを記載した基本的な表を紹介しています。

#### HTML

表の数行（{{HTMLElement("tr")}} 要素）には、見出しセル（{{HTMLElement("th")}} 要素）とデータセル（`<td>` 要素）の両方が含まれています。各行の最初の子要素である {{HTMLElement("th")}} 要素は、表の最初の列を形成し、それぞれの `<th>` 要素はその行内のデータセルに対する行ヘッダーを提供します。対応する各 `<td>` 要素には、それぞれの列ヘッダーおよび行ヘッダーセルに合わせて配置されたデータが含まれています。

> [!NOTE]
> 通常、列の情報を理解しやすくするために、列見出しを含む表のヘッダーグループを実装します。{{HTMLElement("thead")}} および {{HTMLElement("tbody")}} 要素を使用することで、見出し行とデータ行をそれぞれ表のヘッダー部分と本体部分にグループ化します。この例では、データセルに焦点を当て、例を簡潔にするために、これらを実装していません。

```html
<table>
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
</table>
```

#### CSS

表とそのセルのスタイル設定には、基本的な CSS が使用されています。CSS の[属性セレクタ](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)と {{cssxref(":nth-of-type")}} 擬似クラスを使用して、セルの見た目を交互に変えることで、表内の情報をより理解しやすく、識別しやすくしています。

```css
td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### 結果

{{EmbedLiveSample("Basic_data_cells", 650, 140)}}

### 列と行をまたがる

この例では、[前の例](#基本データセル)の基本表に "ABC" というセルを追加することで、機能を拡張・強化しています。

#### HTML

追加のデータセル（`<td>` 要素）を、1 行目（{{HTMLElement("tr")}}要素）の中に挿入しています。これにより、表に 4 列目が作成されます。

[`rowspan`](#rowspan) 属性を使用することで、"ABC" というセルは表の最初の 3 行にまたがっています。続く行の最後のデータセルは、それぞれ 2 列にまたがっています。これは [`colspan`](#colspan) 属性を使用して行われ、テーブル構造内で正しく配置されています。なお、これを示すために、テーブルに追加の行（{{HTMLElement("tr")}} 要素）が追加されている点にご注意ください。

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td rowspan="3">ABC</td>
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
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### CSS

CSS では、{{cssxref(":first-of-type")}} および {{cssxref(":last-of-type")}} 擬似クラスを使用して、追加された "ABC" データセルを選択し、スタイルを設定します。

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: white;
  font-weight: bold;
  text-align: center;
}

td,
th {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
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
```

#### 結果

{{EmbedLiveSample("Column_and_row_spanning", 650, 170)}}

### データセルと見出しセルの関連付け

データセル（`<td>` 要素）と見出しセル（{{HTMLElement("th")}} 要素）との間のより複雑な関係については、{{HTMLElement("th")}} 要素に [`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope) 属性に指定するだけでは、支援技術、特にスクリーンリーダーにとって不十分な場合があります。

#### HTML

[前の例](#列と行をまたがる)の{{Glossary("accessibility", "アクセシビリティ")}}を向上させ、例えばスクリーンリーダーが各データセルに関連付けられた見出しを音声で読み上げられるようにするには、[`headers`](#headers) 属性を [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性とともに導入することで実現できます。"ABC" というデータセルに関連付けられたそれぞれの行の見出しセル（{{HTMLElement("th")}} 要素）、すなわち文字 "A"、"B"、"C" には、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性によって一意の識別子が指定されます。そして、"ABC" のデータセル（`<td>` 要素）は、[`headers`](#headers) 属性に対して、これらの `id` 値を空白区切りのリストとして指定します。

> [!NOTE]
> [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性には、より具体的で有用な値を使用することをお勧めします。文書内のそれぞれの `id` は、その文書内で一意である必要があります。この例では、[`headers`](#headers) 属性の概念に焦点を当てているため、`id` の値は単一の文字になっています。

```html
<table>
  <tr>
    <th id="a" scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td headers="a b c" rowspan="3">ABC</td>
  </tr>
  <tr>
    <th id="b" scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th id="c" scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

#### 結果

[表示結果](#結果_2)は[前回の例の表](#列と行をまたがる)と変わりませんが、それぞれのデータセル (`<td>`) は、その行見出しセル (`<th>`) と明示的に関連付けられるようになりました。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>区分化ルート</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。<br />直後に {{HTMLElement("th")}} 要素または <code>&lt;td&gt;</code> 要素がある場合、または親要素内で以降のデータがない場合は終了タグが省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role"
            >cell</a
          ></code
        >（{{HTMLElement("table")}} 要素の子孫である場合）、または <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role"
            >gridcell</a
          ></code
        >
        （<code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role"
            >grid</a
          ></code
        > ロールを持つ要素の子孫である場合）
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関連要素
- {{cssxref("background-color")}}: 各データセルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: データセルの境界を制御する CSS プロパティ
- {{cssxref("height")}}: データセルの推奨される高さを制御する CSS プロパティ
- {{cssxref("text-align")}}: 各データセルの内容を水平方向に位置ぞろえするための CSS プロパティ
- {{cssxref("vertical-align")}}: 各データセルの内容を垂直方向に位置ぞろえするための CSS プロパティ
- {{cssxref("width")}}: データセルの推奨される幅を制御する CSS プロパティ
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: 目的のデータセルを選択するための CSS 擬似クラス
