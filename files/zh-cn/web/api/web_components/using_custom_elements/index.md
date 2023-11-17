---
title: 使用 custom elements
slug: Web/API/Web_components/Using_custom_elements
---

{{DefaultAPISidebar("Web Components")}}

Web Components 标准非常重要的一个特性是，它使开发者能够将 HTML 页面的功能封装为 custom elements（自定义标签），而往常，开发者不得不写一大堆冗长、深层嵌套的标签来实现同样的页面功能。这篇文章将会介绍如何使用 HTML 的 custom elements。

> **备注：** Firefox、Chrome 和 Opera 默认就支持 custom elements。Safari 目前只支持 autonomous custom elements（自主自定义标签），而 Edge 也正在积极实现中。

## 概述

{{domxref("CustomElementRegistry")}} 接口的实例用来处理 web 文档中的 custom elements — 该对象允许你注册一个 custom element，返回已注册 custom elements 的信息，等等。

{{domxref("CustomElementRegistry.define()")}} 方法用来注册一个 custom element，该方法接受以下参数：

- 表示所创建的元素名称的符合 {{domxref("DOMString")}} 标准的字符串。注意，custom element 的名称不能是单个单词，且其中[必须要有短横线](https://html.spec.whatwg.org/#valid-custom-element-name)。
- 用于定义元素行为的 [类](/zh-CN/docs/Web/JavaScript/Reference/Classes) 。
- `可选参数`，一个包含 `extends` 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。

作为示例，我们可以像这样定义一个叫做 [word-count](https://mdn.github.io/web-components-examples/word-count-web-component/) 的 custom element：

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

这个元素叫做 `word-count`，它的类对象是 `WordCount`, 继承自 {{htmlelement("p")}} 元素。

一个 custom element 的类对象可以通过 ES 2015 标准里的类语法生成。所以，`WordCount`可以写成下面这样：

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // 必须首先调用 super 方法
    super();

    // 元素的功能代码写在这里

    ...
  }
}
```

上面只是一个简单的例子，我们能做的不只这些。在构造函数中，我们可以设定一些生命周期的回调函数，在特定的时间，这些回调函数将会被调用。例如，`connectedCallback`会在 custom element 首次被插入到文档 DOM 节点上时被调用，而 `attributeChangedCallback`则会在 custom element 增加、删除或者修改某个属性时被调用。

你可以在 [使用生命周期回调函数](#使用生命周期回调函数)段落中了解更多相关信息。

共有两种 custom elements：

- **Autonomous custom elements** 是独立的元素，它不继承其他内建的 HTML 元素。你可以直接把它们写成 HTML 标签的形式，来在页面上使用。例如 `<popup-info>`，或者是`document.createElement("popup-info")`这样。
- **Customized built-in elements** 继承自基本的 HTML 元素。在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时，需要先写出基本的元素标签，并通过 [`is`](/zh-CN/docs/Web/HTML/Global_attributes#is) 属性指定 custom element 的名称。例如`<p is="word-count">`, 或者 `document.createElement("p", { is: "word-count" })`。

## 示例

让我们来看几个简单示例，来了解如何创建 custom elements。

### Autonomous custom elements

我们来看一下 [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (查看[在线示例](https://mdn.github.io/web-components-examples/popup-info-box-web-component/))，一个关于 autonomous custom element 的例子。它包含有一个图标和一段文字，并且图标显示在页面上。在这个图标获取焦点时，它会显示一个包含该段文字的信息框，用于展示更多的信息。

为了实现这个功能，首先创建一个 JavaScript 文件，定义一个叫做`PopUpInfo`的类，它继承自{{domxref("HTMLElement")}}。Autonomous custom elements 总是继承自`HTMLElement`。

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super 方法
    super();

    // 元素的功能代码写在这里

    ...
  }
}
```

上述代码片段中，类的构造函数{{jsxref("Classes.constructor","constructor")}}总是先调用[`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)来建立正确的原型链继承关系。

在构造函数中，我们会定义元素实例所拥有的全部功能。作为示例，我们首先会将 shadow root 附加到 custom element 上，然后通过一系列 DOM 操作创建 custom element 的内部阴影 DOM（shadow DOM）结构，再将其附加到 shadow root 上，最后再将一些 CSS 附加到 shadow root 的 style 节点上。

```js
// 创建一个 shadow root
var shadow = this.attachShadow({ mode: "open" });

// 创建一个 spans
var wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
var icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
var info = document.createElement("span");
info.setAttribute("class", "info");

// 获取 text 属性上的内容，并添加到一个 span 标签内
var text = this.getAttribute("text");
info.textContent = text;

// 插入 icon
var imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
var img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);

// 创建一些 CSS，并应用到 shadow dom 上
var style = document.createElement("style");

style.textContent =
  ".wrapper {" +
  // 简洁起见，省略了具体的 CSS

  // 将创建的元素附加到 shadow dom

  shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

最后，我们使用之前提到的`define()`方法将 custom element 注册到`CustomElementRegistry`上，在方法的参数里，我们指定了元素的名称，以及定义了元素功能的类。

