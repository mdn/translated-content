---
title: Element
slug: Web/API/Element
---

{{APIRef("DOM")}}

**`Element`** 是一个通用性非常强的基类，所有 {{DOMxRef("Document")}} 对象下的对象都继承自它。这个接口描述了所有相同种类的元素所普遍具有的方法和属性。一些接口继承自 `Element` 并且增加了一些额外功能的接口描述了具体的行为。例如， {{DOMxRef("HTMLElement")}} 接口是所有 HTML 元素的基本接口，而 {{DOMxRef("SVGElement")}} 接口是所有 SVG 元素的基础。大多数功能是在这个类的更深层级（hierarchy）的接口中被进一步制定的。

在 Web 平台的领域以外的语言，比如 XUL，通过 `XULElement` 接口，同样也实现了 `Element` 接口。

{{InheritanceDiagram}}

## 属性

*所有属性继承自它的祖先接口 {{DOMxRef("Node")}}，并且扩展了 {{DOMxRef("Node")}} 的父接口 {{DOMxRef("EventTarget")}}，并且从以下部分继承了属性：{{DOMxRef("ParentNode")}}、{{DOMxRef("ChildNode")}}、{{DOMxRef("NonDocumentTypeChildNode")}}，*和 {{DOMxRef("Animatable")}}。

- {{DOMxRef("Element.attributes")}} {{readOnlyInline}}
  - : 返回一个与该元素相关的所有属性集合 {{DOMxRef("NamedNodeMap")}}。
- {{DOMxRef("Element.classList")}} {{readOnlyInline}}
  - : 返回该元素包含的 class 属性，是一个 {{DOMxRef("DOMTokenList")}}。
- {{DOMxRef("Element.className")}}
  - : 一个 {{DOMxRef("DOMString")}}，表示这个元素的 class。
- {{DOMxRef("Element.clientHeight")}} {{readOnlyInline}}
  - : 返回{{jsxref("Number")}} 表示内部相对于外层元素的高度。
- {{DOMxRef("Element.clientLeft")}} {{readOnlyInline}}
  - : 返回{{jsxref("Number")}}表示该元素距离它左边界的宽度。
- {{DOMxRef("Element.clientTop")}} {{readOnlyInline}}
  - : 返回 {{jsxref("Number")}} 表示该元素距离它上边界的高度。
- {{DOMxRef("Element.clientWidth")}} {{readOnlyInline}}
  - : 返回{{jsxref("Number")}} 表示该元素内部的宽度。
- {{DOMxRef("Element.computedName")}} {{readOnlyInline}}
  - : Returns a {{DOMxRef("DOMString")}} containing the label exposed to accessibility.
- {{DOMxRef("Element.computedRole")}} {{readOnlyInline}}
  - : Returns a {{DOMxRef("DOMString")}} containing the ARIA role that has been applied to a particular element.
- {{DOMxRef("Element.id")}}
  - : 是一个{{DOMxRef("DOMString")}} 表示这个元素的 id。
- {{DOMxRef("Element.innerHTML")}}
  - : 是一个{{DOMxRef("DOMString")}} 表示这个元素的内容文本。
- {{DOMxRef("Element.localName")}} {{readOnlyInline}}
  - : 是一个 {{DOMxRef("DOMString")}} 表示这个元素名称本地化的部分。
- {{DOMxRef("Element.namespaceURI")}} {{readonlyInline}}

  - : 元素对应的 namespace URI，如果没有则返回 `null`

    > **备注：** In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) namespace in both HTML and XML trees.

- {{DOMxRef("NonDocumentTypeChildNode.nextElementSibling")}} {{readOnlyInline}}
  - : 是一个{{DOMxRef("Element")}}, 该元素下一个兄弟节点，如果为 null 表示不存在..
- {{DOMxRef("Element.outerHTML")}}
  - : 是一个 {{DOMxRef("DOMString")}}，获取该 DOM 元素及其后代的 HTML 文本。在设置它的时候，会从给定的字符串开始解析，替换自身。
- {{DOMxRef("Element.prefix")}} {{readOnlyInline}}
  - : A {{DOMxRef("DOMString")}} representing the namespace prefix of the element, or `null` if no prefix is specified.
- {{DOMxRef("NonDocumentTypeChildNode.previousElementSibling")}} {{readOnlyInline}}
  - : 是一个 {{DOMxRef("Element")}}, 该元素上一个兄弟节点，如果为 null 表示不存在..
