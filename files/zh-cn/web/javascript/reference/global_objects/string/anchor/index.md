---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 的 **`anchor()`** 方法创建一个带有名称的 {{HTMLElement("a")}} 元素字符串，其中嵌入了调用的字符串（`<a name="...">str</a>`）。

> **备注：** 所有的 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)（比如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)）代替。
>
> HTML 规范不再允许 {{HTMLElement("a")}} 元素具有 `name` 属性，因此该方法甚至无法创建有效的标记。

## 语法

```js-nolint
anchor(name)
```

### 参数

- `name`
  - : 一个字符串，表示要生成的 `<a name="...">` 开始标签的 `name` 属性。

### 返回值

一个以 `<a name="name">` 开始标签开头的字符串（`name` 中的双引号被替换为 `&quot;`），然后是文本 `str`，最后是一个 `</a>` 结束标签。

## 示例

### 使用 anchor()

```js
const myString = "内容目录";

document.body.innerHTML = myString.anchor("内容锚点");
```

将会输出下面的 HTML：

```html
<a name="内容锚点">内容目录</a>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.anchor` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.link()")}}
