---
title: 전체 선택자
slug: Web/CSS/Universal_selectors
---

{{CSSRef("Selectors")}}

[CSS](/ko/docs/Web/CSS) **전체 선택자**(`*`)는 모든 형태의 모든 요소를 선택합니다.

```css
/* Selects all elements */
* {
  color: green;
}
```

CSS 3부터는 별표를 {{cssxref("CSS_Namespaces", "네임스페이스")}}와 함께 사용할 수 있습니다.

- `ns|*` - 네임스페이스 ns 안의 모든 요소 선택
- `*|*` - 모든 요소 선택
- `|*` - 네임스페이스 없는 모든 요소 선택

## 구문

```
* { style properties }
```

단순 선택자에서 별표는 선택사항입니다. 즉 `*.warning`과 `.warning`은 같습니다.

## 예제

### CSS

```css
* [lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

/* automatically clear the next sibling after a floating element */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
