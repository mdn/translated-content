---
title: brightness()
slug: Web/CSS/filter-function/brightness
---

{{cssref}}

**`brightness()`** [CSS](/ko/docs/Web/CSS) 함수는 주어진 이미지에 선형 계수를 적용해 더 밝거나 어둡게 만듭니다. 반환 값은 {{cssxref("&lt;filter-function&gt;")}}입니다.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## 구문

```
brightness(amount)
```

### 매개변수

- `amount`
  - : {{cssxref("&lt;number&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}로 지정한, 결과물의 밝기. `100%` 미만의 값은 이미지를 어둡게 만들고, `100%`를 초과하는 값은 밝게 합니다. `0%`는 이미지를 완전한 검은색으로 바꾸고 `100%`는 주어진 입력 이미지를 그대로 반환합니다. 보간 시, 누락 값은 `1`입니다.

## 예제

```css
brightness(0%)   /* 완전한 검정 */
brightness(0.4)  /* 40% 밝기 */
brightness(1)    /* 변화 없음 */
brightness(200%) /* 두 배 밝기 */
```

## 같이 보기

- {{cssxref("&lt;filter-function&gt;")}}
