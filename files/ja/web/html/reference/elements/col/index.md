---
title: HTML `<col>` 表の列要素
short-title: <col>
slug: Web/HTML/Reference/Elements/col
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<col>`** は [HTML](/ja/docs/Web/HTML) の要素で、親要素である {{HTMLElement("colgroup")}} 要素によって表される列グループ内の 1 つ以上のカラムを定義します。`<col>` 要素は、[`span`](/ja/docs/Web/HTML/Reference/Elements/colgroup#span) 属性が定義されていない {{HTMLElement("colgroup")}} 要素の子要素としてのみ有効です。

{{InteractiveExample("HTML デモ: &lt;col&gt;", "tabbed-taller")}}

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
  - : この属性は正の整数で、`<col>` 要素がまたがる列の数を示します。存在しない場合のデフォルト値は `1` です。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味だけのために、以下に文書化されています。

- `align` {{deprecated_inline}}
  - : 列内の各セルの水平方向の配置を指定します。指定可能な値は、`left`、`center`、`right`、`justify`、`char` です。対応している場合、`char` 値を指定すると、テキストコンテンツは [`char`](#char) 属性で定義された文字と、[`charoff`](#charoff) 属性で定義されたオフセットに基づいて配置されます。なお、この属性は、親要素である {{HTMLElement("colgroup")}} で指定された [`align`](/ja/docs/Web/HTML/Reference/Elements/colgroup#align) を上書きすることがあります。この属性は非推奨となっているため、代わりに CSS の {{cssxref("text-align")}} プロパティを {{htmlelement("td")}} および {{htmlelement("th")}} 要素に対して使用してください。

    > [!NOTE]
    > `text-align` を `<col>` 要素に設定しても効果はありません。これは、`<col>` には子要素が存在せず、そこから継承する要素がないためです。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、CSS の `td:nth-of-type(an+b)` セレクターを使用してください。`a` を 0 に、`b` を表内の列の位置を示す序数に設定します。例えば `td:nth-of-type(2) { text-align: right; }` は、2 番目の列のセルを右揃えにします。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `bgcolor` {{deprecated_inline}}
  - : 列内の各セルの背景色を定義します。この値は HTML 色であり、[6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形、または[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)のどちらかです。それ以外の CSS の {{cssxref("&lt;color&gt;")}} 値には対応していません。この属性は非推奨ですので、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : 何の効果もありません。この属性はもともと、列内の各セルのコンテンツをある文字へ整列することを指定するためのものでした。よく使用する値としては、数値や金額を揃えるときのピリオド (`.`) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されますが、親である {{HTMLElement("colgroup")}} 要素の [`char`](/ja/docs/Web/HTML/Reference/Elements/colgroup#char) の指定を上書きします。
- `charoff` {{deprecated_inline}}
  - : 何の効果もありません。もともとは、列内のセルのコンテンツを、[`char`](#char) 属性で指定された配置文字からオフセットする文字数を指定するためのものでした。
- `valign` {{deprecated_inline}}
  - : 列内の各セルの垂直方向の配置を指定します。指定可能な{{Glossary("enumerated", "列挙")}}値は、`baseline`、`bottom`、`middle`、`top` です。なお、この属性は、親要素である {{HTMLElement("colgroup")}} で指定された [`valign`](/ja/docs/Web/HTML/Reference/Elements/colgroup#valign) を上書きする場合があります。この属性は非推奨となっているため、代わりに CSS の {{cssxref("vertical-align")}} プロパティに {{htmlelement("td")}} および {{htmlelement("th")}} 要素に対して使用してください。

    > [!NOTE]
    > `vertical-align` プロパティを、`<col>` 要素を指定したセレクターに設定しようとしないでください。`<col>` には子孫がないため、そこからプロパティを継承する要素はありません。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、CSS の `td:nth-of-type(an+b)` セレクターを使用してください。`a` には 0 を、`b` には表内の列の位置を設定してください。例えば、`td:nth-of-type(2) { vertical-align: middle; }` と記述すると、2 つ目の列のセルを縦方向に中央揃えにできます。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `width` {{deprecated_inline}}
  - : 各列のデフォルトの幅を指定します。この属性に指定できる値には、標準的なピクセル値やパーセント値に加え、`0*` という特別な形式があります。これは、各列の幅を、その列のコンテンツを収めるのに必要な最小幅にするということです。`5*` のような相対幅も使用できます。なお、この属性は、親要素である {{HTMLElement("colgroup")}} で指定された [`width`](/en-US/docs/Web/HTML/Reference/Elements/colgroup#width) を上書きします。この属性は非推奨となっているため、代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 使い方のメモ

- `<col>` 要素は、`span` 属性を持たない {{HTMLElement("colgroup")}} 要素内で使用されます。
- `<col>` 要素は、構造的に列をグループ化しません。これは {{HTMLElement("colgroup")}} 要素の役割です。
- 限られた数の CSS プロパティのみが、`<col>` に影響します。
  - {{cssxref("background")}} : さまざまな `background` プロパティが、列内のセルの背景を設定します。列の背景色は、表全体および列グループ ({{HTMLElement("colgroup")}}) の上に描画されますが、行グループ ({{htmlelement("thead")}}、{{htmlelement("tbody")}}、{{htmlelement("tfoot")}})、行 ({{htmlelement("tr")}})、個々のセル ({{htmlelement("th")}} および {{htmlelement("td")}}) の背景色よりも下層に描画されるため、表の列に適用された背景色は、その上に描画されるすべてのレイヤーの背景が透明である場合にのみ表示されます。
  - {{cssxref("border")}}: 様々な `border` プロパティが、`<table>` に {{cssxref("border-collapse", "border-collapse: collapse")}} が設定されている場合にのみ適用されます。
  - {{cssxref("visibility")}}: 列に対して `collapse` を指定すると、その列内のすべてのセルがレンダリングされなくなり、他の列にまたがるセルは切り取られます。列内のこれらの列が占めていたはずの空間は除去されます。ただし、他の列のサイズは、折りたたまれた列のセルが存在するかのように計算されます。`visibility` のその他の値は効果を持ちません。
  - {{cssxref("width")}}: `width` プロパティは、列の最小幅を定義します。これは、{{cssxref("min-width")}} が設定された場合と同様です。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

この例では、8 列の表を、 3 つの `<col>` 要素に分割する様子を紹介しています。

### HTML

{{HTMLElement("colgroup")}} 要素は、基本的な表に構造を提供し、単一の暗黙的な列グループを作成します。3 つの `<col>` 要素が `<colgroup>` 要素内に記載されており、スタイルを設定可能な 3 つの列を作成します。[`span`](#span) 属性は、それぞれの `<col>` がまたぐ表の列数を指定します（省略した場合はデフォルトで `1` になります）。これにより、各 `<col>` 内の列間で属性を共有することができるようになります。

```html
<table>
  <caption>
    週間個人予定表
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <thead>
    <tr>
      <th>時間帯</th>
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
      <th>午前</th>
      <td>部屋掃除</td>
      <td>フットボールの練習</td>
      <td>ダンスコース</td>
      <td>歴史の授業</td>
      <td>飲み物を買う</td>
      <td>勉強時間</td>
      <td>自由時間</td>
    </tr>
    <tr>
      <th>午後</th>
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

CSS を非推奨の HTML 属性の代わりに使用し、列に背景色を提供したり、セルのコンテンツを整列したりしています。

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
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須ですが、終了タグを置いてはいけません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("colgroup")}} のみ。ただし開始タグが必須ではないため暗黙的に定義されることがあります。
        {{HTMLElement("colgroup")}} 要素は <a href="/ja/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a> 属性を持っていてはいけません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関係の要素
- {{cssxref("background-color")}}: 列内の各セルの背景色を設定する CSS プロパティ
- {{cssxref("border")}}: 列のセルの境界を制御する CSS プロパティ
- {{cssxref("text-align")}}: 列内の各セルの水平方向の配置を設定する CSS プロパティ
- {{cssxref("vertical-align")}}: 列内の各セルの垂直方向の配置を設定する CSS プロパティ
- {{cssxref("visibility")}}: 列内のセルの非表示（または表示）する CSS プロパティ
- {{cssxref("width")}}: 各列のデフォルトの幅を制御する CSS プロパティ
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: 目的の列のセルを選択するための CSS 擬似クラス
