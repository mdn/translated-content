---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
---

{{APIRef}}

**`Element.getElementsByClassName()`** 方法返回一个即时更新的（live）{{domxref("HTMLCollection")}}，包含了所有拥有指定 class 的子元素。当在 document 对象上调用此方法时，会检索整个文档，包括根元素。

相似地，{{domxref("Document.getElementsByClassName", "getElementsByClassName()")}} 方法会在整个文档上执行；它返回指定拥有指定 class 名称的 document 根节点的后代元素。

## 语法

```plain
var elements = element.getElementsByClassName(names);
```

- **elements** 是一个即时更新的（live）{{ domxref("HTMLCollection") }}。
- **names** 是一个字符串，表示要匹配的类名（class names）列表；类名被空白符分隔。
- _element_ 是文档中的任一 {{domxref("Element")}}。

## 例子

获取所有包含 class 名称为 test 的元素：

```js
element.getElementsByClassName("test");
```

获取所有包含 `red` 和 `test` class 名的元素：

```js
element.getElementsByClassName("red test");
```

获取 `id` 为 `main` 的元素的所有包含一个 `test` class 名的后代元素：

```js
document.getElementById("main").getElementsByClassName("test");
```

可以在任何 {{domxref("HTMLCollection")}} 上面使用 {{jsxref("Array.prototype")}} 的方法，要把 `HTMLCollection` 作为该方法的上下文对象（this）。下例，查找类名为 `test` 的元素中的所有 {{HTMLElement("div")}} 元素：

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "div";
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
