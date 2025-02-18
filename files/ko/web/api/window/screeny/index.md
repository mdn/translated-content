---
title: "Window: screenY property"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

**`Window.screenY`** 읽기 전용 속성은 사용자의 브라우저 뷰포트의 위쪽 테두리에서 화면 위쪽까지의 수직 거리를 CSS 픽셀 단위로 반환합니다.

> [!NOTE] > `screenY` 의 별칭은 최신 브라우저에 {{domxref("Window.screenTop")}}로 구현되었습니다. 이는 원래 IE 브라우저에만 지원이 되었으나 인지도 덕분에 어느 곳에서나 소개되었습니다.

## 값

브라우저 뷰포트의 위쪽 가장자리에서 화면의 위쪽 가장자리까지의 CSS 픽셀 단위와 동일한 숫자입니다.

## 예제

[screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) ([source code](https://github.com/mdn/dom-examples/blob/main/screenleft-screentop/index.html)) 예제에서는 원형으로 그려진 캔버스를 확인할 수 있습니다. 이 예제에서는 {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} 에 더하여 {{domxref("Window.requestAnimationFrame()")}} 를 사용하여 창 위치가 바뀌어도 지속적으로 화면 내에서 물리적으로 동일한 위치에 원형을 그립니다.

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0 0 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent = `Window.screenLeft: ${window.screenLeft}, Window.screenTop: ${window.screenTop}`;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

이는 `screenX`/`screenY` 와 완전히 동일한 동작을 합니다.

또한 코드에서는 `screenLeft` 을 지원하는지, 만일 지원하지 않으면 `screenLeft`/`screenTop` 의 폴리필을 `screenX`/`screenY` 로 사용할 수 있도록 탐지하기 위해 스니펫이 추가되었습니다.

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.screenTop")}}
- {{domxref("window.screenX")}}
