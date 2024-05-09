---
title: CSS：escape() 静态方法
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: 893fa1f55fe2ae8366d0ac85f936c0ee228d9a63
---

{{APIRef("CSSOM")}}

**`CSS.escape()`** 静态方法返回包含作为参数传递的转义后的字符串，主要用作 CSS 选择器的一部分。

## 语法

```js-nolint
CSS.escape(str)
```

### 参数

- `str`
  - : 要转义的字符串。

### 返回值

转义字符串。

## 示例

### 基础结果

```js-nolint
CSS.escape(".foo#bar"); // "\\.foo\\#bar"
CSS.escape("()[]{}"); // "\\(\\)\\[\\]\\{\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\\30 ", '0' 的 Unicode 编码点是 30
CSS.escape('\0'); // "\ufffd", Unicode 替换字符
```

### 在上下文中使用

若要将字符串转义为选择器的一部分，可以使用 `escape()` 方法：

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

尽管 `escape()` 方法也可用于转义字符串，不过它转义的字符并不是严格意义上需要转义的字符：

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 此静态方法所在的 {{DOMxRef("CSS")}} 接口。
- [CSS.escape 的 polyfill](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
