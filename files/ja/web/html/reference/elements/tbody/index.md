---
title: HTML `<tbody>` テーブル本体要素
short-title: <tbody>
slug: Web/HTML/Reference/Elements/tbody
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

**`<tbody>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の一連の行（{{HTMLElement("tr")}} 要素）を内包し、その部分が表の本体部分を構成することを表します。

{{InteractiveExample("HTML デモ: &lt;tbody&gt;", "tabbed-taller")}}

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
  - : 本体内の各セルの水平方向の配置を指定します。指定可能な値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `bgcolor` {{deprecated_inline}} {{non-standard_inline}}
  - : 本体内の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 本体の各セルのコンテンツをある文字へ整列することを指定します。よく使用する値としては、数値や金額を揃えるときのピリオド (`.`) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : 本体内のセルのコンテンツを、[`char`](#char) 属性で指定された配置文字からオフセットする文字数を指定するためのものです。
- `valign` {{deprecated_inline}}
  - : 本体の各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 使用上のメモ

- `<tbody>` は、{{HTMLElement("caption")}}、{{HTMLElement("colgroup")}}、{{HTMLElement("thead")}} の各要素の後に配置されます。
- {{HTMLElement("tr")}} 要素が {{HTMLElement("table")}} の直接の子要素として指定されている場合（これが有効となる条件については、[技術的概要](#技術的概要)の「タグの省略」を参照してください）、ブラウザー によって生成されるマークアップには、それらをカプセル化する `<tbody>` 要素が含まれます。その結果、`table > tr` などの CSS セレクターでは、これらの要素を選択できません。また、[本体を指定しない場合](#本体を指定しない)の例も参照してください。
- 1 つの表内で、すべて連続している限り、複数の `<tbody>` を使用することが可能です。これにより、大きな表内の行（{{HTMLElement("tr")}} 要素）をセクションに分割することができ、必要に応じてそれぞれの節を別個に書式化することができます。連続した要素としてマークアップされていない場合、ブラウザーはこの作成者のミスを修正し、{{HTMLElement("thead")}} 要素と {{HTMLElement("tfoot")}} 要素が、それぞれ表の最初と最後の要素として確実にレンダリングされるようにします。
- 関連する {{HTMLElement("thead")}} および {{HTMLElement("tfoot")}} 要素と共に、`<tbody>` 要素は有用な{{Glossary("semantics", "意味的")}}情報を提供し、画面表示と印刷のどちらの場合にも使用できます。このような表のコンテンツグループを指定することは、スクリーンリーダーや検索エンジンを含む支援技術に対して、貴重な文脈情報を提供することに同時になります。
- 文書を表示する場合、複数ページにわたる表では、通常、{{HTMLElement("thead")}} および {{htmlelement("tfoot")}} 要素は、それぞれのページで同じ、あるいは少なくともとてもよく似た情報を指定しますが、`<tbody>` 要素のコンテンツは、一般的にページごとに異なります。
- 表全体を表示させるのに十分な大きさのない画面コンテキスト（ウィンドウなど）で表が表示された場合、{{Glossary("user agent", "ユーザーエージェント")}}は、ユーザーが {{HTMLElement("thead")}}、 `<tbody>`、{{htmlelement("tfoot")}}、{{HTMLElement("caption")}} の各ブロックを、同じ親要素の {{htmlelement("table")}} に対して、別個にスクロールできるようにする場合があります。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

### 本体を指定しない

この例は、行がテーブルのグループ化要素（`<tbody>`、`<tfoot>`、`<thead>`）内に含まれておらず、この例のように {{HTMLElement("table")}} 要素の直接の子要素である場合、ブラウザーが自動的に {{HTMLElement("tr")}} 要素を `<tbody>` 要素で囲む様子を示しています。

#### HTML

ここでは、いくつかの表の行（{{HTMLElement("tr")}} 要素）と、その中にデータ（{{HTMLElement("td")}} 要素）が含まれている、とても基本的な表を作成します。

```html
<table>
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
</table>
```

#### CSS

この例の CSS に注目すると、ここでは、{{cssxref("background-color")}} が `<tbody>` 要素に対して指定されており、`tbody` が追加の {{Glossary("css_selector", "CSS セレクター")}}の一部として使用されています。あるいは、{{Glossary("developer_tools", "ブラウザーの開発者ツール")}}を使用して、`<tbody>` 要素が {{Glossary("dom", "DOM")}} 内に存在するか確認することもできます。

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  width: 60px;
  text-align: center;
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

td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### 結果

{{EmbedLiveSample("Not_specifying_a_body", 650, 100)}}

### 基本的な本体構造

この例は、[前の例](#本体を指定しない)の基本となる表を拡張し、機能を強化したものです。

#### HTML

表のヘッダー（{{HTMLElement("thead")}} 要素）を導入し、`<tbody>` 要素を明示的に使用して、表を{{Glossary("semantics", "意味的な")}}セクションに分割します。表のヘッダーには、列見出し（{{HTMLElement("th")}} 要素）が含まれます。`<tbody>` 要素は表の本体セクションを表しており、それぞれの学生のデータである表の主要なデータを含む複数の行（{{HTMLElement("tr")}} 要素）が含まれています。

このような表のコンテンツグループや{{Glossary("semantics", "意味的な")}}マークアップの使用は、視覚的な表示（CSS によるスタイル設定）や支援技術向けのコンテキスト情報として役立つだけでなく、`<tbody>` 要素を明示的に使用することで、ブラウザーが意図した表の構造を正しく生成できるようになり、望ましくない結果を避けることができます。

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

CSSは、[前の例](#本体を指定しない)とほぼ同じですが、表の見出しを強調し、列見出しが表本体のデータから目立つようにするための基本的なスタイル設定がいくつか追加されています。[前の例](#本体を指定しない)と同様に、`tbody` [要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)を使用して、表本体のセルにスタイルを適用しています。

```css
tbody {
  background-color: #e4f0f5;
}

