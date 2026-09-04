---
title: 文档对象模型（DOM）
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

**文档对象模型**（DOM）通过将文档的结构（例如表示网页的 HTML）以对象的形式存储在内存中，将网页与脚本或编程语言连接起来。尽管将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 核心语言的一部分，但它通常与 JavaScript 相关。

DOM 使用逻辑树的形式来表示文档。树的每个分支末端都是一个节点，每个节点都包含对象。DOM 方法允许以编程方式来访问树。借助这些方法，你可以改变文档的结构、样式或内容。

节点还可以附加事件处理器。一旦事件被触发，相应的事件处理器就会被执行。

## 概念和用法

文档对象模型（DOM）是一个网络文档的编程接口。它代表页面，以便程序可以改变文档的结构、风格和内容。DOM 将文档表示为节点和对象；这样，编程语言就可以与页面交互。

网页是一个既可以在浏览器窗口中显示，也可以作为 HTML 源代码的文档。在这两种情况下，它都是同一个文档，但文档对象模型（DOM）的表示方式使它可以被操作。作为一个面向对象的网页表示，它可以用脚本语言（如 JavaScript）进行修改。

例如，DOM 中指定下面代码中的 `querySelectorAll` 方法必须要返回文档中所有 {{HTMLElement("p")}} 元素组成的列表：

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] 是第一个 <p> 元素
// paragraphs[1] 是第二个 <p> 元素，依此类推
alert(paragraphs[0].nodeName);
```

所有可用于操作和创建网页的属性、方法和事件都被组织到对象中。例如，代表文档本身的 `document` 对象，任何实现 {{domxref("HTMLTableElement")}} 访问 HTML 表格的 `table` 对象等，都是对象。

DOM 是使用多个 API 构建的，它们一起工作。核心 DOM 定义了描述任何文档和其中对象的实体。其他 API 会根据需要对其进行扩展，为 DOM 增加新的特性和功能。例如，[HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API) 为核心 DOM 增加了对表示 HTML 文档的支持，而 SVG API 增加了对表示 SVG 文档的支持。

### 什么是 DOM 树？

**DOM 树**是一种[树状结构](https://zh.wikipedia.org/wiki/树状结构)，其节点代表 HTML 或 XML 文档内容。每一个 HTML 或 XML 文档都有其 DOM 树表示方法。例如，考虑如下文档：

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

其 DOM 树类似于这样：

![DOM 是一种树状的文档表示，它有一个根和包含内容的节点元素](using_the_w3c_dom_level_1_core-doctree.jpg)

虽然上面的树与上面文档的 DOM 树相似，但并不完全相同，因为[实际的 DOM 树保留了空白](/zh-CN/docs/Web/CSS/Guides/Text/Whitespace)。

当 web 浏览器解析 HTML 文档时，它建立了一个 DOM 树，然后用它来显示文档。

### DOM 和 JavaScript

上一个简短的例子，和几乎所有的例子一样，是 {{glossary("JavaScript")}}。也就是说，它是用 JavaScript *写*的，但却*使用* DOM 来访问文档及其元素。DOM 不是一种编程语言，但如果没有它，JavaScript 语言就不会有任何关于网页、HTML 文档、SVG 文档及其组成部分的模型或概念。文档作为一个整体，标题、文档中的表格、表头、表格单元中的文本以及文档中的所有其他元素都是该文档对象模型的一部分。它们都可以使用 DOM 和像 JavaScript 这样的脚本语言进行访问和操作。

DOM 不是 JavaScript 语言的一部分，而是用于建立网站的 Web API。JavaScript 也可以在其他情况下使用。例如，Node.js 在计算机上运行 JavaScript 程序，但提供了一套不同的 API，而且 DOM API 不是 Node.js 运行时的核心部分。

DOM 被设计成与特定编程语言相独立，使文档的结构化表述可以通过单一，一致的 API 获得。尽管我们在本参考文档中会专注于使用 JavaScript，但 DOM 也可以使用其他的语言来实现，以 Python 为例，代码如下：

```python
# Python DOM 示例
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # 文档对象的 DOM 属性
p_list = doc.getElementsByTagName("para")
```

要获取更多在网页上使用 JavaScript 的信息，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。

### 访问 DOM

在使用 DOM 时，不需要做任何其他特殊的操作。你可以在*脚本*中直接使用 JavaScript 的 API，这是一个由浏览器运行的程序。

当你创建一个脚本时，无论是内联到 `<script>` 元素中还是包含在网页中，你都可以立即开始使用 {{domxref("document")}} 或 {{domxref("Window", "window")}} 对象的 API 来操作文档本身，或网页中的任何元素（文档的子元素）。你的 DOM 编程可能就像下面这个示例一样简单，通过使用 {{domxref("console.log()")}} 函数在控制台显示一条信息：

```html
<body onload="console.log('欢迎来到我的主页！');">
  …
