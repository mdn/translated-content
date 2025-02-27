---
title: brightness()
slug: Web/CSS/filter-function/brightness
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

**`brightness()`** は [CSS](/ja/docs/Web/CSS) の関数で、入力画像に線形乗算を適用し、明るくしたり暗くしたりします。その結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## 構文

```css
brightness(amount)
```

### 引数

- `amount`
  - : 明るさで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。値が `100%` 未満の場合は入力画像または要素が暗くなり、 `100%` を超える場合は明るくなります。値が `0%` の場合は完全に黒い画像または要素が作成され、 `100%` の場合は入力が変更されません。 `0%` から `100%` までの他の値は、線形の乗算効果があります。 `100%` を超える値も許可されており、明るい結果を提供します。{{Glossary("interpolation","補間")}}の初期値は `1` です。負の値は許可されていません。何も指定しない場合の既定値は `1` です。

以下は、等価な値のペアです。

```css
brightness(0) /* 輝度がゼロに縮小されるため、入力が黒くなる */
brightness(0%)

brightness(0.4) /* 入力の明るさが40%に縮小されるため、入力は60%暗くなる */
brightness(40%)

brightness(1) /* 入力の明るさは変更されない */
brightness(100%)

brightness(2) /* 入力の明るさが 2 倍に */
brightness(200%)
```

### 形式文法

{{csssyntax}}

## 例

### backdrop-filter プロパティを用いた brightness の適用

この例は、段落に `brightness()` フィルターを、 [`backdrop-filter`](/ja/docs/Web/CSS/backdrop-filter) プロパティを介して適用する方法を示します。

#### CSS

```css
.container {
  background: url(image.jpg) no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px #ffffff;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #000000;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container" style="background-image: url(be_fierce.jpg);">
  <p>
    画像上のテキストは、ドロップシャドウがあっても読みにくく、アクセシビリティに欠ける場合があります。
  </p>
</div>
```

#### 結果

{{EmbedLiveSample('Applying_brightness_using_the_backdrop_filter_property', '100%', '280')}}

この例では、`<p>` 要素の背後の領域の色が直線的に変化します。 `backdrop-filter` プロパティが `brightness(0%)` に設定されていた場合、`<p>` 要素を含む `<div>` 領域は黒色となり、背後の画像を隠します。 `brightness(100%)` では、`<div>` 領域の色は入力の `#d4d5b2` と同じになり、背景の画像は完全に透明になります。 この例のように明るさを `150%` に設定すると、背景の画像の色は `<div>` 要素の明るさによって隠されます。

### 数値とパーセント値を用いた brightness の設定

例えば、 `brightness()` フィルターが、 [`filter`](/ja/docs/Web/CSS/filter) プロパティを介して、コンテンツ、境界線、背景画像を含め、要素全体に適用されます。その結果、異なる明るさの値の 3 つのバリエーションが表示されます。

```css
p:first-of-type {
  filter: brightness(50%);
}
p:last-of-type {
  filter: brightness(200%);
}
```

```css hidden
p {
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: palegoldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
  padding: 0.25rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>この段落は明るさを抑えています。</p>
<p>この段落は通常の明るさです。</p>
<p>この段落は明るさを増してあります。</p>
```

{{EmbedLiveSample('Applying_brightness_using_the_filter_property','100%','280')}}

### url() と SVG の brightness フィルターを用いた brightness の適用

SVG の {{SVGElement("filter")}} 要素は、カスタムフィルター効果を定義するために使用でき、その後、 [`id`](/ja/docs/Web/HTML/Global_attributes/id) で参照することができます。 `<filter>` 要素の {{SVGElement("feComponentTransfer")}} プリミティブは、ピクセルレベルでの色変換を可能にします。

例えば、適用したコンテンツを 25% （つまり、元の明るさの 75%）暗くするフィルターを作成するには、 `slope` 属性を `0.75` に設定します。次に、 `id` でフィルターを参照します。

次のコードがあったとします。

```css hidden
.filter {
  filter: brightness(0.75);
}
svg {
  position: absolute;
}
```

```html
<svg role="none">
  <filter id="darken25" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

次の宣言は同様の効果をもたらします。

```css
filter: brightness(75%);
filter: url(#darken25); /* 埋め込み SVG による */
filter: url(folder/fileName.svg#darken25); /* 外部 SVG フィルター定義 */
```

下記の画像では、最初の画像は `brightness()` フィルター機能が適用され、 2 つ目の画像は同様の SVG 明るさ機能が適用され、 3 つ目は比較用の元画像です。

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>ライブサンプル</th>
      <th>同等の SVG</th>
      <th>元画像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="darkened pride flag" />
      </td>
      <td>
        <img
          style="filter: url(#darken25)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="darkened pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('blur','100%','280')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)モジュール
- その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
