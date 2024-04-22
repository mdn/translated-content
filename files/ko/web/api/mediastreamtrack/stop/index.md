---
title: MediaStreamTrack.stop()
slug: Web/API/MediaStreamTrack/stop
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.stop()`** 메서드는 트랙을 정지합니다.

## 구문

```js
track.stop();
```

## 설명

`stop()` 메서드를 호출하면 {{glossary("user agent", "사용자 에이전트")}}에게 {{domxref("MediaStreamTrack")}}이 소스(파일, 네트워크 스트림, 장치 카메라와 마이크...)를 더는 필요로 하지 않음을 표현합니다. 두 개의 탭이 장치의 마이크에 접근하고 있는 경우처럼, 다수의 트랙이 하나의 소스를 사용하고 있을 수도 있으므로 소스 자체는 즉시 멈추지 않을 수도 있으며, 대신 트랙과 소스를 즉시 분리합니다. 아무런 미디어 트랙도 소스를 사용하지 않는 상태가 되면 그때 소스가 완전히 정지합니다.

`stop()`을 호출함과 동시에 {{domxref("MediaStreamTrack.readyState", "readyState")}} 속성은 `ended`로 바뀝니다.

## 예제

### 비디오 스트림 정지

이번 예제는 주어진 {{HTMLElement("video")}} 요소의 모든 트랙에서 `stop()`을 호출해 비디오 스트림을 정지하는 함수입니다.

```js
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  videoElem.srcObject = null;
}
```

우선 비디오 요소에서 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} 속성을 사용해 스트림을 가져오는 것부터 시작합니다. 그다음으로는 {{domxref("MediaStream.getTracks", "getTracks()")}} 메서드를 사용해 스트림의 트랙 목록을 가져오고, 이제 {{jsxref("Array.forEach", "forEach()")}}로 각 트랙의 `stop()` 메서드를 호출합니다.

마지막으로, `srcObject`를 {{jsxref("null")}}로 설정해서 {{domxref("MediaStream")}}과의 연결을 끊어, 객체를 해제할 수 있도록 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{domxref("MediaStreamTrack")}} 인터페이스
- {{domxref("MediaStreamTrack.readyState")}}
- {{event("ended")}}
