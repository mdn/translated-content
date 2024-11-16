---
title: Houdini API
slug: Web/API/Houdini_APIs
---

{{DefaultAPISidebar("Houdini API")}}

Houdini 是一组底层 API，它们公开了 CSS 引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展 CSS。Houdini 是一组 API，它们使开发人员可以直接访问 [CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)（CSSOM），使开发人员可以编写浏览器可以解析为 CSS 的代码，从而创建新的 CSS 功能，而无需等待它们在浏览器中本地实现。

## Houdini 的优点

当样式改变时 Houdini 相比 JavaScript {{domxref("HTMLElement.style")}} 的方式能够更快的解析。浏览器在应用脚本中发现的任何样式更新之前，会对 CSSOM 进行解析——包括布局、绘制和合成过程。此外，对于 JavaScript 样式更新，布局、绘制和复合过程也会重复进行。Houdini 代码不会等待第一个渲染周期完成。相反，它被包含在第一个周期中——创建可渲染的、可理解的样式。Houdini 为在 JavaScript 中使用 CSS 值提供了一个基于对象的 API。

Houdini 的 CSS Typed OM 是一个包含类型和方法的 CSS 对象、并且暴露出了作为 JavaScript 对象的值。比起先前基于字符串的，对 [`HTMLElement.style`](/zh-CN/docs/Web/API/HTMLElement/style) 进行操作的方案，对 JavaScript 对象进行操作更符合直觉。每个元素和样式表规则都拥有一个样式对应表，该对应表可以通过 [`StylePropertyMap`](/zh-CN/docs/Web/API/StylePropertyMap) 来获得。

一个 CSS Houdini 的特性就是 [Worklet](/zh-CN/docs/Web/API/Worklet)。在它的帮助下，你可以通过引入一行 JavaScript 代码来引入配置化的组件，从而创建模块式的 CSS。不依赖任何前置处理器、后置处理器或者 JavaScript 框架。

```js
<script>CSS.paintWorklet.addModule('csscomponent.js');</script>
```

以上添加进的模块包含一个 [`registerPaint()`](/zh-CN/docs/Web/API/PaintWorklet/registerPaint)函数，这个模块是完全通过可配置的 worklets 来注册的。

这个 CSS `paint()` 函数的参数包括 worklet 的名字，以及其他可选的参数。worklet 同时能够访问元素的自定义属性：它们不需要作为函数参数传递。

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --hilights: blue;
  --lowlights: green;
}
```

> [!NOTE]
> 能力越大，责任越大！在 Houdini 的帮助下你能够在 CSS 中实现你自己的布局、栅格、或者区域特性，但是这么做并不是最佳实践。CSS 工作组已经做了许多努力来确保 CSS 中的每一项特性都能正常运行，覆盖各种边界情况，同时考虑到了安全、隐私，以及可用性方面的表现。如果你要深入使用 Houdini，确保你也把以上这些事项考虑在内！并且先从小处开始，再把你的自定义 Houdini 推向一个富有雄心的项目。

## Houdini APIs

在下面，你能够找到一些链接。这些链接指向 Houdini 范围下的 API 的主列表页面，同时链接到一些指导页来帮助你，如果你需要指导如何去使用这些 API。

- CSS Parser API
  - : 这是一个更直接地暴露出 CSS 解析器的 API，能够把任意 CSS 类语言解析成为一种中间类型。
    目前还没有该 API 的教程或参考。
- CSS Properties and Values API

  - : 定义了一个用来注册新的 CSS 属性的 API。通过该 API 注册的属性必须用一种特定的解析语法书写，以定义其类型、继承行为以及初始值。

    [CSS Properties and Values API reference](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API)
    [CSS Properties and Values API guide](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API/guide)

- CSS Typed OM

  - : 该 API 将 CSSOM 字符串转化为有类型意义的 JavaScript。这将对后续的一个重要的表现打下基础。CSS Typed OM 将 CSS 值以类型化处理的 JavaScript 对象的形式暴露出来，以使其表现可以被控制。

    [CSS Typed OM reference](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
    [CSS Typed OM guide](/zh-CN/docs/Web/API/CSS_Typed_OM_API/Guide)

- CSS Layout API
  - : 作为一个被设计来提升 CSS 扩展性的 API，该 API 能够让开发者去书写他们自己的布局算法，比如 masonry 或者 line snapping。该 API 目前还没有原生支持。目前还没有该 API 的教程或参考。
- CSS Painting API

  - : 作为一个被设计来提升 CSS 扩展性的 API，该 API 允许开发者通过 `paint()` 方法书写 JavaScript 函数，以控制绘制元素的背景、边框或者内容区域。

    [CSS Painting API reference](/zh-CN/docs/Web/API/CSS_Painting_API)
    [CSS Painting API guide](/zh-CN/docs/Web/API/CSS_Painting_API/Guide)

- Worklets

  - : 该 API 允许脚本独立于 JavaScript 执行环境，运行在渲染流程的各个阶段。Worklets 在概念上很接近于 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) ，它由渲染引擎调用，并扩展了渲染引擎。

    [Worklets reference](/zh-CN/docs/Web/API/Worklet)

## 其他

以下主题你可能会感兴趣，它们可能在你使用 Houdini API 的时候起一些有趣的作用。

- Composite Scrolling and Animation
  - : TBD
