---
title: Window.scrollX
slug: Web/API/Window/scrollX
---

{{APIRef("CSSOM View")}}

{{domxref("Window")}} 인터페이스의 **`scrollX`** 읽기 전용 속성은 문서가 수평으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다. 최신 브라우저에서는 값의 정밀도가 픽셀보다 작으므로 반드시 정숫값을 반환하는건 아닙니다. 수직 스크롤은 {{domxref("Window.scrollY", "scrollY")}} 속성을 사용하여 가져올 수 있습니다.

## 구문

```js
var x = window.scrollX;
```

### 값

반환하는 값은 문서가 원점으로부터 수평방향으로 스크롤한 픽셀의 수를 나타내는 배정밀도 부동소수점 값입니다. 양의 값이 왼쪽 스크롤을 의미합니다. 문서를 픽셀보다 작은 정밀도의 장치에서 렌더링한 경우 반환값의 정밀도도 높아져 소숫값을 반환할 수 있습니다. 문서가 좌우로 전혀 움직이지 않은 상태면 `0`을 반환합니다.

> **참고:** 정숫값이 필요하면 {{jsxref("Math.round()")}}를 사용해 반올림할 수 있습니다.

더 기술적인 용어로, `scrollX`는 현재 {{Glossary("viewport", "뷰포트")}} 왼쪽 모서리의 X좌표를 반환하고, 뷰포트가 없으면 0을 반환합니다.

## 예제

다음 예제는 문서의 현재 스크롤 위치가 400픽셀이 넘으면 맨 처음으로 돌아갑니다.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## 참고

`pageXOffset` 속성은 `scrollX` 의 다른 이름입니다.

```js
window.pageXOffset === window.scrollX; // 항상 true
```

브라우저 호환성을 위해서는 `window.scrollX` 대신 `window.pageXOffset`을 사용하세요. 이에 더해, Internet Explorer 9 미만에서는 두 속성 모두 지원하지 않으므로 다른 비표준 속성을 사용해야 합니다. 다음은 완벽히 호환되는 코드의 예시입니다.

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

- {{domxref("window.scrollY")}}
