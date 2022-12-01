---
title: beforeprint
slug: Web/API/Window/beforeprint_event
---

当相关联的文档即将打印或预览以进行打印时，将触发 beforeprint 事件。

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

| 属性                                  | 类型                                 | 描述                            |
| ------------------------------------- | ------------------------------------ | ------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 事件目标 (DOM 树中的最顶层目标) |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | 时间类型                        |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | 事件是否冒泡                    |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | 事件是否可取消                  |

## 样例

使用 `addEventListener()`：

```js
window.addEventListener('beforeprint', (event) => {
  console.log('Before print');
});
```

使用 `onbeforeprint` 事件监听属性：

```js
window.onbeforeprint = (event) => {
  console.log('Before print');
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- [afterprint](/zh-CN/docs/Web/Events/afterprint)
