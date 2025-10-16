---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

**`BeforeUnloadEvent`** 인터페이스는 {{domxref("Window/beforeunload_event", "beforeunload")}} 이벤트의 이벤트 객체를 나타냅니다. 이 이벤트는 현재 창과 그 안에 포함된 문서 및 관련 리소스가 언로드되기 직전에 발생합니다.

이 이벤트를 사용하는 방법에 대한 자세한 안내는 {{domxref("Window/beforeunload_event", "beforeunload")}} 이벤트 참고서를 확인하세요.

{{InheritanceDiagram}}

## 속성

부모인 {{DOMxRef("Event")}}로부터 속성을 상속받습니다.

- {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} {{Deprecated_Inline}}
  - : [참 같은 값(Truthy)](/ko/docs/Glossary/Truthy) 값으로 설정하면, 사용자가 페이지를 닫거나 새로 고치려고 할 때 페이지를 떠나겠는지 확인하는 브라우저 제어 확인 대화 상자가 표시됩니다. 이 방식은 레거시 기능으로 권장되는 방법은 `event.preventDefault()` 를 호출하여 대화 상자를 트리거하는 동시에 레거시 환경 호환을 위해 `returnValue` 도 함께 설정하는 것입니다.

## 메서드

부모인 {{DOMxRef("Event")}}로부터 메서드를 상속받습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window/beforeunload_event", "beforeunload")}} 이벤트
