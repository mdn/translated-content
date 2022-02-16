---
title: CustomEvent
slug: Web/API/CustomEvent
tags:
  - Interface
  - Reference
browser-compat: api.CustomEvent
translation_of: Web/API/CustomEvent
---
{{APIRef("DOM")}}

**`CustomEvent`** 인터페이스는 어떤 목적이든간에 애플리케이션이 초기화한 이벤트를 나타냅니다.

{{AvailableInWorkers}}

## 생성자

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : 새로운 `CustomEvent`를 생성합니다.

## 속성

부모 인터페이스인 {{domxref("Event")}}의 속성을 상속합니다.

- {{domxref("CustomEvent.detail")}} {{readonlyinline}}
  - : 이벤트를 초기화할 때 제공한 임의의 데이터입니다.

## 메서드

부모 인터페이스인 {{domxref("Event")}}의 메서드를 상속합니다.

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : `CustomEvent` 객체를 초기화합니다. 이미 발송한 이벤트에서는 아무 동작도 하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window.postMessage()")}}
- [이벤트 생성 및 발동](/ko/docs/Web/Events/Creating_and_triggering_events)
