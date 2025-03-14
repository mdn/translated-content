---
title: Window.scroll()
slug: Web/API/Window/scroll
---

{{APIRef}}

**`Window.scroll()`** 메서드는 문서 내 창을 특정 위치로 스크롤합니다.

## 구문

```js-nolint
scroll(x-coord, y-coord)
scroll(options)
```

### 매개변수

- `x-coord`는 왼쪽 상단에 표시하고 싶은 문서의 수평축에 따른 픽셀입니다.
- `y-coord`는 왼쪽 상단에 표시하고 싶은 문서의 수직축에 따른 픽셀입니다.

\- 혹은 -

- `options`
  - : 다음 매개변수를 포함하는 사전.
    - `top`
      - : 창이나 요소를 스크롤할 Y축의 픽셀의 수를 지정합니다.
    - `left`
      - : 창이나 요소를 스크롤할 X축의 픽셀의 수를 지정합니다.
    - `behavior`
      - : 요소를 위치로 스크롤하는 브라우저는 다음 스크롤 동작 중 하나를 가질 수 있습니다.
        - `auto` (기본): 스크롤 동작은 스크롤 요소에 의해 설정되거나 상속된 [`scroll-behavior`](/ko/docs/Web/CSS/scroll-behavior) CSS 스타일에 의해 제어됩니다.
        - `smooth`: 스크롤이 부드럽게 작동합니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```html
<!-- put the 100th vertical pixel at the top of the window -->

<button onclick="scroll(0, 100);">click to scroll to the 100th pixel</button>
```

`options` 사용:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## 참고

{{domxref("Window.scrollTo()")}}는 이 메서드와 사실상 같습니다. 상대적인 스크롤의 경우 {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}} 그리고 {{domxref("Window.scrollByPages()")}}를 참고하십시오.

스크롤 요소의 경우, {{domxref("Element.scrollTop")}} 그리고 {{domxref("Element.scrollLeft")}}를 참고하십시오.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
