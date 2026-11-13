---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 2fe2c9fcafa53cd6d96bd6061778cc64151c0784
---

{{APIRef("UI Events")}}

**`UIEvent`** 인터페이스는 간단한 사용자 인터페이스 이벤트를 나타냅니다.

`UIEvent`는 {{domxref("Event")}}를 상속합니다. 하위 호환을 유지하기 위해 {{domxref("UIEvent.initMouseEvent()")}} 메서드가 사라지지는 않았지만, `UIEvent` 객체의 생성은 {{domxref("UIEvent.UIEvent", "UIEvent()")}} 생성자로 해야 합니다.

{{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}}, {{domxref("CompositionEvent")}} 인터페이스가 `UIEvent`를 직접 또는 간접적으로 상속합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : `UIEvent` 객체를 생성합니다.

## 인스턴스 속성

{{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : 이벤트에 관련된 세부사항을 나타내는 `long`을 반환합니다. 정확한 정보는 이벤트 유형에 따라 다릅니다.
- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : `InputDeviceCapabilities` 인터페이스를 반환합니다. 터치 이벤트를 생성하는 물리적 장치에 대한 정보를 담고 있습니다.
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : 이벤트를 생성한 뷰를 담은 {{glossary("WindowProxy")}}를 반환합니다.
- {{domxref("UIEvent.which")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 입력한 숫자 `keyCode`, 또는 알파벳 키의 경우 문자 코드(`charCode`)를 반환합니다.

## 인스턴스 메서드

{{domxref("Event")}} 인터페이스의 메서드를 상속합니다.

- {{domxref("UIEvent.initUIEvent()")}} {{Deprecated_Inline}}
  - : `UIEvent` 객체를 초기화합니다. 이미 발송한 이벤트에서는 아무 동작도 하지 않습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [이벤트 입문](/ko/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}}
