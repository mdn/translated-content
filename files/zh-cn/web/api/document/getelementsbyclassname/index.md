---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
---

{{APIRef("DOM")}}

返回一个包含了所有指定类名的子元素的类数组对象。当在 document 对象上调用时，会搜索整个 DOM 文档，包含根节点。你也可以在任意元素上调用{{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

## 语法

```plain
var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);
```

- _elements_ 是一个实时{{ domxref("HTMLCollection", "集合") }}，包含了找到的所有元素。
- _names_ 是一个字符串，表示要匹配的类名列表；类名通过空格分隔
- getElementsByClassName 可以在任何元素上调用，不仅仅是 document。调用这个方法的元素将作为本次查找的根元素。

## 示例

获取所有 class 为 'test' 的元素：

```js
document.getElementsByClassName("test");
```

获取所有 class 同时包括 'red' 和 'test' 的元素。

```js
document.getElementsByClassName("red test");
```

在 id 为'main'的元素的子节点中，获取所有 class 为'test'的元素

```js
document.getElementById("main").getElementsByClassName("test");
```

我们还可以对任意的 {{ domxref("HTMLCollection") }} 使用 Array.prototype 的方法，调用时传递 _HTMLCollection_ 作为方法的参数。这里我们将查找到所有 class 为 'test' 的 div 元素：

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

### 获取第一个类名为 test 的元素

这是 `getElementsByClassName()` 的通常用法：

```html
<html>
  <body>
    <div id="parent-id">
      <p>hello world 1</p>
      <p class="test">hello world 2</p>
      <p>hello world 3</p>
      <p>hello world 4</p>
    </div>

    <script>
      var parentDOM = document.getElementById("parent-id");

      var test = parentDOM.getElementsByClassName("test"); // 匹配类名的元素集合，不是元素本身
      console.log(test); //HTMLCollection[1]

      var testTarget = parentDOM.getElementsByClassName("test")[0]; // 我们想要取到的第一个元素
      console.log(testTarget); //<p class="test">hello world 2</p>
    </script>
  </body>
</html>
```

## 多个 Class 示例

`document.getElementsByClassName` 的工作方式与 `document.querySelector` 和 `document.querySelectorAll` 很相似。只有所有 className 都匹配的元素会被选择。

### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange juice">Orange Juice</span>
<span class="apple juice">Apple Juice</span>
<span class="foo bar">Something Random</span>
<textarea id="resultArea" style="width:100%;height:7em"></textarea>
```

### JavaScript

```js
// getElementsByClassName selects partial matches
var allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
var result = "document.getElementsByClassName('orange juice')";
for (
  var i = 0, len = allOrangeJuiceByClass.length | 0;
  i < len;
  i = (i + 1) | 0
) {
  result += "\n  " + allOrangeJuiceByClass[i].textContent;
}

// querySelector only selects full complete matches
var allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (
  var i = 0, len = allOrangeJuiceQuery.length | 0;
  i < len;
  i = (i + 1) | 0
) {
  result += "\n  " + allOrangeJuiceQuery[i].textContent;
}

document.getElementById("resultArea").value = result;
```

### 结果

{{EmbedLiveSample('多个_Class_示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
