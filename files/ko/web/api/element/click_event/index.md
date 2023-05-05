---
title: "Element: click 이벤트"
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{APIRef}}

포인팅 장치의 포인터가 어느 요소 안에 위치하는 동안, 마우스 주 버튼처럼 장치의 버튼을 눌렀다 떼면 그 요소에서 **`click`** 이벤트가 발생합니다.

버튼을 누른 상태로 포인터가 움직여서 요소 밖으로 나가게 되면 버튼을 눌렀던 요소와 떨어진 요소의 가장 가까운 공통 조상 요소에서 이벤트가 발생합니다.

`click`은 {{domxref("Element/mousedown_event", "mousedown")}}과 {{domxref("Element/mouseup_event", "mouseup")}} 이벤트가 순서대로 발생한 후 발생합니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## 이벤트 유형

{{domxref("MouseEvent")}}입니다. {{domxref("Event")}}를 상속합니다.

{{InheritanceDiagram("MouseEvent")}}

## 이벤트 속성

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

## 사용 일람

`click` 이벤트 처리기가 받는 {{domxref("MouseEvent")}} 객체의 {{domxref("UIEvent/detail", "detail")}} 속성은 {{domxref("Event.target", "target")}}이 클릭된 횟수를 나타냅니다. 즉 더블 클릭의 `detail`은 2, 삼중 클릭은 3...처럼 계속됩니다. 이 횟수는 짧은 시간동안 클릭이 멈추면 초기화됩니다. 정확한 초기화 시간은 브라우저와 플랫폼에 따라 다르며, 사용자 설정에 따라서도 달라질 수 있습니다. 예를 들어, 접근성 옵션이 활성화되면 적응형 인터페이스로도 다중 클릭을 쉽게 할 수 있도록 초기화 시간이 길어질 수 있습니다.

## 예제

{{HtmlElement("button")}}을 몇 번이나 연속해서 클릭했는지 표시하는 예제입니다.

### HTML

```html
<button>클릭</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `클릭 횟수: ${event.detail}`;
});
```

### 결과

버튼을 빠르게 반복하여 클릭해서 클릭 횟수를 올려보세요. 클릭을 쉬면 횟수가 초기화됩니다.

{{EmbedLiveSample("예제")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [이벤트 입문](/ko/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