tbody > tr > td:last-of-type {
  text-align: center;
}

thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: white;
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

{{EmbedLiveSample("Basic_body_structure", 650, 140)}}

### 複数の本体

この例では、複数の本文セクションを導入することで、[前の例](#基本的な本体構造)の表をさらに拡張・強化しています。

複数の `<tbody>` 要素を使用することで、表内の複数のセクションを作成することができます。それぞれに独自のヘッダー行がある場合もありますが、{{HTMLElement("thead")}} は表 1 つあたり 1 つしか置けません！。そのため、それぞれの `<tbody>` にヘッダーを作成するには、{{HTMLElement("th")}} 要素で埋められた {{HTMLElement("tr")}} を使用する必要があります。どのようにするかを見てみましょう。

#### HTML

[前の基本的な例](#基本的な本体構造)の表を基に、学生を追加し、各行に学生ごとの専攻が掲載されているのではなく、専攻ごとに学生をグループ分けしています。それぞれの専攻は独自の `<tbody>` ブロックで囲まれており、1 行目（{{HTMLElement("tr")}} 要素）がブロックの見出しとして機能し、[`colspan`](/ja/docs/Web/HTML/Reference/Elements/th#colspan) 属性を使用して、ヘッダーをテーブルの 3 列すべてにまたがらせています。それぞれの専攻の `<tbody>` 内の残りの各行は、1 人の学生を表します。

```html
<table>
  <thead>
    <tr>
      <th>学生 ID</th>
      <th>名前</th>
      <th>クレジット</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">コンピューター科学</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>240</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
      <td>200</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
      <td>230</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">ロシア文学</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>220</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="3">天体物理学</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>260</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
      <td>240</td>
    </tr>
  </tbody>
</table>
```

#### CSS

CSS のほとんどは変更ありません。しかし、（{{HTMLElement("thead")}} に含まれるものではなく） `<tbody>` に直接含まれるヘッダーセルに対して、若干のスタイルを追加しましょう。これはそれぞれの専攻を示すヘッダーに使われます。

```css
tbody > tr > th {
  border-top: 2px solid rgb(160 160 160);
  border-bottom: 1px solid rgb(140 140 140);
  background-color: #e4f0f5;
  font-weight: normal;
}

tbody {
  background-color: whitesmoke;
}

thead {
  background-color: #2c5e77;
  color: white;
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
  padding: 6px 8px;
  text-align: left;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Multiple_bodies", 650, 300)}}

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
        <code>&lt;tbody&gt;</code> 要素の開始タグは、<code>&lt;tbody&gt;</code> 要素の中の最初のものが {{HTMLElement("tr")}} 要素であり、その要素の直前に終了タグが省略された <code>&lt;tbody&gt;</code> 要素、{{HTMLElement("thead")}} 要素、{{HTMLElement("tfoot")}} 要素がない場合、省略できます。（空要素の場合は省略できません。）
        <code>&lt;tbody&gt;</code> 要素の終了タグは、<code>&lt;tbody&gt;</code> 要素の直後に <code>&lt;tbody&gt;</code> 要素または {{HTMLElement("tfoot")}} 要素が続く場合、または親要素にまだコンテンツがない場合に省略できます。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。 <code>&lt;tbody&gt;</code> 要素は
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}} の各要素の後に配置することができます。
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
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関係の要素
- {{cssxref("background-color")}}: 本体の各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: 本体のセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: 本体の各セルの水平方向の配置を設定する CSS プロパティ
- {{cssxref("vertical-align")}}: 本体の各セルの垂直方向の配置を設定する CSS プロパティ
