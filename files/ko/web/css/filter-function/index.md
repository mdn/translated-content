---
title: <filter-function>
slug: Web/CSS/filter-function
---

{{cssref}}

[CSS](/ko/docs/Web/CSS) **`<filter-function>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 입력 이미지의 모습을 변형할 수 있는 그래픽 효과를 나타냅니다. {{cssxref("filter")}}와 {{cssxref("backdrop-filter")}} 속성에서 사용합니다.

## 구문

`<filter-function>` 자료형은 다음 목록의 필터 중 하나를 사용해 지정할 수 있습니다. 각 함수는 매개변수를 받아야 하며, 유효하지 않은 값을 전달하면 필터를 적용하지 않습니다.

- {{cssxref("filter-function/blur", "blur()")}}
  - : 이미지를 흐리게 만듭니다.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : 이미지의 밝기를 조절합니다.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : 이미지의 대비를 조절합니다.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : 이미지의 뒤에 그림자를 적용합니다.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : 이미지를 흑백으로 변환합니다.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : 이미지의 전체 색조를 조절합니다.
- {{cssxref("filter-function/invert", "invert()")}}
  - : 이미지의 색을 반전합니다.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : 이미지의 투명도를 조절합니다.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : 이미지의 채도를 조절합니다.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : 이미지에 세피아 톤을 적용합니다.

## 예제

### 필터 함수 비교

이 예제는 간단한 그래픽과 함께 여러 가지 필터를 선택할 수 있는 선택 메뉴와, 필터의 값을 조절할 수 있는 슬라이더를 제공합니다. 컨트롤을 조절하면 필터가 실시간으로 변화하므로 각 필터의 효과를 편리하게 알아볼 수 있습니다.

#### HTML

```html
<div></div>
<ul>
  <li>
    <label for="filter-select">필터 함수 선택:</label>
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
    <p>Current value: <code></code></p>
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
  curValue.textContent = `필터: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);
```

#### 결과

{{EmbedLiveSample('필터_함수_비교', '100%', 500)}}

## 명세서

{{Specifications}}

## 같이 보기

- 자료형을 사용하는 속성: {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}
