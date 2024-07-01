---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 1732201134d732af9bfd49ee9e10f7e2086cc783
---

{{ APIRef("Pointer Events") }}

**`PointerEvent`** 인터페이스는 포인터에 의해 발생한 DOM 이벤트의 상태, 즉 접촉점의 위치와 크기, 이벤트를 유발한 장치의 유형, 접촉면에 가해진 압력 등을 나타냅니다.

"포인터"란 화면과 같은 접촉면 상의 한 좌표 또는 좌표들을 조준할 수 있는 입력 장치를 통칭하며 특정 하드웨어로 제한되지 않습니다. 마우스, 펜, 터치 접촉점 등은 모두 포인터 장치입니다.

포인터의 "적중 테스트"는 브라우저가 포인터 이벤트의 대상 요소를 결정하는 과정입니다. 보통 포인터의 위치 외에도 화면 매체 상의 문서에서 요소가 차지하는 시각적 레이아웃도 고려합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : 신뢰되지 않는 인공 `PointerEvent`를 생성합니다.

## 인스턴스 속성

{{domxref("MouseEvent")}}와 {{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{ domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : 이벤트를 유발한 포인터의 고유 식별자입니다.
- {{ domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : 포인터 접촉점의 너비(X축 크기)를 CSS 픽셀 단위로 나타낸 값입니다.
- {{ domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : 포인터 접촉점의 높이(Y축 크기)를 CSS 픽셀 단위로 나타낸 값입니다.
- {{ domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 포인터 입력의 압력을 `0`부터 `1`까지의 범위로 정규화한 값입니다. `0`과 `1`은 각각 포인터 하드웨어가 감지할 수 있는 최소와 최대 압력을 나타냅니다.
- {{ domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : 포인터 입력의 접선 압력(tangential pressure, barrel pressure 또는 [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress))을 `-1`부터 `1`까지의 범위로 정규화한 값입니다. `0`이 컨트롤의 정위치를 나타냅니다.
- {{ domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : 포인터(펜 스타일러스 등)의 주축과 Y축이 이루는 평면과 Y-Z 평면 사이의 각입니다. `-90`도부터 `90`도의 범위를 가집니다.
- {{ domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : 포인터(펜 스타일러스 등)의 주축과 X축이 이루는 평면과 X-Z 평면 사이의 각입니다. `-90`도부터 `90`도의 범위를 가집니다.
- {{ domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : 포인터(펜 스타일러스 등)의 주축 기준 시계 방향 회전입니다. `0`도부터 `359`도의 범위를 가집니다.
- {{ domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : 이벤트를 유발한 장치 유형(마우스, 펜, 터치 등)을 나타냅니다.
- {{ domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : 이 포인터가 해당 장치 유형에서의 주 포인터인지 나타냅니다.

## 인스턴스 메서드

- {{DOMxRef('PointerEvent.getCoalescedEvents()')}}
  - : 발송된 {{domxref("Element/pointermove_event", "pointermove")}}에 병합된 모든 `PointerEvent` 인스턴스들의 시퀀스를 반환합니다.
- {{DOMxRef('PointerEvent.getPredictedEvents()')}}
  - : 발송된 {{domxref("Element/pointermove_event", "pointermove")}}에 병합된 이벤트들에 기반해 브라우저가 예측한 다음 `PointerEvent` 인스턴스들의 시퀀스를 반환합니다.

## 포인터 이벤트 유형

`PointerEvent` 인터페이스에는 여러 이벤트 유형이 있습니다. 어떤 유형인지는 이벤트의 {{domxref("Event.type", "type")}} 속성으로 알 수 있습니다.

> **참고:** 대부분의 경우, 비 포인터 이벤트 코드도 사용자와 상호작용할 수 있도록 포인터와 마우스 이벤트가 같이 발생한다는 점을 기억해야 합니다. 포인터 이벤트를 사용할 경우, {{ domxref("event.preventDefault()") }}로 마우스 이벤트의 발생을 막으세요.

- {{domxref('Element/pointerover_event', 'pointerover')}}
  - : 포인터가 요소의 적중 테스트 경계 내로 들어오면 발생합니다.
- {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - : 포인터가 요소 또는 요소 자손의 적중 테스트 경계 내로 들어오면 발생합니다. 호버를 지원하지 않는 장치(`pointerdown`을 참고하세요)에서의 `pointerdown` 이벤트 결과로도 발생합니다. `pointerover`와 유사하지만 이 이벤트는 버블링하지 않습니다.
- {{domxref('Element/pointerdown_event', 'pointerdown')}}

  - : 포인터가 "활성" 상태가 되면 발생합니다. 마우스에 있어서 활성은 장치의 버튼이 아무것도 눌리지 않은 상태에서 적어도 한 개의 버튼이 눌린 상태로 전환될 때입니다. 터치에서는 디지타이저와 물리적 접촉을 할 때고, 펜에서는 스타일러스가 디지타이저와 물리적 접촉을 할 때입니다.

    > **참고:** [직접 조작](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)을 지원하는 터치 화면 브라우저에서는 `pointerdown` 이벤트가 [암시적인 포인터 포획](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)을 유발하여 이후 발생하는 모든 포인터 이벤트가 대상에게 포획됩니다. 포획된 이벤트들은 포획 대상의 위에서 발생하는 것처럼 취급합니다. 따라서 포획 중에는 `pointerover`, `pointerenter`, `pointerleave`, `pointerout`이 **발생하지 않습니다**. 포인터 포획은 대상 요소의 {{domxref('element.releasePointerCapture')}}를 직접 호출해서 해제할 수도 있고, `pointerup`이나 `pointercancel` 이벤트가 발생하면 암시적으로 해제됩니다.

- {{domxref('Element/pointermove_event', 'pointermove')}}
  - : 포인터가 좌표를 바꾸면 발생합니다.
- {{domxref('HTMLElement/pointerrawupdate_event', 'pointerrawupdate')}} {{Experimental_Inline}}
  - : 포인터의 속성이 바뀌면 발생합니다.
- {{domxref('Element/pointerup_event', 'pointerup')}}
  - : 포인터가 더 이상 "활성" 상태가 아니면 발생합니다.
- {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - : 장치가 비활성화되는 등, 포인터가 더는 이벤트를 생성할 수 없다고 여겨지면 브라우저가 이 이벤트를 발송합니다.
- {{domxref('Element/pointerout_event', 'pointerout')}}
  - : 포인터 장치가 요소의 적중 테스트 경계 밖으로 나갔거나, 호버를 지원하지 않는 장치(`pointerup`을 참고하세요)에서 `pointerup` 이벤트가 발생했거나, `pointercancel` 이벤트가 발생했거나(`pointercancel`을 참고하세요), 펜 스타일러스가 디지타이저의 감지 범위 밖으로 나가는 등 여러 이유로 발생합니다.
- {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - : 포인터 장치가 요소의 적중 테스트 경계 밖으로 나가면 발생합니다. 펜형 장치에서는 스타일러스가 디지타이저의 감지 범위 밖으로 나갈 때도 발생합니다.
- {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - : 요소가 포인터 포획 대상이 되면 발생합니다.
- {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - : 포인터에 대한 포획이 해제되면 발생합니다.

## 예제

각 속성, 이벤트 유형, 전역 이벤트 처리기의 참고서 페이지에서 예제를 확인할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [터치 이벤트](/ko/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
- {{cssxref("touch-action")}}
