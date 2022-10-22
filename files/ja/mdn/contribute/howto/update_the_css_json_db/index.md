---
title: CSS JSON DB を更新するには
slug: MDN/Contribute/Howto/Update_the_CSS_JSON_DB
---

{{MDNSidebar}}

CSS プロパティのいくつかの特徴、例えばその構文やアニメーションが可能かどうかなどは、 MDN 上の複数のページで言及されているため、アドホックな「データベース」に保存されています。このデータベースは、実際には CSS 関連の情報を含むいくつかの JSON ファイルから構成されており、 [GitHub に格納](https://github.com/mdn/data/tree/main/css)されています。この記事では、この構造を更新する方法について説明します。

## 前提条件となるリソース

CSS JSON DB の内容を更新したり確認したりするためには、さまざまなソースから情報を収集する必要があります。

1. **最新の仕様書**
    W3C 勧告であれ、初期の編集者草案であれ、その機能をカバーする（またはカバーすることを指定する）仕様書の利用可能な最新の草案を参照する必要があります。それを見つけるには、通常、ウェブ検索を行います。最新版は、多くの場合、その仕様書のすべての版からリンクされており、 "latest draft" などとリストアップされているはずです。
2. **最新のウェブブラウザー**
    これらは、 [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/) などの実験的/アルファビルドであるべきで、文書化しようとしている機能に対応している可能性がより高いものです。これは、特に新しい/実験的な機能を文書化する場合に適切です。
3. **追加情報**
    特定の機能がどのように機能するかをよりよく理解するために、できるだけ多くの情報を見つけてください。例えば、ブログの記事やデモは良いリソースです。
4. **技術連絡先**
    API の標準化やブラウザーへの実装に携わっている人など、仕様について質問できるフレンドリーなエンジニアのコンタクトを見つけると、本当に有益です。実装のバグが Bugzilla にある場合、その機能を実装したエンジニアが良いコンタクトになります。バグに needinfo フラグを付けて質問すると、特定の質問について答えを得ることができます。その他、知識のある人を探すのに良い場所です。

    - あなたが関連企業に勤めている場合、社内アドレス帳。
    - その API の議論に関与している公開メーリングリスト、例えば Mozilla の [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) リストや W3C の [www-style](https://lists.w3.org/Archives/Public/www-style/) リストなど。
    - 仕様書そのもの。例えば、 [CSS Animations 仕様書](https://drafts.csswg.org/css-animations/)には、冒頭に作者とその連絡先が記載されています。

## CSS 情報データベースの更新

CSS プロパティに格納される情報は、以下の通りです。

- 名前
- 構文
- 初期値
- どの要素に適用されるか
- 継承されるかどうか
- パーセント値が計算される方法
- 所属するメディア
- 計算値
- アニメーション種別
- 値の正規順序
- 他のプロパティの一括指定であるかどうか
- 所属先の MDN グループ

基本的な要素は、仕様に書かれていることを文書化することです。つまり、リファレンスページはその仕様書の最新のイテレーションに基づいており、後に仕様書の版の違いやレンダリングエンジンによる実装の違いを強調する互換性ノートがあります。

### 仕様書から情報を取得する

関連する仕様書を見つけたら、まず、その仕様書の中からプロパティ定義を探します。概要表（一番下付近）を探せば、探している値のほとんどが載っています。

![仕様書で定義されている CSS 特性のうち、有用な属性をまとめたもの。](property_index.png)

仕様書によっては、特に古い草案では、このようなプロパティ索引表がありません。この場合は、次のようなプロパティそのもののプロパティボックスを探す必要があります。

![このボックスには、CSS プロパティの最も有用な属性が一覧表示されます。](property_definition.png)

なお、場合によっては、プロパティボックスよりも、プロパティ索引表の方が、より簡潔に、より詳細に記載されることがあります。

### JSON に情報を格納する

仕様書の情報は、 JSON DB に特定の方法で格納されます。 CSS のプロパティは、 [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) の中に格納されています。以下の JSON キーはすべて義務です。

翻訳された情報は、言語＋国コード（[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) および [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) に準拠）をキーとして、 [l10n/css.json](https://github.com/mdn/data/blob/main/l10n/css.json) に翻訳に対応するキー文字列として格納されます。

MDN の他の部分を参照するために、翻訳内でマクロ [\\{{cssxref}}](https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs) と [\\{{SVGElement}}](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs) を使用することができます。

<table class="standard-table">
  <tbody>
    <tr>
      <th>仕様の名前</th>
      <th>JSON キー名</th>
      <th>コメント</th>
      <th>例</th>
    </tr>
    <tr>
      <td>値</td>
      <td><code>syntax</code></td>
      <td>仕様書内に記載されている通り</td>
      <td><pre class="brush:js">"syntax": "visible | hidden"</pre></td>
    </tr>
    <tr>
      <td>メディア</td>
      <td><code>media</code></td>
      <td>定義済みのローカライズキー、またはローカライズブロック。</td>
      <td>
        <p>properties.json</p>
        <pre class="brush:js">"media": "visual"</pre>
        <p>l10n/css.json</p>
        <pre class="brush:js">
"visual": {
  "en-US": "visual",
  "de": "visuell",
  "fr": "visuel",
  "ru": "визуальный"
}</pre
        >
      </td>
    </tr>
    <tr>
      <td>継承</td>
      <td><code>inherited</code></td>
      <td>論理値</td>
      <td><pre class="brush:js">"inherited": true</pre></td>
    </tr>
    <tr>
      <td>アニメーションの種類</td>
      <td><code>animatable</code></td>
      <td>
        定義済みのローカライズのキー、ローカライズのブロック、一括指定の場合は個別指定の配列、またはプロパティ <code>"as"</code> とオプションのプロパティ <code>"note"</code> を持つブロックのいずれかを指定することができます。
        <code>"as"</code> プロパティは、スペースで区切られた翻訳キーのリストを保持し、<a href="https://drafts.csswg.org/css-transitions/#interpolated-types">補間</a>に関連する値を指定します。
      </td>
      <td>
        <p>properties.json</p>
        <pre class="brush:js">"animationType": "discrete"</pre>
        <pre class="brush:js">
"animationType": [
  "border-color",
  "border-style",
  "border-width"
]</pre
        >
        <p>l10n/css.json</p>
        <pre class="brush:js">
"discrete": {
  "en-US": "discrete",
  "de": "diskret",
  "fr": "discrète"
}</pre
        >
      </td>
    </tr>
    <tr>
      <td>パーセント値</td>
      <td><code>percentages</code></td>
      <td>
        定義済みのローカライズキー、ローカライズのブロック、あるいは一括指定の場合は個別指定の配列。
      </td>
      <td>
        <p>properties.json</p>
        <pre class="brush:js">
"percentages": "logicalWidthOfContainingBlock"</pre
        >
        <pre class="brush:js">
"percentages": [
  "background-position",
  "background-size"
]</pre
        >
        <p>l10n/css.json</p>
        <pre class="brush:js">
"logicalWidthOfContainingBlock": {
  "en-US": "logical-width of containing block",
  "de": "logische Breite des beinhaltenden Blocks",
  "fr": "largeur logique du bloc englobant",
  "ru": "логическая высота содержащего блока"
}</pre
        >
      </td>
    </tr>
    <tr>
      <td>-</td>
      <td><code>groups</code></td>
      <td>MDN の情報をグループ化するためのタグの配列。</td>
      <td>
        <pre class="brush: js">
"groups": [
  "CSS Flexible Box Layout"
]</pre
        >
      </td>
    </tr>
    <tr>
      <td>初期値</td>
      <td><code>initial</code></td>
      <td>
        この値を CSS のコードで使用する場合は、<code>&#x3C;code></code> タグで囲んでください。
      </td>
      <td>
        <pre class="brush:js">"initial": "&#x3C;code>none&#x3C;\/code>"</pre>
      </td>
    </tr>
    <tr>
      <td>適用先</td>
      <td><code>appliesto</code></td>
      <td>
        定義済みのローカライズキー、ローカライズブロック、あるいは一括指定の場合は個別指定の配列。
      </td>
      <td>
        <p>properties.json</p>
        <pre class="brush:js">"appliesto": "absolutelyPositionedElements"</pre>
        <pre class="brush:js">
"appliesto": [
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width"
]</pre
        >
        <p>l10n/css.json</p>
        <pre class="brush:js">
"absolutelyPositionedElements": {
  "en-US": "absolutely positioned elements",
  "de": "absolut positionierte Elemente",
  "fr": "éléments positionnés de manière absolue",
  "ja": "絶対位置指定された要素",
  "ru": "абсолютно позиционированные элементы"
}</pre
        >
      </td>
    </tr>
    <tr>
      <td>計算値</td>
      <td><code>computed</code></td>
      <td>
        定義済みのローカライズキー、ローカライズブロック、あるいは一括指定の場合は個別指定の配列。
      </td>
      <td>
        <p>properties.json</p>
        <pre class="brush:js">"computed": "normalizedAngle"</pre>
        <pre class="brush:js">
"computed": [
    "border-width",
    "border-style",
    "color"
]</pre
        >
        <p>l10n/css.json</p>
        <pre class="brush:js">
"normalizedAngle": {
  "en-US": "normalized angle",
  "de": "normalisierter Winkel",
  "fr": "angle normalisé",
  "ru": "нормализованный угол"
}</pre
        >
      </td>
    </tr>
    <tr>
      <td>正規の順序</td>
      <td><code>order</code></td>
      <td>定義済みのローカライズキー、またはローカライズブロック。</td>
      <td>
        <p>properties.json</p>
        <pre class="brush: js">"order": "uniqueOrder"</pre>
        <p>l10n/css.json</p>
        <pre class="brush: js">
"uniqueOrder": {
  "en-US": "the unique non-ambiguous order defined by the formal grammar",
  "de": "die eindeutige Reihenfolge definiert durch die formale Grammatik",
  "fr": "l'ordre unique et non-ambigu défini par la grammaire formelle",
  "ja": "形式文法で定義される一意のあいまいでない順序",
  "es": "el orden único no-ambigüo definido por la gramática formal",
  "ru": "уникальный неоднозначный порядок, определённый формальной грамматикой"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

構文に特定の値への参照が含まれていることがあります。そのような値は、通常、独自の構文があることを定義します。このような構文は、名前をキーとして [syntaxes.json](https://github.com/mdn/data/blob/main/css/syntaxes.json) に格納されます。例えば、 {{cssxref("font-family")}} プロパティは `[ <family-name> | <generic-family> ]#` という構文です。 `<family-name>` と `<generic-family>` の構文は次のように格納します。

```js
{
    "syntaxes": {
        "family-name": "<string> | <custom-ident>+",
        "generic-family": "serif | sans-serif | cursive | fantasy | monospace"
    }
}
```

## CSS の個別指定プロパティの例

```json
{
  "backface-visibility": {
    "syntax": "visible | hidden",
    "media": "visual",
    "inherited": false,
    "animatable": "no",
    "percentages": "no",
    "groups": [
      "CSS Transforms"
    ],
    "initial": "<code>visible<\/code>",
    "appliesto": "transformableElements",
    "computed": "asSpecified",
    "order": "uniqueOrder"
  }
}
```

## CSS の一括指定プロパティの例

一括指定プロパティの場合、関連する一括指定プロパティの一覧にいくつかの項目を置きます。

```json
{
  "animation": {
    "syntax": "&lt;single-animation-name&gt; || &lt;time&gt; || &lt;timing-function&gt; || &lt;time&gt; || &lt;single-animation-iteration-count&gt; || &lt;single-animation-direction&gt; || &lt;single-animation-fill-mode&gt; || &lt;single-animation-play-state&gt;",
    "media": "visual",
    "inherited": false,
    "animatable": "no",
    "percentages": "no",
    "groups": [
      "CSS Animations"
    ],
    "initial": [
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state"
    ],
    "appliesto": "allElementsAndPseudos",
    "computed": [
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-direction",
      "animation-iteration-count",
      "animation-fill-mode",
      "animation-play-state"
      ],
    "order": "orderOfAppearance"
  }
}
```
