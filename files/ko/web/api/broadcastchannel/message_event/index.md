---
title: message
slug: Web/API/BroadcastChannel/message_event
translation_of: Web/API/BroadcastChannel/message_event
original_slug: Web/Events/message
---
메시지 이벤트는 메시지가 수신되었음을 알리는 메시지, {{domxref("WebSocket")}}, {{domxref("RTCDataConnection")}} 또는 {{domxref("BroadcastChannel")}} 개체를 알려 줍니다.

대상이 {{domxref("RTCDataConnection")}}, 인 경우 이 이벤트에 대한 이벤트 핸들러를 {{domxref("RTCDataConnection.onmessage")}}속성을 통해 추가할 수 있습니다.

대상이 {{domxref("BroadcastChannel")}}인 경우, 이 이벤트에 대한 이벤트 핸들러를 {{domxref("BroadcastChannel.onmessage")}} 속성을 통해 추가할 수 있습니다.

## 일반 정보

<dl><dt style="width: 120px; text-align: right; float: left;">인터페이스</dt></dl>

<dl><dd style="margin: 0px 0px 0px 120px;">{{domxref("MessageEvent")}}</dd><dt style="width: 120px; text-align: right; float: left;">Bubbles</dt><dd style="margin: 0px 0px 0px 120px;">No</dd><dt style="width: 120px; text-align: right; float: left;">Cancelable</dt><dd style="margin: 0px 0px 0px 120px;">No</dd><dt style="width: 120px; text-align: right; float: left;">Target</dt><dd style="margin: 0px 0px 0px 120px;">{{domxref("RTCDataChannelEvent")}}, {{domxref("WebSocket")}}, {{domxref("BroadcastChannel")}}</dd><dt style="width: 120px; text-align: right; float: left;">Default Action</dt><dd style="margin: 0px 0px 0px 120px;">None</dd></dl>

## 특성

*{{domxref("Event")}}*가 진행되는 동안 _{{domxref("MessageEvent")}}_ 이러한 속성을 구현합니다.

- `data` {{readOnlyInline}}
  - : 수신된 메시지를 포함하는 {{domxref("DOMString")}} 가 있습니다.

## 방법

*{{domxref("Event")}}*가 진행되는 동안 _{{domxref("MessageEvent")}}_ 이러한 속성을 구현합니다.

## 관련 자료

- {{event("open")}}, {{event("close")}}.

## 사양

| 사양                                                                                                                 | 상황                             | Comment                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('WebRTC 1.0', '#event-datachannel-message', 'message on RTCDataChannel') }} | {{Spec2('WebRTC 1.0')}} | {{domxref("RTCDataChannel")}} 를 {{domxref("EventTarget")}}로 추가하고 이 이벤트가 전송될 시기를 정의합니다. |
| {{SpecName('HTML WHATWG', '#', 'message on BroadcastChannel')}}                                 | {{Spec2('HTML WHATWG')}} | {{domxref("RTCDataChannel")}} 를 {{domxref("EventTarget")}}로 추가하고 이 이벤트가 전송될 시기를 정의합니다. |

## 브라우저 호환성

{{Compat}}

## 보기

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- BroadcastChannel API
- WebSockets
