---
title: 지정값
slug: Web/CSS/specified_value
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) 속성의 **지정값**은 세 가지 방법 중 하나로 설정됩니다.

1. 문서의 스타일시트가 속성값을 지정했다면 그러면 그 값이 사용됩니다. 예를 들어, {{cssxref("color")}} 속성이 `green` 으로 설정된 경우 대응하는 요소(element)의 텍스트 색은 녹색이 됩니다.
2. 문서의 스타일시트가 값을 지정하지 않은 경우 부모 요소로부터 상속됩니다(가능하다면). 예를 들어, {{HTMLElement("div")}} 내부에 단락({{HTMLElement("p")}})이 있고 {{HTMLElement("div")}}의 CSS `font` 속성값이 "Arial", {{HTMLElement("p")}}가 정의된 `font` 속성이 없다면 Arial font가 상속됩니다.
3. 위 중 어느 것도 이용할 수 없는 경우, CSS 스펙에 지정된 대로 요소의 초기값이 적용됩니다.

## 예제

### HTML

```html
<p>My specified color is given explicitly in the CSS.</p>

<div>
  The specified values of all my properties default to their initial values,
  because none of them are given in the CSS.
</div>

<div class="fun">
  <p>
    The specified value of my font family is not given explicitly in the CSS, so
    it is inherited from my parent. However, the border is not an inheriting
    property.
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### 결과

{{EmbedLiveSample("예제", 500, 220)}}

## 명세

{{Specifications}}
