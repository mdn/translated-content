---
title: HTML `<thead>` 表ヘッダー要素
short-title: <thead>
slug: Web/HTML/Reference/Elements/thead
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

**`<thead>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の一連の行（{{HTMLElement("tr")}} 要素）をカプセル化し、それらが表の列に関する情報を含む表のフッターを構成していることを示します。これは通常、列見出し（{{HTMLElement("th")}} 要素）の形を採ります。

{{InteractiveExample("HTML デモ: &lt;thead&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    2018 年の議会の予算 (£)
  </caption>
  <thead>
    <tr>
      <th scope="col">商品</th>
      <th scope="col">支出</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ドーナッツ</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">文具</th>
      <td>18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">合計</th>
      <td>21,000</td>
    </tr>
  </tfoot>
</table>
```

```css interactive-example
thead,
tfoot {
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
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

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: center;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、以下に文書化しています。

- `align` {{deprecated_inline}}
  - : ヘッダー内の各セルの水平方向の配置を指定します。指定可能な値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `bgcolor` {{deprecated_inline}} {{non-standard_inline}}
  - : ヘッダー内の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に `#` が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 何もしません。もともとは、ヘッダーの各セルのコンテンツをある文字へ整列することを指定するためのものでした。[`align`](#align) が `char` に設定されていない場合、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : 何もしません。ヘッダー内のセルのコンテンツを、[`char`](#char) 属性で指定された配置文字からオフセットする文字数を指定するためのものでした。
- `valign` {{deprecated_inline}}
  - : ヘッダーの各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 使用上のメモ

- `<thead>` は、{{HTMLElement("caption")}} および {{HTMLElement("colgroup")}} の各要素の後、{{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tr")}} の各要素の前に配置されます。
- 関連する {{HTMLElement("tbody")}} および {{HTMLElement("tfoot")}} 要素と共に、`<thead>` 要素は有用な{{Glossary("semantics", "意味的")}}情報を提供し、画面表示と印刷のどちらの場合にも使用できます。このような表のコンテンツグループを指定することは、スクリーンリーダーや検索エンジンを含む支援技術に対して、貴重な文脈情報を提供することに同時になります。
- 文書を印刷する際、複数ページにわたる表の場合、表のヘッダーは通常、それぞれのページで変わらない情報を指定します。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

### 基本的なヘッダー構造

この例では、列見出しを含むヘッダー部分、表の主要なデータを含む本体部分、および 1 つの列のデータを要約したフッター部分に分かれた表を示しています。

#### HTML

`<thead>` および {{HTMLElement("tbody")}} 要素は、表の行の構造を{{Glossary("semantics", "意味的な")}}セクションに分割します。`<thead>` 要素は、表のヘッダーセクションを表しており、そこには列の見出しセル ({{HTMLElement("th")}}) の行 ({{HTMLElement("tr")}}) が含まれています。

```html
<table>
  <thead>
    <tr>
      <th>学生 ID</th>
      <th>名前</th>
      <th>専攻</th>
      <th>クレジット</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>コンピューター科学</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>ロシア文学</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>天体物理学</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### CSS

基本的な CSS を用いて、表のヘッダーにスタイルを設定し、強調表示することで、ヘッダーのセルが表本体のデータから目立つようにしています。

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
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

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Basic_head_structure", 650, 140)}}

### 複数のヘッダー行

This example demonstrates a table head section with two rows.

#### HTML

We extend the markup the table from the [basic example](#basic_head_structure) in this example by including two table rows ({{HTMLElement("tr")}}) within the `<thead>` element creating a multi-row table head. We included an additional column, splitting the student names into first and last names.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">学生 ID</th>
      <th colspan="2">学生</th>
      <th rowspan="2">専攻</th>
      <th rowspan="2">クレジット</th>
    </tr>
    <tr>
      <th>名前</th>
      <th>苗字</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>コンピューター科学</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>ロシア文学</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>天体物理学</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### セルをまたがらせる

見出しセルを正しい列や行に関連付け配置するために、[`colspan`](/ja/docs/Web/HTML/Reference/Elements/th#colspan) および [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/th#rowspan) 属性を {{HTMLElement("th")}} 要素に対して使用しています。この属性に設定された値は、それぞれの見出しセル ({{HTMLElement("th")}}) がいくつ分のセルにまたがるかを指定します。これらの属性の設定方法により、2 行目の 2 つの見出しセルは、それらが先頭にある列と揃えられています。これらはそれぞれ 1 行と 1 列にまたがっており、これは [`colspan`](/ja/docs/Web/HTML/Reference/Elements/th#colspan) および [`rowspan`](/ja/docs/Web/HTML/Reference/Elements/th#rowspan) 属性のデフォルト値がどちらも `1` であるためです。

この例で示した列および行の結合は、次の図に示されています。

  ![表のセルの列および行にわたる配置を示す図。セル 1、3、4 は 2行にわたって配置され、セル 2 は 2 列にわたって配置され、セル 5 と 6 は 2 行目の 2 列目と 3 列目にあたる利用できる空きセルに収まっています](column-row-span.png)

#### CSS

CSS は[前回の例](#基本的なヘッダー構造)と変わりません。

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Multiple_head_rows", 650, 180)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>0 個以上の {{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。<code>&lt;thead&gt;</code> 要素の直後に {{HTMLElement("tbody")}} 要素または {{HTMLElement("tfoot")}} 要素がある場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。<code>&lt;thead&gt;</code> は（暗黙的に定義されるものであっても） {{HTMLElement("caption")}} 要素や {{HTMLElement("colgroup")}} 要素の後方かつ {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("tr")}} の各要素の前方に配置しなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role"
            >rowgroup</a
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
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: その他の表関係の要素
- {{cssxref("background-color")}}: ヘッダーの各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: ヘッダーのセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: ヘッダーの各セルの水平方向の配置を設定する CSS プロパティ
- {{cssxref("vertical-align")}}: ヘッダーの各セルの垂直方向の配置を設定する CSS プロパティ
