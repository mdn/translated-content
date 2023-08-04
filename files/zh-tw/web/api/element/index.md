---
title: Element
slug: Web/API/Element
---

{{ APIRef("DOM") }}

**`Element`** 介面表示了一個在 {{domxref("Document")}} 中的物件，其描述了各類型元素的共同屬性與方法，`Element` 的子介面則定義了不同類型元素的具體行為並增加額外的功能。例如 {{domxref("HTMLElement")}} 為所有 HTML 元素的基礎介面，而 {{domxref("SVGElement")}} 則是定義所有 SVG 元素的介面。

在 Web 領域之外，如 XUL 語言也能藉由 `XULElement` 介面來繼承 `Element`。

{{InheritanceDiagram}}

## 屬性

_Inherits properties from its parent interface, {{domxref("Node")}}, and by extension that interface's parent, {{domxref("EventTarget")}}. It implements the properties of {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}},_ and {{domxref("Animatable")}}.

- {{ domxref("Element.assignedSlot")}} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the {{domxref("HTMLSlotElement")}} interface associated with the element.
- {{ domxref("Element.attributes") }} {{readOnlyInline}}
  - : Returns a {{ domxref("NamedNodeMap") }} object containing the assigned attributes of the corresponding HTML element.
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
- {{domxref("Element.computedName")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the label exposed to accessibility.
- {{domxref("Element.computedRole")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the ARIA role that has been applied to a particular element.
- {{ domxref("Element.id") }}
  - : Is a {{domxref("DOMString")}} representing the id of the element.
- {{ domxref("Element.innerHTML") }}
  - : Is a {{domxref("DOMString")}} representing the markup of the element's content.
- {{ domxref("Element.localName") }} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the local part of the qualified name of the element.
- {{domxref("Element.namespaceURI")}} {{readonlyInline}}

  - : The namespace URI of the element, or `null` if it is no namespace.

    > **備註：** In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) namespace in both HTML and XML trees.

- {{ domxref("NonDocumentTypeChildNode.nextElementSibling") }} {{readOnlyInline}}
  - : Is a {{ domxref("Element") }}, the element immediately following the given one in the tree, or `null` if there's no sibling node.
- {{ domxref("Element.outerHTML") }} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
- {{ domxref("Element.prefix") }} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the namespace prefix of the element, or `null` if no prefix is specified.
- {{ domxref("NonDocumentTypeChildNode.previousElementSibling") }} {{readOnlyInline}}
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
  - : Returns a {{jsxref("Number")}} representing the maximum top scroll offset possible for the element.
- {{ domxref("Element.scrollWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view width of the element.
- {{domxref("Element.shadowRoot") }} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the youngest shadow root that is hosted by the element.
- {{domxref("Element.slot")}} {{experimental_inline}}
  - : Returns the name of the shadow DOM slot attatched to the element. A slot is a placeholder inside a web component that users can fill with their own markup.
- {{domxref("Element.tabStop")}} {{non-standard_inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element can receive input focus via the tab key.
- {{ domxref("Element.tagName") }} {{readOnlyInline}}
  - : Returns a {{domxref("String")}} with the name of the tag for the given element.
- {{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the {{domxref("UndoManager")}} associated with the element.
- {{ domxref("Element.undoScope")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is an undo scope host, or not.

> **備註：** DOM Level 3 defined `namespaceURI`, `localName` and `prefix` on the {{domxref("Node")}} interface. In DOM4 they were moved to `Element`.This change is implemented in Chrome since version 46.0 and Firefox since version 48.0.

### 事件處理器

- {{ domxref("Element.ongotpointercapture") }}
  - : Returns the event handler for the `gotpointercapture` event type.
- {{ domxref("Element.onlostpointercapture") }}
  - : Returns the event handler for the `lostpointercapture` event type.
- {{ domxref("Element.onwheel") }} {{ non-standard_inline() }}
  - : Returns the event handling code for the `wheel` event.

## 方法

_Inherits methods from its parents {{domxref("Node")}}, and its own parent, {{domxref("EventTarget")}}_, and implements those of {{domxref("ParentNode")}}, {{domxref("ChildNode")}}_, {{domxref("NonDocumentTypeChildNode")}},_ _and {{domxref("Animatable")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Registers an event handler to a specific event type on the element.
- {{domxref("Element.attachShadow()")}} {{experimental_inline}}
  - : Attatches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.
- {{domxref("Element.animate()")}} {{experimental_inline}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{ domxref("Element.closest()")}} {{experimental_inline}}
  - : Returns the {{domxref("Element")}}, descendant of this element (or this element itself), that is the closest ancestor of the elements selected by the selectors given in parameter.
- {{ domxref("Element.createShadowRoot()")}} {{experimental_inline}} {{deprecated_inline()}}
  - : Creates a [shadow DOM](/zh-TW/docs/Web/Web_Components/Shadow_DOM) on on the element, turning it into a shadow host. Returns a {{domxref("ShadowRoot")}}.
- {{ domxref("EventTarget.dispatchEvent()") }}
  - : Dispatches an event to this node in the DOM and returns a {{jsxref("Boolean")}} that indicates that at least one handler has not canceled it.
- {{domxref("Element.find()")}}{{experimental_inline}}
  - : ...
- {{domxref("Element.findAll()")}}{{experimental_inline}}
  - : ...
- {{domxref("Element.getAnimations()")}} {{experimental_inline}}
  - : Returns an array of Animation objects currently active on the element.
- {{ domxref("Element.getAttribute()") }}
  - : Retrieves the value of the named attribute from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNames()") }}
  - : TBD
- {{ domxref("Element.getAttributeNS()") }}
  - : Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNode()") }} {{Deprecated_Inline}}
  - : Retrieves the node representation of the named attribute from the current node and returns it as an {{ domxref("Attr") }}.
- {{ domxref("Element.getAttributeNodeNS()") }} {{Deprecated_Inline}}
  - : Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an {{ domxref("Attr") }}.
- {{ domxref("Element.getBoundingClientRect()") }}
  - : ...
- {{ domxref("Element.getClientRects()") }}
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{domxref("Element.getDestinationInsertionPoints()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getElementsByClassName()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} that contains all descendants of the current element that possess the list of classes given in the parameter.
- {{ domxref("Element.getElementsByTagName()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name, from the current element.
- {{ domxref("Element.getElementsByTagNameNS()") }}
  - : Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name and namespace, from the current element.
- {{ domxref("Element.hasAttribute()") }}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute or not.
- {{ domxref("Element.hasAttributeNS()") }}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute, in the specified namespace, or not.
- {{ domxref("Element.hasAttributes()") }}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has one or more HTML attributes present.
- {{ domxref("Element.insertAdjacentElement") }} {{experimental_inline}}
  - : Inserts a given element node at a given position relative to the element it is invoked upon.
- {{ domxref("Element.insertAdjacentHTML") }} {{experimental_inline}}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{ domxref("Element.insertAdjacentText") }} {{experimental_inline}}
  - : Inserts a given text node at a given position relative to the element it is invoked upon.
- {{ domxref("Element.matches()") }} {{experimental_inline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether or not the element would be selected by the specified selector string.
- {{ domxref("Element.querySelector()") }}
  - : Returns the first {{ domxref("Node") }} which matches the specified selector string relative to the element.
- {{ domxref("Element.querySelectorAll") }}
  - : Returns a {{ domxref("NodeList") }} of nodes which match the specified selector string relative to the element.
- {{ domxref("Element.releasePointerCapture")}}
  - : Releases (stops) pointer capture that was previously set for a specific {{domxref("PointerEvent","pointer event")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Removes the element from the children list of its parent.
- {{ domxref("Element.removeAttribute()") }}
  - : Removes the named attribute from the current node.
- {{ domxref("Element.removeAttributeNS()") }}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.removeAttributeNode()") }} {{Deprecated_Inline}}
  - : Removes the node representation of the named attribute from the current node.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Removes an event listener from the element.
- {{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}
  - : Asynchronously asks the browser to make the element full-screen.
- {{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}
  - : Scrolls the page until the element gets into the view.
- {{ domxref("Element.setAttribute()") }}
  - : Sets the value of a named attribute of the current node.
- {{ domxref("Element.setAttributeNS()") }}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.setAttributeNode()") }} {{Deprecated_Inline}}
  - : Sets the node representation of the named attribute from the current node.
- {{ domxref("Element.setAttributeNodeNS()") }} {{Deprecated_Inline}}
  - : Setw the node representation of the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.setCapture()") }} {{non-standard_inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{domxref("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future {{domxref("PointerEvent","pointer events")}}.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
