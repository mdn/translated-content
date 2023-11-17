---
title: selectstart
slug: Web/API/Node/selectstart_event
---

[Selection API](/zh-CN/docs/Web/API/Selection_API) 的 **`selectstart`** 事件在用户开始一个新的选择时候触发。

如果事件被取消，选择将不被触发。

| Bubbles        | Yes                     |
| -------------- | ----------------------- |
| Cancelable     | Yes                     |
| Target objects | {{domxref("Document")}} |
| Interface      | {{domxref("Event")}}    |

## 例子

```js
document.addEventListener(
  "selectstart",
  function () {
    console.log("Selection started");
  },
  false,
);
```

## 继承

`selectstart` 事件实现{{domxref("Event")}} 接口。你可以使用此界面上定义的属性和方法。

{{InheritanceDiagram('','','', 'Event')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("GlobalEventHandlers.onselectstart")}}
