---
title: "Element: mousedown 이벤트"
slug: Web/API/Element/mousedown_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

**`mousedown`** 이벤트는 포인터가 요소 안에 있는 동안 포인팅 장치의 버튼을 눌렀을 때 {{domxref("Element")}}에서 발생합니다.

> [!NOTE]
> 이는 완전한 `click` 동작, 즉, 포인터가 같은 요소 안에 있으면서 마우스 버튼을 눌렀다가 떼는 동작 이후 발생하는 {{domxref("Element/click_event", "click")}} 이벤트와는 차이가 있습니다. `mousedown`은 버튼을 처음 누른 순간 발생합니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("mousedown", (event) => {});

onmousedown = (event) => {};
```

## 이벤트 유형

{{domxref("MouseEvent")}}입니다. {{domxref("UIEvent")}}와 {{domxref("Event")}}를 상속합니다.

{{InheritanceDiagram("MouseEvent")}}

## 이벤트 속성

부모인 {{domxref("UIEvent")}}와 {{domxref("Event")}}의 속성을 상속합니다.

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>alt</kbd>가 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : (해당하는 경우) 마우스 이벤트 발생 시점에 누르고 있던 버튼의 번호입니다.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : (버튼이 있는 경우) 마우스 이벤트 발생 시점에 누르고 있던 버튼 번호입니다.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : [뷰포트 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#뷰포트)에서 마우스 포인터의 X 좌표입니다.
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : [뷰포트 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#뷰포트)에서 마우스 포인터의 Y 좌표입니다.
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>control</kbd>이 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 이벤트의 가로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 이벤트의 세로축 좌표를 현재 레이어에 상대적인 값으로 반환합니다.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>meta</kbd>가 눌려있었으면 `true`를 반환합니다.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 가장 최근 {{domxref("Element/mousemove_event", "mousemove")}} 이벤트에 상대적인 마우스 포인터의 X 좌표입니다.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 가장 최근 {{domxref("Element/mousemove_event", "mousemove")}} 이벤트에 상대적인 마우스 포인터의 Y 좌표입니다.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 대상 노드의 안쪽 여백 경계에 상대적인 마우스 포인터의 X 좌표입니다.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 대상 노드의 안쪽 여백 경계에 상대적인 마우스 포인터의 Y 좌표입니다.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 전제 문서에 상대적인 마우스 포인터의 X 좌표입니다.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 전제 문서에 상대적인 마우스 포인터의 Y 좌표입니다.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 존재하는 경우, 이벤트의 보조 대상입니다.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : [화면 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#화면)에서 마우스 포인터의 X 좌표입니다.
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : [화면 좌표계](/ko/docs/Web/API/CSSOM_view_API/Coordinate_systems#화면)에서 마우스 포인터의 Y 좌표입니다.
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 마우스 이벤트 발생 시점에 <kbd>shift</kbd>가 눌려있었으면 `true`를 반환합니다
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 이벤트를 발생시킨 장치의 유형으로 `MOZ_SOURCE_*` 상수 중 하나입니다. 이 값을 사용하면 이벤트가 실제 마우스에 의해 발생했는지, 아니면 터치에 의해 발생했는지 확인해 정확도 보정 등을 적용할 수 있습니다.
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 클릭했을 때 가해진 압력의 양입니다.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}}의 별칭입니다.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}}의 별칭입니다.

## 예제

예제 코드를 [`mousemove` 이벤트](/ko/docs/Web/API/Element/mousemove_event#examples)에서 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [이벤트 입문](/ko/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
