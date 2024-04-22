---
title: HTMLCollection.namedItem()
slug: Web/API/HTMLCollection/namedItem
---

{{APIRef("DOM")}}

{{domxref("HTMLCollection")}} 接口的 **`namedItem()`** 方法返回第一个与集合中的 `id` 或者 `name` 属性匹配成功的 {{domxref("Element")}}，如果没有匹配成功，则返回 `null`。

在 JavaScript 中，对一个 {{jsxref("String")}} 使用数组括号语法，例如 `collection["value"]` 等价于 `collection.namedItem("value")`。

## 语法

```js
const item = collection.namedItem(key);
```

### 参数

- `key` 是一个字符串，表示我们正在查找元素的 `id` 或者 `name` 属性。

### 返回值

- `item` 是 {{domxref("HTMLCollection")}} 第一个与 _key_ 匹配的 {{domxref("Element")}}，如果没有，则返回 {{jsxref("null")}}。

## 示例

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="firstname">John</span>
  <span name="lastname">Doe</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById("personal");

// Returns the HTMLSpanElement with the name "title" if no such element exists null is returned
const titleSpan = container.children.namedItem("title");

// The following variants return undefined instead of null if there's no element with a matching name or id
const firstnameSpan = container.children["firstname"];
const lastnameSpan = container.children.lastname;

// Returns the span element with the id "degree"
const degreeSpan = container.children.namedItem("degree");

const output = document.createElement("div");
output.textContent = `Result: ${titleSpan.textContent} ${firstnameSpan.textContent} ${lastnameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement("afterend", output);
```

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
