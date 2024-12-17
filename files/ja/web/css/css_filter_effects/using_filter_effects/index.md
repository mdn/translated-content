---
title: フィルター効果の使用
slug: Web/CSS/CSS_filter_effects/Using_filter_effects
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

モノクロまたはセピア調の画像にカーソルを当てると、フルカラーの画像が瞬時に表示されたことはありませんか？背景画像の一部分が小さくぼやけていることで、その上に表示されたテキストがより読みやすくなるという経験はありませんか？ 以前は、このような操作を行うには画像編集ソフトウェア、時間、追加の HTTP リクエストなどが必要でした。

## CSS フィルター効果を使用する利点

CSS の[フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)モジュールが提供するプロパティと関数を使用すれば、Photoshopを使用したり、余分なHTTPリクエストを送信することなく、上述の視覚効果を適用することができます。必要なソフトウェアはユーザーのブラウザーだけです。さらに、 CSS のフィルター効果は、あらかじめ設定された画像効果とは異なり、レスポンシブでアニメーションが可能です。

CSS フィルター効果モジュールでは、テキスト、画像、背景、境界線、またはこれらのプロパティを適用するその他の要素のレンダリングに影響を与えるために使用できる {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティが提供されています。 このモジュールでは、不鮮明化や色変化などのグラフィック効果を追加できる {{cssxref("&lt;filter-function&gt;")}} データ型も定義しています。 フィルター関数を使用すると、要素の外観を変更できるだけでなく、作成したフィルターを使用して SVG フィルターを参照することもできます。

## フィルター効果のプロパティ

CSS フィルター効果モジュールの以下の 2 つのフィルタープロパティにより、要素にゼロ、 1 つ、または複数のグラフィック効果を適用することができます。

- {{cssxref("filter")}} プロパティを使用すると、要素がレンダリングされる前に、ぼかし、ドロップシャドウ、セピアなどのフィルター効果を適用することができます。フィルター効果は、要素のコンテンツ、境界線、パディングを含め、要素に直接適用されます。

- {{cssxref("backdrop-filter")}} プロパティを使用すると、要素の背後（要素の「背景」）にグラフィック効果を適用することができます。 前景のコンテンツをより読みやすくするために、 `backdrop-filter` プロパティが使用されることが多く、特にコンテンツが所有する大きな領域がコンテンツに十分なコントラストを提供していない場合に有効です。 フィルター効果は要素の背景のみに適用され、要素のコンテンツには適用されません。

`filter` および `backdrop-filter` プロパティは、フィルターのリストを空白で区切って受け入れ、宣言された順に適用されます。

## フィルター関数

CSS フィルター効果モジュールは、 10 個の [`<filter-function>`](/ja/docs/Web/CSS/filter#functions) 関数を提供するとともに、 `url()` 参照を使用して適用する SVG フィルターを使用して、無限に近い配列効果を定義する機能も提供します。

次の表には、 10 個のフィルター関数と、それらの値の型、該当する場合は最小有効値、効果を作成する最大値、および[補間](/ja/docs/Glossary/Interpolation)に使用される初期値が掲載されています。

| フィルター関数                                              | 引数の型                                                               | 最小値 | 最大効果 | 補間値               | 既定値（効果なし）                        |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------ | -------- | -------------------- | ----------------------------------------- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{cssxref("&lt;length&gt;")}}                                          | `0`    |          | `0`                  | `blur(0)`                                 |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    |          | `1`                  | `brightness(1)` または `brightness(100%)` |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{cssxref("&lt;length&gt;")}}                                          | `0`    |          | `1`                  | `contrast(1)` または `contrast(100%)`     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                             |        |          | `0 0 0 currentcolor` | `drop-shadow(0 0 0 currentcolor)`         |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    | `100%`   | `0`                  | `grayscale(0)` または `grayscale(0%)`     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{cssxref("&lt;angle&gt;")}}                                           |        |          | `0`                  | `hue-rotate(0deg)`                        |
| {{cssxref("filter-function/invert", "invert()")}}           | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    | `100%`   | `0`                  | `invert(0)` または `invert(0%)`           |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    | `100%`   | `1`                  | `opacity(1)` または `opacity(100%)`       |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    | `100%`   | `1`                  | `saturate(100%)`                          |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} | `0`    | `100%`   | `0`                  | `sepia(0%)`                               |

最小値のあるフィルター関数は、最小値が含まれます。最小値未満の値をフィルター関数に指定すると、カンマ区切りのリストにある問題のフィルター関数だけでなく、プロパティ宣言全体が不正なものとなります。

