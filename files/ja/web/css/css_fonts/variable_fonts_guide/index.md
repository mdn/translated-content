---
title: 可変フォントガイド
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{CSSRef}}

**可変フォント** (Variable fonts) は幅、太さ、スタイルごとに個別のフォントファイルを用意するのではなく、書体のさまざまなバリエーションを 1 つのファイルに組み込むことができる OpenType フォント仕様の進化版です。CSS および単一の {{cssxref("@font-face")}} 参照を介して、特定のフォントファイルに含まれるすべてのバリエーションにアクセスできます。この記事では、可変フォントの使用を開始するために知っておく必要があるすべての内容を説明します。

> [!NOTE]
> OS で可変フォントを使用するには、最新のフォントであることを確認してください。たとえば、Linux 系の OS には最新の Linux Freetype バージョンが必要であり、10.13 より前の macOS は可変フォントに対応していません。OS が最新でない場合、ウェブページや Firefox 開発ツールで可変フォントを使用できません。

## 可変フォント: 何であるか、何が違うのか

可変フォントの違いをよりよく理解するためには、可変でないフォントが何であり、どのように比較するかを確認するのがいいでしょう。

### 標準 (または静的) フォント

以前は、一つの書体がいくつもの個別のフォントとして作成され、それぞれのフォントが特定の幅/太さ/スタイルの組み合わせを表していました。したがって 'Roboto Regular'、'Roboto Bold'、'Roboto Bold Italic' のように個別のファイルがありました。— すなわち、完全な書体を表すのに 20 ～ 30 に及ぶ異なるフォントファイルで表していました (幅の異なる大きな書体の数倍になる場合もありました)。

このようなシナリオでは、サイトで一般的に使用される書体を本文に使用するためには、少なくとも通常、イタリック、太字、太字イタリックの 4 つのファイルが必要になります。キャプションには細字を、強調には太字を、といったように、より多くの太さをを追加したい場合は、さらにいくつかのファイルが必要になります。その結果、HTTP リクエストが多くなり、ダウンロードされるデータも多くなります (通常は 1 ファイルあたり約 20k 以上)。

### 可変フォント

可変フォントでは、それらのすべての組み合わせを 1 つのファイルに収めることができます。そのファイルは単一のフォントよりも大きくなりますが、たいていの場合は、本文の表示用に読み込んだ 4 つのファイルよりも小さいか、同じくらいのサイズになります。可変フォントを選択する利点は、以前は別々に読み込んでいたものをいくつかだけに制限されるのではなく、利用可能な太さや幅、スタイルの全範囲にアクセスできることです。

これにより、各サイズでの読みやすさを高めるために異なるサイズの見出しを異なる太さで設定したり、データの多い表示には幅をやや狭くしたりするなど、一般的な書体技術が可能になります。比較のために、雑誌の書体システムでは、出版物全体で 10 ～ 15 種類以上の異なる太さと幅の組み合わせを使用するのが一般的で、現在のウェブ上の一般的なスタイルよりもはるかに幅広いスタイルを提供しています (実際にはパフォーマンスの理由だけで実用的です)。

#### フォントファミリー、太さ、異体字についての注意

それぞれの太さやスタイル (太字、イタリック、太字イタリックなど) をブラウザーの合成に頼るのではなく、個別に特定のフォントファイルを持つという話をしてきたことに気づくかもしれません。その理由は、ほとんどの書体は太字と斜体についてとても特殊なデザインを持っており、その中にはまったく異なる文字が含まれていることが多いからです (例えば、小文字の 'a' と 'g' は斜体ではかなり異なることが多いです)。書体デザインを最も正確に反映させ、ブラウザーによる違いや、異なるスタイルを合成するかどうかの違いを避けるためには、可変ではないフォントを使用する場合には、必要な場所に具体的なフォントファイルを読み込む方が正確です。

また、可変フォントによっては 2 つのファイルに分割されていることに気づくかもしれません。 1 つは直立とそのすべての変化形、もう 1 つはイタリックの変化形を含むファイルです。これは、イタリック体を必要としない場合や使用しない場合に、全体のファイルサイズを小さくするために行われることがあります。いずれの場合も、共通の {{cssxref("font-family")}} 名でそれらをリンクさせることができるので、同じ `font-family` と適切な {{cssxref("font-style")}} を使ってそれらを呼び出すことができます。

