---
title: invert()
slug: Web/CSS/Reference/Values/filter-function/invert
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`invert()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、入力画像の色サンプルを反転します。結果は {{cssxref("filter-function")}} です。

{{InteractiveExample("CSS デモ: invert()")}}

```css interactive-example-choice
filter: invert(0);
```

```css interactive-example-choice
filter: invert(0.3);
```

```css interactive-example-choice
filter: invert(50%);
```

```css interactive-example-choice
filter: invert(70%);
```

```css interactive-example-choice
filter: invert(1);
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

```css
/* 反転なし */
invert(0)

/* 完全に反転 */
invert()
invert(1)
invert(100%)

/* 60% 反転 */
invert(.6)
invert(60%)
```

### 引数

- {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : 変換の量を指定します。`100%` の値は完全に反転し、`0%` の値は入力値を変更しません。`0%` から `100%` の間の値は、効果に対する線形乗数となります。{{Glossary("interpolation","補間")}}の初期値は `0` です。デフォルト値は `1` です。

## 形式文法

{{CSSSyntax}}

## SVG フィルター

SVG の {{SVGElement("feComponentTransfer")}} フィルター要素は、中に含まれている {{SVGElement("feFuncR")}}、{{SVGElement("feFuncG")}}、{{SVGElement("feFuncB")}} の各テーブル要素に同等の反転を生成することで、コンテンツを反転させるのにも使用できます。赤、緑、青の各フィルタープリミティブに対して同じ `tableValue` を設定し、同じ値にすると、{{SVGElement("filter")}} の ID によって SVG 効果を参照できます。

```html
<svg role="none">
  <filter id="invert90">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.1 0" />
      <feFuncG type="table" tableValues="0.1 0" />
      <feFuncB type="table" tableValues="0.1 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

次の宣言は同じ効果が発生します。

```css
filter: invert(0.9);
filter: invert(90%);
filter: url("#invert90"); /* 埋め込まれた SVG */
filter: url("fileName.svg#invert90"); /* 外部の SVG */
```

## 例

この例では比較用に 3 つの画像を表示します。`invert()` フィルター関数を適用した画像、同等の SVG 関数を適用した画像、そして元の画像です。

### SVG

適用対象のコンテンツを 70% 反転させる SVG フィルターを生成します。

```html
<svg height="0">
  <filter id="invert">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.3 0" />
      <feFuncG type="table" tableValues="0.3 0" />
      <feFuncB type="table" tableValues="0.3 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

### CSS

`filter` または `svgFilter` クラスに基づいて要素を反転させる CSS を以下に示します。

```css
.filter {
  filter: invert(70%);
}

.svgFilter {
  filter: url("#invert");
}
```

```css hidden
th,
td {
  padding: 5px;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th><code>invert()</code> フィルター</th>
      <th>同等の SVG フィルター</th>
      <th>元画像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="svgFilter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgInvert">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.3 0" />
              <feFuncG type="table" tableValues="0.3 0" />
              <feFuncB type="table" tableValues="0.3 0" />
            </feComponentTransfer>
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgInvert')" />
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

{{EmbedLiveSample('examples','100%','280')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("filter-function")}} 関数には、次のものがあります。

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
