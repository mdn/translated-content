---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ApiRef("Selection API")}}

**`Selection`** 객체는 사용자가 선택한 텍스트 범위 또는 현재 캐럿의 위치를 나타냅니다.
각 {{domxref("document")}}는 고유한 Selection 객체와 연결되며, 이 객체는 {{DOMxRef("document.getSelection()")}} 또는 {{domxref("window.getSelection()")}}을 통해 가져온 다음 확인하거나 수정할 수 있습니다.

사용자는 왼쪽에서 오른쪽(문서 순서대로) 혹은 오른쪽에서 왼쪽(문서 순서의 반대)으로 선택을 만들 수 있습니다. 선택에서 **앵커**는 사용자가 선택을 시작한 위치이고, **포커스**는 사용자가 선택을 끝낸 위치입니다. 예를 들어 데스크톱 마우스로 텍스트를 드래그하여 선택하면, 마우스 버튼을 처음 누른 위치가 앵커이고, 버튼을 놓은 위치가 포커스가 됩니다.

> [!NOTE]
> 앵커와 포커스는 선택의 시작점과 끝점과 혼동해서는 안 됩니다.
> 선택 방향에 따라 앵커가 포커스 앞에 올 수도 있고, 반대로 포커스가 앵커 앞에 올 수도 있습니다.

## 인스턴스 속성

- {{DOMxRef("Selection.anchorNode")}} {{ReadOnlyInline}}
  - : 선택 영역이 시작되는 {{DOMxRef("Node")}}를 반환합니다. 문서에서 한 번도 선택이 이루어진 적이 없다면(예: 클릭되지 않은 iframe 안) `null`을 반환할 수 있습니다.
- {{DOMxRef("Selection.anchorOffset")}} {{ReadOnlyInline}}
  - : 선택 영역의 앵커(anchor)가 위치한 `anchorNode` 내에서의 오프셋을 나타내는 숫자를 반환합니다. `anchorNode`가 텍스트 노드인 경우에는 앵커 앞에 위치한 문자 수를 의미하며, `anchorNode`가 요소 노드인 경우에는 앵커 앞에 위치한 자식 노드의 수를 의미합니다.
- {{DOMxRef("Selection.direction")}} {{ReadOnlyInline}}
  - : 현재 선택 영역의 방향을 설명하는 문자열을 반환합니다.
- {{DOMxRef("Selection.focusNode")}} {{ReadOnlyInline}}
  - : 선택 영역이 끝나는 {{DOMxRef("Node")}}를 반환합니다. 문서에서 한 번도 선택이 이루어진 적이 없다면(예: 클릭되지 않은 iframe 안) `null`을 반환할 수 있습니다.
- {{DOMxRef("Selection.focusOffset")}} {{ReadOnlyInline}}
  - : 선택 영역의 포커스가 위치한 `focusNode` 내에서의 오프셋을 나타내는 숫자를 반환합니다. `focusNode`가 텍스트 노드인 경우에는 포커스 앞에 위치한 문자 수를 의미하며, `focusNode`가 요소 노드인 경우에는 포커스 앞에 위치한 자식 노드의 수를 의미합니다.
- {{DOMxRef("Selection.isCollapsed")}} {{ReadOnlyInline}}
  - : 선택 영역의 시작 지점과 끝 지점이 동일한 위치에 있는지를 나타내는 불리언을 반환합니다.
- {{DOMxRef("Selection.rangeCount")}} {{ReadOnlyInline}}
  - : 선택 영역에 포함된 범위의 개수를 반환합니다.
- {{DOMxRef("Selection.type")}} {{ReadOnlyInline}}
  - : 현재 선택 영역의 유형을 설명하는 문자열을 반환합니다.

## 인스턴스 메서드

- {{DOMxRef("Selection.addRange()")}}
  - : 선택 영역에 추가할 {{DOMxRef("Range")}} 객체를 지정합니다.
- {{DOMxRef("Selection.collapse()")}}
  - : 현재 선택 영역을 단일 지점으로 축소합니다.
- {{DOMxRef("Selection.collapseToEnd()")}}
  - : 선택 영역을 마지막 범위의 끝 지점으로 축소합니다.
- {{DOMxRef("Selection.collapseToStart()")}}
  - : 선택 영역을 첫 번째 범위의 시작 지점으로 축소합니다.
- {{DOMxRef("Selection.containsNode()")}}
  - : 특정 노드가 선택 영역의 일부인지 여부를 나타냅니다.
