---
title: 使用模板和插槽
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Web Components")}}

这篇文章阐述了如何使用 {{htmlelement("template")}} 和 {{htmlelement("slot")}} 元素创建一个可以用来灵活填充 Web 组件的影子 DOM 的模板。

## 关于模板

当你必须在网页上复用相同的标记结构时，使用某种模板而不是一遍又一遍地重复相同的结构是有意义的。以前也可以实现这一点，但 HTML {{htmlelement("template")}} 元素使得这个过程更加简单。此元素及其内容不会在 DOM 中渲染，但仍可使用 JavaScript 引用它。

让我们看一个简单的示例：

```html
<template id="my-paragraph">
  <p>我的段落</p>
</template>
```

除非你使用 JavaScript 获取对它的引用，然后使用类似下面的代码将其附加到 DOM 中，否则它不会出现在你的页面中：

```js
let template = document.getElementById("my-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

虽然是个简单的例子，但你已经可以开始了解它是多么的有用了。

## 在 Web Component 中使用模板

模板本身就很有用，但与 web 组件一起使用效果更好。让我们定义一个名为 `<my-paragraph>` 的 web 组件，使用模板作为其影子 DOM 的内容：

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

这里要注意的关键点是，我们将模版内容的克隆添加到通过 {{domxref("Node.cloneNode()")}} 方法创建的影子根上

由于我们添加了模板的内容到影子 DOM，我们可以在模板的 {{htmlelement("style")}} 元素中包含一些样式信息，然后将其封装在自定义元素中。如果只将它添加到一个标准的 DOM 中是不起作用的。

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
  <p>我的段落</p>
</template>
```

现在我们将它添加到自己的 HTML 文档中试试看：

```html
<my-paragraph></my-paragraph>
```

## 使用插槽增加灵活度

尽管到这一步已经挺好了，但是元素仍旧不是很灵活。我们只能在里面显示一点文本，甚至没有普通段落标签有用！我们可以使用 {{htmlelement("slot")}} 元素通过声明式的语法在每个元素实例中显示不同的文本。

插槽由其 `name` 属性标识，并且允许你在模板中定义占位符，当在标记中使用该元素时，该占位符可以填充所需的任何 HTML 标记片段。

因此，如果我们想添加一个插槽到这个简单的例子中，我们会将模板的段落元素改成下面这样：

```html
<p><slot name="my-text">我的默认文本</slot></p>
```

如果在标记中包含元素时未定义相关的插槽内容，或者浏览器不支持插槽，则 `<my-paragraph>` 仅包含后备内容 "我的默认文本"。

要定义插槽内容，我们在 `<my-paragraph>` 元素内包括一个 HTML 结构，该结构具有 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性，其值等于我们要填充的 {{htmlelement("slot")}} 的 name 属性的值。和之前一样，它可以是你喜欢的任何东西，例如：

```html
<my-paragraph>
  <span slot="my-text">让我们使用一些不同的文本！</span>
</my-paragraph>
```

或者

```html
<my-paragraph>
  <ul slot="my-text">
    <li>让我们使用一些不同的文本！</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```

> [!NOTE]
> 可以被插入到槽中的节点被称为 _Slotable_；已经插入到槽中的节点被称为 _slotted_。

> [!NOTE]
> 未命名的 {{HTMLElement("slot")}} 元素将填充自定义元素中所有不含 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性的顶级子节点。也包括文本节点。

这就我们的简单例子，如果你想继续了解，你可以[在 GitHub 上查看](https://github.com/mdn/web-components-examples/tree/master/simple-template)（另见[在线运行](https://mdn.github.io/web-components-examples/simple-template/)）。

## 更深入的示例

为了更好的结束这篇文章，我们来看一个不那么寻常的示例。

下面的一组代码片段展示了我们如何联合使用 `<slot>` 和 `<template>` 以及一些 JavaScript 来实现：

- 使用 [具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)在[影子根](/zh-CN/docs/Web/API/ShadowRoot)中创建一个 **`<element-details>`** 元素。
- 将 **`<element-details>`** 元素设计成在文档中使用时，它将其[影子根](/zh-CN/docs/Web/API/ShadowRoot)中的内容和该元素内部的内容糅合在一起——即元素内容中的片段被填充到元素[影子根](/zh-CN/docs/Web/API/ShadowRoot)的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name) 中。

注意，技术上来讲脱离 `<template>` 使用 `<slot>` 也是可以的。例如，`<slot>` 在一个常规的 {{HTMLElement("div")}} 元素里，仍然有占位符的特性，就像在影子 DOM 中一样，这样我们能避免需要先获取模板对象的 `content` 属性再使用它的麻烦。然而这个特性在向 {{HTMLElement("template")}} 元素中添加插槽时更加实用，因为你不太可能基于一个已渲染的元素定义一个模式。

