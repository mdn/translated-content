---
title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
original_slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 19895ee6410d39f293a06c19a641925206eece73
---

**`mask-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マスクの原点を設定します。このプロパティは、マスクの位置決め領域、つまりマスク画像が配置される領域を決定します。 HTML 要素は、コンテンツの境界ボックス、パディングボックス、またはコンテンツボックス内にマスクを含めることができますが、 SVG 要素（関連付けられた CSS レイアウトボックスを持たないもの）は、塗りつぶし、ストローク、またはビューボックス内にマスクを含めることができます。
複数の行にまたがるテキストの {{htmlelement("span")}} など、複数のボックスとしてレンダリングされる要素の場合、 `mask-origin` プロパティは、マスクの位置指定領域を決定するために {{cssxref("box-decoration-break")}} プロパティが運営するボックスを指定します。

## 構文

```css
/* キーワード値 */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* 複数の値 */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* グローバル値 */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

### 値

`mask-origin` プロパティは、 `<coord-box>` キーワードの値のカンマで区切られたリストで、以下のものが含まれます。

- `content-box`
  - : 位置が[コンテンツボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#content-box)からの相対位置になります。
- `padding-box`
  - : 位置が[パディングボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box)からの相対位置になります。
- `border-box`
  - : 位置が[境界ボックス](/ja/docs/Web/CSS/Guides/Shapes/From_box_values#border-box)からの相対位置になります。
- `fill-box`
  - : 位置がオブジェクトの囲みボックスからの相対位置になります。
- `stroke-box`
  - : 位置が輪郭線の囲みボックスからの相対位置になります。
- `view-box`
  - : 直近の SVG ビューポートを参照ボックスとして使用します。 {{svgattr("viewBox")}} 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは `viewBox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewBox` 属性の幅と高さに設定されます。

標準の `<coord-box>` 値のショートカットとなる 3 つの標準外の値があります。`content` は `content-box` の別名、`padding` は `padding-box` の別名、`border` は `border-box` の別名です。

## 解説

`mask-origin` プロパティは、{{cssxref("background-origin")}} プロパティとよく似ていますが、値のセットと初期値が異なります。初期値は、関連付けられた CSS レイアウトボックスがあるかどうかによって異なります。ある場合、既定値は `border-box` です。これに対し、 `background-origin` の既定値は `padding-box` です。

関連付けられた CSS レイアウトボックスのない SVG 要素の場合、`content-box`、`padding-box`、および `border-box`（既定値）の値は `fill-box` として計算されます。これは、位置がオブジェクトの境界ボックスを基準としていることを意味します。HTML 要素の場合、SVG 関連の `fill-box`、`stroke-box`、または `view-box` の値が設定されていると、その値は `border-box` として計算されます。

1 つの要素には複数のマスクレイヤーが適用できます。レイヤーの数は、{{cssxref("mask-image")}} プロパティの値にカンマで区切られた値の数によって決まります（その値のうち 1 つ以上が `none` である場合でも同様です）。 `mask-origin` のカンマで区切られたリスト内のそれぞれの値は、同じ順序でカンマで区切られた `mask-image` 値と対応付けられます。

2 つのプロパティの値の数が異なる場合、`mask-origin` の値が `mask-image` の値よりも多い場合は、`mask-origin` の余分な値は使用されません。`mask-origin` の値が `mask-image` の値よりも少ない場合は、`mask-origin` の値が繰り返されます。

単一のボックスとしてレンダリングされる要素の場合、このプロパティは、`mask-image` プロパティによって参照される画像のマスクの位置指定領域、つまり原点の位置を指定します。

複数の行にまたがるインラインボックスなど、複数のボックスとしてレンダリングされる要素の場合、 `mask-origin` プロパティは、 {{cssxref("box-decoration-break")}} プロパティがマスクの位置指定領域を決定するために。作用するボックスを指定します。

`mask-origin` は、マスクレイヤーの画像をクリップさせる場合があります。例えば、 {{cssxref("mask-clip")}} プロパティが `padding-box` に設定され、 `mask-origin` が `border-box` に設定され、 {{cssxref("mask-position")}} が `top left` の隅に設定され、要素が境界線を持つ場合、マスクレイヤー画像は左上端で切り取られます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### content, padding, border の比較

この例では、 `mask-origin` プロパティの 3 つの値を比較しながら、基本的な使用方法を示しています。

#### HTML

4 つの {{htmlelement("section")}} 要素を作成し、それぞれに 1 つずつ {{htmlelement("div")}} 要素を設置しています。

```html
<section class="content">
  <div></div>
</section>
<section class="padding">
  <div></div>
</section>
<section class="border">
  <div></div>
</section>
<section class="comparison">
  <div></div>
</section>
```

#### CSS

{{cssxref("border")}}、{{cssxref("padding")}}、{{cssxref("margin")}} をすべての `<div>` に適用します。これにより、マスク画像の原点となる参照点が作成されます。`border` の一括指定には {{cssxref("border-color")}} を指定します。また、{{cssxref("background-color")}} も指定します。これらにより、マスクに緑色の背景と青色の境界線が提供されます。最後に、すべての `<div>` 要素に {{cssxref("mask-image")}} を指定しています。

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
section {
  border: 1px solid black;
}
```

それぞれの `<div>` に異なる `mask-origin` 値を指定します。

```css
.content div {
  mask-origin: content-box;
}

.padding div {
  mask-origin: padding-box;
}

.border div {
  mask-origin: border-box;
}

.comparison div {
  mask-image: none;
}
```

また、それぞれの `<div>` コンテナーのマスクの原点を示すテキストを、各 `<section>` 内に生成しています。

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
```

#### 結果

{{EmbedLiveSample("Comparing content padding and border", "", "200")}}

3 つの値の違いに注意してください。最初の 3 つのボックスでは、マスクはそれぞれ次の位置から始まります。

- 境界線の外側の端。
- 境界線の内側の端、つまりパディングボックスの外側の端。
- コンテンツボックスの外側の端である、パディングボックスの内側の端。

4 番目のボックスには `mask-image` は指定されていません。これは、コンテンツ領域とパディング領域の範囲を簡単に視覚化できるように、参照画像として含まれています。

### 複数の値

この例では、単一の要素に適用される異なる `mask-image` に異なる `mask-origin` 値を使用しています。

#### HTML

単一の `<div>` を記述します。

```html
<div></div>
```

#### CSS

1 つのマスク画像ではなく、それぞれ異なる {{cssxref("mask-position")}} を持つ 3 つのマスク画像を適用します。また、マスク画像が繰り返されないように設定します。

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-position:
    top left,
    top right,
    bottom center;
  mask-repeat: no-repeat;
  mask-origin: content-box, border-box;
}
```

#### 結果

{{EmbedLiveSample("Multiple values", "", "200")}}

3 つの `mask-image` 値がありますが、`mask-origin` 値は 2 つしかありません。これは、`mask-origin` 値が繰り返し使用されていることを意味します。これは、`mask-origin: content-box, padding-box, content-box;` と設定した場合と同じです。境界線と重なっている唯一のマスキングである `border-box` の星は、右上の星です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-image")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} 一括指定
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
