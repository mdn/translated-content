---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 5cfd038b0d37452042461cfe169c0c9ab87be94d
---

{{APIRef("DOM")}}

{{Glossary("DOM")}} **`Node`** 인터페이스는 많은 DOM API 객체의 기반이 되는 추상 기반 클래스로, 이를 통해 여러 객체 타입을 유사하게 또는 상호교환 가능하게 사용할 수 있습니다. 추상 클래스이므로 순수한 `Node` 객체는 존재하지 않으며, `Node`를 구현하는 모든 객체는 하위 클래스 중 하나를 기반으로 합니다.
대표적으로 {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("DocumentFragment")}}가 있습니다.

또한 모든 종류의 DOM 노드는 `Node`기반의 인터페이스로 표현됩니다.
여기에는 {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}}({{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef("CDATASection")}}
{{DOMxRef("ProcessingInstruction")}} 의 기반), {{DOMxRef("DocumentType")}} 등이 포함됩니다.

경우에 따라 기본 Node 인터페이스의 특정 기능이 일부 자식 인터페이스에 적용되지 않을 수 있으며, 이때 상속하는 노드는 상황에 따라 `null`을 반환하거나 예외를 발생시킵니다.
예를 들어 자식을 가질 수 없는 노드 타입에 자식을 추가하려 하면 예외가 발생합니다.

{{InheritanceDiagram}}

## 인스턴스 속성