## 「バリエーション軸」の紹介

新しい可変フォント指定形式の中心となるのは、書体デザインの特定の側面の許容範囲を記述する**バリエーション軸**という概念です。すなわち、「太さ軸」は書体の太さや細さを表し、「幅軸」は書体の幅が広いか狭いかを表し、「イタリック軸」はイタリック体の書体であるかどうかを表し、それに応じてオン/オフを切り替えることができます。軸は範囲またはバイナリーの選択が可能であることに注意してください。重みは 1-999 の範囲ですが、イタリックは単純に 0 か 1 (オフかオンか) です。

仕様書で定義されているように、軸には**登録済み**と**カスタム**の 2 種類があります。

- 登録済みの軸は、もっとも頻繁に遭遇するもので、仕様書の著者が標準化する価値があると感じるほど一般的なものです。現在登録されている軸は、太さ、幅、斜体、イタリック、オプティカルサイズの 5 つです。W3C では、これらの軸を既存の CSS 属性に対応付けることを試みましたが、あるケースでは下記の通り、新しい軸を導入しました。
- カスタム軸には制限がありません。書体デザイナーは、好きな軸を定義して範囲を指定することができ、フォントファイルの形式内でそれを識別するために 4 文字の**タグ**を与えればよいのです。この 4 文字のタグを CSS で使用することで、以下のコード例のように、バリエーションの軸に沿って位置を指定することができます。

### 登録済みの軸と既存の CSS 属性

この節では、例で定義された 5 つの登録軸と、それに対応する CSS を紹介します。可能な限り、標準の構文と低水準の構文の両方を掲載しています。低水準の構文 ({{cssxref("font-variation-settings")}}) は、可変フォントに対応する初期の実装をテストするために実装された最初のメカニズムであり、登録された 5 つの軸以外の新しい軸やカスタム軸を利用するために必要です。しかし、W3C は他の属性が利用できる場合には、この構文を使用しないよう意図していました。したがって、可能な限り、適切なプロパティを使用するべきであり、`font-variation-settings` の低水準の構文は、他では利用できない値や軸を設定するためにのみ使用してください。

#### メモ

1. `font-variation-settings` を使用する際には、軸名の大文字と小文字が区別されることに注意する必要があります。登録済みの軸名は小文字で、カスタム軸は大文字でなければなりません。例えば、以下のようになります。

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` (太さ) は登録済みの軸で、`GRAD` (等級) はカスタム軸です。

2. `font-variation-settings` を使って値を設定していて、そのうちの 1 つの値を変更したい場合は、すべての値を再宣言しなければなりません ({{cssxref("font-feature-settings")}} を使って OpenType フォントの特性を設定したときと同じ方法です)。この制限を回避するには、個々の値に [CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties) (CSS 変数)を使用し、個々のカスタムプロパティの値を変更してください。ガイドの最後にサンプルコードを掲載しています。

### 太さ

太さ (`wght` タグで表される) は、文字の角をどれだけ細く、あるいは太く (植字用語でいうところのライト、ヘビー) できるかというデザイン上の軸を定義するものです。CSS では長い間、{{cssxref("font-weight")}} プロパティを使ってこれを指定する機能がありました。このプロパティは 100 から 900 までの 100 刻みの数値を取り、`normal` や `bold` といったキーワードは、対応する数値 (この場合は 400 と 700) の別名です。これらは、非可変フォントや可変フォントを扱うときにも適用されますが、可変フォントの場合は、1 から 1000 までの任意の数値が有効になります。

現時点では、`@font-face` 宣言の中で、可変フォントの変動する軸上の特定の点をキーワード `bold` (またはその他のキーワード) に「対応付け」する方法がないことに注意してください。これは一般的に非常に簡単に解決することができますが、CSS を書く際に余分なステップが必要になります。

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。次のライブ例の CSS を編集することで、font-weight の値を操作することができます。

```html hidden live-sample___variable-fonts-weight-example
<div>
  <p class="p1">Weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p class="p2">Weight</p>
  <span>(font-variation-settings: "wght" 625)</span>
