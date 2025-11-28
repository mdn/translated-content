---
title: mask-type
slug: Web/CSS/Reference/Properties/mask-type
original_slug: Web/CSS/mask-type
l10n:
  sourceCommit: ce1dfc470d18fa6ba694a5b8bd5c657914e57cc3
---

**`mask-type`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 SVG の {{svgElement("mask")}} 要素に適用されます。これは、マスクの輝度（明度）またはアルファ (透過率) のどちらのコンテンツを使用するかを定義します。このプロパティは、{{cssxref("mask-mode")}} プロパティによって上書きされる場合があります。 `mask-type` プロパティは、画像マスクやグラデーションマスクには効果はありません。

## 構文

```css
/* キーワード値 */
mask-type: luminance;
mask-type: alpha;

/* グローバル値 */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### 値

- `alpha`
  - : `<mask>` のアルファ（透過率）値を使用することを示します。
- `luminance`
  - : `<mask>` の[輝度（明度）値](#輝度を理解する)を使用することを示します。

## 解説

`mask-type` プロパティは、 SVG の `<mask>` 要素にのみ関連します。 `mask-type: luminance` を設定すると、マスクはマスクの各部分の明るさを使用します。 `mask-type: alpha` を設定すると、マスクの各部分の透明度または不透明度を使用します。

### 既定の動作

既定では、 SVG の `<mask>` 要素は `mask-type: luminance` を使用します。これは、マスクコンテンツの色と透過率の両方がマスクに影響することを意味しています。マスクが部分的に不透明になるかどうかは、不透明領域の色の明度によって決まります。

- 完全に不透明な白色領域（輝度 100%）はマスクされ、表示されます。
- 黒（輝度 0%）または完全に透明な領域は切り取られ、表示されません。
- 輝度の値が中間である領域は、マスクの色である輝度と、マスクの各領域のアルファ透過率の両方を反映して、部分的にマスクされます。

### 輝度を理解する

`luminance` マスクの不透明度は、次の式を使用して `rgb()` 色の `R`、`G`、`B`、および `A` の値によって決定されます。

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

例えば、色 `green` （`#008000` または `rgb(0% 50% 0% / 1)`）の輝度値は `35.77%` です。単色の `green` の輝度マスクでマスクされた領域は、`35.77%` で表示されます。`mask-type` が `alpha` に設定されている場合、同じ完全不透明の `green` 色でマスクされた領域は `100%` 表示されます。

SVG の `<mask>` 要素に、50% 透明の黒である `fill="rgb(0 0 0 / 0.5)"` が指定されている場合、 `mask-type` が `alpha` に設定されていると、アルファ値が `0.5` （不透明度 50%）であるため、マスクされた要素上の対応する図形は不透明度 50% で表示されます。しかし、`mask-type` の既定値または `luminance` に設定されている場合、マスクされた領域は輝度が `0` であるため、完全に切り取られ、表示されません。

### `mask-mode` の `mask-type` における効果

`mask-type` プロパティが SVG の `<mask>` 要素に設定されている場合、{{cssxref("mask-mode")}} プロパティは、マスクされる要素（マスクを適用する要素）に設定されます。
マスク画像のソースが SVG の `<mask>` でない場合、このプロパティは効果はありません。

`mask-mode` の既定値は `match-source` です。これは、ブラウザーが `<mask>` 要素の `mask-type` 値を使用して、それをどのように解釈するかを決定することを意味します。`mask-mode` が `match-source` 以外の値に設定されている場合、その値が優先され、適用されたマスクの `mask-type` 値を上書きします。

`<mask>` がマスク画像のソースとして定義されており、 `mask-mode` が `match-source` に設定されているか、または既定値である場合、 `mask-mode` は `<mask>` 要素の `mask-type` 値（`luminance` または `alpha`）に解決されます。明示的に設定されていない場合、値は既定の `luminance` になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `mask-type` プロパティの使用

この例では、 `mask-type` プロパティの使用方法と、そのさまざまな値の効果について説明します。

#### HTML

マスクされる 2 つの画像が設置されています。2 つの画像は、クラス名以外はまったく同じです。
また、2 つの `<mask>` 要素を含む SVG も含まれています。2 つのマスクは、`id` 値以外はまったく同じです。それぞれのマスクは、緑と白のハート形と、半透明の白と黒で塗りつぶされた円から構成されています。

```html
<img
  class="alphaMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="luminanceMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="alphaMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="luminanceMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

`mask-type` プロパティを `<mask>` 要素に適用し、次に `<mask>` 要素とマスクソースを画像に適用します。

```css
mask#alphaMask {
  mask-type: alpha;
}

mask#luminanceMask {
  mask-type: luminance;
}

img.alphaMaskType {
  mask-image: url(#alphaMask);
}

img.luminanceMaskType {
  mask-image: url(#luminanceMask);
}
```

#### 結果

{{EmbedLiveSample("Examples", "", "250")}}

`mask-mode` プロパティの既定値は `match-source` であるため、最初のマスクはアルファチャンネルのみを使用してマスクを定義しています。白と緑は完全に不透明であり、 50% の白と黒の色は、色のアルファ値のみが重要であるため、50% 不透明です。2 つ目の例では、色の輝度を使用してマスクの不透明度を決定しています。白は緑よりも明るく、半透明の白は半透明の黒よりも明るくなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- SVG の {{svgattr("mask-type")}} 属性
