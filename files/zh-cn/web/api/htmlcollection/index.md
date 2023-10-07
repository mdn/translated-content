---
title: HTMLCollection
slug: Web/API/HTMLCollection
---

{{APIRef("DOM")}}

**`HTMLCollection`** 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（与 {{jsxref("Functions/arguments", "arguments")}} 相似的类数组 (array-like) 对象），还提供了用来从该集合中选择元素的方法和属性。

> **备注：** 由于历史原因（DOM4 之前，实现该接口的集合只能包含 HTML 元素），该接口被称为 `HTMLCollection`。

HTML DOM 中的 `HTMLCollection` 是即时更新的（live）；当其所包含的文档结构发生改变时，它会自动更新。因此，最好是创建副本（例如，使用 {{jsxref("Array/from", "Array.from")}}）后再迭代这个数组以添加、移动或删除 DOM 节点。

## 属性

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : 返回集合当中子元素的数目。

## 方法

- {{domxref("HTMLCollection.item()")}}

  - : 根据给定的索引（从 0 开始），返回具体的节点。如果索引超出了范围，则返回 `null`。

    访问 `collection[i]`（在索引 `i` 超出范围时会返回 `undefined`）的替代方法。这在非 JavaScript DOM 的实现中非常有用。

- {{domxref("HTMLCollection.namedItem()")}}

  - : 根据 ID 返回指定节点，若不存在，则根据字符串所表示的 `name` 属性来匹配。根据 name 匹配只能作为最后的依赖，并且只有当被引用的元素支持 `name` 属性时才能被匹配。如果不存在符合给定 name 的节点，则返回 `null`。

    访问 `collection[name]`（在 `name` 不存在时会返回 `undefined`）的替代方法。这在非 JavaScript DOM 的实现中非常有用。

## 在 JavaScript 中使用

`HTMLCollection` 还通过将其成员的名称和索引直接以属性的形式公开。HTML ID 可能会包含在 ID 中合法的 `:` 和 `.` 字符，这时就需要使用括号表达式来访问属性。目前，`HTMLCollection` 不能识别纯数字的 ID，因为这与数组形式的访问相冲突（虽然 HTML5 允许使用纯数字的 ID）。

例如，假定在文档中有一个 `<form>` 元素，且它的 `id` 是 `myForm`：

```js
var elem1, elem2;

// document.forms is an HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms["named.item.with.periods"];
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}、{{domxref("HTMLOptionsCollection")}}
