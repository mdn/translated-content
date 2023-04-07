---
title: MutationRecord
slug: Web/API/MutationRecord
l10n:
  sourceCommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{APIRef("DOM")}}

{{domxref("MutationRecord")}} 읽기 전용 인터페이스는 {{domxref("MutationObserver")}}에 의해 감지된 각각의 변화를 나타냅니다. {{domxref("MutationObserver")}}의 콜백 매개변수로 전달되는 배열의 요소로 사용됩니다.

## 인스턴스 속성

- {{domxref("MutationRecord.addedNodes")}} {{ReadOnlyInline}}
  - : 변경으로 인해 추가된 노드들입니다. 추가된 노드가 없으면 빈 {{domxref("NodeList")}}입니다.
- {{domxref("MutationRecord.attributeName")}} {{ReadOnlyInline}}
  - : 바뀐 특성의 이름을 나타내는 문자열 또는 `null`입니다.
- {{domxref("MutationRecord.attributeNamespace")}} {{ReadOnlyInline}}
  - : 바뀐 특성의 네임스페이스를 나타내는 문자열 또는 `null`입니다.
- {{domxref("MutationRecord.nextSibling")}} {{ReadOnlyInline}}
  - : 추가됐거나 제거된 노드의 다음 형제 또는 `null`입니다.
- {{domxref("MutationRecord.oldValue")}} {{ReadOnlyInline}}
  - : {{domxref("MutationRecord.type")}}에 따라 다른 값입니다.
    - `attributes`라면 변경 전 특성의 값입니다.
    - `characterData`라면 변경 전 노드의 텍스트 데이터입니다.
    - `childList`라면 `null`입니다.
- {{domxref("MutationRecord.previousSibling")}} {{ReadOnlyInline}}
  - : 추가됐거나 제거된 노드의 이전 형제 또는 `null`입니다.
- {{domxref("MutationRecord.removedNodes")}} {{ReadOnlyInline}}
  - : 변경으로 인해 제거된 노드들입니다. 제거된 노드가 없으면 빈 {{domxref("NodeList")}}입니다.
- {{domxref("MutationRecord.target")}} {{ReadOnlyInline}}
  - : 변경된 노드입니다. `MutationRecord.type`에 따라 다른 값입니다.
    - `attributes`라면 특성이 변경된 노드입니다.
    - `characterData`라면 `CharacterData` 노드입니다.
    - `childList`라면 자식이 변경된 노드입니다.
- {{domxref("MutationRecord.type")}} {{ReadOnlyInline}}
  - : 변경 유형을 나타내는 문자열입니다. 특성 변경이면 `attributes`, `CharacterData` 노드 변경이면 `characterData`, 노드 트리의 변경이면 `childList`입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
