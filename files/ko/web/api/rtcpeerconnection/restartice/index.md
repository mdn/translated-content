---
title: RTCPeerConnection.restartIce()
slug: Web/API/RTCPeerConnection/restartIce
---

{{APIRef("WebRTC API")}}

[WebRTC](/ko/docs/Web/API/WebRTC_API) API의 {{domxref("RTCPeerConnection")}} 인터페이스에서는 **`restartIce()`** 메소드를 제공해서 연결의 양쪽에서 {{Glossary("ICE")}} candidate의 재수집 요청을 간단하게 할 수 있게 만들어줍니다.

`restartIce()`가 반환을 한 뒤에는, offer가 시그널링 메커니즘을 통해 전달되고, 원격 피어가 받은 offer를 description으로 설정을 하게 됩니다.이 과정이 완료되면, {{domxref("RTCPeerConnection.createOffer", "createOffer()")}}에 대한 다음 호출로 반환된 offer가 로컬 피어 (로컬로 설정이 된 경우)와 원격 피어에서 ICE 재시작을 발생시키도록 설정됩니다.

`restartIce()`는 `RTCPeerConnection`에 대한 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트를 발생시켜서 어플리케이션이 신호 채널을 통해서 협상을 수행하도록 합니다.

만약 협상이 롤백 현상이나 수신받은 offer가 이미 협상 중으로 인해 실패하게되면, {{domxref("RTCPeerConnection")}}가 ICE 재시작 요청을 했다는 것을 자동으로 기억합니다. 다음번에 연결의 {{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 `stable`로 바뀌게되면, 연결 인터페이스가 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트를 발생시킵니다. 이 과정은 ICE 재시작 과정이 온전히 완료될 때까지 반복됩니다.

## Syntax

```js
RTCPeerConnection.restartIce();
```

### 매개변수

없음.

### 반환 값

`undefined`.

{{domxref("RTCPeerConnection.createOffer", "createOffer()")}}를 사용해서 만들어진 다음 offer가 신호 메커니즘을 통해 원격 유저에게 전달이 되면, ICE 재시작을 시작하도록 만듭니다. ICE를 재시작하게되면 기본적으로 ICE가 초기화되고, 새로운 증명서를 사용해서 신규 candidate를 생성합니다. 기존에 존재하던 미디어 전송/수신은 이 과정동안에는 방해받지 않습니다.

ICE 재시작의 작동원리를 좀 더 자세히 알고 싶다면, [ICE restart](/ko/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart)와 {{RFC(5245, "ICE specification", "9.1.1.1")}}를 참고하십시오.

## 예시

아래의 예제는 {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} 이벤트에 대한 핸들러입니다. 이 핸들러는 ICE를 재시작하여 `failed` 상태로의 전환을 관리합니다.

```js
pc.addEventListener("iceconnectionstatechange", (event) => {
  if (pc.iceConnectionState === "failed") {
    /* possibly reconfigure the connection in some way here */
    /* then request ICE restart */
    pc.restartIce();
  }
});
```

위의 코드를 사용하여 ICE 협상 중 `failed` 상태로 전환되면 코드가 정상적으로 재협상 되어야 하기 때문에 {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} 이벤트가 발생합니다. 그러나, `restartIce()`를 호출했기 때문에 `negotiationneeded`에 대한 핸들러에서 발생하는 {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} 호출은 일반적으로 수행되는 재협상이 아니라 ICE 재시작을 발생시킵니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
