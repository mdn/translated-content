---
title: Element：mouseout 事件
slug: Web/API/Element/mouseout_event
---

{{APIRef}}

**`mouseout`** 事件在定点设备（通常是鼠标）移动至{{domxref("Element", "元素", "", 1)}}或其子元素之外时，会在该元素上触发。

当指针从一个元素移入其子元素时，因为子元素遮盖了父元素的可视区域，所以 `mouseout` 也会被触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("mouseout", (event) => {});

onmouseout = (event) => {};
```

## 事件类型

一个 {{domxref("MouseEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_这个接口也继承其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>alt</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时，按下按钮的编号（如果适用）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时，按下的按钮（如果存在）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 X 轴坐标。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 Y 轴坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>control</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>meta</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件位置的 X 轴坐标。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件位置的 Y 轴坐标。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 X 轴坐标。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 Y 轴坐标。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 X 轴坐标。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 Y 轴坐标。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 事件的次要目标（如果存在）。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 X 轴坐标。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 Y 轴坐标。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>shift</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 生成事件的设备类型（`MOZ_SOURCE_*` 常量之一）。例如，这允许你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 单击时施加的压力大小。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

## 示例

以下示例将说明如何使用 `mouseout` 事件。

### mouseout 和 mouseleave

以下示例说明了 `mouseout` 和 {{domxref("Element/mouseleave_event", "mouseleave")}} 事件的区别。为 {{HTMLElement("ul")}} 添加 `mouseleave` 事件，以在鼠标离开 `<ul>` 元素时将列表变成紫色。添加 `mouseout` 事件，以在鼠标移出目标元素时将目标元素变成橙色。

当你尝试的时候，你会发现 `mouseout` 被添加到单个列表项目上，而 `mouseleave` 则应用于整个列表，这取决于列表项目的层次关系，而列表项目遮盖了底层的 `<ul>`。

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// 当鼠标移出 <ul> 元素时，短暂地将列表变成紫色
test.addEventListener(
  "mouseleave",
  (event) => {
    // 高亮 mouseleave 的目标
    event.target.style.color = "purple";

    // 延迟一秒后重置颜色
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// 当鼠标离开 <li> 元素时，短暂地将其变成橙色
test.addEventListener(
  "mouseout",
  (event) => {
    // 高亮 mouseout 的目标
    event.target.style.color = "orange";

    // 延迟 500ms 后重置颜色
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
```

#### 结果

{{EmbedLiveSample("mouseout 和 mouseleave", 640, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
