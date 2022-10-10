---
title: mousedown
slug: Web/API/Element/mousedown_event
---

{{APIRef}}

`mousedown` 事件在指针设备按钮按下时触发。

## 常规信息

- 规范
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mousedown)
- 接口
  - : {{domxref("MouseEvent")}}
- 是否冒泡
  - : 是
- 可取消默认行为
  - : 是
- 目标对象
  - : 元素（Element）
- 默认行为
  - : 多种：开始 drag/drop 操作；开始文本选择、开始滚动或移动操作（若支持该操作时，可与鼠标中键协同）

## 属性

| 属性                                     | 类型                                 | 描述                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | 事件对应的 DOM 树顶级顶级元素                                                                                                                                                                                                                                  |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}     | 事件类型                                                                                                                                                                                                                                                       |
| `bubbles` {{readonlyInline}}       | Boolean                              | 事件是否冒泡                                                                                                                                                                                                                                                   |
| `cancelable` {{readonlyInline}}    | `Boolean`                            | 事件是否可取消                                                                                                                                                                                                                                                 |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (文档 `window`)                                                                                                                                                                                               |
| `detail` {{readonlyInline}}        | `long` (`float`)                     | 短时间内通过连续点击每次加一自增的计数值                                                                                                                                                                                                                       |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 挂载监听器的节点                                                                                                                                                                                                                                               |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 对于 `mouseover`, `mouseout`, `mouseenter` 及 `mouseleave` 事件：该事件及其互补事件（如 `mouseleave` 对应 `mouseenter` 事件)。不存在时为 `null`                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                 | 全局屏幕坐标系下鼠标指针的 X 轴坐标值                                                                                                                                                                                                                          |
| `screenY` {{readonlyInline}}       | long                                 | 全局屏幕坐标系下鼠标指针的 Y 轴坐标值                                                                                                                                                                                                                          |
| `clientX` {{readonlyInline}}       | long                                 | 当前（DOM 元素）坐标系下鼠标指针的 X 轴坐标值                                                                                                                                                                                                                  |
| `clientY` {{readonlyInline}}       | long                                 | 当前（DOM 元素）坐标系下鼠标指针的 Y 轴坐标值                                                                                                                                                                                                                  |
| `button` {{readonlyInline}}        | unsigned short                       | 点击事件对应的按键序号：0 为左键、1 为中键、2 为右键。在左撇子的配置环境下，按键值相反。                                                                                                                                                                       |
| `buttons` {{readonlyInline}}       | unsigned short                       | 鼠标事件触发时按下的按键值：左键为 1，右键为 2，中键为 4，第四个（如浏览器返回键）为 8，第五个（如浏览器前进键）为 16。若多个按键按下，则返回全部按下按键的逻辑值之和。例如，按下左键和右键时，返回 3 (= 1 \| 2)。[更多信息](/zh-CN/docs/Web/API/MouseEvent)。 |
| `mozPressure` {{readonlyInline}}   | float                                | 触发事件时按下触控设备的压力。该值范围最小为 0.0，最大为 1.0                                                                                                                                                                                                   |
| `ctrlKey` {{readonlyInline}}       | boolean                              | 若事件触发时 control 键按下则为 `true`，否则为 `false`。                                                                                                                                                                                                       |
| `shiftKey` {{readonlyInline}}      | boolean                              | 若事件触发时 shift 键按下则为 `true`，否则为 `false`                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                              | 若事件触发时 alt 键按下则为 `true`，否则为 `false`                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                              | 若事件触发时 meta 键按下则为 `true`，否则为 `false`                                                                                                                                                                                                            |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
