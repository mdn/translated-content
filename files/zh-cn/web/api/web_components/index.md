---
title: Web 组件
slug: Web/API/Web_components
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{DefaultAPISidebar("Web Components")}}

Web 组件（Web Component）是一组多种技术的集合，允许你创建可重用的定制元素（其功能与其余代码相互隔离）并在你的 Web 应用中加以使用。

## 概念和使用

作为开发者，我们都知道尽可能多的重用代码是一个好主意。这对于自定义标记结构来说通常不是那么容易——想想复杂的 HTML（以及相关的样式和脚本），有时你不得不写代码来渲染自定义 UI 控件，并且如果你不小心的话，多次使用它们会使你的页面变得一团糟。

Web 组件旨在解决这些问题——它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- **自定义元素**
  - : 一组 JavaScript API，允许你定义自定义元素及其行为，然后可以在你的用户界面中按照需要使用它们。
- **影子 DOM**
  - : 一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素上（与主文档 DOM 分开渲染）并控制其关联的功能。通过这种方式，你可以保持元素的特性私有，从而在无需担心与文档其他部分发生冲突的情况下对其进行脚本编写和样式设置。
- **HTML 模板**
  - : {{HTMLElement("template")}} 和 {{HTMLElement("slot")}} 元素使你可以编写不在渲染页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

实现 Web 组件的基本方法通常如下所示：

