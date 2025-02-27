---
title: <gradient>
slug: Web/CSS/gradient
l10n:
  sourceCommit: 745950224a21606bb2d953e149b1385b9ea6a3f8
---

{{CSSRef}}

**`<gradient>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 2 色以上の連続的な色の変化で構成される特殊な型の {{cssxref("&lt;image&gt;")}} です。

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

CSS グラデーションは[内在的な寸法を持ちません](/ja/docs/Web/CSS/image#description)。つまり、自然または推奨される寸法や、推奨される縦横比を持ちません。実際の寸法は適用される要素に一致します。

## 構文

`<gradient>` データ型は、以下のリストにある関数型のうちの一つによって定義します。

### 線形グラデーション

線形グラデーション (linear gradient) は、色が仮想の直線に沿って変化します。 {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 関数で生成されます。

### 放射グラデーション

放射グラデーション (radial gradient) は、色が中心点 (origin) から連続的に変化します。 {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 関数で生成されます。

#### 扇形グラデーション

扇形グラデーション (conic gradient) は、色が円を描くように連続的に変化します。 {{cssxref("gradient/conic-gradient", "conic-gradient()")}} 関数で生成されます。

#### 反復グラデーション

反復グラデーション (repeating gradient) は、要素全体を埋めるのに必要なだけ、グラデーションを繰り返します。 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 関数で生成されます。

## 補間

色に関する他の補間操作と同様、グラデーションはアルファ乗算済み色空間で計算されます。これは、色と透過性が同時に変化するときに、予期しない灰色が現れるのを避けるためです。（古いブラウザーは、 [transparent キーワード](/ja/docs/Web/CSS/named-color#transparent)を使用するとこれを使用しないことがあるので注意してください。）

## 形式文法

{{csssyntax}}

## 例

### 線形グラデーションの例

単純な線形グラデーションです。

```html hidden
<div class="linear-gradient">線形グラデーション</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('Linear_gradient_example', 240, 120)}}

### 放射グラデーションの例

単純な放射グラデーションです。

```html hidden
<div class="radial-gradient">放射グラデーション</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30 144 255));
}
```

{{EmbedLiveSample('Radial_gradient_example', 240, 120)}}

### 扇形グラデーションの例

単純な扇形グラデーションの例です。なお、まだこれはブラウザーの間で十分に対応されていません。

```html hidden
<div class="conic-gradient">扇形グラデーション</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(pink, coral, lime);
}
```

{{EmbedLiveSample('Conic_gradient_example', 240, 240)}}

### 反復グラデーションの例

単純な線形および放射の反復グラデーションの例です。

```html hidden
<div class="linear-repeat"></div>
<span>反復線形グラデーション</span>
<hr />
<div class="radial-repeat"></div>
<span>反復放射グラデーション</span>
<hr />
<div class="conic-repeat"></div>
<span>反復扇形グラデーション</span>
```

```css hidden
div {
  display: inline-block;
  width: 240px;
  height: 80px;
}

span {
  font-weight: bold;
  vertical-align: top;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    pink,
    pink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    lime,
    lime 15px,
    white 15px,
    white 30px
  );
}

.conic-repeat {
  background: repeating-conic-gradient(lime, pink 30deg);
}
```

{{EmbedLiveSample('Repeating_gradient_examples', 240, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- グラデーション関数: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS の基本データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS の単位と値](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 入門: 値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
