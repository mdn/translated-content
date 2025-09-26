---
title: Element：contextmenu 事件
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

**`contextmenu`** 事件会在用户尝试打开上下文菜单时触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发。

在后一种情况下，上下文菜单显示在聚焦元素的左下方，除非该元素是树形，在这种情况下，上下文菜单显示在当前行的左下方。

任何没有被禁用的鼠标右击事件（通过调用单击事件的 {{domxref("Event.preventDefault", "preventDefault()")}} 方法）将会使得 `contextmenu` 事件在目标元素上被触发。

> [!NOTE]
> Firefox 中的一个例外情况是：如果用户在右键单击时按住 <kbd>Shift</kbd> 键，则将显示上下文菜单，而不会触发 `contextmenu` 事件。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("contextmenu", (event) => {});

oncontextmenu = (event) => {};
```

## 事件类型

{{domxref("PointerEvent")}}，继承自 {{domxref("MouseEvent")}}。

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> 在规范的早期版本中，该事件的事件类型是 {{domxref("MouseEvent")}}，Firefox 和 Safari 中传递的仍然是这种类型。

## 事件属性

_本接口从 {{domxref("MouseEvent")}} 和 {{domxref("Event")}} 中继承属性。_

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示传感器（指针或触控笔）轴与设备屏幕 X-Y 平面之间的角度。
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示 Y-Z 平面与包含传感器（指针或测针）轴和 Y 轴的平面之间的夹角。
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

## 示例

### 取消 `contextmenu` 事件

在下面的例子中，第一段内容被触发的 `contextmenu` 事件的默认行为被 `preventDefault()` 取消了，因此，在第一段右击鼠标时什么也不会发生，但是右键单击第二段内容时，则会出现标准的菜单内容，与平时右击普通页面出现的菜单内容一致。

> [!NOTE]
> 在 Firefox 中，如果在右键单击时按住 <kbd>Shift</kbd> 键，则会显示上下文菜单，而不会触发 `contextmenu` 事件。因此，取消事件并不能阻止上下文菜单的显示。

### HTML

```html
<p id="noContextMenu">这个段落右键菜单已被禁用。</p>
<p>但是这个段落没有被禁用。</p>
```

### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

### 结果

{{EmbedLiveSample("取消 contextmenu 事件")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
