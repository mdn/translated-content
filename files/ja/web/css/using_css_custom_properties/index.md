---
title: CSS カスタムプロパティ（変数）の使用
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**カスタムプロパティ**（**CSS 変数**や**カスケード変数**と呼ばれることもあります）は、CSS の作者によって作成され、文書全体で再利用可能な特定の値を表すエンティティです。これらは、{{cssxref("@property")}} アットルールまたはカスタムプロパティ構文（例: **`--primary-color: blue;`**）を使用して設定します。 カスタムプロパティは、CSS の {{cssxref("var", "var()")}} 関数（例: **`color: var(--primary-color);`**）を使用してアクセスします。

複雑なウェブサイトには膨大な量の CSS が含まれており、その結果、CSS の値が重複することがよくあります。例えば、スタイルシートの異なる場所で同じ色が使用されていることはよくあります。多くの場所で重複している色を変更するには、すべてのルールと CSS ファイルを検索して置換する必要があります。カスタムプロパティを使用すると、値を 1 か所で定義し、他の複数の場所で参照できるため、作業が容易になります。また、可読性と意味づけも利点のひとつです。例えば、`--main-text-color` は 16 進数表記のカラーコード `#00ff00` よりも理解しやすく、特にその色が様々なコンテキストで使用される場合にはその傾向が顕著です。

[ダッシュ 2 本 (`--`) を使用して](/ja/docs/Web/CSS/--*)定義されたカスタムプロパティは、[カスケード](/ja/docs/Web/CSS/Cascade)の対象となり、親から値を継承します。
{{cssxref("@property")}} アットルールを使用すると、カスタムプロパティをより詳細に制御でき、親から値を継承するかどうか、初期値をどうするか、適用すべき型制約をどうするかを指定できます。

> [!NOTE]
> 変数は、メディアクエリーやコンテナークエリーの中では動作しません。
> {{cssxref("var", "var()")}} 関数は、要素のすべてのプロパティの、任意の場所で使用することができます。
> {{cssxref("var", "var()")}} 関数はプロパティ名やセレクターなど、プロパティ値以外のところでは使用できません。従って、メディアクエリーやコンテナークエリーの中では使用できません。

## カスタムプロパティの宣言

CSS では、プロパティ名の接頭辞として ダッシュ 2 本を使用するか、{{cssxref("@property")}} アットルールを使用してカスタムプロパティを宣言できます。
以下の項では、これら 2 つの方法について説明します。

### ダッシュ 2 本 (`--`) の接頭辞の使用

ダッシュ 2 本で始まるカスタムプロパティは、`--` で始まってプロパティ名（例: `--my-property`）が続くもので、[有効な CSS 値](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)であればどのような値でも指定できます。
他のプロパティと同様に、これはルールのセット内に記述します。次の例では、カスタムプロパティ `--main-bg-color` を作成し、[`<named-color>`](/ja/docs/Web/CSS/named-color) 値として `brown` を使用する方法を示しています。

```css
section {
  --main-bg-color: brown;
}
```

ルールセットに指定されたセレクター（例えば、上記の例では [`<section>`](/ja/docs/Web/HTML/Element/section) 要素）は、カスタムプロパティを使用できるスコープを定義します。
このため、カスタムプロパティを {{cssxref(":root")}} 擬似クラスで定義し、グローバルに参照できるようにすることが一般的です。

```css
:root {
  --main-bg-color: brown;
}
```

常にこうしなければならないわけではありません。カスタムプロパティのスコープを制限する正当な理由があるかもしれません。

> [!NOTE]
> カスタムプロパティの名前は大文字小文字を区別します。 — `--my-color` は `--My-color` とは別なカスタムプロパティとして扱われます。

### `@property` アットルールの使用

{{cssxref("@property")}} アットルールを使用すると、カスタムプロパティの定義をより詳細に表現できるようになり、プロパティに関連付けられた型、既定値の設定、および継承の制御が可能になります。
次の例では、`--logo-color` というカスタムプロパティが [`<color>`](/ja/docs/Web/CSS/color_value) を期待するものとして作成されます。

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

