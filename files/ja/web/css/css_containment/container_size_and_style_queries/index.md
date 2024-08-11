---
title: コンテナーのサイズおよびスタイルクエリーの使用
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 987fd95dfe59dd0b0e9871df50f7ca2cd907be38
---

{{CSSRef}}{{SeeCompatTable}}

[コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)を使うと、特定のコンテナー内に含まれている要素に、そのコンテナーの特性に基づいてスタイルを適用することができます。クエリーは、クエリー条件がコンテナーに対して真であるかどうかによって、真または偽を返します。

コンテナークエリーは[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)と似ています。 {{cssxref("@media")}} アットルールは、ビューポートのサイズや端末のその他の特性に基づいて要素にスタイル設定を適用します。同様に、 {{cssxref("@container")}} アットルールは、ビューポートではなく、コンテナー要素のサイズやその他のスタイル特性に基づいて要素にスタイルを適用します。コンテナークエリーは、メディアクエリーと同じ構文ルールと論理演算子があります。

```css
@container <container-condition> {
  /* <スタイルシート> */
}
```

コンテナークエリーには、コンテナーサイズクエリーとコンテナースタイルクエリーの 2 種類があります。

- **コンテナーサイズクエリー**

  - : サイズクエリーによって、コンテナー要素の現在の[サイズ](/ja/docs/Web/CSS/@container#記述子)に基づいて要素にスタイルを適用することができます。このコンテナー要素は、明示的に _サイズクエリーコンテナー_ として宣言しておく必要があります。

- **コンテナースタイルクエリー**
  - : スタイル クエリーを使用すると、コンテナー要素のスタイル機能に基づいて要素にスタイルを適用できます。空でない要素がスタイルクエリーコンテナーになることができます。現在、スタイルクエリーが対応しているスタイル特性は、 CSS の[カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)だけです。この場合、クエリーは、格納する要素のカスタムプロパティの計算値において真か偽を返します。コンテナースタイルクエリーが完全に対応していると、例えば、コンテナーが `display: inline flex` であったり、背景色が非透明である場合など、任意のプロパティ、宣言、計算値に基づいて、要素の子孫にスタイルを適用できるようになります。

このガイドでは、コンテナークエリーの基本的なことを見ていきます。

1. [コンテナーサイズクエリー](#コンテナーサイズクエリー)
2. スコープを制限するための[名前付きコンテナー](#名前付きコンテナー)
3. `style()` 関数記法を {{cssxref("@container")}} アットルール内の `<container-condition>` で使用して、[カスタムプロパティによるスタイルクエリー](#カスタムプロパティによるスタイルクエリー)の作成

## コンテナーサイズクエリー

コンテナーサイズクエリーは、サイズ条件によって絞り込まれます。コンテナー要素がコンテナーであると宣言され、コンテナー条件がその要素に対して真である場合、関連するスタイル設定がその中にある要素に適用されます。要素のサイズコンテナーは、拘束のある最も近い祖先です。

要素は、{{cssxref("container-type")}} プロパティ（または一括指定の {{cssxref("container")}}）を `size` または `inline-size` に設定することで、 _サイズクエリーコンテナー_ として宣言されます。

```css
@container (orientation: landscape) {
  /* このサイズコンテナーの子孫に適用されるスタイル設定 */
}

.sizeContainer {
  container-type: size;
}
```

サイズクエリーコンテナを宣言すると、[拘束](/ja/docs/Web/CSS/CSS_containment/Using_CSS_containment)が追加されます。これはパフォーマンス上必要なことです。DOM 内のすべての要素のサイズを常に問い合わせることは、パフォーマンスと使い勝手に悪影響を及ぼします。さらに、子孫のスタイルがコンテナー要素のサイズを変更した場合、無限ループが発生する可能性があります。

コンテナーサイズクエリーでは、 `<container-condition>` に 1 つ以上の `<size-query>` を記述します。各サイズクエリーはサイズ特性の名前、比較演算子、値を記載します。問い合わせ可能なサイズ特性は `width`、`height`、`inline-size`、`block-size`、`aspect-ratio`、`orientation` に制限されています。 1 つ以上の `<size-query>` を組み合わせた論理値と構文は、 [`@media`](/ja/docs/Web/CSS/@media) のサイズ特性クエリーと同じです。

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* スタイル */
}
```

この例の `<container-condition>` には、単一の `<size-query>` — `(10em <= width <= 20em)` が記述されています。この場合、すべての {{htmlelement("form")}} 要素は、無名のコンテナークエリーと一致する可能性があります。コンテナークエリー内で宣言されたスタイルは、幅が `10em` から `30em` までのすべてのフォームの子孫に適用されます。

## 名前付きコンテナー

`<container-condition>` にはオプションで、大文字小文字を区別する {{cssxref("container-name")}} を指定することができます。フォームの例では、 `<container-condition>` に名前を追加し、 {{cssxref("container-name")}} プロパティの値を照合したいフォーム要素の同じ名前に設定することで、クエリーで照合する要素を制限することができます。

オプションでクエリー条件に `<container-name>` を設定すると、クエリーコンテナー名が一致するクエリーコンテナーのみが対象となります。 {{cssxref("container-name")}} プロパティは、 `@container` ルールで使用することができるクエリーコンテナー名のリストを指定します。名前を使用することで、コンテナーが直接の親でない場合でも、特定のコンテナーの詳細を問い合わせることができます。

```css
@container <container-name> <container-query> {
  /* <スタイルシート> */
}
```

`@container` アットルールに名前を追加したら、 {{cssxref("container-name")}} プロパティまたは {{cssxref("container")}} の一括指定を使って、コンテナー要素に空白区切りの名前のリストを適用することができます。名前付き `@container` アットルールの中に含まれるスタイルは、同じ名前を設定したコンテナーサイズクエリー中で一致する要素にのみ適用されます。 `<container-name>` は大文字小文字を区別する {{cssxref("ident")}} です。

```css
@container card (orientation: landscape) {
  /* スタイル */
}

.cards li {
  container-type: inline-size;
  container-name: card;
}
```

この例のサイズクエリーでは、`container-name` が `card` である要素に限定しています。この例では、コンテナークエリースタイルブロック内のスタイル設定は、クラスが `cards` で、幅が高さより大きい要素の中に入れ子になっているすべての {{htmlelement("li")}} 要素の子孫に適用されます。他にも `container-name: card` が適用されている要素でサイズクエリーに一致するものがあれば、それらの要素の子孫にもスタイルが適用されることに注意してください。

```css
@container wide (orientation: landscape) and (min-width: 20em) {
  /* サイズ特性が一致する場合に .sizeContainer の子孫に適用されるスタイル設定 */
}

@container narrow (orientation: portrait) or (max-width: 20em) {
  /* サイズ特性が一致する場合に .sizeContainer の子孫に適用されるスタイル設定 */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

このコンテナーサイズクエリーの例では、要素は 2 つのコンテナー名を持っています。 `class="sizeContainer"` を持つ要素の子孫は、 `wide` または `narrow` クエリー（または要素がちょうど 20em の正方形であった場合は両方）のスタイル設定が適用されます。

コンテナーの名前があると、直接の親ではない要素からのスタイル設定も可能になります。拘束コンテキストに名前が指定された場合、拘束のある最も近い祖先の代わりに `@container` アットルールを使用して詳細に対象とすることができます。

`container-name: none` を設定すると、コンテナーが名前付きコンテナークエリーと一致しないようになります。これは関連するコンテナークエリー名をすべて除外しますが、要素が名前付きでないクエリーと一致することを防ぐことはできません。

要素をサイズコンテナーにしないようにするには、 `container-type: normal` を設定します。これによって拘束が除去され、要素がサイズコンテナーにならないことを意味します（それでも[スタイルコンテナー](#コンテナースタイルクエリー)にはなれます）。

要素がコンテナークエリーに一致しないようにするには、その要素に未使用の `container-name` を指定します。

```css
article {
  container-name: none;
  container-type: size;
}

main {
  container-name: neverUsedName;
  container-type: normal;
}
```

上記の例では、 {{htmlelement("article")}} 要素は任意の名前のないコンテナークエリーに一致する可能性があります。言い換えれば、 `<container-condition>` に名前を記載していないそれぞれの `@container` クエリーに検査されます。他にも、 `neverUsedName` がコンテナークエリーの名前として使用されることがないと仮定すれば、 {{htmlelement("main")}} 要素は決してクエリーされません。仮にこの名前が除去されたとしても、 `container-type` 値が `normal` であるということはサイズクエリーコンテナーではないことを意味するため、サイズクエリーに対して検査されることはありません。

コンテナークエリーは、サイズクエリーだけではありません。コンテナーのスタイル特性のクエリーも可能です。

## コンテナースタイルクエリー

コンテナースタイルクエリーは、 1 つ以上の `style()` 関数記法で定義されたコンテナー要素のスタイルを評価する `@container` クエリーです。スタイル特性をスタイルクエリーで組み合わせて使用するための論理構文とロジックは、 [CSS 機能クエリー](/ja/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) と同じです。唯一の違いは関数名で、`<support-condition>` 内では `supports()` となるのに対して、`<style-feature>` 内では `style()` になります。

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <スタイルシート> */
}
```

それぞれの `style()` 関数の引数は単一の **`<style-feature>`** です。 CSS 拘束仕様書によれば、 `<style-feature>` は有効な CSS [宣言](/ja/docs/Web/CSS/Syntax#css_の宣言)、 CSS プロパティ、[`<custom-property-name>`](/ja/docs/Web/CSS/var#values) のいずれかになります。現在対応しているスタイル特性はカスタムプロパティのみで、値の有無は問いません。[ブラウザー互換性表](#ブラウザーの互換性)を参照してください。

`<style-feature>` に値が記載されている場合、 `style()` 引数として渡されたカスタムプロパティ（将来的には CSS 宣言）の計算値が、クエリー対象のコンテナーに対して真であれば、スタイルクエリーは真と評価されます。そうでない場合は、偽に解決されます。
値のないスタイル設定は、計算値が指定されたプロパティの[初期値](#登録済みプロパティ)と異なる場合に真と評価されます。

将来的には、このようにスタイルクエリーを書くことができるようになるでしょう。

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <スタイルシート> */
}
```

`style()` 関数記法はスタイルクエリーとサイズクエリーを区別するために使用しています。まだ対応していませんが、いずれは `max-width: 100vw` のような通常の CSS 宣言もクエリーできるようになるでしょう。 `@containers (max-width: 100vw)` はサイズクエリーです。 {{cssxref("container-type")}} または {{cssxref("container")}} 一括指定による拘束が必要です。このクエリーはコンテナーが 100vw 以下の場合に真を返します。これはスタイルクエリーである `@containers style(max-width: 100vw)` のクエリーとは異なります。対応している場合、このクエリーは {{cssxref("max-width")}} の値が `100vw` のコンテナーがあれば真を返します。

通常の CSS 宣言やプロパティに対するスタイルクエリーに対応するまでは、値の有無にかかわらず、 `style()` の引数としてカスタムプロパティを記載する方法のみを制限されます。

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <スタイルシート> */
}
```

すでに言及されていることでありますが、覚えておきたいいくつかの注意点です。

- すべての要素がスタイルクエリーコンテナーになることができます。 `container-type` を設定する必要はありません。子孫のスタイルが祖先の計算スタイルに影響を与えない場合、拘束は必要ありません。
- `<container-condition>` にはスタイル設定とサイズ設定の両方を記載することができます。サイズ特性をクエリーに記載する場合は、コンテナー要素の `container-type` に `size` または `inline-size` が設定されていることを確認してください。
- ある要素をコンテナーとして考慮させたくない場合は、 `container-name` を指定して、その要素を使用しないようにしてください。 `container-name: none` を設定すると、コンテナーに関連するすべてのクエリー名が除去され、要素がスタイルコンテナーになることを防ぐことはできません。
- この執筆時点（2024 年 2 月）では、コンテナースタイルクエリーは `style()` クエリー内の CSS カスタムプロパティ値でのみ動作します。

これで掘り下げて、さまざまな種類の `<style-feature>` を見ていきましょう。

### カスタムプロパティによるスタイルクエリー

カスタムプロパティ用のスタイルクエリーでは、親要素の[カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)（「CSS 変数」とも呼ばれます）を問い合わせることができます。カスタムプロパティは、通常の CSS プロパティを機能クエリーに記載するのと同じように `<style-query>` に記載します。

#### スタンドアロンのカスタムプロパティクエリー

関数記法 `style()` の `<style-query>` 引数には、単なる CSS 変数名、つまり値のないカスタムプロパティを指定することができます。値が指定されていない場合、クエリーは値が `@property` アットルール内の `initial-value` 記述子の値と同じであれば、偽を返します。スタイルクエリーは真を返し、`initial-value`と異なるカスタムプロパティ値を持つすべての要素、またはカスタムプロパティが登録されずに宣言された場合は、任意の値のカスタムプロパティを持つすべての要素に一致します。

##### 未登録のカスタムプロパティ

CSS 変数が単純な CSS カスタムプロパティ値の割り当てによって導入された場合、値のないカスタムプロパティクエリは常に真を返します。

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <スタイルシート> */
}
```

この例では、コンテナークエリーは `--theme-color` プロパティが宣言された要素と、そのすべての子孫要素に一致します。 CSS 変数 `--theme-color` は {{cssxref(":root")}} で宣言されているので、スタイルクエリー `style(--theme-color)` はその {{glossary("DOM")}} ノード内のすべての要素に対して真になります。

##### 登録済みプロパティ

登録済みのカスタムプロパティの動作は異なります。明示的に {{cssxref("@property")}} アットルールで定義された場合、または {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}} で JavaScript を介して定義された場合、スタイルクエリー `style(--theme-color)` は、要素の `--theme-color` に対する計算値が、そのカスタムプロパティの元の定義で設定された [`initial-value`](/ja/docs/Web/CSS/@property/initial-value) と異なる場合にのみ、要素に対して真を返します。

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherited: true;
}

:root {
  --theme-color: rebeccapurple;
}

main {
  --theme-color: blue;
}

@container style(--theme-color) {
  /* <スタイルシート> */
}
```

この例では、 `:root` 要素はカスタムプロパティの値が `initial-value` の値と同じであるため、スタイルクエリーに一致しません。要素（およびその値を継承するすべての要素）のカスタムプロパティの値は `rebeccapurple` のままです。初期値と異なる要素、この場合は {{htmlelement("main")}} とその子孫で変更された値を継承するものだけが一致します。

#### 値によるカスタムプロパティ

スタイルクエリーがカスタムプロパティの値を含む場合、その要素のプロパティの計算値は完全一致でなければならず、カスタムプロパティが {{cssxref("@property")}} アットルール（または {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}} メソッド呼び出し）で定義された場合にのみ、 `syntax` 記述子を含む等価な値が一致します。

```css
@container style(--accent-color: blue) {
  /* <スタイルシート> */
}
```

このコンテナースタイルクエリーは、`--accent-color` カスタムプロパティの{{cssxref("computed_value", "計算値")}}として `blue` を持つ要素に一致します。

この場合、他にも sRGB の `blue` に相当する色の値（16 進コードの `#0000ff` など）が一致するのは、次のように `--accent-color` プロパティが `@property` や `CSS.registerProperty()` で色として定義されている場合のみです。

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

この場合、 `--accent-color` の値を `blue`、`#00f`、`#0000ff`、`rgb(0 0 255 / 1)`、`rgb(0% 0% 100%)` に設定すると、 `@container style(--accent-color: blue)` は真を返します。

##### 例

この例では、 4 つのラジオボタンを持つ {{htmlelement("fieldset")}} があります。 4 つ目のオプションには、独自の色を入力するためのテキスト {{htmlelement("input")}} が含まれています。

```html
<fieldset>
  <legend><code>--theme</code> の値を変更</legend>
  <ol>
    <li>
      <input type="radio" name="selection" value="red" id="red" />
      <label for="red">--theme: red;</label>
    </li>
    <li>
      <input type="radio" name="selection" value="green" id="green" />
      <label for="green">--theme: green</label>
    </li>
    <li>
      <input type="radio" name="selection" value="blue" id="blue" />
      <label for="blue">--theme: blue</label>
    </li>
    <li>
      <input type="radio" name="selection" value="currentcolor" id="other" />
      <label for="other">その他</label>
      <label for="color">色:</label>
      <input text="checkbox" name="selection" value="currentcolor" id="color" />
    </li>
  </ol>
</fieldset>
<output>色を変更します</output>
```

JavaScript はラジオボタンが選択されるたびに、 {{htmlelement("fieldset")}} 要素と {{htmlelement("output")}} 要素の祖先である {{htmlelement("body")}} 要素上にある、 CSS 変数 `--theme` の値を更新します。テキストの `<input>` が更新されると、 `other` ラジオボタンの {{domxref("HTMLInputElement.value", "value")}} は、`other` ラジオボタンが {{domxref("HTMLInputElement.checked", "checked")}} の場合のみ、 `--theme` を更新します。

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", (e) => {
    body.style.setProperty("--theme", e.target.value);
  });
}
color.addEventListener("input", (e) => {
  other.style.setProperty("value", e.target.value);
  if (other.checked) {
    body.style.setProperty("--theme", e.target.value);
  }
});
```

`@property` アットルールを使用して、 CSS 変数 `--theme` が {{cssxref("color_value","&lt;color&gt;")}} 値となるように定義し、 `initial-value` を `#00F` に設定することで、どのような構文が使用されているかに関わらず、等価な色が確実に一致します（例えば、 `#F00` は `rgb(255 0 0)`、`#ff0000`、`red` と等しくなります）。

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: #f00;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

