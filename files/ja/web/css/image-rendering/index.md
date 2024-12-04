---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

**`image-rendering`** は [CSS](/ja/docs/Web/CSS) のプロパティで、画像を拡大縮小するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

{{Glossary("User agent", "ユーザーエージェント")}}は、ページの作者が自然な寸法とは異なる寸法を指定したとき、画像を拡大縮小します。拡大縮小は、ユーザー操作 (ズーム) によって発生することもあります。例えば、画像の自然な寸法が `100×100px` であって、実際の寸法が `200×200px` (または `50×50px`) であるとき、画像は `image-rendering` で指定されたアルゴリズムを使用して拡大 (または縮小) されます。このプロパティは拡大/縮小されない画像には効果がありません。

## 構文

```css
/* キーワード値 */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* グローバル値 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### 値

- `auto`
  - : 拡大縮小のアルゴリズムはユーザーエージェントに依存します。バージョン 1.9 (Firefox 3.0) から、Gecko は*バイリニア* (bilinear) 再サンプリングを使用します (high-quality)。
- `smooth`
  - : 画像は、画像の外見を最適化するアルゴリズムで拡大縮小されます。具体的には、バイリニア補完などの色の「円滑化」が許容されるアルゴリズムで拡大縮小されます。これは、写真のような画像を想定しています。
- `high-quality`
  - : `smooth` と同等ですが、より高品質な設定です。システムのリソースが制約されている場合、どの画像の品質をどの程度低下させるかを検討するとき。`high-quality` の画像は他の値よりも優先されます。
- `crisp-edges`
  - : 画像は、「最近傍法」 ("nearest neighbor") などのアルゴリズムで変倍され、画像のコントラストやエッジが維持されます。一般的に、ピクセルアートや行描画などの画像を意図通りに処理することを目的としており、不鮮明になったり色が滑らかになったりすることはありません。
- `pixelated`
  - : 画像は「最近傍法」 ("nearest neighbor") などのアルゴリズムで元の画像サイズの最も近い整数倍に変倍され、その後、滑らかな補間を使用して最終的な希望のサイズに画像が調整されます。これは、拡大解像度が元の整数倍でない場合に、変倍による画質の劣化を発生させることなく、「ピクセル化」された見た目を維持することを意図しています。

> **メモ:** `optimizeQuality` および `optimizeSpeed` の値は、初期の草稿で (SVG の仕様 {{SVGAttr("image-rendering")}} に似たものとして) `smooth` および `pixelated` の同義語として定義されていました。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像の拡大縮小アルゴリズムの設定

この例では、画像が 3 回繰り返され、それぞれに異なる `image-rendering` 値が適用されています。

```html hidden
<div>
  <img
    class="auto"
    alt="A small photo of some white and yellow flower against a leafy green background. The image is about 33% smaller than the size it is being displayed at. This upscaling causes the image to appear blurry, with notable soft edges between objects."
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="The same photo as the previous image, which is also being upscaled the same amount. Browsers that support the pixelated value for the image-rendering property display the image as very pixelated. Individual pixels are clearly visible and edges appear much sharper."
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="The same photo as the previous images, which is also being upscaled the same amount. Browsers that support the crisp-edges value for the image-rendering property display the image as very pixelated. In these examples, there is virtually no perceivable difference between the pixelated and crisp-edges versions."
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### 結果

{{EmbedLiveSample('Setting_image_scaling_algorithms', 260, 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-resolution")}}
- [CSS 画像](/ja/docs/Web/CSS/CSS_images)モジュール
- SVG の {{SVGAttr("image-rendering")}} 属性
