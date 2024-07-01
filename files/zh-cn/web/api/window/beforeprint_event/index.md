---
title: Window：beforeprint 事件
slug: Web/API/Window/beforeprint_event
---

{{APIRef}}

当相关联的文档即将打印或关闭打印预览时，将触发 **`beforeprint`** 事件。

{{domxref("Window.afterprint_event", "afterprint")}} 和 `beforeprint` 事件允许页面在打印开始之前更改其内容（例如，也许是移除 banner）然后在打印完成后还原这些更改。一般来说，你应该更倾向于使用 [`@media print`](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries) CSS at 规则，但在某些情况下可能有必要使用这些事件。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理属性。

```js
addEventListener("beforeprint", (event) => {});
onbeforeprint = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

使用 `addEventListener()`：

```js
window.addEventListener("beforeprint", (event) => {
  console.log("打印前");
});
```

使用 `onbeforeprint` 事件处理属性：

```js
window.onbeforeprint = (event) => {
  console.log("打印前");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Window/afterprint_event", "afterprint")}}
