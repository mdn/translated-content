---
title: CSS マスク入門
slug: Web/CSS/Guides/Masking/Introduction
original_slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

CSS マスクを使用すると、1 つ以上のマスク画像を要素に適用して、要素の一部を選択的に表示または非表示にすることができます。これらのマスク画像は、グラデーション、画像、または SVG ソースにすることができます。単一のパスの形状に基づいて要素の領域を完全に表示または非表示にする [CSS クリップ](/ja/docs/Web/CSS/Guides/Masking/Clipping)とは異なり、マスクでは、マスク画像のアルファ透過率およびオプションで輝度に基づいて、微妙な透過率や合成効果を表現することができます。

このガイドでは、マスクの概念、さまざまなマスク画像の型、およびマスクの輝度とアルファ透過率が、マスクされる（表示される）要素の部分とクリップされる（または非表示になる）部分に対してどのように影響するかを紹介します。

## CSS でのマスクとは何か

CSS では、マスクを使用して、要素の表示領域と非表示領域を定義することができます。1 つ以上の {{cssxref("mask-image")}} ソースによって定義されるマスクレイヤーは、要素の表示領域と不透明度を決定します。

> [!NOTE]
> {{cssxref("mask")}} 一括指定プロパティを使用して、複数の CSS マスクプロパティの値を設定することができます。

`alpha` マスクでは、マスクされた要素の不透明度は、適用されたマスクの不透明度と一致します。 CSS では、マスクとは、不透明な部分が顔を隠す仮面の反対のものです。 CSS では、マスクが完全に不透明な要素の領域は、完全に不透明で表示されます。マスクが完全に透明な部分は、要素が完全に非表示になります。部分的に不透明なマスク領域によってマスクされている要素の領域は、マスクの不透明度に合わせて部分的に不透明になります。

