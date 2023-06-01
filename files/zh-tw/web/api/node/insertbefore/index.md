---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
---

{{APIRef("DOM")}}

**`Node.insertBefore()`** 方法將一個節點安插在參考節點之前，作為某個特定父節點之子節點。If the given child is a reference to an existing node in the document, `insertBefore()` moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).

同一個節點並不會同時出現在兩個地方。所以當節點已經有父節點，它會先被移除，然後被插入在新的位置上。The {{domxref("Node.cloneNode()")}} can be used to make a copy of the node before appending it under the new parent. Note that the copies made with `cloneNode` will not be automatically kept in sync.

若參考節點為 `null`, 那需插入的節點就會成為特定父節點的最後一個子節點。

If the given child is a {{domxref("DocumentFragment")}}, the entire contents of the {{domxref("DocumentFragment")}} are moved into the child list of the specified parent node.

## Syntax

```js
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

If `referenceNode` is `null`, the `newNode` is inserted at the end of the list of child nodes.

> **備註：** _`referenceNode`_ **並非**可選擇的參數 -- 一定要傳入一個`節點`或是 `null`。若是傳入失敗或不正確的參數，可能會依不同的瀏覽器版本而有[不同的](https://bugzilla.mozilla.org/show_bug.cgi?id=119489)[行為](https://code.google.com/p/chromium/issues/detail?id=419780)。

## Returns

會回傳新加入的子節點。若該值(`newNode`)是{{domxref("DocumentFragment")}}, 則回傳空的 {{domxref("DocumentFragment")}}。

## Example

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

- `insertedNode` 被插入的節點，也就是 `newNode`。
- `parentNode` 指定的父節點。
- `newNode` 被插入的節點。
- `referenceNode` 參考節點。The node before which `newNode` is inserted.

## Example

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

There is no `insertAfter` method. It can be emulated by combining the `insertBefore` method with [`nextSibling`](/zh-TW/docs/DOM/Node.nextSibling).

In the previous example, `sp1` could be inserted after `sp2` using:

```js
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

If `sp2` does not have a next sibling, then it must be the last child — `sp2.nextSibling` returns `null`, and `sp1` is inserted at the end of the child node list (immediately after `sp2`).

## Example

Insert an element before the first child element, using the [firstChild](/zh-TW/docs/DOM/Node.firstChild) property.

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

## Browser compatibility

{{Compat}}

## Specifications

{{Specifications}}

## See also

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("ParentNode.prepend()")}}