- {{DOMxRef("Element.scrollHeight")}} {{readOnlyInline}}
  - : 返回类型为： {{jsxref("Number")}}，表示元素的滚动视图高度。
- {{DOMxRef("Element.scrollLeft")}}
  - : 返回类型为：{{jsxref("Number")}}，表示该元素横向滚动条距离最左的位移。
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : 返回类型为： {{jsxref("Number")}}，表示该元素横向滚动条可移动的最大值
- {{DOMxRef("Element.scrollTop")}}
  - : 返回类型为：{{jsxref("Number")}} ，表示该元素纵向滚动条距离
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : 返回类型为：{{jsxref("Number")}} ，表示该元素纵向滚动条可移动的最大值
- {{DOMxRef("Element.scrollWidth")}} {{readOnlyInline}}
  - : 返回类型为： {{jsxref("Number")}} ，表示元素的滚动视图宽度。
- {{DOMxRef("Element.shadowRoot")}}{{readOnlyInline}}
  - : Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
- {{DOMxRef("Element.openOrClosedShadowRoot")}} {{Non-standard_Inline}}{{readOnlyInline}}
  - : Returns the shadow root that is hosted by the element, regardless if its open or closed. **Available only to [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions).**
- {{DOMxRef("Element.slot")}} {{Experimental_Inline}}
  - : Returns the name of the shadow DOM slot the element is inserted in.
