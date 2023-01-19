---
title: RTCPeerConnection.getSenders()
slug: Web/API/RTCPeerConnection/getSenders
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}}의 **`getSenders()`** 메소드는 {{domxref("RTCRtpSender")}} 객체의 배열을 반환합니다. 배열의 각 객체는 하나의 트랙의 데이터의 송신을 담당하는 RTP sender를 나타냅니다. Sender 객체는 트랙 데이터의 인코딩과 송신을 확인하고, 조작 할 수 있는 메소드와 속성들을 제공합니다.

## Syntax

```js
var senders = RTCPeerConnection.getSenders();
```

### 반환 값

연결의 각 트랙마다 한 개의 {{domxref("RTCRtpSender")}} 객체 배열을 반환합니다. 연결의 RTP sender가 존재하지 않으면, 배열은 빈 상태입니다.

`RTCRtpSender`s 의 반환 값 순서는 정의되어있지 않고, `getSenders()` 호출을 통해서 다음 배열 요소로 바꿀 수 있습니다.

## 예시

tbd

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC_API)
- {{domxref("RTCRtpSender")}}
