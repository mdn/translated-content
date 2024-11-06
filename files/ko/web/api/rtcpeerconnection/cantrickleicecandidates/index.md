---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
---

{{APIRef("WebRTC")}}

읽기 속성인 **{{domxref("RTCPeerConnection")}}** 속성의 **`canTrickleIceCandidates`** 는 원격유저가 [trickled ICE candidates](https://tools.ietf.org/html/draft-ietf-mmusic-trickle-ice)를 승인 할 수 있는지의 여부를 알려주는 {{jsxref("Boolean")}}을 반환합니다.

**ICE trickling** 은 초기 offer 혹은 answer를 다른 유저에게 이미 전달을 했음에도 계속해서 candidate를 보내는 과정을 뜻합니다.

이 속성은 {{domxref("RTCPeerConnection.setRemoteDescription()")}}가 호출된 후에만 설정됩니다. Signaling 프로토콜이 trickling 지원을 감지하는 방법을 제공해서 이 속성에 의존 할 필요가 없이 하는 것이 가장 좋은 방법입니다. WebRTC 브라우저는 항상 trickle ICE를 지원하게 되어있습니다. 하지만 몇몇 경우에 trickling이 지원이 되지 않거나 애초에 지원하는지를 알 수 없다면, 이 속성의 값이 이상한지 확인하고, 또한 초기 offer를 생성하고 전달하기 이전에 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}의 값이 `"completed"`로 바뀌기전까지 기다릴 수 있습니다. 이러한 방식으로 offer에 모든 candidate들이 포함되도록 만들 수 있습니다.

## Syntax

```js
var canTrickle = RTCPeerConnection.canTrickleIceCandidates;
```

### 값

{{jsxref("Boolean")}}는 원격 유저가 trickled ICE candidate를 수용 할 수 있으면 `true` 값이고, 그렇지 않으면 `false` 값 입니다. 이미 원격 유저가 생성되었으면, 이 값은 `null` 입니다.

> **참고:** **참조:** 이 속성의 값은 로컬 피어가 {{domxref("RTCPeerConnection.setRemoteDescription()")}}를 호출하게 되면 결정됩니다.
>
> 여기에서 제공된 정보를 사용해서 ICE agent가 원격 유저가 trickled ICE candidate를 지원하는지에 대한 여부를 결정해줍니다.

## 예시

```js
var pc = new RTCPeerConnection();
// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
pc.setRemoteDescription(remoteOffer)
  .then(_ => pc.createAnswer())
  .then(answer => pc.setLocalDescription(answer))
  .then(_ =>
    if (pc.canTrickleIceCandidates) {
      return pc.localDescription;
    }
    return new Promise(r => {
      pc.addEventListener('icegatheringstatechange', e => {
        if (e.target.iceGatheringState === 'complete') {
          r(pc.localDescription);
        }
      });
    });
  })
  .then(answer => sendAnswerToPeer(answer)) // signaling message
  .catch(e => handleError(e));

pc.addEventListener('icecandidate', e => {
  if (pc.canTrickleIceCandidates) {
    sendCandidateToPeer(e.candidate); // signaling message
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)
