---
title: UIEvent：UIEvent() 构造函数
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}

**`UIEvent()`** 构造函数创建一个新的 {{domxref("UIEvent")}} 对象。

> [!NOTE]
> 如果你使用该构造函数构造合成事件，那么出于安全原因，该事件不会被*信任*。只有浏览器生成的 `UIEvent` 对象是受信任的，只有受信任的事件才会触发默认动作。

## 语法

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### 参数

- `type`
  - : 表示事件名称的字符串。大小写敏感，浏览器会将其设置为 `load`、`unload`、`abort`、`error` 或 `select`。
- `options` {{optional_inline}}

  - : 一个对象，_除了 {{domxref("Event/Event", "Event()")}} 中定义的属性外_，还可以具有以下属性：
    - `detail` {{optional_inline}}
      - : 一个表示与事件关联的事件相关值的数字。默认值为 `0`，{{domxref("UIEvent.detail")}} 列出了用于标准事件的语义。
    - `view` {{optional_inline}}
      - : 与事件关联的 {{domxref("Window")}}。默认值为 `null`。
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : 提供有关负责生成触摸事件的物理设备的信息的 {{domxref("InputDeviceCapabilities")}} 对象。

### 返回值

一个新的 {{domxref("UIEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其构造的对象的接口：{{domxref("UIEvent")}}。
