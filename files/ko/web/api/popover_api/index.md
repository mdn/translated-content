---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: e0d92259b485a219840367cf4e23a7069f192eec
---

{{DefaultAPISidebar("Popover API")}}

**Popover API**는 개발자에게 다른 페이지 콘텐츠 위에 팝오버 콘텐츠를 표시할 수 있는 표준적이고 일관되며 유연한 메커니즘을 제공합니다. 팝오버 콘텐츠는 HTML 속성을 사용하여 선언적으로 제어하거나 JavaScript를 통해 제어할 수 있습니다.

## 개념 및 사용법

웹에서 매우 일반적인 패턴은 다른 콘텐츠 위에 콘텐츠를 표시하여 사용자의 주의를 특정 중요 정보나 수행해야 하는 작업으로 유도하는 것입니다. 이 콘텐츠는 오버레이, 팝업, 팝오버, 대화 상자 등 여러 가지 이름으로 불릴 수 있습니다. 문서에서는 이를 팝오버라고 부릅니다. 일반적으로 다음과 같이 말할 수 있습니다.

- **모달**, 즉 팝오버가 표시되는 동안에는 팝오버가 어떤 식으로든 작동할 때까지(예: 중요한 선택이 이루어질 때까지) 페이지의 나머지 부분이 상호작용하지 않는 상태로 렌더링 됩니다.
- **비모달**, 팝오버가 표시되는 동안 페이지의 나머지 부분과 상호 작용할 수 있음을 의미합니다.

팝오버 API를 사용하여 생성된 팝오버는 항상 비모달입니다. 모달 팝오버를 만들려면 {{htmlelement("dialog")}}를 사용하는 것이 올바른 방법이지만, 기본적으로 `<dialog>` 요소는 {{glossary("top layer")}}에 배치되지 않지만, 팝오버는 배치된다는 점에 유의하세요. 예를 들어 지속되는 팝오버를 만들되 선언적 HTML을 사용하여 제어하려는 경우와 같이 두 요소 사이에는 상당한 중복이 있습니다. 팝오버 제어와 최상위 수준 배치를 대화 상자 의미와 결합하려는 경우, `<dialog>` 요소를 팝오버로 바꿀 수도 있습니다.

popover API의 일반적인 사용 사례에는 액션 메뉴, 사용자 지정 '토스트' 알림, 폼 요소 제안, 콘텐츠 선택기 또는 교육용 UI 같은 상호작용 요소가 포함됩니다.

팝오버는 두 가지 방법으로 만들 수 있습니다.

- 선언적으로, 새로운 HTML 특성 세트를 통해 다음 코드를 사용하여 토글 버튼이 있는 간단한 팝오버를 만들 수 있습니다.

  ```html
  <button popovertarget="mypopover">팝오버를 토글하세요</button>
  <div id="mypopover" popover>팝오버 콘텐츠</div>
  ```

- 예를 들어 {{domxref("HTMLElement.togglePopover()")}}와 같은 JavaScript API를 사용하여 팝오버를 표시와 숨김 간에 토글 할 수 있습니다.

팝오버가 전환될 때 반응하는 새로운 이벤트와 팝오버의 스타일을 지정하는 데 도움이 되는 CSS 기능도 추가되었습니다. 모든 새로운 기능은 아래에 나열되어 있습니다.

이 API 사용에 대한 자세한 안내는 [popover API 사용하기](/ko/docs/Web/API/Popover_API/Using) 문서를 참조하세요.

## HTML 특성

- [`popover`](/ko/docs/Web/HTML/Global_attributes/popover)
  - : 요소를 팝오버 요소로 전환하는 전역 속성으로, 팝오버 상태(`"auto"` 또는 `"manual"`)를 값으로 받습니다.
