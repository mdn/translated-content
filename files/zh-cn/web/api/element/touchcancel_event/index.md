---
title: touchcancel
slug: Web/API/Element/touchcancel_event
---
当触摸点被中断时会触发 `touchcancel` 事件，中断方式基于特定实现而有所不同（例如， 创建了太多的触摸点）。

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("TouchEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{ DOMxRef("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

在这个专用页面查看这些事件的代码样例：[Touch events](/zh-CN/docs/DOM/Touch_events)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Element.touchcancel_event")}}

## 参见

- {{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
- 目标为 [`Document`](/en-US/docs/Web/API/Document) 的相同事件： [`touchcancel`](/en-US/docs/Web/API/Document/touchcancel_event)
