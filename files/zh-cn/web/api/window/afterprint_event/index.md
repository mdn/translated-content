---
title: afterprint
slug: Web/API/Window/afterprint_event
---

在相关联的文档已开始打印或打印预览已关闭之后，触发 `afterprint`事件。

## 基本信息

- Specification
  - : [HTML5](https://html.spec.whatwg.org/multipage/webappapis.html#printing)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : DefaultView (`<window>`)
- Default Action
  - : None

## 属性

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## 例子

使用 `addEventListener()`:

```js
window.addEventListener('afterprint', (event) => {
  console.log('After print');
});
```

使用 `onafterprint` 时间监听属性：

```js
window.onafterprint = (event) => {
  console.log('After print');
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- [beforeprint](/zh-CN/docs/Web/Events/beforeprint)
