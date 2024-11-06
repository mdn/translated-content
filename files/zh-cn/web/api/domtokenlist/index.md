---
title: DOMTokenList
slug: Web/API/DOMTokenList
---

{{APIRef}}

**`DOMTokenList`** 接口表示一组空格分隔的标记（tokens）。如由 {{ domxref("Element.classList") }}、{{domxref("HTMLLinkElement.relList")}}、{{domxref("HTMLAnchorElement.relList")}} 或 {{domxref("HTMLAreaElement.relList")}} 返回的一组值。它和 JavaScript {{jsxref("Array")}} 对象一样，索引从 0 开始。`DOMTokenList` 总是区分大小写（case-sensitive）。

## 属性

- {{ domxref("DOMTokenList.length") }} {{ReadOnlyInline}}
  - : 一个整数，表示存储在该对象里值的个数。
- {{domxref("DOMTokenList.value")}}
  - : 该属性以 {{domxref("DOMString")}} 的形式返回 **`DOMTokenList`** 列表的值。

## 方法

- {{domxref("DOMTokenList.item()", "DOMTokenList.item(<var>index</var>)")}}
  - : 根据传入的索引值返回一个值，如果索引值大于等于符号列表的长度（`length`），则返回 `undefined` 或 `null`，在 Gecko 7.0 之前的版本中返回 `null`。
- {{domxref("DOMTokenList.contains()", "DOMTokenList.contains(<var>token</var>)")}}
  - : 如果 DOMTokenList 列表中包括相应的字符串 `token`，则返回 `true`，否则返回 `false`。
- {{domxref("DOMTokenList.add()", "DOMTokenList.add(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}
  - : 添加一个或多个标记（`token`）到 `DOMTokenList` 列表中。
- {{domxref("DOMTokenList.remove()", "DOMTokenList.remove(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}
  - : 从 `DOMTokenList` 列表中移除一个或多个标记（`token`）。
- {{domxref("DOMTokenList.replace()", "DOMTokenList.replace(<var>oldToken</var>, <var>newToken</var>)")}}
  - : 使用 `newToken` 替换 `token`_ 。_
- {{domxref("DOMTokenList.supports()", "DOMTokenList.supports(<var>token</var>)")}}
  - : 如果传入的 `token` 是相关属性（attribute）支持的标记，则返回 `true` 。
- {{domxref("DOMTokenList.toggle()", "DOMTokenList.toggle(<var>token</var> [, <var>force</var>])")}}
  - : 从 DOMTokenList 字符串中移除标记字串（`token`），并返回 `false`。如果传入的字串（`token`）不存在，则将其添加进去，并返回 `true` 。`force` 是一个可选的布尔值，如果传入 `true` ，且传入的 _`token`_ 不存在，则将其添加进去并返回 `true` ，若传入的 _`token`_ 存在，则直接返回 `true` ；反之，如果传入 `false` ，则移除存在的 `token`，并返回 `false` ，如 `token` 不存在则直接返回 `false` 。
- {{domxref("DOMTokenList.entries()")}}
  - : 返回一个迭代器（{{jsxref("Iteration_protocols","iterator")}}），以遍历这个对象中的所有键值对。
- {{domxref("DOMTokenList.forEach()", "DOMTokenList.forEach(<var>callback</var> [, <var>thisArg</var>])")}}
  - : 为每个 `DOMTokenList` 中的元素都调用一次传入的 `callback` 函数。
- {{domxref("DOMTokenList.keys()")}}
  - : 返回一个迭代器（{{jsxref("Iteration_protocols","iterator")}}）以遍历这个对象中所有键值对的键。
- {{domxref("DOMTokenList.values()")}}
  - : 返回一个迭代器（{{jsxref("Iteration_protocols","iterator")}}）以遍历这个对象中所有键值对的值。

## 示例

在下面这个简单的例子中，我们使用 {{domxref("Element.classList")}} 获取了 {{htmlelement("p")}} 元素的 class 列表，也就是一个`DOMTokenList` ，再使用 {{domxref("DOMTokenList.add()")}} 添加了一个 class，然后更新 `<p>` 元素的{{domxref("Node.textContent")}}以显示这个新的 `DOMTokenList`。

### HTML

```html
<p class="a b c"></p>
```

### JavaScript

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `paragraph classList is "${classes}"`;
```

输出类似这样：

{{ EmbedLiveSample('示例', '100%', 60) }}

## 去除空格和重复项目

修改 `DOMTokenList` 的方法（例如 {{domxref("DOMTokenList.add()")}}）会自动去除多余的空格（{{Glossary("Whitespace")}}）和列表中的重复项目。例如：

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span classList is "${classes}"`;
```

输出类似这样：

{{ EmbedLiveSample('去除空格和重复项目', '100%', 60) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("DOMSettableTokenList") }} (object that extends DOMTokenList with settable _.value_ property)
- [Firefox bug 501257](https://bugzil.la/501257) - Implement HTML 5's HTMLElement.classList property
