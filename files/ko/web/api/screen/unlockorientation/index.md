---
title: window.screen.unlockOrientation
slug: Web/API/Screen/unlockOrientation
---

{{APIRef("CSSOM View")}}{{Deprecated_header}}

**`Screen.unlockOrientation()`** 함수는 이전의 page나 앱을 통해 지정한 화면 고정 값들을 모두 제거 한다.

> [!NOTE]
> 이 함수는 설치된 웹앱 또는 [full-screen mode](/ko/docs/Web/API/Fullscreen_API) 의 웹 페이지들에서 동작한다..

## Syntax

```js
var unlocked = window.screen.unlockOrientation();
```

### Return value

성공적으로 unlocked 된 경우 `true` 를 반환하며, 만약 방향이 unlock 될 수 없다면 `false` 를 반환한다.

## Example

```js
if (window.screen.unlockOrientation()) {
  // orientation was unlocked
} else {
  // orientation unlock failed
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("window.screen.orientation")}}
- {{domxref("window.screen.lockOrientation()")}}
- {{domxref("window.screen.onorientationchange")}}
- [Managing screen orientation](/ko/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
