---
title: Node
slug: Web/API/Node
---

{{APIRef("DOM")}}

**`Node`** es una interfaz en la cuál un número de objetos de tipo DOM API heredan. Esta interfaz permite que esos objetos sean tratados similarmente.

Las siguientes interfaces todas heredan de los metodos y propiedades de `Node`: {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("CharacterData")}} (heredan el {{domxref("Text")}}, el {{domxref("Comment")}}, y {{domxref("CDATASection")}}), {{domxref("ProcessingInstruction")}}, {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}}, {{domxref("EntityReference")}}

Estas interfaces pueden retornar null en casos particulares donde los métodos y las propiedades no son relevantes. Pueden retornar una excepción - por ejemplo cuando se agregan hijos a un tipo de node del cuál no puede existir hijos.

## Propiedades

_herendan propiedades de sus padres {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.baseURI")}} {{readonlyInline}}
  - : Retorna un {{domxref("DOMString")}} representando la base de la URL. El concepto de la base de la URL cambia de un lenguaje a otro; en HTML, le corresponde al protocolo, el nombre del dominio y la estructura del directorio, eso es todo hasta el último `'/'`.
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

  - : Returns an `unsigned short` representing the type of the node. Possible values are:

    | Name                                                     | Value |
    | -------------------------------------------------------- | ----- |
    | `ELEMENT_NODE`                                           | `1`   |
    | `ATTRIBUTE_NODE` {{deprecated_inline()}}        | `2`   |
    | `TEXT_NODE`                                              | `3`   |
    | `CDATA_SECTION_NODE` {{deprecated_inline()}}    | `4`   |
    | `ENTITY_REFERENCE_NODE` {{deprecated_inline()}} | `5`   |
    | `ENTITY_NODE` {{deprecated_inline()}}           | `6`   |
    | `PROCESSING_INSTRUCTION_NODE`                            | `7`   |
    | `COMMENT_NODE`                                           | `8`   |
    | `DOCUMENT_NODE`                                          | `9`   |
    | `DOCUMENT_TYPE_NODE`                                     | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`                                 | `11`  |
    | `NOTATION_NODE` {{deprecated_inline()}}         | `12`  |

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

## Methods

_Inherits methods from its parents {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.appendChild()")}}
  - : Insert a {{domxref("Node")}} as the last child node of this element.
- {{domxref("Node.cloneNode()")}}
  - : Clone a {{domxref("Node")}}, and optionally, all of its contents. By default, it clones the content of the node.
- {{domxref("Node.compareDocumentPosition()")}}
  - : Empty
- {{domxref("Node.contains()")}}
  - : Empty
- {{domxref("Node.getFeature()")}} {{deprecated_inline}}
  - : ...
- {{domxref("Node.getUserData()")}} {{deprecated_inline}}
  - : Allows a user to get some {{domxref("DOMUserData")}} from the node.
- {{domxref("Node.hasAttributes()")}} {{deprecated_inline}}
  - : Returns a {{domxref("Boolean")}} indicating if the element has any attributes, or not.
- {{domxref("Node.hasChildNodes()")}}
  - : Returns a {{domxref("Boolean")}} indicating if the element has any child nodes, or not.
- {{domxref("Node.insertBefore()")}}
  - : Inserts the first {{domxref("Node")}} given in a parameter immediately before the second, child of this element, {{domxref("Node")}}.
- {{domxref("Node.isDefaultNamespace()")}}
  - : Empty
- {{domxref("Node.isEqualNode()")}}
  - : Empty
- {{domxref("Node.isSameNode()")}} {{deprecated_inline}}
  - : Empty
- {{domxref("Node.isSupported()")}} {{deprecated_inline}}
  - : Returns a [`Boolean`](/es/docs/Web/API/Boolean) flag containing the result of a test whether the DOM implementation implements a specific feature and this feature is supported by the specific node.
- {{domxref("Node.lookupPrefix()")}}
  - : Empty
- {{domxref("Node.lookupNamespaceURI()")}}
  - : Empty
- {{domxref("Node.normalize()")}}
  - : Clean up all the text nodes under this element (merge adjacent, remove empty).
- {{domxref("Node.removeChild()")}}
  - : Removes a child node from the current element, which must be a child of the current node.
- {{domxref("Node.replaceChild()")}}
  - : Replaces one child {{domxref("Node")}} of the current one with the second one given in parameter.
- {{domxref("Node.setUserData()")}} {{deprecated_inline}}
  - : Allows a user to attach, or remove, {{domxref("DOMUserData")}} to the node.

## Examples

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

```
DOMComb(parentNode, callbackFunction);
```

#### Description

Recursively cycle all child nodes of `parentNode` and `parentNode` itself and execute the `callbackFunction` upon them as [`this`](/es/docs/JavaScript/Reference/Operators/this) objects.

#### Parameters

- `parentNode`
  - : The parent node (`Node Object`).
- `callbackFunction`
  - : The callback function ([`Function`](/es/docs/JavaScript/Reference/Global_Objects/Function)).

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
