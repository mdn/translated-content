---
title: contrast()
slug: Web/CSS/filter-function/contrast
---

{{cssref}}

**`contrast()`** [CSS](/ko/docs/Web/CSS) 함수는 주어진 이미지의 대비를 조절합니다. 반환 값은 {{cssxref("&lt;filter-function&gt;")}}입니다.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## 구문

```
contrast(amount)
```

### 매개변수

- `amount`
  - : {{cssxref("&lt;number&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}로 지정한, 결과물의 대비. `100%` 미만의 값은 이미지의 대비를 낮추고, `100%`를 초과하는 값은 높입니다. `0%`는 이미지를 완전히 회색으로 바꾸고 `100%`는 입력 이미지를 그대로 반환합니다. 보간 시, 누락 값은 `1`입니다.

## 예제

```css
contrast(0)     /* 완전히 회색 */
contrast(65%)   /* 대비 65% */
contrast(1)     /* 변화 없음 */
contrast(200%)  /* 대비 두 배 */
```

## 같이 보기

- {{cssxref("&lt;filter-function&gt;")}}