最初のスタイル特性クエリーは、値のないカスタムプロパティです。この形式のクエリーは、カスタムプロパティ値の計算値がそのプロパティの `initial-value` と異なる場合に真を返します。この場合、`--theme`の値が、`#f00`（`red`など）と等価な任意の構文以外の値であるとき、真になります。真の場合、 {{htmlelement("output")}} は 5px の点線の輪郭線が付きます。輪郭線の色は現在の `--theme` の値です。既定では {{cssxref("color")}} は灰色です。

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

2 つ目と 3 つ目のスタイル設定には、カスタムプロパティの値が記載されています。これらは、コンテナーの `--theme` の値が列挙された値と等価な色である場合に、 `initial-value` と同じ値であっても一致します。最初のクエリーは `--theme` の値が `red`、`blue`、`green` と等価な要素に一致します。その場合、 {{cssxref("color")}} は `--theme` の現在の色の値になります（`blue` と `green` の場合、最初のスタイルクエリーで設定した灰色を上書きします）。

2つ目のスタイルクエリーは、 `--theme` が `red` と等しい場合、 `<output>` のコンテンツも太字になることを示しています。これはコンテナークエリーが一致することをよりよく示すためです。

```css
@container style(--theme: green) or style(--theme: blue) or style(--theme: red) {
  output {
    color: var(--theme);
  }
}

@container style(--theme: red) {
  output {
    font-weight: bold;
  }
}
```

