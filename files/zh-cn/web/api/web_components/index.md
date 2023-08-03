---
title: Web Component
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

Web Component 是一套不同的技术，允许你创建可重用的定制元素（它们的功能封装在你的代码之外）并且在你的 web 应用中使用它们。

## 概念和使用

作为开发者，我们都知道尽可能多的重用代码是一个好主意。这对于自定义标记结构来说通常不是那么容易 — 想想复杂的 HTML（以及相关的样式和脚本），有时您不得不写代码来呈现自定义 UI 控件，并且如果您不小心的话，多次使用它们会使您的页面变得一团糟。

Web Components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- **Custom element（自定义元素）**：一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。
- **Shadow DOM（影子 DOM）**：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML template（HTML 模板）：** {{HTMLElement("template")}} 和 {{HTMLElement("slot")}} 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

实现 web component 的基本方法通常如下所示：

1. 创建一个类或函数来指定 web 组件的功能，如果使用类，请使用 ECMAScript 2015 的类语法 (参阅[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)获取更多信息)。
2. 使用 {{domxref("CustomElementRegistry.define()")}} 方法注册您的新自定义元素，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。
3. 如果需要的话，使用 {{domxref("Element.attachShadow()")}} 方法将一个 shadow DOM 附加到自定义元素上。使用通常的 DOM 方法向 shadow DOM 中添加子元素、事件监听器等等。
4. 如果需要的话，使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 定义一个 HTML 模板。再次使用常规 DOM 方法克隆模板并将其附加到您的 shadow DOM 中。
5. 在页面任何您喜欢的位置使用自定义元素，就像使用常规 HTML 元素那样。

## 教程

- [使用自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)
  - : 介绍如何使用自定义元素的功能来创建简单的 web component，以及生命周期回调和其他更高级的功能。
- [使用 shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)
  - : 介绍 shadow DOM 的基础知识，展示如何向元素中附加 shadow DOM，添加到 shadow DOM 树，添加样式等等。
- [使用 template 和 slot](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)
  - : 介绍如何使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 元素定义可重用的 HTML 结构，然后在 Web component 中使用该结构。

## 参考

### 自定义元素

- {{domxref("CustomElementRegistry")}}
  - : 包含自定义元素相关功能，最值得注意的是 {{domxref("CustomElementRegistry.define()")}} 方法用来注册新的自定义元素，这样就可以在文档中使用它们。
- {{domxref("Window.customElements")}}
  - : 返回 `CustomElementRegistry` 对象的引用。
