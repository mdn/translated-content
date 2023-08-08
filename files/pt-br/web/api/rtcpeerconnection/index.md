---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
---

{{APIRef('WebRTC')}}

A interface **`RTCPeerConnection`** cria uma conexão WebRTC entre um computador local e um ponto remoto. Esta interface fornece métodos que possibilitam a conexão a um ponto remoto, mantendo e monitorando a conexão, e fechando-a quando não for mais necessária.

{{InheritanceDiagram}}

### Método obsoleto

O método a seugir está obsoleto há muito tempo e nunca foi implementado nos principais navegadores.

- {{domxref("RTCPeerConnection.createDTMFSender()")}}
  - : Cria um novo {{domxref("RTCDTMFSender")}},associado ao específico {{domxref("MediaStreamTrack")}}, que irá permitir enviar {{Glossary("DTMF")}} sinal de telefone pela conexão

## Eventos

Monitore esses eventos utilizando {{domxref("EventTarget.addEventListener", "addEventListener()")}} ou atribuindo um ouvinte de evento à propriedade oneventname dessa interface.

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : Enviado ao objeto RTCPeerConnection quando o status de conectividade geral do RTCPeerConnection é alterado.
    Também disponível através da propriedade do manipulador de eventos {{domxref ("RTCPeerConnection.onconnectionstatechange", "onconnectionstatechange")}}.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Sent to the `RTCPeerConnection` object when the remote peer adds an {{domxref("RTCDataChannel")}} to the connection.
    Also available through the {{domxref("RTCPeerConnection.ondatachannel", "ondatachannel")}} event handler property.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Sent to the object when a new ICE candidate arrives during negotiation.
    Also available using the {{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}} event handler property.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Sent to the `RTCPeerConnection` when the state of the ICE connection changes, such as when it disconnects.
    Also available using the {{domxref("RTCPeerConnection.oniceconnectionstatechange", "oniceconnectionstatechange")}} event handler property.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Sent to the `RTCPeerConnection` when it's time to perform ICE negotiation. This can happen both when first opening a connection as well as any time it's necessary to adapt to changing network conditions.
    Also available using the {{domxref("RTCPeerConnection.onnegotiationneeded", "onnegotiationneeded")}} event handler property.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Sent to the peer connection to request that the specified candidate be transmitted to the remote peer.
    Also available through the {{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}} event handler property.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Sent to the `RTCPeerConnection` when negotiation or renegotiation of the ICE connection needs to be performed. The receiver should respond by creating an offer and sending it to the other peer.
    Also available as the {{domxref("RTCPeerConnection.onnegotiationneeded", "onnegotiationneeded")}} event handler property.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : The `signalingstatechange` event is sent to the `RTCPeerConnection` when the connection's ICE signaling state changes.
    Also available through the {{domxref("RTCPeerConnection.onsignalingstatechange", "onsignalingstatechange")}} event handler property.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : The `track` event is sent after a new track has been added to one of the {{domxref("RTCRtpReceiver")}} instances which comprise the connection.
    Available as the {{domxref("RTCPeerConnection.ontrack", "ontrack")}} event handler property.

### Obsolete events

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}}
  - : Sent when a new {{domxref("MediaStream")}} has been added to the connection. Instead of watching for this obsolete event, you should watch each for {{domxref("RTCPeerConnection.track_event", "track")}} events; one is sent for each {{domxref("MediaStreamTrack")}} added to the connection.
    Available as the {{domxref("RTCPeerConnection.onaddstream", "onaddstream")}} event handler property.
- {{domxref("RTCPeerConnection.identityresult_event", "identityresult")}}
  - : In old versions of the WebRTC specification, this event was used to indicate that an identity assertion is available. Now, you should instead wait for a the promise returned by {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} to resolve with an identity.
    Also available using the {{domxref("RTCPeerConnection.onidentityresult", "onidentityresult")}} event handler property.
- {{domxref("RTCPeerConnection.idpassertionerror_event", "idpassertionerror")}}
  - : In old versions of the WebRTC specification, this event was used to indicate that an error occurred while attempting to generate an identity assertion. Now, you should instead wait for a the promise returned by {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} to be rejected with an error.
    Also available as the {{domxref("RTCPeerConnection.onidpassertionerror", "onidpinsertionerror")}} event handler property.