</div>
<div class="adjustable">
  <p class="p3">Weight</p>
  (font-variation-settings: "wght" <span id="angle-text">625</span>)<br />
  <label for="text-axis">Adjust Weight: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="300"
    max="900"
    value="625" />
</div>
```

```css hidden live-sample___variable-fonts-weight-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 625;
}
```

```css live-sample___variable-fonts-weight-example
/* weight range is 300 to 900 */
.p1 {
  font-weight: 625;
}

/* weight range is 300 to 900 */
.p2 {
  font-variation-settings: "wght" 625;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wght" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-weight-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-weight-example", "", "450px")}}

### 幅

幅 (`wdth` タグで表される) は、文字の幅をどれだけ狭くするか、あるいは広くするか (植字用語でいう condensed または extended) というデザイン上の軸を定義します。これは通常、CSS で {{cssxref("font-stretch")}} プロパティを使用して設定され、値は「通常」(100%) の上または下のパーセント値で表されます。与えられた数値がフォントにエンコードされた範囲外である場合、ブラウザーは許容される最も近い値でフォントをレンダリングしなければなりません。

> [!NOTE]
> % 記号は `font-variation-settings` を使用する上では不要です。

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。次のライブ例の CSS を編集することで、フォントの幅の値を変更することができます。

```html hidden live-sample___variable-fonts-width-example
<div>
  <p class="p1">Width</p>
  <span>(font-stretch: 60%)</span>
</div>
<div>
  <p class="p2">Width</p>
  <span>(font-variation-settings: "wdth" 60)</span>
</div>
<div class="adjustable">
  <p class="p3">Width</p>
  (font-variation-settings: "wdth" <span id="angle-text">60</span>)<br />

  <label for="text-axis">Adjust Width: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="55"
    max="100"
    value="60" />
</div>
```

```css hidden live-sample___variable-fonts-width-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 35% 100%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 60;
}
```

```css live-sample___variable-fonts-width-example
/* width range is 55% to 100% */
.p1 {
  font-stretch: 60%;
}

/* width range is an integer from 55 to 100 */
.p2 {
  font-variation-settings: "wdth" 60;
}

/* Adjust with slider & custom property */
.p3 {
  font-variation-settings: "wdth" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-width-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-width-example", "", "450px")}}

### イタリック

イタリック (`ital`) 軸は、オンかオフのどちらかであるという点で動作が異なり、その中間はありません。イタリックのデザインには、正立のデザインとは大きく異なる字形が含まれていることが多く、正立からイタリックへの移行の際には、通常、いくつかのグリフ (または文字) の置換が行われます。イタリックと斜体は同じように使われることが多いのですが、実際には全く異なるものです。斜体はこの文脈では `slant` という用語で定義されており (下の節を参照)、書体は通常どちらか一方を持ちますが、両方を持つことはありません。

CSS では、{{cssxref("font-style")}} プロパティを使用して、イタリックと斜体の両方をテキストに適用します。 また、`font-synthesis: none;` が導入され、ブラウザーが誤って変動軸と合成されたイタリックを適用するのを防ぐことができます。これは、擬似太字を防ぐためにも使用できます。

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

次のライブ例の CSS を編集することで、フォントのイタリックを遊べるようになります。

```html hidden live-sample___variable-fonts-italic-example
<div>
  <p class="p1">Italic</p>
  <span>(font-style: italic)</span>
</div>
<div>
  <p class="p2">Italic</p>
  <span>(font-variation-settings: "ital" 1)</span>
</div>
<div class="adjustable">
  <p class="p3">Italic</p>
  (font-variation-settings: "ital" <span id="angle-text">1</span>)<br />

  <label for="slant-angle">Adjust Italic: </label>
  <input
    type="range"
    id="text-axis"
    name="text-axis"
    min="0"
    max="1"
    value="1" />
</div>
```

```css hidden live-sample___variable-fonts-italic-example
@font-face {
  font-family: "Jost VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/jost-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-display: swap;
}

p {
  font:
    1.2em "Jost VF",
    Helvetica,
    Arial,
    sans-serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 1;
}
```

```css live-sample___variable-fonts-italic-example
/* italic range is 0 or 1 */
.p1 {
  font-synthesis: none;
  font-style: italic;
}

