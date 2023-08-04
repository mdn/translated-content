---
title: Element.classList
slug: Web/API/Element/classList
---

{{APIRef("DOM")}}

**`Element.classList`** 是一个只读属性，返回一个元素 `class` 属性的动态 {{domxref("DOMTokenList")}} 集合。这可以用于操作 class 集合。

相比将 {{domxref("element.className")}} 作为以空格分隔的字符串来使用，`classList` 是一种更方便的访问元素的类列表的方法。

## 值

一个 {{domxref("DOMTokenList")}}，表示元素的 `class` 属性的集合。如果 `class` 属性没有设置或者为空，它将返回一个空的 `DOMTokenList`，即 `length` 属性等于 0 的 `DOMTokenList`。

尽管 `classList` 属性自身是只读的，但是你可以使用 {{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}} 和 {{domxref("DOMTokenList/toggle", "toggle()")}} 方法修改其关联的 `DOMTokenList`。

## 示例

```js
const div = document.createElement("div");
div.className = "foo";

// 初始状态：<div class="foo"></div>
console.log(div.outerHTML);

// 使用 classList API 移除、添加类值
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// 如果 visible 类值已存在，则移除它，否则添加它
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

console.log(div.classList.contains("foo"));

// 添加或移除多个类值
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// 使用展开语法添加或移除多个类值
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// 将类值 "foo" 替换成 "bar"
div.classList.replace("foo", "bar");
```

> **备注：** Firefox 26 之前的版本没有在 add/remove/toggle 实现使用多个参数。参见 <https://bugzilla.mozilla.org/show_bug.cgi?id=814014>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
- [`classList.js`](https://github.com/eligrey/classList.js) (a cross-browser JavaScript polyfill that fully implements `element.classList`)
