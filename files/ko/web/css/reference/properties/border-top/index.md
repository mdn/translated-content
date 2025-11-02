---
title: border-top
slug: Web/CSS/Reference/Properties/border-top
original_slug: Web/CSS/border-top
---

**`border-top`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)은 요소의 위쪽 테두리를 설정합니다. {{cssxref("border-top-width")}}, {{cssxref("border-top-style")}}, {{cssxref("border-top-color")}}의 값을 지정합니다.

{{InteractiveExample("CSS Demo: border-top")}}

```css interactive-example-choice
border-top: solid;
```

```css interactive-example-choice
border-top: dashed red;
```

```css interactive-example-choice
border-top: 1rem solid;
```

```css interactive-example-choice
border-top: thick double #32a1ce;
```

```css interactive-example-choice
border-top: 4mm ridge rgba(211, 220, 50, 0.6);
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

다른 단축 속성과 마찬가지로, `border-top`는 자신이 포함한 모든 값을 지정하며 사용자가 명시하지 않은 속성도 기본값으로 설정합니다. 즉, 아래 두 코드는 사실 동일합니다.

```css
border-top-style: dotted;
border-top: thick green;
```

```css
border-top-style: dotted;
border-top: none thick green;
```

따라서 `border-top`보다 먼저 지정한 {{cssxref("border-top-style")}}의 값은 무시됩니다. {{cssxref("border-top-style")}}의 기본값은 `none`이므로, `border-style`을 명시하지 않으면 테두리를 만들지 않습니다.

## 구문

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;
```

`border-top`은 한 개에서 세 개의 값을 사용해 지정할 수 있고, 순서는 상관하지 않습니다.

### 값

- `<br-width>`
  - : {{cssxref("border-top-width")}}.
- `<br-style>`
  - : {{cssxref("border-top-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-top-color")}}.

### 형식 구문

{{csssyntax}}

## 예제

```html
<div>위쪽 테두리를 가진 요소입니다.</div>
```

```css
div {
  border-top: 4px dashed blue;
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
