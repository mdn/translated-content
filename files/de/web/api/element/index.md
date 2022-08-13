---
title: Element
slug: Web/API/Element
tags:
  - DOM
  - Interface
translation_of: Web/API/Element
---
{{ APIRef("DOM") }}

The **`Element`** interface represents an object of a {{domxref("Document")}}. This interface describes methods and properties common to all kinds of elements. Specific behaviors are described in interfaces which inherit from `Element` but add additional functionality. For example, the {{domxref("HTMLElement")}} interface is the base interface for HTML elements, while the {{domxref("SVGElement")}} interface is the basis for all SVG elements.

Languages outside the realm of the Web platform, like XUL through the `XULElement` interface, also implement it.

## Properties

_Inherits properties from its parents {{domxref("Node")}}, and its own parent, {{domxref("EventTarget")}}, and implements those of {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}},_ and {{domxref("Animatable")}}.

- {{ domxref("Element.attributes") }} {{readOnlyInline}}
  - : Returns a {{ domxref("NamedNodeMap") }} that lists all attributes associated with the element.
- {{ domxref("ParentNode.childElementCount") }}
  - : Is a {{jsxref("Number")}} representing the number of child nodes that are elements.
- {{ domxref("ParentNode.children") }}
  - : Is a live {{ domxref("HTMLCollection") }} containing all child elements of the element, as a collection.
- {{ domxref("Element.classList") }} {{readOnlyInline}}
  - : Returns a {{ domxref("DOMTokenList") }} containing the list of class attributes.
- {{ domxref("Element.className") }}
  - : Is a {{domxref("DOMString")}} representing the class of the element.