- {{DOMxRef("Selection.deleteFromDocument()")}}
  - : 선택된 콘텐츠를 문서에서 삭제합니다.
- {{DOMxRef("Selection.empty()")}}
  - : 선택 영역에서 모든 범위를 제거하여 아무것도 선택되지 않은 상태로 만듭니다. 이때 {{DOMxRef("Selection.anchorNode", "anchorNode")}}와 {{DOMxRef("Selection.focusNode","focusNode")}} 속성은 `null`이 됩니다.
- {{DOMxRef("Selection.extend()")}}
  - : 선택 영역의 포커스를 지정한 위치로 이동합니다.
- {{DOMxRef("Selection.getComposedRanges()")}}
  - : 선택 영역을 나타내는 {{DOMxRef("StaticRange")}} 객체 배열을 반환합니다. 이 배열의 각 요소는 Shadow DOM 경계를 넘을 수 있는 선택 영역을 표현합니다.
- {{DOMxRef("Selection.getRangeAt()")}}
  - : 현재 선택된 범위 중 하나를 나타내는 {{DOMxRef("Range")}} 객체를 반환합니다.
- {{DOMxRef("Selection.modify()")}}
  - : 현재 선택 영역을 변경합니다.
- {{DOMxRef("Selection.removeRange()")}}
  - : 선택 영역에서 특정 범위를 제거합니다.
- {{DOMxRef("Selection.removeAllRanges()")}}
  - : 선택 영역에서 모든 범위를 제거합니다.
- {{DOMxRef("Selection.selectAllChildren()")}}
  - : 지정한 노드의 모든 자식 노드를 선택 영역에 추가합니다.
- {{DOMxRef("Selection.setBaseAndExtent()")}}
  - : 선택 영역을 두 개의 지정된 DOM 노드와 그 사이에 위치한 모든 콘텐츠를 포함하는 범위로 설정합니다.
- {{DOMxRef("Selection.setPosition()")}}
  - : 현재 선택 영역을 단일 지점으로 축소합니다.
- {{DOMxRef("Selection.toString()")}}
  - : 선택 객체가 현재 표현하는 문자열, 즉 현재 선택된 텍스트를 반환합니다.

## 참고

### 선택 영역의 문자열 표현

{{DOMxRef("Selection.toString()")}} 메서드를 호출하면 선택된 영역에 포함된 텍스트를 반환합니다. 예시는 다음과 같습니다.

```js
const selObj = window.getSelection();
window.alert(selObj);
```

선택 객체를 `window.alert`의 인수로 전달하면, 해당 객체의 `toString` 메서드가 호출된다는 점에 유의해야 합니다.

### 여러 개의 범위를 가지는 선택 영역

