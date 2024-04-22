---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

[CSS](/en/CSS) **`background-color`** 속성은 요소의 배경 색을 지정합니다.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## 구문

```css
/* 키워드 값 */
background-color: red;
background-color: indigo;

/* 16진수 값 */
background-color: #bbff00; /* 완전 불투명 */
background-color: #bf0; /* 완전 불투명 단축 */
background-color: #11ffee00; /* 완전 투명 */
background-color: #1fe0; /* 완전 투명 단축 */
background-color: #11ffeeff; /* 완전 불투명 */
background-color: #1fef; /* 완전 불투명 단축 */

/* RGB 값 */
background-color: rgb(255, 255, 128); /* 완전 불투명 */
background-color: rgba(117, 190, 218, 0.5); /* 50% 불투명도 */

/* HSL 값 */
background-color: hsl(50, 33%, 25%); /* 완전 불투명 */
background-color: hsla(50, 33%, 25%, 0.75); /* 75% 불투명도 */

/* 특별 키워드 값 */
background-color: currentcolor;
background-color: transparent;

/* 전역 값 */
background-color: inherit;
background-color: initial;
background-color: unset;
```

`background-color` 속성은 하나의 {{cssxref("&lt;color&gt;")}} 값을 사용해 지정합니다.

### 값

- {{cssxref("color")}}
  - : 요소의 배경으로 사용할 단일 색상입니다. {{cssxref("background-image")}} 뒤에 렌더링 되므로, 이미지가 투명한 부분을 가지고 있으면 그 곳을 통해 볼 수 있습니다.

## 접근성 고려사항

낮은 시력을 가진 사용자도 페이지의 콘텐츠를 읽을 수 있도록 글자 색과 배경색의 대비를 높게 유지하는 것이 중요합니다.

색상 대비율은 배경색과 투명도를 적용한 글자 색의 밝기를 비교해서 얻어낼 수 있습니다. 현재 [웹 콘텐츠 접근성 가이드라인](https://www.w3.org/WAI/standards-guidelines/wcag/)(WCAG)을 만족하려면, 텍스트 콘텐츠는 4.5:1, 제목 등 큰 텍스트는 3:1의 대비율이 필요합니다. 큰 텍스트란 18.66px 이상의 [굵은](/ko/docs/Web/CSS/font-weight) 글씨 혹은 24px 이상의 텍스트로 정의하고 있습니다.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### 결과

{{EmbedLiveSample("예제","200","150")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [한 번에 여러 배경 사용하기](/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- {{cssxref("&lt;color&gt;")}} 자료형
- 색상 관련 다른 속성: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [CSS로 HTML 요소에 색입히기](/ko/docs/Web/HTML/Applying_color)
