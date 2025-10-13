---
title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
original_slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}

**`draggable`** [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)은 요소의 드래그 가능 여부를 나타내는 열거형 특성으로, 네이티브 브라우저 동작 방식과 [HTML Drag and Drop API](/ko/docs/Web/API/HTML_Drag_and_Drop_API) 모두 통제합니다.

`draggable`은 다음 두 값 중 하나를 가질 수 있습니다.

- `true`: 요소를 드래그 할 수 있습니다.
- `false`: 요소를 드래그 할 수 없습니다.

> [!WARNING]
> `draggable` 특성은 불리언이 아니고 열거형 특성이므로, `true` 또는 `false`의 지정 또한 필수입니다. 그러므로 `<img draggable>`처럼 사용할 수 없고, 올바른 사용법은 `<img draggable="false">`입니다.

`draggable`을 지정하지 않은 경우의 기본값은 `auto`로, 브라우저 기본 동작을 따릅니다. 즉, 텍스트 선택 영역, 이미지, 링크 외에는 드래그가 불가능합니다. [종합 예제](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)에서 볼 수 있듯, 다른 요소에 드래그 앤 드롭을 적용하려면 {{domxref('GlobalEventHandlers.ondragstart', 'ondragstart')}} 이벤트 처리기가 필요합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes).