- [`popovertarget`](/ko/docs/Web/HTML/Element/button#popovertarget)
  - : {{htmlelement("button")}} 또는 {{htmlelement("input")}} 요소를 팝오버 제어 버튼으로 바꾸고 제어할 팝오버 요소의 ID를 값으로 받습니다.
- [`popovertargetaction`](/ko/docs/Web/HTML/Element/button#popovertargetaction)
  - : 컨트롤 {{htmlelement("button")}} 또는 {{htmlelement("input")}}으로 제어되는 팝오버 요소에서 수행할 작업(`"hide"`, `"show"`, 또는 `"toggle"`)을 지정합니다.

## CSS 기능

- {{cssxref("::backdrop")}}
  - : `::backdrop` 의사 요소(pseudo-element)는 팝오버 요소 바로 뒤에 배치되는 전체 화면 요소로, 원하는 경우 팝오버 뒤에 있는 페이지 콘텐츠에 효과(예: 흐리게 처리)를 추가할 수 있습니다.
- {{cssxref(":popover-open")}}
  - : `:popover-open` 의사 클래스(pseudo-class)는 팝오버 요소가 표시 상태일 때만 일치하며, 팝오버 요소가 표시될 때 스타일을 지정하는 데 사용할 수 있습니다.

## 인터페이스

- {{domxref("ToggleEvent")}}
  - : 팝오버 요소의 상태가 표시와 숨김 사이를 전환할 때 사용자에게 알리는 이벤트를 나타냅니다. 팝오버의 상태가 변경될 때 발생하는 {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} 및 {{domxref("HTMLElement.toggle_event", "toggle")}} 이벤트의 이벤트 객체입니다.

## 다른 인터페이스로의 확장

### 인스턴스 속성

- {{domxref("HTMLElement.popover")}}
  - : JavaScript를 통해 요소의 팝오버 상태(`"auto"` or `"manual"`)를 가져오고 설정하며, 기능 감지에 사용할 수 있습니다. [`popover`](/ko/docs/Web/HTML/Global_attributes/popover) 전역 HTML 특성 값을 반영합니다.
- {{domxref("HTMLButtonElement.popoverTargetElement")}} 및 {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : 컨트롤 버튼으로 제어되는 팝오버 요소를 가져오고 설정합니다. JavaScript에서 [`popovertarget`](/ko/docs/Web/HTML/Element/button#popovertarget) HTML 특성에 해당하는 값입니다.
- {{domxref("HTMLButtonElement.popoverTargetAction")}} 및 {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : 컨트롤 버튼으로 제어되는 팝오버 요소에서 수행할 액션(`"hide"`, `"show"`, 또는 `"toggle"`)을 가져오고 설정합니다. [`popovertargetaction`](/ko/docs/Web/HTML/Element/button#popovertargetaction) HTML 특성의 값을 반영합니다.

### 인스턴스 메서드

- {{domxref("HTMLElement.hidePopover()")}}
  - : 팝오버 요소를 최상위 레이어에서 제거하고 `display: none`으로 스타일을 지정하여 숨깁니다.
- {{domxref("HTMLElement.showPopover()")}}
  - : 팝오버 요소를 최상위 레이어에 추가하여 표시합니다.
- {{domxref("HTMLElement.togglePopover()")}}
  - : 팝오버 요소를 표시 상태와 숨김 상태 간에 토글 합니다.

### 이벤트

- `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} 이벤트
  - : 팝오버 요소의 상태가 표시와 숨김 사이 또는 그 반대로 변경되기 직전에 실행됩니다.
- `HTMLElement` {{domxref("HTMLElement.toggle_event", "toggle")}} 이벤트
  - : 팝오버 요소의 상태가 표시됨에서 숨김으로 또는 그 반대로 변경된 직후에 발생합니다. 이 이벤트는 이미 {{htmlelement("details")}} 요소의 상태 변경을 알리기 위해 존재했으며, 팝오버 요소에도 확장하는 것이 논리적으로 보였습니다.

## 예제

MDN 팝오버 예제의 전체 컬렉션에 접근하려면 [Popover API 예제 랜딩 페이지](https://mdn.github.io/dom-examples/popover-api/)를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
