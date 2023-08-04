---
title: Window.closed
slug: Web/API/Window/closed
---

{{APIRef}}

**`Window.closed`** 읽기 전용 속성은 참조한 창이 닫혔는지 여부를 나타냅니다.

## 구문

```js
const isClosed = windowRef.closed;
```

### 값

창이 닫혔으면 `true`, 그렇지 않으면 `false`.

## 예제

### 팝업에서 자신을 띄운 창의 URL 바꾸기

다음 예제는 팝업 창에서 자신을 띄운 창의 {{glossary("URL")}}을 바꾸는 예제입니다. URL을 바꾸기 전, 현재 창을 띄운 창의 존재 유무를 {{domxref("window.opener")}} 속성으로 검사하고, `closed` 속성으로 이미 닫히지는 않았는지도 검사합니다.

```js
// Check that an opener exists and is not closed
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}
```

> **참고:** 팝업은 자신을 띄운 창에만 접근할 수 있습니다.

### 이전에 열었던 팝업 새로고침

이번 예제의 `refreshPopupWindow()`는 팝업의 {{domxref("Location.reload", "reload()")}} 메서드를 호출해 데이터를 다시 불러옵니다. 만약 팝업을 아직 열지 않았거나, 사용자가 이미 닫은 경우 새로운 팝업을 띄웁니다.

```js
const popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow is open, refresh it
    popupWindow.location.reload(true);
  } else {
    // Open a new popup window
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## 명세

{{Specifications}}
