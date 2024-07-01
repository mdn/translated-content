---
title: outline
slug: Web/CSS/outline
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`outline`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 모든 외곽선 속성을 한꺼번에 지정합니다.

{{EmbedInteractiveExample("pages/css/outline.html")}}

## 구성 속성

`outline`은 단축 속성으로서 다음의 하위 속성을 포함합니다.

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}

## 구문

```css
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* 전역 값 */
outline: inherit;
outline: initial;
outline: unset;
```

`outline` 속성은 아래의 값 중 한 개에서 세 개를 사용해 지정할 수 있으며 순서는 상관하지 않습니다.

> **참고:** 많은 요소의 외곽선은 스타일을 지정하지 않을 경우 보이지 않습니다. 스타일 기본값이 `none`이기 때문인데, 주목할만한 예외는 {{htmlelement("input")}} 요소로 브라우저의 기본 스타일이 적용됩니다.

### 값

- `<'outline-color'>`
  - : 외곽선의 색을 설정합니다. 누락 시 기본값은 `currentcolor`입니다. {{cssxref("outline-color")}}를 참고하세요.
- `<'outline-style'>`
  - : 외곽선의 스타일을 설정합니다. 누락 시 기본값은 `none`입니다. {{cssxref("outline-style")}}을 참고하세요.
- `<'outline-width'>`
  - : 외곽선의 두께를 설정합니다. 누락 시 기본값은 `medium`입니다. {{cssxref("outline-width")}}를 참고하세요.

## 설명

[테두리](/ko/docs/Web/CSS/border)와 외곽선은 매우 유사하지만, 다음의 두 가지 차이점이 존재합니다.

- 외곽선은 요소 콘텐츠의 밖에 그려지며 절대 공간을 차지하지 않습니다.
- 명세에 따르면 외곽선은 직사각형일 필요가 없습니다. 보통 직사각형으로 그리기는 합니다.

다른 모든 단축 속성과 마찬가지로, 누락한 하위 속성의 값은 [초깃값](/ko/docs/Web/CSS/initial_value)으로 설정됩니다.

## 접근성 고려사항

`outline`에 `0` 또는 `none` 값을 지정하면 브라우저의 기본 포커스 스타일이 사라집니다. 만약 어떤 요소가 상호작용 가능하다면 반드시 시각으로 포커스 여부를 나타낼 수 있어야 합니다. 기본 포커스 스타일을 제거한 경우 다른 뚜렷한 대안을 제공하세요.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 외곽선으로 포커스 스타일 설정

#### HTML

```html
<a href="#">This link has a special focus style.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### 결과

{{EmbedLiveSample("외곽선으로_포커스_스타일_설정", "100%", 60)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
