---
title: invert()
slug: Web/CSS/filter-function/invert
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

**`invert()`** [CSS](/ko/docs/Web/CSS) [함수](/ko/docs/Web/CSS/CSS_Functions)는 주어진 이미지에 색상 샘플들을 반전해줍니다. {{cssxref("&lt;filter-function&gt;")}}을 반환 값으로 가집니다.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## 구문

```css
invert(amount)
```

### 매개변수

- `amount`
  - : {{cssxref("&lt;number&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}를 지정한 변환할 양. `100%`는 완전하게 반전시켜주며, 값을 `0%`로 지정하면 입력값이 변경되지 않습니다. `0%` 과 `100%`의 사이의 값은 효과의 비율입니다. [보간](/ko/docs/Glossary/Interpolation)의 초기값은 `0`입니다.

## 예제

### invert()를 위한 정확한 값의 예시들

```css
invert(0)     /* 변화 없음 */
invert(.6)    /* 60% 반전 */
invert(100%)  /* 완전히 반전됨 */
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

{{cssxref("filter")}}와 {{cssxref("backdrop-filter")}} 프로퍼티 값에 사용할 수 있는 다른 {{cssxref("&lt;filter-function&gt;")}}들:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
