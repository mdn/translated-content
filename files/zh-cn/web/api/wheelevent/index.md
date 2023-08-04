---
title: WheelEvent
slug: Web/API/WheelEvent
---

{{APIRef("UI Events")}}

**`WheelEvent`** 接口表示用户滚动鼠标滚轮或类似的输入设备时触发的事件。

> **备注：** 该事件为标准规定的滚轮事件接口。早期的浏览器实现过 `MouseWheelEvent` 和 {{DOMxRef("MouseScrollEvent")}} 两种滚轮事件接口，但这两种接口皆非标准，加之各浏览器间对其兼容性极差。因而开发者应使用该标准事件接口取代这两个非标准接口。

> **备注：** 不要混淆 {{domxref("Element/wheel_event", "wheel")}} 事件和 {{domxref("Element/scroll_event", "scroll")}} 事件。`wheel` 事件的默认动作取决于浏览器实现。因此 `wheel` 事件不一定会触发 `scroll` 事件。即便 `wheel` 事件引发了文档内容的滚动行为，也不表示 `wheel` 事件中的 `delta*` 值恰好反映文档内容的滚动方向。因此，不要依赖 `delta*` 属性获知文档内容的滚动方向。而应该在 `scroll` 事件中监听目标的 {{domxref("Element.scrollLeft", "scrollLeft")}} 和 {{domxref("Element.scrollTop", "scrollTop")}} 的变化以推断滚动方向。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : 创建一个 `WheelEvent` 对象。

## 属性

_该接口继承了父接口 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("WheelEvent.deltaX")}} {{readonlyinline}}
  - : 返回一个 `double` 值，该值表示滚轮的横向滚动量。
- {{domxref("WheelEvent.deltaY")}} {{readonlyinline}}
  - : 返回一个 `double` 值，该值表示滚轮的纵向滚动量。
- {{domxref("WheelEvent.deltaZ")}} {{readonlyinline}}
  - : 返回一个 `double` 值，该值表示滚轮的 z 轴方向上的滚动量。
- {{domxref("WheelEvent.deltaMode")}} {{readonlyinline}}

  - : 返回一个 `unsigned long` 值，该值表示上述各 `delta*` 的值的单位。允许的值如下：

    | 常量                         | 值     | 描述                                                                        |
    | ---------------------------- | ------ | --------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | `delta*` 的单位为像素。                                                     |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | `delta*` 单位为行。每一次点击鼠标都会滚动一行内容，行高的计算取决于浏览器。 |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | `delta*` 单位为页。每一次点击鼠标都会滚动一页内容。                         |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个整数（32 位），表示以像素为单位的距离。
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个整数，表示水平滚动量。
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个整数，表示垂直滚动量。

> **备注：** [元素：mousewheel 事件](/zh-CN/docs/Web/API/Element/mousewheel_event)有关于已弃用的属性（`wheelDelta`、`wheelDeltaX` 和 `wheelDeltaY`）的额外说明。

## 方法

_该接口本身未定义方法，但继承了父接口 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}}、{{domxref("Event")}} 的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/wheel_event", "wheel")}} 事件
- 该接口取代的过时接口：
  - {{DOMxRef("MouseScrollEvent")}}（Gecko 内核浏览器）