アルファマスクでは、マスクの色は関係ありません。マスクの不透明度だけが重要になります。[輝度マスク](#アルファ透過度と輝度)を使用すると、マスクされた要素の不透明度を決定する際に、マスクの色の明るさが考慮されます。色が明るく不透明であるほど、要素の不透明度が高くなります。色が暗く透明であるほど、マスクの不透明度は低くなります。

マスクは、 CSS グラデーション、ラスター画像 (PNG など)、および SVG {{svgelement("mask")}} 要素を使用して定義することができます。このガイドでは、[不透明度と透過率](#不透明度と透過率)、[輝度](#アルファ透過度と輝度)、および[マスクと CSS クリップ](#svg_の_mask_をマスクソースとする)について説明しながら、さまざまなマスク画像の種類を紹介します。

それぞれのマスクレイヤーは、基準ボックスに対して [位置指定](/ja/docs/Web/CSS/Reference/Properties/mask-position)された {{cssxref("mask-image")}} で構成されます。マスク画像は、[サイズ](/ja/docs/Web/CSS/Reference/Properties/mask-size)を指定したり、[反復](/ja/docs/Web/CSS/Reference/Properties/mask-repeat)したり、[クリップ](/ja/docs/Web/CSS/Reference/Properties/mask-clip)したりすることができます。複数のマスク画像が宣言されている場合、[マスクレイヤーの合成](/ja/docs/Web/CSS/Reference/Properties/mask-composite)または結合の方法を設定することができます。これについては、[マスクプロパティガイド] (/ja/docs/Web/CSS/CSS_masking/CSS_mask_properties)で説明しています。

> [!NOTE]
> すべての例では、マスクが適用される基盤要素として次の画像を使用します。
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

## 不透明度と透過率

```html hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<div class="mask-source"></div>
```

```css hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3 live-sample___svg1
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image:
    linear-gradient(to right, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%),
    linear-gradient(to bottom, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%);
  background-size: 20px 20px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
```

アルファマスクでは、要素の表示領域は、その要素に適用されるマスクのアルファ透過率によって定義されます。マスクが完全に不透明な部分は、要素が表示されます。マスクが完全に透明なピクセルでは、要素も完全に非表示になります。マスクの一部が不透明な領域でマスクされている要素の領域は、そのマスクの不透明度に対応して、部分的に不透明になります。

これを確認するために、{{cssxref("conic-gradient")}} を `mask-image` として使用した例を見ていきましょう。扇形グラデーションを含む CSS グラデーションは、表示領域と非表示領域の間の滑らかなトランジションを作成するために使用することができます。

この場合、マスクの右上隅は完全に不透明、左上隅は完全に透明、そして下半分は不透明から透明へと滑らかに変化しています。

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
```

マスクが適用されている要素の右上隅が完全に表示され、左上隅が非表示になり、下半分が透明にスムーズに遷移し、適用されたマスク画像の表示状態を反映していることに注意してください。

{{EmbedLiveSample("gradient1", "", "250px")}}

アルファマスクでは、マスクの色は関係なく、透過率のみが重要になります。この例では、完全に不透明な赤、半透明の赤、および完全に透明な縞模様のグラデーションが指定されています。

```css live-sample___gradient2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
```

完全に不透明なマスク領域は、要素のピクセルが完全に不透明に表示され、半透明のマスク領域は、半透明の領域が作成され、完全に透明なマスク領域は、対応する領域が完全に非表示になる様子に注意してください。

{{EmbedLiveSample("gradient2", "", "250px")}}

前の 2 つの例では、グラデーションをマスクおよび背景画像として使用しました。マスク画像は CSS 画像である必要はありません。外部画像や SVG でもかまいません。

この例では、外部の PNG を使用しています。画像には、背景が透明なカラフルなハートが含まれています。

```css live-sample___image1 live-sample___luminance1
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  mask-size: 220px 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  background-size: 220px 220px;
}
```

透明なマスク領域が要素をどのように切り取るかに注意してください。要素のうち、表示されているのはマスクが不透明な領域のみです。マスク自体の色は関係ありません。

{{EmbedLiveSample("image1", "", "250px")}}

## アルファ透過度と輝度

`mask-mode` プロパティの既定値である `match-source` は、その値に応じてモードを `alpha` または `luminance` のいずれかに設定します。`match-source` の値は、SVG {{svgelement("mask")}} 要素以外のすべてのマスクソースに対して `alpha` として解決されます。マスクソースが `<mask>` 要素の場合、 `match-source` は、設定されている場合は `<mask>` の {{cssxref("mask-type")}} プロパティの値として解決されます。それ以外の場合、`<mask>` 要素に設定されている SVG の {{svgattr("mask-type")}} 属性の値に解決されます。それも明示的に設定されていない場合、`match-source` は `luminance` に解決されます。

`mask-mode` が `luminance` に解決される場合、または明示的に `luminance` に設定した場合、マスクの色はマスクの不透明度に影響します。前回のデモでは、`mask-mode` は設定されていなかったため、値は既定の `match-source` になりました。カラフルなハートの画像は透明な PNG であるため、`match-source` は `alpha` に解決されます。このプロパティを明示的に設定することで、モードを制御することができます。このデモでは、`mask-mode` を `luminance` に変更します。

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

前回の例と同じマスクに `mask-mode: luminance` を適用すると、マスクが**最も明るい**要素の領域は不透明になり、**より暗い**領域は不透明度が低くなります。

{{EmbedLiveSample("luminance1", "", "250px")}}

輝度マスクの不透明度は、次の式を使用して、 {{glossary("RGB")}} 色の `R`、`G`、`B`、`A` の値によって決定されます。

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

例えば、最新の {{cssxref("named-color")}} は `rebeccapurple` で、これは `#663399` です。明度は `hsl()` カラー関数の L と同等であると想定するかもしれませんが、それほど単純ではありません。値 `#663399` は `rgb(40% 20% 60% / 1)` および `hsl(270 50% 40% / 1)` と同等ですが、明るさの値は `40%` ではなく `27.134%` です。

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

白の明るさの値は `100%` です。

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

黒の明るさは `0%` です。

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

これを、明度 `100%`、不透明度 `27.234%` の白色 (`rgb(100% 100% 100%)`) を、`rebeccapurple`、`white`、`black` の線形グラデーションに追加して、画像のマスクに使用して説明します。この白色は、同じ不透明度の値に解決されます。

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 0.27134 = 0.27134`

```css live-sample___luminance2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
  mask-mode: luminance;
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
}
```

```css hidden live-sample___luminance2 live-sample___luminance3
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
```

```html hidden live-sample___luminance2   live-sample___luminance3
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

