---
title: Element：append() 方法
slug: Web/API/Element/append
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}

**`Element.append()`** 方法在当前 `Element` 的最后一个子节点之后插入一组 {{domxref("Node")}} 对象或字符串对象。被插入的字符串对象等价为 {{domxref("Text")}} 节点。

其与 {{domxref("Node.appendChild()")}} 的差异：

- `Element.append()` 允许附加字符串对象，而 `Node.appendChild()` 只接受 {{domxref("Node")}} 对象。
- `Element.append()` 没有返回值，而 `Node.appendChild()` 返回附加的 {{domxref("Node")}} 对象。
- `Element.append()` 可以附加多个节点和字符串，而 `Node.appendChild()` 只能附加一个节点。

## 语法

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### 参数

- `param1`、…、`paramN`
  - : 一组要插入的 {{domxref("Node")}} 或字符串对象。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 当层次结构中的指定位置不能插入节点时抛出该异常。

## 示例

### 附加元素

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### 附加文本

```js
let div = document.createElement("div");
div.append("一些文本");

console.log(div.textContent); // "一些文本"
```

### 附加元素和文本

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("一些文本", p);

console.log(div.childNodes); // NodeList [ #text "一些文本", <p> ]
```

### append 是不可绑定作用域方法

`append()` 方法无法被绑定到 `with` 语句的作用域中。参见 {{jsxref("Symbol.unscopables")}} 以了解更多信息。

```js
let div = document.createElement("div");

with (div) {
  append("foo");
}
// ReferenceError: append is not defined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
