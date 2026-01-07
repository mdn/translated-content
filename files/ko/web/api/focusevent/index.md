---
title: FocusEvent
slug: Web/API/FocusEvent
l10n:
  sourceCommit: c45b0cf22b34da74660e7ca95140eff5ab2577d5
---

{{APIRef("UI Events")}}

**`FocusEvent`** 인터페이스는 {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}} 및 {{domxref("Element/focusout_event", "focusout")}} 를 포함한 포커스와 연관이 있는 이벤트를 나타냅니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : 주어진 파라미터로 `FocusEvent` 이벤트를 생성합니다.

## 인스턴스 속성

이 인터페이스는 부모로부터 {{domxref("UIEvent")}}, 간접적으로 {{domxref("Event")}} 를 상속받습니다.

- {{domxref("FocusEvent.relatedTarget")}}
  - : 이 이벤트의 보조 대상을 나타내는 {{domxref("EventTarget")}}입니다. 일부 경우(예: 페이지 안팎으로 탭 이동 시)에는 보안상의 이유로 이 속성이 `null` 로 설정될 수 있습니다.

## 인스턴스 메서드

이 인터페이스는 특정한 메서드가 없습니다. 부모로부터 {{domxref("UIEvent")}}, 간접적으로 {{domxref("Event")}} 를 상속받습니다.

## 이벤트 순서

포커스가 요소 A 에서 요소 B로 이동할 때, 포커스 이벤트는 다음 순서에 의해 전파됩니다.

1. `blur`: 요소 A가 포커스를 잃은 후 전달됩니다.
2. `focusout`: `blur` 이벤트 이후 전달됩니다.
3. `focus`: 요소 B가 포커스를 받은 후 전달됩니다.
4. `focusin`: `focus` 이벤트 이후 전달됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Event")}} 기본 인터페이스
