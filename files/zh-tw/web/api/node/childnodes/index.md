---
title: Node.childNodes
slug: Web/API/Node/childNodes
---

{{APIRef("DOM")}}

**`Node.childNodes`** 唯讀屬性會回傳一個*即時更新的動態集合（live collection）*，其包含了指定元素的子{{domxref("Node","節點")}}，而第一個子節點會被指派為索引 0。

## 語法

```plain
var ndList = elementNodeReference.childNodes;
```

_ndList_ 是一個 {{domxref("NodeList")}}，為一個有順序性、由目前元素之 DOM 子節點組成之集合。假如目前元素沒有子節點，則 _ndList_ 會是空的。

範例

```js
// parg is an object reference to a <p> element

// First check that the element has child nodes
if (parg.hasChildNodes()) {
  var children = parg.childNodes;

  for (var i = 0; i < children.length; i++) {
    // do something with each child as children[i]
    // NOTE: List is live, adding or removing children will change the list
  }
}
```

---

```js
// This is one way to remove all children from a node
// box is an object reference to an element

while (box.firstChild) {
  //The list is LIVE so it will re-index each call
  box.removeChild(box.firstChild);
}
```

## 備註

The items in the collection of nodes are objects and not strings. To get data from node objects, use their properties (e.g. `elementNodeReference.childNodes[1].nodeName` to get the name, etc.).

The `document` object itself has 2 children: the Doctype declaration and the root element, typically referred to as `documentElement`. (In (X)HTML documents this is the `HTML` element.)

`childNodes` includes all child nodes, including non-element nodes like text and comment nodes. To get a collection of only elements, use {{ domxref("ParentNode.children") }} instead.

## 規範

- [W3C DOM 2 Core: childNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1451460987)
- [W3C DOM 3 Core: childNodes](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987)
- [W3C DOM 3 NodeList interface](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177)

## 參見

- {{ domxref("Node.firstChild") }}
- {{ domxref("Node.lastChild") }}
- {{ domxref("Node.nextSibling") }}
- {{ domxref("Node.previousSibling") }}
- {{ domxref("ParentNode.children") }}
