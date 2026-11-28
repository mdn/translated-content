---
title: HTMLScriptElement：blocking 属性
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 752996f4695156431af4e19feb0542a4d372ce1e
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 的只读属性 **`blocking`** 返回一个实时的 {{domxref("DOMTokenList")}} 对象，其中包含了在获取外部资源时应阻塞的操作。它反映 {{HTMLElement("script")}} 元素的 [`blocking`](/zh-CN/docs/Web/HTML/Reference/Elements/script#在脚本获取并执行前阻止渲染) 内容属性。

## 值

一个实时的 {{domxref("DOMTokenList")}} 对象。

尽管 `blocking` 属性本身是只读的，无法替换其 `DOMTokenList` 对象，但仍可以直接给 `blocking` 赋值，效果等同于给它的 {{domxref("DOMTokenList/value", "value")}} 属性赋值。此外，也可以使用 {{domxref("DOMTokenList/add", "add()")}}、{{domxref("DOMTokenList/remove", "remove()")}}、{{domxref("DOMTokenList/replace", "replace()")}} 和 {{domxref("DOMTokenList/toggle", "toggle()")}} 方法修改这个 `DOMTokenList` 对象。

## 示例

```html
<script id="el" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // 输出：DOMTokenList ["render"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
