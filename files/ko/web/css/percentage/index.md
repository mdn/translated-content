---
title: <percentage>
slug: Web/CSS/percentage
---

{{CSSRef}}

**`<percentage>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_Types)은 백분율 값을 나타냅니다. 보통 부모 객체와의 상대적 크기를 지정할 때 사용합니다. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("font-size")}} 처럼 다양한 속성에서 백분율을 쓸 수 있습니다.

> **참고:** 계산된 값만 상속받을 수 있습니다. 따라서 부모 속성이 백분율 값을 사용하더라도 전달되는 값은 실제값(예컨대 너비의 {{cssxref("&lt;length&gt;")}} 값은 픽셀)이며 백분율 값은 접근할 수 없습니다.

## 구문

`<percentage>` 자료형은 {{cssxref("&lt;number&gt;")}}와 그 뒤의 백분율 기호(`%`)로 표기합니다. 선택적으로 하나의 `+` 또는 `-` 기호로 부호를 표기할 수 있지만, 음의 값은 어떤 속성에서도 유효하지 않습니다. 다른 CSS 단위와 마찬가지로 숫자와 기호 사이에 공백은 없습니다.

## 보간

애니메이션에서 `<percentage>` 자료형의 값은 유동소수점 실수를 사용해 보간됩니다. 보간의 속도는 애니메이션과 연결된 [타이밍 함수](/ko/docs/Web/CSS/single-transition-timing-function)가 결정합니다.

## 예제

### `width`와 `margin-left`

```html
<div style="background-color:blue;">
  <div style="width:50%; margin-left:20%; background-color:lime;">
    width: 50%, margin-left: 20%
  </div>
  <div style="width:30%; margin-left:60%; background-color:pink;">
    width: 30%, margin-left: 60%
  </div>
</div>
```

{{EmbedLiveSample('width와_margin-left', '600', 140)}}

### `font-size`

```html
<div style="font-size:18px;">
  <p>원본 텍스트 (18px)</p>
  <p><span style="font-size:50%;">50%</span></p>
  <p><span style="font-size:200%;">200%</span></p>
</div>
```

{{EmbedLiveSample('font-size', 'auto', 160)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