/* italic range is 0 or 1 */
.p2 {
  font-synthesis: none;
  font-variation-settings: "ital" 1;
}

/* Adjust with slider & custom property */
.p3 {
  font-synthesis: none;
  font-variation-settings: "ital" var(--text-axis);
}
```

```js hidden live-sample___variable-fonts-italic-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("variable-fonts-italic-example", "", "450px")}}

### 斜体

斜体 (`slnt`タグで表される) は、または 'oblique' とも良く呼ばれますが、文字の角度を変えるという点で真のイタリックとは異なりますが、何らかの文字の置換を行うわけではありません。また、数値の範囲で表現されるという点で、可変性があります。これにより、フォントをその軸に沿ってどこでも変化させることができます。許容される範囲は -90 〜 90 度の範囲です。

傾きを制御できるプロパティは、 [`font-style`](/ja/docs/Web/CSS/font-style) と [`font-variation-settings`](/ja/docs/Web/CSS/font-variation-settings) の2つです。次の 2 つのプロパティ宣言は同じです。

```plain
font-style: oblique 14deg;

font-variation-settings: "slnt" -14;
```

`font-style` プロパティを `font-variation-settings` プロパティよりも推奨します。 `deg` キーワードは `font-variation-settings` プロパティを使用する場合は用いません。また、 `font-variation-settings` プロパティの場合、正の値は反時計回りの傾きを意味しています。

以下のライブサンプルでは、傾きを調整することができます。

```html hidden live-sample___slant-example
<div>
  <p class="font-style">Slant</p>
  <span>(font-style: oblique 5deg)</span>
</div>
<div>
  <p class="font-variation">Slant</p>
  <span>(font-variation-settings: 'slnt' -5)</span>
</div>
<div class="adjustable-box">
  <p class="adjustable">Slant</p>
  (font-variation-settings: 'slnt' <span id="angle-text">-5</span>)<br />

  <label for="slant-angle">傾きを調整: </label>
  <input
    type="range"
    name="range-slider"
    value="5"
    id="slant-angle"
    min="-15"
    max="15" />
</div>
```

```css hidden live-sample___slant-example
@font-face {
  font-family: "SlantFont";
  font-style: oblique -15 15;
  src: url("https://mdn.github.io/shared-assets/fonts/font_with_slant_axis.woff2")
    format("woff2");
}

p {
  font-family: "SlantFont";
  display: inline-block;
  margin: 1rem;
  font-size: 4rem;
}

.adjustable-box {
  border: 1px dashed;
  --text-axis: -5;
}
```

```css live-sample___slant-example
.font-style {
  font-style: oblique 5deg;
}

.font-variation {
  font-variation-settings: "slnt" -5;
}

.adjustable {
  font-variation-settings: "slnt" var(--slant-angle);
}
```

```js hidden live-sample___slant-example
const angle = document.querySelector("#slant-angle");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = -1 * e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--slant-angle", angle);
});
```

{{EmbedLiveSample("slant-example", "", "400")}}

### オプティカルサイズ

これは、デジタルフォントや CSS にとっては目新しいことですが、金属製の活字をデザイン・制作する上では何世紀も前からある技術です。オプティカルサイズとは、物理的なサイズに基づいて、文字の全体的なストロークの太さを変化させる手法のことです。サイズがとても小さい場合 (例えば 10 または 12px に相当)、文字は全体的に太いストロークを持ち、物理的に小さいサイズでも再現して読めるように、おそらくその他の小さな修正が加えられます。逆に、48 や 60px のような大きなサイズの場合は、ストロークの太さや細さに大きなバリエーションがあり、本来の意図に沿った書体デザインになっているかもしれません。

これは元々、インクと紙の印刷プロセスを補正するために行われたものですが (小さな文字ではとても細い線がかすれてしまうことが多く、字形が壊れているように見える)、スクリーンの品質や物理的な大きさのレンダリングを補正する際には、デジタルディスプレイにもうまく適用されます。

オプティカルサイズの値は、一般的には `font-size` に対応して自動的に適用されるべきですが、低レベルの `font-variation-settings` 構文を使用して操作することもできます。