_아래 속성 외에도 `Node`는 부모인 {{DOMxRef("EventTarget")}}으로부터 속성을 상속받습니다._

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : `Node`를 가지고 있는 문서의 URL을 문자열로 반환합니다.
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : 요소, 텍스트, 주석을 포함한 `Node`의 모든 자식을 담은 실시간 {{DOMxRef("NodeList")}}를 반환합니다. 실시간이란 `Node`의 자식이 변경되면 {{DOMxRef("NodeList")}} 객체도 자동으로 업데이트된다는 의미입니다.
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - 노드의 가장 첫번째 자식요소를 `Node` 로, 자식요소가 없을 경우 `null`을 반환합니다.
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : 노드가 일반 DOM의 `Document` 또는 섀도우 DOM의 `ShadowRoot` 같은 컨텍스트 객체에 직접 또는 간접적으로 연결되어 있는지를 나타내는 불리언 값입니다.
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : 마지막 자식 `Node`를 반환하고, 자식이 없을 경우 `null`을 반환합니다.
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : 트리 구조에서 현재 `Node`의 다음 형제 노드를 반환하고, 해당 노드가 없으면 `null`을 반환합니다.
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : `Node`의 이름을 문자열로 반환합니다. 이름의 구조는 노드 타입에 따라 다릅니다. 예를 들어 {{DOMxRef("HTMLElement")}}는 해당 태그의 이름을 포함하며, {{DOMxRef("HTMLAudioElement")}}라면 `'AUDIO'`가 됩니다. {{DOMxRef("Text")}} 노드는 `'#text'`, {{DOMxRef("Document")}} 노드는 `'#document'` 문자열을 가집니다.
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}
  - : 노드의 유형을 나타내는 부호 없는 `단정수(unsigned short)`를 반환합니다. 가질 수 있는 값은 다음과 같습니다.

    | Name                          | Value |
    | ----------------------------- | ----- |
    | `ELEMENT_NODE`                | `1`   |
    | `ATTRIBUTE_NODE`              | `2`   |
    | `TEXT_NODE`                   | `3`   |
    | `CDATA_SECTION_NODE`          | `4`   |
    | `PROCESSING_INSTRUCTION_NODE` | `7`   |
    | `COMMENT_NODE`                | `8`   |
    | `DOCUMENT_NODE`               | `9`   |
    | `DOCUMENT_TYPE_NODE`          | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`      | `11`  |

- {{DOMxRef("Node.nodeValue")}}
  - : 현재 노드의 값을 지정하거나 반환합니다.
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : 해당 노드가 속한 {{DOMxRef("Document")}}를 반환합니다. 노드에 document가 존재하지 않을 경우 `null`을 반환합니다.
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : 해당 노드의 부모 `Node`를 반환합니다. 상위 트리 혹은 트리에 노드가 존재하지 않을 경우 `null`을 반환합니다.
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : 해당 노드의 부모인 {{DOMxRef("Element")}}를 반환합니다. 노드에 부모가 존재하지 않거나 {{DOMxRef("Element")}}가 아닐 경우, 해당 속성은 `null`을 반환합니다.
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : 트리 구조에서 현재 `Node`의 이전 형제 노드를 반환하고, 존재하지 않을 경우 null을 반환합니다.
- {{DOMxRef("Node.textContent")}}
  - : 엘리먼트와 모든 자손 요소의 텍스트 콘텐츠를 반환하거나 설정합니다.

## 인스턴스 메서드

_아래 메서드 외에도 `Node`는 부모인 {{DOMxRef("EventTarget")}}으로부터 메서드를 상속받습니다._

- {{DOMxRef("Node.appendChild()")}}
  - : 지정된 `childNode` 인수를 현재 노드의 마지막 자식 노드로 추가합니다. 만약 이미 인수가 DOM 트리에 존재하는 노드를 참조하고 있다면, 해당 노드를 현재 위치에서 떼어내어 새로운 위치에 추가합니다.
- {{DOMxRef("Node.cloneNode()")}}
  - : `Node`를 복제하며, 선택적으로 내부의 모든 콘텐츠를 함께 복제할 수도 있습니다. 기본적으로 노드의 콘텐츠를 복제합니다.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : 현재 노드의 위치와 다른 문서에 있는 노드 위치를 비교합니다.
- {{DOMxRef("Node.contains()")}}
  - : 해당 노드가 호출 노드의 자손인지 확인하여 `true` 혹은 `false`을 반환합니다.
- {{DOMxRef("Node.getRootNode()")}}
  - : 섀도우 루트가 있을 경우 이를 포함한 컨텍스트 객체 루트를 반환합니다.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : 현재 노드에 자식 노드가 있는지 확인하여 불리언 값을 반환합니다.
- {{DOMxRef("Node.insertBefore()")}}
  - : 지정된 부모 노드의 자식 앞에 참조노드로 `Node`를 삽입합니다.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : 네임스페이스 URI를 인수로 받아, 해당 네임스페이스가 현재 노드의 기본 네임스페이스이면 `true`를, 그렇지 않으면 `false`를 반환합니다.
- {{DOMxRef("Node.isEqualNode()")}}
  - : 두 노드의 타입이 같고 모든 특성 값이 일치하는지를 나타내는 불리언 값을 반환합니다.
- {{DOMxRef("Node.isSameNode()")}}
  - : 두 개의 노드가 참조하는 객체가 같은지 확인하여 불리언 값을 반환합니다.
- {{DOMxRef("Node.lookupPrefix()")}}
  - : 네임스페이스 URI에 해당하는 접두사가 존재하면 문자열로, 존재하지 않으면 `null`을 반환합니다. 사용 가능한 접두사가 여러 개인 경우 반환 결과는 구현에 따라 다를 수 있습니다.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : 접두사를 인수로 받아 현재 노드에서 해당 접두사와 연결된 네임스페이스 URI를 반환합니다. 연결된 URI가 없으면 `null`을 반환합니다. 접두사로 `null`을 전달하면 기본 네임스페이스 URI를 반환합니다.
- {{DOMxRef("Node.normalize()")}}
  - : 해당 요소 아래의 모든 텍스트 노드를 정리합니다. 인접한 텍스트 노드는 병합하고 빈 노드는 제거합니다.
- {{DOMxRef("Node.removeChild()")}}
  - : 현재 노드의 자식 노드를 제거합니다. 제거 대상은 반드시 직계 자식이어야 합니다.
- {{DOMxRef("Node.replaceChild()")}}
  - : 현재 노드의 자식 `Node` 중 하나를 매개변수로 전달된 다른 노드로 교체합니다.

## 이벤트

- {{domxref("Node/selectstart_event", "selectstart")}}
  - : 사용자가 노드에서 새로운 셀렉션을 시작할 때 발생합니다.

## 예제

### 노드에 중첩된 모든 자식 제거

이 함수는 자식이 없어질 때까지 요소의 첫번째 자식을 반복해서 제거합니다.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

이 함수는 한 번만 호출합니다. 다음 예제에서는 document의 body를 비웁니다.

```js
removeAllChildren(document.body);
```

대안으로 textContent를 빈 문자열로 설정할 수 있습니다. `document.body.textContent = ""`

### 자식 노드 재귀

다음 함수는 루트 노드(루트 자신 포함) 내의 모든 노드를 순회하며 콜백 함수를 호출합니다.

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

`rootNode`와 모든 자손 노드 각각에 대해 함수를 재귀적으로 호출합니다.

`callback`이 생략될 경우, 함수는 `rootNode`와 그 안에 포함된 모든 노드가 담긴 {{jsxref("Array")}}를 반환합니다.

`callback`이 제공된 상태에서 호출 시 `false`를 반환하면, 현재 재귀 단계를 중단하고 마지막 부모 단계에서 실행을 재개합니다.
특정 문자열을 포함한 텍스트 노드 검색과 같이 특정 노드를 찾은 후 순회를 중단할 때 활용할 수 있습니다.

이 함수에는 두 가지의 매개변수가 있습니다.

- `rootNode`
  - : 자손을 순회할 `Node` 객체입니다.
- `callback` {{optional_inline}}
  - : `Node`를 인수로 받는 선택적 콜백 [함수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)입니다. 생략할 경우 `eachNode`는 `rootNode`와 그 안에 포함된 모든 노드의 {{jsxref("Array")}}를 반환합니다.

다음은 `eachNode()` 함수를 사용하여 웹 페이지의 텍스트를 검색하는 예제입니다.

검색을 수행할 래퍼 함수 `grep`을 사용하겠습니다.

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignore anything which isn't a text node
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  });

  return matches;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
