---
title: CSS フィルター効果
short-title: フィルター効果
slug: Web/CSS/Guides/Filter_effects
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS フィルター効果** (CSS filter effects) モジュールのプロパティを使用すると、要素が文書に表示される前に、その要素のレンダリング処理方法を定義できます。このような効果の例としては、ぼかし処理や要素の色の濃淡変更などが挙げられます。

## フィルター効果の実例

さまざまなスライダーを操作して、下記の画像にフィルター効果を適用してみましょう。

```html hidden live-sample___filters
<article>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/george_floyd_memorial_sm.jpg"
    width="600"
    height="400"
    alt="ジョージ・フロイドとブラック・ライヴズ・マター運動を称える色鮮やかな追悼施設" />
  <form>
    <fieldset>
      <legend>フィルターを選択</legend>
      <label>
        <input type="range" name="blur" value="0" min="0" max="1" step="0.1" />
        blur()
      </label>
      <label>
        <input
          type="range"
          name="brightness"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        brightness()
      </label>
      <label>
        <input
          type="range"
          name="contrast"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        contrast()
      </label>
      <label>
        <input
          type="range"
          name="dropShadow"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        drop-shadow()
      </label>
      <label>
        <input
          type="range"
          name="grayscale"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        grayscale()
      </label>
      <label>
        <input
          type="range"
          name="hueRotate"
          value="0"
          min="-1"
          max="1"
          step="0.1" />
        hue-rotate()
      </label>
      <label>
        <input
          type="range"
          name="invert"
          value="0"
          min="0"
          max="1"
          step="0.1" />
        invert()
      </label>
      <label>
        <input
          type="range"
          name="opacity"
          value="1"
          min="0"
          max="1"
          step="0.1" />
        opacity()
      </label>
      <label>
        <input
          type="range"
          name="saturate"
          value="1"
          min="0"
          max="2"
          step="0.1" />
        saturate()
      </label>
      <label>
        <input type="range" name="sepia" value="0" min="0" max="1" step="0.1" />
        sepia()
      </label>
      <button type="reset">リセット</button>
    </fieldset>
  </form>
</article>

<pre><output></output></pre>

<p>画像: <cite>DigitalNomad</cite></p>
```

```css hidden live-sample___filters
article {
  display: grid;
  grid-template-columns: minmax(200px, 800px) 15em;
  gap: 1rem;
  max-width: 100%;
}
label {
  display: block;
  font-family: sans-serif;
}
input {
  vertical-align: middle;
  margin-right: 0.25em;
  max-width: 50%;
}
output {
  white-space: normal;
  overflow-wrap: break-word;
  display: block;
  width: 100%;
}

img {
  margin: 1rem;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
```

```js hidden live-sample___filters
const image = document.querySelector("img");
const controls = document.querySelectorAll("input");
const output = document.querySelector("output");

for (control of controls) {
  control.addEventListener("change", () => {
    /* 関数を実行 */
    changeCSS();
  });
}
document.querySelector("button").addEventListener("click", () => {
  setTimeout(() => {
    changeCSS();
  }, 50);
});

function changeCSS() {
  let currentFilter = "filter: ";
  for (const filter of [
    blur(),
    brightness(),
    contrast(),
    dropShadow(),
    grayscale(),
    hueRotate(),
    invert(),
    opacity(),
    saturate(),
    sepia(),
  ]) {
    currentFilter += filter;
  }
  currentFilter += ";";
  image.setAttribute("style", currentFilter);
  output.innerText = currentFilter;
}
function blur() {
  let blurValue = document.getElementsByName("blur")[0].value;
  return blurValue === "0" ? "" : `blur(${blurValue}rem) `;
}
function brightness() {
  let brightnessValue = document.getElementsByName("brightness")[0].value;
  return brightnessValue.toString() === "1"
    ? ""
    : `brightness(${brightnessValue}) `;
}
function contrast() {
  let contrastValue = document.getElementsByName("contrast")[0].value;
  return contrastValue === 1 ? "" : `contrast(${contrastValue}) `;
}
function dropShadow() {
  let dropShadowValue = document.getElementsByName("dropShadow")[0].value;
  return dropShadowValue === 0
    ? ""
    : `drop-shadow(${dropShadowValue}rem ${dropShadowValue}rem 0rem orange) `;
}
function grayscale() {
  let grayscaleValue = document.getElementsByName("grayscale")[0].value;
  return grayscaleValue === 0 ? "" : `grayscale(${grayscaleValue}) `;
}
function hueRotate() {
  let hueRotateValue = document.getElementsByName("hueRotate")[0].value;
  return hueRotateValue === 0 ? "" : `hue-rotate(${hueRotateValue}turn) `;
}
function invert() {
  let invertValue = document.getElementsByName("invert")[0].value;
  return invertValue === 0 ? "" : `invert(${invertValue}) `;
}
function opacity() {
  let opacityValue = document.getElementsByName("opacity")[0].value;
  return opacityValue === 1 ? "" : `opacity(${opacityValue}) `;
}
function saturate() {
  let saturateValue = document.getElementsByName("saturate")[0].value;
  return saturateValue === 1 ? "" : `saturate(${saturateValue}) `;
}
function sepia() {
  let sepiaValue = document.getElementsByName("sepia")[0].value;
  return sepiaValue === 0 ? "" : `sepia(${sepiaValue})`;
}
```

{{EmbedLiveSample("filters", "", "550px")}}

### プロパティ

- {{cssxref("backdrop-filter")}}
- {{cssxref("filter")}}

### 関数

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}

## ガイド

- [CSS フィルター効果の使用](/ja/docs/Web/CSS/Guides/Filter_effects/Using)
  - : CSS フィルター効果に関する概念の概要、プロパティ、フィルター機能、SVG フィルターを含め、フィルター値、ソース順序、値の操作について説明します。

## 関連概念

- {{cssxref("image")}} データ型
- {{cssxref("filter-function")}} データ型

- {{cssxref("background-image")}} プロパティ
- {{cssxref("background-blend-mode")}} プロパティ
- {{cssxref("mix-blend-mode")}} プロパティ

- {{glossary("interpolation", "補間")}} 用語項目

- [`color-interpolation-filters`](/ja/docs/Web/SVG/Reference/Attribute/color-interpolation-filters) SVG プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 合成と混合](/ja/docs/Web/CSS/Guides/Compositing_and_blending)[CSS 合成と混合](/ja/docs/Web/CSS/Guides/Compositing_and_blending) モジュールは、要素の背景レイヤーを合成したり、要素をそのコンテナーと合成したりすることができるようにします。
- SVG の {{SVGElement("filter")}} 要素と SVG のフィルタープリミティブ: {{SVGElement("feSpotLight")}}, {{SVGElement("feBlend")}}, {{SVGElement("feColorMatrix")}}, {{SVGElement("feComponentTransfer")}}, {{SVGElement("feComposite")}}, {{SVGElement("feConvolveMatrix")}}, {{SVGElement("feDiffuseLighting")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feDropShadow")}}, {{SVGElement("feFlood")}}, {{SVGElement("feGaussianBlur")}}, {{SVGElement("feImage")}}, {{SVGElement("feMerge")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feOffset")}}, {{SVGElement("feSpecularLighting")}}, {{SVGElement("feTile")}}, {{SVGElement("feTurbulence")}}