{{EmbedLiveSample('example','100%','200')}}

テキストボックスに様々な色の値を入力してみてください。 sRGB の `red` に相当する値にすると、`<output>` は `style(--theme: red)` に一致して赤になりますが、 `style(--theme)` はアットルール `@property` で定義された `--theme` の初期値と同じ値を返すので、輪郭線は除去されます。 `currentcolor` や `hsl(180 100% 50%)` など、赤以外の sRGB の有効な色の値を記載すると、最初のスタイルクエリーが真を返します。これらは `initial-value` とは異なる値です。

`syntax: "<color>";` を設定しているため、この CSS 変数には有効な `<color>` 値しか代入できません。 {{cssxref("color")}} プロパティの有効な値のうち `<color>` 値ではないもの、例えば `unset` や `inherit` など、このカスタムプロパティでは[不正な値](/ja/docs/Web/CSS/CSS_syntax/Error_handling)であり、無視されます。

`unset` または `gibberish` を入力すると、 JavaScript は {{HTMLElement("body")}} の `style` を `--theme: unset` または `--theme: gibberish` に更新します。どちらも色ではありません。どちらも不正な色であり、無視されます。これは初期値が継承され、変更されないことを意味しています。 `style(-theme)` は偽を返し、 `style(-theme: red)` は真を返します。