- [生命周期回调](/zh-CN/docs/Web/API/Web_components/Using_custom_elements#Using_the_lifecycle_callbacks)

  - : 定义在自定义元素的类定义中的特殊回调函数，影响其行为：
    - `connectedCallback`：当自定义元素第一次被连接到文档 DOM 时被调用。
    - `disconnectedCallback`：当自定义元素与文档 DOM 断开连接时被调用。
    - `adoptedCallback`：当自定义元素被移动到新文档时被调用。
    - `attributeChangedCallback`：当自定义元素的一个属性被增加、移除或更改时被调用。

- 创建自定义内置元素的扩展
  - : 定义了以下扩展：
    - [`is`](/zh-CN/docs/Web/HTML/Global_attributes/is) 全局 HTML 属性：允许你指定标准 HTML 元素像定义的内置元素一样工作。
    - {{domxref("Document.createElement()")}} 方法的“is”选项：允许您创建一个标准 HTML 元素的实例，表现得像一个给定的已注册的自定义内置元素。
- CSS 伪类
  - : 与自定义元素特别相关的伪类：
    - {{cssxref(":defined")}}：匹配任何已定义的元素，包括内置元素和使用 `CustomElementRegistry.define()` 定义的自定义元素。
    - {{cssxref(":host")}}：选择 [shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的 shadow host，内容是它内部使用的 CSS（containing the CSS it is used inside）。
    - {{cssxref(":host()")}}：选择 [shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的 shadow host，内容是它内部使用的 CSS（这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器的 shadow host 元素。
    - {{cssxref(":host-context", ":host-context()")}}：选择 [shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的 shadow host，内容是它内部使用的 CSS（这样您可以从 shadow DOM 内部选择自定义元素）— 但只匹配给定方法的选择器匹配元素的子 shadow host 元素。

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : 表示 shadow DOM 子树的根节点。
- {{domxref("Element")}} extensions
  - : 与 shadow DOM 有关的 `Element` 接口的扩展：
    - {{domxref("Element.attachShadow()")}} 方法将 shadow DOM 树附加给特定元素。
    - {{domxref("Element.shadowRoot")}} 属性返回附加给特定元素的 shadow root，或者 `null` 如果没有 shadow root 被附加。
- {{domxref("Node")}} 相关拓展
  - : 与 shadow DOM 相关的 `Node` 接口的拓展：
    - {{domxref("Node.getRootNode()")}} 方法返回上下文对象的根，可以选择包含 shadow root，如果可用的话。
    - {{domxref("Node.isConnected")}} 属性返回一个布尔值表示节点是否连接（直接或间接）到上下文对象。例如，在普通 DOM 的情况下为 {{domxref("Document")}} 对象，或者在 shadow DOM 的情况下为 {{domxref("ShadowRoot")}} 。
- {{domxref("Event")}} 拓展
  - : 与 shadow DOM 相关的 `Event` 接口的扩展：
    - {{domxref("Event.composed")}}：返回 {{jsxref("Boolean")}} 它表明事件是否会通过 shadow DOM 边界传播到标准 DOM。
    - {{domxref("Event.composedPath")}}：返回事件的路径（侦听器将被调用的对象）。如果 shadow root 是使用 {{domxref("ShadowRoot.mode")}} 为 closed 创建的，则不包括 shadow 树中的节点。

### HTML template

- {{htmlelement("template")}}
  - : 包含一个 HTML 片段，不会在文档初始化时渲染。但是可以在运行时使用 JavaScript 显示。主要用作自定义元素结构的基础。关联的 DOM 接口是{{domxref("HTMLTemplateElement")}}。
- {{htmlelement("slot")}}
  - : web component 中的一个占位符，你可以填充自己的标记，这样你就可以创建单独的 DOM 树并将它们呈现在一起。关联的 DOM 接口是{{domxref("HTMLSlotElement")}}。
- [`slot`](/zh-CN/docs/Web/HTML/Global_attributes/slot) 全局 HTML 属性
  - : 将在 shadow DOM 树中的插槽分配给一个元素。
- {{domxref("Element.assignedSlot")}}
  - : 一个只读属性，它返回对插入此元素的 {{htmlelement("slot")}} 的引用。
- {{domxref("Text.assignedSlot")}}
  - : 一个只读属性，它返回对插入此文本节点的 {{htmlelement("slot")}} 的引用。
- {{domxref("Element")}} 扩展
  - : 与插槽相关的 `Element` 接口的扩展：
    - {{domxref("Element.slot")}}：返回附加到元素上的 shadow DOM 插槽的名字。
- CSS 伪元素
  - : slots 特别相关的伪元素：
    - {{cssxref("::slotted")}}：匹配任何已经插入一个 slot 的内容。
- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} 事件
  - : 当插槽中的节点改变时在 {{domxref("HTMLSlotElement")}} 实例（{{htmlelement("slot")}} 元素）上触发。

## 示例

在 [web-components-examples](https://github.com/mdn/web-components-examples)，我们正在构建一些例子。以后会添加更多。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Open Web Components](https://open-wc.org/) — Guides, tools and libraries for developing web components.
- [DataFormsJS](https://www.dataformsjs.com/) — Open source web components library — Set of Web Components that can be used to build Single Page Apps (SPA), Display JSON data from API's and Web Services, and bind data to different elements on screen. All Web Components are plain JavaScript and require no build process.
- [FAST](https://www.fast.design/) is a web component library built by Microsoft which offers several packages to leverage depending on your project needs. [Fast Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element) is a lightweight means to easily build performant, memory-efficient, standards-compliant Web Components. [Fast Foundation](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation) is a library of Web Component classes, templates, and other utilities built on fast-element intended to be composed into registered Web Components.
- [Hybrids](https://github.com/hybridsjs/hybrids) — Open source web components library, which favors plain objects and pure functions over `class` and `this` syntax. It provides a simple and functional API for creating custom elements.
- [Lit](https://lit.dev/) — Google's web components library, the core of which is a component base class designed to reduce boilerplate while providing reactive state, scoped styles, and a declarative template system.
- [Snuggsi](https://github.com/devpunks/snuggsi#readme) — Easy Web Components in \~1kB _Including polyfill_ — All you need is a browser and basic understanding of HTML, CSS, and JavaScript classes to be productive.
- [Slim.js](https://github.com/slimjs/slim.js) — Open source web components library — a high-performant library for rapid and easy component authoring; extensible and pluggable and cross-framework compatible.
- [Stencil](https://stenciljs.com/) — Toolchain for building reusable, scalable design systems in web components.
- [omi](https://tencent.github.io/omi/) - Front End Cross-Frameworks Framework
