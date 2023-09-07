---
title: Element：滚轮事件
slug: Web/API/Element/wheel_event
---

{{APIRef}}

**滚轮**（**`wheel`**）事件会在滚动鼠标滚轮或操作其他类似输入设备时触发。

滚轮事件取代了已被弃用的非标准 {{domxref("Element/mousewheel_event", "mousewheel")}} 事件。

> **备注：** 不要将滚轮事件与 [`scroll`](/zh-CN/docs/Web/API/Document/scroll_event) 事件混淆。滚轮事件的默认行为是取决于实现的，所以不一定会触发 `scroll` 事件。即便如此，滚轮事件的 `delta*` 值也不一定能反映文档内容的实际滚动方向。因此，请不要依赖滚轮事件的 `delta*` 值来获得滚动方向。请通过检测目标的 `scroll` 事件的 {{domxref("Element.scrollLeft", "scrollLeft")}} 和 {{domxref("Element.scrollTop", "scrollTop")}} 这两个值代替。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

## 事件类型

{{domxref("WheelEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("WheelEvent")}}

## 事件属性

_此接口从父接口：{{DOMxRef("MouseEvent")}}、{{DOMxRef("UIEvent")}} 和 {{DOMxRef("Event")}} 继承属性。_

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : 返回一个浮点数（`double`），表示水平方向的滚动量。
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : 返回一个浮点数（`double`），表示垂直方向的滚动量。
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : 返回一个浮点数（`double`）表示 z 轴方向的滚动量。
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : 返回一个无符号长整型数（`unsigned long`），表示 `delta*` 值滚动量的单位。允许的值为：

    | 常量                         | 值     | 描述                                                                                  |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | `delta*` 值以像素为单位。                                                             |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | `delta*` 值以行为单位。每次鼠标单击都会滚动一行内容，其中行高计算的方法取决于浏览器。 |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | `delta*` 值以页为单位。每次鼠标单击都会滚动一页内容。                                 |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个（32 位）整型数，表示像素距离。
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个整型数，表示水平滚动量。
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 返回一个整型数，表示垂直滚动量。

## 示例

### 通过滚轮缩放元素

此示例展示了如何使用鼠标（或其他定点设备）滚轮缩放元素。

```html
<div>使用鼠标滚轮来进行缩放</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```js
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

{{EmbedLiveSample("通过滚轮缩放元素", 700, 300)}}

### 使用 addEventListener 的等价形式

上面的事件处理器也可以通过 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 方法来设置：

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WheelEvent")}}
- [Document：`wheel` 事件](/zh-CN/docs/Web/API/Document/wheel_event)
