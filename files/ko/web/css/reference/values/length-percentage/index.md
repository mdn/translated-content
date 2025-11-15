---
title: <length-percentage>
slug: Web/CSS/Reference/Values/length-percentage
original_slug: Web/CSS/length-percentage
---

**`<length-percentage>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_values_and_units/CSS_data_types)은 {{Cssxref("&lt;length&gt;")}} 또는 {{Cssxref("&lt;percentage&gt;")}}인 값을 나타냅니다.

## 구문

{{Cssxref("&lt;length&gt;")}}와 {{Cssxref("&lt;percentage&gt;")}} 문서에서 각 자료형의 구문을 살펴보세요.

## `calc()`에서 사용하기

`<length-percentage>`를 허용한다면 백분율이 길이로 이행한다는 뜻이므로 {{cssxref("calc", "calc()")}}와 함께 사용할 수 있습니다. 따라서 아래의 {{cssxref("width")}} 값 모두 유효합니다.

```css
width: 200px
width: 20%
width: calc(100% - 200px)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
