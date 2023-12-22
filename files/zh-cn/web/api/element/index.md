---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: e83aa62ce6bf2e2bc44f55a3fb73b63d724fa6a6
---

{{APIRef("DOM")}}

**`Element`** 是一个通用性非常强的基类，所有 {{DOMxRef("Document")}} 对象下的对象都继承自它。这个接口描述了所有相同种类的元素所普遍具有的方法和属性。一些接口继承自 `Element` 并且增加了一些额外功能的接口描述了具体的行为。

例如，{{DOMxRef("HTMLElement")}} 接口是所有 HTML 元素的基本接口，而 {{DOMxRef("SVGElement")}} 接口是所有 SVG 元素的基础。大多数功能是在这个类的更深层级的接口中被进一步制定的。

在 Web 平台的领域以外的语言，比如 XUL，通过 `XULElement` 接口，同样也实现了 `Element` 接口。

{{InheritanceDiagram}}

## 实例属性

_`Element` 从其父接口 {{DOMxRef("Node")}} 以及该接口的父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{DOMxRef("Element.assignedSlot")}} {{ReadOnlyInline}}
  - : 返回一个表示节点所插入的 {{htmlelement("slot")}} 的 {{DOMxRef("HTMLSlotElement")}} 值。
- {{DOMxRef("Element.attributes")}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("NamedNodeMap")}} 对象，其中包含相应 HTML 元素的指定属性。
- {{domxref("Element.childElementCount")}} {{ReadOnlyInline}}
  - : 返回此元素的子元素个数。
- {{domxref("Element.children")}} {{ReadOnlyInline}}
  - : 返回此元素的子元素。
- {{DOMxRef("Element.classList")}} {{ReadOnlyInline}}
  - : 返回该元素包含的所有 class 属性，是一个 {{DOMxRef("DOMTokenList")}}。
- {{DOMxRef("Element.className")}}
  - : 一个字符串，表示这个元素的类。
- {{DOMxRef("Element.clientHeight")}} {{ReadOnlyInline}}
  - : 返回代表元素内部高度的数值。
- {{DOMxRef("Element.clientLeft")}} {{ReadOnlyInline}}
  - : 返回代表元素左边界宽度的数值。
- {{DOMxRef("Element.clientTop")}} {{ReadOnlyInline}}
  - : 返回代表元素顶部边框宽度的数值。
- {{DOMxRef("Element.clientWidth")}} {{ReadOnlyInline}}
  - : 返回代表元素内部宽度的数值。
- {{DOMxRef("Element.elementTiming")}} {{Experimental_Inline}}
  - : 一个字符串，反映了 [`elementtiming`](/zh-CN/docs/Web/HTML/Attributes/elementtiming) 属性，该属性在 {{domxref("PerformanceElementTiming")}} API 中标记了一个观察元素。
- {{domxref("Element.firstElementChild")}} {{ReadOnlyInline}}
  - : 返回此元素的第一个子元素。
- {{DOMxRef("Element.id")}}
  - : 一个字符串，表示此元素的 id 值。
- {{DOMxRef("Element.innerHTML")}}
  - : 一个字符串，表示元素内容标记。
- {{domxref("Element.lastElementChild")}} {{ReadOnlyInline}}
  - : 返回此元素的最后一个子元素。
- {{DOMxRef("Element.localName")}} {{ReadOnlyInline}}
  - : 一个字符串，代表元素限定名称的本地部分。
- {{DOMxRef("Element.namespaceURI")}} {{ReadOnlyInline}}

  - : 元素对应的命名空间 URI，如果没有则返回 `null`。

    > **备注：** 在 Firefox 3.5 及更早版本中，HTML 元素不在命名空间中。在以后的版本中，HTML 元素在 HTML 树和 XML 树中都属于 [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) 命名空间。

- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : 一个 {{DOMxRef("Element")}}，树中紧跟给定元素的元素，如果没有同级节点，则为 `null`。
- {{DOMxRef("Element.outerHTML")}}
  - : 一个字符串，代表元素的标记（包括其内容）。作为 setter 使用时，将用从给定字符串解析出的节点替换元素。
- {{DOMxRef("Element.part")}}
  - : 代表元素的部分标识符（即使用 `part` 属性设置的标识符），以 {{domxref("DOMTokenList")}} 的形式返回。
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : 代表元素命名空间前缀的字符串，如果没有指定前缀，则为 `null`。
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : 一个 {{DOMxRef("Element")}}，树中紧靠给定元素的元素，如果没有同级元素，则为 `null`。
- {{DOMxRef("Element.scrollHeight")}} {{ReadOnlyInline}}
  - : 元素滚动视图高度的数值。
- {{DOMxRef("Element.scrollLeft")}}
  - : 元素左滚动偏移量的数值。
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 元素可能的最大左滚动偏移值。
- {{DOMxRef("Element.scrollTop")}}
  - : 元素顶部垂直滚动的像素数。
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : 元素可能的最大顶部滚动偏移值。
- {{DOMxRef("Element.scrollWidth")}} {{ReadOnlyInline}}
  - : 代表元素滚动视图宽度的数值。
- {{DOMxRef("Element.shadowRoot")}} {{ReadOnlyInline}}
  - : 返回元素托管的开放阴影根；如果没有开放阴影根，则返回 null。
- {{DOMxRef("Element.slot")}}
  - : 返回元素插入的阴影 DOM 插槽的名称。
- {{DOMxRef("Element.tagName")}} {{ReadOnlyInline}}
  - : 返回一个字符串，包含给定元素的标签名称。

### ARIA 中包含的实例属性

_`Element` 接口包括以下在 `ARIAMixin` 混入中定义的属性。_

