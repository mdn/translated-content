---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

**`Window.scrollBy()`** 메서드는 창에 있는 문서를 지정된 양만큼 스크롤합니다.

## 구문

```js-nolint
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### 매개변수

- `x-coord`는 스크롤할 수평 픽셀 값입니다.
- `y-coord`는 스크롤할 수직 픽셀 값입니다.

\- 혹은 -

- `options`
  - : 다음 매개변수가 포함된 사전.
    - `top`
      - : 창 또는 요소를 스크롤할 Y축을 따라 픽셀 수를 지정합니다.
    - `left`
      - : 창 또는 요소를 스크롤할 X축을 따라 픽셀 수를 지정합니다.
    - `behavior`
      - : 스크롤이 부드럽게 애니메이션되는지 (`smooth`), 한 번의 점프로 즉시 실행되는지 (`instant`), 또는 브라우저가 선택하도록 할지 (`auto`, 기본)를 지정합니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

한 페이지 아래로 스크롤하려면.

```js
window.scrollBy(0, window.innerHeight);
```

위로 스크롤하려면.

```js
window.scrollBy(0, -window.innerHeight);
```

`options` 사용.

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 참고

{{domxref("window.scroll()")}}가 문서의 절대 위치로 스크롤하는데 반해, `window.scrollBy()`는 특정 양만큼 스크롤합니다.
{{domxref("window.scrollByLines()")}}와 {{domxref("window.scrollByPages()")}}를 참조하십시오.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
