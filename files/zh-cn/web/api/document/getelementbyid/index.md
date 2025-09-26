---
title: Document：getElementById() 方法
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ ApiRef("DOM") }}

{{domxref("Document")}} 接口的 **`getElementById()`** 方法返回一个表示 {{domxref("Element.id", "id")}} 属性与指定字符串相匹配的元素的 {{domxref("Element")}} 对象。由于元素的 ID 在指定时必须是独一无二的，因此这是快速访问特定元素的有效方法。

如果需要访问那些没有 ID 的元素，你可以考虑在 {{domxref("Document.querySelector", "querySelector()")}} 中使用{{Glossary("CSS selector", "选择器")}}来查找这些元素。

> [!NOTE]
> 文档中的 ID 必须是唯一的。如果一个文档中有两个及以上的元素具有相同的 ID，那么该方法只会返回查找到的第一个元素。

## 语法

```js-nolint
getElementById(id)
```

> [!NOTE]
> 方法名称中 `"Id"` 的大小写*必须*正确才能使代码正常运行；`getElementByID()` 是*无*效且无法正常运行的，无论它看起来是多么自然。

### 参数

- `id`
  - : 所要查找的元素的 ID。ID 是大小写敏感的字符串，且在文档中是唯一的；应只有一个元素具有任何给定的 ID。

### 返回值

返回一个表示与指定 ID 相匹配的 DOM 元素的 {{domxref("Element")}} 对象。若在当前文档中没有找到匹配的元素，则返回 `null`。

## 示例

### HTML

```html
<html lang="zh">
  <head>
    <title>getElementById 示例</title>
  </head>
  <body>
    <p id="para">这里有一些文本</p>
    <button onclick="changeColor('blue');">蓝色</button>
    <button onclick="changeColor('red');">红色</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### 结果

{{ EmbedLiveSample('示例', 250, 120) }}

## 使用说明

不同于其他元素查找方法（如 {{domxref("Document.querySelector()")}} 以及 {{domxref("Document.querySelectorAll()")}}），`getElementById()` 只有在作为全局 `document` 的方法时才能起作用，而在 DOM 中的其他元素上*无法*生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的“局部”版本。

### 示例

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>文档</title>
  </head>
  <body>
    <div id="parent-id">
      <p>你好世界 1</p>
      <p id="test1">你好世界 2</p>
      <p>你好世界 3</p>
      <p>你好世界 4</p>
    </div>
    <script>
      const parentDOM = document.getElementById("parent-id");
      const test1 = parentDOM.getElementById("test1");
      // 抛出错误
      // Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

如果没有查找到给定 `id` 的元素，这个方法会返回 `null`。注意 `id` 参数是大小写敏感的，所以 `document.getElementById("Main")` 会返回 `null` 而不是元素 `<div id="main">`，因为“M”和“m”对于这个方法而言是不一样的。

`getElementById()` 方法不会搜索不在文档中的元素。当创建一个元素，并且分配 ID 后，你必须使用 {{domxref("Node.insertBefore()")}} 或其他类似的方法把元素插入到文档树中，之后才能使用 `getElementById()` 访问到：

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el 会是 null！
```

对于非 HTML 文档，DOM 的实现必须说明哪个属性是 ID 类型。只有文档的 DTD 定义了这个属性名是“id”时，“id”才会被认为是 ID 类型。在 [XHTML](/zh-CN/docs/Glossary/XHTML)、XUL 或者其他文档中，“id”通常被定义为 ID 类型的属性。不知道哪个属性是 ID 类型的实现中，这预期会返回 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document")}}，其他可用于获取文档中的元素的方法和属性。
- {{domxref("Document.querySelector()")}} 用于类似于 `'div.myclass'` 这样的查询的选择器
- [xml:id](https://www.w3.org/TR/xml-id/)——有一个允许 `getElementById()` 在 XML 文档（例如通过 Ajax 调用返回的文档）中获取 'xml:id' 的工具方法。
