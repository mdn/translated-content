---
title: mask-clip
slug: Web/CSS/mask-clip
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-clip
translation_of: Web/CSS/mask-clip
---
{{CSSRef}}

**`mask-clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マスクが影響する領域を指定します。要素の描画されるコンテンツはこの領域に制限されます。

```css
/* <geometry-box> 値 */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: margin-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* キーワード値 */
mask-clip: no-clip;

/* 標準外のキーワード値 */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* 複数の値 */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* グローバル値 */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: unset;
```

## 構文

1 つまたは複数の以下に挙げたキーワード値を、カンマで区切って指定します。

### 値

- `content-box`
  - : 描画されるコンテンツは、コンテンツボックスで切り取られます。
- `padding-box`
  - : 描画されるコンテンツは、パディングボックスで切り取られます。
- `border-box`
  - : 描画されるコンテンツは、境界ボックスで切り取られます。
- `margin-box`
  - : 描画されるコンテンツは、マージンボックスで切り取られます。
- `fill-box`
  - : 描画されるコンテンツは、オブジェクトの囲みボックスで切り取られます。
- `stroke-box`
  - : 描画されるコンテンツは、オブジェクトの輪郭線ボックスで切り取られます。
- `view-box`
  - : 直近の SVG ビューポートを参照ボックスとして使用します。 [`viewBox`](/ja/docs/Web/SVG/Attribute/viewBox) 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは `viewBox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewBox` 属性の幅と高さに設定されます。
- `no-clip`
  - : 描画されるコンテンツは切り取られません。
- `border`{{non-standard_inline}}
  - : このキーワードは `border-box` と同じ動作をします。
- `padding`{{non-standard_inline}}
  - : このキーワードは `padding-box` と同じ動作をします。
- `content`{{non-standard_inline}}
  - : このキーワードは `content-box` と同じ動作をします。
- `text`{{non-standard_inline}}
  - : このキーワードは要素のテキストでマスク画像を切り取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界ボックスでマスクを切り取る

`mask-clip` の値を、上記の許容値のいずれかに変更してください。Chromium ベースのブラウザーでこの例を表示する場合は、`-webkit-mask-clip` の値を変更してください。

{{EmbedGHLiveSample("css-examples/masking/mask-clip.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
