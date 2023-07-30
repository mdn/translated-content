---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef("CSSOM View")}}

{{domxref("Window")}} 인터페이스의 **`scrollY`** 읽기 전용 속성은 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다. 최신 브라우저에서는 값의 정밀도가 픽셀보다 작으므로 반드시 정숫값을 반환하는건 아닙니다. 수평 스크롤은 {{domxref("Window.scrollX", "scrollX")}} 속성을 사용하여 가져올 수 있습니다.

## 구문

```js
var y = window.scrollY;
```

### 값

원점으로부터 문서를 수직방향으로 스크롤한 픽셀의 수를 나타내는, 배정밀도 부동소수점 값. 양의 값이 위쪽 스크롤을 의미합니다. 문서를 단일 픽셀보다 높은 정밀도의 장치에서 렌더링한 경우 반환값의 정밀도도 높아져 소숫값을 반환할 수 있습니다. 문서가 위나 아래로 전혀 움직이지 않은 상태면 `0`을 반환합니다.

> **참고:** 정숫값이 필요하면 {{jsxref("Math.round()")}}를 사용해 반올림할 수 있습니다.

더 기술적인 용어로, `scrollY`는 현재 {{Glossary("viewport", "뷰포트")}} 위쪽 모서리의 Y좌표를 반환하고, 뷰포트가 없으면 0을 반환합니다.

## 예제

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## 참고

`scrollY` 속성을 사용하면 {{domxref("window.scrollBy", "scrollBy()")}}, {{domxref("window.scrollByLines", "scrollByLines()")}}, {{domxref("window.scrollByPages", "scrollByPages()")}}와 같은 상대적 스크롤 함수를 사용할 때, 문서가 이미 스크롤되지는 않았는지 판별할 수 있습니다.

{{domxref("Window.pageYOffset", "pageYOffset")}} 속성은 `scrollY`의 다른 이름입니다.

```js
window.pageYOffset === window.scrollY; // 항상 true
```

브라우저간 호환성을 위해서는 `window.scrollY` 대신 `window.pageYOffset`을 사용하세요. 이에 더해, Internet Explorer 9 미만의 구형 환경에서는 두 속성 모두 지원하지 않으므로 또 다른 비표준 속성을 사용해야 합니다. 다음은 완벽히 호환되는 코드의 예시입니다.

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.scrollX")}}
