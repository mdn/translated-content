---
title: max-width
slug: Web/CSS/max-width
---

{{CSSRef}}

**`max-width`** [CSS](/ko/docs/CSS) 속성은 요소의 최대 너비를 설정합니다. `max-width`는 {{cssxref("width")}} 속성의 [사용값](/ko/docs/Web/CSS/used_value)이 자신의 값보다 커지는걸 방지합니다.

{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width`가 {{cssxref("width")}}를 재설정하고, {{cssxref("min-height")}}가 `max-width`를 재설정합니다.

## 구문

```css
/* <length> 값 */
max-width: 3.5em;

/* <percentage> 값 */
max-width: 75%;

/* 키워드 값 */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* 전역 값 */
max-width: inherit;
max-width: initial;
max-width: unset;
```

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 고정 길이로 나타낸 최대 너비.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비에 대한 백분율로 나타낸 최대 너비.

#### 키워드 값

- `none`
  - : 최대 너비를 정하지 않음.
- `max-content` {{experimental_inline()}}
  - : 본질적인 선호 높이.
- `min-content` {{experimental_inline()}}
  - : 본질적인 최소 높이.
- `fill-available` {{experimental_inline()}}
  - : 컨테이닝 블록의 높이에서 가로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 `available`로 구현함을 참고하세요.)
- `fit-content` {{experimental_inline()}}
  - : `max-content`와 동일.

### 형식 구문

{{csssyntax}}

## 예제

다음 예제에서, 자식(`child`) 요소의 너비는 150픽셀과 부모(`parent`) 요소의 너비 중 더 작은 값이 됩니다.

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

{{EmbedLiveSample("basic-max-width-demo", 350, 100)}}

`fit-content` 값을 사용하여 해당 요소의 내용이 필요로 하는 너비만 차지하도록 설정할 수 있습니다.

```html
<div id="parent">
  <div id="child">Child Text</div>
</div>
```

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: -moz-fit-content;
  max-width: -webkit-fit-content;
}
```

{{EmbedLiveSample("fit-content-demo", 400, 100)}}

## 접근성 고려사항

페이지의 확대 또는 글씨 크기를 키운 후에도 `max-width`를 설정한 요소의 내용이 잘리거나, 다른 요소를 가리지 않도록 주의하세요.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("box-sizing")}}, {{cssxref("width")}}, {{ Cssxref("min-width") }}
