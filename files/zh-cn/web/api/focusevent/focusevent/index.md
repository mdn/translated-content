---
title: FocusEvent：FocusEvent() 构造函数
slug: Web/API/FocusEvent/FocusEvent
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("UI Events")}}

**`FocusEvent()`** 构造函数返回一个新创建的 {{domxref("FocusEvent")}} 对象，并可选地指定一个 {{domxref("EventTarget")}}。当事件同时具有源目标和目标目标时，`relatedTarget` 的值必须设置为另一个目标。

## 语法

```js-nolint
new FocusEvent(type)
new FocusEvent(type, options)
```

### 参数

_`FocusEvent()` 构造函数还会继承来自 {{domxref("UIEvent.UIEvent", "UIEvent()")}} 和 {{domxref("Event.Event", "Event()")}} 的参数。_

- `type`
  - : 表示事件名称的字符串。它区分大小写，浏览器会将其设置为 `blur`、`focus`、`focusin` 或 `focusout`。
- `options` {{optional_inline}}
  - : 一个对象。除 {{domxref("UIEvent/UIEvent", "UIEvent()")}} 中定义的属性外，还可以具有以下属性：
    - `relatedTarget` {{optional_inline}}
      - : 一个 {{domxref("EventTarget")}}，表示 {{domxref("FocusEvent")}} 的次要目标。默认值为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("FocusEvent")}} 接口。
