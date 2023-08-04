---
title: RTCPeerConnection.getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 인터페이스의 **`getTransceivers()`** 메소드는 연결에서 데이터 전송 및 수신에 사용되는 {{domxref("RTCRtpTransceiver")}} 객체의 리스트를 반환합니다.

## Syntax

```js
transceiverList = RTCPeerConnection.getTransceivers();
```

### 매개변수

없음.

### 반환 값

`RTCPeerConnection`에 대한 모든 미디어의 전송/수신을 관리하는 트랜시버를 나타내는 {{domxref("RTCRtpTransceiver")}} 객체의 배열입니다. 리스트의 순서는 트랜시버가 연결에 추가된 순서대로 정렬되어있습니다.

## 예시

아래 코드는 `RTCPeerConnection`와 연관된 모든 트랜시버를 중지시킵니다.

```js
pc.getTransceivers.forEach((transceiver) => {
  transceiver.stop();
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- {{domxref("RTCPeerConnection.addTransceiver()")}}
- {{jsxref("Array.forEach()")}}
