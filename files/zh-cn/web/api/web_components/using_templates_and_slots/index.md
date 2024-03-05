---
title: 使用模板和插槽
slug: Web/API/Web_components/Using_templates_and_slots
---

{{DefaultAPISidebar("Web Components")}}

这篇文章阐述了如何使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 元素创建一个可以用来灵活填充 Web 组件的影子 DOM 的模板。

## 关于模板 (Templates)

当你必须在网页上复用相同的标记结构时，使用某种模板而不是一遍又一遍地重复相同的结构是有意义的。以前这是可行的，但 HTML {{htmlelement("template")}} 元素使它更容易实现 (这在现代浏览器中得到了很好的支持)。此元素及其内容不会在 DOM 中渲染，但仍可使用 JavaScript 引用它。

让我们看一个简单的示例：

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

上面的代码不会展示在你的页面中，直到你用 JavaScript 获取它的引用，然后添加到 DOM 中，例如使用如下代码：

```js
let template = document.getElementById("my-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

虽然是个简单的例子，但你已经可以开始了解它是多么的有用了。

## 在 Web Component 中使用模板

模板（Template）本身就是有用的，而与 web 组件（web component）一起使用效果更好。我们定义一个 web 组件使用模板作为影子 DOM（shadow DOM）的内容，叫它 `<my-paragraph>`：

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

要注意的关键是我们使用 {{domxref("Node.cloneNode()")}} 方法添加了模板的拷贝到影子根（shadow root）上。

因为我们添加了模板的内容到影子 DOM，所以我们可以加入一些样式信息到模板的 {{htmlelement("style")}} 标签里，这些样式信息稍后会封装到自定义元素中。如果只将它添加到一个标准的 DOM 中是不起作用的。

比如：

```html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

现在我们将它添加到自己的 HTML 文档中试试看：

```html
<my-paragraph></my-paragraph>
```

## 使用插槽（slots）添加灵活度

尽管到这一步已经挺好了，但是元素仍旧不是很灵活。我们只能在里面放一点文本，甚至没有普通的 p 标签管用！我们可以使用 {{htmlelement("slot")}} 元素让它能在单个实例中通过声明式的语法展示不同的文本。

插槽由其 `name` 属性标识，并且允许你在模板中定义占位符，当在标记中使用该元素时，该占位符可以填充所需的任何 HTML 标记片段。

因此，如果我们想添加一个插槽到这个简单的例子中，我们会将模板的 p 标签改成下面这样：

```html
<p><slot name="my-text">My default text</slot></p>
```

如果在标记中包含元素时未定义相关的插槽内容，或者浏览器不支持插槽，则`<my-paragraph>` 仅包含后备内容 "My default text"。

要定义插槽内容，我们在 `<my-paragraph>` 元素内包括一个 HTML 结构，该结构具有 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性，其值等于我们要填充的 {{htmlelement("slot")}} 的 name 属性的值。和之前一样，它可以是你喜欢的任何东西，例如：

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

或者

```html
<my-paragraph>
  <ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```
> **备注：** 将能被插入到槽中的元素视为 {{domxref("Slotable")}}; 称已经插入到槽中的元素为 _slotted_.

> **备注：** 未命名的 {{HTMLElement("slot")}} 元素将被填充为自定义元素中所有不含 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性的所有顶级子节点。这也包括文本节点。

