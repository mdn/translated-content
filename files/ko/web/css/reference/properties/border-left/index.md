---
title: border-left
slug: Web/CSS/Reference/Properties/border-left
original_slug: Web/CSS/border-left
---

**`border-left`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)은 요소의 왼쪽 테두리를 설정합니다. {{cssxref("border-left-width")}}, {{cssxref("border-left-style")}}, {{cssxref("border-left-color")}}의 값을 지정합니다.

{{InteractiveExample("CSS Demo: border-left")}}

```css interactive-example-choice
border-left: solid;
```

```css interactive-example-choice
border-left: dashed red;
```

```css interactive-example-choice
border-left: 1rem solid;
```

```css interactive-example-choice
border-left: thick double #32a1ce;
```

```css interactive-example-choice
border-left: 4mm ridge rgba(211, 220, 50, 0.6);
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

다른 단축 속성과 마찬가지로, `border-left`는 자신이 포함한 모든 값을 지정하며 사용자가 명시하지 않은 속성도 기본값으로 설정합니다. 즉, 아래 두 코드는 사실 동일합니다.

```css
border-left-style: dotted;
border-left: thick green;
```

```css
border-left-style: dotted;
border-left: none thick green;
```

따라서 `border-left`보다 먼저 지정한 {{cssxref("border-left-style")}}의 값은 무시됩니다. {{cssxref("border-left-style")}}의 기본값은 `none`이므로, `border-style`을 명시하지 않으면 테두리를 만들지 않습니다.

## 구문

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

`border-left`은 한 개에서 세 개의 값을 사용해 지정할 수 있고, 순서는 상관하지 않습니다.

### 값

- `<br-width>`
  - : {{cssxref("border-left-width")}}.
- `<br-style>`
  - : {{cssxref("border-left-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-left-color")}}.

### 형식 구문

{{csssyntax}}

## 예제

```html
<div>왼쪽 테두리를 가진 요소입니다.</div>
```

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}
