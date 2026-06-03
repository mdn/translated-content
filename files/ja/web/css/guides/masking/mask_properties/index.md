---
title: CSS のマスクプロパティ
short-title: マスクプロパティ
slug: Web/CSS/Guides/Masking/Mask_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS マスクは、要素の可視領域を定義することができる技術であり、適用されたマスク画像のアルファチャンネル（およびオプションで色）に基づいて要素の一部を選択的に表示または非表示にするマスクを適用します。

[マスク入門ガイド](/ja/docs/Web/CSS/Guides/Masking)では、さまざまな種類のマスク画像とそのモードについて紹介しています。[複数のマスクの宣言](/ja/docs/Web/CSS/Guides/Masking/Multiple_masks)では、[マスクレイヤー](/ja/docs/Web/CSS/Guides/Masking/Multiple_masks#understanding_mask_layers)と {{cssxref("mask")}} 一括指定プロパティについて解説し、一括指定プロパティを構成する各プロパティの概要を説明しています。このガイドでは、これらの要素プロパティをさらに詳細に検討し、それらの対話する様子を見ていきます。同時に、複数のマスク画像が宣言された場合に、[マスクレイヤーが合成される](#the_mask-composite_property)仕組みについても説明します。

CSS マスクは、1 つ以上のマスクレイヤーで構成されます。`mask` または `mask-image` のカンマ区切りリスト内のそれぞれの値に対してマスクレイヤーが作成されます。値が画像、マスクソース、またはキーワード `none` のいずれであっても同様です。それぞれの {{cssxref("mask-image")}} は、[位置指定](#mask-position_プロパティ)を[原点](#mask-origin_プロパティ)ボックスに対して相対的に行います。マスク画像は、[サイズ変更](#mask-size_プロパティ)、[反復](#mask-repeat_プロパティ)、[クリップ](#mask-clip_プロパティ)された後、前のレイヤーと合成され、要素上の最終的な視覚的マスクが作成されます。

## `mask-image` プロパティ

マスクを作成するための最低要件は、{{cssxref("mask-image")}} プロパティを `none`以外の値に設定することです。
マスクソースのリスト内でキーワード `none` を指定すると、マスクレイヤーが作成されます。ただし、`mask-image` プロパティの値が `none` のみの場合、マスク処理は行われません。

マスク画像は [CSS グラデーション](/ja/docs/Web/CSS/Guides/Images/Using_gradients)、[インポートされた画像](/ja/docs/Web/CSS/Guides/Masking/Introduction#インポートした画像で)（PNG、SVG、など）、SVG の {{svgelement("mask")}} 要素にすることができます。

この例では、インポートした画像、2つのグラデーション、画像のないレイヤー、およびマスク画像として SVG `<mask>` ソースを含む、5つのマスクレイヤーを作成します。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
}
```

マスク画像の 1 つが `none` として指定されているため、`.masked-element` 要素には 4 つのマスク画像のみが適用されますが、5 つのマスクレイヤーを作成します。

### `none` の重要性

`none` レイヤーは通常、視覚的な効果を持ちません（適用されるマスクへの影響については [`mask-composite` プロパティ](#mask-composite_プロパティ)を参照）。しかし、`mask-*` 値のカンマ区切りリスト内のそれぞれの値が、個別のマスクレイヤーに適用されるため、`none` 値は合成マスクを変更しない場合でも重要な役割を果たします。

この5レイヤー構造における 4 番目のレイヤーは、他のカンマ区切り `mask-*` プロパティ値の 4 番目の値と一致します。前回述べた通り、レイヤー数は {{cssxref("mask-image")}} プロパティ値内のカンマ区切り値の数によって決定されます。値が `none` であっても同様です。それぞれの `mask-*` 値は順に `mask-image` 値と照合されます。`mask-*` プロパティの値数がマスクレイヤー数と異なる場合、余った値は無視されます。逆にプロパティの値数がマスクレイヤー数より少ない場合は値が繰り返されます。

`mask-*` プロパティが単一値の場合、この値はすべてのレイヤーに適用されます。5 つの値がある場合、4 番目の値は `none` レイヤーに適用され、最後の値は `<mask>` ソースレイヤーに適用されます。カンマ区切り値が 2 つある場合、まず値は `<mask>` ソースレイヤーを含む奇数レイヤーのみに適用されます。例えば、それぞれの `mask-*` プロパティは異なる数の値を持つことが可能です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-repeat: repeat-x, repeat-y;
  mask-position:
    center,
    top left,
    bottom right;
}
```

この場合、奇数レイヤーは x 軸方向に、偶数レイヤーは y 軸方向にそれぞれ繰り返されます。まず 1 番目と 4 番目のレイヤー画像は中央に配置され、2 つ目と 5 番目は左上角に位置指定されます。`none` は、5 番目のレイヤーの `#svg-mask` 画像が左上角から x 軸方向に反復されるということになります。

[マスクレイヤーと `none` キーワードについて](/ja/docs/Web/CSS/Guides/Masking/Multiple_masks#マスクレイヤーと_none_キーワード)をご覧ください。

## `mask-mode` プロパティ

{{cssxref("mask-mode")}} プロパティは、それぞれのマスクレイヤーのモードを `alpha` または `luminance` のどちらかへ設定するために使用できます。あるいは、値を `match-source`（デフォルト値）に設定することで、ソースのモードにデフォルトで合わせることも可能です。ほとんどの `mask-*` プロパティには対応する `background-*` プロパティが存在します（例えば、`mask-image` は {{cssxref("background-image")}} プロパティに対応します）が、`mask-mode` と [`mask-composite`](#mask-composite_プロパティ) には対応する {{cssxref("background")}} プロパティは存在しません。

### マスク型: `alpha` と `luminance`

それぞれのマスクは、`alpha` マスクと `luminance` マスクのどちらかです。

`alpha` マスクでは、それぞれのマスクピクセルにおけるアルファ透過率が重要です。マスクが不透明な部分では、要素の対応する部分が可視になります。マスクが透明な部分では、要素の対応する部分が非表示になります。マスクが半透明な部分では、要素も同様に半透明になります。マスクの色自体は重要ではなく、色のアルファ透過率が重要です。

`luminance` マスクでは、[マスクの色の明るさ](/ja/docs/Web/CSS/Guides/Masking/Introduction#アルファ透過度と輝度)とアルファチャンネルの両方が、マスク処理された領域の不透明度を決定します。

> [!NOTE]
> 以降のすべての例では、マスクが適用される要素に対して以下の画像を`background-image`として使用します。
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

この例は、`alpha` マスクと `luminance` マスクの違いを示しています。マスク自体は同じですが、`alpha` マスクではグラデーションマスクの色のアルファ透過度のみが影響します。一方、`luminance` の例では R、G、B、A のすべての値が影響します。

2 つのコンテナーには画像が含まれていますが、最後のコンテナーは空です。ただし、`mask-image` として使用するグラデーションを表示させるために含めています。

```html live-sample___mode
<div class="alpha">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="luminance">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="gradient"></div>
```

```css hidden live-sample___mode live-sample___position live-sample___position_no-repeat live-sample___clip live-sample___origin live-sample___size live-sample___composite live-sample___composite2 live-sample___composite3
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image: conic-gradient(
    transparent 90deg,
    rgb(0 0 0 / 0.05) 90deg 180deg,
    transparent 180deg 270deg,
    rgb(0 0 0 / 0.05) 270deg
  );
  background-size: 30px 30px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
div {
  border: 1px solid black;
}
```

赤、透明、半透明の赤の斜め縞模様を持つ [`repeating-linear-gradient`](/ja/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) を宣言します。このグラデーションはマスクとして使用され、最後のコンテナーでは背景画像として使用されます。

```css live-sample___mode
img {
  mask-image: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
.gradient {
  background: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
```

それぞれの画像に対して `mask-mode` プロパティに異なる値を設定します。

```css live-sample___mode
.alpha img {
  mask-mode: alpha;
}

.luminance img {
  mask-mode: luminance;
}
```

{{EmbedLiveSample("mode", "", "270px")}}

`alpha` の場合、グラデーションの色の透過率のみが重要です。グラデーションが不透明な赤である箇所では、画像も不透明になります。グラデーションが透明な箇所では、画像は非表示になります。グラデーションの透明度が 50% の箇所では、画像も 50% 不透明になります。`luminance` の場合、色の明るさが重要です。マスクの不透明度を算出する式（色の R、G、B、A チャンネルを使用）を学ぶには、[アルファ透過と輝度](/ja/docs/Web/CSS/Guides/Masking/Introduction#アルファ透過度と輝度)を参照してください。

### `mask-mode` のデフォルト値: `match-source`

`mask-mode` プロパティのデフォルト値は `match-source` です。この値は、マスクのモード型に一致するよう `mask-mode` を設定します。`match-source` 値は、マスクソースが SVG の {{svgelement("mask")}} 要素であるマスクを除き、すべての場合で `alpha` に解決されます。

SVG の `<mask>` 要素がマスクソースとして使用されている場合、`match-source` の値は `<mask>` 要素の {{cssxref("mask-type")}} プロパティの値に解決されます。`<mask>` 要素（「マスクされた要素」ではない）に CSS の `mask-type` プロパティが定義されていない場合、このプロパティは、存在すれば SVG の {{svgAttr("mask-type")}} 属性の値をデフォルトとします。これも省略した場合には、`match-source` の値は `luminance` に解決されます。

`masked-element` の例を続けると、`mask-mode` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `match-source` が適用されます。これは次の設定を行った場合と同様です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
}
```

または、`mask` 一括指定を使って次のようにします。

```css
.masked-element {
  mask:
    url("alphaImage.png") match-source,
    linear-gradient(to right, black, transparent) match-source,
    radial-gradient(circle, white 50%, transparent 75%) match-source,
    none match-source,
    url("#svg-mask") match-source;
}
```

最初マスクレイヤーである `url("alphaImage.png")` は画像を参照しています。これは `<svg>` 内の `<mask>` 要素ではないため、`mask-mode` は `alpha` として解釈されます。この画像の不透明部分は対応する要素の部分を可視化し、透明または半透明の部分は不可視または部分的に可視化します。

`linear-gradient(to right, black, transparent)` は 2 つ目のマスクレイヤーであり、`radial-gradient(circle, white 50%, transparent 75%)` は 3 つ目のレイヤーです。これらは `<mask>` 要素ではないため、`match-source` の値は `alpha` に解決されます。これらのレイヤーのマスク効果は、デフォルトで[グラデーションマスクの不透明度](/ja/docs/Web/CSS/Guides/Masking/Introduction#不透明度と透過率)によって決定されます。

4 番目のマスクレイヤーには `none` が宣言されており、このレイヤーのマスクは透明な黒ということになります。`.masked-element` クラスは `mask-mode: match-source;` を設定します。もし `mask-mode` が代わりに 5 つの異なる値のカンマ区切りリストであった場合、4 番目の値がこの `none` レイヤーに適用され、5 番目の値が 5 番目のレイヤーに適用されることになります。

5 番目のマスクレイヤーは、SVG の {{svgelement("mask")}} 要素で校正されており、これは [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性に `svg-mask` が設定されています。他のレイヤーのデフォルトマスクモードが `alpha` であるのに対し、SVG の `<mask>` 要素のデフォルトの[マスク型](/ja/docs/Web/CSS/Guides/Masking/Introduction#svg_mask_as_mask_source)は `mask-type` の値、または設定されていない場合は `mask-type` 属性です。これも定義されていない場合、値はデフォルトで `luminance` になります。言い換えれば、`<mask>` のマスク効果は、`<mask>` 要素の色調の明るさと透過率の両方で決定されます。

`mask-mode` プロパティをまったく宣言せず、それぞれのマスクレイヤーでデフォルトの `match-source` を適用した場合、この `.masked-element` のケースでは結果が次のように解決されます：

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: alpha, alpha, alpha, match-source, luminance;
}
```

または、`mask` 一括指定を使用して次のようにします。

```css
.masked-element {
  mask:
    url("alphaImage.png") alpha,
    linear-gradient(to right, black, transparent) alpha,
    radial-gradient(circle, white 50%, transparent 75%) alpha,
    none match-source,
    url("#svg-mask") luminance;
}
```

## `mask-position` プロパティ

{{cssxref("background-position")}} プロパティと同様に、{{cssxref("mask-position")}} プロパティは、マスク画像の初期位置を、[`mask-origin` プロパティ](#mask-origin_プロパティ)で定義されるマスクレイヤーの基準ボックスに対して設定するプロパティです。構文は[`background-position` の `<position>` 構文](/ja/docs/Web/CSS/Reference/Properties/background-position#position)に従い、値は 1 つ、2 つ、4 つの {{cssxref("&lt;position&gt;")}} 値で、1 つから 2 つの相対または絶対位置オフセットを定義します。

### 値 1 つの構文

キーワード値が 1 つだけ指定された場合、その値はマスクの原点エッジを指定し、マスクはそのエッジに対して配置されます。もう一方の次元は `center` となります。

{{cssxref("&lt;length-percentage&gt;")}} 値が 1 つだけ指定された場合、このマスク原点の左端に対する X 座標を指定し、Y 座標は `50%` に設定されます。

キーワード値が 2 つ指定された場合、値の順序は関係ありませんが、2 つの垂直軸値または 2 つの水平軸値を含めることはできません。`left right` や `top bottom` はどちらも不正な指定です。

### 値 2 つの構文

2 つの値（キーワード 1 つと `<length-percentage>` 値 1 つ）が指定されている場合、順序が影響するのはキーワードが `center` の場合のみです。

- キーワードが `left` または `right` の場合、X 座標は左端からの相対位置を定義し、y 座標は上端からの相対位置を定義します。
- 同様に、`top` または `bottom` キーワードは、それぞれ要素を最上端または下端に対して位置付ける Y 座標を定義し、もう一方の値はマスク位置指定領域の左端に対する X 座標を定義します。
- 一方の値が `center` キーワードで、もう一方が `<length-percentage>` の場合、1 つ目の値は水平位置を定義し、2 つ目の値が垂直位置を定義します。

2 つの値が存在し、両方とも `<length-percentage>` 値である場合、順序が再び重要になります。まずの値はマスク配置領域の左端からのオフセットとして水平位置を定義し、2 つ目のはマスク配置領域の上端からのオフセットとして垂直位置を定義します。

### 値 4 つの構文

マスクの位置は、左上以外の角を基準として相対的にすることも可能です。値 4 つの構文により、任意の角からマスクをオフセットすることができます。値は 2 つの {{cssxref("length-percentage")}} オフセットを風味し、それぞれのオフセットにはその基準となる原点側が先行します。水平方向と垂直方向のペアをまず宣言する順序は問いませんが、基準となる原点側を示すキーワード（`left`, `right`, `top`, `bottom`, `x-start`, `x-end`、 `y-start`, `y-end`, `block-start`, `block-end`, `inline-start`, `inline-end`）を宣言する必要があり、それぞれの原点辺は同一軸から指定できません。

2 つの `<length-percentage>` 構文では、基準となる辺は `top` と `left` の順序で指定されます。例えば、`mask-position: 10px 20px` は `mask-position: left 10px top 20px` と同等です。上辺と左辺からオフセットする場合、オフセット元の辺は必須ではありませんが、順序は重要です。4 つの値構文では、`mask-position` を使用することができます。マスク画像を任意の辺の組み合わせからオフセットするには（例：`left 10px bottom 20px`）、辺の順序は重要ではありません。オフセット対象の辺は宣言順序ではなく、その前に置かれたキーワードによって定義されるためです。

### パーセント値

パーセント値を使用してオフセットする場合、マスクのサイズはその要素のサイズから差し引かれます。これは [`background-position` のパーセントオフセット](/ja/docs/Web/CSS/Reference/Properties/background-position#パーセント値について)と同様の処理です。

### 反復マスク画像の位置指定

`mask-position` プロパティは、マスク画像の初期位置を定義します。「初期位置」とは、[マスクが反復される](#mask-repeat_プロパティ)場合、ブラウザが最初のマスク画像を`mask-position` プロパティで定義された位置に配置し、それによってマスクの繰り返し配置を決定することを意味します。

この例では、最初の画像の位置を `bottom right` に設定しています。これは、最初のマスクがマスクの基準ボックス右下隅に配置されるということの意味です。マスク画像はデフォルトで反復されるため、反復されるマスクは最初に配置されたマスクの上側と左側に沿って配置されます。

```html hidden live-sample___position live-sample___position_no-repeat
<div class="keywords">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="twoValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="fourValue">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css hidden live-sample___position live-sample___position_no-repeat
div,
img {
  width: calc(30vw - 20px);
}
```

```css live-sample___position live-sample___position_no-repeat
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
.keywords img {
  mask-position: bottom right;
}
.twoValue img {
  mask-position: -20px -10px;
}
.fourValue img {
  mask-position: right -20px bottom -10px;
}
```

```css hidden live-sample___position live-sample___position_no-repeat
div::before {
  content: 'class="' attr(class) '"';
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

`mask-position` は最初のマスク画像の配置を定義します。このデモでは最初の画像が配置される位置を示しています。

```css hidden live-sample___position_no-repeat
img {
  mask-repeat: no-repeat;
}
```

{{EmbedLiveSample("position_no-repeat", "", "260px")}}

[`mask-repeat`プロパティ](#mask-repeat_プロパティ)のデフォルト値は `repeat` であるため、画像はまずマスクの位置に基づいて X 軸と Y 軸に沿って繰り返されます。

{{EmbedLiveSample("position", "", "260px")}}

値 2 つの例は、元のマスクの上端と左端のオフセットを定義します。4 つの値の例は、前回の 2 つの例を組み合わせたもので、最初のマスクを 2 番目の画像と同じオフセットで位置指定しますが、最初の画像で示されたのと同じエッジから位置指定します。

最初の画像では、まず配置される星は右下の星であり、繰り返される星は以上と上側に配置されます。この配置により、最初の星はクリップされませんが、最上部と最左端の星はクリップされます。

`mask-position` プロパティを明示的に設定しない場合、それぞれのレイヤーではデフォルトで `0% 0%` となり、マスクの左上角がマスクの起源ボックスの左上角に接します。`masked-element` の例を続ける場合、以下の設定を行ったのと同じ状態になります。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
}
```

または、この例を `mask` 一括指定で展開すると次のようになります。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% match-source,
    linear-gradient(to right, black, transparent) 0% 0% match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% match-source,
    none 0% 0% match-source,
    url("#svg-mask") 0% 0% match-source;
}
```

## `mask-origin` プロパティ

要素にパディング、境界線、またはその両方が設定されている場合、{{cssxref("mask-origin")}} プロパティは、これらのボックスの境界値のうち、どの値がそのレイヤーにおけるマスクの位置指定元となるボックス（マスク位置指定領域）として機能するかを定義します。`mask-origin` プロパティは `background-origin` プロパティと類似していますが、初期値が異なり、SVG 専用の値を持ちます。

HTML 要素は、コンテンツ境界ボックス、パディングボックス、コンテンツボックスのいずれかの中にマスクを含めることができます。例えば、`mask-position` が `top left` の場合、これは境界の外縁、パディングの外縁、またはコンテンツの外縁のどれを基準とするのでしょうか。

[`mask-position`](#mask-position_プロパティ) マスクの例では、定義された位置は境界ボックス（デフォルトの動作）を基準としていました。ただし、`<img>` には境界線やパディングが設定されていなかったため、この場合ではコンテンツボックス、パディングボックス、境界ボックスの原点はすべて同じであったことに留意すべきです。

```html hidden live-sample___origin
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend><code>mask-origin</code> の値を設定</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css hidden live-sample___origin live-sample___clip live-sample___size
div {
  all: unset;
}
legend {
  align-self: baseline;
}
label {
  display: block;
}
```

この例では、`mask-position` により初期マスクが `<img>` 要素の左上角に場所が指定されます。この要素は太い境界線とパディングを保持し、緑色の背景色が適用されています。これにより、パディング領域における星形のマスクを確認することができるようにされています。

```css live-sample___origin live-sample___clip
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
:has(#origin_border-box:checked) img {
  mask-origin: border-box;
}
:has(#origin_padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#origin_content-box:checked) img {
  mask-origin: content-box;
}
```

選択したラジオボタンを変更して `mask-origin` プロパティの値を変更し、その際に左上の星マスクの位置を見ていくのが最適です。

{{EmbedLiveSample("origin", "", "350px")}}

デフォルト値は `border-box` です。この値をつけて、初期マスクは境界の左上端に場所が与えられ、クリップされません。初期マスクがパディングの外側または内側の端に配置されると、その以上と左側に余地があります。これらの繰り返しマスクはクリップされます。

`masked-element` の例を続けると、`mask-origin` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `border-box` が適用されます。これはあたかも次のようになっているかのように動作します。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
}
```

または、この例を `mask` 一括指定で展開すると次のようになります。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      match-source,
    none 0% 0% border-box match-source,
    url("#svg-mask") 0% 0% border-box match-source;
}
```

SVG 要素には関連付けられた CSS レイアウトボックスが存在しないため、マスクは SVG 要素の塗りつぶし領域、ストローク領域、または表示ボックス内に含まれている可能性があります。

## `mask-clip` プロパティ

{{cssxref("mask-clip")}} プロパティは、マスクの影響を受ける要素の領域を決定し、定義されたボックスの境界で要素をクリップします。これは {{cssxref("background-clip")}} プロパティに類似していますが、異なる値がいくつか存在します。

`mask-clip` プロパティはすべての `mask-origin` 値を受け入れ、両者は同じ `border-box` のデフォルト値を持つため、一見似ているように見えますが、その目的は大きく異なります。`mask-origin` がマスク画像の位置を決定するのに対し、`mask-clip` プロパティは元の要素のコンテンツを指定されたボックスにクリップします。両方を理解することが重要です。`mask-origin` が `mask-position` をマスク画像をクリッピング領域の外側に配置するようにした場合、マスクはクリッピングされます。

`mask-clip` プロパティは、すべての `mask-origin` 値と、自分自身の `no-clip` 値を受け入れます。`no-clip` 値は描画されたコンテンツをクリップしないように設定します。ただし、`mask-position` 値を 0 未満または 100% を超える値に設定して境界コンテンツ領域外に位置指定することで、マスク画像をクリップすることは可能です。

`mask-clip` と `mask-origin` を異なる値に設定すると、マスクレイヤー画像がクリップされる場合があります。例えば、境界とパディングを持つ要素で `mask-clip` が `content-box`、`mask-origin` が `border-box` に設定され、`mask-position` が `top left` 辺に設定されている場合、マスクレイヤー画像は左上辺でクリップされます。

この例では、前回の例にクリップオプションを追加して、非 SVG の `mask-clip` の異なる値と、それらが `mask-origin` の異なる値に与える影響を示して表示させます。

```html hidden live-sample___clip
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend><code>mask-clip</code> 値の設定</legend>
  <label
    ><input type="radio" name="clip" id="clip_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="clip" id="clip_content-box" /> content-box</label
  >

  <label><input type="radio" name="clip" id="clip_no-clip" /> no-clip</label>
</fieldset>
<fieldset>
  <legend><code>mask-origin</code> 値の設定</legend>
  <label
    ><input type="radio" name="origin" id="origin_border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_padding-box" />
    padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="origin_content-box" />
    content-box</label
  >
</fieldset>
```

```css live-sample___clip
:has(#clip_border-box:checked) img {
  mask-clip: border-box;
}
:has(#clip_padding-box:checked) img {
  mask-clip: padding-box;
}
:has(#clip_content-box:checked) img {
  mask-clip: content-box;
}
```

{{EmbedLiveSample("clip", "", "350px")}}

まず、マスク原点コンテナーの左上端にマスク原点コンテナーの場所が設定され、その後繰り返し適用されます。基準ボックスが `border-box` でクリッピング領域が `content-box` の場合、マスク原点コンテナーの上部と左側の領域がクリップされます。一般的に、`mask-clip` は `mask-origin` と同じ値に設定することを推奨します。

`masked-element` の例を続けると、`mask-clip` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `border-box` が適用されます。これは次の設定を行った場合と同様です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
}
```

または、この例を `mask` 一括指定で展開すると次のようになります。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% border-box border-box
      match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% border-box
      border-box match-source,
    none 0% 0% border-box border-box match-source,
    url("#svg-mask") 0% 0% border-box border-box match-source;
}
```

`mask` 一括指定において、[`<geometry-box>`](/ja/docs/Web/CSS/Reference/Properties/clip-path#geometry-box) 値が 1 つだけ指定された場合、`mask-origin` と `mask-clip` の両プロパティ値を設定します。2 つの `<geometry-box>` 値が存在する場合、1番目の値が `mask-origin` を、2 番目の値が `mask-clip` を定義します。

SVG の {{svgelement("mask")}} 要素を参照しないマスクレイヤー画像の場合、`mask-clip` プロパティは、マスクの描画領域（マスクの影響を受ける領域）が境界、パディング、またはコンテンツボックスのいずれであるかを定義します。要素の描画されるコンテンツは、この領域に制限されます。

マスクレイヤーの {{cssxref("mask-image")}} ソースが `<mask>` である場合、`mask-clip` プロパティは効果を持ちません。むしろ、`<mask>` 要素の {{svgAttr("x")}}、{{svgAttr("y")}}、{{svgAttr("width")}}、{{svgAttr("height")}}、{{svgAttr("maskUnits")}} 属性がマスクの描画領域を決定します。

## `mask-size` プロパティ

{{cssxref("mask-size")}} プロパティは、マスクレイヤーのサイズ設定に使用されます。このプロパティは {{cssxref("background-size")}} プロパティと似ており、同じ値を取ります。マスクのサイズ設定時には、マスク画像が網羅していない要素の領域は非表示になることに留意してください。

`mask-size` を宣言する方法は 3 つあります。

- `cover` または `contain` キーワード、
- 長さ、パーセント値、またはキーワード `auto` のいずれか 1 つ、または
- 長さ、パーセント値、およびキーワード `auto` を組み合わせた 2 つの値。

マスク画像は自然なサイズであるか、引き伸ばされるか、または利用できる空間に合わせて制約される可能性があります。デフォルトでマスク画像の{{glossary("aspect ratio", "アスペクト比")}}は維持されますが、2 つの `<length-percentage>` 値を宣言すると、それらの比率が元の画像と一致しない場合、マスク画像が歪む可能性があります（`mask-repeat: round` もマスク画像を歪ませる可能性のあるプロパティ/値の組み合わせです）。

`mask-size` が `contain` に設定されている場合、マスク画像はマスク位置指定領域内に完全に収まる範囲で可能な限り大きなサイズになります。この場合、マスク画像は切り取られることなく、完全に収まります。

`cover`に設定されている場合、マスク画像はマスク配置領域全体を完全に覆う最小サイズになります。マスクのアスペクト比がマスク配置領域のアスペクト比と異なる場合、マスクは切り取られます。

言い換えれば、`cover` と `contain` では、マスクの少なくとも一辺がマスク配置領域の対応する辺と同じサイズになります。マスク画像は拡大または縮小され、幅がマスク配置領域の幅と同じになるか、高さがマスク配置領域の高さと等しくなるように調整されます。

`cover`、`contain`、`<percentage>` の値では、サイズは基準ボックスを基準とします。星のマスク画像と旗画像の例では、マスク画像と `<img>` の両方のアスペクト比が `1:1` です。この場合、`cover`、`contain`、`100%` はすべて同じサイズのマスクを生成します。この例は、`mask-size` が `cover`、`contain`、または `<percentage>` 値に設定されている場合、マスクの実際のサイズは [`mask-origin` プロパティ](#the_mask-origin_property)の値によって異なる可能性があることを示しています。

```html hidden live-sample___size
<div class="border-box">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<fieldset>
  <legend><code>mask-origin</code> 値の設定</legend>
  <label
    ><input type="radio" name="origin" id="border-box" checked />
    border-box</label
  >
  <label
    ><input type="radio" name="origin" id="padding-box" /> padding-box</label
  >
  <label
    ><input type="radio" name="origin" id="content-box" /> content-box</label
  >
</fieldset>
```

```css hidden live-sample___size
img {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position: top left;
  padding: 15px;
  border: 15px solid;
  background-color: green;
}
```

```css live-sample___size
img {
  mask-size: 100%;
}
:has(#border-box:checked) img {
  mask-origin: border-box;
}
:has(#padding-box:checked) img {
  mask-origin: padding-box;
}
:has(#content-box:checked) img {
  mask-origin: content-box;
}
```

`mask-origin` プロパティの値を変更して、異なる値がマスクサイズに与える影響を確認してください。

{{EmbedLiveSample("size", "", "350px")}}

この例では 1 つの `<percentage>` 値が指定されています。1 つの `<length-percentage>` 値が指定された場合、マスクの幅のみが定義され、高さはデフォルトで `auto` となり、アスペクト比が維持されます。2 つの値が指定された場合、1 つ目の値がマスクの幅を、2 つ目の値が高さを定義します。

`mask-size` のデフォルト値は `auto` であり、マスクは{{glossary("intrinsic size", "内在サイズ")}}（CSS が適用されていない場合に表示されるサイズ）でレンダリングされます。単一の `<length-percentage>` 値、またはアスペクト比と同じ比率の 2 つの値を設定する場合、マスク画像の基盤となる{{glossary("aspect ratio", "アスペクト比")}}は維持されます。アスペクト比と同じ比率ではない 2 つの値を宣言した場合、マスク画像が歪みます。

一括指定プロパティのすべての個別指定成分と同様、{{cssxref("mask")}} 一括指定プロパティが設定され、`mask-size` プロパティの値がどのマスクレイヤーでも設定されていない場合、それらのマスクレイヤーの `mask-size` 値は初期値の `auto` にリセットされます。

画像に内在の比率がない場合（例：[CSS グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient)の場合）、デフォルトの `auto` は [`mask-origin` プロパティ](#mask-origin_プロパティ)で設定されたマスク位置指定領域全体を指します。

`masked-element` の例を続ける場合、`mask-size` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `auto` が適用されます。これは、以下のように設定した場合と同様です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
}
```

または、この例を `mask` 一括指定で展開し、`mask-size` 成分を `mask-position` 値の後にスラッシュ (/) で区切って指定することができます。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto border-box
      border-box match-source,
    none 0% 0% / auto border-box border-box match-source,
    url("#svg-mask") 0% 0% / auto border-box border-box match-source;
}
```

## `mask-repeat` プロパティ

{{cssxref("mask-repeat")}} プロパティは、初期のマスク画像がサイズ調整および位置指定された後に、マスク画像がどのように繰り返されるか（タイル状に配置されるか）を定義します。`mask-repeat` プロパティは、そのマスク画像が水平軸および垂直軸に沿って繰り返される場合（または繰り返されない場合）、またその方法を定義します。前回のほとんどの例で、星のマスクが X 軸と Y 軸に沿って繰り返されていることに気づいたかもしれません。これは、`repeat` がデフォルト値であるためです。

`mask-repeat` プロパティは {{cssxref("background-repeat")}} プロパティと類似しており、同じ [`<repeat-style>`](/ja/docs/Web/CSS/Reference/Properties/mask-repeat#値) 値を受け入れます。`background-repeat` の場合と同様に、まず（そしておそらく唯一の）マスク画像の繰り返しは、[`*-position` プロパティ](#mask-position_プロパティ)によって位置指定され、[`*-size` プロパティ](#mask-size_プロパティ)によってサイズが決められます。繰り返される背景画像またはマスク画像の位置は、この最初の画像インスタンスに基づいています。

`masked-element` の例を続けると、`mask-repeat` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `repeat` が適用されます。これは、次のプロパティを設定した場合と同様です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
}
```

または、`mask` 一括指定を使用してこの例を展開すると次のようになります。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto repeat border-box border-box match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box match-source,
    none 0% 0% / auto repeat border-box border-box match-source,
    url("#svg-mask") 0% 0% / auto repeat border-box border-box match-source;
}
```

## `mask-composite` プロパティ

{{cssxref("mask")}} 一括指定には {{cssxref("mask-composite")}} プロパティが含まれており、複数のマスクを組み合わせて最終的なマスク効果を生成する方法を定義します。カンマ区切りの値リストのそれぞれの値は、ブラウザーが関連付けられたマスクレイヤーを下のマスクレイヤーから `add`、`subtract`、`intersect`、`exclude` のいずれかの演算をするように決定します。`mask-mode` やその他の `mask-*` プロパティと同様に、{{cssxref("background")}} 一括指定には対応するプロパティは含まれていません。

```html hidden live-sample___composite live-sample___composite3
<div class="add">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="intersect">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="exclude">
  <img
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

この例では、星と前回の例からのグラデーションを含む 2 つの `mask-image` 値をマスク画像として指定します。

```css live-sample___composite
img {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
```

それぞれの画像に異なる `mask-composite` 値を設定します。

```css live-sample___composite live-sample___composite2 live-sample___composite3
.add img {
  mask-composite: add;
}
.subtract img {
  mask-composite: subtract;
}
.intersect img {
  mask-composite: intersect;
}
.exclude img {
  mask-composite: exclude;
}
```

```css hidden live-sample___composite live-sample___composite2 live-sample___composite3
div::before {
  content: "mask-composite: " attr(class);
  display: block;
  text-align: center;
  font-family: monospace;
}
body {
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("composite", "", "600px")}}

半透明の星形マスクは、`mask-composite` の値に応じて、ストライプマスクに対して追加、減算、交差、除外を行うマスクとして動作します。

`mask-composite` プロパティは、2 つ以上のマスクレイヤーが存在する場合でのみ関連します。これは「マスク画像」ではなく「マスクレイヤー」を指します。なぜなら、`none` が含まれる場合、透明な黒マスクが合成されるためです。`none` 値は、`subtract` および `intersect` の場合、マスクに重大な効果をもたらす可能性があります。例えば、`mask-mode` が `luminance` に解決される場合、黒マスクを差し引くとマスク全体が除去される（要素が非表示になる）。同様に、`none` が最後のレイヤーで、そのレイヤーに `mask-composite: intersect` が設定されている場合、要素全体が非表示になります。ここでは、前回の例に `none` の 3 つ目レイヤーを追加しています。

```css live-sample___composite3
img {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    none;
}
```

{{EmbedLiveSample("composite3", "", "600px")}}

`intersect` の例では、透明な黒マスクが何とも交差しないため、すべてが除外される点に注目してください。

場合によっては、マスクレイヤーの方向を逆転させると、同時に極めて異なる結果を得ることができます。

```html hidden live-sample___composite2
<div class="subtract">
  <img
    class="gradientFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
<div class="subtract">
  <img
    class="starFirst"
    src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    alt="Pride flag" />
</div>
```

```css live-sample___composite2
.gradientFirst {
  mask-image:
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    ),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
.starFirst {
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-linear-gradient(
      to bottom right,
      red 0 20px,
      #ff000055 20px 40px,
      transparent 40px 60px
    );
}
```

{{EmbedLiveSample("composite2", "", "350px")}}

最初の例では、星が縞模様から差し引かれます。2 番目の例では、縞模様が星から差し引かれます。

他のすべての `mask` 要素プロパティと同様に、`mask-composite` はカンマ区切りの値のリストを取ります。このプロパティはマスクの結合方法に効果を及ぼすため、複数のマスクレイヤーがある場合にのみ関連し、使用する値の数はマスクレイヤーの数より 1 つ少なくなります。

最後のマスクペアがまず合成されます。その後、前のマスク画像が前の合成結果と合成されます。

`masked-element` の例を続けます。`mask-composite` プロパティを明示的に設定しない場合、それぞれのレイヤーに対してデフォルトで `add` が適用されます。これは次の設定を行った場合と同様です。

```css
.masked-element {
  mask-image:
    url("alphaImage.png"), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url("#svg-mask");
  mask-mode: match-source;
  mask-position: 0% 0%;
  mask-origin: border-box;
  mask-clip: border-box;
  mask-size: auto;
  mask-repeat: repeat;
  mask-composite: add;
}
```

この場合、`<mask>` 要素は `none` レイヤーと合成されます。次に放射グラデーションが前回の合成結果と合成され、といった具合になります。

他の要素のプロパティと同様に、`mask` 一括指定を使用することも可能です。

```css
.masked-element {
  mask:
    url("alphaImage.png") 0% 0% / auto repeat border-box border-box add
      match-source,
    linear-gradient(to right, black, transparent) 0% 0% / auto repeat border-box
      border-box add match-source,
    radial-gradient(circle, white 50%, transparent 75%) 0% 0% / auto repeat
      border-box border-box add match-source,
    none 0% 0% / auto repeat border-box border-box add match-source,
    url("#svg-mask") 0% 0% / auto repeat border-box border-box add match-source;
}
```

## 関連情報

- [CSS マスクの紹介](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS クリップの紹介](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
