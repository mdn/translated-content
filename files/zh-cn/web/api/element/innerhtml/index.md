---
title: element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef("DOM")}}

**`Element.innerHTML`** 属性设置或获取 HTML 语法表示的元素的后代。

> **备注：** 如果一个 {{HTMLElement("div")}}, {{HTMLElement("span")}}, 或 {{HTMLElement("noembed")}} 节点有一个文本子节点，该节点包含字符 `(&)`, `(<)`, 或 `(>)`, `innerHTML` 将这些字符分别返回为 \&amp;, \&lt; 和 \&gt;。使用{{domxref("Node.textContent")}} 可获取一个这些文本节点内容的正确副本。

如果要向一个元素中插入一段 HTML，而不是替换它的内容，那么请使用 {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}} 方法。

## 语法

```js
const content = element.innerHTML;
element.innerHTML = htmlString;
```

### 值

{{domxref("DOMString")}} 包含元素后代的 HTML 序列。设置元素的 `innerHTML` 将会删除所有该元素的后代并以上面给出的 htmlString 替代。

### 例外

**`SyntaxError`**

当 HTML 没有被正确标记时，设置 `innerHTML` 将会抛出语法错误。

**`NoModificationAllowedError`**

当父元素是 {{domxref("Document")}} 时，设置 `innerHTML` 将会提示不允许修改。

## 使用说明

`innerHTML` 属性可以用来检查当前页面自最初加载到当前的 HTML 源码的变化。

### 获取元素的 HTML

获取 `innerHTML` 会导致用户代理序列化 由元素后代组成的 HTML 或者 XML。返回结果字符串。

```js
let contents = myElement.innerHTML;
```

查看元素内容节点的 HTML 标记。

> **备注：** 返回的 HTML 或者 XML 片段是基于当前元素的内容生成的，所以返回的标记和格式可能与原始页面的标记不匹配。

### 替换元素的内容

设置 `innerHTML` 的值可以让你轻松地将当前元素的内容替换为新的内容。

举个例子来说，你可以通过文档 {{domxref("Document.body", "body")}} 属性删除 body 的全部内容。

```js
document.body.innerHTML = "";
```

下面这个例子，首先获取文档当前的 HTML 标记并替换 `"<"` 字符为 HTML 实体 `"&lt;"`，从本质上来看，它是将 HTML 转换成原始文本，将其包裹在 {{HTMLElement("pre")}} 元素中。然后 `innerHTML` 的值被替换成新的字符串。最后，文档的内容被替换为页面显示源码。

```js
document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";
```

#### 其他：

当给 `innerHTML` 设置一个值的时候到底发生了什么？用户代理按照以下步骤：

1. 给定的值被解析为 HTML 或者 XML（取决于文档类型），结果就是 {{domxref("DocumentFragment")}} 对象代表元素新设置的 DOM 节点。
2. 如果元素内容被替换成 {{HTMLElement("template")}} 元素，`<template>` 元素的 {{domxref("HTMLTemplateElement.content", "content")}} 属性会被替换为步骤 1 中创建的新的 `DocumentFragment`。
3. 对于其他所有元素，元素的内容都被替换为新的 `DocumentFragment` 节点。

### 安全问题

用 `innerHTML` 插入文本到网页中并不罕见。但这有可能成为网站攻击的媒介，从而产生潜在的安全风险问题。

```js
const name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

尽管这看上去像 [cross-site scripting](https://zh.wikipedia.org/wiki/cross-site_scripting) 攻击，结果并不会导致什么。HTML 5 中指定不执行由 `innerHTML` 插入的 {{HTMLElement("script")}} 标签。

然而，有很多不依赖 {{HTMLElement("script")}} 标签去执行 JavaScript 的方式。所以当你使用`innerHTML` 去设置你无法控制的字符串时，这仍然是一个安全问题。例如：

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

基于这个原因，当插入纯文本时，建议不要使用 `innerHTML` 。取而代之的是使用 {{domxref("Node.textContent")}} ，它不会把给定的内容解析为 HTML，它仅仅是将原始文本插入给定的位置。

> **警告：** 如果你的项目将要经过各种形式的安全检查的话，使用 `innerHTML` 可能导致代码被拒绝。例如，如果你在[浏览器扩展](/zh-CN/docs/Mozilla/Add-ons/WebExtensions)中[使用 `innerHTML`](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) 并将扩展提交到 [addons.mozilla.org](https://addons.mozilla.org/) 的话，它将会在自动审核过程中被拒绝。

## 示例

这个例子使用 `innerHTML` 创建一种机制用于将消息记录到网页上的框中。

### JavaScript

```js
function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");
```

log() 函数通过 {{jsxref("Date")}} 对象的 {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} 方法获取当前时间，然后将消息文本和时间戳放一起构建一个字符串，最后将其追加到具有“log”类的框上。

现在添加第二个方法：记录基于事件 (比如 [`mousedown`](/zh-CN/docs/Web/API/Element/mousedown_event), [`click`](/zh-CN/docs/Web/API/Element/click_event), 和 [`mouseenter`](/zh-CN/docs/Web/API/Element/mouseenter_event)) 的 {{domxref("MouseEvent")}} 的信息。

```js
function logEvent(event) {
  var msg =
    "Event <strong>" +
    event.type +
    "</strong> at <em>" +
    event.clientX +
    ", " +
    event.clientY +
    "</em>";
  log(msg);
}
```

然后我们使用它作为包含我们消息的框上的鼠标事件的事件处理程序：

```js
var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

这个例子的 HTML 代码就相当简洁了：

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

具有“box”类的 {{HTMLElement("div")}} 容器仅仅是出于布局考虑，用一个框来展示其内容。具有“log”类的 \<div> 元素是作为消息本身的内容框。

### CSS

下面是这个例子的 CSS：

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### 结果

结果就像下面展示的那样。你可以通过移动鼠标进出盒子，点击盒子等等来查看记录输出。

{{EmbedLiveSample("示例", 640, 350)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Node.textContent")}} and {{domxref("Node.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- Parsing HTML into a DOM tree: {{domxref("DOMParser")}}
- Serializing XML or HTML into a DOM tree: {{domxref("XMLSerializer")}}