CSS で可変フォントに対応するために、{{cssxref("font-optical-sizing")}} という新しい属性が作成されました。`font-optical-sizing` を使用する場合、許可される値は `auto` または `none` だけです。つまり、この属性はオプティカルサイズのオン/オフのみを可能にします。しかし、`font-variation-settings: 'opsz' <num>` を使用する場合には、数値を指定することができます。ほとんどの場合、`font-size` (文字がレンダリングされる物理的な大きさ) と一致する `opsz` の値を使用することになるでしょう (これは、`auto` を使用しているときに適用されるオプティカルサイズです)。読みやすさや美しさなどの理由で既定値を上書きする必要がある場合は、特定の値を適用できるようになっています。

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。次のライブ例の CSS を編集することで、オプティカルサイズをを変更することができます。

```html hidden live-sample___optical-sizing-example
<div>
  <p class="p1">Optical Size</p>
  <span>(font-optical-sizing: none)</span>
</div>
<div>
  <p class="p2">Optical Size</p>
  <span>(font-optical-sizing: auto)</span>
</div>
<div>
  <p class="p3">Optical Size</p>
  <span>(font-variation-settings: "opsz" 64)</span>
</div>

<div class="adjustable">
  <p class="p4">Optical Size</p>
  (font-variation-settings: "opsz" <span id="angle-text">-64</span>)<br />

  <label for="slant-angle">Adjust Optical Sizing: </label>
  <input
    type="range"
    name="text-axis"
    value="64"
    id="text-axis"
    min="8"
    max="144" />
</div>
```

```css hidden live-sample___optical-sizing-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 4rem;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 64;
}
```

```css live-sample___optical-sizing-example
.p1 {
  font-optical-sizing: none;
}
/* font-optical-sizing can be auto or none */
.p2 {
  font-optical-sizing: auto;
}

/* optical range is from 8 to 144 */
.p3 {
  font-variation-settings: "opsz" 64;
}

/* Adjust with slider & custom property */
.p4 {
  font-variation-settings: "opsz" var(--text-axis);
}
```

```js hidden live-sample___optical-sizing-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("optical-sizing-example", "", "550px")}}

### カスタム軸

カスタム軸とは、書体デザイナーが思い描くデザインバリエーションの軸のことです。もしかしたら、既に一般的になっていたり、登録されたりするものもあるかもしれませんが、それは時間の問題です。

### 等級

等級は書体デザインの歴史の中で知られており、より一般的なカスタム軸の一つになるかもしれません。ある書体の異なる等級をデザインすることは、使用目的や印刷技術に応じて行われることが多かったのです。'grade' という言葉は、書体デザインの相対的な太さや濃さを意味しますが、従来の「太さ」とは異なり、テキストが占める物理的な空間は変化しないため、テキストの等級を変えても、テキストやその周りの要素の全体的なレイアウトが変わることはありません。これにより、等級は、テキスト自体の再フローを引き起こすことなく、変化やアニメーションを行うことができるバリエーションの軸として有効です。

```css
font-variation-settings: "GRAD" 88;
```

以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。次のライブ例の CSS を編集することで、等級の値をを変更することができます。

```html hidden live-sample___grade-example
<div>
  <p class="p1">Grade</p>
  <span>(font-variation-settings: 'GRAD' 88)</span>
</div>

<div class="adjustable">
  <p class="p2">Grade</p>
  (font-variation-settings: 'GRAD' <span id="angle-text">88</span>)<br />

  <label for="slant-angle">Adjust Grade: </label>
  <input
    type="range"
    name="text-axis"
    value="88"
    id="text-axis"
    min="88"
    max="150" />
</div>
```

```css hidden live-sample___grade-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

p {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  font-size: 64px;
  margin: 1rem;
  display: inline-block;
}

.adjustable {
  border: 1px dashed;
  --text-axis: 88;
}
```

```css live-sample___grade-example
/* grade range is 88 to 150 */
.p1 {
  font-size: 64px;
  font-variation-settings: "GRAD" 88;
}

