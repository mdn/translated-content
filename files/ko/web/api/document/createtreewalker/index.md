---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
---

{{ApiRef("Document")}}

**`Document.createTreeWalker()`** 메소드는 새로운 {{domxref("TreeWalker")}} 객체를 반환합니다.

## 구문

```js
document.createTreeWalker(root, whatToShow[, filter[, entityReferenceExpansion]]);
```

### 매개변수

- `root`
  - : 이 {{domxref("TreeWalker")}} 순회의 루트 {{domxref("Node")}}이다. 이것은 보통 이 문서 소유의 한 엘리먼트이다.
- `whatToShow` {{optional_inline}}
  - | : [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)의 상수 프라퍼티들을 조합하여 만든 비트마스크를 나타내는 선택적인 `unsigned long` 이다. 이것은 특정 유형의 노드를 필터링하는 편리한 방법이다. 기본값은 `SHOW_ALL` 상수를 나타내는 `0xFFFFFFFF`이다. | 상수                             | 숫자 값                                                                                                                                                                                                                                                                                                                                                                                   | 설명 |
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
    | `NodeFilter.SHOW_ALL`                                                                                                                                                                                                                                                                                     | `-1` (`unsigned long의 최대 값`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}                                                                                                                                                                                                                                                         | `2`                              | Shows attribute {{domxref("Attr")}} nodes. This is meaningful only when creating a {{domxref("TreeWalker")}} with an {{domxref("Attr")}} node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}                                                                                                                                                                                                                                                     | `8`                              | Shows {{domxref("CDATASection")}} nodes.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                                                                                                                                                                                                                                                                                 | `128`                            | Shows {{domxref("Comment")}} nodes.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT`                                                                                                                                                                                                                                                                                | `256`                            | Shows {{domxref("Document")}} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                                                                                                                                                                                                                                                                       | `1024`                           | Shows {{domxref("DocumentFragment")}} nodes.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                                                                                                                                                                                                                                                           | `512`                            | Shows {{domxref("DocumentType")}} nodes.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ELEMENT`                                                                                                                                                                                                                                                                                 | `1`                              | Shows {{domxref("Element")}} nodes.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}                                                                                                                                                                                                                                                            | `32`                             | Shows {{domxref("Entity")}} nodes. This is meaningful only when creating a {{domxref("TreeWalker")}} with an {{domxref("Entity")}} node as its root; in this case, it means that the {{domxref("Entity")}} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.          |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}}                                                                                                                                                                                                                                                  | `16`                             | Shows {{domxref("EntityReference")}} nodes.                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}                                                                                                                                                                                                                                                          | `2048`                           | Shows {{domxref("Notation")}} nodes. This is meaningful only when creating a {{domxref("TreeWalker")}} with a {{domxref("Notation")}} node as its root; in this case, it means that the {{domxref("Notation")}} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                                                                                                                                                                                                                                                                  | `64`                             | Shows {{domxref("ProcessingInstruction")}} nodes.                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_TEXT`                                                                                                                                                                                                                                                                                    | `4`                              | Shows {{domxref("Text")}} nodes.                                                                                                                                                                                                                                                                                                                                                          |
- `filter` {{optional_inline}}
  - : 선택적인 {{domxref("NodeFilter")}}이다. {{domxref("TreeWalker")}}가 `whatToShow` 체크를 통과한 노드의 승인여부를 판단하기 위해 호출하는 `acceptNode` 메소드를 가진 객체이다.
- `entityReferenceExpansion` {{optional_inline}} {{deprecated_inline}}
  - : 한 {{domxref("EntityReference")}}를 버릴 때 그 전체 하위 트리를 같이 버려야하는지를 나타내는 {{domxref("Boolean")}} 플래그이다.

### 반환 값

새로운 {{domxref("TreeWalker")}} 객체.

## 예제

다음 예제는 body의 모든 노드들을 순회하고, 노드의 집합을 엘리먼트로 줄이고, 단순히 각 노드를 승인하고 (대신 `acceptNode()` 메소드에서 그 집합을 줄일 수도 있다), 노드들(지금은 모두 엘리먼트지만)을 전진하기 위해 생성된 트리 워커 반복자를 이용하여 배열에 푸시한다.

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);

var nodeList = [];

while (treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- 생성하는 객체의 인터페이스: {{domxref("TreeWalker")}}.
- [createTreeWalker on MSDN](<http://msdn.microsoft.com/en-us/library/ie/ff975302(v=vs.85).aspx>)
