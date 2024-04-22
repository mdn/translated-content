---
title: MessageEvent
slug: Web/API/MessageEvent
---

{{APIRef("HTML DOM")}}

**`MessageEvent`** 는 {{domxref("WebSocket")}} 또는 WebRTC {{domxref("RTCDataChannel")}} 으로 된 타겟으로 부터 전달받은 메시지를 보여주는 interface 입니다.

이 이벤트는 {{domxref("WebSocket.onmessage")}} 또는 {{domxref("RTCDataChannel.onmessage")}} 으로 설정된 이벤트 핸들러를 통해 실행이 되게 됩니다.

{{AvailableInWorkers}}

## 생성자

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : 새로운 `MessageEvent를 생성합니다.`

## 속성

_이 interface는 부모 객체인 {{domxref("Event")}}의 속성을 상속받습니다._

- {{domxref("MessageEvent.data")}} {{ReadonlyInline}}
  - : emitter에 의해 보내진 데이터인 {{domxref("DOMString")}}, {{domxref("Blob")}} 또는 {{domxref("ArrayBuffer")}}를 포함합니다.
- {{domxref("MessageEvent.origin")}}
  - : {{domxref("DOMString")}} 입니다.…
- {{domxref("MessageEvent.ports")}}
  - : …
- {{domxref("MessageEvent.source")}}
  - : …

## 메서드

_이 interface는 부모 객체인 {{domxref("Event")}}의 메서드를 상속받습니다._

- {{domxref("MessageEvent.initMessageEvent()")}} {{deprecated_inline}}
  - : … **더 이상 사용하지 마십시오**
    : {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} 생성자를 대신 사용하십시오.

## Browser 호환성

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}}, 와 유사한 interface이며, 개발자에게 더 유연성을 제공하기 위해 사용되는 interface 입니다.
- [WebSocket API](/ko/docs/Web/API/WebSocket_API)
- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
