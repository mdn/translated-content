---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
translation_of: Web/API/RTCIceCandidate
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

Das **`RTCIceCandidate`** Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen Kandidaten für einen Internet Connectivity Establishment (ICE) Server, welcher eine {{domxref("RTCPeerConnection")}} herstellt.

## Konstruktoren

- {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}
  - : Erstellt ein `RTCIceCandidate` Objekt.

## Properties

- {{domxref("RTCIceCandidate.candidate")}} {{readonlyInline}}
  - : Ein {{domxref("DOMString")}}, der die Transportadresse für den Kadidaten repräsentiert, welche zur Konnektivitätsprüfung verwendet werden kann. Das Format der Adresse ist ein `candidate-attribute`, wie in {{RFC(5245)}} definiert. Dieser String ist leer (`""`), wenn der `RTCIceCandidate` einen "end of candidates" Indikator repräsentiert.
- {{domxref("RTCIceCandidate.foundation")}} {{readonlyInline}}
  - : Gibt einen eindeutigen Identifikator zurück, der es dem ICE erlaubt, Kandidaten, die in mehreren {{domxref("RTCIceTransport")}} Objekten vorhanden sind, in Beziehung zu setzen.
- {{domxref("RTCIceCandidate.ip")}} {{readonlyInline}}
  - : Gibt die IP-Adresse des Kandidaten zurück.
- {{domxref("RTCIceCandidate.port")}} {{readonlyInline}}
  - : Gibt den Port des Kandidaten zurück.
- {{domxref("RTCIceCandidate.priority")}} {{readonlyInline}}
  - : Gibt die zugewiesene Priorität des Kandidaten zurück.
- {{domxref("RTCIceCandidate.protocol")}} {{readonlyInline}}
  - : Gibt das vom Kandidaten verwendete Protokoll zurück, entweder TCP oder UDP.
- {{domxref("RTCIceCandidate.relatedAddress")}} {{readonlyInline}}
  - : Für einen Kandidaten, welcher von einem anderen abgeleitet ist, wie etwa ein Relay- oder Reflexivkandidat, ist _`relatedAddress`_ die IP-Adresse des Kandidaten, von dem er abgeleitet ist. Für Hostkandidaten ist sie `null`.
- {{domxref("RTCIceCandidate.relatedPort")}} {{readonlyInline}}
  - : Für einen Kandidaten, welcher von einem anderen abgeleitet ist, wie etwa ein Relay- oder Reflexivkandidat, ist _`relatedPort`_ der Port des Kandidaten, von dem er abgeleitet ist. Für Hostkandidaten ist er `null`.
- {{domxref("RTCIceCandidate.sdpMid")}} {{readonlyInline}}
  - : Enthält, wenn nicht `null`, den Identifikator der "media stream identification" (wei definiert in [RFC 5888](https://tools.ietf.org/html/rfc5888)) für die Medienkomponente, zu der dieser Kandidat zugeordnet ist.
- {{domxref("RTCIceCandidate.sdpMLineIndex")}} {{readonlyInline}}
  - : Enthält, wenn nicht `null`, den Index (beginnend bei 0) der Medienbeschreibung (wie definiert in [RFC 4566](https://tools.ietf.org/html/rfc4566)) im SDP, dem dieser Kandidat zugeordnet ist.
- {{domxref("RTCIceCandidate.tcpType")}} {{readonlyInline}}
  - : Wenn `protocol` den Wert `tcp` enthält, dann repräsentiert `tcpType` den Typ des TCP Kandidats. Ansonsten enthält `tcpType` den Wert `null`.
- {{domxref("RTCIceCandidate.type")}} {{readonlyInline}}
  - : Einer aus `host`, `srflx`, `prflx`, oder `relay`.

## Specifications

| Specification                                                                                        | Status                           | Comment              |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('WebRTC 1.0', '#rtcicecandidate-interface', 'RTCIceCandidate')}} | {{Spec2('WebRTC 1.0')}} | Initiale definition. |

## Browser compatibility

{{Compat}}
