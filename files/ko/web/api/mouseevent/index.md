---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("UI Events")}}

**`MouseEvent`** 인터페이스는 사용자가 포인팅 장치(마우스 등)를 사용해 상호작용할 때 발생하는 이벤트를 나타냅니다. {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/mousedown_event", "mousedown")}}이 `MouseEvent`를 사용하는 흔한 이벤트입니다.

`MouseEvent`는 {{domxref("UIEvent")}}를 상속하고, `UIEvent`는 {{domxref("Event")}}를 상속합니다. 하위 호환을 유지하기 위해 {{domxref("MouseEvent.initMouseEvent()")}} 메서드가 사라지지는 않았지만, `MouseEvent` 객체의 생성은 {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} 생성자로 해야 합니다.

`MouseEvent`에 기반한 세부 이벤트로 {{domxref("WheelEvent")}}, {{domxref("DragEvent")}}, {{domxref("PointerEvent")}} 등이 있습니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : `MouseEvent` 객체를 생성합니다.

## 정적 속성

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 일반 클릭을 위해 필요한 최소 압력입니다.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 강제 클릭을 위해 필요한 최소 압력입니다.

## 인스턴스 속성

{{domxref("UIEvent")}}와 {{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>alt</kbd>가 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : (해당하는 경우) 마우스 이벤트를 발생시킨 버튼의 번호입니다.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : (버튼이 있는 경우) 마우스 이벤트 발생 시점에 누르고 있던 버튼 번호입니다.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : 로컬 (DOM 콘텐츠) 좌표계에서 마우스 포인터의 X축 좌표입니다.
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : 로컬 (DOM 콘텐츠) 좌표계에서 마우스 포인터의 Y축 좌표입니다.
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>ctrl</kbd>이 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 이벤트의 가로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 이벤트의 세로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>meta</kbd>가 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 마지막 {{domxref("Element/mousemove_event", "mousemove")}} 이벤트로부터 마우스 포인터가 움직인 X축 거리입니다.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 마지막 {{domxref("Element/mousemove_event", "mousemove")}} 이벤트로부터 마우스 포인터가 움직인 Y축 거리입니다.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 대상 노드의 안쪽 여백 경계를 기준으로 한 마우스 포인터의 X축 좌표입니다.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 대상 노드의 안쪽 여백 경계를 기준으로 한 마우스 포인터의 Y축 좌표입니다.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 전체 문서를 기준으로 한 마우스 포인터의 X축 좌표입니다.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 전체 문서를 기준으로 한 마우스 포인터의 Y축 좌표입니다.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 존재하는 경우, 이벤트의 보조 대상입니다.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : 전역 (화면) 좌표계에서 마우스 포인터의 X축 좌표입니다.
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : 전역 (화면) 좌표계에서 마우스 포인터의 Y축 좌표입니다.
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>shift</kbd>가 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 터치 또는 태블릿에서 이 이벤트가 발생했을 때 적용된 입력 압력의 양입니다. `0.0`(최소 압력)과 `1.0`(최대 압력) 사이의 값입니다. 사용을 권장하지 않는 비표준 속성입니다. {{domxref("PointerEvent")}}의 {{domxref("PointerEvent.pressure", "pressure")}} 속성을 사용하세요.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 이벤트를 발생시킨 장치의 유형으로 `MOZ_SOURCE_*` 상수 중 하나입니다. 이 값을 사용하면 이벤트가 실제 마우스에 의해 발생했는지, 아니면 터치에 의해 발생했는지 확인해 정확도 보정 등을 적용할 수 있습니다.
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 클릭의 압력입니다.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}}의 별칭입니다.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}}의 별칭입니다.

## 인스턴스 메서드

{{domxref("UIEvent")}}와 {{domxref("Event")}} 인터페이스의 메서드를 상속합니다.

- {{domxref("MouseEvent.getModifierState()")}}
  - : 주어진 조합키의 현재 상태를 반환합니다. {{domxref("KeyboardEvent.getModifierState", "KeyboardEvent.getModifierState()")}}에서 자세히 확인하세요.
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : 생성한 `MouseEvent`의 값을 초기화합니다. 이미 발송한 이벤트에 대해서는 아무 것도 하지 않습니다.

## 예제

DOM 메서드들을 사용해 체크박스 클릭을 흉내(코드에서 클릭하기)내는 예제입니다. {{domxref("EventTarget.dispatchEvent", "EventTarget.dispatchEvent()")}}의 반환 값으로 이벤트 상태(취소 여부)를 알 수 있습니다.

### HTML

```html
<p>
  <label><input type="checkbox" id="checkbox" /> 체크됨</label>
</p>
<p>
  <button id="button">클릭해서 체크박스에 MouseEvent를 보내세요</button>
</p>
```

### JavaScript

```js
function simulateClick() {
  // 클릭 이벤트를 발송할 요소
  const cb = document.getElementById("checkbox");

  // 인공 클릭 MouseEvent 생성
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // 체크박스 요소로 이벤트 발송
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 부모 인터페이스 {{domxref("UIEvent")}}
- 멀티터치 등 고급 포인터 이벤트를 위한 {{domxref("PointerEvent")}}
