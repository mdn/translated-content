---
title: Screen.orientation
slug: Web/API/Screen/orientation
---

{{APIRef("CSSOM View")}} {{SeeCompatTable}}

## Summary

`orientation` 속성은 화면의 현재 방향을 알려 준다.

> **참고:** 이 함수는 설치된 웹앱 또는 [full-screen mode](/ko/docs/Web/Guide/DOM/Using_full_screen_mode) 의 웹페이지에서 동작한다.

## Syntax

```js
var orientation = window.screen.orientation;
```

## Return value

리턴값은 화면의 방향을 표현하는 문자열이다. portrait-primary, portrait-secondary, landscape-primary, landscape-secondary 가 될 수 있다. (각 값들에 대해 좀 더 많은 정보를 구하려면 {{domxref("window.screen.lockOrientation","lockOrientation")}} 를 보라.).

## Example

```js
var orientation = screen.mozOrientation;

if (orientation === "landscape-primary") {
  console.log("That looks good.");
} else if (orientation === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
} else if (
  orientation === "portrait-secondary" ||
  orientation === "portrait-secondary"
) {
  console.log("Mmmh... you should rotate your device");
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("window.screen.orientation")}}
- {{domxref("window.screen.unlockOrientation()")}}
- {{domxref("window.screen.onorientationchange")}}
- [Managing screen orientation](/ko/docs/Managing_screen_orientation)
