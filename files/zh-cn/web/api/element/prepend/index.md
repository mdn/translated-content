---
title: Element.prepend()
slug: Web/API/Element/prepend
---

{{APIRef("DOM")}}

**`Element.prepend`** 方法可以在父节点的第一个子节点之前插入一系列{{domxref("Node")}}对象或者{{domxref("DOMString")}}对象。{{domxref("DOMString")}}会被当作{{domxref("Text")}}节点对待（也就是说插入的不是 HTML 代码）。

## 语法

```plain
Element.prepend((Node or DOMString)... nodes);
```

### 参数

- `nodes`
  - : 要插入的一系列{{domxref("Node")}}或者{{domxref("DOMString")}}。

### 返回值

`undefined`.

### 异常

- {{domxref("HierarchyRequestError")}}：节点不能插入当前层级内。

## 示例

### Prepending an element

```js
var parent = document.createElement("div");
var p = document.createElement("p");
var span = document.createElement("span");
parent.append(p);
parent.prepend(span);

console.log(parent.childNodes); // NodeList [ <span>, <p> ]
```

### Prepending text

```js
var parent = document.createElement("div");
parent.append("Some text");
parent.prepend("Headline: ");

console.log(parent.textContent); // "Headline: Some text"
```

### Appending an element and text

```js
var parent = document.createElement("div");
var p = document.createElement("p");
parent.prepend("Some text", p);

console.log(parent.childNodes); // NodeList [ #text "Some text", <p> ]
```

### `Element.prepend()` is unscopable

`prepend()` 不能在 with 语句内使用，详情参考 {{jsxref("Symbol.unscopables")}}。

```js
var parent = document.createElement("div");

with (parent) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