- {{domxref("RTCPeerConnection.idpvalidationerror_event", "idpvalidationerror")}}
  - : In old versions of the WebRTC specification, this event was used to indicate that an error occurred while attempting to validate an identity assertion. Now, you should instead wait for a the promise returned by {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} to be rejected with an error.
    Also available using the {{domxref("RTCPeerConnection.onpeeridentity", "onpeerdentity")}} event handler property.
- {{domxref("RTCPeerConnection.peeridentity_event", "peeridentity")}}
  - : In old versions of the WebRTC specification, this event was used to deliver a received identity. Now, you should instead wait for a the promise returned by {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} to resolve with an identity.
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}}
  - : Sent to the `RTCPeerConnection` when a {{domxref("MediaStream")}} is removed from the connection. Instead of watching for this obsolete event, you should watch each stream for {{domxref("MediaStream.removetrack_event", "removetrack")}} events on each stream within the `RTCPeerConnection`.
    Also available as the {{domxref("RTCPeerConnection.onremovestream", "onaddstream")}} event handler property.

## Constants

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

| Constant         | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | The ICE agent is gathering addresses or is waiting to be given remote candidates through calls to {{domxref("RTCPeerConnection.addIceCandidate()")}} (or both).                                                                                                                                                                                                                                |
| `"checking"`     | The ICE agent has been given one or more remote candidates and is checking pairs of local and remote candidates against one another to try to find a compatible match, but has not yet found a pair which will allow the peer connection to be made. It's possible that gathering of candidates is also still underway.                                                                        |
| `"connected"`    | A usable pairing of local and remote candidates has been found for all components of the connection, and the connection has been established. It's possible that gathering is still underway, and it's also possible that the ICE agent is still checking candidates against one another looking for a better connection to use.                                                               |
| `"completed"`    | The ICE agent has finished gathering candidates, has checked all pairs against one another, and has found a connection for all components.                                                                                                                                                                                                                                                     |
| `"failed"`       | The ICE candidate has checked all candidates pairs against one another and has failed to find compatible matches for all components of the connection. It is, however, possible that the ICE agent did find compatible connections for some components.                                                                                                                                        |
| `"disconnected"` | Checks to ensure that components are still connected failed for at least one component of the {{domxref("RTCPeerConnection")}}. This is a less stringent test than `"failed"` and may trigger intermittently and resolve just as spontaneously on less reliable networks, or during temporary disconnections. When the problem resolves, the connection may return to the `"connected"` state. |
| `"closed"`       | The ICE agent for this {{domxref("RTCPeerConnection")}} has shut down and is no longer handling requests.                                                                                                                                                                                                                                                                                      |

### RTCIceGatheringState enum

The `RTCIceGatheringState` enum defines string constants which reflect the current status of ICE gathering, as returned using the {{domxref("RTCPeerConnection.iceGatheringState")}} property. You can detect when this value changes by watching for an event of type {{event("icegatheringstatechange")}}.

