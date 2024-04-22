---
title: 使用文档对象模型
slug: Web/API/Document_object_model/Using_the_Document_Object_Model
---

{{DefaultAPISidebar("DOM")}}

_文档对象模型_（DOM）是一个用于操作 HTML 和 XML 文档（包括其他树状文档）的 DOM 树的 API。这个 API 是页面描述的根源，并作为 web 脚本的基础。

## 什么是内容树？

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

虽然上面的树与上面文档的 DOM 树相似，但并不完全相同，因为[实际的 DOM 树保留了空白](/zh-CN/docs/Web/API/Document_Object_Model/Whitespace)。

当 web 浏览器解析 HTML 文档时，它建立了一个 DOM 树，然后用它来显示文档。

## 文档 API 会做些什么？

文档 API，有时也称为 DOM API，允许你以任何你想要的方式修改 DOM 树。它使你能够从头开始创建任何 HTML 或 XML 文档，或者改变一个给定的 HTML 或 XML 文档的任何内容。网页作者可以使用 JavaScript 来编辑文档的 DOM，访问全局对象的 `document` 属性。这个 `document` 对象实现了 {{domxref("Document")}} 接口。

## 一个简单的示例

假设作者改变上面文档的头部内容，并且使用两个段落取代一个段落。实现代码如下：

### HTML

```html
<html lang="zh-CN">
  <head>
    <title>我的文档</title>
  </head>
  <body>
    <input type="button" value="改变这个文档。" onclick="change()" />
    <h2>头部</h2>
    <p>段落</p>
  </body>
</html>
```

### JavaScript

```js
function change() {
  // document.getElementsByTagName("h2") 返回文档中所有 <h2> 组成的 NodeList，第一项用数字 0 取到：
  const header = document.getElementsByTagName("h2").item(0);

  // header 的第一个子节点（firstChild）是一个文本节点
  header.firstChild.data = "一个动态文档";

  // 现在 header 的内容为“一个动态文档”

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

{{ EmbedLiveSample('一个简单的示例', 800, 300) }}

## 想学习更多？

现在你已经熟悉了 DOM 的基本概念，你可能想通过阅读[如何用 JavaScript 和 DOM 接口遍历 HTML 表格](/zh-CN/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)来了解更多关于文档 API 的基本特性。

## 参见

- [文档对象模型](/zh-CN/docs/Web/API/Document_Object_Model)（DOM）
