---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

**`hue-rotate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素およびその中身のコンテンツの[色相環](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%9B%B8)を回転させます。結果は {{cssxref("&lt;filter-function&gt;")}} です。

> **メモ:** `hue-rotate()` は RGB 色に対する行列演算として定義されています。これは実際には色を HSL モデルに変換するものではなく、非線形操作です。そのため、特に彩度の高い色の場合、元の色の彩度や明度が維持されない場合があります。

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## 構文

`hue-rotate()` 関数は、適用された要素に色相回転を適用します。

```css
hue-rotate(angle)
```

### 引数

- `angle`
  - : 入力サンプルの色相の相対的な変化量を、 {{cssxref("&lt;angle&gt;")}} で指定します。 `0deg` は入力を変更しないままにします。正の回転角は色相の値を増加させるのに対し、負の回転角は色相の値を減少させます。{{Glossary("interpolation","補間")}}の初期値は `0` です。最小値または最大値はありません。 `360deg` を超える値の効果は、 `hue-rotate(Ndeg)` とした場合、 `N` を 360 で割った余りと等価です。

CSS のデータ型 `<angle>` は、度、グラディアン、ラジアン、回転で表された角度の値を表します。次のものは同等です。

```css
hue-rotate(-180deg)
hue-rotate(540deg)
hue-rotate(200grad)
hue-rotate(3.14159rad)
hue-rotate(0.5turn)
```

### 形式文法

{{csssyntax}}

## 例

### backdrop-filter プロパティで

この例では、 `hue-rotate()` フィルターを CSS プロパティの `backdrop-filter` を使用して段落に適用し、`<p>` の背後の領域の色を変化させています。

```css
.container {
  background: url(image.jpg) no-repeat left / contain #011296;
}
p {
  backdrop-filter: hue-rotate(240deg);
  text-shadow: 2px 2px #011296;
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
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html-nolint hidden
<div
  class="container"
  style="background-image: url('https://mdn.github.io/shared-assets/images/examples/listen_to_black_women.jpg');">
  <p>
    画像上のテキストは、ドロップシャドウがあっても読みにくく、アクセシビリティがない場合があります。
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','280')}}

### filter プロパティで

この例では、 `hue-rotate()` フィルターを CSS プロパティの `filter` を使用して適用し、色のずらしをコンテンツ、境界線、背景画像を含む要素全体に追加します。

```css
p {
  filter: hue-rotate(-60deg);
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: goldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
}
```

```css hidden
p {
  padding: 0.5rem;
  font-size: 2rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html-nolint hidden
<p>この例を書いた人はデザイナーではありません。幸いにも。</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','220')}}

### url() と SVG の hue-rotate フィルターで

SVG の {{SVGElement("filter")}} 要素は、カスタムフィルター効果を定義するために使用でき、 [`id`](/ja/docs/Web/HTML/Global_attributes/id) で参照することができます。 `<filter>` の {{SVGElement("feColorMatrix")}} プリミティブの `hueRotate` 型は、同様の効果を提供します。次のものが指定されたとします。

```svg
<filter id="filterID">
  <feColorMatrix type="hueRotate" values="90" />
</filter>
```

これらの値は同じ結果をもたらします。

```css
filter: hue-rotate(90deg); /* 90deg 回転 */
filter: url(#filterID); /* 埋め込み SVG で */
filter: url(folder/fileName.svg#filterID); /* 外部 SVG フィルター定義 */
```

この例では、 3 つの画像を表示させています。 `hue-rotate()` フィルター関数を適用した画像、同等の `url()` フィルターを適用した画像、比較用の元画像です。

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>hue-rotate()</code></th>
      <th><code>url()</code></th>
      <th>元の画像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          style="filter: hue-rotate(90deg)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="色を回転させたプライドフラッグ" />
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 220"
          color-interpolation-filters="sRGB"
          height="220"
          width="220">
          <filter id="hue-rotate">
            <feColorMatrix type="hueRotate" values="90" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url(#hue-rotate)"
            width="220"
            height="220" />
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

{{EmbedLiveSample('With_url()_and_the_SVG_hue-rotate_filter','100%','280')}}

### hue-rotate() は彩度や明度を維持しない

下記の図は、赤から始める 2 つの色のグラデーションを比較したものです。最初のグラデーションは `hue-rotate()` を使用して生成し、 2 つ目は実際の HSL 色値を使用しています。 `hue-rotate()` グラデーションが中間部分で明度と彩度の明らかな違いを示す様子に注目してください。

```html
<div>
  <p><code>hue-rotate()</code> を使用</p>
  <div id="hue-rotate"></div>
</div>
<div>
  <p><code>hsl()</code> を使用</p>
  <div id="hsl"></div>
</div>
```

```css hidden
#hue-rotate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#hue-rotate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const hueRotate = document.getElementById("hue-rotate");
const hsl = document.getElementById("hsl");

for (let i = 0; i < 360; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "red";
  div2.style.filter = `hue-rotate(${i}deg)`;
  hueRotate.appendChild(div2);
}
```

{{EmbedLiveSample('hue-rotate_does_not_preserve_saturation_or_lightness','100%','350')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/CSS_filter_effects)モジュール
- その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
