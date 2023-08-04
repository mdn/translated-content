---
title: Document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
---

{{ApiRef("Document")}}

**`Document.createTreeWalker()`** 方法，能建立一個 {{domxref("TreeWalker")}} 物件並傳回.

## 語法

```plain
treeWalker = document.createTreeWalker(root, whatToShow, filter, entityReferenceExpansion);
```

### 參數

- _root_
  - : 是這個 {{domxref("TreeWalker")}} 遍歷的根節點(root {{domxref("Node")}}). Typically this will be an element owned by the document.
- _whatToShow {{optional_inline}}_
  - : Is an optional `unsigned long` representing a bitmask created by combining the constant properties of [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter). 它是一種方便的方法，用來過濾某些類型的節點。 It defaults to `0xFFFFFFFF` representing the `SHOW_ALL` constant.
    | Constant | 數值 | 說明 |
    | --------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL` | `-1` (that is the max value of `unsigned long`) | 顯示所有節點. |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}} | `2` | Shows attribute {{ domxref("Attr") }} nodes. This is meaningful only when creating a {{ domxref("TreeWalker") }} with an {{ domxref("Attr") }} node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}} | `8` | Shows {{ domxref("CDATASection") }} nodes. |
    | `NodeFilter.SHOW_COMMENT` | `128` | Shows {{ domxref("Comment") }} nodes. |
    | `NodeFilter.SHOW_DOCUMENT` | `256` | Shows {{ domxref("Document") }} nodes. |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT` | `1024` | Shows {{ domxref("DocumentFragment") }} nodes. |
    | `NodeFilter.SHOW_DOCUMENT_TYPE` | `512` | Shows {{ domxref("DocumentType") }} nodes. |
    | `NodeFilter.SHOW_ELEMENT` | `1` | Shows {{ domxref("Element") }} nodes. |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}} | `32` | Shows {{ domxref("Entity") }} nodes. This is meaningful only when creating a {{ domxref("TreeWalker") }} with an {{ domxref("Entity") }} node as its root; in this case, it means that the {{ domxref("Entity") }} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16` | Shows {{ domxref("EntityReference") }} nodes. |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}} | `2048` | Shows {{ domxref("Notation") }} nodes. This is meaningful only when creating a {{ domxref("TreeWalker") }} with a {{ domxref("Notation") }} node as its root; in this case, it means that the {{ domxref("Notation") }} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION` | `64` | Shows {{ domxref("ProcessingInstruction") }} nodes. |
    | `NodeFilter.SHOW_TEXT` | `4` | 顯示文字節點({{ domxref("Text") }} nodes). |
- _filter_ {{optional_inline}}
  - : 是一個可選的 {{domxref("NodeFilter")}}, 這是一個物件有著 `acceptNode` 方法, 這方法被 {{domxref("TreeWalker")}} 呼叫來決定是否接受通過 `whatToShow` 檢查的節點.
- _entityReferenceExpansion_ {{optional_inline}} {{Deprecated_Inline}}
  - : Is a {{domxref("Boolean")}} flag indicating if when discarding an {{domxref("EntityReference")}} its whole sub-tree must be discarded at the same time.

## Example

The following example goes through all nodes in the body, reduces the set of nodes to elements, simply passes through as acceptable each node (it could reduce the set in the `acceptNode()` method instead), and then makes use of tree walker iterator that is created to advance through the nodes (now all elements) and push them into an array.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface of the object it creates: {{domxref("TreeWalker")}}.
- [createTreeWalker on MSDN](<http://msdn.microsoft.com/en-us/library/ie/ff975302(v=vs.85).aspx>)
