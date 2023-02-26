---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
---

{{APIRef('WebRTC')}}

La interfaz **`RTCPeerConnection`** representa una conexión WebRTC entre un computador local y un par remoto (otro computador). Esta interfaz provee métodos para: conectar un equipo remoto (remote peer), mantener y monitorear esa coneexión y cerrar la conexión una vez que no se necesite más.

> **Nota:** `RTCPeerConnection` y {{domxref("RTCSessionDescription")}} aún están prefijados en algunos navegadores. Se **recomienda encarecidamente** usar una librería de ajuste (shim) como la excelente y ampliamente soportada [Adapter.js](https://github.com/webrtc/adapter/), para asegurar la compatibilidad más amplia posible de su sitio o aplicación web. Vale la pena señalar que [Adapter.js](https://github.com/webrtc/adapter/) va más allá del manejo de prefijos, esta librería implementa ajustes (shims) para asegurar la compatibilidad entre las distintas implementaciones de WebRTC de los distintos navegadores.

{{InheritanceDiagram}}

### Método obsoleto

El siguiente método fue declarado obsoleto ya hace un tiempo, admás, nunca fue implementado en los navegadores más importantes.

- {{domxref("RTCPeerConnection.createDTMFSender()")}} {{deprecated_inline}}
  - : Crea un nuevo {{domxref("RTCDTMFSender")}}, que se asocia a un {{domxref("MediaStreamTrack")}} específico, that will be able to send {{Glossary("DTMF")}} phone signaling over the connection.

## Constantes

### RTCBundlePolicy enum

The `RTCBundlePolicy` enum defines string constants which are used to request a specific policy for gathering ICE candidates if the remote peer isn't compatible with the [SDP BUNDLE standard](https://webrtcstandards.info/sdp-bundle/) for bundling multiple media streams on a single transport link.

> **Nota:** In technical terms, a BUNDLE lets all media flow between two peers flow across a single **5-tuple**; that is, from the same IP and port on one peer to the same IP and port on the other peer, using the same transport protocol.

| Constant       | Description                                                                                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"balanced"`   | On BUNDLE-aware connections, the ICE agent should gather candidates for all of the media types in use (audio, video, and data). Otherwise, the ICE agent should only negotiate one audio and video track on separate transports. |
| `"max-compat"` | The ICE agent should gather candidates for each track, using separate transports to negotiate all media tracks for connections which aren't BUNDLE-compatible.                                                                   |
| `"max-bundle"` | The ICE agent should gather candidates for just one track. If the connection isn't BUNDLE-compatible, then the ICE agent should negotiate just one media track.                                                                  |

### RTCIceConnectionState enum

The `RTCIceConnectionState` enum defines the string constants used to describe the current state of the ICE agent and its connection to the ICE server (that is, the {{Glossary("STUN")}} or {{Glossary("TURN")}} server).

| Constant         | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | The ICE agent is gathering addresses or is waiting to be given remote candidates through calls to {{domxref("RTCPeerConnection.addIceCandidate()")}} (or both).                                                                                                                                                                                                                          |
| `"checking"`     | The ICE agent has been given one or more remote candidates and is checking pairs of local and remote candidates against one another to try to find a compatible match, but has not yet found a pair which will allow the peer connection to be made. It's possible that gathering of candidates is also still underway.                                                                                    |
| `"connected"`    | A usable pairing of local and remote candidates has been found for all components of the connection, and the connection has been established. It's possible that gathering is still underway, and it's also possible that the ICE agent is still checking candidates against one another looking for a better connection to use.                                                                           |
| `"completed"`    | The ICE agent has finished gathering candidates, has checked all pairs against one another, and has found a connection for all components.                                                                                                                                                                                                                                                                 |
| `"failed"`       | The ICE candidate has checked all candidates pairs against one another and has failed to find compatible matches for all components of the connection. It is, however, possible that the ICE agent did find compatible connections for some components.                                                                                                                                                    |
| `"disconnected"` | Checks to ensure that components are still connected failed for at least one component of the {{domxref("RTCPeerConnection")}}. This is a less stringent test than `"failed"` and may trigger intermittently and resolve just as spontaneously on less reliable networks, or during temporary disconnections. When the problem resolves, the connection may return to the `"connected"` state. |
| `"closed"`       | The ICE agent for this {{domxref("RTCPeerConnection")}} has shut down and is no longer handling requests.                                                                                                                                                                                                                                                                                      |

### RTCIceGatheringState enum

The `RTCIceGatheringState` enum defines string constants which reflect the current status of ICE gathering, as returned using the {{domxref("RTCPeerConnection.iceGatheringState")}} property. You can detect when this value changes by watching for an event of type [`icegatheringstatechange`](/es/docs/Web/Reference/Events/icegatheringstatechange).

| Constant      | Description                                                                                                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`       | The peer connection was just created and hasn't done any networking yet.                                                                                                                                                                                 |
| `"gathering"` | The ICE agent is in the process of gathering candidates for the connection.                                                                                                                                                                              |
| `"complete"`  | The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to "gathering" to gather those candidates. |

### RTCIceTransportPolicy enum

The `RTCIceTransportPolicy` enum defines string constants which can be used to limit the transport policies of the ICE candidates to be considered during the connection process.

| Constant                            | Description                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `"all"`                             | All ICE candidates will be considered.                                                                                          |
| `"public"`{{deprecated_inline}} | Only ICE candidates with public IP addresses will be considered. _Removed from the specification's May 13, 2016 working draft._ |
| `"relay"`                           | Only ICE candidates whose IP addresses are being relayed, such as those being passed through a TURN server, will be considered. |

### RTCPeerConnectionState enum

The `RTCPeerConnectionState` enum defines string constants which describe states in which the `RTCPeerConnection` may be. These values are returned by the {{domxref("RTCPeerConnection.connectionState", "connectionState")}} property. This state essentially represents the aggregate state of all ICE transports (which are of type {{domxref("RTCIceTransport")}} or {{domxref("RTCDtlsTransport")}}) being used by the connection.

| Constant         | Description                                                                                                                                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | At least one of the connection's ICE transports ({{domxref("RTCIceTransport")}}s or {{domxref("RTCDtlsTransport")}}s) are in the `"new"` state, and none of them are in one of the following states: `"connecting"`, `"checking"`, `"failed"`, or `"disconnected"`, _or_ all of the connection's transports are in the `"closed"` state. |
| `"connecting"`   | One or more of the ICE transports are currently in the process of establishing a connection; that is, their `RTCIceConnectionState` is either `"checking"` or `"connected"`, and no transports are in the `"failed"` state. **<<< Make this a link once I know where that will be documented**                                                              |
| `"connected"`    | Every ICE transport used by the connection is either in use (state `"connected"` or `"completed"`) or is closed (state `"closed"`); in addition, at least one transport is either `"connected"` or `"completed"`.                                                                                                                                           |
| `"disconnected"` | At least one of the ICE transports for the connection is in the `"disconnected"` state and none of the other transports are in the state `"failed"`, `"connecting"`, or `"checking"`.                                                                                                                                                                       |
| `"failed"`       | One or more of the ICE transports on the connection is in the `"failed"` state.                                                                                                                                                                                                                                                                             |
| `"closed"`       | The `RTCPeerConnection` is closed.This value was in the [`RTCSignalingState` enum](#RTCSignalingState_enum) (and therefore found by reading the value of the {{domxref("RTCPeerConnection.signalingState", "signalingState")}}) property until the May 13, 2016 draft of the specification.                                          |

### RTCRtcpMuxPolicy enum

The `RTCRtcpMuxPolicy` enum defines string constants which specify what ICE candidates are gathered to support non-multiplexed RTCP. **<<\<add a link to info about multiplexed RTCP.**

| Constant      | Description                                                                                                                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"negotiate"` | Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates. If the remote peer can multiplex RTCP, then RTCP candidates are multiplexed atop the corresponding RTP candidates. Otherwise, both the RTP and RTCP candidates are returned, separately. |
| `"require"`   | Tells the ICE agent to gather ICE candidates for only RTP, and to multiplex RTCP atop them. If the remote peer doesn't support RTCP multiplexing, then session negotiation fails.                                                                                                                     |

### RTCSignalingState enum

The `RTCSignalingState` enum specifies the possible values of {{domxref("RTCPeerConnection.signalingState")}}, which indicates where in the process of signaling the exchange of offer and answer the connection currently is.

| Constant                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"stable"`                          | There is no ongoing exchange of offer and answer underway. This may mean that the {{domxref("RTCPeerConnection")}} object is new, in which case both the {{domxref("RTCPeerConnection.localDescription", "localDescription")}} and {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} are `null`; it may also mean that negotiation is complete and a connection has been established. |
| `"have-local-offer"`                | The local peer has called {{domxref("RTCPeerConnection.setLocalDescription()")}}, passing in SDP representing an offer (usually created by calling {{domxref("RTCPeerConnection.createOffer()")}}), and the offer has been applied successfully.                                                                                                                                                                                        |
| `"have-remote-offer"`               | The remote peer has created an offer and used the signaling server to deliver it to the local peer, which has set the offer as the remote description by calling {{domxref("RTCPeerConnection.setRemoteDescription()")}}.                                                                                                                                                                                                                              |
| `"have-local-pranswer"`             | The offer sent by the remote peer has been applied and an answer has been created (usually by calling {{domxref("RTCPeerConnection.createAnswer()")}}) and applied by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}. This provisional answer describes the supported media formats and so forth, but may not have a complete set of ICE candidates included. Further candidates will be delivered separately later. |
| `"have-remote-pranswer"`            | A provisional answer has been received and successfully applied in response to an offer previously sent and established by calling `setLocalDescription()`.                                                                                                                                                                                                                                                                                                             |
| `"closed"` {{deprecated_inline}} | The connection is closed.This value moved into the [`RTCPeerConnectionState` enum](#RTCPeerConnectionState_enum) in the May 13, 2016 draft of the specification, as it reflects the state of the `RTCPeerConnection`, not the signaling connection. You now detect a closed connection by checking for {{domxref("RTCPeerConnection.connectionState", "connectionState")}} to be `"closed"` instead.                                               |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- <http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple>
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML5 video capture, peer-to-peer video and filesharing application ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
