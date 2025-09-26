---
title: Document：currentScript 属性
slug: Web/API/Document/currentScript
l10n:
  sourceCommit: e633202a8cda3c340a0510c27f3902f743275140
---

{{APIRef("DOM")}}

**`Document.currentScript`** 属性返回当前正在处理其脚本（并且该脚本[不是 JavaScript 模块](https://github.com/whatwg/html/issues/997)）的 {{HTMLElement("script")}} 元素。（对于模块，请改用 [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta)）。

值得注意的是，如果脚本中的代码是作为回调或事件处理器调用的，则不会引用 {{HTMLElement("script")}} 元素；它只会在最初处理时引用该元素。

## 值

{{domxref("HTMLScriptElement")}} 或 null。

## 示例

此示例检查脚本是否正在异步执行：

```js
if (document.currentScript.async) {
  console.log("异步执行");
} else {
  console.log("同步执行");
}
```

[查看在线示例](https://mdn.dev/archives/media/samples/html/currentScript.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta)
- {{HTMLElement("script")}}
- {{DOMxRef("document.afterscriptexecute_event")}}
- {{DOMxRef("document.beforescriptexecute_event")}}