```js
customElements.define("popup-info", PopUpInfo);
```

现在我们可以在页面上使用我们定义的 custom element 了，就像下面这样：

```html
<popup-info
  img="img/alt.png"
  text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

> **备注：** 上方代码不是最新，你可以在这里找到[完整的源码](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js)。

> **备注：** 在 Chrome 版本 76.0.3809.132（正式版本）（64 位）中测试发现，`customElements.define()`必须在 js 文件中调用，且引用此 js 文件时必须在`script`标签上添加`defer`属性，否则`this.getAttribute('属性名称')`无法获取到值。

### Customized built-in elements

现在让我们来看一下另一个有关 customized built in element（自定义内置元素）的示例— [expanding-list](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) ([查看在线示例](https://mdn.github.io/web-components-examples/expanding-list-web-component/))。该示例将所有的无序列表转化为一个可收起/展开的菜单。

首先，我们定义一个元素的类，这和之前一样：

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // 必须首先调用 super 方法
    super();

    // 元素的功能代码写在这里

    ...
  }
}
```

在这里，我们不会详细解释元素的功能细节，你可以在源码中了解它的工作方式。这里的真正不同点在于元素继承的是{{domxref("HTMLUListElement")}} 接口，而不是{{domxref("HTMLElement")}}。所以它拥有{{htmlelement("ul")}} 元素所有的特性，以及在此基础上我们定义的功能，这是与独立元素（standalone element）不同之处。这也是为什么我们称它为 customized built-in 元素，而不是一个 autonomous 元素。

接下来，和之前一样，我们使用`define()`方法注册一个元素，但不同的是，我们需要添加一个配置对象，用于指定我们需要继承的元素：

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

在页面上使用 built-in element 看起来也会有所不同：

```html
<ul is="expanding-list">
  ...
</ul>
```

你可以正常使用`<ul>`标签，也可以通过`is`属性来指定一个 custom element 的名称。

> **备注：** 同样的，你可以在这里找到完整的 [JavaScript 源码](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js)。

> **备注：** 在 chrome 66 版本上，该示例无法正确工作，相关问题：[How to create new instance of an extended class of custom elements](https://stackoverflow.com/questions/39986046/how-to-create-new-instance-of-an-extended-class-of-custom-elements)

## 使用生命周期回调函数

在 custom element 的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用：

- `connectedCallback`：当 custom element 首次被插入文档 DOM 时，被调用。
- `disconnectedCallback`：当 custom element 从文档 DOM 中删除时，被调用。
- `adoptedCallback`：当 custom element 被移动到新的文档时，被调用。
- `attributeChangedCallback`: 当 custom element 增加、删除、修改自身属性时，被调用。

我们来看一下它们的一下用法示例。下面的代码出自[life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks)示例（[查看在线示例](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)）。这个简单示例只是生成特定大小、颜色的方块。custom element 看起来像下面这样：

```html
<custom-square l="100" c="red"></custom-square>
```

这里，类的构造函数很简单 — 我们将 shadow DOM 附加到元素上，然后将一个{{htmlelement("div")}}元素和{{htmlelement("style")}}元素附加到 shadow root 上：

```js
var shadow = this.attachShadow({ mode: "open" });

var div = document.createElement("div");
var style = document.createElement("style");
shadow.appendChild(style);
shadow.appendChild(div);
```

示例中的关键函数是 `updateStyle()`—它接受一个元素作为参数，然后获取该元素的 shadow root，找到`<style>`元素，并添加{{cssxref("width")}}，{{cssxref("height")}}以及{{cssxref("background-color")}}样式。

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("l")}px;
      height: ${elem.getAttribute("l")}px;
      background-color: ${elem.getAttribute("c")};
    }
  `;
}
```

实际的更新操作是在生命周期的回调函数中处理的，我们在构造函数中设定类这些回调函数。当元素插入到 DOM 中时，`connectedCallback()`函数将会执行 — 在该函数中，我们执行`updateStyle()` 函数来确保方块按照定义来显示；

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

`disconnectedCallback()`和`adoptedCallback()`回调函数只是简单地将消息发送到控制台，提示我们元素什么时候从 DOM 中移除、或者什么时候移动到不同的页面：

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

每当元素的属性变化时，`attributeChangedCallback()`回调函数会执行。正如它的属性所示，我们可以查看属性的名称、旧值与新值，以此来对元素属性做单独的操作。在当前的示例中，我们只是再次执行了`updateStyle()`函数，以确保方块的样式在元素属性值变化后得以更新：

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

需要注意的是，如果需要在元素属性变化后，触发`attributeChangedCallback()`回调函数，你必须监听这个属性。这可以通过定义`observedAttributes()` get 函数来实现，`observedAttributes()`函数体内包含一个 return 语句，返回一个数组，包含了需要监听的属性名称：

```js
static get observedAttributes() {return ['w', 'l']; }
```

在我们的例子中，该段代码处于构造函数的上方。

> **备注：** 在这里查看[完整的 JavaScript 源码](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js)。
