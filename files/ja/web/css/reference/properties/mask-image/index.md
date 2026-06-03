---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
original_slug: Web/CSS/mask-image
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`mask-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のマスクレイヤーとして使用する画像を設定し、マスク画像のアルファチャンネルと、 {{cssxref("mask-mode")}} プロパティの値に応じて、マスク画像の色の輝度に基づいて、マスク画像が設定されている要素の領域を非表示にします。

## 構文

```css
/* キーワード値 */
mask-image: none;

/* <mask-source> 値 */
mask-image: url(masks.svg#mask1);

/* <image> 値 */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* 複数の値 */
mask-image: url(mask.png), linear-gradient(black 25%, transparent 35%);

/* グローバル値 */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### 値

- `none`
  - : このキーワードは、透明な黒い画像レイヤーとして解釈されます。
- `<mask-source>`
  - : {{cssxref("url_value", "&lt;url&gt;")}} による {{SVGElement("mask")}} または CSS 画像への参照です。
- {{cssxref("&lt;image&gt;")}}
  - : マスク画像レイヤーとして使用される画像の値です。

## 解説

`mask-image` プロパティは、適用される要素の一部を非表示にするマスクを提供します。値は、マスク参照のカンマ区切りリストです。それぞれのマスク参照は、`<image>`、`<mask-source>`、またはキーワード `none` です。

`<image>` には、[CSS グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient) などの生成画像を含む、あらゆる種類の画像を指定することができます。

`mask-image` プロパティの値に 1 つの値しか指定されておらず、その値が `none` の場合、マスク効果は現れません。複数の値が指定されている場合、リストに含まれる `none` 値は直接的な効果は持ちませんが、同じリスト内の他の `mask-*` 値は、透明な黒のマスクレイヤーに適用され、視覚的な効果はありません。

[CORS](/ja/docs/Glossary/CORS) ポリシーにより、HTTP および HTTPS プロトコルで提供される画像ソースのみが `<image>` 値として受け入れられます。相対または絶対 `file://` プロトコルを含む、ローカルで提供されている画像は受け入れられず、透明な黒として表示されます。URL 画像ソースをローカルで検査するには、[ローカルサーバーを設定](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost) してください。

マスクは、次の場合、何らかの画像を表示しない、透明な黒い画像レイヤーとして扱われます。

- マスク画像が空（幅または高さが 0）の場合。
- マスク画像のダウンロードに失敗した場合。
- ブラウザーがマスク画像の形式に対応していない場合。
- マスク画像が存在しない場合。
- マスクの値がマスク画像を指していない場合。

{{cssxref("mask-mode")}} プロパティの既定値は `match-source` で、これはモードがマスク画像自体のモードによって定義されることを意味しています。マスク画像のモードは、通常は `alpha` ですが、マスクソースが SVG {{svgelement("mask")}} 要素である場合は、 CSS の {{cssxref("mask-type")}} プロパティまたは SVG の {{svgattr("mask-type")}} 属性によってモードが `alpha` に変更されていない限り、モードは `luminance` になります。

`mask-mode` の値は重要です。これは、マスク効果が画像ソースのアルファチャンネルの値のみに依存するか、それともそれらとマスクの輝度（`mask-image` を構成する色の明暗）の組み合わせに依存するかを決定するからです。

- すべてのケースにおいて、マスクのアルファ透過率が重要になります。 `mask-image` の不透明な領域によってマスクされた要素領域はレンダリングされますが、透明な画像領域によってマスクされた領域は非表示になります。
- `mask-mode` の値が設定されているか、 `alpha` に解決すると、色のアルファチャンネルのみが重要になり、色相、明度などは重要ではなくなります。
- `mask-mode` プロパティが設定されているか、または既定値が `luminance` の場合、マスク値は各色の輝度値にアルファ値を掛けた値になります。 `mask-mode` は、その値に明示的に設定されている場合、またはプロパティが `match-source` に設定されており、`mask-image` ソースが SVG の {{svgelement("mask")}} であり、その {{cssxref("mask-type")}} プロパティまたは {{svgattr("mask-type")}} 属性が明示的に `alpha` に設定されていない場合、マスク値は各色の輝度値となります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク画像としてのグラデーション

この例では、マスクとして `<image>` 値を使用し、CSS の[放射グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient/radial-gradient)をマスク画像として定義して、縁が柔らかい丸い画像を作成しています。

#### HTML

HTML の {{htmlelement("img")}} 要素を記述しています。この要素は、他のすべての例でも使用されます。

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

CSS の {{CSSxRef("gradient/radial-gradient")}} 関数を使用して、マスクの半径がマスクの幅の半分である黒い円を持つマスクを作成し、 10% 以上透明になる推移を作成します。

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### 結果

{{EmbedLiveSample("first-example", "100%", 250)}}

黒い円でマスクされている元の要素の部分は完全に不透明で、マスクが透明になるにつれて透明になっていきます。

### マスク画像としての画像リソース

この例では、マスク画像として使用されている `<mask-source>` は外部 SVG です。

#### HTML

前回の例と同じ画像が含まれています。また、マスクとして使用する画像も含まれています。これは、{{cssxref("fill-opacity")}} が `0.5`、つまり不透明度が 50% の星です。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<img
  src="https://mdn.github.io/shared-assets/images/examples/mask-star.svg"
  alt="A star" />
```

#### CSS

最初の画像では、`mask-star.svg` をマスク画像として使用しています。

```css
img:first-of-type {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

#### 結果

{{EmbedLiveSample("Image resource as a mask image", "100%", 250)}}

マスクは半透明であるため、前回の例ほど色が鮮やかではありません。画像の見える部分は、適用されたマスクの不透明度である 50% の不透明度になります。
マスクは画像よりも小さいので、既定では繰り返されます。{{cssxref("mask-repeat")}} を使用して繰り返しを制御したり、{{cssxref("mask-size")}} を使用してマスクのサイズを変更したりすることもできます。次の例では、後者を使用します。

### 複数のマスク

この例では、複数のマスクを適用する方法を示しています。

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

2 つのマスクを適用します。1 つは前回の例と同じ半透明の SVG、もう 1 つは {{CSSxRef("gradient/repeating-radial-gradient")}} です。 {{cssxref("mask-size")}} プロパティを使用して、マスクのサイズを制御します。最初のマスクのサイズは 100% ではないため、{{cssxref("mask-position")}} および {{cssxref("mask-repeat")}} プロパティを使用して、マスクが中央に配置され、繰り返されないようにします。

```css
img {
  mask-size: 95%, 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-radial-gradient(transparent 0 5px, black 5px 10px);
}
```

#### 結果

{{EmbedLiveSample("multiple masks", "100%", 250)}}

### SVG の `<mask>` によるマスク

この例は、SVG {{svgelement("mask")}} 要素をマスクとして使用することを示しています。この場合、SVG マスクの {{cssxref("mask-type")}} 値は既定で `luminance` であるため、マスクの色が重要になります。これは、不透明な領域（輝度 100%）はマスクされて表示され、透明で黒い領域（輝度 0%）はクリップされ、その間の領域は部分的にマスクされることを意味しています。

#### HTML

4 つの画像それぞれに `id` を、同じ数の `<mask>` 要素を含む SVG を記載しました。

```html
<img
  id="green"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="stroke"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="both"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="greenMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green" />
  </mask>
  <mask id="strokeMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="none"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="bothMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="black">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="black" />
  </mask>
</svg>
```

```html hidden
<p>
  <label>
    <input type="checkbox" />
    <code>mask-mode</code> を <code>alpha</code> に設定
  </label>
</p>
```

#### CSS

それぞれの `<img>` に異なる `<mask>` を適用します。黒で塗りつぶされた最後の画像の一部は、既定ではまったく表示されません。この場合、この例で使用されているすべての色は完全に不透明ですが、`mask-mode` は既定で `match-type` になり、この場合は `luminance` に解決されます。

```css
#green {
  mask-image: url(#greenMask);
}
#stroke {
  mask-image: url(#strokeMask);
}
#both {
  mask-image: url(#bothMask);
}
#alphaMode {
  mask-image: url(#black);
}

body:has(:checked) img {
  mask-mode: alpha;
}
```

`black`、`white`、`green` の輝度値は、それぞれ `0`、`100`、[`46.228`](https://www.colorhexa.com/008000) です。これは、マスクが白の領域は表示され、マスクが黒または完全に透明の領域はクリップ（表示されない）されることを意味しています。マスクが緑色の領域は表示されますが、46.228% の不透明度の白いマスクを指定した場合と同じように、色が薄くなります。

#### 結果

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

チェックボックスをオン/オフして、 `mask-mode` の値を `alpha`（チェックあり）と初期値（`luminance` に解決、チェックなし）の間で切り替えます。 `alpha` を使用する場合、マスクの色は関係ありません。重要なのはアルファ透過率だけです。値が `luminance` に解決すると、 `white` 領域は表示され、 `black` 領域は表示されず、`green` 領域は表示されますが、その不透明度は色 `green` の輝度に一致します。 `mask-mode` が `alpha` に設定されている場合、色はすべて完全に不透明であるため、色は同等になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask")}} 一括指定
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
