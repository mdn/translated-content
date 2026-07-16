---
title: HTML `<colgroup>` 表の列グループ要素
short-title: <colgroup>
slug: Web/HTML/Reference/Elements/colgroup
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<colgroup>`** は [HTML](/ja/docs/Web/HTML) の要素で、表内の列グループを定義します。

{{InteractiveExample("HTML デモ: &lt;colgroup&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <thead>
    <tr>
      <td></td>
      <th scope="col">Batman</th>
      <th scope="col">Robin</th>
      <th scope="col">The Flash</th>
      <th scope="col">Kid Flash</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Skill</th>
      <td>Smarts, strong</td>
      <td>Dex, acrobat</td>
      <td>Super speed</td>
      <td>Super speed</td>
    </tr>
  </tbody>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
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
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `span`
  - : この属性は正の整数で、`<colgroup>` 要素がまたがる列の数を示します。存在しない場合のデフォルト値は `1` です。

    `span` 属性は、1 つ以上の {{HTMLElement("col")}} 要素が `<colgroup>` の中にある場合は許可されません。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味だけのために、以下に文書化されています。

- `align` {{deprecated_inline}}
  - : 列グループ内の各セルの水平方向の配置を指定します。指定可能な値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。なお、子孫の {{HTMLElement("col")}} 要素は、自分自身で [`align`](/ja/docs/Web/HTML/Reference/Elements/col#align) 属性を使用して、この値を上書きすることがあります。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを {{htmlelement("td")}} および {{htmlelement("th")}} 要素に対して使用してください。

    > [!NOTE]
    > `text-align` を `<colgroup>` 要素に設定しても効果はありません。{{HTMLElement("td")}} および {{HTMLElement("th")}} 要素は `<colgroup>` 要素の子孫ではないため、プロパティを継承しないからです。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、列ごとに 1 つずつ CSS の `td:nth-of-type(an+b)` セレクターを使用してください。`a` は表内の列数、`b` は表内の列の位置を示す序数です。例えば `td:nth-of-type(7n+2) { text-align: right; }` は 2 番目の列のセルを右揃えにします。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `bgcolor` {{deprecated_inline}}
  - : 列グループ内の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 何の効果もありません。この属性はもともと、列グループ内の各セルのコンテンツをある文字へ整列することを指定するためのものでした。よく使用する値としては、数値や金額を揃えるときのピリオド (`.`) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されますが、この列グループのメンバーである {{HTMLElement("col")}} の [`align`](/ja/docs/Web/HTML/Reference/Elements/col#align) のデフォルト値として使用されます。
- `charoff` {{deprecated_inline}}
  - : 何の効果もありません。もともとは、列グループ内のセルのコンテンツを、[`char`](#char) 属性で指定された配置文字からオフセットする文字数を指定するためのものでした。
- `valign` {{deprecated_inline}}
  - : 列グループ内の各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。なお、子孫の {{HTMLElement("col")}} 要素は、自分自身で [`valign`](/ja/docs/Web/HTML/Reference/Elements/col#valign) 属性を使用して、この値を上書きする場合があります。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティに {{htmlelement("td")}} および {{htmlelement("th")}} 要素に対して使用してください。

    > [!NOTE]
    > `vertical-align` プロパティを、`<colgroup>` 要素を指定したセレクターに設定しようとしないでください。{{HTMLElement("td")}} 要素は `<colgroup>` 要素の子孫ではないため、プロパティを継承しません。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、列ごとに CSS [`td:nth-of-type()`](/ja/docs/Web/CSS/Reference/Selectors/:nth-of-type) セレクターを使用してください。例えば、`td:nth-of-type(2) { vertical-align: middle; }` と記述すると、2 つ目の列のセルを縦方向に中央揃えにできます。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `width` {{deprecated_inline}}
  - : 現在の列グループ内の各列のデフォルトの幅を指定します。この属性に指定できる値には、標準的なピクセル値やパーセント値に加え、`0*` という特別な形式があります。これは、各列の幅を、その列のコンテンツを収めるのに必要な最小幅にするということです。`5*` のような相対幅も使用できます。子孫の {{HTMLElement("col")}} 要素が、独自の [`width`](/ja/docs/Web/HTML/Reference/Elements/col#width) 属性を使用してこの値を上書きする可能性があることに注意してください。この属性は非推奨となっているため、代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 使い方のメモ

- `<colgroup>` は、{{HTMLElement("table")}} 内に現れ、{{HTMLElement("caption")}} 要素（使用されている場合）の後、かつ {{HTMLElement("thead")}}、{{HTMLElement("tbody")}}、{{HTMLElement("tfoot")}}、{{HTMLElement("tr")}} 要素の前に配置する必要があります。
- 限られた数の CSS プロパティのみが、`<colgroup>` に影響します。
  - {{cssxref("background")}} : さまざまな `background` プロパティが、列グループ内のセルの背景を設定します。列グループの背景色は、表全体の上に描画されますが、列 ({{HTMLElement("col")}})、行グループ ({{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}})、行 ({{htmlelement("tr")}})、個々のセル ({{htmlelement("th")}} および {{htmlelement("td")}}) の背景色よりも下層に描画されるため、表の列グループに適用された背景色は、その上に描画されるすべてのレイヤーの背景が透明である場合にのみ表示されます。
  - {{cssxref("border")}}: 様々な `border` プロパティが、`<table>` に {{cssxref("border-collapse", "border-collapse: collapse")}} が設定されている場合にのみ適用されます。
  - {{cssxref("visibility")}}: 列グループに対して `collapse` を指定すると、その列グループ内の各列にあるすべてのセルがレンダリングされなくなり、他の列にまたがるセルは切り取られます。列グループ内のこれらの列が占めていたはずの空間は除去されます。ただし、他の列のサイズは、列グループ内の折りたたまれた列のセルが存在するかのように計算されます。`visibility` のその他の値は効果を持ちません。
  - {{cssxref("width")}}: `width` プロパティは、列グループ内の各列の最小幅を定義します。これは、{{cssxref("min-width")}} が設定された場合と同様です。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

この例では、7 列の表を、複数の列にまたがった 2 つの `<colgroup>` 要素に分割する様子を紹介しています。

### HTML

2 つの `<colgroup>` 要素を使用して、列グループを作成し、基本的な表の構造を構成します。それぞれの列グループ内の列の数は、[`span`](#span) 属性で指定します。

```html
<table>
  <caption>
    週間個人予定表
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <thead>
    <tr>
      <th>月</th>
      <th>火</th>
      <th>水</th>
      <th>木</th>
      <th>金</th>
      <th>土</th>
      <th>日</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>部屋掃除</td>
      <td>フットボールの練習</td>
      <td>ダンスコース</td>
      <td>歴史の授業</td>
      <td>飲み物を買う</td>
      <td>勉強時間</td>
      <td>自由時間</td>
    </tr>
    <tr>
      <td>ヨガ</td>
      <td>チェスクラブ</td>
      <td>友達と会う</td>
      <td>ジム</td>
      <td>誕生日パーティ</td>
      <td>釣り旅行</td>
      <td>自由時間</td>
    </tr>
  </tbody>
