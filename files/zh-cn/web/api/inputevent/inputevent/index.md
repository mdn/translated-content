---
title: InputEvent：InputEvent() 构造函数
slug: Web/API/InputEvent/InputEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`InputEvent()`** 构造函数创建一个新的 {{domxref("InputEvent")}} 对象。

## 语法

```js-nolint
new InputEvent(type)
new InputEvent(type, options)
```

### 参数

- `type`
  - : 表示事件名称的字符串。区分大小写，浏览器将其设置为 `beforeinput` 或者 `input`。
- `options` {{optional_inline}}
  - : 一个对象，_除了 {{domxref("UIEvent/UIEvent", "UIEvent()")}} 中定义的属性之外_，还具有以下属性：
    - `inputType` {{optional_inline}}
      - : 指定可编辑内容更改类型的字符串，例如插入、删除或格式化文本。
    - `data` {{optional_inline}}
      - : 包含要插入的字符的字符串。如果更改未插入文本（例如删除字符时），则其可能为空字符串。
    - `isComposing` {{optional_inline}}
      - : 一个布尔值，指示事件是组合会话的一部分，这意味着它在 {{domxref("Element/compositionstart_event", "compositionstart")}} 事件之后，但在 {{domxref("Element/compositionend_event", "compositionend")}} 事件之前。默认值为 `false`。

## 返回值

一个 {{domxref("InputEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("InputEvent")}}，它构造的对象所属的接口。
