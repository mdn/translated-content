---
title: max-height
slug: Web/CSS/max-height
---

{{CSSRef}}

**`max-height`** [CSS](/ko/docs/CSS) 속성은 요소의 최대 높이를 설정합니다. `max-height`는 {{cssxref("height")}} 속성의 [사용값](/ko/docs/Web/CSS/used_value)이 자신의 값보다 커지는걸 방지합니다.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height`가 {{cssxref("height")}}를 재설정하고, {{cssxref("min-height")}}가 `max-height`를 재설정합니다.

## 구문

```css
/* <length> 값 */
max-height: 3.5em;

/* <percentage> 값 */
max-height: 75%;

/* 키워드 값 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* 전역 값 */
max-height: inherit;
max-height: initial;
max-height: unset;
```

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 고정 길이로 나타낸 최대 높이.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 높이에 대한 백분율로 나타낸 최대 높이.

#### 키워드 값

- `none`
  - : 최대 높이를 정하지 않음.
- `max-content` {{experimental_inline()}}
  - : 본질적인 선호 높이.
- `min-content` {{experimental_inline()}}
  - : 본질적인 최소 높이.
- `fill-available` {{experimental_inline()}}
  - : 컨테이닝 블록의 높이에서 세로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 `available`로 구현함을 참고하세요.)
- `fit-content` {{experimental_inline()}}
  - : `max-content`와 동일.

### 형식 구문

{{csssyntax}}

## 예제

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## 접근성 참고사항

페이지의 확대 또는 글씨 크기를 키운 후에도 `max-height`를 설정한 요소의 내용이 잘리거나, 다른 요소를 가리지 않도록 주의하세요.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("height")}}, {{cssxref("min-height")}}
