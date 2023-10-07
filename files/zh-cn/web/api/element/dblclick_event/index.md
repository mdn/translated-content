---
title: dblclick
slug: Web/API/Element/dblclick_event
---

在单个元素上单击两次鼠标的指针设备按钮 (通常是小鼠的主按钮) 时，将触发 `dblclick` 事件。

## 常规信息

- 规范
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-dbclick)
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

| 属性                               | 类型                                             | 描述                                                                                                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | 事件对象 (位于 DOM 树最上面的元素).                                                                                                                                                                                                                                 |
| `type` {{readonlyInline}}          | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | 事件类型。                                                                                                                                                                                                                                                          |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 是否冒泡                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 是否可被取消                                                                                                                                                                                                                                                        |
| `view` {{readonlyInline}}          | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (该文档的`window` 对象)                                                                                                                                                                          |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 在短时间内发生的连续点击次数的计数。                                                                                                                                                                                                                                |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | 被事件监听触发的节点。                                                                                                                                                                                                                                              |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | 对于 `mouseover`, `mouseout`, `mouseenter` 和`mouseleave` 事件：值为与其互补的事件 (比如`mouseenter` 就为`mouseleave`). 否则为`null`.                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的屏幕 x 轴坐标。                                                                                                                                                                                                                             |
| `screenY` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的屏幕 y 轴坐标。                                                                                                                                                                                                                             |
| `clientX` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的浏览器窗口的 x 轴坐标。                                                                                                                                                                                                                     |
| `clientY` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的浏览器窗口的 y 轴坐标。                                                                                                                                                                                                                     |
| `button` {{readonlyInline}}        | unsigned short                                   | 点击时按下的鼠标按钮：左键=0，中间按钮=1 (如果实现的话), 右键=2. 对于配置为左手使用按钮的操作被反转的鼠标，这些值从右向左读取。                                                                                                                                     |
| `buttons` {{readonlyInline}}       | unsigned short                                   | 当鼠标事件被触发时按钮的 buttons: 左键=1，右键=2，中间按钮=4，第四个按钮 (通常是"返回")=8，第五个按钮 (通常是"前进")=16.若有两个或以上的按钮按下，返回以逻辑或运算形成的合并值。例如左键右键同时按下就返回 3 (=1 \| 2). [更多信息](/zh-CN/docs/Web/API/MouseEvent). |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | 当事件被触发时 ctrl 按键被按下时为 true，否则为 false。                                                                                                                                                                                                             |
| `shiftKey` {{readonlyInline}}      | boolean                                          | 当事件被触发时 shift 按键被按下时为 true，否则为 false。                                                                                                                                                                                                            |
| `altKey` {{readonlyInline}}        | boolean                                          | 当事件被触发时 alt 按键被按下时为 true，否则为 false。                                                                                                                                                                                                              |
| `metaKey` {{readonlyInline}}       | boolean                                          | 当事件被触发时 meta 按键被按下时为 true，否则为 false。                                                                                                                                                                                                             |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`mousedown`](/zh-CN/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/zh-CN/docs/Web/API/Element/mouseup_event)
- [`mousemove`](/zh-CN/docs/Web/API/Element/mousemove_event)
- [`click`](/zh-CN/docs/Web/API/Element/click_event)
- [`dblclick`](/zh-CN/docs/Web/API/Element/dblclick_event)
- [`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event)
- [`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event)
- [`mouseenter`](/zh-CN/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/zh-CN/docs/Web/API/Element/mouseleave_event)
- [`contextmenu`](/zh-CN/docs/Web/API/Element/contextmenu_event)
