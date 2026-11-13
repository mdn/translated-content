---
title: Element：prepend() 方法
slug: Web/API/Element/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

**`Element.prepend()`** 方法将在当前{{domxref("Element", "元素", "", 1)}}的第一个子节点之前插入一组 {{domxref("Node")}} 对象或字符串。字符串将以等效的 {{domxref("Text")}} 节点插入。

## 语法

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### 参数

- `param1`、……、`paramN`
  - : 一组要插入的 {{domxref("Node")}} 对象或字符串。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 当节点无法插入到指定的层级位置时抛出。

## 示例

### 在元素前插入

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### 在文本前插入

```js
let div = document.createElement("div");
div.append("一些文本");
div.prepend("标题：");

console.log(div.textContent); // “标题：一些文本”
```

### 在元素前插入元素和文本

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("一些文本", p);

console.log(div.childNodes); // NodeList [ #text "一些文本", <p> ]
```

### prepend 方法是不可绑定作用域的

`prepend()` 方法无法绑定到 `with` 语句中的作用域。有关更多信息，请参阅 {{jsxref("Symbol.unscopables")}}。

```js
let div = document.createElement("div");

with (div) {
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
