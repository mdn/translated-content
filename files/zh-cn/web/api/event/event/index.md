---
title: Event() 构造函数
short-title: Event()
slug: Web/API/Event/Event
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`Event()`** 构造函数创建一个新的 {{domxref("Event")}} 对象。以这种方式创建的事件称为*合成事件*，区别于由浏览器触发的事件，可以由脚本[派发](/zh-CN/docs/Web/API/Document_Object_Model/Events#创建和派发事件)。

## 语法

```js-nolint
new Event(type)
new Event(type, options)
```

### 参数

- `type`
  - : 一个字符串，表示事件的名称。
- `options` {{optional_inline}}
  - : 一个对象，包含以下属性：
    - `bubbles` {{optional_inline}}
      - : 一个布尔值，表示该事件是否冒泡。默认为 `false`。
    - `cancelable` {{optional_inline}}
      - : 一个布尔值，表示该事件是否可以被取消。默认为 `false`。
    - `composed` {{optional_inline}}
      - : 一个布尔值，表示该事件是否会在影子 DOM 根节点之外触发侦听器（详见 {{domxref("Event.composed")}}）。默认为 `false`。

### 返回值

一个新的 {{domxref("Event")}} 对象。

## 示例

```js
// 创建一个支持冒泡且不能被取消的 look 事件

const evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// 事件可以在任何元素上派发，不仅仅是 document
myDiv.dispatchEvent(evt);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [创建和派发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events#创建和派发事件)