- {{DOMxRef("Element.tabStop")}} {{Non-standard_Inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element can receive input focus via the tab key.
- {{DOMxRef("Element.tagName")}} {{readOnlyInline}}
  - : Returns a {{jsxref("String")}} with the name of the tag for the given element.
- {{DOMxRef("Element.undoManager")}} {{Experimental_Inline}} {{readOnlyInline}}
  - : Returns the {{DOMxRef("UndoManager")}} associated with the element.
- {{DOMxRef("Element.undoScope")}} {{Experimental_Inline}}
  - : Is a {{jsxref("Boolean")}} indicating if the element is an undo scope host, or not.

> **备注：** DOM Level 3 defined `namespaceURI`, `localName` and `prefix` on the {{DOMxRef("Node")}} interface. In DOM4 they were moved to `Element`.
>
> This change is implemented in Chrome since version 46.0 and Firefox since version 48.0.

### Properties included from Slotable

_The `Element` interface includes the following property, defined on the {{DOMxRef("Slotable")}} mixin._

- {{DOMxRef("Slotable.assignedSlot")}}{{readonlyInline}}
  - : Returns a {{DOMxRef("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.

### 事件句柄

- {{domxref("Element.onfullscreenchange")}}
  - : 事件 [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 的回调方法，在元素进入或退出全屏模式时触发。不仅可用于观察（监听）可预期的过度变化，还可以观察（监听）未知的变化，如：当你的应用程序在后台运行。
- {{domxref("Element.onfullscreenerror")}}
  - : 事件 [`fullscreenerror`](/zh-CN/docs/Web/API/Document/fullscreenerror_event) 的回调方法，在进入全屏模式过程中出现错误时触发。

## 方法

_Inherits methods from its parents {{DOMxRef("Node")}}, and its own parent, {{DOMxRef("EventTarget")}}_, and implements those of {{DOMxRef("ParentNode")}}, {{DOMxRef("ChildNode")}}_, {{DOMxRef("NonDocumentTypeChildNode")}},_ _and {{DOMxRef("Animatable")}}._

- {{DOMxRef("EventTarget.addEventListener()")}}
  - : Registers an event handler to a specific event type on the element.
- {{DOMxRef("Element.attachShadow()")}}
  - : Attatches a shadow DOM tree to the specified element and returns a reference to its {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.animate()")}} {{Experimental_Inline}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{DOMxRef("Element.closest()")}} {{Experimental_Inline}}
  - : Returns the {{DOMxRef("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
- {{DOMxRef("Element.computedStyleMap()")}} {{Experimental_Inline}}
  - : Returns a {{DOMxRef("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this node in the DOM and returns a {{jsxref("Boolean")}} that indicates whether no handler canceled the event.
- {{DOMxRef("Element.getAnimations()")}} {{Experimental_Inline}}
  - : Returns an array of Animation objects currently active on the element.
- {{DOMxRef("Element.getAttribute()")}}
  - : Retrieves the value of the named attribute from the current node and returns it as an {{jsxref("Object")}}.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Returns an array of attribute names from the current element.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an {{jsxref("Object")}}.
- {{DOMxRef("Element.getAttributeNode()")}} {{Deprecated_Inline}}
  - : Retrieves the node representation of the named attribute from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNodeNS()")}} {{Deprecated_Inline}}
  - : Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : 返回元素的大小及其相对于视口的位置。
- {{DOMxRef("Element.getClientRects()")}}
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : 参数中给出类的列表，返回一个动态的 {{DOMxRef("HTMLCollection")}} ，包含了所有持有这些类的后代元素。
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name, from the current element.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name and namespace, from the current element.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute or not.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has the specified attribute, in the specified namespace, or not.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Returns a {{jsxref("Boolean")}} indicating if the element has one or more HTML attributes present.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Inserts a given element node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Inserts a given text node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.matches()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether or not the element would be selected by the specified selector string.
- {{DOMxRef("Element.pseudo()")}} {{Experimental_Inline}}
  - : Returns a {{DOMxRef("CSSPseudoElement")}} representing the child pseudo-element matched by the specified pseudo-element selector.
- {{DOMxRef("Element.querySelector()")}}
  - : Returns the first {{DOMxRef("Node")}} which matches the specified selector string relative to the element.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Returns a {{DOMxRef("NodeList")}} of nodes which match the specified selector string relative to the element.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Releases (stops) pointer capture that was previously set for a specific {{DOMxRef("PointerEvent","pointer event")}}.
- {{DOMxRef("ChildNode.remove()")}} {{Experimental_Inline}}
  - : Removes the element from the children list of its parent.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Removes the named attribute from the current node.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.removeAttributeNode()")}} {{Deprecated_Inline}}
  - : Removes the node representation of the named attribute from the current node.
- {{DOMxRef("EventTarget.removeEventListener()")}}
  - : Removes an event listener from the element.
- {{DOMxRef("Element.requestFullscreen()")}} {{Experimental_Inline}}
  - : Asynchronously asks the browser to make the element full-screen.
- {{DOMxRef("Element.requestPointerLock()")}} {{Experimental_Inline}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{DOMxRef("Element.scroll()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{DOMxRef("Element.scrollBy()")}}
  - : Scrolls an element by the given amount.
- {{DOMxRef("Element.scrollIntoView()")}} {{Experimental_Inline}}
  - : Scrolls the page until the element gets into the view.
- {{DOMxRef("Element.scrollTo()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{DOMxRef("Element.setAttribute()")}}
  - : Sets the value of a named attribute of the current node.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setAttributeNode()")}} {{Deprecated_Inline}}
  - : Sets the node representation of the named attribute from the current node.
- {{DOMxRef("Element.setAttributeNodeNS()")}} {{Deprecated_Inline}}
  - : Sets the node representation of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future [pointer events](/zh-CN/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## 事件

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("Element/cancel_event", "cancel")}}

  - : Fires on a {{HTMLElement("dialog")}} when the user instructs the browser that they wish to dismiss the current open dialog. For example, the browser might fire this event when the user presses the&#x20;

    <kbd>Esc</kbd>

    &#x20;key or clicks a "Close dialog" button which is part of the browser's UI.
    Also available via the {{DOMxRef("GlobalEventHandlers/oncancel", "oncancel")}} property.

- [`error`](/zh-CN/docs/Web/API/Element/error_event)
  - : Fired when when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
    Also available via the {{DOMxRef("GlobalEventHandlers/onerror", "onerror")}} property.
- {{DOMxRef("Element/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
    Also available via the {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}} property.
- {{DOMxRef("Element/select_event", "select")}}
  - : Fired when some text has been selected.
    Also available via the {{DOMxRef("GlobalEventHandlers.onselect", "onselect")}} property.
    Also available via the {{DOMxRef("GlobalEventHandlers.onshow", "onshow")}} property.
- {{DOMxRef("Element/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).
    Also available via the {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}} property.

### 剪贴板事件

- {{DOMxRef("Element/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/oncopy", "oncopy")}} property.
- {{DOMxRef("Element/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/oncut", "oncut")}} property.
- {{DOMxRef("Element/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/onpaste", "onpaste")}} property.

### Composition events

- {{DOMxRef("Element/compositionend_event", "compositionend")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} completes or cancels the current composition session.
- {{DOMxRef("Element/compositionstart_event", "compositionstart")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} starts a new composition session.
- {{DOMxRef("Element/compositionupdate_event", "compositionupdate")}}
  - : Fired when a new character is received in the context of a text composition session controlled by a text composition system such as an {{glossary("input method editor")}}.

### Focus events

- {{DOMxRef("Element/blur_event", "blur")}}
  - : Fired when an element has lost focus.
    Also available via the {{DOMxRef("GlobalEventHandlers/onblur", "onblur")}} property.
- {{DOMxRef("Element/focus_event", "focus")}}
  - : Fired when an element has gained focus.
    Also available via the {{DOMxRef("GlobalEventHandlers/onfocus", "onfocus")}} property
- {{DOMxRef("Element/focusin_event", "focusin")}}
  - : Fired when an element is about to gain focus.
- {{DOMxRef("Element/focusout_event", "focusout")}}
  - : Fired when an element is about to lose focus.

### Fullscreen events

- `{{DOMxRef("Element/fullscreenchange_event", "fullscreenchange")}}`
  - : Sent to an {{DOMxRef("Element")}} when it transitions into or out of [full-screen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{DOMxRef("Element.onfullscreenchange", "onfullscreenchange")}} property.
- `{{DOMxRef("Element/fullscreenerror_event", "fullscreenerror")}}`
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of [full-screen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{DOMxRef("Element.onfullscreenerror", "onfullscreenerror")}} property.

### 键盘事件

- `{{DOMxRef("Element/keydown_event", "keydown")}}`
  - : Fired when a key is pressed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeydown", "onkeydown")}} property.
- `{{DOMxRef("Element/keypress_event", "keypress")}}`
  - : Fired when a key that produces a character value is pressed down. {{deprecated_inline}}
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeypress", "onkeypress")}} property.
- `{{DOMxRef("Element/keyup_event", "keyup")}}`
  - : Fired when a key is released.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeyup", "onkeyup")}} property.

### 鼠标事件

- {{DOMxRef("Element/auxclick_event", "auxclick")}}
  - : Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onauxclick", "onauxclick")}} property.
- {{DOMxRef("Element/click_event", "click")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onclick", "onclick")}} property.
- {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
  - : Fired when the user attempts to open a context menu.
    Also available via the {{DOMxRef("GlobalEventHandlers/oncontextmenu", "oncontextmenu")}} property.
- {{DOMxRef("Element/dblclick_event", "dblclick")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondblclick", "ondblclick")}} property.
- {{DOMxRef("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Occurs when an element is activated, for instance, through a mouse click or a keypress.
- {{DOMxRef("Element/mousedown_event", "mousedown")}}
  - : Fired when a pointing device button is pressed on an element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmousedown", "onmousedown")}} property.
- {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
  - : Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmouseenter", "onmouseenter")}} property.
- {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
  - : Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmouseleave", "onmouseleave")}} property.
- {{DOMxRef("Element/mousemove_event", "mousemove")}}
  - : Fired when a pointing device (usually a mouse) is moved while over an element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmousemove", "onmousemove")}} property.
- {{DOMxRef("Element/mouseout_event", "mouseout")}}
  - : Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmouseout", "onmouseout")}} property.
- {{DOMxRef("Element/mouseover_event", "mouseover")}}
  - : Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmouseover", "onmouseover")}} property.
- {{DOMxRef("Element/mouseup_event", "mouseup")}}
  - : Fired when a pointing device button is released on an element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onmouseup", "onmouseup")}} property.
- {{DOMxRef("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
  - : Fired each time the amount of pressure changes on the trackpadtouchscreen.
- {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
  - : Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".
- {{DOMxRef("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
  - : Fired before the {{DOMxRef("Element/mousedown_event", "mousedown")}} event.
- {{DOMxRef("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
  - : Fired after the {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".

### Touch events

- {{DOMxRef("Element/touchcancel_event", "touchcancel")}}
  - : Fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}} property.
- {{DOMxRef("Element/touchend_event", "touchend")}}
  - : Fired when one or more touch points are removed from the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchend", "ontouchend")}} property
- {{DOMxRef("Element/touchmove_event", "touchmove")}}
  - : Fired when one or more touch points are moved along the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchmove", "ontouchmove")}} property
- {{DOMxRef("Element/touchstart_event", "touchstart")}}
  - : Fired when one or more touch points are placed on the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchstart", "ontouchstart")}} property

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
