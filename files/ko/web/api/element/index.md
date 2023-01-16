---
title: Element
slug: Web/API/Element
---
{{APIRef("DOM")}}

**`Element`** 는 {{domxref("Document")}} 안의 모든 객체가 상속하는 제일 범용적인 기반 클래스로 공통 메서드와 속성만 가지고 있으며, 특정 요소를 더 상세하게 표현하는 클래스가 `Element`를 상속합니다. 예를 들어 {{domxref("HTMLElement")}} 인터페이스는 HTML 요소의 기반 인터페이스이고 {{domxref("SVGElement")}} 인터페이스는 모든 SVG 요소의 기초입니다.

XUL의 `XULElement`처럼 웹 플랫폼 밖에서도 `Element`를 구현합니다.

{{InheritanceDiagram}}

## 속성

_부모 인터페이스인 {{domxref("Node")}}와 그 부모인 {{domxref("EventTarget")}}의 속성을 상속합니다. {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}와 {{domxref("Animatable")}}의 속성을 구현합니다._

- {{domxref("Element.attributes")}} {{readOnlyInline}}
  - : HTML 요소에 할당한 속성을 담은 {{domxref("NamedNodeMap")}} 객체를 반환합니다.
- {{domxref("Element.classList")}} {{readOnlyInline}}
  - : 요소의 클래스 속성 리스트를 담은 {{domxref("DOMTokenList")}}를 반환합니다.
- {{domxref("Element.className")}}
  - : 요소의 클래스를 나타내는 {{domxref("DOMString")}}을 반환합니다.
- {{domxref("Element.clientHeight")}} {{readOnlyInline}}
  - : 요소의 안쪽 높이를 나타내는 {{jsxref("Number")}}를 반환합니다.
- {{domxref("Element.clientLeft")}} {{readOnlyInline}}
  - : 요소의 왼쪽 테두리 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.
- {{domxref("Element.clientTop")}} {{readOnlyInline}}
  - : 요소의 위쪽 테두리 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.
- {{domxref("Element.clientWidth")}} {{readOnlyInline}}
  - : 요소의 안쪽 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.
- {{domxref("Element.computedName")}} {{readOnlyInline}}
  - : 요소가 노출하는 접근성 라벨을 포함한 {{domxref("DOMString")}}을 반환합니다.