> [!NOTE]
> カスタムプロパティを宣言するときは、 `@property` を {{cssxref("@property/syntax", "syntax")}} 記述子とともに使用するようにしてください。そうすれば、ブラウザーは正しく計算値を比較することができます。

### 入れ子のクエリー

コンテナークエリーは、他のコンテナークエリーの中に入れることができます。複数の入れ子になったコンテナークエリーの中で定義したスタイルは、それを囲んでいるコンテナークエリーがすべて真のときに適用されます。

```css
@container style(--theme: red) {
  output {
    outline: 1px dotted;
  }
  @container style(--theme: purple) {
    output {
      outline: 5px dotted;
    }
  }
}
```

この場合、 `<output>` が `--theme: purple` の設定されているコンテナーの中に入っていて、そのコンテナーが `--theme` の値が `red` であるコンテナーの中に入っている場合、`<output>` には 5px の点線の境界線が付きます。

### スタイルクエリーの CSS 宣言とプロパティ

まだどのブラウザ－も対応していませんが、 `style()` 関数記法では、 CSS プロパティとプロパティ値のペアを含む通常の CSS 宣言を指定することができます。

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

対応している場合、この基本的な例は、親要素が既に `bold` である場合、 {{htmlelement("b")}} と {{htmlelement("strong")}} 要素の背景色を黄色にします。

