---
title: border-image-width
slug: Web/CSS/Reference/Properties/border-image-width
original_slug: Web/CSS/border-image-width
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

**`border-image-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[境界画像](/ja/docs/Web/CSS/Reference/Properties/border-image)の幅を設定します。

{{InteractiveExample("CSS デモ: border-image-width")}}

```css interactive-example-choice
border-image-width: 30px;
```

```css interactive-example-choice
border-image-width: 15px 40px;
```

```css interactive-example-choice
border-image-width: 2.6rem;
```

```css interactive-example-choice
border-image-width: 20% 8%;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

このプロパティの値が要素の {{cssxref("border-width")}} よりも大きい場合、境界画像はパディング領域 (またはコンテンツ領域) の縁に向けて拡張されます。

## 構文

```css
/* キーワード値 */
border-image-width: auto;

/* <length> 値 */
border-image-width: 1rem;

/* <percentage> 値 */
border-image-width: 25%;

/* <number> 値 */
border-image-width: 3;

/* 上下 | 左右 */
border-image-width: 2em 3em;

/* 上 | 左右 | 下 */
border-image-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
border-image-width: 5% 2em 10% auto;

/* グローバル値 */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

`border-image-width` プロパティは下記の値のリストにある 1 つから 4 つの値を使用して指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じ幅が適用されます。
- 値が **2 つ**指定された場合、1 つ目の幅が**上下**に、2 つ目が**左右**に適用されます。
- 値が **3 つ**指定された場合、1 つ目の幅が**上**に、2 つ目が**左右**に、3 つ目が**下**に適用されます。
- 値が **4 つ**指定された場合、幅は**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- `<length-percentage>`
  - : 境界の幅を、 {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。パーセント値は水平オフセットにおいては境界画像の領域の*幅*、また垂直オフセットにおいては境界画像の領域の*高さ*です。負の値であってはいけません。
- `<number>`
  - : 境界の幅を、対応する {{cssxref("border-width")}} に対する倍率として指定します。負の値であってはいけません。
- `auto`
  - : 境界の幅が、対応する {{cssxref("border-image-slice")}} の本質的な幅と高さ (もしあれば) と等しくなるようにします。画像が本質的な寸法を持っていないのであれば、対応する `border-width` が代わりに使用されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界画像のタイリング

この例は以下の 90 × 90 ピクセルの ".png" ファイルを使用して境界画像を作成します。

![8 つの円を含む正方形の画像。各コーナーの円は薄紫色。 4 つの辺の円は青。真ん中の 9 つ目の円が入る部分は空白。](border.png)

そして、元の画像内のそれぞれの円は 30 × 30 ピクセルです。

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

#### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

#### 結果

{{EmbedLiveSample('Tiling_a_border_image', 200, 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
