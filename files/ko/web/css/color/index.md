---
title: color
slug: Web/CSS/color
---

{{CSSRef}}

**`color`** [CSS](/ko/docs/Web/API/CSS) 속성은 요소의 글씨 및 [글씨 장식](/ko/docs/Web/CSS/text-decoration)의 전경색과 {{cssxref("currentcolor")}}의 값을 설정합니다. `currentcolor`는 다른 속성에서 사용할 수 있는 간접적인 값이며, {{cssxref("border-color")}} 등 일부 속성의 기본값입니다.

{{EmbedInteractiveExample("pages/css/color.html")}}

HTML에서 색을 사용하는 법은 [CSS로 HTML 요소에 색입히기](/ko/docs/Web/HTML/Applying_color) 문서에서 정리한 내용으로 읽을 수 있습니다.

## 구문

```css
/* 키워드 값 */
color: currentcolor;

/* <named-color> 값 */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> 값 */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> 값 */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()> 값 */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* 전역 값 */
color: inherit;
color: initial;
color: unset;
```

`color` 속성은 하나의 {{cssxref("&lt;color&gt;")}} 값을 사용해 지정합니다.

값이 단일 색상이어야 함에 주의하세요. {{cssxref("&lt;gradient&gt;")}}는 사실 {{cssxref("&lt;image&gt;")}} 자료형이기 때문에 사용할 수 없습니다.

### 값

- {{cssxref("&lt;color&gt;")}}
  - : 요소의 글씨와 장식 부분의 색.

### 형식 구문

{{csssyntax}}

## 예제

아래 예제 모두 글씨를 빨갛게 만듭니다.

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: rgb(100%, 0%, 0%);
}
p {
  color: hsl(0, 100%, 50%);
}

/* 50% 투명 */
p {
  color: rgba(255, 0, 0, 0.5);
}
p {
  color: hsla(0, 100%, 50%, 0.5);
}
```

## 접근성 고려사항

낮은 시력을 가진 사용자도 페이지의 콘텐츠를 읽을 수 있도록 글자 색과 배경색의 대비를 높게 유지하는 것이 중요합니다.

색 대비율은 배경색과 투명도를 적용한 글자 색의 밝기를 비교해서 얻어낼 수 있습니다. 현재 [웹 콘텐츠 접근성 가이드라인](https://www.w3.org/WAI/standards-guidelines/wcag/)(WCAG)을 만족하려면, 텍스트 콘텐츠는 4.5:1, 제목 등 큰 텍스트는 3:1의 대비율이 필요합니다. 큰 텍스트란 18.66px 이상의 [굵은](/ko/docs/Web/CSS/font-weight) 글씨 혹은 24px 이상의 텍스트로 정의하고 있습니다.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("&lt;color&gt;")}} 자료형
- 다른 색상 관련 속성: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("color-adjust")}}
- [CSS로 HTML 요소에 색입히기](/ko/docs/Web/HTML/Applying_color)
