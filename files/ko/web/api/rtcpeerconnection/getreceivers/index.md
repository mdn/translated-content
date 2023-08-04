---
title: RTCPeerConnection.getReceivers()
slug: Web/API/RTCPeerConnection/getReceivers
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.getReceivers()`** 메소드는 {{domxref("RTCRtpReceiver")}} 객체의 배열을 반환합니다. 이 배열의 각 요소들은 RTP 리시버를 나타냅니다. 각각의 RTP 리시버는 {{domxref("RTCPeerConnection")}}에 대한 {{domxref("MediaStreamTrack")}}의 데이터를 수신하고 디코딩 합니다.

## Syntax

```js
var receivers[] = RTCPeerConnection.getReceivers();
```

### 반환 값

연결에 대한 각 트랙마다 한 개씩 {{domxref("RTCRtpReceiver")}} 객체의 배열을 반환합니다. R연결에 대한 RTP 리시버가 없으면, 배열은 빈 상태입니다.

`RTCReceiver` 인스턴스에서 반환되는 순서는 명세서에 정의되어있지 않고, `getSenders()`호출을 사용해서 다음 배열의 요소로 바꿀 수 있습니다.

## 예시

tbd

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC_API)
- {{domxref("RTCRtpSender")}}
