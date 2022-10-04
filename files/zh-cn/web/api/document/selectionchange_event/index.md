---
title: selectionchange
slug: Web/API/Document/selectionchange_event
---

[Selection API](/zh-CN/docs/Web/API/Selection_API) 的 **`selectionchange` **事件在文档上的当前文本选择被改变时触发。

| Bubbles        | No                               |
| -------------- | -------------------------------- |
| Cancelable     | No                               |
| Target objects | {{domxref("Document")}} |
| Interface      | {{domxref("Event")}}     |

## 例子

```js
//以下两种方法可任选其一
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## 继承

`selectionchange` 事件实现了 {{domxref("Event")}} 接口，因此在此接口上定义的属性和方法都可使用。

{{InheritanceDiagram('','','', 'Event')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Document.onselectionchange")}}
