---
title: border-bottom-color
slug: Web/CSS/Reference/Properties/border-bottom-color
original_slug: Web/CSS/border-bottom-color
---

**`border-bottom-color`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 아래쪽 테두리 색상을 지정합니다. {{cssxref("border-color")}} 또는 {{cssxref("border-bottom")}} 단축 속성으로도 지정할 수 있습니다.

{{InteractiveExample("CSS Demo: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-bottom-color: transparent;
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
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 구문

```css
/* <color> 값 */
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255, 0, 0);
border-bottom-color: hsla(100%, 50%, 25%, 0.75);
border-bottom-color: currentColor;
border-bottom-color: transparent;

/* 전역 값 */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: unset;
```

`border-bottom-color` 속성은 하나의 값을 사용해 지정합니다.

### 값

- {{cssxref("&lt;color&gt;")}}
  - : 아래쪽 테두리의 색상.

### 형식 구문

{{csssyntax}}

## 예제

### 테두리를 가진 간단한 상자

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-bottom-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### 결과

{{EmbedLiveSample('테두리를_가진_간단한_상자')}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 관련 CSS 단축 속성: {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}.
- 다른 방향 테두리의 색상 관련 CSS 단축 속성: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-left-color")}}.
- 아래쪽 테두리 관련 CSS 속성: {{cssxref("border-bottom-style")}}, {{cssxref("border-bottom-width")}}.
