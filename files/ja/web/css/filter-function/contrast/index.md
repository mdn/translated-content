---
title: contrast()
slug: Web/CSS/filter-function/contrast
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

**`contrast()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像のコントラストを調整します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## 構文

```css
contrast(amount)
```

### 引数

- `amount`
  - : 結果のコントラストで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` 未満の値ではコントラストが下がり、 `100%` を超える値ではコントラストが上がります。 `0` または `0%` の値では画像が完全に灰色になり、 `1` または `100%` の値では入力が変更されないままになります。{{Glossary("interpolation","補間")}}の初期値は `1` です。

以下は、等価な値のペアです。

```css
contrast(0) /* 完全な灰色 */
contrast(0%)

contrast(0.65) /* 65% のコントラスト */
contrast(65%)

contrast(1)     /* 効果なし */
contrast(100%)

contrast(2)  /* 2 倍のコントラスト */
contrast(200%)
```

### 形式文法

{{csssyntax}}

## 例

### backdrop-filter プロパティで

この例では、 `contrast()` フィルターを {{cssxref("backdrop-filter")}} プロパティで段落と東福テキストに適用しており、 `<p>` と `<code>` の背後の領域で色が変化しています。

```css
.container {
  background: url(image.jpg) no-repeat center / contain #339;
}
p {
  backdrop-filter: contrast(0.5);
}
code {
  backdrop-filter: contrast(0.15);
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #ffffff;
  font-family: sans-serif;
}
```

```html-nolint hidden
<div class="container" style="background-image: url(unity_for_the_people.jpg);">
  <p>
    テキストと背景色のコントラストが十分にあることを常に確認してください。テキストが背景画像の上に表示される可能性がある場合は、 <code>backdrop-filter</code> を指定してください。 <code>contrast()</code> フィルターで背景色のコントラストを低減すると、可読性は向上しますが、アクセシビリティを保証するものではありません。
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','260')}}

### filter プロパティで

この例では、 `contrast()` フィルターを CSS の {{cssxref("filter")}} プロパティを使用して適用し、コンテンツ、境界線、背景、影を含む要素全体の色をシフトさせることでコントラストを変更しています。

```css
p:first-of-type {
  filter: contrast(30%);
}
p:last-of-type {
  filter: contrast(300%);
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
<p>この段落はコントラストが低下しています。</p>
<p>この段落は通常のコントラストです。</p>
<p>この段落はコントラストが向上しています。</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','320')}}

### url() と SVG の contrast フィルター

SVG の {{SVGElement("filter")}} 要素を使用して、カスタムフィルター効果を定義し、それを [`id`](/ja/docs/Web/HTML/Global_attributes/id) で参照することができます。 `<filter>` の {{SVGElement("feComponentTransfer")}} プリミティブは、ピクセルレベルでの色変換を可能にします。 次のものが指定されたとします。

```svg
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
```

```css hidden
.svgFilterLive {
  filter: url(#contrast2);
}
```

これらの値は同じ結果を生み出します。

```css
filter: contrast(200%);
filter: url(#contrast); /* 埋め込み SVG による */
filter: url(folder/fileName.svg#contrast); /* 外部 SVG フィルター定義 */
```

この例では、 3 つの画像を表示させています。 1 つ目は、 `contrast()` フィルター関数を適用した画像、 2 つ目は、等価な `url()` フィルターを適用した画像、そして比較用に元の画像です。

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>contrast()</code></th>
      <th><code>url()</code></th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          style="filter: contrast(200%)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svgFilterLive"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
          viewBox="0 0 240 151"
          height="0"
          width="0"
          style="overflow: visible"
          color-interpolation-filters="sRGB">
          <filter id="contrast2">
            <feComponentTransfer>
              <feFuncR type="linear" slope="2" intercept="-0.5" />
              <feFuncG type="linear" slope="2" intercept="-0.5" />
              <feFuncB type="linear" slope="2" intercept="-0.5" />
            </feComponentTransfer>
          </filter>
        </svg>
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

{{EmbedLiveSample('With_url()_and_the_SVG_contrast_filter','100%','280')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)モジュール
- その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
