---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
---

{{APIRef("DOM")}}

**`Node.insertBefore()`** 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다. 만약 주어진 자식 노드가 document에 존재하는 노드를 참조한다면, `insertBefore()` 가 자식 노드를 현재 위치에서 새로운 위치로 옮깁니다. (노드를 다른 노드에 추가하기 전에 상위 노드에서 제거할 필요가 없습니다)

이것은 노드가 document에 동시에 두 곳에 존재할 수 없다는 것을 의미합니다. 그러므로 노드가 이미 부모를 가지고 있다면, 노드가 제거된 뒤에 새로운 위치에 삽입됩니다. {{domxref("Node.cloneNode()")}} 로 노드를 새로운 부모 아래에 추가하기 전에 복사본을 만들수 있습니다. `cloneNode` 로 만들어진 복사본들은 자동으로 동기화 상태를 유지하지 않는다는 것을 알아두십시오.

만약 참조 노드가 `null` 이라면, 노드는 부모 노드의 자식 노드 리스트 맨 끝에 추가됩니다.

만약 자식 노드가 {{domxref("DocumentFragment")}} 이라면, {{domxref("DocumentFragment")}} 의 콘텐츠 전체는 부모 노드의 자식 리스트로 이동됩니다.

## Syntax

```js
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

`referenceNode` 가 `null` 이라면, `newNode` 가 자식 노드의 리스트의 끝에 삽입됩니다.

> **참고:** _`referenceNode`_ 는 **선택 인자가 아닙니다.** — 명시적으로 `Node` 나 `null` 를 전달해야 합니다. 전달하지 않거나 잘못된 값을 전달하면 브라우저 버전에 따라 다른 결과를 얻게 됩니다.

## Returns

반환값은 추가된 자식 노드입니다. 다만 `newNode` 가 {{domxref("DocumentFragment")}} 일 경우, 빈 {{domxref("DocumentFragment")}} 이 반환됩니다.

## Example 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Create the new node to insert
  var newNode = document.createElement("span");

  // Get a reference to the parent node
  var parentDiv = document.getElementById("childElement").parentNode;

  // Begin test case [ 1 ] : Exist a childElement --> All working correctly
  var sp2 = document.getElementById("childElement");
  parentDiv.insertBefore(newNode, sp2);
  // End test case [ 1 ]

  // Begin test case [ 2 ] : childElement is of Type undefined
  var sp2 = undefined; // Not exist a node of id "childElement"
  parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
  // End test case [ 2 ]

  // Begin test case [ 3 ] : childElement is of Type "undefined" ( string )
  var sp2 = "undefined"; // Not exist a node of id "childElement"
  parentDiv.insertBefore(newNode, sp2); // Generate "Type Error: Invalid Argument"
  // End test case [ 3 ]
</script>
```

- `insertedNode` The node being inserted, that is `newNode`
- `parentNode` The parent of the newly inserted node.
- `newNode` The node to be inserted.
- `referenceNode` The node before which `newNode` is inserted.

## Example 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Create a new, plain <span> element
  var sp1 = document.createElement("span");

  // Get a reference to the element, before we want to insert the element
  var sp2 = document.getElementById("childElement");
  // Get a reference to the parent element
  var parentDiv = sp2.parentNode;

  // Insert the new element into the DOM before sp2
  parentDiv.insertBefore(sp1, sp2);
</script>
```

There is no `insertAfter` method. It can be emulated by combining the `insertBefore` method with [`nextSibling`](/ko/docs/DOM/Node.nextSibling).

In the previous example, `sp1` could be inserted after `sp2` using:

```js
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

If `sp2` does not have a next sibling, then it must be the last child — `sp2.nextSibling` returns `null`, and `sp1` is inserted at the end of the child node list (immediately after `sp2`).

## Example 3

Insert an element before the first child element, using the [firstChild](/ko/docs/DOM/Node.firstChild) property.

```js
// Get a reference to the element in which we want to insert a new node
var parentElement = document.getElementById("parentElement");
// Get a reference to the first child
var theFirstChild = parentElement.firstChild;

// Create a new element
var newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);
```

When the element does not have a first child, then `firstChild` is `null`. The element is still appended to the parent, after the last child. Since the parent element did not have a first child, it did not have a last child either. Consequently, the new element is the only element, after insertion.

## 브라우저 호환성

{{Compat}}

## 명세서

{{Specifications}}

## See also

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("ParentNode.prepend()")}}