照合は親コンテナーの計算値に対して行われ、親の計算値 {{cssxref("font-weight")}} が `bold` （`bolder` や `900` ではありません）であれば一致します。カスタムプロパティのコンテナースタイルクエリーと同様に、既定ではすべての要素がスタイルコンテナーであるため、スタイルコンテナーとして要素を定義する必要はありませんでした。要素に `container-name` が設定されていない限り、`font-weight: bold` が設定されているか継承されていれば、一致します。

一括指定プロパティと照合するスタイル特性は、計算値が個別指定プロパティのそれぞれで一致すれば真となり、そうでなければ偽となります。例えば、 `@container style({{cssxref("border")}}: 2px solid red)` は、その一括指定を構成する 12 個の個別指定プロパティ（{{cssxref("border-bottom-style")}} など）がすべて同じ等価な値に設定されていれば真になります。

グローバル CSS 値 `revert` と `revert-layer` は `<style-feature>` の値としては無効であり、コンテナースタイルクエリーが偽になります。

スタイルクエリーでクエリーしているスタイルを、そのクエリーでスタイル設定している要素に適用しないでください。無限ループを発生させる可能性があります。

スタイルクエリーは、論理値コンテキストのプロパティも受け入れることを想定しています。スタイルクエリーは、プロパティの値がそのプロパティの初期値（変更されていない場合）であれば偽を返し、そうでなければ真を返します。

```css
@container style(font-weight) {
}
```

上記の例は、 `font-weight` の値が初期値と異なる要素に対して真を返します。ユーザーエージェントのスタイルシートは、例えば `font-weight: bold` を {{htmlelement("heading_elements", "見出し")}}と {{htmlelement("th")}} 要素に対して設定します。ブラウザーによっては {{htmlelement("strong")}} や {{htmlelement("b")}} を `bold` に設定したり、他にも `bolder` に設定したりします。 {{htmlelement("optgroup")}} もユーザーエージェントによって、 `font-weight` に `normal` 以外が設定されることがあります。要素の `font-weight` がユーザーエージェントの既定値でない限り、スタイルクエリーは真を返します。

これらの機能はまだどのブラウザーも対応していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Media queries](/ja/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} アットルール
- CSS {{Cssxref("contain")}} プロパティ
- CSS {{Cssxref("container")}} 一括指定プロパティ
- CSS {{Cssxref("container-name")}} プロパティ
- [Getting Started with Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Style queries](https://una.im/style-queries/) (una.im, 2022)