另外，就算它还没有渲染，使用 {{HTMLElement("template")}} 时，容器作为模板的目的在语义上应该清晰。而且 {{HTMLElement("template")}} 上可以直接添加一些对象，如 {{HTMLElement("td")}}，当添加到 {{HTMLElement("div")}} 中时会隐藏。

> [!NOTE]
> 你可以在 [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) 查看这个完整的例子（另见[在线运行](https://mdn.github.io/web-components-examples/element-details/)）。

### 使用插槽创建一个模板

首先，我们在 {{HTMLElement("template")}} 元素中使用 {{HTMLElement("slot")}} 元素来创建一个新的“element-details-template”[文档片段](/zh-CN/docs/Web/API/DocumentFragment)，其中包含一些[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)：

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

- {{HTMLElement("template")}} 有一个 {{HTMLElement("style")}} 元素，里面有一些只能在当前 {{HTMLElement("template")}} 中创建的文档片段范围内生效的 CSS 样式
- {{HTMLElement("template")}} 使用 {{HTMLElement("slot")}} 及其 [`name`](/zh-CN/docs/Web/HTML/Element/slot#name) 属性来创建三个[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)：

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- {{HTMLElement("template")}} 将[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)包裹在 {{HTMLElement("details")}} 元素中。

### 从 \<template> 中创建一个新的 \<element-details> 元素

接下来，我们创建一个名为 **`<element-details>`** 的新自定义元素，然后用 {{DOMXref("Element.attachShadow")}} 来将上面通过 {{HTMLElement("template")}} 元素创建的文档片段作为[影子根](/zh-CN/docs/Web/API/ShadowRoot)附加到它上面，这使用了与我们在之前的简单示例中看到的完全相同的模式。

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

### 结合具名插槽使用自定义元素 \<element-details>

现在让我们正式在文档中使用 \<element-details> 元素：

```html
<element-details>
  <span slot="element-name">插槽</span>
  <span slot="description"
    >用户可以用自己编写的标记填充至 web 组件中的占位符，从而达到组合不同 DOM
    树的效果。</span
  >
  <dl slot="attributes">
    <dt>名称</dt>
    <dd>插槽的名称</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">模板</span>
  <span slot="description"
    >一种用于保存客户端内容的机制，此类内容不会在页面加载时呈现，但随后可能在运行时使用
    JavaScript 实例化。</span
  >
</element-details>
```

关于以上代码片段，注意以下几点：

- 该代码片段有两个 **`<element-details>`** 元素，它们都使用了 [`slot`](/zh-CN/docs/Web/HTML/Global_attributes#slot) 属性来引用名为 `"element-name"` 和 `"description"` 的的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，并把它们都放在[影子根](/zh-CN/docs/Web/API/ShadowRoot)下。
- 只有第一个 **`<element-details>`** 元素引用了名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，而第二个 `<element-details>` 标签没有引用名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。
- 第一个 `<element-details>` 元素中的 {{HTMLElement("dl")}} 元素使用包含子元素 {{HTMLElement("dt")}} 和 {{HTMLElement("dd")}} 的 {{HTMLElement("dl")}} 元素引用了 `"attributes"` [具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。

### 添加一些最终的样式

在完成之前，我们在文档中给 {{HTMLElement("dl")}} 和 {{HTMLElement("dt")}} 以及 {{HTMLElement("dd")}} 元素增加一些 CSS 样式。

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

{{EmbedLiveSample('更深入的示例', '300','400')}}

关于结果请注意以下几点：

- 即使 **`<element-details>`** 元素并没有直接使用 {{HTMLElement("details")}} 元素元素，但是在渲染的时候使用了 {{HTMLElement("details")}} 元素，是因为[影子根](/zh-CN/docs/Web/API/ShadowRoot)使得它们被填充。
- 在渲染的 {{HTMLElement("details")}} 结果中，**`<element-details>`** 元素填充了影子根中的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。换言之，**`<element-details>`** 的 DOM 树和[影子根](/zh-CN/docs/Web/API/ShadowRoot)的内容结合在了一起。
- 对于这两个 **`<element-details>`** 元素，**Attributes** 标题会自动从[影子根](/zh-CN/docs/Web/API/ShadowRoot)中添加到名为 `"attribute"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)的前面。
- 因为第一个 **`<element-details>`** 元素的 {{HTMLElement("dl")}} 元素就明确引用了名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，所以该 {{HTMLElement("dl")}} 元素的内容将会替换该元素中名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)。
- 因为第二个 **`<element-details>`** 元素没有显式引用其[影子根](/zh-CN/docs/Web/API/ShadowRoot)中名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)，所以元素内名为 `"attributes"` 的[具名插槽](/zh-CN/docs/Web/HTML/Element/slot#name)的内容将会使用模板中默认的内容。
