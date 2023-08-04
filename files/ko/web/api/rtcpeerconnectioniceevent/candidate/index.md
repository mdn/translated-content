---
title: RTCPeerConnectionIceEvent.candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnectionIceEvent")}} 인터페이스의 candidate 속성은 읽기 전용입니다. 이 속성은 {{domxref("RTCIceCandidate")}}와 관련된 이벤트를 반환합니다.

## Syntax

```js
var candidate = event.candidate;
```

### 값

ICE candidate를 나타내는 {{domxref("RTCIceCandidate")}} 객체. 해당 네고시에이션 세션에 대한 candidate가 더 이상 존재하지 않으면, `null`을 반환합니다.

## 예시

```js
pc.onicecandidate = function (ev) {
  alert(
    "The ICE candidate (transport address: '" +
      ev.candidate.candidate +
      "') has been added to this connection.",
  );
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{event("icecandidate")}}
- {{domxref("RTCPeerConnection")}}