1. 创建一个类来指定 Web 组件的功能，使用[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)语法。
2. 使用 {{domxref("CustomElementRegistry.define()")}} 方法注册你的新自定义元素，并向其传递要定义的元素名称、指定元素功能的类，以及（可选的）其所继承的元素。你可以通过 {{domxref("Window.customElements")}} 在全局注册表中注册，或者使用 {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} 构造函数创建[域限注册表](/zh-CN/docs/Web/API/Web_components/Using_custom_elements#域限自定义元素注册表)以避免组件之间的名称冲突。
3. 如果需要的话，使用 {{domxref("Element.attachShadow()")}} 方法将一个影子 DOM 附加到自定义元素上。使用通常的 DOM 方法向影子 DOM 中添加子元素、事件监听器等等。
4. 如果需要的话，使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到你的影子 DOM 中。
5. 在页面任何你喜欢的位置使用自定义元素，就像使用常规 HTML 元素那样。

## 教程

- [使用自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)
  - : 介绍如何使用自定义元素的功能来创建简单的 Web 组件，以及生命周期回调和其他更高级的功能。
- [使用影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)
  - : 介绍影子 DOM 的基础知识，展示如何将影子 DOM 附加到元素上、添加到影子 DOM 树上、为其添加样式，等等。
- [使用 template 和 slot](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)
  - : 介绍如何使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 元素定义可重用的 HTML 结构，然后在 Web 组件中使用该结构。

## 参考

### 自定义元素

- {{domxref("CustomElementRegistry")}}
  - : 包含自定义元素相关功能，最值得注意的是 {{domxref("CustomElementRegistry.define()")}} 方法，用于注册新的自定义元素，这样就可以在文档中使用它们。{{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} 构造函数可用于创建域限注册表，{{domxref("CustomElementRegistry.initialize()")}} 方法将域限注册表与 DOM 子树关联。
- {{domxref("Window.customElements")}}
  - : 返回 `CustomElementRegistry` 对象的引用。
- {{domxref("Document.customElementRegistry")}}
  - : 与文档关联的 {{domxref("CustomElementRegistry")}}。
- {{domxref("Element.customElementRegistry")}}
  - : 与元素关联的 {{domxref("CustomElementRegistry")}}。
- [生命周期回调](/zh-CN/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  - : 定义在自定义元素的类定义中的特殊回调函数，影响其行为：
    - `connectedCallback()`
      - : 当自定义元素第一次被连接到文档 DOM 时被调用。
    - `disconnectedCallback()`
      - : 当自定义元素与文档 DOM 断开连接时被调用。
    - `adoptedCallback()`
      - : 当自定义元素被移动到新文档时被调用。
    - `attributeChangedCallback()`
      - : 当自定义元素的一个属性被增加、移除或更改时被调用。

- 创建自定义内置元素的扩展
  - : 定义了以下扩展：
    - [`is`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/is) 全局 HTML 属性
      - : 允许你指定标准 HTML 元素像定义的内置元素一样工作。
    - {{domxref("Document.createElement()")}} 方法的“is”选项
      - : 允许你创建一个标准 HTML 元素的实例，表现得像一个给定的已注册的自定义内置元素。

- CSS 伪类
  - : 与自定义元素特别相关的伪类：
    - {{cssxref(":defined")}}
      - : 匹配任何已定义的元素，包括内置元素和使用 `CustomElementRegistry.define()` 定义的自定义元素。
    - {{cssxref(":host")}}
      - : 选择[影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的影子宿主，内容是它内部使用的 CSS。
    - {{cssxref(":host", ":host()")}}
      - : 选择[影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的影子宿主，内容是它内部使用的 CSS（这样你可以从影子 DOM 内部选择自定义元素）——但只匹配给定方法的选择器的影子宿主元素。
    - {{cssxref(":host-context", ":host-context()")}}
      - : 选择[影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的影子宿主，内容是它内部使用的 CSS（这样你可以从影子 DOM 内部选择自定义元素）——但只匹配给定方法的选择器匹配元素的子影子宿主元素。
    - {{CSSxRef(":state",":state()")}}
      - : 匹配处于指定自定义状态的自定义元素。更准确地说，它匹配匿名自定义元素，其中指定的状态存在于元素的 {{domxref("CustomStateSet")}} 中。

- CSS 伪元素
  - : 与自定义元素特别相关的伪元素：
    - {{cssxref("::part")}}
      - : 表示[影子树](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)中任何具有匹配 [`part`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/part) 属性的元素。

### 影子 DOM

- {{domxref("ShadowRoot")}}
  - : 表示影子 DOM 子树的根节点。
- {{domxref("ShadowRoot.customElementRegistry")}}
  - : 与影子根关联的 {{domxref("CustomElementRegistry")}}。可以通过 {{domxref("Element.attachShadow()")}} 的 `customElementRegistry` 选项设置，或稍后使用 {{domxref("CustomElementRegistry.initialize()")}} 设置。
- {{domxref("Element")}} 扩展
  - : 与影子 DOM 有关的 `Element` 接口的扩展：
    - {{domxref("Element.attachShadow()")}} 方法将影子 DOM 树附加给特定元素。
    - {{domxref("Element.shadowRoot")}} 属性返回附加给特定元素的影子根，或者 `null` 如果没有影子根被附加。
- {{domxref("Node")}} 相关扩展
  - : 与影子 DOM 相关的 `Node` 接口的扩展：
    - {{domxref("Node.getRootNode()")}} 方法返回上下文对象的根，可以选择包含影子根，如果可用的话。
    - {{domxref("Node.isConnected")}} 属性返回一个布尔值表示节点是否连接（直接或间接）到上下文对象。例如，在普通 DOM 的情况下为 {{domxref("Document")}} 对象，或者在影子 DOM 的情况下为 {{domxref("ShadowRoot")}}。
- {{domxref("Event")}} 扩展
  - : 与影子 DOM 相关的 `Event` 接口的扩展：
    - {{domxref("Event.composed")}}
      - : 如果事件会通过影子 DOM 边界传播到标准 DOM，则返回 `true`，否则返回 `false`。
    - {{domxref("Event.composedPath")}}
      - : 返回事件的路径（监听器将被调用的对象）。如果影子根是使用 {{domxref("ShadowRoot.mode")}} 为 closed 创建的，则不包括影子树中的节点。

### HTML 模板

- {{htmlelement("template")}}
  - : 包含一个 HTML 片段，不会在文档初始化时渲染。但是可以在运行时使用 JavaScript 显示。主要用作自定义元素结构的基础。关联的 DOM 接口是 {{domxref("HTMLTemplateElement")}}。
- {{htmlelement("slot")}}
  - : Web 组件中的一个占位符，你可以填充自己的标记，这样你就可以创建单独的 DOM 树并将它们呈现在一起。关联的 DOM 接口是 {{domxref("HTMLSlotElement")}}。
- [`slot`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/slot) 全局 HTML 属性
  - : 将在影子 DOM 树中的插槽分配给一个元素。
- {{domxref("Element.assignedSlot")}}
  - : 一个只读属性，它返回对插入此元素的 {{htmlelement("slot")}} 的引用。
- {{domxref("Text.assignedSlot")}}
  - : 一个只读属性，它返回对插入此文本节点的 {{htmlelement("slot")}} 的引用。
- {{domxref("Element")}} 扩展
  - : 与插槽相关的 `Element` 接口的扩展：
    - {{domxref("Element.slot")}}
      - : 返回附加到元素上的影子 DOM 插槽的名字。

- CSS 伪元素
  - : 与插槽特别相关的伪元素：
    - {{cssxref("::slotted")}}
      - : 匹配任何已经插入到插槽中的内容。

- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} 事件
  - : 当插槽中的节点改变时在 {{domxref("HTMLSlotElement")}} 实例（{{htmlelement("slot")}} 元素）上触发。

## 示例

我们正在 [web-components-examples](https://github.com/mdn/web-components-examples) GitHub 仓库中构建一些示例。随着时间的推移，我们会添加更多内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
