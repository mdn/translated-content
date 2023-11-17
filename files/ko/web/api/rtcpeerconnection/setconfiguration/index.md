---
title: RTCPeerConnection.setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.setConfiguration()`** 메소드는 {{domxref("RTCConfiguration")}}객체에 명시한 값을 가지고 {{domxref("RTCPeerConnection")}}의 현재 설정을 지정합니다. 이 메소드를 사용해서 연결에서 사용되는 ICE 서버와 전송 정책을 변경 할 수 있습니다.

가장 보편적으로 쓰이는 방법은 사용하려는 ICE 서버 값으로 교체해주는것 입니다. (엄청 자주 사용되는 케이스는 아닐 것입니다) 이 방법을 수행하는 두 가지 시나리오는 아래와 같습니다:

- {{domxref("RTCPeerConnection")}}가 ICE 서버를 명시하지 않고 시작된 경우. 예를 들어, {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}} 생성자를 매개변수 없이 호출하게되면, 개발자가 직접 `setConfiguration()`를 호출해서 ICE 협상 시작 전에 ICE 서버를 추가해줘야 합니다.
- 연결의 재협상이 필요하거나, 어떤 이유로 인해서 다른 종류의 ICE 서버를 사용해야하는 경우. 예를 들어, 사용자가 새로운 지역으로 이동을 했기 때문에 지역 ICE 서버를 바꿔야하는 경우입니다. 이런 경우에는, `setConfiguration()`를 호출해서 신규 지역 ICE 서버로 바꿔주고, [ICE restart](/ko/docs/Web/API/WebRTC_API/Session_lifetime#ICE_restart)을 시작하게됩니다.

> **참고:** 연결이 이미 설정이 되어있다면, 식별 정보는 변경 할 수 없습니다.

## Syntax

```js
RTCPeerConnection.setConfiguration(configuration);
```

### 매개변수

- `configuration`
  - : 설정을 할 수 있는 옵션들을 제공해주는 {{domxref("RTCConfiguration")}} 객체입니다. 변경사항은 계속해서 추가되지 않습니다. 대신에, 신규 값이 기존의 값은 완전히 대체하게 됩니다.

### 예외처리

- `InvalidAccessError`
  - : `configuration.iceServers`에 정의한 하나 혹은 여러개의 URL이 {{Glossary("TURN")}} 서버 입니다. 하지만, 로그인을 위한 정보가 완전히 제공되지 않아서 발생하는 에러입니 ({{domxref("RTCIceServer.username")}} 혹은 {{domxref("RTCIceServer.credentials")}}의 값이 없다는 뜻). 이로인해 서버에 로그인을 성공적으로 할 수 없게 됩니다.
- `InvalidModificationError`
  - : `configuration`에서 변경되는 식별 정보를 포함하고 있지만, 연결을 구성하면서 이미 식별 정보를 지정했기 때문에 발생하는 에러입니다. 이 에러는 `configuration.peerIdentity` 혹은 `configuration.certificates`가 설정이 되어있고, 이 값들이 현재 설정 값과 다르기 때문에 발생합니다.
- `InvalidStateError`
  - : {{domxref("RTCPeerConnection")}}이 닫혀있어서 발생하는 에러입니다.
- `SyntaxError`
  - : `configuration.iceServers`에 제공된 하나 혹은 여러개의 URL 리스트가 유효하지 않아서 발생하는 에러입니다.

## 예시

아래의 예시에서는 ICE 재시작이 필요한 것을 확인하고, 다른 ICE 서버를 사용해서 협상이 이루어지도록 합니다.

```js
var restartConfig = {
  iceServers: [
    {
      urls: "turn:asia.myturnserver.net",
      username: "allie@oopcode.com",
      credential: "topsecretpassword",
    },
  ],
};

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection
  .createOffer({ iceRestart: true })
  .then(function (offer) {
    return myPeerConnection.setLocalDescription(offer);
  })
  .then(function () {
    // send the offer to the other peer using the signaling server
  })
  .catch(reportError);
```

먼저, 신규 {{domxref("RTCConfiguration")}}가 신규 ICE 서버와 인증 정보를 명시한 `restartConfig`를 가지도록 생성됩니다. 그리고 설정한 {{domxref("RTCConfiguration")}}가 `setConfiguration()`에 전달됩니다. `iceRestart` 옵션의 값을 `true`로 지정하고, {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}}을 호출해서 ICE 협상이 재시작됩니다. 이후에, 반환받은 offer를 local description으로 설정하고, 다른 피어에게 offer를 전달하는 것과 같이 일반적으로 진행되도록 처리합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("RTCPeerConnection.getConfiguration()")}}
- {{domxref("RTCConfiguration")}}
- {{domxref("RTCPeerConnection")}}
