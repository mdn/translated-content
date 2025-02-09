---
title: Screen.lockOrientation
slug: Web/API/Screen/lockOrientation
---

{{APIRef("CSSOM View")}}{{Deprecated_header}}

`lockOrientation` 함수는 지정된 방향으로 화면을 고정시킨다.

> [!NOTE]
> 이 함수는 오직 설치된 웹앱 또는 [full-screen mode](/ko/docs/Web/API/Fullscreen_API) 의 웹페이지에서만 동작한다..

## Syntax

```js
var locked = window.screen.lockOrientation(orientation);
```

### Parameters

- _orientation_
  - : 화면을 고정 시킬 방향. 문자열 또는 문자열의 배열이다. 여러 문자열을 지정하면 지정한 방향으로만 회전된다.

다음의 문자열들은 당신이 지정할 수 있는 방향들을 나타낸다.

- `portrait-primary`
  - : 기본 세로 모드 일 때 화면의 방향을 나타낸다. 화면은 화면이 정상위치 (normal position)가 세로이고 세로로 고정 되어 있으면 기본 세로 모드 (primary portrait mode) 로 간주 된다. 만약 장치의 정상위치 (normal position)가 가로 모드 이면 장치가 시계방향으로 90° 돌렸을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.
- `portrait-secondary`
  - : 보조 세로 모드 일 때 화면의 방향을 나타낸다. 화면은 정상위치에서 180° 로 고정 되어 있을 때 보조 세로 모드로 간주된다. 만약 정상위치가 가로 인 경우 장치가 반시계 방향으로 90° 회전 했을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.
- `landscape-primary`
  - : 기본 가로 모드 일 때 화면의 방향을 나타낸다. 화면은 정상위치 (normal position)가 가로이고 가로로 고정 되어 있으면 기본 가로 모드 (primary landscape mode) 로 간주된다. 만약 장치의 정상위치 (normal position)가 세로이면 장치가 시계방향으로 90° 돌렸을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.
- `landscape-secondary`
  - : 보조 가로 모드 일 때 화면의 방향을 나타낸다. 화면은 정상위치에서 180° 로 고정 되어 있을 때 보조 가로 모드 (secondary landscape mode) 로 간주된다. 또는 정상위치가 세로 인 경우 장치가 반시계 방향으로 90° 회전 했을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.
- `portrait`
  - : `portrait-primary` 와 `portrait-secondary 둘 다 이다.`
- `landscape`
  - : `landscape-primary` 와 `landscape-secondary 둘 다 이다.`

> [!NOTE]
> 한번에 여러개의 고정 값을 가질 수 있다. 만약 한방향으로만 설정 하면 화면의 방향은 unlock 하기 전 까지는 절대로 변하지 않는다. 그렇지 않다면 (여러값을 가진 다면) 지정 된 방향들로 화면의 방향이 변할 것이다.

### Return value

성공적으로 고정 되었을 경우 `true` 를 반환한다. 고정 될 수 없다면 `false` 를 반환한다.

## Example

```js
if (window.screen.mozLockOrientation("landscape-primary")) {
  // orientation was locked
} else {
  // orientation lock failed
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
- [Managing screen orientation](/ko/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
