---
title: 鼠标事件
slug: Web/API/MouseEvent
---

{{APIRef("DOM Events")}}

**`MouseEvent`** 接口指用户与指针设备（如鼠标）交互时发生的事件。使用此接口的常见事件包括：[`click`](/zh-CN/docs/Web/API/Element/click_event)、[`dblclick`](/zh-CN/docs/Web/API/Element/dblclick_event)、[`mouseup`](/zh-CN/docs/Web/API/Element/mouseup_event)、[`mousedown`](/zh-CN/docs/Web/API/Element/mousedown_event)。

`MouseEvent` 派生自 {{domxref("UIEvent")}}，{{domxref("UIEvent")}} 派生自 {{domxref("Event")}}。虽然 `MouseEvent.initMouseEvent()` 方法保持向后兼容性，但是应该使用 `MouseEvent()` 构造函数创建一个 `MouseEvent` 对象。

一些具体的事件都派生自 `MouseEvent`：{{domxref("WheelEvent")}} 和{{domxref("DragEvent")}}。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : 生成一个新的 MouseEvent 对象

## 属性

_这个接口也继承了{{domxref("UIEvent")}} 和 {{domxref("Event")}}原型上的方法，_

- {{domxref("MouseEvent.altKey")}} {{readonlyinline}}

  - : 当鼠标事件触发的时，如果 <kbd>alt</kbd> 键被按下，返回 true;

- {{domxref("MouseEvent.button")}} {{readonlyinline}}
  - : 当鼠标事件触发的时，如果鼠标按钮被按下（如果有的话），将会返回一个数值。
- {{domxref("MouseEvent.buttons")}} {{readonlyinline}}
  - : 当鼠标事件触发的时，如果多个鼠标按钮被按下（如果有的话），将会返回一个或者多个代表鼠标按钮的数字。
- {{domxref("MouseEvent.clientX")}} {{readonlyinline}}
  - : 鼠标指针在点击元素（DOM）中的 X 坐标。
- {{domxref("MouseEvent.clientY")}} {{readonlyinline}}
  - : 鼠标指针在点击元素（DOM）中的 Y 坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}
  - : 当鼠标事件触发时，如果 <kbd>control</kbd> 键被按下，则返回 true；
- {{domxref("MouseEvent.metaKey")}} {{readonlyinline}}
  - : 当鼠标事件触发时，如果 <kbd>meta</kbd> 键被按下，则返回 true；
- {{domxref("MouseEvent.movementX")}} {{readonlyinline}}
  - : 鼠标指针相对于最后[`mousemove`](/zh-CN/docs/Web/API/Element/mousemove_event)事件位置的 X 坐标。
- {{domxref("MouseEvent.movementY")}} {{readonlyinline}}
  - : 鼠标指针相对于最后[`mousemove`](/zh-CN/docs/Web/API/Element/mousemove_event)事件位置的 Y 坐标。
- {{domxref("MouseEvent.offsetX")}} {{readonlyinline}}{{experimental_inline}}
  - : 鼠标指针相对于目标节点内边位置的 X 坐标
- {{domxref("MouseEvent.offsetY")}} {{readonlyinline}}{{experimental_inline}}
  - : 鼠标指针相对于目标节点内边位置的 Y 坐标
- {{domxref("MouseEvent.pageX")}} {{readonlyinline}}{{experimental_inline}}
  - : 鼠标指针相对于整个文档的 X 坐标；
- {{domxref("MouseEvent.pageY")}} {{readonlyinline}}{{experimental_inline}}
  - : 鼠标指针相对于整个文档的 Y 坐标；
- {{domxref("MouseEvent.region")}} {{readonlyinline}}
  - : 返回被点击事件影响的点击区域的 id，如果没有区域被影响则返回 null。
- {{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}
  - : 鼠标事件的次要目标（如果有的话）
- {{domxref("MouseEvent.screenX")}} {{readonlyinline}}
  - : 鼠标指针相对于全局（屏幕）的 X 坐标；
- {{domxref("MouseEvent.screenY")}} {{readonlyinline}}
  - : 鼠标指针相对于全局（屏幕）的 Y 坐标；
- {{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}
  - : 当鼠标事件触发时，如果 <kbd>shift</kbd> 键被按下，则返回 true；
- {{domxref("MouseEvent.which")}} {{non-standard_inline}} {{readonlyinline}}
  - : 当鼠标事件触发时，表示被按下的按钮。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{readonlyinline}}
  - : 生成事件的类型（若干 `MOZ_SOURCE_*`常量如下列出）。可通过该属性获知鼠标事件是否由真实鼠标设备触发，亦或通过触摸事件触发（这可能影响处理坐标事件时的精确程度）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : 点击时施加的压力量。
- {{domxref("MouseEvent.x")}} {{experimental_inline}}{{readonlyinline}}
  - : {{domxref("MouseEvent.clientX")}}的别名。
- {{domxref("MouseEvent.y")}} {{experimental_inline}}{{readonlyinline}}
  - : {{domxref("MouseEvent.clientY")}}的别名。

## 常量

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : 正常点击所需的最小力量
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : 强制点击所需的最小力量

## 方法

_这个接口也继承了它的副方法{{domxref("UIEvent")}} 和{{domxref("Event")}}._

- {{domxref("MouseEvent.getModifierState()")}}
  - : 返回指定修饰键的当前状态。请参照{{domxref("KeyboardEvent.getModifierState")}}() 查看详情。
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : 初始化创建 MouseEvent 的值。如果这个事件已经被分派，这个方法将不会做任何事情。

## 示例

这个例子演示了使用 DOM 方法在复选框上模拟一个点击事件（使用编程的方式生成点击事件）。

```js
function simulateClick() {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  var cb = document.getElementById("checkbox"); //element to click on
  var canceled = !cb.dispatchEvent(evt);
  if (canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
document.getElementById("button").addEventListener("click", simulateClick);
```

```html
<p>
  <label><input type="checkbox" id="checkbox" /> Checked</label>
</p>
<p><button id="button">Click me</button></p>
```

点击按钮查看演示：

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 它的直接父级，{{domxref("UIEvent")}}.
