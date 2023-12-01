---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`transform`** 속성으로 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다. `transform`은 CSS [시각적 서식 모델](/ko/docs/Web/Guide/CSS/Visual_formatting_model)의 좌표 공간을 변경합니다.

{{EmbedInteractiveExample("pages/css/transform.html")}}

`none`이 아닌 값을 지정하면 새로운 [쌓임 맥락](/ko/docs/Web/CSS/Understanding_z-index/The_stacking_context)을 생성합니다. 이 경우, {{cssxref("position")}}이 `fixed`거나 `absolute`인 요소의 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block)으로서 작용합니다.

> **경고:** 변형 가능한 요소만 `transform`할 수 있습니다. 즉, CSS 박스 모델이 레이아웃을 결정하는 모든 요소 중 [비대체 인라인 박스](/ko/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [표 열 박스](/ko/docs/Web/HTML/Element/col), [표 열 그룹 박스](/ko/docs/Web/HTML/Element/colgroup)를 제외한 요소에만 적용할 수 있습니다.

## 구문

```css
/* 키워드 값 */
transform: none;

/* 함수 값 */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* 다중 함수 값 */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* 전역 값 */
transform: inherit;
transform: initial;
transform: unset;
```

`transform` 속성은 키워드 [`none`](#none) 또는 하나 이상의 [`<transform-function>`](#transform-function) 값을 사용해 지정할 수 있습니다.

### 값

- {{cssxref("&lt;transform-function&gt;")}}
  - : 요소에 적용할 하나 이상의 [CSS 변형 함수](/ko/docs/Web/CSS/transform-function). 변형 함수는 왼쪽에서 오른쪽으로 곱해집니다. 즉, 요소에 변형을 오른쪽부터 왼쪽으로 하나씩 순서대로 적용하는 것과 같습니다.
- `none`
  - : 아무런 변형도 적용하지 않음.

### 형식 구문

{{csssyntax}}

{{cssxref("transform-function/perspective", "perspective()")}}가 변형 함수의 일부라면 항상 제일 앞에 위치해야 합니다.

## 예제

### HTML

```html
<div>Transformed element</div>
```

### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

### 결과

{{EmbedLiveSample("예제", "400", "160")}}

[CSS 변형 사용하기](/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)와 {{cssxref("&lt;transform-function&gt;")}} 문서를 방문해 더 많은 예제를 찾아보세요.

## 접근성 고려사항

크기 변경/확대/축소 애니메이션은 흔한 편두통 유발 요인이므로 접근성에 좋지 않습니다. 그러나 꼭 넣어야 한다면 되도록 사이트 전체의 애니메이션을 켜거나 끌 수 있는 방법을 제공하는걸 고려해주세요.

{{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} 미디어 기능을 사용할 수도 있습니다. [미디어 쿼리](/ko/docs/Web/CSS/Media_Queries)와 함께 사용하면, 사용자가 시스템 설정에서 애니메이션을 줄였는지 알아내고, 애니메이션을 비활성화할 수 있습니다.

자세한 내용은 다음 링크에서 확인할 수 있습니다.

- [MDN Understanding WCAG, Guideline 2.3 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 변형 사용하기](/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- 변형 함수의 설명을 담은 {{cssxref("&lt;transform-function&gt;")}} 자료형 문서.
- CSS 변형 함수의 시각화가 가능한 온라인 도구: [CSS Transform Playground](https://css-transform.moro.es/)