`white` マスクが設定されている領域は完全に不透明です。 `black` マスクが設定されている領域は完全に透明です。 `rebeccapurple` マスクが設定されている領域と、不透明度の `27.1234%` の白いマスクが設定されている領域は、どちらも不透明度 `27.1234%` です。

{{EmbedLiveSample("luminance2", "", "250px")}}

`mask-mode` を `alpha` に切り替えると、グラデーションの色は関係なくなります。半透明の白で覆われた部分以外は、要素全体が不透明になります。

`mask-mode` プロパティを使用すると、 JPEG などのアルファ透過率のないラスター画像をマスク画像として使用することができます。 JPEG は不透明なピクセルで構成されています。既定の `alpha` マスクモードで JPEG をマスクとして使用すると、要素全体が非表示になります。一方、`mask-mode` の `luminance` 値は、マスクが黒（明度がない）の部分をクリップし、マスクが不透明な白（明度 100%）の部分は完全に不透明にし、それ以外の部分は、それを覆っているマスク領域の明度に応じて半透明にします。

この例では、黒い夜空に白い月が指定されています。

```css live-sample___luminance3
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  mask-mode: luminance;
  mask-size: 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  background-size: 220px;
}
```

要素はクリップされ、空が黒い部分では表示されません。画像は、月が最も明るい部分で最もよく見えます。

{{EmbedLiveSample("luminance3", "", "250px")}}

この場合、`mask-mode` を `alpha` に切り替えると、マスク全体が不透明になるため、要素全体が表示されます。

## SVG の `<mask>` をマスクソースとする

マスクは、CSS の {{cssxref("image")}} または `<mask-source>` であれば何でも構いません。 `<mask-source>` は、 {{cssxref("url_value", "&lt;url&gt;")}} であり、SVG の {{SVGElement("mask")}} 要素への参照です。これは、 CSS の {{cssxref("clip-path")}} プロパティによるクリップと似ていますが、この場合は「マスク」は SVG {{SVGElement("clipPath")}} 要素になります（`clip-path` を使用する場合、パスの輝度は関係ありません）。

この例では、`<mask>` 要素、同一の {{SVGElement("clipPath")}} 要素、および同一の {{SVGElement("path")}} 要素を持つ SVG を定義して、マスクとクリップパスのソースを表示できるようにしています。

```html live-sample___svg1
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<svg class="mask-source">
  <mask id="mask-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </mask>
  <clippath id="clip-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </clippath>
  <path
    d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
    fill="rgb(255 0 0 / 0.5)"
    stroke="rgb(255 255 255 / 1)"
    stroke-width="20" />
</svg>
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-clip" />
```

```css live-sample___svg1
.applied-mask {
  mask-image: url(#mask-heart);
}
.applied-clip {
  clip-path: url(#clip-heart);
}
```

```css hidden live-sample___svg1
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
body {
  flex-flow: row wrap;
}
```

```html hidden live-sample___svg1
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

画像ソースは `<mask>` であり、マスクには `mask-type` CSS プロパティも `mask-type` SVG 属性も設定されていないため、`mask-type` は既定で `alpha` となり、`mask-mode: match-source` の既定は `luminance` に解決されます。これは、SVG {{svgelement("mask")}} 要素であるマスクソースの場合、{{svgattr("mask-type")}} 属性が明示的に `alpha` に設定されていない限り、`mask-type` は既定で `luminance` になるからです。

{{EmbedLiveSample("svg1", "", "300px")}}

マスクに `mask-type` 属性または CSS プロパティを設定していないため、`mask-mode` プロパティの既定値である `match-source` は `luminance` に解決されます。チェックボックスをオンまたはオフにして、`mask-mode` の値を `alpha` に設定するか、既定値の `match-source` のままにします。

この例では、 CSS におけるマスクとクリップの相違点も示しました。輝度とアルファ透過度はマスクには関係がありますが、クリップには関係がないことに注意してください。マスクは要素の不透明度を制御するために使用できますが、クリップはクリップパス内のすべてを表示し、クリップパス外の要素の部分を完全に非表示にします。クリップされた領域は完全に非表示になりますが、マスクされた領域は部分的にまたは完全に表示することができます。

必要なのが形状だけなら、クリップで十分です。しかし、フェード、不透明度の変化、あるいは位置やサイズの制御（これについては別のガイドで説明します）が必要な場合は、マスキングの方が適しています。

## 関連情報

- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