直接 CSS でなく JavaScript でカスタムプロパティを定義したり作業したりしたい場合は、そのために対応する API があります。
どのように動作するかについては、 [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API) ページを参照してください。

### `var()` によるカスタムプロパティの参照

どの方法でカスタムプロパティを定義しても、標準プロパティ値の代わりに {{cssxref("var", "var()")}} 関数の中でそのプロパティを参照することができます。

```css
details {
  background-color: var(--main-bg-color);
}
```

## カスタムプロパティの第一歩

スタイルを設定する HTML から始めましょう。
コンテナーとして機能する `<div>` があり、その中に子要素を記載します。その中には、入れ子になった要素もあります。

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
  <input class="four" placeholder="Four" />
  <textarea class="five">Five</textarea>
</div>
```

次の CSS を使用すると、クラスに基づいていくつかの異なる要素をスタイル設定することができます（下記では、色に焦点を当てるため、一部のレイアウトルールは表示されていません）。
クラスに応じて、`cornflowerblue` または `aquamarine` の要素に背景色を設定しています。

```css hidden
/* フォント、境界線、パディングを設定 */
body {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* それぞれのクラスに、いくつかの色を設定 */
.one {
  background-color: cornflowerblue;
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: cornflowerblue;
}
.four {
  background-color: cornflowerblue;
}
.five {
  background-color: cornflowerblue;
}
```

このようになるはずです。

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

これらのルール全体で繰り返される値をカスタムプロパティで置き換える機会があります。
`.container` スコープで `--main-bg-color` を定義し、その値を複数の場所で参照した後、更新されたスタイルは次のようになります。

```css
/* ここで --main-bg-color を定義 */
.container {
  --main-bg-color: cornflowerblue;
}

/* それぞれのクラスに、いくつかの色を設定 */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

## :root 擬似クラスの使用

CSS 宣言の中には、カスケードのより上位で宣言し、CSS 継承でこの問題を解決することが可能なものもあります。複雑なプロジェクトでは、常に可能であるとは限りません。CSS 作者は、{{cssxref(":root")}} 擬似クラスにカスタムプロパティを宣言し、文書内の必要な箇所でそれを使用することで、繰り返し記述の必要性を減らすことができます。

```css
/* ここで --main-bg-color を定義 */
:root {
  --main-bg-color: cornflowerblue;
}

/* それぞれのクラスに、いくつかの色を設定 */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

これは前回と同じ結果になりますが、望ましいプロパティ値の標準的な宣言（`--main-bg-color: cornflowerblue;`）が可能になり、これは後で自分のプロジェクト全体で値を変更したい場合にとても有益なものです。

## カスタムプロパティの継承

カスタムプロパティは継承されます。これはつまり、もし与えられた要素にカスタムプロパティの値がない場合、その値は親の値を使用するということです。 HTML を見てみましょう。

```html live-sample___dash-custom-property-inheritance
<div class="one">
  <p>One</p>
  <div class="two">
    <p>Two</p>
    <div class="three"><p>Three</p></div>
    <div class="four"><p>Four</p></div>
  </div>
</div>
```

```css hidden live-sample___dash-custom-property-inheritance
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.one {
  height: 250px;
}

.two {
  height: 80%;
}

.three {
  height: 40%;
}

.four {
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--box-color);
}

.two {
  --box-color: cornflowerblue;
}

.three {
  --box-color: aquamarine;
}
```

{{embedlivesample("dash-custom-property-inheritance", "100%", "280px")}}

`var(--box-color)` の結果は次のように、継承状況によって変わります。

- `class="one"`: _無効値_、これはすべてのカスタムプロパティの既定値です。
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue`（親から継承）

上記の例が示すカスタムプロパティの 1 つの側面は、他のプログラミング言語の変数とまったく同じには動作しないということです。
この値は、必要とされる場所で計算され、このスタイルシートの他の場所に保存されて再利用されることはありません。
例えば、プロパティの値を設定しても、兄弟の子孫のルールでその値を取得することはできません。
プロパティは、一致するセレクターとその子孫に対してのみ設定されます。