这就我们的简单例子，如果你想继续了解，你可以[在 GitHub 上查看](https://github.com/mdn/web-components-examples/tree/master/simple-template)（另见[在线运行](https://mdn.github.io/web-components-examples/simple-template/)）。

## 更深入的示例

为了更好的结束这篇文章，我们来看一个不那么寻常的示例。

下面的一组代码片段展示了我们如何联合使用 `<slot>` 和 `<template>` 以及一些 JavaScript 来实现：

- 使用 [命名插槽 (named slots)](/zh-CN/docs/Web/HTML/Element/slot#named-slot) 在 [影子根 (shadow root)](/zh-CN/docs/Web/API/ShadowRoot) 中创建一个 **`<element-details>`** 元素。
- 将 **`<element-details>`** 元素设计成在文档中使用时，它将它[影子根](/zh-CN/docs/Web/API/ShadowRoot) 中的内容和该元素内部的内容糅合在一起——即元素内容中的片段被填充到元素[影子根](/zh-CN/docs/Web/API/ShadowRoot)的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#named-slot) 中。

注意，技术上来讲脱离 `<template>` 使用 `<slot>` 也是可以的。例如，`<slot>` 在一个常规的 {{HTMLElement("div")}} 标签里，仍然有占位符的特性，就像在影子 DOM 中一样，这样我们能避免需要先获取模板对象的 `content` 属性再使用它的麻烦。然而这个特性在向 {{HTMLElement("template")}} 元素中添加插槽时更加实用，因为你不太可能基于一个已渲染的元素定义一个模式。

另外，就算它还没有渲染，使用 {{HTMLElement("template")}} 时，作为模板的容器应该在语义上干净。而且 {{HTMLElement("template")}} 上可以直接添加一些对象，如 {{HTMLElement("td")}}，当添加到 {{HTMLElement("div")}} 中时会隐藏。

> **备注：** 你可以在 [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) 查看这个完整的例子（另见[在线运行](https://mdn.github.io/web-components-examples/element-details/)）。

### 使用插槽（slot）创建一个模板

首先，我们在 {{HTMLElement("template")}} 使用 `<slot>` 标签创建一个 "element-details-template" 包含一些[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#named-slot) 的[文档片段（document fragment）](/zh-CN/docs/Web/API/DocumentFragment)：

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
        >
        <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

上面这个 {{HTMLElement("template")}} 元素有几个特征：

- {{HTMLElement("template")}} 标签有一个 {{HTMLElement("style")}} 标签，里面有一些只能在当前 {{HTMLElement("template")}} 中创建的文档片段范围内生效的 CSS 样式
- {{HTMLElement("template")}} 用 {{HTMLElement("slot")}} 和它的 [`name`](/zh-CN/docs/Web/HTML/Element/slot#name) 属性生成一个[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#named-slot)：

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- {{HTMLElement("details")}} 元素中的 {{HTMLElement("template")}} 包裹[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#named-slot)。

### 从 \<template> 中创建一个新的 \<element-details> 元素

接下来，我们定义一个新的 **`<element-details>`** 元素然后用 {{DOMXref("Element.attachShadow")}} 来将其附加到它的 [影子根](/zh-CN/docs/Web/API/ShadowRoot) 上，即通过上面的 {{HTMLElement("template")}} 元素创建的文档片段。这和我们上面使用的简单例子中的一样。

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      var template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

### 结合命名插槽使用自定义元素 \<element-details>

现在让我们正式在文档中使用 \<element-details> 标签：

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >A placeholder inside a web component that users can fill with their own
    markup, with the effect of composing different DOM trees together.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >A mechanism for holding client- side content that is not to be rendered
    when a page is loaded but may subsequently be instantiated during runtime
    using JavaScript.</span
  >
</element-details>
```

关于以上代码片段，注意以下几点：

- 该代码片段有两个 **`<element-details>`** 标签，它们都使用了 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性来引用名为 `"element-name"` 和 `"description"` 的插槽，并把它们都放在影子根下。
- 只有第一个 **`<element-details>`** 元素引用了名为 `"attributes"` 的插槽，而第二个 `<element-details>` 标签没有引用名为 `"attributes"` 的插槽。
- 只有第一个 **`<element-details>`** 标签中的 {{HTMLElement("dl")}} 元素使用了名为 `"attributes"` 的插槽，它包含子元素：{{HTMLElement("dt")}} 和 {{HTMLElement("dd")}} 元素。

### 添加一些最终的样式

在完成之前，我们在文档中给 {{HTMLElement("dl")}} 和 {{HTMLElement("dt")}} 以及 {{HTMLElement("dd")}} 标签增加一些 CSS 样式。

```css
dl {
  margin-left: 6px;
}
dt {
  font-weight: bold;
  color: #217ac0;
  font-size: 110%;
}
dt {
  font-family: Consolas, "Liberation Mono", Courier;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### 结果

最后，让我们所有的代码片段结合在一起，看看渲染的结果是什么样的。

{{ EmbedLiveSample('更深入的示例', '300','400','element-details.png','') }}

关于结果请注意以下几点：

- 即使 **`<element-details>`** 标签并没有直接使用 {{HTMLElement("details")}} 标签元素，但是在渲染的时候使用了 {{HTMLElement("details")}} 标签，是因为[影子根](/zh-CN/docs/Web/API/ShadowRoot)使得它们被填充。
- 在渲染的 {{HTMLElement("details")}} 结果中，**`<element-details>`** 标签填充了影子根中的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。换言之，**`<element-details>`** 的 DOM 树和[影子根](/zh-CN/docs/Web/API/ShadowRoot)的内容结合在了一起。
- 对于这两个 **`<element-details>`** 标签，**Attributes** 标题会自动从[影子根](/zh-CN/docs/Web/API/ShadowRoot)中添加到名为 `"attribute"` 的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)的前面。
- 因为第一个 **`<element-details>`** 标签的 {{HTMLElement("dl")}} 元素就明确引用了名为 `"attributes"` 的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，所以该 {{HTMLElement("dl")}} 元素的内容将会替换该标签中名为 `"attributes"` 的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。
- 因为第二个 **`<element-details>`** 标签没有显式引用其[影子根](/zh-CN/docs/Web/API/ShadowRoot)中名为 `"attributes"` 的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，所以标签内名为 `"attributes"` 的[命名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)的内容将会使用模板中默认的内容。