| Constant      | Description                                                                                                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`       | The peer connection was just created and hasn't done any networking yet.                                                                                                                                                                                 |
| `"gathering"` | The ICE agent is in the process of gathering candidates for the connection.                                                                                                                                                                              |
| `"complete"`  | The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to "gathering" to gather those candidates. |

### RTCIceTransportPolicy enum

The `RTCIceTransportPolicy` enum defines string constants which can be used to limit the transport policies of the ICE candidates to be considered during the connection process.

| Constant   | Description                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `"all"`    | All ICE candidates will be considered.                                                                                          |
| `"public"` | Only ICE candidates with public IP addresses will be considered. _Removed from the specification's May 13, 2016 working draft._ |
| `"relay"`  | Only ICE candidates whose IP addresses are being relayed, such as those being passed through a TURN server, will be considered. |

### RTCPeerConnectionState enum

The `RTCPeerConnectionState` enum defines string constants which describe states in which the `RTCPeerConnection` may be. These values are returned by the {{domxref("RTCPeerConnection.connectionState", "connectionState")}} property. This state essentially represents the aggregate state of all ICE transports (which are of type {{domxref("RTCIceTransport")}} or {{domxref("RTCDtlsTransport")}}) being used by the connection.

| Constant         | Description                                                                                                                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | At least one of the connection's ICE transports ({{domxref("RTCIceTransport")}}s or {{domxref("RTCDtlsTransport")}}s) are in the `"new"` state, and none of them are in one of the following states: `"connecting"`, `"checking"`, `"failed"`, or `"disconnected"`, _or_ all of the connection's transports are in the `"closed"` state. |
| `"connecting"`   | One or more of the ICE transports are currently in the process of establishing a connection; that is, their `RTCIceConnectionState` is either `"checking"` or `"connected"`, and no transports are in the `"failed"` state. **<<< Make this a link once I know where that will be documented**                                           |
| `"connected"`    | Every ICE transport used by the connection is either in use (state `"connected"` or `"completed"`) or is closed (state `"closed"`); in addition, at least one transport is either `"connected"` or `"completed"`.                                                                                                                        |
| `"disconnected"` | At least one of the ICE transports for the connection is in the `"disconnected"` state and none of the other transports are in the state `"failed"`, `"connecting"`, or `"checking"`.                                                                                                                                                    |
| `"failed"`       | One or more of the ICE transports on the connection is in the `"failed"` state.                                                                                                                                                                                                                                                          |
| `"closed"`       | The `RTCPeerConnection` is closed.This value was in the [`RTCSignalingState` enum](#RTCSignalingState_enum) (and therefore found by reading the value of the {{domxref("RTCPeerConnection.signalingState", "signalingState")}}) property until the May 13, 2016 draft of the specification.                                              |

### RTCRtcpMuxPolicy enum

The `RTCRtcpMuxPolicy` enum defines string constants which specify what ICE candidates are gathered to support non-multiplexed RTCP. **<<\<add a link to info about multiplexed RTCP.**

| Constant      | Description                                                                                                                                                                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"negotiate"` | Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates. If the remote peer can multiplex RTCP, then RTCP candidates are multiplexed atop the corresponding RTP candidates. Otherwise, both the RTP and RTCP candidates are returned, separately. |
| `"require"`   | Tells the ICE agent to gather ICE candidates for only RTP, and to multiplex RTCP atop them. If the remote peer doesn't support RTCP multiplexing, then session negotiation fails.                                                                                                        |

### RTCSignalingState enum

The `RTCSignalingState` enum specifies the possible values of {{domxref("RTCPeerConnection.signalingState")}}, which indicates where in the process of signaling the exchange of offer and answer the connection currently is.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"stable"</code></td>
      <td>
        There is no ongoing exchange of offer and answer underway. This may mean
        that the {{domxref("RTCPeerConnection")}} object is new, in
        which case both the
        {{domxref("RTCPeerConnection.localDescription", "localDescription")}}
        and
        {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}
        are <code>null</code>; it may also mean that negotiation is complete and
        a connection has been established.
      </td>
    </tr>
    <tr>
      <td><code>"have-local-offer"</code></td>
      <td>
        The local peer has called
        {{domxref("RTCPeerConnection.setLocalDescription()")}},
        passing in SDP representing an offer (usually created by calling
        {{domxref("RTCPeerConnection.createOffer()")}}), and the
        offer has been applied successfully.
      </td>
    </tr>
    <tr>
      <td><code>"have-remote-offer"</code></td>
      <td>
        The remote peer has created an offer and used the signaling server to
        deliver it to the local peer, which has set the offer as the remote
        description by calling
        {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
      </td>
    </tr>
    <tr>
      <td><code>"have-local-pranswer"</code></td>
      <td>
        The offer sent by the remote peer has been applied and an answer has
        been created (usually by calling
        {{domxref("RTCPeerConnection.createAnswer()")}}) and
        applied by calling
        {{domxref("RTCPeerConnection.setLocalDescription()")}}.
        This provisional answer describes the supported media formats and so
        forth, but may not have a complete set of ICE candidates included.
        Further candidates will be delivered separately later.
      </td>
    </tr>
    <tr>
      <td><code>"have-remote-pranswer"</code></td>
      <td>
        A provisional answer has been received and successfully applied in
        response to an offer previously sent and established by calling
        <code>setLocalDescription()</code>.
      </td>
    </tr>
    <tr>
      <td><code>"closed"</code></td>
      <td>
        <p>A conexão é fechada.</p>
        <div class="note">
          <p>
            <strong>Note:</strong> This value moved into the
            <a href="#RTCPeerConnectionState_enum"
              ><code>RTCPeerConnectionState</code> enum</a
            >
            in the May 13, 2016 draft of the specification, as it reflects the
            state of the <code>RTCPeerConnection</code>, not the signaling
            connection. You now detect a closed connection by checking for
            {{domxref("RTCPeerConnection.connectionState", "connectionState")}}
            to be <code>"closed"</code> instead.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- <http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple>
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML5 video capture, peer-to-peer video and filesharing application ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
