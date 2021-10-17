---
title: image-rendering
slug: Web/CSS/image-rendering
tags:
  - CSS
  - CSS 画像
  - CSS プロパティ
  - Reference
  - image-rendering
  - recipe:css-property
browser-compat: css.properties.image-rendering
translation_of: Web/CSS/image-rendering
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`image-rendering`** プロパティは、画像を拡大縮小するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。

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
image-rendering: unset;
```

### 値

- `auto`
  - : 拡大縮小のアルゴリズムはユーザーエージェントに依存します。バージョン 1.9 (Firefox 3.0) から、Gecko は*バイリニア* (bilinear) 再サンプリングを使用します (high-quality)。
- `smooth` {{Experimental_Inline}}
  - : 画像は、画像の外見を最適化するアルゴリズムで拡大縮小されます。具体的には、バイリニア補完などの色の「円滑化」が許容されるアルゴリズムで拡大縮小されます。これは、写真のような画像を想定しています。
- `high-quality` {{Experimental_Inline}}
  - : `smooth` と同等ですが、より高品質な設定です。システムのリソースが制約されている場合、どの画像の品質をどの程度低下させるかを検討するとき。`high-quality` の画像は他の値よりも優先されます。
- `crisp-edges`
  - : 画像は、画像内のコントラストとエッジを保つアルゴリズムにより拡大縮小されます、画像の処理過程で色の円滑化やぼかしを導入は行いません。最近傍 (nearest neighbor) 法や、 2×SaI や [hqx-family](https://en.wikipedia.org/wiki/Hqx) のような[その他のスムーズ化が行われない拡大縮小アルゴリズム](https://en.wikipedia.org/wiki/Pixel-art_scaling_algorithms)などが適しています。この値はブラウザーゲームようなピクセルアート画像を想定しています。
- `pixelated`
  - : 画像を拡大する時は、最近傍 (nearest neighbor) 法が使用され、画像は画像が大きなピクセルで構成されたように表示されます。縮小する時は `auto` と同じになります。

> **Note:** `optimizeQuality` および `optimizeSpeed` の値は、初期の草稿で (SVG の仕様 {{SVGAttr("image-rendering")}} に似たものとして) `smooth` および `pixelated` の同義語として定義されていました。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_image_scaling_algorithms">画像の拡大縮小アルゴリズムの設定</h3>

実際の使用では、 `pixelated` と `crisp-edges` のルールを組み合わせることで、お互いにある程度のフォールバックを提供することができます。 (実際のルールにフォールバックを追加するだけです。) [Canvas API](/ja/docs/Web/API/Canvas_API) は手動の画像データ操作または [`imageSmoothingEnabled`](/ja/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) によって [`pixelated` の代替ソリューション](http://phrogz.net/tmp/canvas_image_zoom.html) を提供することができます。

```html hidden
<div>
  <img class="auto" alt="auto" src="blumen.jpg" />
  <img class="pixelated" alt="pixelated" src="blumen.jpg" />
  <img class="crisp-edges" alt="crisp-edges" src="blumen.jpg" />
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
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

#### 結果

{{EmbedLiveSample('Setting_image_scaling_algorithms')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

> **Note:** 仕様書の例にあるようなピクセルアートの拡大縮小には `crisp-edges` を使うことが想定されていますが、実際にはどのブラウザーも (2020 年 1 月時点で) 対応していません。[Firefox](https://dxr.mozilla.org/mozilla-central/rev/5fd4cfacc90ddd975c82ba27fdc56f4187b3f180/gfx/wr/webrender/src/resource_cache.rs#1727) では、 `pixelated` は最近傍法として解釈されますが、 `auto` と `crisp-edges` はトリリニア法または線形で補間されます。
>
> Chromium と Safari (WebKit) での動作については、 [`GetInterpolationQuality`](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/style/computed_style.cc?type=cs&q=GetInterpolationQuality&g=0&l=1160) 関数と [`CSSPrimitiveValue::operator ImageRendering()`](https://github.com/WebKit/webkit/blob/9b169b6c85394d94f172e5d75ca2f6c74830e99c/Source/WebCore/css/CSSPrimitiveValueMappings.h#L4324) をそれぞれ参照してください。

## 関連情報

- その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
