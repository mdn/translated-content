---
title: 元素：click 事件
slug: Web/API/Element/click_event
---

{{APIRef}}

当定点设备的按钮（通常是鼠标的主键）在一个元素上被按下和放开时，`click` 事件就会被触发。

如果在一个元素上按下按钮，而将指针移到元素外再释放按钮，则在包含这两个元素的最具体的父级元素上触发事件。

`click` 事件会在 {{domxref("Element/mousedown_event", "mousedown")}} 和 {{domxref("Element/mouseup_event", "mouseup")}} 事件依次触发后触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## 事件类型

一个 {{domxref("MouseEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_该接口同样继承了其父级（{{domxref("UIEvent")}} 和 {{domxref("Event")}}）的属性。_

- {{domxref("MouseEvent.altKey")}} {{readonlyinline}}
  - : 若在按下 <kbd>alt</kbd> 键的情况下触发鼠标事件，则返回 `true`。
- {{domxref("MouseEvent.button")}} {{readonlyinline}}
  - : 触发鼠标事件时按下的按钮编号（如果适用）。
- {{domxref("MouseEvent.buttons")}} {{readonlyinline}}
  - : 触发鼠标事件时按下的按钮（如果有按钮被按下）。
- {{domxref("MouseEvent.clientX")}} {{readonlyinline}}
  - : 鼠标指针在本地（DOM）坐标系中的 X 坐标。
- {{domxref("MouseEvent.clientY")}} {{readonlyinline}}
  - : 鼠标指针在本地（DOM）坐标系中的 Y 坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}
  - : 若在按下 <kbd>control</kbd> 键的情况下触发鼠标事件，则返回 `true`。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回指针相对于当前触发事件的层级的横坐标。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : 返回指针相对于当前触发事件的层级的纵坐标。
- {{domxref("MouseEvent.metaKey")}} {{readonlyinline}}
  - : 若在按下 <kbd>meta</kbd> 键的情况下触发鼠标事件，则返回 `true`。
- {{domxref("MouseEvent.movementX")}} {{readonlyinline}}
  - : 返回鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件的 X 坐标。
- {{domxref("MouseEvent.movementY")}} {{readonlyinline}}
  - : 返回鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件的 Y 坐标。
- {{domxref("MouseEvent.offsetX")}} {{readonlyinline}}
  - : 返回鼠标指针相对于目标节点内填充边的 X 坐标。
- {{domxref("MouseEvent.offsetY")}} {{readonlyinline}}
  - : 返回鼠标指针相对于目标节点内填充边的 Y 坐标。
- {{domxref("MouseEvent.pageX")}} {{readonlyinline}}
  - : 返回鼠标指针相对于整个文档的 X 坐标。
- {{domxref("MouseEvent.pageY")}} {{readonlyinline}}
  - : 返回鼠标指针相对于整个文档的 Y 坐标。
- {{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}
  - : 返回与事件关联的次要目标（如果存在）。
- {{domxref("MouseEvent.screenX")}} {{readonlyinline}}
  - : 返回鼠标指针在全局（屏幕）坐标系中的 X 坐标。
- {{domxref("MouseEvent.screenY")}} {{readonlyinline}}
  - : 返回鼠标指针在全局（屏幕）坐标系中的 Y 坐标。
- {{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}
  - : 若在按下 <kbd>shift</kbd> 键的情况下触发鼠标事件，则返回 `true`。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline}} {{readonlyinline}}
  - : 触发事件的设备类型（一个 `MOZ_SOURCE_*` 常量）。这可以让你确定鼠标事件是由实际的鼠标还是由触摸事件生成（这可能会影响解析与事件相关联的坐标的准确度）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline}} {{readonlyinline}}
  - : 单击时施加的压力。
- {{domxref("MouseEvent.x")}} {{readonlyinline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{readonlyinline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

## 使用说明

{{domxref("MouseEvent")}} 对象会被传入到 `click` 的事件处理器中，其 {{domxref("UIEvent/detail", "detail")}} 属性设置了 {{domxref("Event.target", "target")}} 被点击的次数。换句话说，在双击时，`detail` 是 2；三击时是 3；以此类推。该计数器会在没有任何点击的情况下会很快被重置，而间隔多长的时间则因浏览器和平台而异。间隔时间也可能受到用户偏好设置的影响；例如，无障碍选项可能会延长间隔时间，以便在自适应界面上更轻松地执行多次点击。

### Internet Explorer

IE 8 和 9 中存在一个错误，在将 {{cssxref("background-color")}} 的计算值为 [`transparent`](/zh-CN/docs/Web/CSS/color_value#transparent_关键字) 的元素覆盖在其他元素之上时，该元素不会收到 `click` 事件。`click` 事件将只会在底层元素上触发。参见[在线演示](https://jsfiddle.net/YUKma/show/)。

该错误的解决方案：

- 仅适用于 IE 9：

  - 设置 {{cssxref("background-color")}}`: rgba(0,0,0,0)`
  - 设置 {{cssxref("opacity")}}`: 0` 以及为 {{cssxref("background-color")}} 设置一个明确的、除 [`transparent`](/zh-CN/docs/Web/CSS/color_value#transparent_关键字) 以外的值。

- 适用于 IE8 和 IE9：设置 `filter: alpha(opacity=0);` 以及为 {{cssxref("background-color")}} 设置一个明确的、除 [`transparent`](/zh-CN/docs/Web/CSS/color_value#transparent_关键字) 以外的值。

### Safari 手机版

safari 手机版 7.0+（也可能是更早的版本）[存在一个错误](https://bugs.webkit.org/show_bug.cgi?id=153887)，当一个元素为交互式元素（例如：{{HTMLElement("div")}}），且没有直接将事件监听器绑定在它们自身（即，适用[事件委托](https://davidwalsh.name/event-delegate)）时，将无法触发在该元素上触发 `click` 事件。查看[在线演示](https://jsfiddle.net/cvrhulu/k9t0sdnf/show/)。也可以看 [Safari 的可点击元素](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) 和[可点击元素的定义](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#/apple_ref/doc/uid/TP40006511-SW7)。

解决方法如下：

- 为该元素或者祖先元素，设置 {{cssxref("cursor")}}`: pointer;` 样式。
- 为该元素或者祖先元素（不包括 {{HTMLElement("body")}}），设置 `onclick="void(0)"` 属性。
- 使用可点击元素如 {{HTMLElement("a")}}，代替不可交互元素如 {{HTMLElement("div")}}。
- 不使用 `click` 的[事件委托](https://davidwalsh.name/event-delegate)。

Safari 手机版里，以下元素是交互式的（因此不会受到上述错误的影响）：

- {{HTMLElement("a")}}（需要有 `href`）
- {{HTMLElement("area")}}（需要有 `href`）
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}}（需要与 form 控件关联）
- {{HTMLElement("textarea")}}
- _这份清单并不完整，你可以帮助 MDN 做扩展。_

## 示例

该示例会显示对 {{HtmlElement("button")}} 的连续点击次数。

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### 结果

尝试快速、重复地点击按钮以增加点击次数。如果你在两次点击之间停止一会儿，计数器将会重置。

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
