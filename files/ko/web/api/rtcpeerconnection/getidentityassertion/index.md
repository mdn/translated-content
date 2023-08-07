---
title: RTCPeerConnection.getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.getIdentityAssertion()`** 메소드는 식별 주장의 수집을 시작합니다. 이 메소드는 {{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 `"closed"` 상태가 아닐 때에만 유효합니다.

이 메소드는 즉시 반환하게됩니다. 식별 주장이 생성 될 수 없다면, 객체에 {{event("idpassertionerror")}}가 전달됩니다.

이는 자동으로 수행되기 때문에, 어플리케이션에서 `RTCPeerConnection`을 직접 다룰 일은 없습니다.명시적인 호출로 필요한 것이 무엇인지 정도만 알 수 있습니다.

## Syntax

```js
pc.getIdentityAssertion();
```

_이 메소드에는 매개변수 혹은 반환 값이 없습니다._

## 예시

```js
var pc = new PeerConnection();

pc.getIdentityAssertion(); // Not mandatory, but we know that we will need it in the future.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
