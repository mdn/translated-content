---
title: Element
slug: Web/API/Element
tags:
  - API
  - DOM
  - Element
  - Interface
  - Reference
translation_of: Web/API/Element
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Element</code></strong>는 {{domxref("Document")}} 안의 모든 객체가 상속하는 제일 범용적인 기반 클래스로 공통 메서드와 속성만 가지고 있으며, 특정 요소를 더 상세하게 표현하는 클래스가 <code>Element</code>를 상속합니다. 예를 들어 {{domxref("HTMLElement")}} 인터페이스는 HTML 요소의 기반 인터페이스이고 {{domxref("SVGElement")}} 인터페이스는 모든 SVG 요소의 기초입니다.</p>

<p>XUL의 <code>XULElement</code>처럼 웹 플랫폼 밖에서도 <code>Element</code>를 구현합니다.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">속성</h2>

<p><em>부모 인터페이스인 {{domxref("Node")}}와 그 부모인 {{domxref("EventTarget")}}의 속성을 상속합니다. {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}와 {{domxref("Animatable")}}의 속성을 구현합니다.</em></p>

<dl>
 <dt>{{domxref("Element.attributes")}} {{readOnlyInline}}</dt>
 <dd>HTML 요소에 할당한 속성을 담은 {{domxref("NamedNodeMap")}} 객체를 반환합니다.</dd>
 <dt>{{domxref("Element.classList")}} {{readOnlyInline}}</dt>
 <dd>요소의 클래스 속성 리스트를 담은 {{domxref("DOMTokenList")}}를 반환합니다.</dd>
 <dt>{{domxref("Element.className")}}</dt>
 <dd>요소의 클래스를 나타내는 {{domxref("DOMString")}}을 반환합니다.</dd>
 <dt>{{domxref("Element.clientHeight")}} {{readOnlyInline}}</dt>
 <dd>요소의 안쪽 높이를 나타내는 {{jsxref("Number")}}를 반환합니다.</dd>
 <dt>{{domxref("Element.clientLeft")}} {{readOnlyInline}}</dt>
 <dd>요소의 왼쪽 테두리 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.</dd>
 <dt>{{domxref("Element.clientTop")}} {{readOnlyInline}}</dt>
 <dd>요소의 위쪽 테두리 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.</dd>
 <dt>{{domxref("Element.clientWidth")}} {{readOnlyInline}}</dt>
 <dd>요소의 안쪽 너비를 나타내는 {{jsxref("Number")}}를 반환합니다.</dd>
 <dt>{{domxref("Element.computedName")}} {{readOnlyInline}}</dt>
 <dd>요소가 노출하는 접근성 라벨을 포함한 {{domxref("DOMString")}}을 반환합니다.</dd>
 <dt>{{domxref("Element.computedRole")}} {{readOnlyInline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} containing the ARIA role that has been applied to a particular element.</dd>
 <dt>{{ domxref("Element.id") }}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the id of the element.</dd>
 <dt>{{ domxref("Element.innerHTML") }}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the markup of the element's content.</dd>
 <dt>{{ domxref("Element.localName") }} {{readOnlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} representing the local part of the qualified name of the element.</dd>
 <dt>{{domxref("Element.namespaceURI")}} {{readonlyInline}}</dt>
 <dd>The namespace URI of the element, or <code>null</code> if it is no namespace.
 <div class="note">
 <p><strong>참고:</strong> Firefox 3.5 이하에서는 HTML 요소가 네임스페이스에 속해있지 않습니다. 이후 버전에서는 HTML과 XML 트리 모두에서 <code><a href="http://www.w3.org/1999/xhtml" title="Linkification: http://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a></code> 네임스페이스를 사용합니다. {{ gecko_minversion_inline("1.9.2") }}</p>
 </div>
 </dd>
 <dt>{{ domxref("NonDocumentTypeChildNode.nextElementSibling") }} {{readOnlyInline}}</dt>
 <dd>Is an {{ domxref("Element") }}, the element immediately following the given one in the tree, or <code>null</code> if there's no sibling node.</dd>
 <dt>{{ domxref("Element.outerHTML") }}</dt>
 <dd>Is a {{domxref("DOMString")}} representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.</dd>
 <dt>{{ domxref("Element.prefix") }} {{readOnlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} representing the namespace prefix of the element, or <code>null</code> if no prefix is specified.</dd>
 <dt>{{ domxref("NonDocumentTypeChildNode.previousElementSibling") }} {{readOnlyInline}}</dt>
 <dd>Is a {{ domxref("Element") }}, the element immediately preceding the given one in the tree, or <code>null</code> if there is no sibling element.</dd>
 <dt>{{ domxref("Element.scrollHeight") }} {{readOnlyInline}}</dt>
 <dd>Returns a {{jsxref("Number")}} representing the scroll view height of an element.</dd>
 <dt>{{ domxref("Element.scrollLeft") }}</dt>
 <dd>Is a {{jsxref("Number")}} representing the left scroll offset of the element.</dd>
 <dt>{{ domxref("Element.scrollLeftMax") }} {{non-standard_inline}} {{readOnlyInline}}</dt>
 <dd>Returns a {{jsxref("Number")}} representing the maximum left scroll offset possible for the element.</dd>
 <dt>{{ domxref("Element.scrollTop") }}</dt>
 <dd>A {{jsxref("Number")}} representing number of pixels the top of the document is scrolled vertically.</dd>
 <dt>{{ domxref("Element.scrollTopMax") }} {{non-standard_inline}} {{readOnlyInline}}</dt>
 <dd>Returns a {{jsxref("Number")}} representing the maximum top scroll offset possible for the element.</dd>
 <dt>{{ domxref("Element.scrollWidth") }} {{readOnlyInline}}</dt>
 <dd>Returns a {{jsxref("Number")}} representing the scroll view width of the element.</dd>
 <dt>{{domxref("Element.shadowRoot") }}{{readOnlyInline}}</dt>
 <dd>Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.</dd>
 <dt>{{domxref("Element.openOrClosedShadowRoot")}} {{non-standard_inline}}{{readOnlyInline}}</dt>
 <dd>Returns the shadow root that is hosted by the element, regardless if its open or closed. <strong>Available only to <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a>.</strong></dd>
 <dt>{{domxref("Element.slot")}} {{experimental_inline}}</dt>
 <dd>Returns the name of the shadow DOM slot the element is inserted in.</dd>
 <dt>{{domxref("Element.tabStop")}} {{non-standard_inline}}</dt>
 <dd>Is a {{jsxref("Boolean")}} indicating if the element can receive input focus via the tab key.</dd>
 <dt>{{ domxref("Element.tagName") }} {{readOnlyInline}}</dt>
 <dd>Returns a {{jsxref("String")}} with the name of the tag for the given element.</dd>
 <dt>{{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}</dt>
 <dd>Returns the {{domxref("UndoManager")}} associated with the element.</dd>
 <dt>{{ domxref("Element.undoScope")}} {{experimental_inline}}</dt>
 <dd>Is a {{jsxref("Boolean")}} indicating if the element is an undo scope host, or not.</dd>
</dl>

<div class="note">
<p><strong>Note:</strong> DOM Level 3 명세는 <code>namespaceURI</code>, <code>localName</code>, <code>prefix</code>를 {{domxref("Node")}}에 정의했고, DOM4에서 <code>Element</code>로 옮겨졌습니다.</p>

<p>이 변경점은 Chrome 46.0과 Firefox 48.0부터 구현됐습니다.</p>
</div>

<h3 id="Slotable_속성"><code>Slotable</code> 속성</h3>

<p><em><code>Element</code> 인터페이스는 {{domxref("Slotable")}} 믹스인에 정의된 다음 속성을 가집니다.</em></p>

<dl>
 <dt>{{domxref("Slotable.assignedSlot")}}{{readonlyInline}}</dt>
 <dd>Returns a {{domxref("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.</dd>
</dl>

<h3 id="Handlers" name="Handlers">이벤트 처리기</h3>

<dl>
 <dt>{{domxref("Element.ongotpointercapture")}}</dt>
 <dd>Returns the event handler for the {{event("gotpointercapture")}} event type.</dd>
 <dt>{{domxref("Element.onlostpointercapture")}}</dt>
 <dd>Returns the event handler for the {{event("lostpointercapture")}} event type.</dd>
</dl>

<h2 id="Methods" name="Methods">메서드</h2>

<p><em>부모 인터페이스인 {{domxref("Node")}}와 그 부모인 {{domxref("EventTarget")}}의 메서드를 상속합니다. {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}와 {{domxref("Animatable")}}의 메서드를 구현합니다.</em></p>

<dl>
 <dt>{{ domxref("EventTarget.addEventListener()") }}</dt>
 <dd>Registers an event handler to a specific event type on the element.</dd>
 <dt>{{domxref("Element.attachShadow()")}}</dt>
 <dd>Attatches a shadow DOM tree to the specified element and returns a reference to its {{domxref("ShadowRoot")}}.</dd>
 <dt>{{domxref("Element.animate()")}} {{experimental_inline}}</dt>
 <dd>A shortcut method to create and run an animation on an element. Returns the created Animation object instance.</dd>
 <dt>{{ domxref("Element.closest()")}} {{experimental_inline}}</dt>
 <dd>Returns the {{domxref("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.</dd>
 <dt>{{ domxref("Element.createShadowRoot()")}} {{non-standard_inline}} {{deprecated_inline}}</dt>
 <dd>Creates a <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM">shadow DOM</a> on on the element, turning it into a shadow host. Returns a {{domxref("ShadowRoot")}}.</dd>
 <dt>{{domxref("Element.computedStyleMap()")}} {{experimental_inline}}</dt>
 <dd>Returns a {{domxref("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{domxref("CSSStyleDeclaration")}}.</dd>
 <dt>{{ domxref("EventTarget.dispatchEvent()") }}</dt>
 <dd>Dispatches an event to this node in the DOM and returns a {{jsxref("Boolean")}} that indicates whether no handler canceled the event.</dd>
 <dt>{{domxref("Element.getAnimations()")}} {{experimental_inline}}</dt>
 <dd>Returns an array of Animation objects currently active on the element.</dd>
 <dt>{{ domxref("Element.getAttribute()") }}</dt>
 <dd>Retrieves the value of the named attribute from the current node and returns it as an {{jsxref("Object")}}.</dd>
 <dt>{{ domxref("Element.getAttributeNames()") }}</dt>
 <dd>Returns an array of attribute names from the current element.</dd>
 <dt>{{ domxref("Element.getAttributeNS()") }}</dt>
 <dd>Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an {{jsxref("Object")}}.</dd>
 <dt>{{ domxref("Element.getBoundingClientRect()") }}</dt>
 <dd>Returns the size of an element and its position relative to the viewport.</dd>
 <dt>{{ domxref("Element.getClientRects()") }}</dt>
 <dd>Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.</dd>
 <dt>{{ domxref("Element.getElementsByClassName()") }}</dt>
 <dd>Returns a live {{ domxref("HTMLCollection") }} that contains all descendants of the current element that possess the list of classes given in the parameter.</dd>
 <dt>{{ domxref("Element.getElementsByTagName()") }}</dt>
 <dd>Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name, from the current element.</dd>
 <dt>{{ domxref("Element.getElementsByTagNameNS()") }}</dt>
 <dd>Returns a live {{ domxref("HTMLCollection") }} containing all descendant elements, of a particular tag name and namespace, from the current element.</dd>
 <dt>{{ domxref("Element.hasAttribute()") }}</dt>
 <dd>Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute or not.</dd>
 <dt>{{ domxref("Element.hasAttributeNS()") }}</dt>
 <dd>Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute, in the specified namespace, or not.</dd>
 <dt>{{ domxref("Element.hasAttributes()") }}</dt>
 <dd>Returns a {{jsxref("Boolean")}} indicating if the element has one or more HTML attributes present.</dd>
 <dt>{{DOMxRef("Element.hasPointerCapture()")}}</dt>
 <dd>Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.</dd>
 <dt>{{ domxref("Element.insertAdjacentElement()") }}</dt>
 <dd>Inserts a given element node at a given position relative to the element it is invoked upon.</dd>
 <dt>{{ domxref("Element.insertAdjacentHTML()") }}</dt>
 <dd>Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.</dd>
 <dt>{{ domxref("Element.insertAdjacentText()") }}</dt>
 <dd>Inserts a given text node at a given position relative to the element it is invoked upon.</dd>
 <dt>{{ domxref("Element.matches()") }} {{experimental_inline}}</dt>
 <dd>Returns a {{jsxref("Boolean")}} indicating whether or not the element would be selected by the specified selector string.</dd>
 <dt>{{ domxref("Element.querySelector()") }}</dt>
 <dd>Returns the first {{ domxref("Node") }} which matches the specified selector string relative to the element.</dd>
 <dt>{{ domxref("Element.querySelectorAll()") }}</dt>
 <dd>Returns a {{ domxref("NodeList") }} of nodes which match the specified selector string relative to the element.</dd>
 <dt>{{ domxref("Element.releasePointerCapture()")}}</dt>
 <dd>Releases (stops) pointer capture that was previously set for a specific {{domxref("PointerEvent","pointer event")}}.</dd>
 <dt>{{domxref("ChildNode.remove()")}} {{experimental_inline}}</dt>
 <dd>Removes the element from the children list of its parent.</dd>
 <dt>{{ domxref("Element.removeAttribute()") }}</dt>
 <dd>Removes the named attribute from the current node.</dd>
 <dt>{{ domxref("Element.removeAttributeNS()") }}</dt>
 <dd>Removes the attribute with the specified name and namespace, from the current node.</dd>
 <dt>{{ domxref("EventTarget.removeEventListener()") }}</dt>
 <dd>Removes an event listener from the element.</dd>
 <dt>{{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}</dt>
 <dd>Asynchronously asks the browser to make the element full-screen.</dd>
 <dt>{{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}</dt>
 <dd>Allows to asynchronously ask for the pointer to be locked on the given element.</dd>
 <dt>{{domxref("Element.scroll()")}}</dt>
 <dd>Scrolls to a particular set of coordinates inside a given element.</dd>
 <dt>{{domxref("Element.scrollBy()")}}</dt>
 <dd>Scrolls an element by the given amount.</dd>
</dl>

<dl>
 <dt>{{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}</dt>
 <dd>Scrolls the page until the element gets into the view.</dd>
 <dt>{{ domxref("Element.scrollTo()") }}</dt>
 <dd>Scrolls to a particular set of coordinates inside a given element.</dd>
 <dt>{{ domxref("Element.setAttribute()") }}</dt>
 <dd>Sets the value of a named attribute of the current node.</dd>
 <dt>{{ domxref("Element.setAttributeNS()") }}</dt>
 <dd>Sets the value of the attribute with the specified name and namespace, from the current node.</dd>
 <dt>{{ domxref("Element.setCapture()") }} {{non-standard_inline}}</dt>
 <dd>Sets up mouse event capture, redirecting all mouse events to this element.</dd>
 <dt>{{domxref("Element.setPointerCapture()")}}</dt>
 <dd>Designates a specific element as the capture target of future <a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events">pointer events</a>.</dd>
 <dt>{{domxref("Element.toggleAttribute()")}}</dt>
 <dd>Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.</dd>
</dl>

<p> </p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Element")}}</p>
