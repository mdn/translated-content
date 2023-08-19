---
title: <filter-function>
slug: Web/CSS/filter-function
---

{{CSSRef}}

**`<filter-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、入力された画像の表示方法を変更することができるグラフィカル効果を表します。これは {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティで使用します。

## 構文

`<filter-function>` データ型は以下の一覧にあるフィルター関数を使用して指定されます。それぞれの関数には引数が必要であり、無効な場合は、フィルターが適用されません。

- {{cssxref("filter-function/blur()", "blur()")}}
  - : 画像をぼかします。
- {{cssxref("filter-function/brightness()", "brightness()")}}
  - : 画像を明るくしたり暗くしたりします。
- {{cssxref("filter-function/contrast()", "contrast()")}}
  - : 画像のコントラストを上げたり下げたりします。
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
  - : 画像の背後にドロップシャドウを適用します。
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
  - : 画像をグレイスケールに変換します。
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
  - : 画像の色相を全体的に変更します。
- {{cssxref("filter-function/invert()", "invert()")}}
  - : 画像の色を反転させます。
- {{cssxref("filter-function/opacity()", "opacity()")}}
  - : 画像を半透明にします。
- {{cssxref("filter-function/saturate()", "saturate()")}}
  - : 入力画像の彩度を上げたり下げたりします。
- {{cssxref("filter-function/sepia()", "sepia()")}}
  - : 画像をセピア調に変換します。

## 例

<h3 id="Filter_function_comparison">フィルター関数の比較</h3>

この例では、シンプルなグラフィックに加えて、さまざまな種類のフィルター機能を選択するための選択メニューと、フィルター機能内で使用される値を変化させるためのスライダーが用意されています。コントロールを更新すると、フィルター効果がリアルタイムで更新されるので、さまざまなフィルターの効果を調べることができます。

#### HTML

```html
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

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png)
    no-repeat center;
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

#### JavaScript

```js
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
  if (filter === "blur") {
    slider.value = 0;
    slider.min = 0;
    slider.max = 30;
    slider.step = 1;
    slider.setAttribute("data-unit", "px");
  } else if (
    filter === "brightness" ||
    filter === "contrast" ||
    filter === "saturate"
  ) {
    slider.value = 1;
    slider.min = 0;
    slider.max = 4;
    slider.step = 0.05;
    slider.setAttribute("data-unit", "");
  } else if (filter === "drop-shadow") {
    slider.value = 0;
    slider.min = -20;
    slider.max = 40;
    slider.step = 1;
    slider.setAttribute("data-unit", "px");
  } else if (filter === "opacity") {
    slider.value = 1;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute("data-unit", "");
  } else if (
    filter === "grayscale" ||
    filter === "invert" ||
    filter === "sepia"
  ) {
    slider.value = 0;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute("data-unit", "");
  } else if (filter === "hue-rotate") {
    slider.value = 0;
    slider.min = 0;
    slider.max = 360;
    slider.step = 1;
    slider.setAttribute("data-unit", "deg");
  }
}

function setDiv(filter) {
  if (filter === "drop-shadow") {
    divElem.style.filter = `${selectElem.value}(${Math.round(
      slider.value,
    )}${slider.getAttribute("data-unit")} ${Math.round(
      slider.value,
    )}${slider.getAttribute("data-unit")} ${Math.round(
      Math.abs(slider.value / 2),
    )}${slider.getAttribute("data-unit")})`;
  } else {
    divElem.style.filter = `${selectElem.value}(${
      slider.value
    }${slider.getAttribute("data-unit")}`;
  }

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

#### 結果

{{EmbedLiveSample('Filter_function_comparison', '100%', 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("filter")}} および {{cssxref("backdrop-filter")}}
