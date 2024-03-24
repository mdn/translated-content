---
title: border-bottom
slug: Web/CSS/border-bottom
---

{{CSSRef}}

**`border-bottom`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소의 아래쪽 테두리를 설정합니다. {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-bottom-color")}}의 값을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

다른 단축 속성과 마찬가지로, `border-bottom`는 자신이 포함한 모든 값을 지정하며 사용자가 명시하지 않은 속성도 기본값으로 설정합니다. 즉, 아래 두 코드는 사실 동일합니다.

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

따라서 `border-bottom`보다 먼저 지정한 {{cssxref("border-bottom-style")}}의 값은 무시됩니다. {{cssxref("border-bottom-style")}}의 기본값은 `none`이므로, `border-style`을 명시하지 않으면 테두리를 만들지 않습니다.

## 구문

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed green;
```

`border-bottom`은 한 개에서 세 개의 값을 사용해 지정할 수 있고, 순서는 상관하지 않습니다.

### 값

- `<br-width>`
  - : {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : {{cssxref("border-bottom-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-bottom-color")}}.

### 형식 구문

{{csssyntax}}

## 예제

```html
<div>아래쪽 테두리를 가진 요소입니다.</div>
```

```css
div {
  border-bottom: 4px dashed blue;
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
