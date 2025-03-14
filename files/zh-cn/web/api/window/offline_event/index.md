---
title: Window：offline 事件
slug: Web/API/Window/offline_event
---

{{APIRef}}

`offline` 事件在浏览器失去网络连接时，在 {{domxref("Window")}} 接口上触发。并且 {{domxref("Navigator.onLine")}} 的值变为 `false`。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("offline", (event) => {});
onoffline = (event) => {};
```

## 事件类型

一个 {{domxref("Event")}}。

## 事件处理方法别名

除了 `Window` 接口以外，事情处理方法属性 `onoffline` 同样可以用于以下目标：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 示例

```js
// addEventListener 版本
window.addEventListener("offline", (event) => {
  console.log("网络连接已断开。");
});

// onoffline 版本
window.onoffline = (event) => {
  console.log("网络连接已断开。");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`online`](/zh-CN/docs/Web/API/Window/online_event)
