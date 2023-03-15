---
title: document.currentScript
slug: Web/API/Document/currentScript
---

{{ApiRef("DOM")}}

**`Document.currentScript`** 属性返回当前正在运行的脚本所属的 {{HTMLElement("script")}} 元素。调用此属性的脚本[不能是 JavaScript 模块](https://github.com/whatwg/html/issues/997)，模块应当使用 {{JSxRef("Statements/import%2Emeta", "import.meta")}} 对象。

值得注意的是，如果当前正在执行的代码是被其他代码作为回调函数或者事件处理函数调用的，那么 `currentScript` 属性不会指向任何 {{HTMLElement("script")}} 元素，而是会返回 `null`。这个属性只在脚本被解析后首次运行时有效。

## 语法

```plain
var curScriptElement = document.currentScript;
```

## 示例

下例演示了如何检测当前正在执行脚本的 {{HTMLElement("script")}} 元素是否是以异步模式执行的。

```js
if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}
```

[View Live Examples](/samples/html/currentScript.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{JSxRef("Statements/import%2Emeta", "import.meta")}}
- {{HTMLElement("script")}}
- {{DOMxRef("document.onafterscriptexecute")}}
- {{DOMxRef("document.onbeforescriptexecute")}}
