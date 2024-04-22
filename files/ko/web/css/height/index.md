---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

**`height`** CSS 속성은 요소의 높이를 지정합니다. 기본값은 콘텐츠 영역의 높이지만, {{cssxref("box-sizing")}}이 `border-box`라면 테두리 영역의 높이를 설정합니다.

{{EmbedInteractiveExample("pages/css/height.html")}}

{{cssxref("min-height")}}와 {{cssxref("max-height")}} 속성은 `height`를 덮어씁니다.

## 구문

```css
/* 키워드 */
height: auto;

/* <length> */
height: 120px;
height: 10em;

/* <percentage> */
height: 75%;

/* 전역 값 */
height: inherit;
height: initial;
height: unset;
```

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 높이의 절대값.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 높이의 백분율.
- `border-box` {{experimental_inline}}
  - : 앞선 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}가 요소의 보더 박스에 적용.
- `content-box` {{experimental_inline}}
  - : 앞선 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}가 요소의 콘텐츠 박스에 적용.
- `auto`
  - : 브라우저가 요소의 높이를 계산하고 선택.
- `fill` {{experimental_inline}}
  - : 글쓰기 방향에 따라 `fill-available` 인라인 크기 또는 `fill-available` 블록 크기를 사용.
- `max-content` {{experimental_inline}}
  - : 본질적인 선호 높이.
- `min-content` {{experimental_inline}}
  - : 본질적인 최소 높이.
- `available` {{experimental_inline}}
  - : 컨테이닝 블록 높이에서 수평 여백, 테두리, 패딩을 제외한 값.
- `fit-content` {{experimental_inline}}

  - : 다음 중 더 큰 값.

    - 본질적인 최소 높이
    - 본질적인 선호 높이와 사용 가능한 높이 중 작은 값

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div id="taller">제 키는 50픽셀입니다.</div>
<div id="shorter">제 키는 25픽셀입니다.</div>
<div id="parent">
  <div id="child">제 키는 부모의 절반입니다.</div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

### 결과

{{EmbedLiveSample('예제', 'auto', 240)}}

## 접근성 고려사항

페이지를 확대하거나 글꼴 크기를 늘렸을 때 height 속성을 지정한 요소가 잘리거나 다른 내용을 가리지 않도록 확인하세요.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [box model](/ko/docs/CSS/box_model), {{cssxref("width")}}, {{cssxref("box-sizing")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}
