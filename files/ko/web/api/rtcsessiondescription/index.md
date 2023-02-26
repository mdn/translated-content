---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCSessionDescription`** interface describes one end of a connection—or potential connection—and how it's configured. Each `RTCSessionDescription` consists of a description {{domxref("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.

The process of negotiating a connection between two peers involves exchanging `RTCSessionDescription` objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## Properties

_The `RTCSessionDescription` interface doesn't inherit any properties._

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : An enum of type [`RTCSdpType`](#rtcsdptype) describing the session description's type.

- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} containing the {{Glossary("SDP")}} describing the session.

## Constants

### RTCSdpType

This enum defines strings that describe the current state of the session description, as used in the {{domxref("RTCSessionDescription.type", "type")}} property. The session description's type will be specified using one of these values.

| Value      | Description                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `answer`   | The SDP contained in the {{domxref("RTCSessionDescription.sdp", "sdp")}} property is the definitive choice in the exchange. In other words, this session description describes the agreed-upon configuration, and is being sent to finalize negotiation. |
| `offer`    | The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.                                                                                 |
| `pranswer` | The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.                                                                                           |
| `rollback` | This special type with an empty session description is used to roll back to the previous stable state.                                                                                                                                                                    |

## Methods

_The `RTCSessionDescription` doesn't inherit any methods._

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : This constructor returns a new `RTCSessionDescription`. The parameter is a `RTCSessionDescriptionInit` dictionary containing the values to assign the two properties.
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : Returns a {{Glossary("JSON")}} description of the object. The values of both properties, {{domxref("RTCSessionDescription.type", "type")}} and {{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.

## Example

```js
signalingChannel.onmessage = function (evt) {
    if (!pc)
        start(false);

    var message = JSON.parse(evt.data);
    if (message.sdp)
        pc.setRemoteDescription(new RTCSessionDescription(message), function () {
            // if we received an offer, we need to answer
            if (pc.remoteDescription.type == "offer")
                pc.createAnswer(localDescCreated, logError);
        }, logError);
    else
        pc.addIceCandidate(new RTCIceCandidate(message.candidate),
            function () {}, logError);
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}
