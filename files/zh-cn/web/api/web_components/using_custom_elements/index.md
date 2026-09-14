---
title: 使用自定义元素
slug: Web/API/Web_components/Using_custom_elements
---

{{DefaultAPISidebar("Web Components")}}

Web 组件的一个关键特性是创建*自定义元素*：即由 Web 开发人员定义行为的 HTML 元素，扩展了浏览器中可用的元素集。

这篇文章介绍了自定义元素，并通过一些示例进行了详细说明。

## 自定义元素的类型

有两种类型的自定义元素：

- **自定义内置元素**（Customized built-in element）继承自标准的 HTML 元素，例如 {{domxref("HTMLImageElement")}} 或 {{domxref("HTMLParagraphElement")}}。它们的实现定义了标准元素的行为。
- **独立自定义元素**（Autonomous custom element）继承自 HTML 元素基类 {{domxref("HTMLElement")}}。你必须从头开始实现它们的行为。

## 实现自定义元素

自定义元素作为一个[类](/zh-CN/docs/Web/JavaScript/Reference/Classes)来实现，该类可以扩展 {{domxref("HTMLElement")}}（在独立元素的情况下）或者你想要定制的接口（在自定义内置元素的情况下）。

以下是一个最小自定义元素的实现示例，该元素定制了 {{HTMLElement("p")}} 元素：

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // 此处编写元素功能
}
```

以下是一个独立自定义元素的最小实现：

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // 此处编写元素功能
}
```

在类的[构造函数](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)中，你可以设置初始状态和默认值，注册事件监听器，甚至创建一个影子根（shadow root）。在此处，你不应检查元素的属性或子元素，也不应添加新的属性或子元素。有关完整的要求集，请参阅[自定义元素构造函数和交互行为的要求](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance)。

### 自定义元素生命周期回调

一旦你的自定义元素被注册，当页面中的代码以特定方式与你的自定义元素交互时，浏览器将调用你的类的某些方法。通过提供这些方法的实现，规范称之为*生命周期回调*，你可以运行代码来响应这些事件。

自定义元素生命周期回调包括：

