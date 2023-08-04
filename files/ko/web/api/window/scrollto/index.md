---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## 요약

문서의 지정된 위치로 스크롤합니다.

## 구문

```js
window.scrollTo(x_좌표, y_좌표);
```

### 매개변수

- `x_좌표`는 문서의 왼쪽 상단부터 시작하는 픽셀 단위의 가로축입니다.
- `y_좌표`는 문서의 왼쪽 상단부터 시작하는 픽셀 단위의 세로축입니다.

\- 또는 -

- `options`
  - : 다음 매개변수가 포함된 딕셔너리
    - `top`
      - : 창 또는 요소를 스크롤할 Y축을 따라 픽셀 수를 지정합니다.
    - `left`
      - : 창 또는 요소를 스크롤할 X축을 따라 픽셀 수를 지정합니다.
    - `behavior`
      - : 스크롤을 즉시 적용할지 아니면 부드러운 애니메이션을 적용할지 결정합니다. 이 옵션은 다음 값 중 하나의 문자열을 취해야 합니다.
        - `smooth`: 스크롤이 부드럽게 움직입니다.
        - `instant`: 스크롤이 단번에 즉시 적용됩니다.
        - `auto`: 스크롤 동작은 계산된 {{cssxref("scroll-behavior")}} 값에 의해 결정됩니다.

### 반환 값

없음 ({{jsxref("undefined")}})

## 예제

```js
window.scrollTo(0, 1000);
```

## 참고

이 함수는 [window.scroll](/ko/docs/DOM/Window.scroll)과 효과적으로 같습니다. 스크롤링 관련 정보는 [window.scrollBy](/ko/docs/DOM/Window.scrollBy), [window.scrollByLines](/ko/docs/DOM/Window.scrollByLines), 그리고 [window.scrollByPages](/ko/docs/DOM/Window.scrollByPages)가 있습니다.

## 명세서

{{Specifications}}
