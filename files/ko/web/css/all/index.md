---
title: all
slug: Web/CSS/all
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`all`** [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소의 {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, [CSS 사용자 지정 속성](/ko/docs/Web/CSS/Using_CSS_custom_properties)을 제외한 모든 속성을 초기화합니다. 초깃값, 상속값, 아니면 다른 스타일시트 출처의 값으로 설정할 수 있습니다.

{{EmbedInteractiveExample("pages/css/all.html")}}

## 구문

```css
/* 전역 값 */
all: initial;
all: inherit;
all: unset;

/* CSS Cascading and Inheritance Level 4 */
all: revert;
```

`all` 속성은 CSS 전역 키워드 값 중 하나를 사용해 지정합니다. 그러나 어느것도 {{cssxref("unicode-bidi")}}와 {{cssxref("direction")}} 속성에는 영향을 주지 않는 점을 주의하세요.

### 값

- {{cssxref("initial")}}
  - : 요소의 모든 속성을 [초깃값](/ko/docs/Web/CSS/initial_value)으로 변경합니다.
- {{cssxref("inherit")}}
  - : 요소의 모든 속성을 [상속값](/ko/docs/Web/CSS/inheritance)으로 변경합니다.
- {{cssxref("unset")}}
  - : 요소의 모든 속성을, 속성이 값을 상속하는 경우 상속값으로, 아니면 초깃값으로 변경합니다.
- {{cssxref("revert")}}

  - : 선언이 속한 스타일시트의 출처에 따라 다른 동작을 합니다.

    - [사용자 에이전트 출처](/ko/docs/Web/CSS/Cascade#User-agent_stylesheets)
      - : `unset`과 동일합니다.
    - [사용자 출처](/ko/docs/Web/CSS/Cascade#User_stylesheets)
      - [: 종속](/ko/docs/Web/CSS/Cascade)을 사용자 에이전트 단계까지 되돌려서, [지정값](/ko/docs/Web/CSS/specified_value)이 마치 저작자와 사용자 단계의 규칙이 없었던 것처럼 계산되도록 합니다.
    - [저작자 출처](/ko/docs/Web/CSS/Cascade#Author_stylesheets)
      - [: 종속](/ko/docs/Web/CSS/Cascade)을 사용자 에이전트 단계까지 되돌려서, [지정값](/ko/docs/Web/CSS/specified_value)이 마치 저작자 단계의 규칙이 없었던 것처럼 계산되도록 합니다. `revert`만 고려했을 때, 저작자 출처는 재정의(Override) 및 애니메이션(Animation) 출처를 포함합니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### 결과

#### `all` 속성 없음

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("ex0", "200", "125")}}

The {{HTMLElement("blockquote")}}가 브라우저 기본 스타일과 함께, 지정한 배경 및 텍스트 색상을 사용합니다. 또한 블록 요소로 동작하여 뒤의 텍스트가 아래에 위치합니다.

#### `all:unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: unset;
}
```

{{EmbedLiveSample("ex1", "200", "125")}}

{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 이제 인라인 요소(초깃값)이며, {{cssxref("background-color")}}가 `transparent`(초깃값)입니다. 그러나 {{cssxref("font-size")}}는 여전히 `small`(상속값)이고 {{cssxref("color")}}도 `blue`(상속값)입니다.

#### `all:initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: initial;
}
```

{{EmbedLiveSample("ex2", "200", "125")}}

{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 이제 인라인 요소(초깃값)이며, {{cssxref("background-color")}}가 `transparent`(초깃값)이고, {{cssxref("font-size")}}는 `normal`(초깃값), {{cssxref("color")}}는 `black`(초깃값)입니다.

#### `all:inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: inherit;
}
```

{{EmbedLiveSample("ex3", "200", "125")}}

{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 블록 요소(부모 {{HTMLElement("body")}}에서 상속)이고, {{cssxref("background-color")}}은 `#F0F0F0`(상속값), {{cssxref("font-size")}}는 `small`(상속값), {{cssxref("color")}}는 `blue`(상속값)입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

CSS 전역 키워드 값: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}
