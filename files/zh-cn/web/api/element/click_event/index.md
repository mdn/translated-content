---
title: Element：click 事件
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

当发生以下任一情况时，元素会收到 **`click`** 事件：

- 定点设备按钮（例如鼠标的主按钮）在指针位于元素内时被按下并释放。
- 在该元素上执行了触摸手势。
- 任何等效于点击的用户交互，例如在元素获得焦点时按下 <kbd>Space</kbd> 键或 <kbd>Enter</kbd> 键。请注意，这仅适用于具有默认按键事件处理程序的元素，因此不包括通过设置 [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性而变得可聚焦的其他元素。

如果在某个元素上按下按钮，并在释放按钮之前将指针移出该元素，则事件会在同时包含这两个元素的最具体的祖先元素上触发。

`click` 会在 {{domxref("Element/mousedown_event", "mousedown")}} 和 {{domxref("Element/mouseup_event", "mouseup")}} 事件均已按该顺序触发之后触发。

该事件是与设备无关的事件——意味着它可由触摸、键盘、鼠标以及辅助技术提供的任何其他机制激活。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}，继承自 {{domxref("MouseEvent")}}。

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> 在规范的早期版本中，该事件的事件类型是 {{domxref("MouseEvent")}}。更多信息请参见[浏览器兼容性](#浏览器兼容性)。

## 事件属性

_本接口从 {{domxref("MouseEvent")}} 和 {{domxref("Event")}} 中继承属性。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示传感器（指针或触控笔）轴与设备屏幕 X-Y 平面之间的角度。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示 Y-Z 平面与包含传感器（指针或触控笔）轴和 Y 轴的平面之间的夹角。
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : 引起事件的指针的唯一标识符。
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : 指针接触几何图形的宽度（X 轴上的大小），单位为 CSS 像素。
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : 指针接触几何图形的高度（Y 轴上的大小），单位为 CSS 像素。
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : 指针输入在 `0` 至 `1` 范围内的归一化压力，其中 `0` 和 `1` 分别代表硬件能够检测到的最小和最大压力。
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : 指针输入的归一化切向压力（也称为料筒压力或[料筒应力](https://en.wikipedia.org/wiki/Cylinder_stress)），范围为 `-1` 至 `1`，其中 `0` 为控制器的中间位置。
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面与包含指针（如手写笔）轴和 Y 轴的平面之间的平面角度（度数，范围为 `-90` 至 `90`）。
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面与包含指针（如手写笔）轴和 X 轴的平面之间的平面角度（度数，范围为 `-90` 至 `90`）。
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : 指针（如手写笔）绕其主轴的顺时针旋转角度，单位为度，数值范围为 `0` 至 `359`。
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : 表示引起事件的设备类型（鼠标、笔、触摸等）。
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : 指示指针是否代表该指针类型的主指针。

## 使用说明

传入 `click` 事件处理程序的 {{domxref("PointerEvent")}} 对象，其 {{domxref("UIEvent/detail", "detail")}} 属性会被设置为 {{domxref("Event.target", "target")}} 被点击的次数。换言之，双击时 `detail` 为 2，三击时为 3，依此类推。该计数器会在一段短暂的无点击间隔后重置；该间隔具体多长可能因浏览器和平台而异。该间隔也很可能受用户偏好设置影响；例如，无障碍选项可能会延长该间隔，以便更容易通过自适应界面执行多次点击。

## 示例

本示例显示在 {{HtmlElement("button")}} 上连续点击的次数。

### HTML

```html
<button>点击</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `点击次数：${event.detail}`;
});
```

### 结果

尝试快速、反复地点击按钮以增加点击次数。如果在点击之间稍作停顿，计数将会重置。

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
