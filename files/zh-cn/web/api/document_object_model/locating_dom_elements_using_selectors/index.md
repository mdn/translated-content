---
title: 使用选择器定位 DOM 元素
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
---

Selectors API 提供了通过与一组选择器匹配来快速轻松地从 DOM 检索 [`Element`](/zh-CN/docs/DOM/element)节点的方法。这比以前的技术要快得多，其中有必要使用 JavaScript 代码中的循环来定位您需要查找的特定项目。

## NodeSelector 接口

此规范向实现 [`Document`](/zh-CN/docs/DOM/document), [`DocumentFragment`](/zh-CN/docs/DOM/DocumentFragment), 或 `Element` 接口的任何对象添加了两种新方法：

- `querySelector`
  - : 返回节点子树内与之相匹配的第一个 [`Element`](/zh-CN/docs/DOM/element) 节点。如果没有匹配的节点，则返回 null。
- `querySelectorAll`
  - : 返回一个[`NodeList`](/zh-CN/docs/DOM/NodeList) 包含节点子树内所有与之相匹配的 Element 节点，如果没有相匹配的，则返回一个空节点列表。

> **备注：** 由 `querySelectorAll()` 返回的节点列表不是动态实时的。这和其他 DOM 查询方法返回动态实时节点列表不一样。

这里有更多的例子和细节：`querySelector()` and [`querySelectorAll()`](/zh-CN/docs/DOM/Element.querySelectorAll) ，[Code snippets for querySelector](/zh-CN/docs/Code_snippets/QuerySelector).

## Selectors

选择器方法接受一个或多个逗号分隔的选择器来确定应该返回哪些元素。

例如，要选择文档中所有 CSS 的类 (class) 是 warning 或者 note 的段落 (p) 元素，可以这样写：

```js
var special = document.querySelectorAll( "p.warning, p.note" );
```

也可以通过 ID 来查询，例如：

```
var el = document.querySelector( "#main, #basic, #exclamation" );
```

执行上面的代码后，el 就包含了文档中元素的 ID 是 main，basic 或 exclamation 的所有元素中的第一个元素。

`querySelector()` and `querySelectorAll()` 里可以使用任何 CSS 选择器。

## 另请参阅

- [Selectors API](http://www.w3.org/TR/selectors-api/)
- [`element.querySelector`](/zh-CN/docs/DOM/Element.querySelector)
- [`element.querySelectorAll`](/zh-CN/docs/DOM/Element.querySelectorAll)
- [`document.querySelector`](/zh-CN/docs/DOM/Document.querySelector)
- [`document.querySelectorAll`](/zh-CN/docs/DOM/Document.querySelectorAll)
- [Code snippets for querySelector](/zh-CN/docs/Code_snippets/QuerySelector)
