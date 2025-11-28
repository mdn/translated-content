---
title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
original_slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 15a768b7d90550b0d90811a52d031674a3b84011
---

**`mask-clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マスクが影響する領域を指定します。要素の描画されるコンテンツはこの領域に制限されます。

## 構文

```css
/* <coord-box> 値 */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* キーワード値 */
mask-clip: no-clip;

/* 複数の値 */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* グローバル値 */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

### 値

このプロパティは、カンマで区切られたキーワード値のリストを受け入れます。各値は `<coord-box>` または `no-clip` です。

- `content-box`
  - : 描画されるコンテンツは、コンテンツボックスで切り取られます。
- `padding-box`
  - : 描画されるコンテンツは、パディングボックスで切り取られます。
- `border-box`
  - : 描画されるコンテンツは、境界ボックスで切り取られます。
- `fill-box`
  - : 描画されるコンテンツは、オブジェクトの囲みボックスで切り取られます。
- `stroke-box`
  - : 描画されるコンテンツは、オブジェクトの輪郭線ボックスで切り取られます。
- `view-box`
  - : 直近の SVG ビューポートを参照ボックスとして使用します。 [`viewBox`](/ja/docs/Web/SVG/Reference/Attribute/viewBox) 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは `viewBox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewBox` 属性の幅と高さに設定されます。
- `no-clip`
  - : 描画されるコンテンツは切り取られません。
- `border`
  - : このキーワードは `border-box` と同じ動作をします。
- `padding`
  - : このキーワードは `padding-box` と同じ動作をします。
- `content`
  - : このキーワードは `content-box` と同じ動作をします。
- `text`
  - : このキーワードは要素のテキストでマスク画像を切り取ります。

## 解説

`mask-clip` プロパティは、適用されたマスクの影響を受ける要素の領域を定義します。

SVG の {{svgelement("mask")}} 要素を参照しないマスクレイヤー画像の場合、 `mask-clip` プロパティは、マスクの描画領域、つまりマスクの影響を受ける領域を定義します。要素の描画コンテンツは、この領域に制限されます。

`mask-clip` プロパティは、 `<mask>` 要素を参照するマスクレイヤーの画像には影響しません。 `<mask>` 要素の {{svgAttr("x")}}、{{svgAttr("y")}}、{{svgAttr("width")}}、{{svgAttr("height")}}、{{svgAttr("maskUnits")}} の各属性は、 {{cssxref("mask-image")}} のソースが `<mask>` である場合のマスクの描画領域を決定します。

1 つの要素に複数のマスクレイヤーを適用することができます。レイヤーの数は、 `mask-image` プロパティの値にカンマで区切られた値の数によって決まります（値が `none` の場合も同様です）。カンマで区切られた値のリスト内の各 `mask-clip` 値は、 `mask-image` 値と順番に照合されます。 2 つのプロパティの値の数が異なる場合、 `mask-clip` の余分な値は使用されません。また、 `mask-clip` の値が `mask-image` の値よりも少ない場合、 `mask-clip` の値は繰り返されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界ボックスでマスクを切り取る

この例では、3 つの `mask-clip` 値を示しています。

#### HTML

3 つの要素が含まれており、それぞれ異なる `<coord-box>` 値がクラス名として使用されています。

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

CSS は、背景、境界、パディング、マージン、およびマスク画像を持つ要素を定義し、各 `<div>` に異なる `<coord-box>` を指定します。クラスの名前でコンテンツを生成し、そのテキストがマスクされて表示されなくなるのを防ぐために 10px 上に移動しました。

```css live-sample___mask-clip-example
div {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 10px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 100% 100%;
}
.content-box {
  mask-clip: content-box;
}
.border-box {
  mask-clip: border-box;
}
.padding-box {
  mask-clip: padding-box;
}
div::before {
  content: attr(class);
  position: relative;
  top: -10px;
}
```

```css hidden live-sample___mask-clip-example
body {
  display: flex;
  flex-flow: row wrap;
}
```

#### 結果

{{EmbedLiveSample("mask-clip-example", "", "250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask")}} 一括指定
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
