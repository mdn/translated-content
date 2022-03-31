---
title: <gradient>
slug: Web/CSS/gradient
tags:
  - CSS
  - CSS Data Type
  - CSS Images
  - Data Type
  - グラフィック
  - Layout
  - Reference
browser-compat: css.types.image.gradient
translation_of: Web/CSS/gradient
---
{{CSSRef}}

**`<gradient>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 2 色以上の連続的な色の変化で構成される特殊な型の {{cssxref("&lt;image&gt;")}} です。

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

CSS グラデーションは[自身の寸法を持ちません](/ja/docs/Web/CSS/image#description)。つまり、自然または推奨される寸法や、推奨される縦横比を持ちません。実際の寸法は適用される要素に一致します。

## 構文

`<gradient>` データ型は、以下のリストにある関数型のうちの一つによって定義します。

#### 線形グラデーション

線形グラデーション (linear gradient) は、色が仮想の直線に沿って変化します。 {{cssxref("gradient/linear-gradient()", "linear-gradient()")}} 関数で生成されます。

#### 放射グラデーション

放射グラデーション (radical gradient) は、色が中心点 (origin) から連続的に変化します。 {{cssxref("gradient/radial-gradient()", "radial-gradient()")}} 関数で生成されます。

#### 反復グラデーション

反復グラデーション (repeating gradient) は、要素全体を埋めるのに必要なだけ、グラデーションを繰り返します。 {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}} および {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}} 関数で生成されます。

#### 扇形グラデーション

扇形グラデーション (conic gradient) は、色が円を描くように連続的に変化します。 {{cssxref("gradient/conic-gradient()", "conic-gradient()")}} 関数で生成されます。

## 補間

色に関する他の補間操作と同様、グラデーションはアルファ乗算済み色空間で計算されます。これは、色と透過性が同時に変化するときに、予期しない灰色が現れるのを避けるためです。 (古いブラウザーは、 [transparent キーワード](/ja/docs/Web/CSS/color_value#transparent_keyword)を使用するとこれを使用しないことがあるので注意してください。)

## 例

<h3 id="Linear_gradient_example">線形グラデーションの例</h3>

単純な線形グラデーションです。

```html hidden
<div class="linear-gradient">Linear gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(to right,
      red, orange, yellow, green, blue, indigo, violet);
}
```

{{EmbedLiveSample('Linear_gradient_example', 240, 120)}}

<h3 id="Radial_gradient_example">放射グラデーションの例</h3>

単純な放射グラデーションです。

```html hidden
<div class="radial-gradient">Radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('Radial_gradient_example', 240, 120)}}

<h3 id="Repeating_gradient_examples">反復グラデーションの例</h3>

単純な線形および放射の反復グラデーションの例です。

```html hidden
<div class="linear-repeat">Repeating linear gradient</div>
<br>
<div class="radial-repeat">Repeating radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(to top left,
      lightpink, lightpink 5px, white 5px, white 10px);
}

.radial-repeat {
  background: repeating-radial-gradient(powderblue, powderblue 8px, white 8px, white 16px);
}
```

{{EmbedLiveSample('Repeating_gradient_examples', 240, 220)}}

<h3 id="Conic_gradient_example">扇形グラデーションの例</h3>

単純な扇形グラデーションの例です。なお、まだこれはブラウザーの間で十分に対応されていません。

```html hidden
<div class="conic-gradient">Conic gradient</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('Conic_gradient_example', 240, 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- グラデーション関数: {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
- [CSS の基本データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS の単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 入門: 値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
