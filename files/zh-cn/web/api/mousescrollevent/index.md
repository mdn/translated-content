---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
---

{{APIRef("UI Events")}}{{Non-standard_Header}}{{Deprecated_Header}}

`MouseScrollEvent` 事件对象代表了当用户在滚动鼠标滚轮或操作其他类似的输入设备时触发的事件。

要优先使用标准化过的 [WheelEvent](/zh-CN/docs/Web/API/WheelEvent) 来代替该陈旧的事件对象。

## 方法概述

```webidl
void initMouseScrollEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in nsIDOMAbstractView viewArg,
  in long detailArg,
  in long screenXArg,
  in long screenYArg,
  in long clientXArg,
  in long clientYArg,
  in boolean ctrlKeyArg,
  in boolean altKeyArg,
  in boolean shiftKeyArg,
  in boolean metaKeyArg,
  in unsigned short buttonArg,
  in nsIDOMEventTarget relatedTargetArg,
  in long axis);
```

## 属性

| 名称   | 类型   | 描述                               |
| ------ | ------ | ---------------------------------- |
| `axis` | `long` | 表明鼠标滚轮滚动的方向（**只读**） |

## 常量

### Delta 模式

| 名称              | 值     | 描述                               |
| ----------------- | ------ | ---------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | 该事件是由鼠标滚轮的横向滚动触发的 |
| `VERTICAL_AXIS`   | `0x02` | 该事件是由鼠标滚轮的纵向滚动触发的 |

## 方法

### initMouseScrollEvent()

查看 [nsIDOMMouseScrollEvent::initMouseScrollEvent()](/zh-CN/docs/XPCOM_Interface_Reference/nsIDOMMouseScrollEvent#initMouseScrollEvent%28%29)。

## 滚轮相关事件对比

| 事件类型                                                           | 事件对象                                                 | 是否标准                                                                  | 兼容性              |
| ------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------- |
| [mousewheel](/zh-CN/docs/Web/API/Element/mousewheel_event)         | [MouseWheelEvent](/zh-CN/docs/Web/API/WheelEvent)        | 非标准                                                                    | 只有 Firefox 不支持 |
| [DOMMouseScroll](/zh-CN/docs/Web/API/Element/DOMMouseScroll_event) | [MouseScrollEvent](/zh-CN/docs/Web/API/MouseScrollEvent) | 非标准                                                                    | 只有 Firefox 支持   |
| [wheel](/zh-CN/docs/Web/API/Element/wheel_event)                   | [WheelEvent](/zh-CN/docs/Web/API/WheelEvent)             | [DOM Level 3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-wheel) | Firefox 17+ ie9+    |

## 浏览器兼容性

{{Compat}}

## 相关链接

- `DOMMouseScroll`
- `MozMousePixelScroll`
- 非 Gecko 浏览器中的非标准的鼠标滚轮事件对象：{{ domxref("MouseWheelEvent") }}
- 被标准化的鼠标滚轮事件对象：{{ domxref("WheelEvent") }}
