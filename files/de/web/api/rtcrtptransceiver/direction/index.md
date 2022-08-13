---
title: RTCRtpTransceiver.direction
slug: Web/API/RTCRtpTransceiver/direction
tags:
  - API
  - Attribut
  - RTCRtpTransceiver
  - RTP
  - Richtung
  - Transceiver
  - Transceiver Richtung
  - WebRTC
  - direction
translation_of: Web/API/RTCRtpTransceiver/direction
---
{{APIRef("WebRTC")}}

Das {{domxref("RTCRtpTransceiver")}} **`direction`** Attribut gibt als String die bevorzugte Transceiver-Richtung an. Es muss sich hierbei um einen Wert des {{domxref("RTCRtpTransceiverDirection")}} Enum handeln.

Die tatsächliche, aktuelle Richtung des Transceivers kann über das {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} Attribut abgelesen werden.

## Syntax

    var direction = RTCRtpTransceiver.direction

### Value

Ein {{domxref("DOMString")}}, dessen Wert einem Wert des `RTCRtpTransceiverDirection` Enum / Aufzählungstypen entspricht und die bevorzugte Transceiver-Richtung angibt. {{page("/en-US/docs/Web/API/RTCRtpTransceiverDirection", "Values")}}

### Exceptions

Wird der `direction` Wert eines Transceivers gesetzt, können folgende Fehler auftreten:

- `InvalidStateError`
  - : Der Receiver des Transceivers {{domxref("RTCPeerConnection")}} wurde bereits geschlossen und befindet sich nun im `closed` Zustand oder der {{domxref("RTCRtpReceiver")}} wurde gestoppt und befinet sich im `stopped` Zustand.

## Hinweise zur Nutzung

### Ändern der Übertragungsrichtung

Wird der Wert des `direction` Attributes geändert, wird eine `InvalidStateError` Ausnahme geworfen, insofern die RTCPeerConnection bereits geschlossen wurde oder aber der jeweils betroffene Receiver oder Sender bereits gestoppt wurde.

Wenn der neu gesetzte Wert für `direction` sich vom aktuellen Wert unterscheidet, muss die Übertragung mit dem Peer neu verhandelt werden, es wird also ein {{event("negotiationneeded")}} Event auf der {{domxref("RTCPeerConnection")}} ausgelöst.

### Transceiver-Richtung in SDP

Der `direction` Wert wird von {{domxref("RTCPeerConnection.createOffer()")}} bzw. {{domxref("RTCPeerConnection.createAnswer()")}} genutzt, um die entsprechenden SDP-Nachrichten zu generieren. SDP stellt die Richtung über eine Attribut-Zeile (a-line) dar. Wenn die Richtung des Transceivers als `"sendrecv"` definiert wurde, so enthält die hierzu erzeugte SDP-Nachricht folgende Attribut-Zeile:

    a=sendrecv

## Specifications

| Specification                                                                                                                | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName("WebRTC 1.0", "#dom-rtcrtptransceiver-direction", "RTCRtpTransceiver.direction")}} | {{Spec2("WebRTC 1.0")}} |         |

## Browser compatibility

{{Compat("api.RTCRtpTransceiver.direction")}}

## See also

- {{domxref("RTCRtpTransceiver.currentDirection")}}