- {{domxref("Element.ariaAtomic")}}
  - : 反映 [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 属性的字符串，表示辅助技术是否将根据 [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性定义的变更通知，显示全部或仅部分变更区域。
- {{domxref("Element.ariaAutoComplete")}}
  - : 反映 [`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性的字符串，表示输入文本是否会触发显示一个或多个用户对组合框、搜索框或文本框的预期值的预测，并指定如果进行了预测将如何显示。
- {{domxref("Element.ariaBusy")}}
  - : 反映 [`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 属性的字符串，表示元素是否正在被修改，因为辅助技术可能希望等到修改完成后再向用户展示。
- {{domxref("Element.ariaChecked")}}
  - : 反映 [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-checked)属性的字符串，表示复选框、单选按钮和其他具有选中状态的部件的当前“选中”状态。
- {{domxref("Element.ariaColCount")}}
  - : 反映 [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) 属性的字符串，该属性定义了表格、网格或树状网格中的列数。
- {{domxref("Element.ariaColIndex")}}
  - : 反映 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 属性的字符串，该属性定义了元素的列索引或相对于表格、网格或树状网格中列总数的位置。
- {{domxref("Element.ariaColIndexText")}} {{experimental_inline}}
  - : 反映 [`aria-colindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) 属性的字符串，该属性定义了 aria-colindex 的人类可读文本替代。
- {{domxref("Element.ariaColSpan")}}
  - : 反映 [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) 属性的字符串，该属性定义了表格、网格或树型网格中单元格或网格单元格所跨列数。
- {{domxref("Element.ariaCurrent")}}
  - : 反映 [`aria-current`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-current) 属性的字符串，表示在一个容器或一组相关元素中代表当前项目的元素。
- {{domxref("Element.ariaDescription")}}
  - : 反映 [`aria-description`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-description) 属性的字符串，该属性定义了描述或注释当前元素的字符串值。
- {{domxref("Element.ariaDisabled")}}
  - : 反映 [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) 属性的字符串，表示该元素可感知但已禁用，因此不可编辑或以其他方式操作。
- {{domxref("Element.ariaExpanded")}}
  - : 反映 [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) 属性的字符串，表示该元素拥有或控制的分组元素是展开还是折叠状态。
- {{domxref("Element.ariaHasPopup")}}
  - : 反映 [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) 属性的字符串，表示可由元素触发的交互式弹出元素（如菜单或对话框）的可用性和类型。
- {{domxref("Element.ariaHidden")}}
  - : 反映 [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性的字符串，表示元素是否暴露于无障碍 API。
- {{domxref("Element.ariaKeyShortcuts")}}
  - : 反映 [`aria-keyshortcuts`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) 属性的字符串，表示作者为激活元素或将焦点赋予元素而实施的键盘快捷方式。
- {{domxref("Element.ariaLabel")}}
  - : 反映 [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label) 属性的字符串，该属性定义了标示当前元素的字符串值。
- {{domxref("Element.ariaLevel")}}
  - : 反映 [`aria-level`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-level) 属性的字符串，该属性定义了结构中元素的层次级别。
- {{domxref("Element.ariaLive")}}
  - : 反映 [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live) 属性的字符串，表示元素将被更新，并描述了用户代理、辅助技术和用户可期望从实时区域获得的更新类型。
- {{domxref("Element.ariaModal")}}
  - : 反映 [`aria-modal`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-modal) 属性的字符串，表示元素在显示时是否为模态元素。
- {{domxref("Element.ariaMultiline")}}
  - : 反映 [`aria-multiline`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) 属性的字符串，表示文本框是接受多行输入还是只接受单行输入。
- {{domxref("Element.ariaMultiSelectable")}}
  - : 反映 [`aria-multiselectable`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) 属性的字符串，表示用户可以从当前可选后代中选择多个项目。
- {{domxref("Element.ariaOrientation")}}
  - : 反映 [`aria-orientation`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 属性的字符串，表示元素的方向是水平、垂直还是未知/模糊。
- {{domxref("Element.ariaPlaceholder")}}
  - : 反映 [`aria-placeholder`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) 属性的字符串，它定义了一个简短的提示，目的是在控件无值时帮助用户输入数据。
- {{domxref("Element.ariaPosInSet")}}
  - : 反映 [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) 属性的字符串，它定义了元素在当前列表项或树状项集合中的编号或位置。
- {{domxref("Element.ariaPressed")}}
  - : 反映 [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) 属性的字符串，表示切换按钮当前的“按下”状态。
- {{domxref("Element.ariaReadOnly")}}
  - : 反映 [`aria-readonly`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) 属性的字符串，表示该元素不可编辑，但在其他方面是可操作的。
- {{domxref("Element.ariaRelevant")}} {{Non-standard_Inline}}
  - : 反映 [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性的字符串，表示当实时区域内的无障碍树被修改时，用户代理将触发哪些通知。该属性用于描述 `aria-live` 区域中哪些变化是相关的，应予以公布。
- {{domxref("Element.ariaRequired")}}
  - : [`aria-required`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-required) 属性的字符串，表示在提交表单前需要用户输入。
- {{domxref("Element.ariaRoleDescription")}}
  - : 反映 [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) 属性的字符串，它定义了一个元素的角色的人类可读、作者本地化描述。
- {{domxref("Element.ariaRowCount")}}
  - : 反映 [`aria-rowcount`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) 属性的字符串，该属性定义了表格、网格或树状网格中的总行数。
- {{domxref("Element.ariaRowIndex")}}
  - : 反映 [`aria-rowindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) 属性的字符串，它定义了元素的行索引或相对于表格、网格或树状网格中总行数的位置。
- {{domxref("Element.ariaRowIndexText")}} {{experimental_inline}}
  - : 反映 [`aria-rowindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowindext) 属性的字符串，它定义了 aria-rowindex 的人类可读文本替代。
- {{domxref("Element.ariaRowSpan")}}
  - : 反映 [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性的字符串，该属性定义了表格、网格或树型网格中单元格或网格单元格所跨行数。
- {{domxref("Element.ariaSelected")}}
  - : 反映 [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected)属性的字符串，表示具有选定状态的元素的当前“选定”状态。
- {{domxref("Element.ariaSetSize")}}
  - : 反映 [`aria-setize`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-setize) 属性的字符串，该属性定义了当前列表项或树状项集合中的项数。
- {{domxref("Element.ariaSort")}}
  - : 反映 [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-sort) 属性的字符串，表示表格或网格中的项目是按升序还是降序排序。
- {{domxref("Element.ariaValueMax")}}
  - : 反映 [`aria-valueMax`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性的字符串，该属性定义了范围部件允许的最大值。
- {{domxref("Element.ariaValueMin")}}
  - : 反映 [`aria-valueMin`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) 属性的字符串，该属性定义了范围部件的最小允许值。
- {{domxref("Element.ariaValueNow")}}
  - : 反映 [`aria-valueNow`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) 属性的字符串，该属性定义了范围部件的当前值。
- {{domxref("Element.ariaValueText")}}
  - : 反映 [`aria-valuetext`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) 属性的字符串，该属性为范围部件定义了 aria-valuenow 的人类可读文本替代值。

## 实例方法

_`Element` 继承其父级 {{DOMxRef("Node")}} 和父级 {{DOMxRef("EventTarget")}} 的方法。_

- {{DOMxRef("Element.after()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the `Element`'s parent, just after the `Element`.
- {{DOMxRef("Element.animate()")}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{DOMxRef("Element.append()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings after the last child of the element.
- {{DOMxRef("Element.attachShadow()")}}
  - : Attaches a shadow DOM tree to the specified element and returns a reference to its {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.before()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the `Element`'s parent, just before the `Element`.
- {{DOMxRef("Element.closest()")}}
  - : Returns the {{DOMxRef("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
- {{DOMxRef("Element.computedStyleMap()")}}
  - : Returns a {{DOMxRef("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("Element.getAnimations()")}}
  - : Returns an array of Animation objects currently active on the element.
- {{DOMxRef("Element.getAttribute()")}}
  - : Retrieves the value of the named attribute from the current node and returns it as a string.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Returns an array of attribute names from the current element.
- {{DOMxRef("Element.getAttributeNode()")}}
  - : Retrieves the node representation of the named attribute from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Retrieves the value of the attribute with the specified namespace and name from the current node and returns it as a string.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : Returns the size of an element and its position relative to the viewport.
- {{domxref("Element.getBoxQuads()")}} {{Experimental_Inline}}
  - : Returns a list of {{domxref("DOMQuad")}} objects representing the CSS fragments of the node.
- {{DOMxRef("Element.getClientRects()")}}
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} that contains all descendants of the current element that possess the list of classes given in the parameter.
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name, from the current element.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name and namespace, from the current element.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Returns a boolean value indicating if the element has the specified attribute or not.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Returns a boolean value indicating if the element has the specified attribute, in the specified namespace, or not.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Returns a boolean value indicating if the element has one or more HTML attributes present.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Inserts a given element node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Inserts a given text node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.matches()")}}
  - : Returns a boolean value indicating whether or not the element would be selected by the specified selector string.
- {{DOMxRef("Element.prepend()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings before the first child of the element.
- {{DOMxRef("Element.querySelector()")}}
  - : Returns the first {{DOMxRef("Node")}} which matches the specified selector string relative to the element.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Returns a {{DOMxRef("NodeList")}} of nodes which match the specified selector string relative to the element.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Releases (stops) pointer capture that was previously set for a specific {{DOMxRef("PointerEvent","pointer event")}}.
- {{DOMxRef("Element.remove()")}}
  - : Removes the element from the children list of its parent.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Removes the named attribute from the current node.
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : Removes the node representation of the named attribute from the current node.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.replaceChildren()")}}
  - : Replaces the existing children of a {{domxref("Node")}} with a specified new set of children.
- {{DOMxRef("Element.replaceWith()")}}
  - : Replaces the element in the children list of its parent with a set of {{domxref("Node")}} objects or strings.
- {{DOMxRef("Element.requestFullscreen()")}}
  - : Asynchronously asks the browser to make the element fullscreen.
- {{DOMxRef("Element.requestPointerLock()")}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{domxref("Element.scroll()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{domxref("Element.scrollBy()")}}
  - : Scrolls an element by the given amount.
- {{DOMxRef("Element.scrollIntoView()")}}
  - : Scrolls the page until the element gets into the view.
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : Scrolls the current element into the visible area of the browser window if it's not already within the visible area of the browser window. **Use the standard {{DOMxRef("Element.scrollIntoView()")}} instead.**
- {{domxref("Element.scrollTo()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{DOMxRef("Element.setAttribute()")}}
  - : Sets the value of a named attribute of the current node.
- {{DOMxRef("Element.setAttributeNode()")}}
  - : Sets the node representation of the named attribute from the current node.
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : Sets the node representation of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{DOMxRef("Element.setHTML()")}} {{Experimental_Inline}}
  - : Parses and [sanitizes](/zh-CN/docs/Web/API/HTML_Sanitizer_API) a string of HTML and inserts into the DOM as a subtree of the element.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future [pointer events](/zh-CN/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## 事件

使用 `addEventListener()` 或将事件监听器分配给此接口的 `oneventname` 属性来监听这些事件。

- {{domxref("Element/afterscriptexecute_event","afterscriptexecute")}} {{Non-standard_Inline}}
  - : Fired when a script has been executed.
- {{domxref("Element/beforematch_event", "beforematch")}} {{Experimental_Inline}}
  - : Fires on an element that is in the [_hidden until found_](/zh-CN/docs/Web/HTML/Global_attributes/hidden) state, when the browser is about to reveal its content because the user has found the content through the "find in page" feature or through fragment navigation.
- {{domxref("Element/beforescriptexecute_event","beforescriptexecute")}} {{Non-standard_Inline}}
  - : Fired when a script is about to be executed.
- {{domxref("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} {{Experimental_Inline}}
  - : Fires on any element with {{cssxref("content-visibility", "content-visibility: auto")}} set on it when it starts or stops being [relevant to the user](/zh-CN/docs/Web/CSS/CSS_containment#relevant_to_the_user) and [skipping its contents](/zh-CN/docs/Web/CSS/CSS_containment#skips_its_contents).
- {{domxref("Element/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
- {{domxref("Element/scrollend_event", "scrollend")}}
  - : Fires when the document view has completed scrolling.
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : Fired when a [Content Security Policy](/zh-CN/docs/Web/HTTP/CSP) is violated.
- {{domxref("Element/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).

### 动画事件

- {{domxref("Element/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
- {{domxref("Element/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
- {{domxref("Element/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
- {{domxref("Element/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.

### 剪贴板事件

- {{domxref("Element/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
- {{domxref("Element/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
- {{domxref("Element/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.

### 合成事件

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} completes or cancels the current composition session.
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} starts a new composition session.
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : Fired when a new character is received in the context of a text composition session controlled by a text composition system such as an {{glossary("input method editor")}}.

### 聚焦事件

- {{domxref("Element/blur_event", "blur")}}
  - : Fired when an element has lost focus.
- {{domxref("Element/focus_event", "focus")}}
  - : Fired when an element has gained focus.
- {{domxref("Element/focusin_event", "focusin")}}
  - : Fired when an element has gained focus, after {{domxref("Element/focus_event", "focus")}}.
- {{domxref("Element/focusout_event", "focusout")}}
  - : Fired when an element has lost focus, after {{domxref("Element/blur_event", "blur")}}.

### 全屏事件

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Sent to an {{domxref("Element")}} when it transitions into or out of [fullscreen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of [fullscreen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.

### 键盘事件

- {{domxref("Element/keydown_event", "keydown")}}
  - : 当按键按下时触发此事件。
- {{domxref("Element/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 当按下可产生字符值的按键时触发此事件。
- {{domxref("Element/keyup_event", "keyup")}}
  - : 当按键释放时触发此事件。

### 鼠标事件

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.
- {{domxref("Element/click_event", "click")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : Fired when the user attempts to open a context menu.
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Occurs when an element is activated, for instance, through a mouse click or a keypress.
- {{domxref("Element/DOMMouseScroll_event", "DOMMouseScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Occurs when mouse wheel or similar device is operated and the accumulated scroll amount is over 1 line or 1 page since last event.
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : Fired when a pointing device button is pressed on an element.
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : Fired when a pointing device (usually a mouse) is moved while over an element.
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : Fired when a pointing device button is released on an element.
- {{domxref("Element/mousewheel_event", "mousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a mouse wheel or similar device is operated.
- {{domxref("Element/MozMousePixelScroll_event", "MozMousePixelScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a mouse wheel or similar device is operated.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : Fired each time the amount of pressure changes on the trackpadtouchscreen.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : Fired before the {{domxref("Element/mousedown_event", "mousedown")}} event.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : Fired after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".
 
### 指针事件

- {{domxref("Element/gotpointercapture_event", "gotpointercapture")}}
  - : 当元素使用 {{domxref("Element/setPointerCapture", "setPointerCapture()")}} 捕捉指针时触发。
- {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
  - : 当[捕获指针](/zh-CN/docs/Web/API/Pointer_events#指针捕获)被释放时触发。
- {{domxref("Element/pointercancel_event", "pointercancel")}}
  - : 指针事件取消时触发。
- {{domxref("Element/pointerdown_event", "pointerdown")}}
  - : 指针变为活动状态时触发。
- {{domxref("Element/pointerenter_event", "pointerenter")}}
  - : 指针移动到元素或其子代的命中测试边界时触发。
- {{domxref("Element/pointerleave_event", "pointerleave")}}
  - : 当指针移出元素的命中测试边界时触发。
- {{domxref("Element/pointermove_event", "pointermove")}}
  - : 指针改变坐标时触发。
- {{domxref("Element/pointerout_event", "pointerout")}}
  - : 当指针移出元素的*命中测试*边界（以及其他原因）时触发。
- {{domxref("Element/pointerover_event", "pointerover")}}
  - : 当指针移动到元素的命中测试边界时触发。
- {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} {{Experimental_Inline}}
  - : 指针改变任何属性时触发，这些属性不会触发 {{domxref("Element/pointerdown_event", "pointerdown")}} 或 {{domxref("Element/pointerup_event", "pointerup")}} 事件。
- {{domxref("Element/pointerup_event", "pointerup")}}
  - : 指针不再处于活动状态时触发。

### 触摸事件

- {{domxref("Element/gesturechange_event","gesturechange")}} {{Non-standard_Inline}}
  - : 触控手势期间数字移动时触发。
- {{domxref("Element/gestureend_event","gestureend")}} {{Non-standard_Inline}}
  - : 当不再有多个手指接触触摸表面时触发，从而结束手势。
- {{domxref("Element/gesturestart_event","gesturestart")}} {{Non-standard_Inline}}
  - : 当多个手指接触触摸表面时触发，从而开始一个新手势。
- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : 当一个或多个触摸点以特定的实现方式受到破坏（例如，创建的触摸点过多）时触发。
- {{domxref("Element/touchend_event", "touchend")}}
  - : 当一个或多个触摸点从触摸表面移除时触发。
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : 当一个或多个触摸点沿触摸表面移动时触发。
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : 当一个或多个触摸点放置在触摸表面时触发。
 
### 过渡事件

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions)被取消时触发的 {{domxref("Event")}}。
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions)结束播放时触发的 {{domxref("Event")}}。
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : 当创建 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions)（即当它被添加到一组正在运行的过渡中时）时，一个 {{domxref("Event")}} 会被触发，但不一定会被启动。
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions)开始过渡时触发的 {{domxref("Event")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
