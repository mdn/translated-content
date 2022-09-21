---
title: dragenter
slug: Web/API/HTMLElement/dragenter_event
original_slug: Web/API/Document/dragenter_event
---
当拖动的元素或被选择的文本进入有效的放置目标时， `dragenter` 事件被触发。

## 基本信息

<table class="properties">
  <tbody>
    <tr>
      <td>是否冒泡</td>
      <td>是</td>
    </tr>
    <tr>
      <td>是否可取消</td>
      <td>是</td>
    </tr>
    <tr>
      <td>目标对象</td>
      <td>用户指定的元素或者 body 元素</td>
    </tr>
    <tr>
      <td>接口</td>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <td>默认动作</td>
      <td>取消拖动</td>
    </tr>
  </tbody>
</table>

## 属性

| 属性                                     | 类型                                             | 描述                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | 被拖动的元素下面的元素。                                                                                                                                                                                                                                                                                                                                                                                                |
| `type` {{readonlyInline}}          | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | 事件类型                                                                                                                                                                                                                                                                                                                                                                                                                |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 事件是否正常冒泡                                                                                                                                                                                                                                                                                                                                                                                                        |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 事件是否已被取消？                                                                                                                                                                                                                                                                                                                                                                                                      |
| `view` {{readonlyInline}}          | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `dataTransfer`                           | DataTransfer                                     | The data that underlies a drag-and-drop operation, known as the [drag data store](/zh-CN/docs/Web/API/DataTransfer). Protected mode.                                                                                                                                                                                                                                                                                    |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | 触发事件的元素                                                                                                                                                                                                                                                                                                                                                                                                          |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | 全局（屏幕）坐标中鼠标指针的 X 坐标。                                                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                                             | 全局（屏幕）坐标中鼠标指针的 Y 坐标。                                                                                                                                                                                                                                                                                                                                                                                   |
| `clientX` {{readonlyInline}}       | long                                             | 本地（DOM 内容）坐标中鼠标指针的 X 坐标。                                                                                                                                                                                                                                                                                                                                                                               |
| `clientY` {{readonlyInline}}       | long                                             | 本地（DOM 内容）坐标中鼠标指针的 Y 坐标。                                                                                                                                                                                                                                                                                                                                                                               |
| `button` {{readonlyInline}}        | unsigned short                                   | 鼠标事件触发时按下的按钮号：左键= 0，中键= 1（如果存在），右键= 2。 对于配置为左手使用的鼠标，其中按钮操作反转，则值从右向左读取。                                                                                                                                                                                                                                                                                      |
| `buttons` {{readonlyInline}}       | unsigned short                                   | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/zh-CN/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | 触发事件时屏幕的压力值，介于 0.0 到 1.0 之间                                                                                                                                                                                                                                                                                                                                                                            |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | 事件触发时 ctrl 键是否被按下                                                                                                                                                                                                                                                                                                                                                                                            |
| `shiftKey` {{readonlyInline}}      | boolean                                          | 事件触发时 shift 键是否被按下                                                                                                                                                                                                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                                          | 事件触发时 alt 键是否被按下                                                                                                                                                                                                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                                          | 事件触发时 meta 键是否被按下                                                                                                                                                                                                                                                                                                                                                                                            |

## 示例：dropzone

{{page('/zh-CN/docs/Web/Events/dragstart', '示例：dropzone')}}

## 规范

{{Specifications}}

## 浏览器支持

{{Compat("api.Document.dragenter_event")}}

## 相关

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