### `@property` を使用して継承を制御

`@property` アットルールでは、プロパティを継承するかどうかを明示的に指定できます。
次の例では、`@property` アットルールを使用してカスタムプロパティを作成しています。
継承は無効になっており、[`<color>`](/ja/docs/Web/CSS/color_value) データ型が定義され、`cornflowerblue` が初期値として設定されています。

親要素は、`--box-color` の値を緑に設定し、`--box-color` を背景色の値として使用します。
子要素も `background-color: var(--box-color)` を使用しており、継承が有効になっている場合（または、ダッシュ 2 本の構文を使用して定義されている場合）には、`green` 色が設定されていることが期待されます。

```html live-sample___at-property-inheritance
<div class="parent">
  <p>親要素</p>
  <div class="child">
    <p>子要素で、--box-color の継承が無効になっています。</p>
  </div>
</div>
```

```css hidden live-sample___at-property-inheritance
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css live-sample___at-property-inheritance
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  width: 80%;
  height: 40%;
  background-color: var(--box-color);
}
```

アットルールで `inherits: false;` が設定されており、`.child` スコープ内で `--box-color` プロパティの値が宣言されていないため、親から継承されるはずの `green` の代わりに `cornflowerblue` の初期値が使用されます。

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## カスタムプロパティ代替値

カスタムプロパティの代替値は、`var()` 関数と `@property` アットルールの `initial-value` を使用して定義できます。

> [!NOTE]
> 代替値はブラウザーの互換性を修正するためには使用されません。ブラウザーが CSS カスタムプロパティに対応していない場合、代替値は助けになりません。
> これは CSS カスタムプロパティに対応しているブラウザーのための単なるバックアップであり、与えられた変数が定義されていなかったり、無効な値であったりした場合に別な値を選択させるためのものです。

### `var()` 関数の代替値の定義

[`var()`](/ja/docs/Web/CSS/var) 関数を使用して、指定された変数が定義されていない場合の**代替値**を複数定義することができます。[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)および[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) で作業するときに便利なことがあります。

関数の最初の引数は、カスタムプロパティの名前です。関数の 2 番目の引数は、省略可能で、参照されたカスタムプロパティが無効であった場合に代わりに使用される代替値です。
この関数は引数を 2 つだけ受け付けるので、最初のカンマの後のものは、すべて 2 番目の引数として割り当てます。2 番目の引数が無効な場合、次のように代替処理は失敗します。

```css
.one {
  /* --my-var が定義されていなければ red */
  color: var(--my-var, red);
}

.two {
  /* my-var 及び --my-background が定義されていなければ pink */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* 無効: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

代替値としてのカスタムプロパティを含めるには、上記の 2 番目の例 (`var(--my-var, var(--my-background, pink))`) のようにすることが、`var()` で複数の代替値を提供するための正しい方法です。
ただし、階層化された変数の解析に時間がかかるため、この方法によるパフォーマンスへの影響を認識しておく必要があります。

> [!NOTE]
> 代替値の構文は、[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)の場合のように、カンマを使用することができます。例えば、 `var(--foo, red, blue)` は `red, blue` という代替値を定義します。最初のカンマから関数の終わりまでが代替値とみなされます。

### `@property` の初期値を使用した代替値

`var()` を使用する以外に、`@property` アットルールで定義された `initial-value` を代替メカニズムとして使用することができます。実際、これはすでに [`@property` の継承](#property_を使用して継承を制御)の節で見てきました。

<!-- cSpell:ignore aqumarine -->

次の例では、`@property` アットルールを使用して、`--box-color` の初期値を `cornflowerblue` に設定しています。
アットルールに続くルールセットでは、`--box-color` を `aquamarine` に設定したいのですが、値の名前にタイプミスがあります。
3 番目の `<div>` でも同じことが言有効な [`<color>` 値](/ja/docs/Web/CSS/color_value)を期待するカスタムプロパティに `2rem` を使用しています。
`2rem` と `aqumarine` はどちらもカラー値として無効であるため、`cornflowerblue` の初期値が適用されます。

```css live-sample___at-property-initial-value
@property --box-color {
  syntax: "<color>";
  initial-value: cornflowerblue;
  inherits: false;
}

