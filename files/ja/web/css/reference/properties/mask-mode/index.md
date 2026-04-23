---
title: mask-mode
slug: Web/CSS/Reference/Properties/mask-mode
original_slug: Web/CSS/mask-mode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`mask-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マスクされる要素に設定します。 {{cssxref("mask-image")}} で定義されたマスクを、輝度とアルファマスクのどちらで扱うかを設定します。

## 構文

```css
/* キーワード値 */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* 複数の値 */
mask-mode: alpha, match-source;

/* グローバル値 */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

### 値

`mask-mode` プロパティは、以下に示す 1 つまたは複数のキーワード値を、カンマで区切って指定します。

- `alpha`
  - : マスク画像のアルファ（透過率）値を使用することを示します。

- `luminance`
  - : マスク画像の [輝度（明るさ）](#luminance_を理解する)の値を使用することを示します。
- `match-source`
  - : マスクの型がソースによって決定されることを示します。これはプロパティの既定値です。
    - {{cssxref("mask-image")}} が SVG の {{svgelement("mask")}} を参照している場合、その {{cssxref("mask-type")}} プロパティの値、または存在する場合、その {{SVGAttr("mask-type")}} 属性が使用されます。どちらも明示的に設定されていない場合、この値は既定で `luminance` になります。
    - マスク画像のソースが {{cssxref("image")}} または {{cssxref("gradient")}} の場合、マスク画像の `alpha` 値が使用されます。

## 解説

マスクは、その透過率、およびマスクの型に応じて輝度を、マスクする要素に伝達します。
マスクの型が {{cssxref("&lt;image&gt;")}} の場合、既定では、マスク画像のアルファ値によって、マスクされた要素の各部分の表示/非表示が決まります。マスクが不透明な部分は、マスクされた要素の対応する部分も表示されます。マスクが半透明な部分は、要素も半透明になり、その部分の要素は非表示になります。これは、`mask-mode` プロパティが `match-source` に設定されているか、または既定で `match-source` の場合、`<image>` マスクの既定の動作です。また、`mask-mode` が明示的に `alpha` に設定されている場合は、常にこの動作になります。

### luminance を理解する

`luminance` マスクの場合、マスクされた要素の表示は、マスクの不透明度と不透明領域の色の輝度の両方に依存します。白（輝度 100%）の不透明領域（アルファ = 1）はマスクされ、表示されます。黒（輝度 0%）の領域は透明（アルファ = 0）になり、クリップされます。白と黒の中間の色で、不透明度が部分的な領域は、マスクを構成する各色の輝度とアルファ透過率を反映して、部分的にマスクされます。

`luminance` マスクの不透明度は、`rgb()` 色の `R`、`G`、`B`、および `A` の値によって、次の式で決定されます。

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

例えば、色 `green` は `#008000` または `rgb(0% 50% 0% / 1)` です。 `luminance` マスクでは、単色の `green` マスクでマスクされた領域は、不透明度 `35.77%` になります。このマスクの `mask-mode` が `alpha` に設定されている場合、`green` は完全に不透明な色であるため、マスクされた領域は不透明度 `100%` になります。

### 複数の値

各 `mask-mode` の値は、カンマで区切られた値のリストです。複数の値が存在する場合、各値は、 {{cssxref("mask-image")}} プロパティ内の同じ位置にあるマスクレイヤーに対応します。これらの値は、関連付けられたマスク画像が `luminance` マスクとして扱われるか、`alpha` マスクとして扱われるかを定義します。

### `match-source` を理解する

`match-source` の場合、`luminance` または `alpha` のどちらを使用するかは、マスクソースのマスクモードによって決まります。`mask-image` プロパティの値が SVG {{svgelement("mask")}} 要素への参照である場合は、`<mask>` 要素の {{cssxref("mask-type")}} プロパティの値が使用されます。 `<mask>` 要素に CSS の `mask-type` プロパティが設定されていない場合、 `<mask>` 要素の {{svgattr("mask-type")}} 属性の値が、存在し、対応している場合は使用されます。どちらも明示的に設定されていない場合、この値は既定で `luminance` になります。ただし、これは `<mask>` 要素がマスクソースである場合に限ります。それ以外の場合、前述のように、マスク画像ソースが SVG `<mask>` ではなく {{cssxref("image")}} である場合は、マスクレイヤー画像の `alpha` 値が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 使い方と値

この例では、`mask-mode` プロパティの基本的な使用法とさまざまな値を示しています。

#### HTML

3 つの `<div>` 要素を記述して、3 つの列挙された `mask-mode` キーワードの値を実例で示せるようにします。

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

それぞれの `<div>` には、同じ背景画像とマスク画像が指定されています。各 `<div>` の唯一の違いは、`mask-mode` プロパティの値です。

```css
div {
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}

.alpha {
  mask-mode: alpha;
}

.luminance {
  mask-mode: luminance;
}

.matchSource {
  mask-mode: match-source;
}
```

```css hidden
div {
  width: 227px;
  height: 200px;
  float: left;
  text-align: center;
  line-height: 65px;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-family: sans-serif;
}
```

#### 結果

{{EmbedLiveSample("Usage and values", "", "250px")}}

マスクソースは SVG の `<mask>` ではなく `<image>` であるため、`match-source` の値は `alpha` に解決されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} 一括指定
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
