---
title: Node
slug: Web/API/Node
---

{{APIRef("DOM")}}

**`Node`** 是一個被多種 DOM 類型繼承的介面，它讓各種類型的 DOM 都能以同樣的方式來操作。如繼承了相同的方法，或能以相同的方式測試。

`Node` 繼承自 {{domxref("EventTarget")}}，而繼承了 `Node` 的屬性及方法的介面則有：{{domxref("Document")}}、{{domxref("Element")}}、{{domxref("CharacterData")}}（被 {{domxref("Text")}}、{{domxref("Comment")}} 以及 {{domxref("CDATASection")}} 所繼承）、{{domxref("ProcessingInstruction")}}、{{domxref("DocumentFragment")}}、{{domxref("DocumentType")}}、{{domxref("Notation")}}、{{domxref("Entity")}}、{{domxref("EntityReference")}}。

These interfaces may return null in particular cases where the methods and properties are not relevant. They may throw an exception - for example when adding children to a node type for which no children can exist.

{{InheritanceDiagram}}

## 屬性

_Inherits properties from its parents {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.baseURI")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the base URL. The concept of base URL changes from one language to another; in HTML, it corresponds to the protocol, the domain name and the directory structure, that is all until the last `'/'`.
- {{domxref("Node.baseURIObject")}} {{Non-standard_inline()}}
  - : (Not available to web content.) The read-only `nsIURI` object representing the base URI for the element.
- {{domxref("Node.childNodes")}} {{readonlyInline}}
  - : Returns a live {{domxref("NodeList")}} containing all the children of this node. {{domxref("NodeList")}} being live means that if the children of the `Node` change, the {{domxref("NodeList")}} object is automatically updated.
- {{domxref("Node.firstChild")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the first direct child node of the node, or `null` if the node has no child.
- {{domxref("Node.lastChild")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the last direct child node of the node, or `null` if the node has no child.
- {{domxref("Node.nextSibling")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the next node in the tree, or `null` if there isn't such node.
- {{domxref("Node.nodeName")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the name of the `Node`. The structure of the name will differ with the node type. E.g. An {{domxref("HTMLElement")}} will contain the name of the corresponding tag, like `'audio'` for an {{domxref("HTMLAudioElement")}}, a {{domxref("Text")}} node will have the `'#text'` string, or a {{domxref("Document")}} node will have the `'#document'` string.
- {{domxref("Node.nodePrincipal")}} {{Non-standard_inline()}}
  - : A `nsIPrincipal` representing the node principal.
- {{domxref("Node.nodeType")}}{{readonlyInline}}
  - | : Returns an `unsigned short` representing the type of the node. Possible values are: | Name | Value |
    | ------------------------------------------------------------------------------------- | ---- | ----- |
    | `ELEMENT_NODE`                                                                        | `1`  |
    | `ATTRIBUTE_NODE` {{deprecated_inline()}}                                     | `2`  |
    | `TEXT_NODE`                                                                           | `3`  |
    | `CDATA_SECTION_NODE` {{deprecated_inline()}}                                 | `4`  |
    | `ENTITY_REFERENCE_NODE` {{deprecated_inline()}}                              | `5`  |
    | `ENTITY_NODE` {{deprecated_inline()}}                                        | `6`  |
    | `PROCESSING_INSTRUCTION_NODE`                                                         | `7`  |
    | `COMMENT_NODE`                                                                        | `8`  |
    | `DOCUMENT_NODE`                                                                       | `9`  |
    | `DOCUMENT_TYPE_NODE`                                                                  | `10` |
    | `DOCUMENT_FRAGMENT_NODE`                                                              | `11` |
    | `NOTATION_NODE` {{deprecated_inline()}}                                      | `12` |
- {{domxref("Node.nodeValue")}}
  - : Returns / Sets the value of the current node
- {{domxref("Node.ownerDocument")}} {{readonlyInline}}
  - : Returns the {{domxref("Document")}} that this node belongs to. If no document is associated with it, returns `null`.
- {{domxref("Node.parentNode")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns `null`.
- {{domxref("Node.parentElement")}} {{readonlyInline}}
  - : Returns an {{domxref("Element")}} that is the parent of this node. If the node has no parent, or if that parent is not an {{domxref("Element")}}, this property returns `null`.
- {{domxref("Node.previousSibling")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the previous node in the tree, or `null` if there isn't such node.
- {{domxref("Node.textContent")}}
  - : Returns / Sets the textual content of an element and all its descendants.

### Deprecated properties

- {{domxref("Node.rootNode")}} {{readOnlyInline}} {{deprecated_inline}}
  - : Returns a {{domxref("Node")}} object representing the topmost node in the tree, or the current node if it's the topmost node in the tree. This has been replaced by {{domxref("Node.getRootNode()")}}.

### Obsolete properties

- {{domxref("Node.localName")}} {{Deprecated_Inline}}{{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the local part of the qualified name of an element.

    > **備註：** In Firefox 3.5 and earlier, the property upper-cases the local name for HTML elements (but not XHTML elements). In later versions, this does not happen, so the property is in lower case for both HTML and XHTML.
- {{domxref("Node.namespaceURI")}} {{Deprecated_Inline}}{{readonlyInline}}
  - : The namespace URI of this node, or `null` if it is no namespace.

    > **備註：** In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`https://www.w3.org/1999/xhtml/`](https://www.w3.org/1999/xhtml/) namespace in both HTML and XML trees.
- {{domxref("Node.prefix")}} {{Deprecated_Inline}}{{readonlyInline}}
  - : Is a {{domxref("DOMString")}} representing the namespace prefix of the node, or `null` if no prefix is specified.

## 方法

_Inherits methods from its parent, {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.appendChild()")}}
  - : Adds the specified childNode argument as the last child to the current node.
    If the argument referenced an existing node on the DOM tree, the node will be detached from its current position and attached at the new position.
- {{domxref("Node.cloneNode()")}}
  - : Clone a {{domxref("Node")}}, and optionally, all of its contents. By default, it clones the content of the node.
- {{domxref("Node.compareDocumentPosition()")}}
  - : Compares the position of the current node against another node in any other document.
- {{domxref("Node.contains()")}}
  - : Returns a {{jsxref("Boolean")}} value indicating whether a node is a descendant of a given node or not.
- {{domxref("Node.getRootNode()")}}
  - : Returns the context object's root which optionally includes the shadow root if it is available.
- {{domxref("Node.hasChildNodes()")}}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has any child nodes, or not.
- {{domxref("Node.insertBefore()")}}
  - : Inserts a {{domxref("Node")}} before the reference node as a child of the current node.
- {{domxref("Node.isDefaultNamespace()")}}
  - : Accepts a namespace URI as an argument and returns a {{jsxref("Boolean")}} with a value of `true` if the namespace is the default namespace on the given node or `false` if not.
- {{domxref("Node.isEqualNode()")}}
  - : Returns a {{jsxref("Boolean")}} which indicates whether or not two nodes are of the same type and all their defining data points match.
- {{domxref("Node.isSameNode()")}}
  - : Returns a {{jsxref("Boolean")}} value indicating whether or not the two nodes are the same (that is, they reference the same object).
- {{domxref("Node.lookupPrefix()")}}
  - : Returns a {{domxref("DOMString")}} containing the prefix for a given namespace URI, if present, and `null` if not. When multiple prefixes are possible, the result is implementation-dependent.
- {{domxref("Node.lookupNamespaceURI()")}}
  - : Accepts a prefix and returns the namespace URI associated with it on the given node if found (and `null` if not). Supplying `null` for the prefix will return the default namespace.
- {{domxref("Node.normalize()")}}
  - : Clean up all the text nodes under this element (merge adjacent, remove empty).
- {{domxref("Node.removeChild()")}}
  - : Removes a child node from the current element, which must be a child of the current node.
- {{domxref("Node.replaceChild()")}}
  - : Replaces one child {{domxref("Node")}} of the current one with the second one given in parameter.

### Obsolete methods

- {{domxref("Node.getFeature()")}} {{Deprecated_Inline}}
  - : x
- {{domxref("Node.getUserData()")}} {{Deprecated_Inline}}
  - : Allows a user to get some {{domxref("DOMUserData")}} from the node.
- {{domxref("Node.hasAttributes()")}} {{Deprecated_Inline}}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has any attributes, or not.
- {{domxref("Node.isSupported()")}} {{Deprecated_Inline}}
  - : Returns a {{jsxref("Boolean")}} flag containing the result of a test whether the DOM implementation implements a specific feature and this feature is supported by the specific node.
- {{domxref("Node.setUserData()")}} {{Deprecated_Inline}}
  - : Allows a user to attach, or remove, {{domxref("DOMUserData")}} to the node.

## 範例

### Browse all child nodes

The following function recursively cycles all child nodes of a node and executes a callback function upon them (and upon the parent node itself).

```js
function DOMComb (oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback.call(oParent);
}
```

#### Syntax

```plain
DOMComb(parentNode, callbackFunction);
```

#### Description

Recursively cycle all child nodes of `parentNode` and `parentNode` itself and execute the `callbackFunction` upon them as [`this`](/zh-TW/docs/JavaScript/Reference/Operators/this) objects.

#### Parameters

- `parentNode`
  - : The parent node (`Node Object`).
- `callbackFunction`
  - : The callback function ([`Function`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function)).

#### Sample usage

The following example send to the `console.log` the text content of the body:

```js
function printContent () {
  if (this.nodeValue) { console.log(this.nodeValue); }
}

onload = function () {
  DOMComb(document.body, printContent);
};
```

### Remove all children nested within a node

```js
Element.prototype.removeAll = function () {
  while (this.firstChild) { this.removeChild(this.firstChild); }
  return this;
};
```

#### Sample usage

```js
/* ... an alternative to document.body.innerHTML = "" ... */
document.body.removeAll();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