- {{ domxref("Element.clientHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the inner height of the element.
- {{ domxref("Element.clientLeft") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the width of the left border of the element.
- {{ domxref("Element.clientTop") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the width of the top border of the element.
- {{ domxref("Element.clientWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the inner width of the element.
- {{ domxref("ParentNode.firstElementChild") }}
  - : Is a {{ domxref("Element") }}, the first direct child element of an element, or `null` if the element has no child elements.
- {{ domxref("Element.id") }}
  - : Is a {{domxref("DOMString")}} representing the id of the element.
- {{ domxref("Element.innerHTML") }} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} representing the markup of the element's content.
- {{ domxref("ParentNode.lastElementChild") }}
  - : Is a {{ domxref("Element") }}, the last direct child element of an element, or `null` if the element has no child elements.
- {{ domxref("NonDocumentTypeChildNode.nextElementSibling") }}
  - : Is a {{ domxref("Element") }}, the element immediately following the given one in the tree, or `null` if there's no sibling node.
- {{ domxref("Element.outerHTML") }} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
- {{ domxref("NonDocumentTypeChildNode.previousElementSibling") }}
  - : Is a {{ domxref("Element") }}, the element immediately preceding the given one in the tree, or `null` if there is no sibling element.
- {{ domxref("Element.scrollHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view height of an element.
- {{ domxref("Element.scrollLeft") }} {{experimental_inline}}
  - : Is a {{jsxref("Number")}} representing the left scroll offset of the element.
- {{ domxref("Element.scrollLeftMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the maximum left scroll offset possible for the element.
- {{ domxref("Element.scrollTop") }} {{experimental_inline}}
  - : Is a {{jsxref("Number")}} representing the top scroll offset the an element.
- {{ domxref("Element.scrollTopMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Returns a{{jsxref("Number")}} representing the maximum top scroll offset possible for the element.
- {{ domxref("Element.scrollWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view width of the element.
- {{domxref("Element.shadowRoot") }} {{experimental_inline}} {{readOnlyInline}}
  - : ...
- {{ domxref("Element.tagName") }} {{readOnlyInline}}
  - : Returns a {{domxref("String")}} with the name of the tag for the given element.
- {{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the {{domxref("UndoManager")}} associated with the element.
- {{ domxref("Element.undoScope")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is an undo scope host, or not.

### Event handlers

- {{ domxref("Element.ongotpointercapture") }}
  - : …
- {{ domxref("Element.onlostpointercapture") }}
  - : …
- {{ domxref("Element.onwheel") }} {{ non-standard_inline() }}
  - : Returns the event handling code for the `wheel` event.

## Methods

_Inherits methods from its parents {{domxref("Node")}}, and its own parent, {{domxref("EventTarget")}}_, and implements those of {{domxref("ParentNode")}}, {{domxref("ChildNode")}}_, {{domxref("NonDocumentTypeChildNode")}},_ _and {{domxref("Animatable")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Registers an event handler to a specific event type on the element.
- {{ domxref("Element.closest()")}} {{experimental_inline}}
  - : Returns the {{domxref("Element")}}, descendant of this element (or this element itself), that is the closest ancestor of the elements selected by the selectors given in parameter.
- {{ domxref("Element.createShadowRoot()")}} {{experimental_inline}}
  - : …
- {{ domxref("EventTarget.dispatchEvent()") }}
  - : Dispatches an event to this node in the DOM and returns a {{jsxref("Boolean")}} that indicates that at least one handler has not canceled it.
- {{domxref("Element.find()")}}{{experimental_inline}}
  - : ...
- {{domxref("Element.findAll()")}}{{experimental_inline}}
  - : ...
- {{domxref("Animatable.getAnimationPlayers()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getAttribute()") }}
  - : Retrieves the value of the named attribute from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNS()") }}
  - : Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNode()") }} {{obsolete_inline}}
  - : Retrievse the node representation of the named attribute from the current node and returns it as an {{ domxref("Attr") }}.
- {{ domxref("Element.getAttributeNodeNS()") }} {{obsolete_inline}}
  - : Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an {{ domxref("Attr") }}.
- {{ domxref("Element.getBoundingClientRect()") }}` `{{experimental_inline}}
  - : ...
- {{ domxref("Element.getClientRects()") }} {{experimental_inline}} TYPE of returnvalue????
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{domxref("Element.getDestinationInsertionPoints()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getElementsByClassName()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} that contains all descendant of the current element that posses the list of classes given in parameter.
- {{ domxref("Element.getElementsByTagName()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name, from the current element.
- {{ domxref("Element.getElementsByTagNameNS()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name and namespace, from the current element.
- {{ domxref("Element.hasAttribute()") }}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute or not.
- {{ domxref("Element.hasAttributeNS()") }}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute, in the specified namespace, or not.
- {{ domxref("Element.insertAdjacentHTML") }} {{experimental_inline}}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{ domxref("Element.matches()") }}` `{{experimental_inline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether or not the element would be selected by the specified selector string.
- {{ domxref("Element.querySelector()") }}
  - : Returns {{ domxref("Node") }}...
- {{ domxref("Element.querySelectorAll") }}
  - : Returns a {{ domxref("NodeList") }}...
- {{ domxref("Element.releasePointerCapture")}} {{experimental_inline}}
  - : …
- {{domxref("ChildNode.remove()")}}
  - : Removes the element from the children list of its parent.
- {{ domxref("Element.removeAttribute()") }}
  - : Removes the named attribute from the current node.
- {{ domxref("Element.removeAttributeNS()") }}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.removeAttributeNode()") }} {{obsolete_inline}}
  - : Removes the node representation of the named attribute from the current node.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Removes an event listener from the element.
- {{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}
  - : Asynchronously asks the browser to make the element full-screen.
- {{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.

<!---->

- {{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}
  - : Scrolls the page until the element gets into the view.
- {{ domxref("Element.setAttribute()") }}
  - : Sets the value of a named attribute of the current node.
- {{ domxref("Element.setAttributeNS()") }}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.setAttributeNode()") }} {{obsolete_inline}}
  - : Sets the node representation of the named attribute from the current node.
- {{ domxref("Element.setAttributeNodeNS()") }} {{obsolete_inline}}
  - : Setw the node representation of the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.setCapture()") }} {{non-standard_inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{domxref("Element.setPointerCapture()")}}
  - : …

## Specifications

| Specification                                                                                                | Status                                       | Comment                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("Web Animations", '', '')}}                                                         | {{Spec2("Web Animations")}}         | Added the `getAnimationPlayers()` method.                                                                                                                                                                                                                                                                     |
| {{SpecName('Undo Manager', '', 'Element')}}                                                     | {{Spec2('Undo Manager')}}             | Added the `undoScope` and `undoManager` properties.                                                                                                                                                                                                                                                           |
| {{SpecName('Pointer Events', '#extensions-to-the-element-interface', 'Element')}} | {{Spec2('Pointer Events')}}         | Added the following event handlers: `ongotpointercapture` and `onlostpointercapture`. Added the following methods: `setPointerCapture()` and `releasePointerCapture()`.                                                                                                                                       |
| {{SpecName('Selectors API Level 2', '#interface-definitions', 'Element')}}         | {{Spec2('Selectors API Level 2')}} | Added the following methods:` matches()` (implemented as `mozMatchesSelector()`), `find()`, `findAll()`.                                                                                                                                                                                                      |
| {{SpecName('Selectors API Level 1', '#interface-definitions', 'Element')}}         | {{Spec2('Selectors API Level 1')}} | Added the following methods: `querySelector()` and `querySelectorAll()`.                                                                                                                                                                                                                                      |
| {{SpecName('Pointer Lock', 'index.html#element-interface', 'Element')}}             | {{Spec2('Pointer Lock')}}             | Added the `requestPointerLock()` method.                                                                                                                                                                                                                                                                      |
| {{SpecName('Fullscreen', '#api', 'Element')}}                                                 | {{Spec2('Fullscreen')}}             | Added the `requestFullscreen()` method.                                                                                                                                                                                                                                                                       |
| {{SpecName('DOM Parsing', '#extensions-to-the-element-interface', 'Element')}}     | {{Spec2('DOM Parsing')}}             | Added the following properties: `innerHTML`, and `outerHTML`. Added the following method: `insertAdjacentHTML()`.                                                                                                                                                                                             |
| {{SpecName('CSSOM View', '#extensions-to-the-element-interface', 'Element')}}     | {{Spec2('CSSOM View')}}             | Added the following properties: `scrollTop`, `scrollLeft`, `scrollWidth`, `scrollHeight`, `clientTop`, `clientLeft`, `clientWidth`, and `clientHeight`. Added the following methods: `getClientRects()`, `getBoundingClientRect()`, and `scrollIntoView()`.                                                   |
| {{SpecName('Element Traversal', '#ecmascript-bindings', 'Element')}}                 | {{Spec2('Element Traversal')}}     | Added inheritance of the {{domxref("ElementTraversal")}} interface.                                                                                                                                                                                                                                  |
| {{SpecName('DOM WHATWG', '#interface-element', 'Element')}}                             | {{Spec2('DOM WHATWG')}}             | Removed the following methods: `closest()`, `setIdAttribute()`, `setIdAttributeNS()`, and `setIdAttributeNode()`. Removed the `schemaTypeInfo` property. Modified the return value of `getElementsByTag()` and `getElementsByTagNS()`. Moved `hasAttributes()` form the `Node` interface to this one.         |
| {{SpecName('DOM3 Core', 'core.html#ID-745549614', 'Element')}}                         | {{Spec2('DOM3 Core')}}                 | Added the following methods: `setIdAttribute()`, `setIdAttributeNS()`, and `setIdAttributeNode()`. These methods were never implemented and have been removed in later specifications. Added the `schemaTypeInfo` property. This property was never implemented and has been removed in later specifications. |
| {{SpecName('DOM2 Core', 'core.html#ID-745549614', 'Element')}}                         | {{Spec2('DOM2 Core')}}                 | The `normalize()` method has been moved to {{domxref("Node")}}.                                                                                                                                                                                                                                          |
| {{SpecName('DOM1', 'level-one-core.html#ID-745549614', 'Element')}}                     | {{Spec2('DOM1')}}                     | Initial definition.                                                                                                                                                                                                                                                                                           |

## Browser compatibility

{{Compat}}

\[1] Internet Explorer 7 and 8 incorrectly return the comments as part of the children of an Element. This is fixed in Internet Explorer 9 and later.

\[2] Chrome 16 allowed `webkitRequestPointerLock()` only in fullscreen; Chrome 21 for trusted web site (permission asked); Chrome 22 allowed it by default for all same-origin document; Chrome 23 allowed it in sandboxed {{HTMLElement("iframe")}} if the non-standard value `webkit-allow-pointer-lock` is set to the {{htmlattrxref("sandbox", "iframe")}} attribute.