/* Adjust with slider & custom property */
.p2 {
  font-size: 64px;
  font-variation-settings: "GRAD" var(--text-axis);
}
```

```js hidden live-sample___grade-example
const angle = document.querySelector("#text-axis");
const text = document.querySelector("#angle-text");
const adjustable = document.querySelector(".adjustable");

angle.addEventListener("input", (e) => {
  const angle = e.target.value;
  text.innerText = angle;
  adjustable.style.setProperty("--text-axis", angle);
});
```

{{EmbedLiveSample("grade-example", "", "300px")}}

### 可変フォントの使用: @font-face の変更

可変フォントを読み込むための構文は、他のウェブフォントと非常によく似ていますが、いくつかの注目すべき違いがあり、それらはモダンブラウザーで利用可能な従来の {{cssxref("@font-face")}} 構文を拡張する形で提供されています。

基本的な構文は同じですが、フォントの技術を指定することができ、読み込まれるフォントファイルに応じた名前ではなく、`font-weight` や `font-stretch` などの記述子の許容範囲を指定することができます。

#### 標準の直立の (ローマン) フォントの例

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}
```

この場合、 `normal` 値は、スタイル設定において `font-family` プロパティが `MyVariableFontName` で [font-style](/ja/docs/Web/CSS/font-style) プロパティが `normal` であるとき、このフォントファイルを使用しましょうということを示しています。 `oblique 0deg` と `oblique 0deg 20deg` の値は、 `0deg` のため、フォントが通常の正立字体を持っていることも示しています。

#### イタリック体のみを含み、直立文字を含まないフォントの例

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: italic;
}
```

この場合では、 `italic` 値は、スタイル設定において `font-family` プロパティが `MyVariableFontName` で [font-style](/ja/docs/Web/CSS/font-style) プロパティが `italic` であるとき、このフォントファイルを使用しましょうということを示しています。また、 `oblique 14deg` の値は、フォントがイタリック体の字体を持っていることを示しています。

#### 斜体軸を含むフォントの例

```css
@font-face {
  font-family: "MyVariableFontName";
  src: url("path/to/font/file/my-variable-font.woff2")
    format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 12deg;
}
```

この場合、 `oblique 0deg 12deg` の値は、スタイルルール内で `font-family` プロパティが `MyVariableFontName` で、 [font-style](/ja/docs/Web/CSS/font-style) プロパティが `oblique` で角度が 0 度から 12 度までのときに、このフォントファイルを使用しましょうということを示しています。

> [!NOTE]
> すべてのブラウザーがフォント指定形式の完全な構文を実装しているわけではないので、慎重にテストしてください。可変フォントに対応しているブラウザーはすべて、形式を format-variations ではなく、ファイル形式だけに設定してもレンダリングされますが (例：`woff2-variations` ではなく `woff2`)、可能であれば適切な構文を使用することをお勧めします。

> **メモ:** `font-weight`, `font-stretch`, `font-style` に値の範囲を指定した場合は、適切な属性 (すなわち `font-weight` や `font-stretch`) を使用していると、ブラウザーがその範囲外の軸をレンダリングしようとしないようにしますが、`font-variation-settings` で無効な値を指定した場合には、それを阻止することはできませんので注意して使用してください。

## 古いブラウザーでの作業

可変フォントの対応状況は、CSS 機能クエリーで確認できます ({{cssxref("@supports")}} を参照)。そのため、本番で可変フォントを使用し、可変フォントを呼び出す CSS を機能クエリーブロック内に限定することができます。

```css
h1 {
  font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: "wdth" 115) {
  h1 {
    font-family: some-variable-font-family;
  }
}
```

## サンプルページ

以下のサンプルページでは、CSS を構成する 2 つの異なる方法を示しています。最初の例では、可能な限り標準の属性を使用しています。2 つ目の例では、CSS カスタムプロパティを使用して、`font-variation-settings` の文字列に値を設定し、文字列全体を書き換えるのではなく、単一の変数をオーバーライドすることで、単一の変数の値をより簡単に更新する方法を示しています。`h2` のホバー効果に注目してください。これは等級軸のカスタムプロパティ値を変更しているだけです。以下のコードブロック内の "Play" をクリックすると、 MDN Playground で例を編集できます。

```html hidden live-sample___sample-page-example
<div class="container container1">
  <h1>Moby Dick</h1>
  <h2>CHAPTER 1. Loomings.</h2>
  <p>
    Call me Ishmael. Some years ago—never mind how long precisely–having little
    or no money in my purse, and nothing particular to interest me on shore, I
    thought I would sail about a little and see the watery part of the world. It
    is a way I have of driving off the spleen and regulating the circulation.
    Whenever I find myself growing grim about the mouth; whenever it is a damp,
    drizzly November in my soul; whenever I find myself involuntarily pausing
    before coffin warehouses, and bringing up the rear of every funeral I meet;
    and especially whenever my hypos get such an upper hand of me, that it
    requires a strong moral principle to prevent me from deliberately stepping
    into the street, and methodically knocking people’s hats off then, I account
    it high time to get to sea as soon as I can.
  </p>
