---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

**`HTMLAllCollection`** 接口表示*所有*文档元素（通过索引（类似于数组）和元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 访问）的集合。它由 {{domxref("document.all")}} 属性返回。

`HTMLAllCollection` 的形态与 {{domxref("HTMLCollection")}} 非常相似，但两者在行为上存在许多细微差异，例如，`HTMLAllCollection` 可以作为函数调用，并且其 `item()` 方法可以使用表示元素 `id` 和 `name` 属性的字符串调用。

## 实例属性

- {{domxref("HTMLAllCollection.length")}} {{ReadOnlyInline}}
  - : 返回集合中项目的数量。

## 实例方法

- {{domxref("HTMLAllCollection.item()")}}
  - : 返回位于集合中指定偏移位置的元素，或者返回其 `id` 或 `name` 属性具有指定值的元素。如果未找到任何元素，则返回 `null`。
- {{domxref("HTMLAllCollection.namedItem()")}}
  - : 返回集合中第一个其 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 或 `name` 属性与给定的字符串名称匹配的[元素](/zh-CN/docs/Web/API/Element)，如果没有匹配的元素，则返回 `null`。

## JavaScript 中的用法

### 索引访问

除了上述方法外，可以通过整数索引和字符串属性名称来访问 `HTMLAllCollection` 中的元素。HTML `id` 属性可能包含 `:` 和 `.` 作为有效字符，这需要使用方括号属性访问。`collection[i]` 等同于 `collection.item(i)`，其中 `i` 可以是整数、包含整数的字符串或表示 `id` 的字符串。

### 作为函数调用

`HTMLAllCollection` 对象是可调用的。当无参数调用或传入 `undefined` 时，它返回 `null`。否则，当传入相同参数时，它返回与 {{domxref("HTMLAllCollection/item", "item()")}} 方法相同的值。

### 特殊类型转换行为

由于历史原因，`document.all` 是一个在以下方面表现得像 `undefined` 的对象：

- 它与 `undefined` 和 `null` 是[宽松相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)的。
- 在布尔上下文中，它是[假值](/zh-CN/docs/Glossary/Falsy)。
- 它的 [`typeof`](/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 结果是 `"undefined"`。

这些特殊行为确保了如下代码能够正常工作：

```js
if (document.all) {
  // 假设我们是在 IE 浏览器中；提供特殊逻辑
}
// 假设我们是在一个现代浏览器中
```

即使代码在出于兼容性原因实现了 `document.all` 的浏览器中运行，它也将继续提供现代浏览器的行为。

然而，在所有其他上下文中，`document.all` 仍然是一个对象。例如：

- 它与 `undefined` 或 `null` 都不是[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)的。
- 当在[空值合并运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)（`??`）或[可选链运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)（`?.`）的左侧使用时，它不会导致表达式短路。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCollection")}}
