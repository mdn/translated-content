---
title: CanvasCaptureMediaStreamTrack.requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("CanvasCaptureMediaStreamTrack")}} 의 메서드 **`requestFrame()`** 은 canvas에서 프레임을 캡처하여 stream으로 보낼 것을 요청한다. 렌더링 타이밍과 프레임 캡처를 섬세하게 제어해야하는 애플리케이션은 `requestFrame()` 을 사용해 프레임을 캡처할 시기를 직접 지정할 수 있다.

프레임의 자동 캡처를 방지하려면 `requestFrame()` 이 호출될 때만 프레임이 캡처되도록 {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} 메서드에 값을 0으로 지정하세요.

## 구문

```js
stream.requestFrame();
```

### Return 값

`undefined`

## 참고 사항

현재 사양에는 canvas가 origin-clean 이 아닌 경우 예외를 발생시키지 않는다는 점을 지적하는 문제가 플래그로 표시되어 있다. 이것은 앞으로 바뀔 수 있기 때문에 계획을 미리 세우고 `SecurityError` (적용될 수 있는 구체적인 오류는 사양에 언급되어 있지 않지만, 유력한 후보임)와 같은 예외사항을 지켜보는 것이 좋다.

## 예시

```js
// 캡처할 canvas 요소 찾기
var canvasElt = document.getElementsByTagName("canvas")[0];

// stream 가져오기
var stream = canvasElt.captureStream(25); // 25 FPS

// canvas의 현재 상태를 프레임으로 stream에 보내기
stream.getVideoTracks()[0].requestFrame();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{domxref("CanvasCaptureMediaStream")}}, the interface it belongs to.
- {{HTMLElement("canvas")}}
