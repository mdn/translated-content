---
title: <length>
slug: Web/CSS/length
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<length>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 거리 값을 나타냅니다. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, {{Cssxref("text-shadow")}} 등 다양한 속성에 사용할 수 있습니다.

> **참고:** {{cssxref("&lt;percentage&gt;")}} 값을 일부 속성의 `<length>` 값으로 사용할 수는 있지만 `<percentage>`와 `<length>` 는 다릅니다. {{cssxref("&lt;length-percentage&gt;")}}를 참고하세요.

## 구문

`<length>` 자료형은 {{cssxref("&lt;number&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성합니다. 다른 CSS 단위와 마찬가지로 숫자와 단위 문자 사이에 공백은 존재하지 않습니다. 숫자 `0` 뒤에는 단위를 붙이지 않아도 됩니다.

> **참고:** 일부 속성은 음의 `<length>`를 받지만 다른 속성은 그렇지 않습니다.

### 단위

#### 상대길이 단위

상대길이는 어떤 다른 거리와의 상대적 비율을 표현합니다. 어떤 다른 거리란 단위에 따라 특정 문자, {{cssxref("line-height")}}, 아니면 {{glossary("viewport", "뷰포트")}}일 수 있습니다.

##### 글꼴 상대 길이

글꼴 상대 길이는 `<length>` 값을 특정 문자나 현재 요소가 사용하는 글꼴의 특정 속성을 기준으로 설정합니다.

> **참고:** 아래 단위들, 특히 `em`과 `rem`은 사용자가 글꼴 크기를 늘려도 [페이지의 수직 흐름을 유지](https://24ways.org/2006/compose-to-a-vertical-rhythm)하는, 확대 가능한 레이아웃을 만들기 위해 많이 쓰입니다.

- `cap` {{experimental_inline}}
  - : 요소 {{cssxref("font")}}의 "cap height"(영문 대문자의 평균 높이 값)를 나타냅니다.
- `ch`
  - : 요소 {{cssxref("font")}}의 문자 "0"(영, 유니코드 U+0030)의 너비를 나타냅니다.
    문자 "0"의 너비를 측정하는 것이 불가능하거나 실용적이지 않은 경우 너비 0.5em에 높이 1em이라고 가정해야 합니다.
- `em`
  - : 요소 {{cssxref("font-size")}}의 계산값. 요소의 {{cssxref("font-size")}} 속성에 사용한다면 상속받는 `font-size` 값을 나타냅니다.
- `ex`
  - : 요소 {{cssxref("font")}}의 [x높이](https://ko.wikipedia.org/wiki/X%EB%86%92%EC%9D%B4)를 나타냅니다. "x"문자를 가진 글꼴에서는 보통 소문자 높이와 같습니다. 많은 글꼴에서 `1ex ≈ 0.5em`입니다.
- `ic` {{experimental_inline}}
  - : "水" (한중일 한자 "물", U+6C34) 문자를 렌더링할 때 사용하는 글꼴에서의 너비를 나타냅니다.
- `lh` {{experimental_inline}}
  - : 요소가 {{cssxref("line-height")}}를 가지고 있는 경우, `line-height`의 계산값을 절대 길이로 변환해 나타냅니다.
- `rem`
  - : 루트 요소(보통 {{HTMLElement("html")}})의 {{cssxref("font-size")}}를 나타냅니다. 루트 요소의 `font-size`에 사용할 경우 최초값(보통 브라우저 기본값은 `16px`이나 사용자 설정으로 변할 수 있음)을 나타냅니다.
- `rlh` {{experimental_inline}}
  - : 루트 요소(보통 {{HTMLElement("html")}})의 {{cssxref("line-height")}}를 절대 길이로 변환해 나타냅니다. 루트 요소의 {{cssxref("font-size")}}나 `line-height`에 사용할 경우 최초값을 나타냅니다.

##### 뷰포트 백분율 길이

뷰포트 백분율 길이는 `<length>` 값을 {{glossary("viewport", "뷰포트")}}, 즉 문서에서 볼 수 있는 부분의 크기를 기준으로 설정합니다. 뷰포트 길이는 {{cssxref("@page")}} 선언 블록에서는 유효하지 않습니다.

- `vh`
  - : 뷰포트의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 높이 1%와 같습니다.
- `vw`
  - : 뷰포트의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비 1%와 같습니다.
- `vi` {{experimental_inline}}
  - : 초기 컨테이닝 블록의 [인라인 축](/ko/docs/Web/CSS/CSS_Logical_Properties#인라인_치수) 크기 1%와 같습니다.
- `vb` {{experimental_inline}}
  - : 초기 컨테이닝 블록의 [블록 축](/ko/docs/Web/CSS/CSS_Logical_Properties#블록_치수) 크기 1%와 같습니다.
- `vmin`
  - : `vw`와 `vh` 중 작은 것과 같습니다.
- `vmax`
  - : `vw`와 `vh` 중 큰 것과 같습니다.

#### 절대길이 단위

절대길이 단위는 프린트 등 출력 수단의 크기를 알 수 있을 때의 물리적 측정 거리를 나타냅니다. 구현은 어떤 단위를 물리적인 실제 거리에 맞춰 기준으로 삼고, 나머지 단위를 상대적으로 계산해 설정합니다. 기준 단위는 화면 등 저해상도 장치와 프린터 등 고해상도 장치에서 다릅니다.

저해상도 장치에서 `px` 단위는 물리적인 픽셀을 의미하며 나머지는 이에 상대적입니다. 따라서 `1in`은 `96px`로 정의하며 이는 `72pt`와 동일합니다. 그러나 인치(`in`), 센티미터(`cm`), 밀리미터(`mm`) 등 이렇게 정의하는 단위가 같은 이름을 가진 물리적인 측정 단위와 일치하지 않을 수 있다는 문제점이 있습니다.

고해상도 장치에서 인치(`in`), 센티미터(`cm`), 밀리미터(`mm`)가 기준이 되어 물리적 거리와 동일합니다. 그래서 px 단위도 이에 맞춰 1인치의 1/96로 정의합니다.

> **참고:** 많은 사용자가 {{glossary("user agent", "사용자 에이전트")}}의 기본 글꼴 크기를 늘려 읽기 쉽도록 설정합니다. 절대길이는 사용자 설정을 따르지 않기 때문에 접근성 문제를 유발할 수 있습니다. 따라서 `font-size`를 설정할 땐 `em`, `rem` 등 상대길이를 선택하세요.

- `px`
  - : 1 픽셀. 화면에서는 전통적으로 하나의 장치 픽셀(점)을 의미했지만, 프린터나 고해상도 화면에서는 1/96 `in`을 맞출 수 있도록 여러 개의 장치 픽셀을 의미합니다.
- `cm`
  - : 1 센티미터, `1cm` = `96px/2.54`.
- `mm`
  - : 1 밀리미터, `1mm` = 1/10 `cm`.
- `Q` {{experimental_inline}}
  - : 1/4 밀리미터, `1Q` = 1/40 `cm`.
- `in`
  - : 1 인치, `1in` = `2.54cm` = `96px`.
- `pc`
  - : 1 피카, `1pc` = `12pt` = 1/6`1in`.
- `pt`
  - : One point. `1pt` = 1/72nd of `1in`.

## 보간

애니메이션에서 `<length>` 자료형의 값은 부동소수점 실수로 간주하며 보간은 [계산값](/ko/docs/Web/CSS/computed_value)을 사용합니다. 보간 속도는 애니메이션에 연결된 [타이밍 함수](/ko/docs/Web/CSS/single-transition-timing-function)가 결정합니다.

## 예제

### 길이 단위 비교

아래 데모에서는 주어진 하나의 입력 칸에 `300px`, `50%`, `30vw` 등 `<length>` 값을 입력한 후 <kbd>Return</kbd>을 누르면 그 길이만큼의 막대를 생성합니다.

서로 다른 길이 단위를 입력하고 비교해보세요.

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label>길이:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow:
    inset 3px 3px 5px rgba(255, 255, 255, 0.5),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
}

.result {
  height: 20px;
  background-color: #999;
  box-shadow:
    inset 3px 3px 5px rgba(255, 255, 255, 0.5),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  result.innerHTML = `<code>너비: ${inputElem.value}</code>`;
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### 결과

{{EmbedLiveSample('길이_단위_비교','100%', 700)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
