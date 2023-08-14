---
title: "<tr>: 表の行要素"
slug: Web/HTML/Element/tr
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}

**`<tr>`** は [HTML](/ja/docs/Web/HTML) の要素で、表内でセルの行を定義します。行のセルには {{HTMLElement("td")}} （データセル）および {{HTMLElement("th")}} （見出しセル）要素をを混在させることができます。

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

セルをどのように列に収める（または列にまたがる）かを制御できるようにするため、`<th>` および `<td>` で [`colspan`](/ja/docs/Web/HTML/Element/td#colspan) 属性をサポートします。これはセルの幅をいくつの列にするかを指定でき、既定値は 1 です。同様に、セルが複数の行にまたがることを示す [`rowspan`](/ja/docs/Web/HTML/Element/td#rowspan) 属性も使用できます。

表を作成するとき、正しい表にするために少し経験が必要かもしれません。以下にいくつか[例](#例)がありますが、さらに多くの例や詳しいチュートリアルは、[ウェブ開発を学ぶ](/ja/docs/Learn)領域の [HTML 表](/ja/docs/Learn/HTML/Tables)シリーズをご覧ください。表形式のデータを正しいレイアウトに整形するため、 table 要素やその属性の使い方を学ぶことができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。使用を避けるべき[非推奨の属性](#非推奨の属性)もいくつかありますが、古いコードを読む際は知っている必要があるでしょう。

### 非推奨の属性

以下の属性はまだブラウザーが実装していますが、すでに HTML 仕様に含まれていませんのでまったく動作しない、あるいは期待どおりに動作しない可能性があります。使用は避けてください。

- `align` {{deprecated_inline}}

  - : 文字列で、行の各セルの中身について、水平方向の配置方法を指定します。これは行内の全セルで個別に `align` を使用することに対する一括指定です。以下の値を指定可能です。

    - `left`
      - : 各セルの中身を左側に揃えます。
    - `center`
      - : 中身をセルの左端と右端の間で中央揃えにします。
    - `right`
      - : 各セルの中身を右側に揃えます。
    - `justify`
      - : テキストが各セルの幅全体を満たす（両端揃え）ように、テキスト内のホワイトスペースを広げます。
    - `char`
      - : 行内の各セルを、特定の文字に対して揃えます (この方法で設定された列内の各行は、その文字に対して揃えます)。これは [`char`](#char) および [`charoff`](#charoff) を使用して、揃える文字 (数値データを揃える際の "." や "," が一般的です) および揃える文字に続く文字の数を指定します。この配置方法は、広くは対応されていませんでした。

    `align` の値が明示的に設定されていない場合は、親ノードの値を継承します。

    > **メモ:** 行内のセルで配置方法を指定するには、廃止された `align` 属性の代わりに CSS の {{CSSxRef("text-align")}} プロパティで `left`, `center`, `right`, `justify` を指定してください。文字ベースの配置方法を適用するには、 CSS の {{CSSxRef("text-align")}} プロパティに揃える文字 (`"."` や `","` など) を設定してください。

- `bgcolor` {{deprecated_inline}}

  - : 文字列で、行の各セルの背景色を定義します。値は [16 進 `#RRGGBB` または `#RGB` 値](/ja/docs/Web/CSS/color_value/rgb)、あるいは[色キーワード](/ja/docs/Web/CSS/named-color)を使用できます。属性を省略するか JavaScript で `null` を設定すると、行のセルは親要素の背景色を継承します。

    > **メモ:** {{HTMLElement("tr")}} 要素は [CSS](/ja/docs/Web/CSS) を使用してスタイルを設定するべきです。 `bgcolor` 属性と同様の効果を与えるには、CSS の {{CSSxRef("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}

  - : 文字列で、行のそれぞれの列のセルで揃える文字を設定します（同一の文字を使用して、それぞれの行の中心がほかの行と揃えられます）。典型的な値に、数値や金額を揃えようとするときのピリオド (`"."`) やカンマ (`","`) があります。 [`align`](#align) 属性が `char` ではない場合は、この属性は無視されます。

    > **メモ:** この属性は廃止され、かつほとんど実装されていませんでした。 [`char`](#char) と同様の効果を得るには、 CSS の {{CSSxRef("text-align")}} プロパティの値として `char` の値を使用します（例えば `text-align: "."`）。

- `charoff` {{deprecated_inline}}

  - : 文字列で、 `char` 属性で指定した揃え文字から行のデータをオフセットする文字数を示します。例えば通貨単位の 100 分の 1 の値を使用する通貨 (例えばドルであり、100 セントに分割されます) の金額を表示するときは、一般的に値 2 を指定するでしょう。 `char` に `"."` を設定することと組み合わせると、列内の値が小数点できれいに揃い、セントの数値が小数点の右側へ適切に表示されます。

    > **メモ:** この属性は廃止されただけでなく、ほとんど実装されていませんでした。

- `valign` {{deprecated_inline}}

  - : 文字列で、行の各セルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`
      - : 異なるフォントやフォントサイズの文字列を、その行で使用されているフォントの[ベースライン](https://en.wikipedia.org/wiki/Baseline)に沿って整列させることによって処理します。もし行の全ての文字が同じサイズであれば、効果は `bottom` と同じになります。
    - `bottom`
      - : 行の各セル内のテキストを、セルの下辺に可能な限り近づけて描画します。
    - `middle`
      - : 各セルのテキストは垂直方向の中央に配置されます。
    - `top`
      - : 各セルのテキストは、含まれるセルの上端に可能な限り沿って描画されます。

    > **メモ:** `valign` 属性は廃止されたため、使用しないでください。代わりに CSS の {{CSSxRef("vertical-align")}} プロパティを使用してください。

## 例

`<tr>` 要素の使用例については、 {{HTMLElement("table")}} を参照してください。

### 基本的な例

これは、人名とクラブまたはサービスのさまざまな会員情報を載せる表を表示する簡単な例です。

#### HTML

この HTML は、表のもっとも基本的な構造を示します。グループ、複数の行や列にまたがるセル、タイトルはなく、明確に似ているもののために表の構成要素の周りに線を生成する、もっとも基本的なスタイルだけがあります。

表には 4 列（1 列の見出しを含む）があるの行が 4 行（1 行の見出しを含む）があります。表セクション要素は使用していません。代わりに、ブラウザーはそれらを自動的に定義できます。この次の例では {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} を追加します。

```html
<table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Member Since</th>
    <th>Balance</th>
  </tr>
  <tr>
    <td>Margaret Nguyen</td>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Edvard Galinski</td>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <td>Hoshi Nakamura</td>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

#### CSS

このシンプルな CSS は表とセルの周りに黒い実線の境界線を追加するものであり、セルは {{HTMLElement("th")}} と {{HTMLElement("td")}} の両方を使用して指定します。このようにして、見出しセルとデータセルが簡単に区別できます。

```css
table {
  border: 1px solid black;
}

th,
td {
  border: 1px solid black;
}
```

#### 結果

{{EmbedLiveSample("Basic_example", 500, 125)}}

### 行や列をつなげる

次に、ユーザーの有効期限のデータを表示する列を追加しましょう。また、 "joined" と "canceled" のデータの上に、 "Membership Dates" という大見出しも追加します。これは行や列をまたぐセルを表に追加するということであり、見出しのセルを正しい位置に置くことができます。

#### 結果

始めに、実際の表示結果を見ましょう。

{{EmbedLiveSample("Row_and_column_spanning", 500, 150)}}

見出し領域が実際は 2 行あることに注目してください。ひとつは "Name", "ID", "Membership Dates", "Balance" の見出し、もうひとつは "Joined" と "Canceled" であり、これは "Membership Dates" の小見出しです。これは以下のようにして実現します。

- 1 行目の "Name", "ID", "Balance" の見出しセルは、[`rowspan`](#rowspan) 属性を使用して 2 行にまたがっており、それぞれのセルの高さが 2 行分になります。
- 1 行目の "Membership Dates" の見出しセルは、[`colspan`](#colspan) 属性を使用して 2 列にまたがっており、実際に見出しの幅が 2 列分になります。
- 2 行目の {{HTMLElement("th")}} 要素は、"Joined" と "Canceled" しかありません。ほかの列は 2 行目にまたがっている 1 行目のセルがすでに占有しているためであり、 2 行目のセルは "Membership Dates" の下へ適切に配置されます。

#### HTML

HTML は前の例に似ていますが、それぞれのデータ行に新しい列を追加したことと、見出しを変更したことが異なります。変更した HTML は以下のようになります。

```html
<table>
  <tr>
    <th rowspan="2">Name</th>
    <th rowspan="2">ID</th>
    <th colspan="2">Membership Dates</th>
    <th rowspan="2">Balance</th>
  </tr>
  <tr>
    <th>Joined</th>
    <th>Canceled</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>n/a</td>
    <td>0.00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td><time datetime="2017-04-08">April 8, 2017</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>n/a</td>
    <td>15.00</td>
  </tr>
</table>
```

(行や列をまたぐことを論じるために) ここで重要な部分は、コードの最初の数行です。 "Name", "ID", "Balance" の見出しで `rowspan` を使用して 2 行を占めていることと、 "Membership Dates" の見出しで `colspan` を使用して 2 列を占めていることに注意してください。

CSS は変更していません。

```css hidden
table {
  border: 1px solid black;
}

th,
td {
  border: 1px solid black;
}
```

### 表の内容のグループを明示する

この表にスタイルを設定する前に、 CSS を簡単にするために行や列のグループを追加する時間をとりましょう。

#### HTML

この作業を行う場所は HTML であり、また作業はとても単純です。

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

(行や列をまたぐことを論じるために) ここで重要な部分は、コードの最初の数行です。 "Name", "ID", "Balance" の見出しで `rowspan` を使用して 2 行を占めていることと、 "Membership Dates" の見出しで `colspan` を使用して 2 列を占めていることに注意してください。

ここでも、 CSS は変更しません。

```css hidden
table {
  border: 1px solid black;
}

th,
td {
  border: 1px solid black;
}
```

#### 結果

内部では役に立つ文脈情報を追加したにもかかわらず、表示結果はまったく変わっていません。

{{EmbedLiveSample("Explicitly_specifying_table_content_groups", 500, 150)}}

### 基本的な整形

表のすべての部分の場合と同じく、 CSS を使用して表の行やその中身の外観を変更できます。 `<tr>` 要素に適用したスタイルは、セルに適用したセルで上書きされない限り、行内のすべてのセルに影響を与えます。

使用する書体の調節するスタイルと、見出し行に背景色を追加するスタイルを適用しましょう。

#### 結果

再び、始めに表示結果を見ましょう。

{{EmbedLiveSample("Basic_styling", 500, 200)}}

```html hidden
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

#### CSS

ここでは HTML を変更せず、CSS に手を加えます。

```css
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
}

thead > tr {
  background-color: rgb(228, 240, 245);
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
}
```

ここで {{CSSxRef("font")}} プロパティを {{HTMLElement("table")}} 要素に追加して、視覚的に目立つ書体 (または人の意見によっては忌々しい sans-serif 書体) を設定する一方、興味深いところは 2 番目のスタイルで、 `<tr>` 要素のうち {{HTMLElement("thead")}} の中にあるものの背景色がライトブルーになります。これは、見出し領域内にあるすべてのセルへ一斉に背景色を適用するためのてっとり早い方法です。

1 列目の {{HTMLElement("th")}} 要素の会員名は行の見出しとして扱っていますが、このスタイルは<em>影響を与えません</em>。

### 高度なスタイル設定

次は全力を尽くして、行の色を交互に設定する、行内の位置に応じてさまざまな色を設定するなど、見出しや本体の行にスタイルを設定します。

#### 結果

表は最終的に以下のようになります。

{{EmbedLiveSample("Advanced_styling", 500, 200)}}

ここでも HTML は変更しません。 HTML を適切に準備することがどのようなことか分かりましたか？

```html hidden
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

#### CSS

ここでは CSS をさらに変更します。複雑ではありませんが、多くのことを行います。詳しく説明しましょう。

##### 表と基本的なスタイル

```css
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}
```

ここでは {{CSSxRef("border-spacing")}} および {{CSSxRef("border-collapse")}} を追加して、セル間の間隔を取り除き、 2 本の境界線を互いに接する1本の境界線にまとめます。

```css
th,
td {
  border: 1px solid black;
  padding: 4px 6px;
}

th {
  vertical-align: bottom;
}
```

ここには、表のすべてのセルに既定のスタイルがあります。次に、カスタマイズしましょう!

##### 上部の見出し全体

上部の見出し 2 つに分けて見ていきます。始めに、見出し全体のスタイルです。

```css
thead > tr {
  background-color: rgb(228, 240, 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid black;
}
```

これは、表の見出し ({{HTMLElement("thead")}} を使用して指定します) 内にあるすべての `<tr>` 要素の背景色を設定します。そして上部の見出しの下ボーダーを、幅が 2 ピクセルの線に設定します。ただし、見出しの *2 行目*に {{CSSxRef("border-bottom")}} を適用するために {{cssxref(":nth-of-type")}} セレクターを使用していることに注目してください。なぜでしょう? これは、いくつかのセルがまたがっている 2 つの行で見出しが構成されているためです。実際は見出しが 2 行あるということであり、 1 行目にスタイルを適用すると意図しない結果になります。

##### "Joined" および "Canceled" の見出し

新しい会員を「良く」、退会した会員を「悪く」表すために、これら 2 つの見出しを緑と赤の色合いでスタイリングしましょう。

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225, 255, 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255, 225, 225);
}
```

ここでは表の見出しブロックの最後の行に注目して、最初の見出しセル ("Joined") を緑系統の色、2番目の見出しセル ("Canceled") を赤系統の色に設定します。

##### 本体で行ごとに色を変える

行の色を交互に設定することは、表の可読性を高めるためによく使用されます。偶数番目の行に、少し色をつけましょう。

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237, 238, 242);
}
```

##### 左側の見出しにスタイルを設定

最初の列も目立たせたいので、ここにもスタイルを設定します。

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225, 229, 244);
}
```

表の本体のそれぞれの行で最初の見出しセルに、会員名を左揃えにする {{CSSxRef("text-align")}} と、いくぶん異なる背景色を設定します。

##### バランスを整える

最後に、表内の金額の値は右揃えが一般的ですので、ここで行いましょう。

```css
tbody > tr > td:last-of-type {
  text-align: right;
}
```

本体のそれぞれの行で最後の {{HTMLElement("td")}} に対して、 CSS の {{CSSxRef("text-align")}} プロパティに `"right"` を設定します。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
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
        開始タグは必須。 {{HTMLElement("tr")}} 要素の直後に {{HTMLElement("tr")}} 要素がある場合、または親の表グループ要素 ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}) 内で最後の要素である場合は終了タグを省略可能。
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
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role"
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

- [学習エリア: HTML の表](/ja/docs/Learn/HTML/Tables) `<tr>` を含む、表の使用について説明します。
- {{DOMxRef("HTMLTableRowElement")}}: `<tr>` が準拠するインターフェイスです。
- 他の表関連要素:

  - {{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}