</body>
```

由于一般不建议将页面的结构（用 HTML 编写）和对 DOM 的操作（用 JavaScript 编写）混在一起，所以 JavaScript 部分将在这里分组，并与 HTML 分开。

例如，以下函数创建了一个新的 {{HTMLElement("Heading_Elements", "h1")}} 元素，向该元素添加文本，然后将其添加到文档的树中：

```html
<html lang="zh-CN">
  <head>
    <script>
      // 当文档加载时，运行这段函数
      window.onload = () => {
        // 在空 HTML 页面中创建一系列元素
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## DOM 接口

以下是 DOM 规范定义的所有接口：

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("QuotaExceededError")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("ShadowRoot")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}
- {{DOMxRef("XPathEvaluator")}}
- {{DOMxRef("XPathExpression")}}
- {{DOMxRef("XPathResult")}}
- {{DOMxRef("XSLTProcessor")}}

本指南是关于对象和你可以用来操作 DOM 层次结构的实际*事物*。在很多地方，理解这些东西的工作方式会让人感到困惑。例如，代表 HTML `form` 元素的对象从 `HTMLFormElement` 接口获得其 `name` 属性，但其 `className` 属性来自 `HTMLElement` 接口。在这两种情况下，你想要的属性都在那个表单对象中。

但是对象和它们在 DOM 中实现的接口之间的关系可能会令人困惑，因此本节试图讲述一些关于 DOM 规范中的实际接口以及它们如何被提供的内容。

### 接口及对象

许多对象实现了几个不同的接口。例如，table 对象实现了一个专门的 {{domxref("HTMLTableElement")}} 接口，其中包括诸如 `createCaption` 和 `insertRow` 等方法。但由于它也是一个 HTML 元素，所以 `table` 实现了 DOM {{domxref("Element")}} 参考章节中描述的 `Element` 接口。最后，因为就 DOM 而言，HTML 元素也是构成 HTML 或 XML 页面对象模型的节点树中的一个节点，所以表格对象也实现了更基本的 `Node` 接口，`Element` 就是从这个接口衍生出来的。

