---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: e83aa62ce6bf2e2bc44f55a3fb73b63d724fa6a6
---

{{APIRef("DOM")}}

**`Element`** 是最通用的基类，{{DOMxRef("Document")}} 中的所有元素对象（即表示元素的对象）都继承自它。它只具有各种元素共有的方法和属性。更具体的类则继承自 `Element`。

例如，{{DOMxRef("HTMLElement")}} 接口是所有 HTML 元素的基本接口。同样，{{DOMxRef("SVGElement")}} 接口是所有 SVG 元素的基本接口，而 {{DOMxRef("MathMLElement")}} 接口则是 MathML 元素的基础接口。大多数功能是在这个类的更深层级的接口中被进一步制定的。

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

    > [!NOTE]
    > 在 Firefox 3.5 及更早版本中，HTML 元素不在命名空间中。在以后的版本中，HTML 元素在 HTML 树和 XML 树中都属于 [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) 命名空间。

- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : 一个 `Element`，树中紧跟给定元素的元素，如果没有同级节点，则为 `null`。
- {{DOMxRef("Element.outerHTML")}}
  - : 一个字符串，代表元素的标记（包括其内容）。作为 setter 使用时，将用从给定字符串解析出的节点替换元素。
- {{DOMxRef("Element.part")}}
  - : 代表元素的部分标识符（即使用 `part` 属性设置的标识符），以 {{domxref("DOMTokenList")}} 的形式返回。
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : 代表元素命名空间前缀的字符串，如果没有指定前缀，则为 `null`。
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : 一个 `Element`，树中紧靠给定元素的元素，如果没有同级元素，则为 `null`。
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
  - : 返回元素挂载的开放影子根；如果没有开放影子根，则返回 null。
