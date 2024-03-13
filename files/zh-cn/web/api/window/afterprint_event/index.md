---
title: Window：afterprint 事件
slug: Web/API/Window/afterprint_event
---

{{APIRef}}

在关联的文档开始打印或关闭打印预览后，将触发 **`afterprint`** 事件。

{{domxref("Window.beforeprint_event", "beforeprint")}} 和 `afterprint` 事件允许页面在打印开始之前更改其内容（例如，也许是移除 banner）然后在打印完成后还原这些更改。一般来说，你应该更倾向于使用 [`@media print`](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries) CSS at 规则，但在某些情况下可能有必要使用这些事件。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理属性。

```js
addEventListener("afterprint", (event) => {});
onafterprint = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

使用 `addEventListener()`：

```js
window.addEventListener("afterprint", (event) => {
  console.log("打印后");
});
```

使用 `onafterprint` 事件处理属性：

```js
window.onafterprint = (event) => {
  console.log("打印后");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件：{{domxref("Window/beforeprint_event", "beforeprint")}}
