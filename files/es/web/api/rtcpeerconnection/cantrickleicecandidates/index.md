---
title: RTCPeerConnection.canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
---

{{APIRef("WebRTC")}}

La propiedad **{{domxref("RTCPeerConnection")}}** es de solo lectura **`canTrickleIceCandidates`** , devuelve un {{jsxref("Boolean")}} que indica si el par remoto puede aceptar o no [candidatos ICE](https://tools.ietf.org/html/draft-ietf-mmusic-trickle-ice).

**ICE trickling** is the process of continuing to send candidates after the initial offer or answer has already been sent to the other peer.

This property is only set after having called {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Ideally, your signaling protocol provides a way to detect trickling support, so that you don't need to rely on this property. A WebRTC browser will always support trickle ICE. If trickling isn't supported, or you aren't able to tell, you can check for a falsy value for this property and then wait until the value of {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} changes to `"completed"` before creating and sending the initial offer. That way, the offer contains all of the candidates.

## Syntax

```
 var canTrickle = RTCPeerConnection.canTrickleIceCandidates;
```

### Value

A {{jsxref("Boolean")}} that is `true` if the remote peer can accept trickled ICE candidates and `false` if it cannot. If no remote peer has been established, this value is `null`.

> **Nota:** This property's value is determined once the local peer has called {{domxref("RTCPeerConnection.setRemoteDescription()")}}; the provided description is used by the ICE agent to determine whether or not the remote peer supports trickled ICE candidates.

## Example

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [WebRTC](/es/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Lifetime of a WebRTC session](/es/docs/Web/API/WebRTC_API/Session_lifetime)
