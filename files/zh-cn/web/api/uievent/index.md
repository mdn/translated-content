---
title: UIEvent
slug: Web/API/UIEvent
---

{{APIRef("DOM Events")}}

`UIEvent` 接口表示简单的用户界面事件。

`UIEvent` 是从 {{domxref("Event")}} 派生出来的。尽管 {{domxref("UIEvent.initUIEvent()")}} 方法为了向后兼容而一直保留着，但是你应该使用 {{domxref("UIEvent.UIEvent", "UIEvent()")}} 构造器来创建 `UIEvent` 对象。

某些接口是这个的直接或间接后代：{{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}}, 和{{domxref("CompositionEvent")}}.

## Constructors

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : 创建一个 `UIEvent` 对象

## 属性

_也继承了父代 {{domxref("Event")}} 的一些属性。_

- {{domxref("UIEvent.cancelBubble")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : 返回一个 {{jsxref("Boolean")}}，表示该事件的冒泡是否被取消。
- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : Returns a `long` with details about the event, depending on the event type.
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxref("UIEvent.pageX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回事件相对于整个文档的水平坐标。
- {{domxref("UIEvent.pageY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回事件相对于整个文档的垂直坐标。
- {{domxref("UIEvent.sourceCapabilities")}} {{non-standard_inline}} {{readonlyinline}}
  - : 返回输入设备功能接口的一个实例，它提供有关负责生成 touch 事件的物理设备的信息。
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : 返回一个包含了产生该事件的视图的 {{domxref("WindowProxy")}} 。
- {{domxref("UIEvent.which")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回一个对应（键盘）按下的数字类型的 `keyCode` ，或者一个字母数字键按下时的字符码 (`charCode`)。

## 方法

_也继承了父代 {{domxref("Event")}} 的一些方法。_

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : 初始化一个 `UIEvent` 对象。如果事件已经被分派，这个方法什么都不做。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Introduction to events](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}
