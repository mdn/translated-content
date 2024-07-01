---
title: RTCPeerConnection.setIdentityProvider()
slug: Web/API/RTCPeerConnection/setIdentityProvider
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.setIdentityProvider()`** 메소드는 이름, 통신에 사용된 프로토콜 (옵션), 유저 이름 (옵션)으로 구성된 세 가지 매개변수에 식별 제공자 (Identity Provider, IdP)를 지정합니다. IdP는 주장 (assertion)이 필요한 순간에만 사용 될 것입니다.

{{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 `"closed"`로 지정되어있다면, `InvalidStateError` 에러가 발생합니다.

## Syntax

```js
pc.setIdentityProvider(domainname [, protocol] [, username]);
```

_이 메소드는 반환 값이 존재하지 않습니다._

### 매개변수

- _domainname_
  - : IdP가 존재하는 도메인 이름을 나타내는 {{domxref("DOMString")}}입니다.
- _protocol_ {{optional_Inline}}
  - : IdP와 통신하기위해 사용된 프로토콜을 나타내는 {{domxref("DOMString")}}입니다. 디폴트 값은 `"default"`로 설정되어있고, IdP가 감청하게되는 URL를 결정하는데에 사용됩니다.
- _username_ {{optional_Inline}}
  - : IdP와 연관된 유저 이름을 나타내는 {{domxref("DOMString")}}입니다.

## 예시

```js
var pc = new PeerConnection();

pc.setIdentityAssertion("developer.mozilla.org");
```

## 사양서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
