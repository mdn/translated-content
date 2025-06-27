---
title: 键盘事件 KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
---

{{APIRef("UI Events")}}

**`KeyboardEvent()`** 构造函数新建一个 {{domxref("KeyboardEvent")}} 实例。

## 语法

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### 值

- _typeArg_
  - : {{domxref("DOMString")}} 类型，表示事件名称。
- _KeyboardEventInit_{{optional_inline}}
  - : `KeyboardEventInit` 字典，有以下几种值：
    - `"key"`, 可选，默认为 `""`, {{domxref("DOMString")}} 类型，设置 {{domxref("KeyboardEvent.key")}} 的值。
    - `"code"`, 可选，默认为 `""`, {{domxref("DOMString")}} 类型，设置{{domxref("KeyboardEvent.code")}} 的值。
    - `"location"`, 可选，默认为 `0`, `unsigned long`类型，设置 {{domxref("KeyboardEvent.location")}} 的值。
    - `"ctrlKey"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置 {{domxref("KeyboardEvent.ctrlKey")}} 的值。
    - `"shiftKey"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置{{domxref("KeyboardEvent.shiftKey")}} 的值。
    - `"altKey"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置 {{domxref("KeyboardEvent.altKey")}} 的值。
    - `"metaKey"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置 {{domxref("KeyboardEvent.metaKey")}} 的值。
    - `"repeat"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置 {{domxref("KeyboardEvent.repeat")}} 的值。
    - `"isComposing"`, 可选，默认为 `false`, {{jsxref("Boolean")}} 类型，设置 {{domxref("KeyboardEvent.isComposing")}} 的值。
    - `"charCode"`, 可选，默认为 `0`, `unsigned long` 类型，设置 {{domxref("KeyboardEvent.charCode")}} (已废弃) 的值。
    - `"keyCode"`, 可选，默认为 `0`, `unsigned long` 类型，设置{{domxref("KeyboardEvent.keyCode")}} (已废弃) 的值。
    - `"which"`, 可选，默认为 `0`, `unsigned long` 类型，设置{{domxref("KeyboardEvent.which")}} (已废弃) 的值。

    > [!NOTE]
    > `KeyboardEventInit` 字典也可以接受来自 {{domxref("UIEvent.UIEvent", "UIEventInit")}} 和 {{domxref("Event.Event", "EventInit")}} 的字典字段值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("KeyboardEvent")}} 构造的相关对象的接口
