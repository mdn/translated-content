---
title: border
slug: Web/CSS/Reference/Properties/border
original_slug: Web/CSS/border
---

[CSS](/ko/docs/Web/CSS) **`border`** [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)은 요소의 테두리를 설정합니다. {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}의 값을 설정합니다.

{{InteractiveExample("CSS Demo: border")}}

```css interactive-example-choice
border: solid;
```

```css interactive-example-choice
border: dashed red;
```

```css interactive-example-choice
border: 1rem solid;
```

```css interactive-example-choice
border: thick double #32a1ce;
```

```css interactive-example-choice
border: 4mm ridge rgba(211, 220, 50, 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 구성 속성

`border`는 단축 속성으로서 다음의 하위 속성을 포함합니다.

- {{cssxref("border-color")}}
- {{cssxref("border-style")}}
- {{cssxref("border-width")}}

## 구문

```css
/* 스타일 */
border: solid;

/* 너비 | 스타일 */
border: 2px dotted;

/* 스타일 | 색 */
border: outset #f33;

/* 너비 | 스타일 | 색 */
border: medium dashed green;

/* 전역 값 */
border: inherit;
border: initial;
border: unset;
```

`border` 속성은 다음의 값 중 한 개에서 세 개를 선택해서 지정할 수 있습니다. 순서는 영향을 주지 않습니다.

> [!NOTE]
> 스타일을 지정하지 않으면 기본값인 `none`이 사용돼 테두리가 보이지 않습니다.

### 값

- `<line-width>`
  - : 테두리의 굵기로 기본값은 `medium`입니다. {{Cssxref("border-width")}}를 참고하세요.
- `<line-style>`
  - : 테두리의 스타일로 기본값은 `none`입니다. {{Cssxref("border-style")}}을 참고하세요.
- {{cssxref("&lt;color&gt;")}}
  - : 테두리의 색상으로 기본값은 `currentcolor`입니다. {{Cssxref("border-color")}}를 참고하세요.

## 설명

다른 단축 속성과 마찬가지로, 생략한 속성은 [초깃값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)으로 설정됩니다. 한 가지 중요한 점은, `border`를 사용해서는 {{cssxref("border-image")}}에 원하는 값을 지정할 수는 없고 대신 초깃값인 `none`이 자동으로 설정됩니다.

`border` 단축 속성은 요소의 테두리를 모두 동일하게 설정하고 싶을 때 특히 유용합니다. 그러나 서로의 테두리를 다르게 하고 싶다면 네 면을 각각 설정할 수 있는 본디 속성 {{Cssxref("border-width")}}, {{Cssxref("border-style")}},{{Cssxref("border-color")}}를 사용하면 됩니다. 아니면 한 면의 테두리를 절대 기준({{Cssxref("border-top")}} 등)이나 상대 기준({{Cssxref("border-block-start")}} 등) 속성을 사용해서 따로 정해줄 수도 있습니다.

### 테두리 vs외곽선

테두리와 [외곽선](/ko/docs/Web/CSS/Reference/Properties/outline)은 매우 유사하지만, 다음의 두 가지 차이점이 존재합니다.

- 외곽선은 요소 콘텐츠의 밖에 그려지며 절대 공간을 차지하지 않습니다.
- 명세에 따르면 외곽선은 직사각형일 필요가 없습니다. 보통 직사각형으로 그리기는 합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 튀어나오는 듯한 분홍색 테두리 추가하기

#### HTML

```html
<div>테두리와 외곽선에 더해 그림자까지, 정말 멋지지 않나요?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### 결과

{{EmbedLiveSample('튀어나오는_듯한_분홍색_테두리_추가하기')}}

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- [배경 및 테두리](/ko/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS 배우기: 배경 및 테두리](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
