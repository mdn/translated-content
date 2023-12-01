---
title: mousewheel
slug: Web/API/Element/mousewheel_event
---

{{APIRef}} {{deprecated_header}} {{ Non-standard_header() }}

*过时*且*非标准*的 `mousewheel` 事件在{{ domxref("Element", "元素", "", 1) }}上异步触发，以在操作鼠标滚轮或类似设备时提供更新。`mousewheel` 事件从未成为任何标准的一部分，虽然它被多个浏览器实现，但 Firefox 从未实现过该事件。

> **备注：** 请改用标准的 `wheel` 事件，而不是这个过时的事件。

## 语法

在诸如 `addEventListener()` 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("mousewheel", (event) => {});

onmousewheel = (event) => {};
```

## 事件类型

{{ domxref("wheelEvent") }}。继承自 {{ domxref("Event") }}。

{{InheritanceDiagram("WheelEvent")}}

## 事件属性

_该接口继承了其祖先接口 {{DOMxRef("MouseEvent")}}、{{DOMxRef("UIEvent")}} 和 {{DOMxRef("Event")}} 的属性。_

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}

  - : 返回一个表示水平滚动量的双精度浮点数（`double`）。

- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}

  - : 返回一个表示垂直滚动量的双精度浮点数（`double`）。

- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}

  - : 返回一个表示 Z 轴滚动量的双精度浮点数（`double`）。

- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : 返回一个无符号长整型（`unsigned long`)，其表示 `delta*` 值的滚动数量的单位。允许的值如下：

    | 常量                         | 值     | 描述                                                                                    |
    | ---------------------------- | ------ | --------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | `delta*` 值以像素为单位为准。                                                           |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | `delta*` 值以行为单位指定。每次鼠标单击滚动一个内容行，而计算行高度的方法取决于浏览器。 |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | `delta*` 值以页为单位指定。每次鼠标单击滚动一个页面的内容。                             |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}

  - : 返回一个表示像素距离的整数（32 位）。

- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}

  - : 返回一个表示水平滚动量的整数。

- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}

  - : 返回一个表示垂直滚动量的整数。

## 详细属性

{{domxref("UIEvent/detail", "detail")}} 属性的值始终为零，除了 Opera 之外。Opera 使用 `detail` 属性与仅适用于 Firefox 的 {{domxref("Element.DOMMouseScroll_event", "DOMMouseScroll")}} 事件的 `detail` 值类似，该值表示以行为单位的滚动距离，负值表示滚动向底部或右侧移动，正值表示向顶部或左侧滚动。

> **备注：** 在 macOS 上，滚动距离（以及 `detail` 的值）是根据加速滚动距离计算的。

## wheelDelta、wheelDeltaX 和 wheelDeltaY 的值

`wheelDelta` 属性值是一个抽象值，表示滚轮转动的距离。如果滚轮向用户旋转，则该值为正，否则为负。这意味着 delta 值的符号与 DOM Level 3 事件的 `wheel` 属性不同。然而，这些值的数量意义在不同的浏览器中也不相同。详见以下说明。

IE 和 Opera（Presto）仅支持 `wheelDelta` 属性，不支持水平滚动。

`wheelDeltaX` 属性值表示沿水平轴的 `wheelDelta` 属性值。当用户操作设备向右滚动时，该值为负。反之，即向左滚动时，该值为正。

`wheelDeltaY` 属性值表示沿垂直轴的 `wheelDelta` 属性值。该值的符号与 `wheelDelta` 属性值相同：向用户滚动时为正，向远离用户的方向滚动时为负。

### Chrome

在 Windows 上，该值与 `WM_MOUSEWHEEL` 或 `WM_MOUSEHWHEEL` 的 delta 值相同。并且，即使系统设置的滚动量为页面滚动，该值也不会改变，即该值与 Windows 上的 IE 相同。

在 Linux 上，本机滚轮事件每次的值为 `120` 或 `-120`。这使得行为与 Windows 上的 IE 和 Chrome 相同。

如果**设备**支持连续滚动（例如，MacBook 的触摸板或可以平滑旋转的鼠标滚轮），则该值从加速滚动量计算而得。在这种情况下，该值与 Safari 一致。

如果设备**不**支持连续滚动（通常是旧的无法平滑旋转的鼠标滚轮），则该值从非加速滚动量（每个齿轮 120）计算而得。在这种情况下，该值与 Safari 不同。

这种差异对 Web 应用程序开发人员来说是一个严重的问题。也就是说，Web 开发人员无法知道 `mousewheel` 事件是由哪个设备引起的。

### Safari

该值始终是从加速滚动量计算而来的。这与除支持连续滚动的设备的 Chrome 之外的其他浏览器非常不同。

### Opera（Presto）

该值始终是 `detail` 属性值 ✕ `40`。

在 Windows 上，由于 `detail` 属性值是从实际滚动量计算得出的，因此该值与其他浏览器不同，除非系统设置或页面中的每个滚动步距为 3 行。

在 Linux 上，每个原生滚轮事件的值为 `80` 或 `-80`。这与其他浏览器不同。

在 Mac 上，`detail` 属性值是从原生事件的加速滚动量计算得出的。该值通常比 Safari 或 Chrome 的值要大得多。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- 请改用标准的 {{domxref("Element/wheel_event", "wheel")}} 事件来监听。
