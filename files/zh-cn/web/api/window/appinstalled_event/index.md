---
title: Window.onappinstalled
slug: Web/API/Window/appinstalled_event
---

{{APIRef}}

{{domxref("Window")}} 对象的 **`onappinstalled`** 属性用于处理 `appinstalled` 事件，该事件是一个实现了 {{domxref("Event")}}接口的简单事件，会在网页应用成功安装为[渐进式网页应用](/zh-CN/Apps/Progressive)时立即触发。

## 语法

```plain
window.onappinstalled = function(event) { ... };
```

## 示例

```js
window.onappinstalled = function (ev) {
  console.log("The application was installed.");
};
```

## 浏览器兼容性

{{Compat}}

## 相关文章

- {{domxref("Event")}}