- {{DOMxRef("Element.slot")}}
  - : 返回元素插入的影子 DOM 插槽的名称。
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
  - : 反映 [`aria-rowindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) 属性的字符串，它定义了 aria-rowindex 的人类可读文本替代。
- {{domxref("Element.ariaRowSpan")}}
  - : 反映 [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性的字符串，该属性定义了表格、网格或树型网格中单元格或网格单元格所跨行数。
- {{domxref("Element.ariaSelected")}}
  - : 反映 [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected) 属性的字符串，表示具有选定状态的元素的当前“选定”状态。
- {{domxref("Element.ariaSetSize")}}
  - : 反映 [`aria-setsize`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) 属性的字符串，该属性定义了当前列表项或树状项集合中的项数。
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

_`Element` 继承 {{DOMxRef("Node")}} 及其父接口 {{DOMxRef("EventTarget")}} 的方法。_

- {{DOMxRef("Element.after()")}}
  - : 在 `Element` 父节点的子节点列表中插入一组 {{domxref("Node")}} 对象或字符串，位于 `Element` 之后。
- {{DOMxRef("Element.animate()")}}
  - : 在元素上创建并运行动画的快捷方法。返回创建的动画对象实例。
- {{DOMxRef("Element.append()")}}
  - : 在元素的最后一个子元素后插入一组 {{domxref("Node")}} 对象或字符串。
- {{DOMxRef("Element.attachShadow()")}}
  - : 为指定元素附加影子 DOM 树，并返回指向其 {{DOMxRef("ShadowRoot")}} 的引用。
- {{DOMxRef("Element.before()")}}
  - : 在 `Element` 父节点的子节点列表中插入一组 {{domxref("Node")}} 对象或字符串，位于 `Element` 之前。
- {{DOMxRef("Element.closest()")}}
  - : 返回 `Element` 当前元素（或当前元素本身）最接近的祖先，且与参数中给定的选择器匹配。
- {{DOMxRef("Element.computedStyleMap()")}}
  - : 返回一个 {{DOMxRef("StylePropertyMapReadOnly")}} 接口，该接口提供 CSS 声明块的只读表示，可替代 {{DOMxRef("CSSStyleDeclaration")}}。
- {{DOMxRef("Element.getAnimations()")}}
  - : 返回元素当前活动的动画对象数组。
- {{DOMxRef("Element.getAttribute()")}}
  - : 从当前节点读取指定属性的值，并以字符串形式返回。
- {{DOMxRef("Element.getAttributeNames()")}}
  - : 返回当前元素的属性名称数组。
- {{DOMxRef("Element.getAttributeNode()")}}
  - : 从当前节点获取指定属性的节点表示，并以 {{DOMxRef("Attr")}} 的形式返回。
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : 从当前节点读取指定名称和命名空间的属性的节点表示，并以 {{DOMxRef("Attr")}} 的形式返回。
- {{DOMxRef("Element.getAttributeNS()")}}
  - : 从当前节点读取指定名称空间和名称的属性值，并以字符串形式返回。
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : 返回元素的大小及其相对于视口的位置。
- {{domxref("Element.getBoxQuads()")}} {{Experimental_Inline}}
  - : 返回代表节点 CSS 片段的 {{domxref("DOMQuad")}} 对象列表。
- {{DOMxRef("Element.getClientRects()")}}
  - : 返回表示客户端中每行文本边界矩形的矩形集合。
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，其中包含当前元素的所有后代，这些后代拥有参数中给定的类列表。
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，其中包含当前元素的特定标签名的所有后代元素。
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，其中包含当前元素的特定标签名和命名空间的所有后代元素。
- {{DOMxRef("Element.hasAttribute()")}}
  - : 返回一个布尔值，表示元素是否具有指定属性。
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : 返回一个布尔值，表示元素是否在指定名称空间中具有指定属性。
- {{DOMxRef("Element.hasAttributes()")}}
  - : 返回一个布尔值，表示元素是否具有一个或多个 HTML 属性。
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : 指示调用该函数的元素是否具有指针捕获功能，用于捕获由给定指针 ID 标识的指针。
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : 将指定元素节点插入调用该函数的元素的指定位置。
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : 解析 HTML 或 XML 文本，并将生成的节点插入树中指定的位置。
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : 将给定的文本节点插入调用该函数的元素的指定位置。
- {{DOMxRef("Element.matches()")}}
  - : 返回一个布尔值，表示该元素是否会被指定的选择器字符串选中。
- {{DOMxRef("Element.prepend()")}}
  - : 在元素的第一个子元素之前插入一组 {{domxref("Node")}} 对象或字符串。
- {{DOMxRef("Element.querySelector()")}}
  - : 返回相对于元素符合指定选择器字符串的第一个 {{DOMxRef("Node")}}。
- {{DOMxRef("Element.querySelectorAll()")}}
  - : 返回 {{DOMxRef("NodeList")}} 中相对于元素符合指定选择器字符串的节点。
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : 释放（停止）之前为特定{{DOMxRef("PointerEvent", "指针事件")}}设置的指针捕捉。
- {{DOMxRef("Element.remove()")}}
  - : 从父元素的子元素列表中删除该元素。
- {{DOMxRef("Element.removeAttribute()")}}
  - : 从当前节点删除指定属性。
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : 从当前节点删除指定属性的节点表示。
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : 从当前节点删除指定名称和命名空间的属性。
- {{DOMxRef("Element.replaceChildren()")}}
  - : 用一组指定的新子节点替换 {{domxref("Node")}} 的现有子节点。
- {{DOMxRef("Element.replaceWith()")}}
  - : 用一组 {{domxref("Node")}} 对象或字符串替换父元素子元素列表中的元素。
- {{DOMxRef("Element.requestFullscreen()")}}
  - : 异步要求浏览器全屏显示元素。
- {{DOMxRef("Element.requestPointerLock()")}}
  - : 允许异步请求锁定给定元素上的指针。
- {{domxref("Element.scroll()")}}
  - : 滚动到指定元素内部的特定坐标。
- {{domxref("Element.scrollBy()")}}
  - : 以给定数值滚动元素。
- {{DOMxRef("Element.scrollIntoView()")}}
  - : 滚动页面，直到元素进入视图。
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : 如果当前元素尚未进入浏览器窗口的可见区域，则将其滚动到浏览器窗口的可见区域。**请使用标准的 {{DOMxRef("Element.scrollIntoView()")}}。**
- {{domxref("Element.scrollTo()")}}
  - : 滚动到指定元素内部的特定坐标。
- {{DOMxRef("Element.setAttribute()")}}
  - : 设置当前节点的指定属性值。
- {{DOMxRef("Element.setAttributeNode()")}}
  - : 设置当前节点指定属性的节点表示形式。
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : 设置当前节点具有指定名称和命名空间的属性的节点表示形式。
- {{DOMxRef("Element.setAttributeNS()")}}
  - : 设置当前节点指定名称和命名空间的属性值。
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 设置鼠标事件捕获，将所有鼠标事件重定向到此元素。
- {{DOMxRef("Element.setPointerCapture()")}}
  - : 指定一个特定的元素作为未来[指针事件](/zh-CN/docs/Web/API/Pointer_events)的捕获目标。
- {{DOMxRef("Element.toggleAttribute()")}}
  - : 在指定的元素上切换布尔属性，如果存在则删除它，如果不存在则添加它。

## 事件

使用 `addEventListener()` 或将事件监听器分配给此接口的 `oneventname` 属性来监听这些事件。

- {{domxref("Element/afterscriptexecute_event","afterscriptexecute")}} {{Non-standard_Inline}}
  - : 执行脚本时触发此事件。
- {{domxref("Element/beforematch_event", "beforematch")}} {{Experimental_Inline}}
  - : 浏览器在（处于[_被找到前隐藏_](/zh-CN/docs/Web/HTML/Global_attributes/hidden)状态的）元素因用户已通过“在页面中查找”功能或片段导航找到了该内容而即将显示时触发。
- {{domxref("Element/beforescriptexecute_event","beforescriptexecute")}} {{Non-standard_Inline}}
  - : 脚本即将执行时触发此事件。
- {{domxref("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} {{Experimental_Inline}}
  - : 当元素开始或停止[与用户相关](/zh-CN/docs/Web/CSS/CSS_containment#与用户相关)和[跳过其内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)时，触发任何设置了 {{cssxref("content-visibility", "content-visibility: auto")}} 的元素。
- {{domxref("Element/scroll_event", "scroll")}}
  - : 当文档视图或元素滚动时触发此事件。
- {{domxref("Element/scrollend_event", "scrollend")}}
  - : 当文档视图完成滚动时触发此事件。
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : 当违反[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)时触发此事件。
- {{domxref("Element/wheel_event","wheel")}}
  - : 当用户旋转指向设备（通常是鼠标）上的滚轮按钮时触发此事件。

### 动画事件

- {{domxref("Element/animationcancel_event", "animationcancel")}}
  - : 当动画意外终止时触发此事件。
- {{domxref("Element/animationend_event", "animationend")}}
  - : 当动画正常结束时触发此事件。
- {{domxref("Element/animationiteration_event", "animationiteration")}}
  - : 当动画迭代完成时触发此事件。
- {{domxref("Element/animationstart_event", "animationstart")}}
  - : 当动画开始时触发此事件。

### 剪贴板事件

- {{domxref("Element/copy_event", "copy")}}
  - : 当用户通过浏览器的用户界面初始化复制操作时触发此事件。
- {{domxref("Element/cut_event", "cut")}}
  - : 当用户通过浏览器的用户界面初始化剪切操作时触发此事件。
- {{domxref("Element/paste_event", "paste")}}
  - : 当用户通过浏览器的用户界面初始化粘贴操作时触发此事件。

### 合成事件

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : 当文本合成系统（如{{glossary("input method editor", "输入法编辑器")}}）完成或取消当前合成会话时触发此事件。
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : 当文本合成系统（如{{glossary("input method editor", "输入法编辑器")}}）开始新的合成会话时触发此事件。
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : 在文本合成系统（如{{glossary("input method editor", "输入法编辑器")}}）控制的文本合成会话中收到新字符时触发此事件。

### 聚焦事件

- {{domxref("Element/blur_event", "blur")}}
  - : 当元素失去焦点时触发此事件。
- {{domxref("Element/focus_event", "focus")}}
  - : 当元素获得焦点时触发此事件。
- {{domxref("Element/focusin_event", "focusin")}}
  - : 当元素获得焦点时触发此事件，位于 {{domxref("Element/focus_event", "focus")}} 事件之后。
- {{domxref("Element/focusout_event", "focusout")}}
  - : 当元素失去焦点时触发此事件，位于 {{domxref("Element/blur_event", "blur")}} 事件之后。

### 全屏事件

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : 当前 {{domxref("Element")}} 进入或退出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式时发送给该元素。
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : 如果在尝试将当前 `Element` 切换到或切换出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式时发生错误，则向该 `Element` 发送该事件。

### 键盘事件

- {{domxref("Element/keydown_event", "keydown")}}
  - : 当按键按下时触发此事件。
- {{domxref("Element/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 当按下可产生字符值的按键时触发此事件。
- {{domxref("Element/keyup_event", "keyup")}}
  - : 当按键释放时触发此事件。

### 鼠标事件

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : 当元素上的非主要指针设备按钮（例如除左键以外的任何鼠标按钮）被按下并释放时触发此事件。
- {{domxref("Element/click_event", "click")}}
  - : 指针设备按钮（如鼠标的主按钮）在单个元素上按下并释放时触发此事件。
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : 当用户尝试打开上下文菜单时触发此事件。
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : 当指针设备按钮（如鼠标的主按钮）在单个元素上被点击两次时触发此事件。
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : 元素被激活，例如通过鼠标点击或按键时触发此事件。
- {{domxref("Element/DOMMouseScroll_event", "DOMMouseScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 操作鼠标滚轮或类似设备，且自上次事件以来累计滚动量超过 1 行或 1 页时触发此事件。
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : 当元素上的指针设备按钮被按下时触发此事件。
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : 当指针设备（通常是鼠标）移动到附加了监听器的元素上时触发此事件。
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : 当指针设备（通常是鼠标）的指针移出附有监听器的元素时触发此事件。
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : 当指针设备（通常是鼠标）在元素上移动时触发此事件。
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : 当指针设备（通常是鼠标）离开监听器所连接的元素或其子元素时触发此事件。
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : 当指针设备移动到监听器所连接的元素上或其子元素上时触发此事件。
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : 当元素上的指针设备按钮被释放时触发此事件。
- {{domxref("Element/mousewheel_event", "mousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 操作鼠标滚轮或类似设备时触发此事件。
- {{domxref("Element/MozMousePixelScroll_event", "MozMousePixelScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 操作鼠标滚轮或类似设备时触发此事件。
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : 每次触控板触摸屏上的压力发生变化时触发此事件。
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : 在鼠标按下事件后，一旦施加了足够的压力，就会触发“强制点击”。
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : 在 {{domxref("Element/mousedown_event", "mousedown")}} 事件之前触发。
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : 在 {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} 事件之后，当压力充分减小以结束“强制点击”时触发。

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
