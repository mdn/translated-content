---
title: <filter-function>
slug: Web/CSS/Reference/Values/filter-function
original_slug: Web/CSS/filter-function
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

**`<filter-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、入力された画像の表示方法を変更することができるグラフィカル効果を表します。これは {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティで使用します。

## 構文

`<filter-function>` データ型は以下の一覧にあるフィルター関数を使用して指定されます。それぞれの関数には引数が必要であり、無効な場合は、フィルターが適用されません。

- {{cssxref("filter-function/blur", "blur()")}}
  - : 画像をぼかします。
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : 画像を明るくしたり暗くしたりします。
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : 画像のコントラストを上げたり下げたりします。
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : 画像の背後にドロップシャドウを適用します。
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : 画像をグレイスケールに変換します。
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : 画像の色相を全体的に変更します。
- {{cssxref("filter-function/invert", "invert()")}}
  - : 画像の色を反転させます。
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : 画像を半透明にします。
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : 入力画像の彩度を上げたり下げたりします。
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : 画像をセピア調に変換します。

## 形式文法

{{csssyntax}}

## 例

### フィルター関数の比較

この例には、グラフィックと、種類のフィルター機能を選択するための選択メニュー、フィルター機能内で使用される値を変化させるためのスライダーが用意されています。コントロールを更新すると、フィルター効果がリアルタイムで更新されるので、さまざまなフィルターの効果を調べることができます。

```css
div {
  width: 100%;
  height: 512px;
  background: url(fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
  filter: <filter-function>(<value>);
}
```

ここで、 `<filter-function>` はドロップダウンから選択したフィルターであり、 `<value>` はスライダーで設定した値です。

```html live-sample___filter-functions
<div></div>
<ul>
  <li>
    <label for="filter-select">フィルター関数を選択:</label>
    <select id="filter-select">
      <option selected>blur</option>
      <option>brightness</option>
      <option>contrast</option>
      <option>drop-shadow</option>
      <option>grayscale</option>
      <option>hue-rotate</option>
      <option>invert</option>
      <option>opacity</option>
      <option>saturate</option>
      <option>sepia</option>
    </select>
  </li>
  <li><input type="range" /><output></output></li>
  <li>
    <p>現在の値: <code></code></p>
  </li>
</ul>
```

```css live-sample___filter-functions
div {
  width: 100%;
  height: 512px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%;
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}
```

```js hidden live-sample___filter-functions
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
const output = document.querySelector("output");
const curValue = document.querySelector("p code");

selectElem.addEventListener("change", () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener("input", () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  switch (filter) {
    case "blur":
      slider.value = 0;
      slider.min = 0;
      slider.max = 30;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "brightness":
    case "contrast":
    case "saturate":
      slider.value = 1;
      slider.min = 0;
      slider.max = 4;
      slider.step = 0.05;
      slider.setAttribute("data-unit", "");
      break;
    case "drop-shadow":
      slider.value = 0;
      slider.min = -20;
      slider.max = 40;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "opacity":
      slider.value = 1;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "grayscale":
    case "invert":
    case "sepia":
      slider.value = 0;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "hue-rotate":
      slider.value = 0;
      slider.min = 0;
      slider.max = 360;
      slider.step = 1;
      slider.setAttribute("data-unit", "deg");
      break;
    default:
      console.error("Unknown filter set");
  }
}

function setDiv(filter) {
  const unit = slider.getAttribute("data-unit");
  const offset = `${Math.round(slider.value)}${unit}`;
  const radius = `${Math.round(Math.abs(slider.value / 2))}${unit}`;
  divElem.style.filter =
    filter === "drop-shadow"
      ? `${selectElem.value}(${offset} ${offset} ${radius})`
      : `${selectElem.value}(${slider.value}${unit})`;

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `filter: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);
```

{{EmbedLiveSample("filter-functions", "", "700px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("filter")}} および {{cssxref("backdrop-filter")}}
