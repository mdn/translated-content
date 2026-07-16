---
title: HTML `<tfoot>` 表フッター要素
short-title: <tfoot>
slug: Web/HTML/Reference/Elements/tfoot
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

**`<tfoot>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の一連の行（{{HTMLElement("tr")}} 要素）をカプセル化し、それらが表の列に関する情報を含む表のフッターを構成していることを示します。これは通常、その列の総括であり、例えば、ある列の数値の合計などです。

{{InteractiveExample("HTML デモ: &lt;tfoot&gt;", "tabbed-taller")}}

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
  - : フッター内の各セルの水平方向の配置を指定します。指定可能な値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `bgcolor` {{deprecated_inline}} {{non-standard_inline}}
  - : フッター内の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 何もしません。もともとは、フッターの各セルのコンテンツをある文字へ整列することを指定するためのものでした。よく使用する値としては、数値や金額を揃えるときのピリオド (`.`) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : 何もしません。フッター内のセルのコンテンツを、[`char`](#char) 属性で指定された配置文字からオフセットする文字数を指定するためのものでした。
- `valign` {{deprecated_inline}}
  - : フッターの各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 使用上のメモ

- `<tfoot>` は、{{HTMLElement("caption")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tr")}} の各要素の後に配置されます。
- 関連する {{HTMLElement("thead")}} および {{HTMLElement("tbody")}} 要素と共に、`<tfoot>` 要素は有用な{{Glossary("semantics", "意味的")}}情報を提供し、画面表示と印刷のどちらの場合にも使用できます。このような表のコンテンツグループを指定することは、スクリーンリーダーや検索エンジンを含む支援技術に対して、貴重な文脈情報を提供することに同時になります。
- 文書を印刷する際、複数ページにわたる表の場合、表のフッターは通常、それぞれのページに中間概要として表示される情報を指定します。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

### フッター付きの表

この例では、列見出しを含むヘッダー部分、表の主要なデータを含む本体部分、および 1 つの列のデータを要約したフッター部分に分かれた表を示しています。

#### HTML

{{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、`<tfoot>` 要素は、基本的な表を {{Glossary("semantics", "意味的な")}}セクションに分割します。`<tfoot>` 要素は、表のフッターセクションを表しており、そこには「クレジット」列の値の計算された平均を表す行 ({{HTMLElement("tr")}}) が含まれています。

フッターのセルを正しい列に配置するために、[`colspan`](/ja/docs/Web/HTML/Reference/Elements/th#colspan) 属性を {{HTMLElement("th")}} 要素に対して使用し、行見出しセルをテーブルの最初の 3 列にまたがるようにしています。フッターにある単一のデータセル ({{HTMLElement("td")}}) は、[`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性の値が省略されるとデフォルトで `1` となるため、自動的に正しい場所、つまり 4 列目に配置されます。さらに、フッターにある見出しセル ({{HTMLElement("th")}}) には [`scope`](/ja/docs/Web/HTML/Reference/Elements/th#scope) 属性が `row` に設定されており、このフッターの見出しセルが同じ行内のテーブルセルに関連することを明示的に定義しています。この例では、フッター行にある計算された平均値を含む 1 つのデータセルが該当します。

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
  <tfoot>
    <tr>
      <th colspan="3" scope="row">平均クレジット</th>
      <td>240</td>
    </tr>
  </tfoot>
</table>
```

#### CSS

基本的な CSS を用いて、表のフッターにスタイルを設定し、強調表示することで、フッターのセルが表本体のデータから目立つようにしています。

```css
tfoot {
  border-top: 3px dotted rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
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

tr > td:last-of-type {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Example", 650, 180)}}

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
      <td>0 個以上の {{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。親 {{HTMLElement("table")}} 要素内に以降のコンテンツがない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。{{HTMLElement("tfoot")}} はすべての {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tr")}} の各要素の後に配置しなければなりません。これは HTML での要件です。<br />
        HTML4 では、<code>&lt;tfoot&gt;</code> 要素は {{HTMLElement("tbody")}} 要素および {{HTMLElement("tr")}} 要素の後方に配置してはなりませんでした。
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関係の要素
- {{cssxref("background-color")}}: フッターの各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: フッターのセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: フッターの各セルの水平方向の配置を設定する CSS プロパティ
- {{cssxref("vertical-align")}}: フッターの各セルの垂直方向の配置を設定する CSS プロパティ
