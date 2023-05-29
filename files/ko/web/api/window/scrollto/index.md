---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## 요약

문서의 지정된 위치로 스크롤합니다.

## 구문

```js
window.scrollTo(x-좌표, y-좌표)
```

### 매개변수

- `x` - 좌표는 문서의 왼쪽상단부터 시작하는 픽셀단위의 가로축입니다.
- `y` - 좌표는 문서의 왼쪽상단부터 시작하는 픽셀단위의 세로축입니다.

## 예제

```js
window.scrollTo( 0, 1000 );
```

## 노트

이 함수는 [window.scroll](/ko/docs/DOM/Window.scroll)과 효과적으로 같습니다. 스크롤링 관련 정보는 [window.scrollBy](/ko/docs/DOM/Window.scrollBy), [window.scrollByLines](/ko/docs/DOM/Window.scrollByLines), 그리고 [window.scrollByPages](/ko/docs/DOM/Window.scrollByPages)가 있습니다.

## 명세서

{{Specifications}}