</table>
```

### CSS

グループ化された列は、CSS を使用して構造を視覚的に強調するために使用できます。

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### 結果

{{EmbedLiveSample('例', 650, 170)}}

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
      <td>
        <a href="#span"><code>span</code></a> 属性が存在する場合:
        なし。<br />
        この属性がない場合: 0 個以上の {{HTMLElement("col")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        最初の子要素が {{HTMLElement("col")}} 要素であり、かつ終了タグを省略した <code>&lt;colgroup&gt;</code> 要素が前にない場合は、開始タグを省略できます。<br />
        空白またはコメントが後にない場合は、終了タグを省略できます。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。<code>&lt;colgroup&gt;</code> は省略可能な {{HTMLElement("caption")}} 要素より後、かつ {{HTMLElement("thead")}}, {{HTMLElement("th")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("tr")}} の各要素より前に置かなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関係の要素
- {{cssxref("background-color")}}: 列グループ内の各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: 列グループのセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: 列グループ内の各セルの水平方向の配置を設定する CSS プロパティ
- {{cssxref("vertical-align")}}: 列グループ内の各セルの垂直方向の配置を設定する CSS プロパティ
- {{cssxref("visibility")}}: 列グループ内のセルの非表示（または表示）する CSS プロパティ
- {{cssxref("width")}}: 列グループ内の各列のデフォルトの幅を制御する CSS プロパティ
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: 目的の列のセルを選択するための CSS 擬似クラス
