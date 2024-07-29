---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: 15d7838061736509d08d642611bd26c1251c0500
---

{{APIRef("Broadcast Channel API")}}

**`BroadcastChannel`** 인터페이스는 지정된 {{glossary("origin", "출처")}}의 모든 {{glossary("browsing context", "브라우징 맥락들")}}이 구독할 수 있는 명명된 채널을 나타냅니다. 이 인터페이스를 사용해 동일한 출처의 서로 다른 문서(창, 탭, 프레임 또는 iframe)간에 통신할 수 있습니다. 메시지는 메시지를 전송한 객체를 제외하고, 채널을 수신하는 모든 `BroadcastChannel` 객체에서 실행되는 {{domxref("BroadcastChannel/message_event", "message")}} 이벤트를 통해 전달됩니다.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## 생성자

- {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}
  - : 명명된 채널에 연결되는 객체를 생성합니다.

## 인스턴스 속성

이 인터페이스는 부모인 {{domxref("EventTarget")}}의 속성도 상속합니다.

- {{domxref("BroadcastChannel.name")}} {{ReadOnlyInline}}
  - : 채널 이름 문자열을 반환합니다.

## 인스턴스 메서드

이 인터페이스는 부모인 {{domxref("EventTarget")}}의 속성도 상속합니다.

- {{domxref("BroadcastChannel.postMessage()")}}
  - : 모든 유형의 객체 메시지를 동일한 채널을 수신하는 각 `BroadcastChannel` 객체에 전송합니다.
- {{domxref("BroadcastChannel.close()")}}
  - : 채널 객체를 닫아, 더 이상 새 메시지를 받지 않음을 표시하고 가비지 컬렉션으로 처리되도록 합니다.

## 이벤트

- [`message`](/ko/docs/Web/API/BroadcastChannel/message_event)
  - : 채널에 메세지가 도착 시 발생합니다. `onmessage` 속성을 통해서도 사용할 수 있습니다.
- [`messageerror`](/ko/docs/Web/API/BroadcastChannel/messageerror_event)
  - : 역직렬화할 수 없는 메시지가 도착하면 발생합니다. `onmessageerror` 속성을 통해서도 사용할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 브라우저 맥락 간에 통신하는 다른, 더 무거운 방법, {{domxref("ServiceWorker")}}
- [Broadcast Channel API 개요](/ko/docs/Web/API/Broadcast_Channel_API)