</div>
<hr />
<div class="container container2 demo2">
  <h1>Moby Dick</h1>
  <h2>CHAPTER 1. (hover here)</h2>
  <p>
    Call me Ishmael. Some years ago—never mind how long precisely–having little
    or no money in my purse, and nothing particular to interest me on shore, I
    thought I would sail about a little and see the watery part of the world. It
    is a way I have of driving off the spleen and regulating the circulation.
    Whenever I find myself growing grim about the mouth; whenever it is a damp,
    drizzly November in my soul; whenever I find myself involuntarily pausing
    before coffin warehouses, and bringing up the rear of every funeral I meet;
    and especially whenever my hypos get such an upper hand of me, that it
    requires a strong moral principle to prevent me from deliberately stepping
    into the street, and methodically knocking people’s hats off then, I account
    it high time to get to sea as soon as I can.
  </p>
</div>
```

```css hidden live-sample___sample-page-example
@font-face {
  font-family: "Amstelvar VF";
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.woff2")
    format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 75% 150%;
  font-style: normal;
  font-display: swap;
}

body {
  font:
    1.2em "Amstelvar VF",
    Georgia,
    serif;
  margin: 20px;
  padding: 0;
}

.container * {
  margin: 0.5rem auto 1rem;
  max-width: 42rem;
}
```

```css live-sample___sample-page-example
.container1 h1 {
  font-optical-sizing: auto;
  font-size: 5rem;
  font-stretch: 85%;
  font-weight: 450;
}
.container1 h2 {
  font-optical-sizing: auto;
  font-size: 2.25rem;
  font-stretch: 90%;
  font-weight: 575;
}
.container1 p {
  font-optical-sizing: auto;
  font-size: 1rem;
  font-stretch: 100%;
  font-weight: 375;
}
.demo2 {
  --text-wght: 375;
  --text-wdth: 100;
  --text-opsz: 16;
  --text-GRAD: 88;
}
.container2 > * {
  font-size: 5rem;
  font-variation-settings:
    "wght" var(--text-wght),
    "wdth" var(--text-wdth),
    "opsz" var(--text-opsz),
    "GRAD" var(--text-GRAD);
}
.container2 h1 {
  --text-wght: 450;
  --text-wdth: 85;
  --text-opsz: 80;
  font-size: 5rem;
}
.container2 h2 {
  --text-wght: 575;
  --text-wdth: 95;
  --text-opsz: 36;
  font-size: 2.25rem;
}
.container2 h2:hover {
  --text-GRAD: 130;
}
.container2 p {
  font-size: 1rem;
}
```

{{EmbedLiveSample("sample-page-example", "", "850px")}}

## 参考文献

- [W3C CSS Fonts Module 4 Specification](https://drafts.csswg.org/css-fonts-4) (編集者草稿)
- [W3C Github issue queue](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variations introduction](https://learn.microsoft.com/ja/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variation Axis Tag Registry](https://learn.microsoft.com/ja/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com) (ドラッグ＆ドロップで簡単にフォントの特性を調べることができるサイト)
- [Axis Praxis](https://www.axis-praxis.org) (オリジナル可変フォントの遊び場サイト)
- [V-Fonts.com](https://v-fonts.com) (可変フォントのカタログとその入手先)
- [Font Playground](https://play.typedetail.com) (ユーザーインターフェイスに非常に独特なアプローチを持つ、可変フォントのもう一つの遊び場。)