正如下面的示例，当你得到一个 `table` 对象的引用时，你经常会轮流使用对象实现的三个不同接口的方法，但并不知其所以然。

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element 接口
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement 接口：border 属性
  if (tableAttrs[i].nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement 接口：summary 属性
table.summary = "note: increased border";
```

### 基本的数据类型

本页试图用简单的语言描述各种对象和类型。但是，有一些不同的数据类型在 API 中传递，你应该注意到。

> [!NOTE]
> 因为绝大多数使用 DOM 的代码都是围绕着操作 HTML 文档进行的，所以我们通常把 DOM 中的节点称为**元素**（element），尽管严格来说并不是每个节点都是一个元素。

下面的表格大致描述了这些数据类型。

<table class="standard-table">
  <thead>
    <tr>
      <th>数据类型（接口）</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        当一个成员返回 <code>document</code> 对象（例如，元素的
        <code>ownerDocument</code> 属性返回它所属的
        <code>document</code>），这个对象就是 root
        <code>document</code> 对象本身。<a href="/zh-CN/docs/Web/API/Document"
          >DOM <code>document</code> 参考</a
        >一章对 <code>document</code> 对象进行了描述。
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        位于文档中的每个对象都是某种类型的节点。在一个 HTML 文档中，一个对象可以是一个元素节点，也可以是一个文本节点或属性节点。
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        <code>element</code> 类型是基于 <code>node</code> 的。它指的是一个元素或一个由 DOM API 的成员返回的 <code>element</code> 类型的节点。例如，我们不说 {{domxref("document.createElement()")}} 方法返回一个 <code>node</code> 的对象引用，而只是说这个方法返回刚刚在 DOM 中创建的 <code>element</code>。<code>element</code> 对象实现了 DOM 的 <code>Element</code> 接口和更基本的 <code>Node</code> 接口，这两个接口都包含在本参考中。在 HTML 文档中，元素通过 HTML DOM API 的 {{domxref("HTMLElement")}} 接口以及其他描述特定种类元素能力的接口（例如用于 {{HTMLElement("table")}} 元素的 {{domxref("HTMLTableElement")}} 接口）进一步强化。
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        <code>nodeList</code> 是由元素组成的数组，如同
        {{domxref("document.querySelectorAll()")}}
        等方法返回的类型。<code>nodeList</code> 中的条目通过索引有两种方式进行访问：
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        两种方式是等价的，第一种方式中 <code>item()</code> 是
        <code>nodeList</code> 对象中的单独方法。后面的方式则使用了经典的数组语法来获取列表中的第二个条目。
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        当 <code>attribute</code> 通过成员函数（例如通过 <code>createAttribute()</code>
        方法）返回时，它是一个为属性暴露出专门接口的对象引用。DOM
        中的属性也是节点，就像元素一样，只不过你可能会很少使用它。
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        <code>namedNodeMap</code> 和数组类似，但是条目是由名称或索引访问的，虽然后一种方式仅仅是为了枚举方便，因为在 list
        中本来就没有特定的顺序。出于这个目的， <code>namedNodeMap</code> 有一个 item() 方法，你也可以从 <code>namedNodeMap</code> 添加或移除条目。
      </td>
    </tr>
  </tbody>
</table>

还有一些常见的术语需要记住。例如，通常把任何 {{domxref("Attr")}} 节点称为 `attribute`，把 DOM 节点组成的数组称为 `nodeList`。你会发现这些术语和其他术语将在整个文档中被介绍和使用。

`document` 和 `window` 对象是你在 DOM 编程中最常使用的接口对象。简单来说，`window` 对象代表类似浏览器的东西，而 `document` 对象是文档本身的根。`Element` 继承自通用的 `Node` 接口，这两个接口一起提供了许多你在单个元素上使用的方法和属性。这些元素也可以有特定的接口来处理这些元素持有的数据种类，如上一节中的 `table` 对象的示例。

### 过时的 DOM 接口

文档对象模型已被高度简化。为了实现这一目标，已在 DOM 第 3 版或更早的各种规范中移除了以下接口。它们不再对 Web 开发者可用。

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

包含 HTML 的文档通过 {{DOMxRef("Document")}} 接口进行描述，HTML 规范扩展了这个接口，包含了各种 HTML 特有的特性。尤其是 {{domxref("Element")}} 接口被拓展为 {{domxref("HTMLElement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。

HTML DOM API 提供了对各种浏览器特性的访问，如标签和窗口、CSS 样式和样式表、浏览器历史记录等。这些接口将在 [HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API) 文档中进一步讨论。

## SVG DOM

同样，包含 SVG 的文档也通过 {{DOMxRef("Document")}} 接口来描述，接口由 SVG 规范扩展，包含了各种 SVG 特有的特性。尤其是 {{domxref("Element")}} 接口被拓展为 {{domxref("SVGElement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。这些接口将在 [SVG API](/zh-CN/docs/Web/API/SVG_API) 文档中进一步讨论。

## 示例

### 设置文本内容

本示例使用了包含了一个 {{HTMLElement("textarea")}} 和两个 {{HTMLElement("button")}} 元素的 {{HTMLElement("div")}} 元素。当用户点击第一个按钮时，我们在 `<textarea>` 中放置一些文本。当用户点击第二个按钮时，我们清除文本内容。我们使用：

- {{domxref("Document.querySelector()")}} 来访问 `<textarea>` 和按钮
- {{domxref("EventTarget.addEventListener()")}} 来监听按钮的点击事件
- {{domxref("Node.textContent")}} 来设置和清除文本

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">设置文本内容</button>
  <button id="clear-text" type="button">清除文本内容</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### 结果

{{EmbedLiveSample("设置文本内容", "", "150px")}}

### 添加子元素

本实例使用了包含了一个 {{HTMLElement("div")}} 和两个 {{HTMLElement("button")}} 元素的 {{HTMLElement("div")}} 元素。当用户点击第一个按钮时，我们创建一个新的元素，并添加到 `<div>` 的子元素。当用户点击第二个按钮时，我们移除那个子元素。我们使用：

- {{domxref("Document.querySelector()")}} 来访问 `<div>` 和按钮
- {{domxref("EventTarget.addEventListener()")}} 来监听按钮点击事件
- {{domxref("Document.createElement")}} 来创建元素
- {{domxref("Node.appendChild()")}} 来添加子元素
- {{domxref("Node.removeChild()")}} 来移除子元素

#### HTML

```html
<div class="container">
  <div class="parent">父元素</div>
  <button id="add-child" type="button">添加子元素</button>
  <button id="remove-child" type="button">移除子元素</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // 只在文本节点“父节点”没有子节点时添加一个子节点
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "子节点";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
```

#### 结果

{{EmbedLiveSample("添加子元素", "", "180px")}}

### 读取并修改 DOM 树

假设作者改变上面文档的页眉内容，并且使用两个段落取代一个段落。实现代码如下：

#### HTML

```html
<html lang="zh-CN">
  <head>
    <title>我的文档</title>
  </head>
  <body>
    <input type="button" value="改变这个文档。" onclick="change()" />
    <h2>页眉</h2>
    <p>段落</p>
  </body>
</html>
```

#### JavaScript

```js
function change() {
  // document.getElementsByTagName("h2") 返回文档中所有 <h2> 组成的 NodeList，第一项用数字 0 取到：
  const header = document.getElementsByTagName("h2").item(0);

  // 页眉的第一个子节点（firstChild）是一个文本节点
  header.firstChild.data = "一个动态文档";

  // 现在页眉的内容为“一个动态文档”

  // 访问第一个段落
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "这是第一段。";

  // 创建一个用于引用第二段的文本节点
  const newText = document.createTextNode("这是第二段。");

  // 创建一个作为第二段的元素
  const newElement = document.createElement("p");

  // 将文本放入段落元素中
  newElement.appendChild(newText);

  // 通过向 body（para 的父节点）末尾添加的方式将段落元素放在文档的末尾
  para.parentNode.appendChild(newElement);
}
```

{{EmbedLiveSample('读取并修改 DOM 树', 800, 300)}}

### 创建 DOM 树

你也可以完全使用 JavaScript 创建[什么是 DOM 树？](#什么是_dom_树？)中的树。

```js
const root = document.createElement("html");
root.lang = "en";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

### 事件传播

本实例以一种非常简单的方式演示了事件是如何在 DOM 中启动和处理的。当这个 HTML 文档的 BODY 加载时，一个事件监听器被注册在 TABLE 的顶行。事件监听器通过执行函数 stopEvent 来处理事件，它改变了表格底部单元格的值。

然而，stopEvent 也调用了事件对象方法 {{domxref("event.stopPropagation")}}，它使事件不再向 DOM 中冒泡。请注意，表格本身有一个 {{domxref("Element.click_event", "onclick")}} 事件处理器，当表格被点击时应该显示一条信息。但是 stopEvent 方法已经停止了传播，所以在表格中的数据被更新后，事件阶段实际上已经结束，并且显示了一个警报框来确认这一点。

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">一</td>
  </tr>
  <tr>
    <td id="c2">二</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "你好";

  // 这应该可以阻止 t-daddy 被点击。
  event.stopPropagation();
  console.log("事件传递终止。");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy 被点击");
});
```

{{EmbedLiveSample("事件传播", "", "300")}}

### 显示事件对象的属性

本示例使用 DOM 方法来显示 {{domxref("Window.load_event", "onload")}} {{domxref("event")}} 对象的所有属性及其在表格中的值。它还展示了一种有用的技术，即使用 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环来迭代对象的属性以获取其值。

事件对象的属性在不同的浏览器之间有很大的不同，[WHATWG DOM 标准](https://dom.spec.whatwg.org)列出了标准的属性，然而许多浏览器对这些属性做了很大的扩展。

把下面的代码放到一个空白的文本文件中，并把它加载到各种浏览器中，你会对不同数量和名称的属性感到惊讶。你可能还想在页面中添加一些元素，从不同的事件处理程序中调用这个函数。

```html
<h1>DOM <span id="eventType"></span> 事件对象的属性</h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "属性", "值"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

showEventProperties(event);
```

{{EmbedLiveSample("显示事件对象的属性", "", 300)}}

## 规范

{{Specifications}}

## 参见

- [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)
- [HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API)
- [SVG API](/zh-CN/docs/Web/API/SVG_API)