- `connectedCallback()`：每当元素添加到文档中时调用。规范建议开发人员尽可能在此回调中实现自定义元素的设定，而不是在构造函数中实现。
- `disconnectedCallback()`：每当元素从文档中移除时调用。
- `adoptedCallback()`：每当元素被移动到新文档中时调用。
- `attributeChangedCallback()`：在属性更改、添加、移除或替换时调用。有关此回调的更多详细信息，请参见[响应属性变化](#响应属性变化)。

以下是一个记录这些生命周期事件的最小自定义元素示例：

```js
// 为这个元素创建类
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // 必须首先调用 super 方法
    super();
  }

  connectedCallback() {
    console.log("自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已变更。`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

## 注册自定义元素

要使自定义元素在页面中可用，请调用 {{domxref("Window.customElements")}} 的 {{domxref("CustomElementRegistry.define()", "define()")}} 方法。

`define()` 方法接受以下参数：

- `name`
  - : 元素的名称。必须以小写字母开头，包含一个连字符，并符合规范中有效名称的定义中列出的一些其他规则。
- `constructor`
  - : 自定义元素的构造函数。
- `options`
  - : 仅对于自定义内置元素，这是一个包含单个属性 `extends` 的对象，该属性是一个字符串，命名了要扩展的内置元素。

例如，以下代码注册了名为 `WordCount` 的自定义内置元素：

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

以下代码注册了名为 `PopupInfo` 的独立自定义元素：

```js
customElements.define("popup-info", PopupInfo);
```

## 使用自定义元素

一旦你定义并注册了自定义元素，就可以在代码中使用它。

要使用自定义内置元素，请使用内置元素，但将自定义名称作为 [`is`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/is) 属性的值：

```html
<p is="word-count"></p>
```

要使用独立自定义元素，就像使用内置的 HTML 元素一样，使用自定义名称即可：

```html
<popup-info>
  <!-- 元素的内容 -->
</popup-info>
```

## 响应属性变化

与内置元素一样，自定义元素可以使用 HTML 属性来配置元素的行为。为了有效地使用属性，元素必须能够响应属性值的变化。为此，自定义元素需要将以下成员添加到实现自定义元素的类中：

- 一个名为 `observedAttributes` 的静态属性。这必须是一个包含元素需要变更通知的所有属性名称的数组。
- `attributeChangedCallback()` 生命周期回调的实现。

`attributeChangedCallback()` 回调在列在元素的 `observedAttributes` 属性中的属性被添加、修改、移除或替换时调用。

回调接受三个参数：

- 发生变化的属性的名称。
- 属性的旧值。
- 属性的新值。

例如，下面这个独立自定义元素将观察一个 `size` 属性，并在它们发生变化时记录旧值和新值：

```js
// 为这个元素创建类
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["size"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已由 ${oldValue} 变更为 ${newValue}。`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

请注意，如果元素的 `HTML` 声明包含一个被观察的属性，那么在属性被初始化后，`attributeChangedCallback()` 将在元素的声明首次解析时被调用。因此，在以下示例中，即使属性再也没有被更改，当 DOM 被解析时，`attributeChangedCallback()` 也会被调用：

```html
<my-custom-element size="100"></my-custom-element>
```

有关使用 `attributeChangedCallback()` 的完整示例，请参阅本页面中的[生命周期回调](#生命周期回调)。

## 示例

在本指南的其余部分，我们将看一些示例自定义元素。你可以在 [web-components-examples](https://github.com/mdn/web-components-examples) 仓库中找到所有这些示例的源代码，以及更多示例，并且你可以在 <https://mdn.github.io/web-components-examples/> 上实时查看它们。

### 一个独立自定义元素

首先，我们来看一个独立自定义元素。`<popup-info>` 自定义元素接受图像图标和文本字符串作为属性，并将图标嵌入到页面中。当焦点在图标上时，它会在弹出的信息框中显示文本，以提供更多上下文信息。

- [查看在线示例](https://mdn.github.io/web-components-examples/popup-info-box-web-component)
- [查看源代码](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

首先，JavaScript 文件定义了一个名为 `PopupInfo` 的类，该类扩展了 {{domxref("HTMLElement")}} 类。

```js
// 为当这个元素创建一个类
class PopupInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super 方法
    super();
  }

  connectedCallback() {
    // 创建影子根
    const shadow = this.attachShadow({ mode: "open" });

    // 创建几个 span
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // 获取属性内容然后将其放入 info 这个 span 内
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // 插入图标
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // 创建一些 CSS 应用于影子 DOM
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // 将创建好的元素附加到影子 DOM 上
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

类定义包含类的 [`constructor()`](/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor) 方法，该方法始终以调用 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 开始，以便正确建立原型链。

在 `connectedCallback()` 方法内部，我们定义了元素连接到 DOM 时元素将具有的所有功能。在这种情况下，我们将一个影子根附加到自定义元素，使用一些 DOM 操作来创建元素的影子 DOM 结构——然后将其附加到影子根——最后将一些 CSS 附加到影子根以进行样式设置。我们不在构造函数中执行这项工作，因为在连接到 DOM 之前，元素的属性是不可用的。

最后，我们使用前面提到的 `define()` 方法在 `CustomElementRegistry` 中注册我们的自定义元素——在参数中，我们指定元素名称，然后定义其功能的类名称：

```js
customElements.define("popup-info", PopupInfo);
```

现在，它已经可以在我们的页面上使用了。在我们的 HTML 中，我们可以像这样使用它：

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### 引用外部样式

在上面的示例中，我们使用 {{htmlelement("style")}} 元素为影子 DOM 应用样式，但你也可以从 {{htmlelement("link")}} 元素引用外部样式表。在此示例中，我们将修改 `<popup-info>` 自定义元素以使用外部样式表。

- [查看在线示例](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [查看源代码](https://github.com/mdn/web-components-examples/blob/main/popup-info-box-external-stylesheet/)

下面是类的定义：

```js
// 为这个元素创建类
class PopupInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super 方法
    super();
  }

  connectedCallback() {
    // 创建影子根
    const shadow = this.attachShadow({ mode: "open" });

    // 创建几个 span
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // 获取属性内容然后将其放入 info 这个 span 内
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // 插入图标
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // 将外部样式添加至影子 DOM
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // 将创建好的元素附加到影子 DOM 上
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

这与原始的 `<popup-info>` 示例相同，只是我们使用 {{HTMLElement("link")}} 元素链接到外部样式表，然后将其添加到影子 DOM 中。

请注意，{{htmlelement("link")}} 元素不会阻止影子根的绘制，因此在样式表加载时可能会出现未经样式化的内容（FOUC）。

许多现代浏览器对于从公共节点克隆的 {{htmlelement("style")}} 标签或具有相同文本的标签都实现了一种优化，使它们可以共享单个后备样式表。通过这种优化，外部和内部样式的性能应该是相似的。

### 自定义内置元素

现在让我们看一个自定义内置元素的例子。这个例子扩展了内置的 {{HTMLElement("ul")}} 元素，以支持展开和折叠列表项。

- [查看在线示例](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [查看源代码](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

首先，我们定义了这个元素的类：

```js
// 为这个元素创建类
class ExpandingList extends HTMLUListElement {
  constructor() {
    // 必须首先调用 super 方法
    // super() 的返回值是对当前元素的引用
    self = super();
  }

  connectedCallback() {
    // 获取当前自定义 ul 元素的 ul 和 li 子元素
    // 包含 ul 的 li 元素可以成为容器
    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));
    // 隐藏所有子 ul
    // 当用户点击更高级别的容器时，这些列表就会显示出来
    uls.forEach((ul) => {
      ul.style.display = "none";
    });

    // 仔细观察每个在 ul 中的 li 元素
    lis.forEach((li) => {
      // 如果这个 li 有一个 ul 作为子元素，则对其进行装饰并添加一个点击处理程序
      if (li.querySelectorAll("ul").length > 0) {
        // 添加一个属性，以便通过样式使用
        // 来显示打开或关闭的图标
        li.setAttribute("class", "closed");
        // 将 li 元素的文本包裹在一个新的 span 元素中
        // 这样我们就可以将样式和事件处理程序分配给 span
        const childText = li.childNodes[0];
        const newSpan = document.createElement("span");

        // 从 li 复制文本到 span，设置光标样式
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = "pointer";

        // 为这个 span 添加事件处理程序
        newSpan.addEventListener("click", (e) => {
          // span 的下一个兄弟元素应该是 ul
          const nextul = e.target.nextElementSibling;

          // 切换可见状态并更新 ul 的 class 属性
          if (nextul.style.display == "block") {
            nextul.style.display = "none";
            nextul.parentNode.setAttribute("class", "closed");
          } else {
            nextul.style.display = "block";
            nextul.parentNode.setAttribute("class", "open");
          }
        });
        // 添加 span 并从 li 中移除纯文本节点
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }
}
```

请注意，这次我们扩展的是 {{domxref("HTMLUListElement")}}，而不是 {{domxref("HTMLElement")}}。这意味着我们获得了列表的默认行为，只需实现自己的定制。

与之前一样，大部分代码都在 `connectedCallback()` 生命周期回调中。

接下来，我们使用与之前相同的 `define()` 方法注册元素，只是这次它还包括一个选项对象，详细说明了我们的自定义元素从哪个元素继承：

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

在 Web 文档中使用内置元素看起来也有些不同：

```html
<ul is="expanding-list">
  …
</ul>
```

你使用 `<ul>` 元素与往常一样，但在 `is` 属性内指定自定义元素的名称。

请注意，在这种情况下，我们必须确保定义自定义元素的脚本在 DOM 完全解析后执行，因为 `connectedCallback()` 在展开的列表被添加到 DOM 时就会被调用，而此时其子元素尚未添加，因此 `querySelectorAll()` 调用将找不到任何项。确保这一点的一种方法是在包含脚本的行上添加 [defer](/zh-CN/docs/Web/HTML/Reference/Elements/script#defer) 属性：

```html
<script src="main.js" defer></script>
```

### 生命周期回调

到目前为止，我们只看到了一个生命周期回调的实际应用：`connectedCallback()`。在最后一个示例——`<custom-square>`——中，我们将看到一些其他的回调。`<custom-square>` 独立自定义元素绘制一个正方形，其大小和颜色由两个名为 `"size"` 和 `"color"` 的属性确定。

- [查看在线示例](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [查看源代码](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

在类的构造函数中，我们将影子 DOM 附加到元素上，然后再附加空的 {{htmlelement("div")}} 和 {{htmlelement("style")}} 元素到影子根上：

```js
constructor() {
  // 必须首先调用 super 方法
  super();

  const shadow = this.attachShadow({ mode: "open" });

  const div = document.createElement("div");
  const style = document.createElement("style");
  shadow.appendChild(style);
  shadow.appendChild(div);
}
```

这个示例的关键函数是 `updateStyle()`——它接受一个元素，获取其影子根，找到它的 `<style>` 元素，然后添加 {{cssxref("width")}}、{{cssxref("height")}} 和 {{cssxref("background-color")}} 到样式上。

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("size")}px;
      height: ${elem.getAttribute("size")}px;
      background-color: ${elem.getAttribute("color")};
    }
  `;
}
```

实际的更新都是由生命周期回调处理的。`connectedCallback()` 每次将元素添加到 DOM 时都会运行一次——在这里，我们运行 `updateStyle()` 函数，以确保正方形的样式与其属性中定义的一致：

```js
connectedCallback() {
  console.log("自定义正方形元素添加至页面。");
  updateStyle(this);
}
```

`disconnectedCallback()` 和 `adoptedCallback()` 回调在元素从 DOM 中移除或移动到不同页面时记录消息到控制台，以通知我们：

```js
disconnectedCallback() {
  console.log("自定义正方形元素从页面中移除。");
}

adoptedCallback() {
  console.log("自定义正方形元素移动至新页面。");
}
```

`attributeChangedCallback()` 回调在元素的属性以某种方式更改时运行。正如你从其参数中看到的那样，可以单独处理属性，查看它们的名称以及旧的和新的属性值。不过在这种情况下，我们只是再次运行 `updateStyle()` 函数，以确保正方形的样式根据新的值更新：

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("自定义正方形元素的属性已变更。");
  updateStyle(this);
}
```

请注意，要在属性更改时触发 `attributeChangedCallback()` 回调，必须观察这些属性。这通过在自定义元素类内指定一个 `static get observedAttributes()` 方法来实现——该方法应返回一个包含要观察的属性名称的数组：

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
