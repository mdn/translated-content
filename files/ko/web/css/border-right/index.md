---
title: border-right
slug: Web/CSS/border-right
---

{{CSSRef}}

**`border-right`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소의 오른쪽 테두리를 설정합니다. {{cssxref("border-right-width")}}, {{cssxref("border-right-style")}}, {{cssxref("border-right-color")}}의 값을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-right.html")}}

다른 단축 속성과 마찬가지로, `border-right`는 자신이 포함한 모든 값을 지정하며 사용자가 명시하지 않은 속성도 기본값으로 설정합니다. 즉, 아래 두 코드는 사실 동일합니다.

```css
border-right-style: dotted;
border-right: thick green;
```

```css
border-right-style: dotted;
border-right: none thick green;
```

따라서 `border-right`보다 먼저 지정한 {{cssxref("border-right-style")}}의 값은 무시됩니다. {{cssxref("border-right-style")}}의 기본값은 `none`이므로, `border-style`을 명시하지 않으면 테두리를 만들지 않습니다.

## 구문

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;
```

`border-right`은 한 개에서 세 개의 값을 사용해 지정할 수 있고, 순서는 상관하지 않습니다.

### 값

- `<br-width>`
  - : {{cssxref("border-right-width")}}.
- `<br-style>`
  - : {{cssxref("border-right-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-right-color")}}.

### 형식 구문

{{csssyntax}}

## 예제

```html
<div>오른쪽 테두리를 가진 요소입니다.</div>
```

```css
div {
  border-right: 4px dashed blue;
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
