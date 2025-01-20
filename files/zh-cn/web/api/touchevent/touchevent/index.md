---
title: TouchEvent：TouchEvent() 构造函数
slug: Web/API/TouchEvent/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

**`TouchEvent()`** 构造函数用于创建新的 {{domxref("TouchEvent")}} 对象。

> [!NOTE]
> 如果使用此构造函数构造合成事件，出于安全原因，该事件将不被*信任*。只有浏览器生成的 `TouchEvent` 对象才是可信的，只有可信的事件才会触发默认操作。

## 语法

```js-nolint
new TouchEvent(type)
new TouchEvent(type, options)
```

### 参数

- `type`
  - : 包含事件名称的字符串。区分大小写，浏览器将其设置为 `touchstart`、`touchend`、`touchmove`、`touchcancel`。
- `options` {{optional_inline}}
  - : 一个对象*除了在 {{domxref("UIEvent/UIEvent", "UIEvent()")}} 中定义的属性外*，还具有以下属性：
    - `touches` {{optional_inline}}
      - : {{domxref("TouchList")}}，默认为空，是当前接触表面的每个接触点的对象列表。
    - `targetTouches` {{optional_inline}}
      - : {{domxref("TouchList")}}，默认为空，是触摸表面的接触点的对象列表，*并且*每个触点都是从当前事件的目标元素上开始的。
    - `changedTouches` {{optional_inline}}
      - : 默认为 `[]`，类型为 `Touch[]`，是促成事件的每个接触点的对象列表。
    - `ctrlKey` {{optional_inline}}
      - : 一个布尔值，默认为 `false`。指示是否同时按下了 <kbd>ctrl</kbd> 键。
    - `shiftKey` {{optional_inline}}
      - : 一个布尔值，默认为 `false`。指示是否同时按下了 <kbd>shift</kbd> 键。
    - `altKey` {{optional_inline}}
      - : 一个布尔值，默认为 `false`。指示是否同时按下了 <kbd>alt</kbd> 键。
    - `metaKey` {{optional_inline}}
      - : 一个布尔值，默认为 `false`。指示是否同时按下了 <kbd>meta</kbd> 键。

### 返回值

一个新的 {{domxref("TouchEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TouchEvent")}}，所构造的对象的接口。