.one {
  --box-color: aquamarine;
  background-color: var(--box-color);
}

.two {
  --box-color: aqumarine;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}
```

```css hidden live-sample___at-property-initial-value
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
.one {
  color: black;
}
```

```html hidden live-sample___at-property-initial-value
<div class="one">
  <p>One</p>
</div>
<div class="two">
  <p>Two.</p>
</div>
<div class="three">
  <p>Three.</p>
</div>
```

{{embedlivesample("at-property-initial-value", "100%", "150px")}}

## 無効なカスタムプロパティ

CSS の各プロパティには、定義された[値のセット](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)を割り当てることができます。
プロパティに有効な値の集合から外れた値を割り当てた場合、そのプロパティは「無効」とみなされます。

ブラウザーが通常の CSS プロパティの無効な値（例えば、{{cssxref("color")}} プロパティにおける `16px` という値）に遭遇すると、その宣言は破棄され、要素には宣言が存在しなかった場合の値が割り当てられます。
次の例では、通常のCSS宣言が無効である場合の挙動を示しています。 `color: 16px;` は無視され、代わりに以前の `color: blue` ルールが適用されます。

```html live-sample___invalid-property
<p>この段落は初期状態で黒です。</p>
```

```css live-sample___invalid-property
p {
  color: blue;
}

p {
  /* おっと、有効な色ではない */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

しかし、カスタムプロパティの値が解釈される際には、ブラウザーはまだそれらがどこで使用されるのかを知りません。そのため、ほぼすべての値を _有効_ とみなさなければなりません。
残念ながら、これらの有効な値は、`var()` 関数記法によって、意味をなさない可能性のあるコンテキストで使用されてしまうことがあります。
プロパティとカスタム変数は、無効な CSS 文につながる可能性があり、「計算時に有効」という概念につながります。

ブラウザが無効な `var()` 置換に遭遇した場合は、プロパティの[初期値](/ja/docs/Web/CSS/initial_value)または[継承値](/ja/docs/Web/CSS/Inheritance)が使用されます。
この例は、カスタムプロパティを使用している点を除いて、最後の例と同じです。

期待通りに、ブラウザーは `--text-color` の値で `var(--text-color)` の場所を置き換えようとしますが、 `16px` は {{cssxref("color")}} に妥当なプロパティ値ではありません。
置き換え後、プロパティは意味をなさなくなります。ブラウザーはこの状況を 2 段階で扱います。

1. {{cssxref("color")}} プロパティが継承可能であるかを確認します。可能ですが、 `<p>` には `color` プロパティを持つ親がありません。よって次の段階に進みます。
2. 値を**既定の初期値**、つまり、黒に設定します。

```html live-sample___invalid-custom-property
<p>この段落は初期状態で黒です。</p>
```

```css live-sample___invalid-custom-property
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property', 100, 50)}}

このような場合、`@property` アットルールを使用してプロパティの初期値を定義することで、予期せぬ結果を防ぐことができます。

```html live-sample___invalid-custom-property-fallbacks
<p>この段落は初期状態で黒です。</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property-fallbacks', 100, 50)}}

## JavaScript での値

カスタムプロパティを JavaScript で使用するには、標準のプロパティのようにします。

```js
// インラインスタイルから値を取得
element.style.getPropertyValue("--my-var");

// あらゆる場所の変数を取得
getComputedStyle(element).getPropertyValue("--my-var");

// インラインスタイルに値を設定
element.style.setProperty("--my-var", jsVar + 4);
```

## 関連情報

- [カスタムプロパティの構文](/ja/docs/Web/CSS/--*)
- {{cssxref("@property")}} アットルール
- [`var()`](/ja/docs/Web/CSS/var)
- [CSS プロパティと値 API](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables)モジュール
