---
title: 사용값
slug: Web/CSS/used_value
---

{{cssref}}

[CSS](/ko/docs/Web/CSS) 속성의 **사용값**은 [계산값](/ko/docs/Web/CSS/computed_value)에 모든 계산을 수행한 후의 결과 값입니다.

모든 CSS 속성은 {{glossary("user agent", "사용자 에이전트")}}가 계산을 끝낸 후 사용값을 가집니다. 크기({{cssxref("width")}}, {{cssxref("line-height")}} 등)는 픽셀 단위로 정해집니다. 단축 속성({{cssxref("background")}} 등)의 값은 그 구성요소({{cssxref("background-color")}}, {{cssxref("background-size")}} 등)와 {{cssxref("position")}}, {{cssxref("float")}}이 가질 값과 일치합니다.

> **참고:** {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API는 [결정값](/ko/docs/Web/CSS/resolved_value)을 반환합니다. 결정값은 속성에 따라 [계산값](/ko/docs/Web/CSS/computed_value)일 수도, 사용값일 수도 있습니다.

## 예제

다음 예제는 요소 세 개 `width` 속성의 사용값을 계산하고 보여줍니다. (창 크기 조절 시 업데이트)

### HTML

```html
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector(".show-used-width");
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### 결과

{{ EmbedLiveSample('예제', '80%', 372) }}

## 계산값과의 차이

CSS 2.0은 속성의 계산에서 마지막 단계로 [계산값](/ko/docs/Web/CSS/computed_value)만 정의했고, 그 다음 CSS 2.1에서 사용값의 분명한 정의를 도입했습니다. 덕분에, 부모의 너비/높이 계산값이 백분율이더라도 상속받을 수 있게 됐습니다. 레이아웃에 의존하지 않는 CSS 속성(가령, `display`, `font-size`, `line-height`)의 경우, 계산값과 사용값은 같습니다. 다음은 레이아웃에 의존하는 CSS 2.1 속성으로, 계산값과 사용값이 다릅니다. ([CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)에서 가져옴)

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## 명세

{{Specifications}}

## 같이 보기

- {{domxref("window.getComputedStyle")}}
- CSS 주요 개념

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