最大効果値は超えることができます。 最大値として挙げられている値よりも大きな値を記載することは有効ですが、最大値として挙げられている値以上の効果をもたらすわけではありません。言い換えれば、要素に対する効果は、最大効果値が設定されている場合と同じになります。例えば、[セピア調](#セピア調)の例で `sepia(400%)` を設定すると、最大値である `sepia(100%)` と同じ効果が得られます。

既定値は、効果を作成しない値です。これらの値は効果を作成しませんが、初期補間値を提供し、値を設定する方法の例を示します。これらの既定値は、許可された最小値と最大効果値の間の基準値となります。

## フィルター効果の適用

`filter` および `backdrop-filter` プロパティは、 1 つ以上の `<filter-function>`、既定のキーワード `none`、または [SVG フィルター](#svg_フィルターの使用)を指定する `url()` 値のリストを受け入れます。

### セピア調フィルター効果の適用

下のセピア調の画像にカーソルを当てると、フルカラーの画像が即座に表示されます。

画像をセピア調にするには、 `filter` プロパティの値として [`sepia()`](/ja/docs/Web/CSS/filter-function/sepia) フィルター関数を指定します。 [`:hover`](/ja/docs/Web/CSS/:hover) および [`:focus`](/ja/docs/Web/CSS/:focus) の時には、 `filter: none` を設定することでィルターが除去されます。

```html
<img tabindex="0" alt="Four trans-people, circa 1912" src="activists.jpg" />
```

```css
img {
  filter: sepia(100%);
}
img:hover,
img:focus {
  filter: none;
}
```

キーボードユーザーがタブ順序を変更せずにフォーカスできるように、 {{HTMLElement("img")}} 要素では [`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) を `0` に設定します。なぜなら、 `<img>` は操作可能な要素ではないからです。

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Applying_sepia_filter_effect", 600, 300)}}

### 他の要素へのフィルター効果の適用

一般的に画像に適用される `filter` および `backdrop-filter` プロパティは、あらゆる要素や擬似要素に適用することができます。

この例では、 [`drop-shadow()`](/ja/docs/Web/CSS/filter-function/drop-shadow) フィルターを使用して、 `3px` のぼかしと `0` のオフセットで光彩効果を追加しています。

```css
h1 {
  color: midnightblue;
  filter: drop-shadow(0 0 3px magenta);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1>CSS フィルターで作成された光彩</h1>
```

{{EmbedLiveSample('Applying_filter_effects_to_other_elements','100%','80')}}

### 複数のフィルターの適用

セピア調 `filter` の例では、フィルター関数を 1 つしか指定していませんが、複数のフィルターを設定することができます。 `filter` および `backdrop-filter` プロパティには、空白で区切られたフィルターのリストを受け入れることができ、宣言された順番に適用されます。

この例では、 [`hue-rotate()`](/ja/docs/Web/CSS/filter-function/hue-rotate) と [`blur()`](/ja/docs/Web/CSS/filter-function/blur) の 2 つのフィルターを、 `backdrop-filter` プロパティを介して適用しています。背景（{{HTMLElement("p")}} 要素の背後の領域）には、色の変化とぼかしが適用されています。

```css
.container {
  background: url(image.jpg) no-repeat left / contain goldenrod;
}
p {
  backdrop-filter: hue-rotate(240deg) blur(5px);
  background-color: rgb(255 255 255 / 10%);
  text-shadow: 2px 2px black;
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #ffffff;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div
  class="container"
  style="background-image: url('https://mdn.github.io/shared-assets/images/examples/listen_to_black_women.jpg');">
  <p>
    画像上のテキストは、ドロップシャドウがあっても読みにくく、アクセシビリティがない場合があります。
  </p>
</div>
```

{{EmbedLiveSample('Applying_multiple_filters','100%','280')}}

### 反復フィルターの適用

フィルターは順番に適用されるため、フィルター関数を複数回使用することができます。この例では、 [`drop-shadow()`](/ja/docs/Web/CSS/filter-function/drop-shadow) フィルターが 4 回使用されており、その時点ごとに異なる `<shadow>` 値が指定されています。

```html
<img src="mandala.svg" alt="Colorful mandala" role="img" />
<img src="mandala.svg" alt="Plain mandala" role="img" />
```

```css hidden
img {
  width: 49%;
}
```

```css nolint
img {
  filter: drop-shadow(2px 2px 0 hsl(300deg 100% 50%))
    drop-shadow(-2px -2px 0 hsl(210deg 100% 50%))
    drop-shadow(2px 2px 0 hsl(120deg 100% 50%))
    drop-shadow(-2px -2px 0 hsl(30deg 100% 50%));
}
img + img {
  filter: none;
}
```

最初のマンダラの例では、 4 つのドロップシャドウが線描の SVG に適用されています。同じ SVG で、フィルターが `filter: none` で除去されたものが、比較用に含まれます。

{{EmbedLiveSample("Applying_repeated_filters", 600, 400)}}

### フィルター関数の順の指定

フィルター効果を作成する際、 `filter` または `backdrop-filter` プロパティには、フィルターの別個のリストが指定されます。これらのフィルター効果は、現れる順番に適用されます。

この例では、レベル 1 見出しに `magenta` のドロップシャドウと `180deg` 色相回転が適用されています。例えば、これらのフィルターが異なる順序で適用された場合の効果を示します。

```css
h1 {
  color: midnightblue;
}
#hueFirst {
  filter: hue-rotate(180deg) drop-shadow(3px 3px magenta);
}
#shadowFirst {
  filter: drop-shadow(3px 3px magenta) hue-rotate(180deg);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1 id="hueFirst">ドロップシャドウの前に色相の変更が行われています。</h1>
<h1 id="shadowFirst">色相の変更の前にドロップシャドウが適用されています。</h1>
<h1>フィルター効果が適用されていません。</h1>
```

{{EmbedLiveSample('Applying_a_filter_to_an_element','100%','280')}}

同じフィルターが両方のテキスト行に適用されますが、順序は異なります。最初の行では、影が適用される前にテキストの色相が変更されるため、影は `magenta` になります。 2 つ目の行では、濃い青色のテキストにドロップシャドウが追加され、その後、テキストと影の色相が変更されます。

3 行目にはフィルター効果を適用せず、比較用に元の効果を表示させています。そのため、3行目は `midnightblue` または `#191970` のままです。 `hue-rotate(180deg)` フィルターは、最初の 2 行のテキストを `#252500` に変更します。

> [!NOTE]
> 16 進数表記の RGB 色 `#191970` は `hsl(240deg 63.5% 26.9%)` と等しく、一方、`#252500` は `hsl(60deg 100% 7.3%)` です。[色の回転は sRGB 色空間で行われる](/ja/docs/Web/CSS/color_value#補間)ため、彩度が同じ値を示さない場合でも、色相は予想通りに変化します。

## SVG フィルターの使用

10 種類の定義済み {{cssxref("filter-function")}} に加えて、 CSS フィルター効果は `url()` に対応しており、引数には [SVG フィルター](/ja/docs/Web/SVG/Element/filter)を指定します。この引数は、内部または外部の SVG ファイルに埋め込むことができます。

単一の SVG を使用して、それぞれに `id` を持つ複数のフィルターを定義することができます。

```html
<svg role="none">
  <defs>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="1" edgeMode="duplicate" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur stdDeviation="3" edgeMode="duplicate" />
    </filter>
    <filter id="hue-rotate90">
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
  </defs>
</svg>
```

インラインおよび外部の SVG のどちらの `url()` でも、フィルターの `id` が参照されます。

```css
filter: url(#blur3);
filter: url("https://example.com/svg/filters.svg#blur3");
```

### 画像のぼかし

{{cssxref("filter-function/blur", "blur()")}} フィルター関数が適用された要素にガウスぼかしを適用するように、 SVG の {{SVGElement("feGaussianBlur")}} フィルター要素もコンテンツをぼかすために使用することができます。

どちらの場合も、ぼかし半径の値は、 CSS では {{cssxref("&lt;length&gt;")}} として、また SVG ではピクセル数相当の {{cssxref("&lt;number&gt;")}} として指定され、ガウス関数に対する標準偏差の値を定義します。言い換えれば、画面に表示されるピクセルの内側へ溶け込むピクセル数を定義します。値が大きいほど、ぼかしが強くなります。

[`<filter>`](/ja/docs/Web/SVG/Element/filter) の {{SVGAttr("stdDeviation")}} 属性は、最大 2 つの値を受け入れ、より複雑なぼかし値を作成することができます。同等のぼかしを作成するには、 `stdDeviation` に 1 つの値を記載します。

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>CSS の例</th>
      <th>SVG の例</th>
      <th>元画像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag"
          class="svgFilter" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

SVG の `url()` フィルター値は、SVG の [`<image>`](/ja/docs/Web/SVG/Element/image) 要素の [`filter`](/ja/docs/Web/SVG/Attribute/filter) 属性の値として、または CSS　の `filter` および `backdrop-filter` プロパティの数値の一部として含めることができます。

```css
.filter {
  filter: blur(3.5px);
}
.svgFilter {
  filter: url(#blur);
}
```

{{EmbedLiveSample('blur_example','100%','280')}}

## 関連情報

- {{cssxref("mask")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)
- SVG の {{SVGElement("filter")}} 要素、 SVG の {{SVGAttr("filter")}} 属性 '[SVG](/ja/docs/Web/SVG))
- [Applying SVG effects to HTML content](/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
