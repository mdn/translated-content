---
title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
original_slug: Web/CSS/filter-function/blur
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

**`blur()`** は [CSS](/ja/docs/Web/CSS) の関数で、入力画像に[ガウシアンぼかし](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B7%E3%82%A2%E3%83%B3%E3%81%BC%E3%81%8B%E3%81%97)を適用します。返値は {{cssxref("&lt;filter-function&gt;")}} です。

{{InteractiveExample("CSS デモ: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## 構文

`blur()` 関数は、適用された要素にガウスぼかしを適用します。

```css
blur(radius)
```

### 引数

- `radius`
  - : ぼかしの半径で、 {{cssxref("&lt;length&gt;")}} で指定します。ガウス関数の標準偏差の値を定義します。つまり、画面上のピクセルをいくつ互いに混合するかということです。すなわち、大きい値になるほどよりぼかしが入ります。 `0` の値は入力を変更しません。{{Glossary("interpolation","補間")}}時の欠損値は `0` です。

### ピクセル数と rem を用いた blur の設定

```css
blur(0)        /* 効果なし */
blur(8px)      /* 半径 8px でぼかす */
blur(1.17rem)  /* 半径 1.17rem でぼかす */
```

## SVG フィルター

SVG の {{SVGElement("feGaussianBlur")}} フィルター要素もコンテンツをぼかすために使用することができます。このフィルターの {{SVGAttr("stdDeviation")}} 属性は最大 2 つの値を受け入れ、より複雑なぼかし値を作成することができます。同等のぼかしを作成するには、 `stdDeviation` に 1 つの値を記載します。この SVG 効果は ID で参照することができます。

```html
<svg role="none">
  <filter id="blur11">
    <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
  </filter>
</svg>
```

次の宣言は同じ効果をもたらします。

```css
filter: blur(1.1px);
filter: url(#blur11); /* 埋め込み SVG による */
filter: url(folder/fileName.svg#blur11); /* 外部の SVG フィルター定義 */
```

## 例

この例では、 3 つの画像を表示させています。 `blur()` フィルター関数を適用した画像、同等の SVG blur 関数を適用した画像、そして比較用の元画像です。

```css
.filter {
  filter: blur(3.5px);
}
```

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

```css hidden
svg:not([height]) {
  display: none;
}
```

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
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" style="overflow: visible">
          <filter id="svgBlur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url(#svgBlur)" />
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

{{EmbedLiveSample('blur','100%','280')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)モジュール
- その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
