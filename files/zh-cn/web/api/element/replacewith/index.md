---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
---

{{APIRef("DOM")}}

**`ChildNode.replaceWith()`** 的方法用一套 {{domxref("Node")}} 对象或者字符串对象，替换了该节点父节点下的子节点。字符串对象被当做等效的 {{domxref("Text")}} 节点插入。

## 语法

```js-nolint
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* …, */ paramN)
```

### 参数

- `param1`、…、`paramN`
  - : 一系列用来替换的 {{domxref("Node")}} 对象或者字符串对象。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 无法在层次结构中的指定节点处插入节点时抛出。

## 示例

### 使用 `replaceWith()`

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` 是不可绑定作用域方法

`replaceWith()` 方法不能作用于 with 语句。参考 {{jsxref("Symbol.unscopables")}} 获取更多信息。

```js
with (node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}