- {{domxref("Element.computedRole")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the ARIA role that has been applied to a particular element.
- {{ domxref("Element.id") }}
  - : Is a {{domxref("DOMString")}} representing the id of the element.
- {{ domxref("Element.innerHTML") }}
  - : Is a {{domxref("DOMString")}} representing the markup of the element's content.
- {{ domxref("Element.localName") }} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the local part of the qualified name of the element.
- {{domxref("Element.namespaceURI")}} {{readonlyInline}}
  - : The namespace URI of the element, or `null` if it is no namespace.> **참고:** Firefox 3.5 이하에서는 HTML 요소가 네임스페이스에 속해있지 않습니다. 이후 버전에서는 HTML과 XML 트리 모두에서 [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) 네임스페이스를 사용합니다.
- {{ domxref("NonDocumentTypeChildNode.nextElementSibling") }} {{readOnlyInline}}
  - : Is an {{ domxref("Element") }}, the element immediately following the given one in the tree, or `null` if there's no sibling node.
- {{ domxref("Element.outerHTML") }}
  - : Is a {{domxref("DOMString")}} representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
- {{ domxref("Element.prefix") }} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the namespace prefix of the element, or `null` if no prefix is specified.
- {{ domxref("NonDocumentTypeChildNode.previousElementSibling") }} {{readOnlyInline}}
  - : Is a {{ domxref("Element") }}, the element immediately preceding the given one in the tree, or `null` if there is no sibling element.
- {{ domxref("Element.scrollHeight") }} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view height of an element.
- {{ domxref("Element.scrollLeft") }}
  - : Is a {{jsxref("Number")}} representing the left scroll offset of the element.
- {{ domxref("Element.scrollLeftMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the maximum left scroll offset possible for the element.
- {{ domxref("Element.scrollTop") }}
  - : A {{jsxref("Number")}} representing number of pixels the top of the document is scrolled vertically.
- {{ domxref("Element.scrollTopMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the maximum top scroll offset possible for the element.
- {{ domxref("Element.scrollWidth") }} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view width of the element.
- {{domxref("Element.shadowRoot") }}{{readOnlyInline}}
  - : Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
- {{domxref("Element.openOrClosedShadowRoot")}} {{non-standard_inline}}{{readOnlyInline}}
  - : Returns the shadow root that is hosted by the element, regardless if its open or closed. **Available only to [WebExtensions](/ko/docs/Mozilla/Add-ons/WebExtensions).**
- {{domxref("Element.slot")}} {{experimental_inline}}
  - : Returns the name of the shadow DOM slot the element is inserted in.
- {{domxref("Element.tabStop")}} {{non-standard_inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element can receive input focus via the tab key.
- {{ domxref("Element.tagName") }} {{readOnlyInline}}
  - : Returns a {{jsxref("String")}} with the name of the tag for the given element.
- {{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the {{domxref("UndoManager")}} associated with the element.
- {{ domxref("Element.undoScope")}} {{experimental_inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is an undo scope host, or not.

> **참고:** **Note:** DOM Level 3 명세는 `namespaceURI`, `localName`, `prefix`를 {{domxref("Node")}}에 정의했고, DOM4에서 `Element`로 옮겨졌습니다.이 변경점은 Chrome 46.0과 Firefox 48.0부터 구현됐습니다.

### `Slotable` 속성

_`Element` 인터페이스는 {{domxref("Slotable")}} 믹스인에 정의된 다음 속성을 가집니다._

- {{domxref("Slotable.assignedSlot")}}{{readonlyInline}}
  - : Returns a {{domxref("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.

### 이벤트 처리기

- {{domxref("Element.ongotpointercapture")}}
  - : Returns the event handler for the {{event("gotpointercapture")}} event type.
- {{domxref("Element.onlostpointercapture")}}
  - : Returns the event handler for the {{event("lostpointercapture")}} event type.

## 메서드

_부모 인터페이스인 {{domxref("Node")}}와 그 부모인 {{domxref("EventTarget")}}의 메서드를 상속합니다. {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}와 {{domxref("Animatable")}}의 메서드를 구현합니다._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Registers an event handler to a specific event type on the element.
- {{domxref("Element.attachShadow()")}}
  - : Attatches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.
- {{domxref("Element.animate()")}} {{experimental_inline}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{ domxref("Element.closest()")}} {{experimental_inline}}
  - : Returns the {{domxref("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
- {{ domxref("Element.createShadowRoot()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Creates a [shadow DOM](/ko/docs/Web/Web_Components/Shadow_DOM) on on the element, turning it into a shadow host. Returns a {{domxref("ShadowRoot")}}.
- {{domxref("Element.computedStyleMap()")}} {{experimental_inline}}
  - : Returns a {{domxref("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{domxref("CSSStyleDeclaration")}}.
- {{ domxref("EventTarget.dispatchEvent()") }}
  - : Dispatches an event to this node in the DOM and returns a {{jsxref("Boolean")}} that indicates whether no handler canceled the event.
- {{domxref("Element.getAnimations()")}} {{experimental_inline}}
  - : Returns an array of Animation objects currently active on the element.
- {{ domxref("Element.getAttribute()") }}
  - : Retrieves the value of the named attribute from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNames()") }}
  - : Returns an array of attribute names from the current element.
- {{ domxref("Element.getAttributeNS()") }}
  - : Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an {{jsxref("Object")}}.
- {{ domxref("Element.getBoundingClientRect()") }}
  - : Returns the size of an element and its position relative to the viewport.
- {{ domxref("Element.getClientRects()") }}
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
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
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.
- {{ domxref("Element.insertAdjacentElement()") }}
  - : Inserts a given element node at a given position relative to the element it is invoked upon.
- {{ domxref("Element.insertAdjacentHTML()") }}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{ domxref("Element.insertAdjacentText()") }}
  - : Inserts a given text node at a given position relative to the element it is invoked upon.
- {{ domxref("Element.matches()") }} {{experimental_inline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether or not the element would be selected by the specified selector string.
- {{ domxref("Element.querySelector()") }}
  - : Returns the first {{ domxref("Node") }} which matches the specified selector string relative to the element.
- {{ domxref("Element.querySelectorAll()") }}
  - : Returns a {{ domxref("NodeList") }} of nodes which match the specified selector string relative to the element.
- {{ domxref("Element.releasePointerCapture()")}}
  - : Releases (stops) pointer capture that was previously set for a specific {{domxref("PointerEvent","pointer event")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Removes the element from the children list of its parent.
- {{ domxref("Element.removeAttribute()") }}
  - : Removes the named attribute from the current node.
- {{ domxref("Element.removeAttributeNS()") }}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Removes an event listener from the element.
- {{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}
  - : Asynchronously asks the browser to make the element full-screen.
- {{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{domxref("Element.scroll()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{domxref("Element.scrollBy()")}}
  - : Scrolls an element by the given amount.
- {{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}
  - : Scrolls the page until the element gets into the view.
- {{ domxref("Element.scrollTo()") }}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{ domxref("Element.setAttribute()") }}
  - : Sets the value of a named attribute of the current node.
- {{ domxref("Element.setAttributeNS()") }}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{ domxref("Element.setCapture()") }} {{non-standard_inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{domxref("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future [pointer events](/ko/docs/Web/API/Pointer_events).
- {{domxref("Element.toggleAttribute()")}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
