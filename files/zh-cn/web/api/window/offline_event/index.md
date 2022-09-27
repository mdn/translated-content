---
title: offline
slug: Web/API/Window/offline_event
---

当浏览器失去网络连接时，`offline`事件被触发。并且`navigator.onLine`的值变为 `false`。

## 常规信息

- 规范
  - : [HTML5 Offline](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#event-offline)
- 接口
  - : Event
- 是否冒泡
  - : 否
- 可取消默认行为
  - : 否
- 目标对象
  - : 当前网页 (`<window>`)
- 默认行为
  - : 无

## 属性

| 属性                                  | 类型                                 | 描述                                         |
| ------------------------------------- | ------------------------------------ | -------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 产生该事件的对象 (DOM 树中最顶级的那个对象). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | 事件类型。                                   |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | 该事件是否冒泡。                             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | 该事件是否可取消默认行为。                   |

## 规范

{{Specifications}}

## 相关事件

- [`online`](/zh-CN/docs/Mozilla_event_reference/online)
