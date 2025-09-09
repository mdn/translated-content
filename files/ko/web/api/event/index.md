---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: abf155210d826c2584d23433eb2eac45a6669d23
---

{{APIRef("DOM")}}

**`Event`** 인터페이스는 DOM에서 발생하는 이벤트를 나타냅니다.

이벤트는 마우스를 클릭하거나 키보드를 누르는 것과 같이 사용자의 액션에 의해 발생할 수도 있고, 비동기적 작업의 진행을 나타내기 위해서 API들이 생성할 수도 있습니다. 요소의 {{domxref("HTMLElement.click()")}} 메서드를 호출하거나, 이벤트를 정의한 후 대상의 {{domxref("EventTarget.dispatchEvent()")}} 메서드를 사용해 발송하는 등 프로그래밍적으로도 만들어낼 수 있습니다.

이벤트에는 다양한 종류가 있으며 일부는 `Event` 인터페이스의 파생 인터페이스를 사용합니다. `Event` 자체는 모든 이벤트에 공통된 속성과 메서드를 가집니다.

많은 DOM 요소는 이벤트를 받고("수신"), 받은 이벤트를 "처리"할 수 있습니다. 이벤트 처리기는 주로 {{domxref("EventTarget.addEventListener()")}}를 사용해 다양한 요소(`<button>`, `<div>`, `<span>`, 등등)에 연결("부착")됩니다. 올바르게 부착한 경우, {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}를 사용하면 반대로 제거할 수도 있습니다.

> [!NOTE]
> 하나의 요소가 다수의 처리기를 가질 수 있습니다. 완전히 동일한 이벤트에 여러 처리기를 따로 등록할 수 있습니다. 예컨대 광고 모듈과 통계 모듈이 각각 비디오 시청 이벤트에 대한 처리기를 부착하는 것이 가능합니다.

중첩된 많은 요소가 서로 자신만의 이벤트 처리기를 가지고 있으면 이벤트의 처리가 매우 복잡해질 수 있습니다. 특히 부모 요소와 자식 요소가 화면에서 차지하는 영역이 겹쳐서 (클릭 등의) 이벤트가 양쪽 모두에서 발생하는 경우, 이벤트 처리 순서는 각 처리기의 [이벤트 버블링과 캡처](/ko/docs/Learn_web_development/Core/Scripting/Events#event_bubbling_and_capture) 설정에 따라 달라집니다.

## Event 기반 인터페이스

다음은 `Event` 인터페이스에서 파생된 인터페이스의 목록입니다. 링크를 클릭해서 MDN API 참조서의 개별 페이지를 방문할 수 있습니다.

모든 이벤트 인터페이스 이름은 "Event"로 끝난다는 사실도 확인할 수 있습니다.

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}} {{Deprecated_Inline}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceProximityEvent")}} {{Deprecated_Inline}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FontFaceSetLoadEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}} {{Deprecated_Inline}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}} {{Deprecated_Inline}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("SVGEvent")}} {{Deprecated_Inline}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("UserProximityEvent")}} {{Deprecated_Inline}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## 생성자

- {{domxref("Event.Event", "Event()")}}
  - : `Event` 객체를 생성하고 반환합니다.

## 인스턴스 속성

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : 이벤트가 DOM을 타고 버블링되는지 나타내는 불리언입니다.
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : 이벤트를 취소할 수 있는지 나타내는 불리언입니다.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : 이벤트가 섀도 DOM과 일반 DOM의 경계를 넘어 버블링되는지 나타내는 불리언입니다.
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : 이벤트의 현재 대상입니다. 이벤트 전파 과정 중 지금 이벤트를 수신 중인 객체를 가리킵니다. '리타겟팅'(retargeting)으로 인해 중간에 값이 바뀌었을 수 있습니다.
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : {{domxref("event.preventDefault()")}}의 호출로 이벤트가 취소됐는지 나타냅니다.
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : 이벤트 흐름에서 현재 처리 중인 단계를 나타냅니다. `NONE`, `CAPTURIING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE` 중 하나의 숫자입니다.
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : 이벤트가 사용자 클릭 등으로 브라우저에 의해 시작됐는지, 이벤트 생성 메서드 등 스크립트에 의해 시작됐는지 나타냅니다.
- {{domxref("Event.target")}} {{readonlyinline}}
  - : 이벤트가 처음에 발생한 대상을 가리킵니다.
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : 이벤트가 생성된 시간(밀리초)입니다. 과거에는 명세 상 UNIX 시간과 이벤트 생성 시점까지의 차이였지만 실제 구현은 브라우저마다 달랐습니다. 지금은 {{domxref("DOMHighResTimeStamp")}}를 반환합니다.
- {{domxref("Event.type")}} {{readonlyinline}}
  - : 이벤트의 이름입니다. 대소문자를 구분하지 않습니다.

## 인스턴스 메서드

- {{domxref("Event.composedPath()")}}
  - : 이벤트의 경로(수신기가 발동할 객체들의 배열)를 반환합니다. 섀도 루트의 {{domxref("ShadowRoot.mode")}}가 `closed`면 섀도 트리의 노드는 포함하지 않습니다.
- {{domxref("Event.preventDefault()")}}
  - : 취소 가능한 이벤트를 취소합니다.
- {{domxref("Event.stopImmediatePropagation()")}}
  - : 이 특정 이벤트에 대해서 다른 모든 수신기의 호출을 방지합니다. 같은 요소에 부착된 수신기는 물론 캡처링과 버블링 단계에서 뒤이어 도달할 수신기들도 호출되지 않습니다.
- {{domxref("Event.stopPropagation()")}}
  - : 이벤트의 DOM 전파를 멈춥니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 사용 가능한 이벤트 유형 목록: [이벤트 참고서](/ko/docs/Web/Events)
- [이벤트 대상의 비교](/ko/docs/Learn_web_development/Core/Scripting/Event_bubbling) (`target` vs. `currentTarget` vs. `relatedTarget` vs `originalTarget`)
- [이벤트 생성 및 발동](/ko/docs/Web/API/Document_Object_Model/Events)
