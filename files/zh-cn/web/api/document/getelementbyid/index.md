---
title: document.getElementById
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

{{domxref("Document")}}的方法 {{domxref("Document.getElementById", "getElementById()")}}返回一个匹配特定 [ID](/zh-CN/docs/DOM/element.id)的元素。由于元素的 ID 在大部分情况下要求是独一无二的，这个方法自然而然地成为了一个高效查找特定元素的方法。

如果需要查找到那些没有 ID 的元素，你可以考虑通过 CSS 选择器使用 {{domxref("Document.querySelector", "querySelector()")}}。

## 语法

```js-nolint
getElementById(id)
```

> **备注：** 方法名称中 `"Id"` 的大小写*必须*正确才能使代码正常运行；`getElementByID()` 是*无*效且无法正常运行的，无论它看起来是多么自然。

### 参数

- `id`
  - : 所要查找的元素的 ID。ID 是大小写敏感的字符串，且在文档中是唯一的；应只有一个元素具有任何给定的 ID。

### 返回值

返回一个匹配到 ID 的 DOM {{domxref("Element")}} 对象。若在当前 {{domxref("Document")}} 下没有找到，则返回 null。

## 示例

### HTML

```html
<!doctype html>
<html>
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### 执行结果

{{ EmbedLiveSample('示例', 250, 100) }}

## 注意

对“Id”的拼写一定要正确。如果大小写不匹配，无论看起来多么合情合理，`getElementByID()` 都是不合理的且永远都不会工作的。

不同于其他 `Element` 查找方法（如{{domxref("Document.querySelector()")}} 以及 {{domxref("Document.querySelectorAll()")}}），`getElementById()` 只有在作为 `document` 的方法时才能起作用，而在 DOM 中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的“局部”版本。

## 示例

```plain
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="parent-id">
        <p>hello word1</p>
        <p id="test1">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>
    <script>
        var parentDOM = document.getElementById('parent-id');
        var test1=parentDOM.getElementById('test1');
        //抛出错误
        //（这是一条错误信息）Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
</body>
</html>
```

如果没有查找到对应的元素，方法会返回 null。注意 ID 参数是大小写敏感的，所以 document.getElementById("**M**ain") 无法获取到元素\<div id="**m**ain">，因为'M'和'm'是不一样的。

getElementById 方法不会搜索**不在文档中的元素**。当创建一个元素，并且分配 ID 后，你必须要使用 {{domxref("Node.insertBefore()")}} 或其他类似的方法把元素插入到文档中，之后才能使用 `getElementById()` 获取到：

```js
var element = document.createElement("div");
element.id = "testqq";
var el = document.getElementById("testqq"); // el 是个 null
```

**非 HTML 文档（Non-HTML documents**）。DOM 的实现必须说明哪个属性是 ID 类型。只有 DTD 定义了'id'是 ID 属性时’id‘才会被认为是 ID 属性。在 [XHTML](/zh-CN/docs/XHTML), [XUL](/zh-CN/docs/XUL)或者其他文档中，'id'通常被定义为 ID 类型的属性。不知道哪个属性是 ID 类型的实现中，这会返回 null 结果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [document](/zh-CN/docs/DOM/document) 包含其他用于在文档中查找元素的方法
- [document.querySelector()](/zh-CN/docs/Web/API/document.querySelector) 类似'div.myclass'的元素的选择
- [xml:id](/zh-CN/docs/xml/xml:id) - has a utility method for allowing `getElementById` to obtain 'xml:id' in XML documents (such as returned by Ajax calls)
