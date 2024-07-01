---
title: blur()
slug: Web/CSS/filter-function/blur
---

{{cssref}}

**`blur()`** [CSS](/ko/docs/Web/CSS) 함수는 주어진 이미지에 [가우시안 블러](https://en.wikipedia.org/wiki/Gaussian_blur)를 적용합니다. 반환 값은 {{cssxref("&lt;filter-function&gt;")}}입니다.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## 구문

```
blur(radius)
```

### 매개변수

- `radius`
  - : {{cssxref("&lt;length&gt;")}}로 지정한 블러 효과의 지름. 가우시안 함수의 표준 편차, 즉 화면에 보이는 픽셀의 색상이 어느 범위까지 섞일지를 지정합니다. 따라서 큰 값은 이미지를 더 흐리게 만듭니다. `0`은 주어진 입력 결과를 그대로 반환합니다. 보간 시, 누락 값은 0입니다.

## 예제

```css
blur(0)        /* 변화 없음 */
blur(8px)      /* 8px 블러 */
blur(1.17rem)  /* 1.17rem 블러 */
```

## 같이 보기

- {{cssxref("&lt;filter-function&gt;")}}
