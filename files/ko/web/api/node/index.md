---
title: Node
slug: Web/API/Node
---
{{APIRef("DOM")}}

**`Node`** 는 여러 가지 DOM 타입들이 상속하는 인터페이스이며 그 다양한 타입들을 비슷하게 처리할 수 있게 한다. 예를들어, 똑같은 메소드를 상속하거나 똑같은 방식으로 테스트를 할수있다

다음의 인터페이스들은 모두 `Node`로부터 메소드와 프라퍼티를 상속한다: {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} ({{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("CDATASection")}}이 상속), {{domxref("ProcessingInstruction")}}, {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}}, {{domxref("EntityReference")}}

이 인터페이스들은 메소드나 프라퍼티가 적합하지 않은 경우에 `null`을 반환할 수 있다. 그들은 예외를 발생할 수 있다 - 예를 들어 자식이 있을 수 없는 노드 타입에 자식을 추가할 때 말이다.

## 프라퍼티 <속성>

_부모인 {{domxref("EventTarget")}}으로부터 프라퍼티를 상속한다_.\[1]

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
- {{domxref("Node.localName")}} {{deprecated_inline}}{{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the local part of the qualified name of an element. In Firefox 3.5 and earlier, the property upper-cases the local name for HTML elements (but not XHTML elements). In later versions, this does not happen, so the property is in lower case for both HTML and XHTML.
    Though recent specifications require `localName` to be defined on the {{domxref("Element")}} interface, Gecko-based browsers still implement it on the {{domxref("Node")}} interface.
- {{domxref("Node.namespaceURI")}} {{deprecated_inline}}{{readonlyInline}}
  - : The namespace URI of this node, or `null` if it is no namespace. In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) namespace in both HTML and XML trees.
    Though recent specifications require `namespaceURI` to be defined on the {{domxref("Element")}} interface, Gecko-based browsers still implement it on the {{domxref("Node")}} interface.
- {{domxref("Node.nextSibling")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the next node in the tree, or `null` if there isn't such node.
- {{domxref("Node.nodeName")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the name of the `Node`. The structure of the name will differ with the name type. E.g. An {{domxref("HTMLElement")}} will contain the name of the corresponding tag, like `'audio'` for an {{domxref("HTMLAudioElement")}}, a {{domxref("Text")}} node will have the `'#text'` string, or a {{domxref("Document")}} node will have the `'#document'` string.
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
  - : Is a {{domxref("DOMString")}} representing the value of an object. For most `Node` type, this returns `null` and any set operation is ignored. For nodes of type `TEXT_NODE` ({{domxref("Text")}} objects), `COMMENT_NODE` ({{domxref("Comment")}} objects), and `PROCESSING_INSTRUCTION_NODE` ({{domxref("ProcessingInstruction")}} objects), the value corresponds to the text data contained in the object.
- {{domxref("Node.ownerDocument")}} {{readonlyInline}}
  - : Returns the {{domxref("Document")}} that this node belongs to. If no document is associated with it, returns `null`.
- {{domxref("Node.parentNode")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns `null`.
- {{domxref("Node.parentElement")}} {{readonlyInline}}
  - : Returns an {{domxref("Element")}} that is the parent of this node. If the node has no parent, or if that parent is not an {{domxref("Element")}}, this property returns `null`.
- {{domxref("Node.prefix")}} {{deprecated_inline}}{{readonlyInline}}
  - : Is a {{domxref("DOMString")}} representing the namespace prefix of the node, or `null` if no prefix is specified.
    Though recent specifications require `prefix` to be defined on the {{domxref("Element")}} interface, Gecko-based browsers still implement it on the {{domxref("Node")}} interface.
- {{domxref("Node.previousSibling")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} representing the previous node in the tree, or `null` if there isn't such node.
- {{domxref("Node.textContent")}}
  - : Is a {{domxref("DOMString")}} representing the textual content of an element and all its descendants.

## 메소드

_부모인 {{domxref("EventTarget")}}으로부터 메소드를 상속한다_.\[1]

- {{DOMxRef("Node.appendChild()")}}
  - : Adds the specified `childNode` argument as the last child to
    the current node.
    If the argument referenced an existing node on the DOM tree, the node will be detached
    from its current position and attached at the new position.
- {{DOMxRef("Node.cloneNode()")}}
  - : Clone a `Node`, and optionally, all of its contents. By default, it
    clones the content of the node.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Compares the position of the current node against another node in any other
    document.
- {{DOMxRef("Node.contains()")}}
  - : Returns `true` or `false` value indicating whether or not a node is a
    descendant of the calling node.
- {{DOMxRef("Node.getRootNode()")}}
  - : Returns the context object's root which optionally includes the shadow root if it is
    available.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Returns a boolean value indicating whether or not the element has any child
    nodes.
- {{DOMxRef("Node.insertBefore()")}}
  - : Inserts a `Node` before the reference node as a child of a specified
    parent node.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Accepts a namespace URI as an argument and returns a boolean value with a
    value of `true` if the namespace is the default namespace on the given node
    or `false` if not.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Returns a boolean value which indicates whether or not two nodes are of the
    same type and all their defining data points match.
- {{DOMxRef("Node.isSameNode()")}}
  - : Returns a boolean value indicating whether or not the two nodes are
    the same (that is, they reference the same object).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Returns a string containing the prefix for a given namespace URI,
    if present, and `null` if not. When multiple prefixes are possible, the
    result is implementation-dependent.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Accepts a prefix and returns the namespace URI associated with it on the given node
    if found (and `null` if not). Supplying `null` for the prefix
    will return the default namespace.
- {{DOMxRef("Node.normalize()")}}
  - : Clean up all the text nodes under this element (merge adjacent, remove empty).
- {{DOMxRef("Node.removeChild()")}}
  - : Removes a child node from the current element, which must be a child of the current
    node.
- {{DOMxRef("Node.replaceChild()")}}
  - : Replaces one child `Node` of the current one with the second one given
    in parameter.

## 예제

### 모든 자식 노드 탐색

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

```js
DOMComb(parentNode, callbackFunction);
```

#### Description

Recursively cycle all child nodes of `parentNode` and `parentNode` itself and execute the `callbackFunction` upon them as [`this`](/ko/docs/JavaScript/Reference/Operators/this) objects.

#### Parameters

- `parentNode`
  - : The parent node (`Node Object`).
- `callbackFunction`
  - : The callback function ([`Function`](/ko/docs/JavaScript/Reference/Global_Objects/Function)).

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

### 한 노드 안에 중첩된 모든 자식 제거

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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
