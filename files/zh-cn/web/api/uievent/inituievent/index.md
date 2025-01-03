---
title: UIEvent：initUIEvent() 方法
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}} {{deprecated_header}}

**`UIEvent.initUIEvent()`** 方法在创建 UI 事件后对其进行初始化。

以这种方式初始化的事件必须使用 {{domxref("Document.createEvent()")}} 方法创建。使用 {{ domxref("EventTarget.dispatchEvent()") }} 派发前必须调用该方法来设置事件。一旦派发，它就什么都不做了。

> [!WARNING]
> 请勿再使用此方法，因为它已被弃用。
>
> 请使用特定的事件构造函数代替，例如：{{domxref("UIEvent.UIEvent", "UIEvent()")}}。[创建和触发事件](/zh-CN/docs/Web/Events/Creating_and_triggering_events)页面提供了有关使用方法的更多信息。

## 语法

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### 参数

- `type`
  - : 定义事件类型的字符串。
- `canBubble`
  - : 一个布尔值，决定事件是否应该在事件链中冒泡。一旦设置，只读属性 {{domxref("Event.bubbles")}} 将给出其值。
- `cancelable`
  - : 一个布尔值，定义事件是否可以取消。一旦设置，只读属性 {{domxref("Event.cancelable")}} 将给出其值。
- `view`
  - : 一个与事件相关联的 {{glossary("WindowProxy")}}。
- `detail`
  - : 一个 `unsigned long` 值，根据事件的类型指定有关事件的一些详细信息。对于鼠标事件，它表示在给定的屏幕位置上单击鼠标的次数。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const e = document.createEvent("UIEvent");
// 创建一个冒泡的点击事件，可以取消，
// 并且其 view 和 detail 属性分别初始化为 window 和 1
e.initUIEvent("click", true, true, window, 1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("UIEvent") }}
- 使用构造函数 {{domxref("UIEvent.UIEvent", "UIEvent()")}} 替代这个已经弃用的方法。也可以使用更具体的构造函数。
