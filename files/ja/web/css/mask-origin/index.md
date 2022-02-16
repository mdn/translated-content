---
title: mask-origin
slug: Web/CSS/mask-origin
tags:
  - CSS
  - CSS プロパティ
  - CSS マスク
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-origin
translation_of: Web/CSS/mask-origin
---
{{CSSRef}}

**`mask-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マスクの原点を設定します。

```css
/* キーワード値 */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: margin-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* 複数の値 */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* 標準外のキーワード値 */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* グローバル値 */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: unset;
```

単純なボックスとして描画される要素では、このプロパティはマスクを配置する領域を指定します。言い換えれば、このプロパティは {{cssxref("mask-image")}} プロパティで指定された画像の原点を指定します。複数のボックスとして描画される要素、例えば複数行にまたがるインラインボックスや複数のページにまたがるボックスなどでは、マスクの配置領域を決定するために {{cssxref("box-decoration-break")}} がどのボックスに作用するかを指定します。

## 構文

1 つまたは複数の以下に挙げたキーワード値を、カンマで区切って指定します。

### 値

- `content-box`
  - : 位置がコンテンツボックスからの相対位置になります。
- `padding-box`
  - : 位置がパディングボックスからの相対位置になります。単純なボックスでは `0 0` がパディング辺の左上隅で、 `100% 100%` は右下隅です。
- `border-box`
  - : 位置が境界ボックスからの相対位置になります。
- `margin-box`
  - : 位置がマージンボックスからの相対位置になります。
- `fill-box`
  - : 位置がオブジェクトの囲みボックスからの相対位置になります。
- `stroke-box`
  - : 位置が輪郭線ボックスからの相対位置になります。
- `view-box`
  - : 直近の SVG ビューポートを参照ボックスとして使用します。 {{svgattr("viewBox")}} 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは `viewBox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewBox` 属性の幅と高さに設定されます。
- `content` {{non-standard_inline}}
  - : `content-box` と同じです。
- `padding` {{non-standard_inline}}
  - : `padding-box` と同じです。
- `border` {{non-standard_inline}}
  - : `border-box` と同じです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスクの原点を border-box に設定する

下のボックス内の CSS を更新して、他の可能な値を試してみてください。

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