선택 객체는 사용자가 선택한 {{DOMxRef("Range")}}들을 나타냅니다. 일반적으로는 단일 범위만 포함하며, 다음과 같이 접근할 수 있습니다.

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj`는 Selection 객체입니다.
- `range`는 {{DOMxRef("Range")}} 객체입니다.

[Selection API 명세에서 언급하듯이](https://w3c.github.io/selection-api/#h-note-13), Selection API는 원래 Netscape에 의해 만들어졌으며 여러 개의 범위를 허용했습니다. (예를 들어, {{HTMLElement("table")}}의 열을 사용자가 선택할 수 있도록 하기 위함이었습니다.) 그러나 Gecko 이외의 브라우저들은 다중 범위를 구현하지 않았으며, 현재 명세에서는 선택 영역이 항상 단일 범위만 가지도록 규정하고 있습니다.

### 선택 영역과 입력 포커스

선택 영역과 입력 포커스({{DOMxRef("Document.activeElement")}}로 표시됨)는 브라우저마다 다른 복잡한 관계를 가지고 있습니다. 크로스 브라우저 호환 코드를 작성할 때는 이 둘을 별도로 다루는 것이 더 좋습니다.

Safari와 Chrome은 (Firefox와 달리) 현재 선택 영역을 프로그래밍 방식으로 수정할 때 선택 영역을 포함하는 요소에 포커스를 맞춥니다. 다만, 이는 향후 변경될 수 있습니다. (관련 내용은 [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383)과 [WebKit bug 38696](https://webkit.org/b/38696) 참고)

### 편집 호스트 포커스 변경과 관련된 Selection API의 동작

Selection API는 공통된 동작(브라우저 간에 동일하게 적용되는 동작)을 가지며, 이는 특정 메서드가 호출된 이후 편집 호스트의 포커스 동작이 어떻게 바뀌는지를 정의합니다.

동작은 다음과 같습니다.

1. 이전 선택 영역이 편집 호스트 바깥에 있었다면, 편집 호스트는 포커스를 얻게 됩니다.
2. Selection API 메서드가 호출되어 선택 범위가 해당 편집 호스트 안에 새롭게 설정됩니다.
3. 포커스는 편집 호스트로 이동합니다.

> [!NOTE]
> Selection API 메서드는 포커스를 편집 호스트로만 옮길 수 있으며, 다른 포커스 가능한 요소(예: {{HTMLElement("a")}})로는 이동할 수 없습니다.

위 동작은 다음 메서드를 사용하여 생성된 선택 영역에 적용됩니다.

- {{DOMxRef("Selection.collapse()")}}
- {{DOMxRef("Selection.collapseToStart()")}}
- {{DOMxRef("Selection.collapseToEnd()")}}
- {{DOMxRef("Selection.extend()")}}
- {{DOMxRef("Selection.selectAllChildren()")}}
- {{DOMxRef("Selection.addRange()")}}
- {{DOMxRef("Selection.setBaseAndExtent()")}}

그리고 다음 메서드들을 사용하여 {{DOMxRef("Range")}} 를 수정할 때에도 적용됩니다.

- {{DOMxRef("Range.setStart()")}}
- {{DOMxRef("Range.setEnd()")}}
- {{DOMxRef("Range.setStartBefore()")}}
- {{DOMxRef("Range.setStartAfter()")}}
- {{DOMxRef("Range.setEndBefore()")}}
- {{DOMxRef("Range.setEndAfter()")}}
- {{DOMxRef("Range.collapse()")}}
- {{DOMxRef("Range.selectNode()")}}
- {{DOMxRef("Range.selectNodeContents()")}}

### 용어 사전

이 구획에서 사용되는 주요 용어들입니다.

- 앵커
  - : 선택 영역의 앵커는 선택의 시작 지점을 의미합니다. 마우스를 이용해 선택할 때 앵커는 문서에서 마우스 버튼을 처음 눌렀던 위치가 됩니다. 사용자가 마우스나 키보드로 선택 영역을 변경하더라도 앵커는 움직이지 않습니다.
- 편집 호스트
  - : 편집 가능한 요소를 의미합니다. (예를 들어, [`contenteditable`](/ko/docs/Web/HTML/Reference/Global_attributes/contenteditable) 속성이 설정된 HTML 요소나, {{DOMxRef("Document.designMode", "designMode")}}가 활성화된 문서의 HTML 자식 요소가 편집 호스트에 해당합니다.)
- 선택 영역의 포커스
  - : 선택 영역의 포커스는 선택의 끝 지점을 의미합니다. 마우스로 선택할 때 포커스는 문서에서 마우스 버튼을 놓은 위치가 됩니다. 사용자가 마우스나 키보드를 이용해 선택 영역을 변경하면, 포커스는 이동하는 선택의 끝 부분이 됩니다.

    > [!NOTE]
    > 이는 {{DOMxRef("document.activeElement")}}가 반환하는 문서의 포커스된 요소와는 동일하지 않습니다.

- 범위
  - : 범위는 문서의 연속된 일부를 의미합니다. 범위에는 전체 노드뿐만 아니라 노드의 일부(예: 텍스트 노드의 일부)도 포함될 수 있습니다. 일반적으로 사용자는 한 번에 하나의 범위만 선택하지만, 컨트롤 키를 이용하면 여러 범위를 선택할 수도 있습니다. 선택 영역에서 범위를 가져오면 {{DOMxRef("Range")}} 객체로 반환되며, Range 객체는 DOM을 통해 생성하거나 프로그래밍 방식으로 선택 영역에 추가하거나 제거할 수도 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- 선택 영역과 관련된 이벤트는 {{domxref("Document/selectionchange_event", "selectionchange")}}, {{domxref("Node/selectstart_event", "selectstart")}}
- HTML 입력 요소는 선택 영역을 다루기 위한 더 단순한 보조 API를 제공합니다 (예: {{DOMxRef("HTMLInputElement.setSelectionRange()")}})
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus")}}, {{DOMxRef("HTMLElement.blur")}}
