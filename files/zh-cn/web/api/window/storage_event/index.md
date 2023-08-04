---
title: storage
slug: Web/API/Window/storage_event
---

当存储区域（localStorage 或 sessionStorage）被修改时，将触发 storage 事件。查看 [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 来获取更多信息。

## 常规信息

说明：_[Web Storage](http://www.w3.org/TR/webstorage/#the-storage-event)_

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("StorageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">目标</th>
      <td>DefaultView (<code>&#x3C;window></code>)</td>
    </tr>
    <tr>
      <th scope="row">默认行为</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

## 属性

| Property                         | Type                              | Description                   |
| -------------------------------- | --------------------------------- | ----------------------------- |
| `target` {{readonlyInline}}      | {{domxref("EventTarget")}}        | 事件目标 (DOM 树中的最大目标) |
| `type` {{readonlyInline}}        | {{domxref("DOMString")}}          | 事件的类型                    |
| `bubbles` {{readonlyInline}}     | {{jsxref("Boolean")}}             | 事件通常是否会出现冒泡        |
| `cancelable` {{readonlyInline}}  | {{jsxref("Boolean")}}             | 事件是否可取消                |
| `key` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | 键更改时                      |
| `oldValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | 正在更改键的旧值              |
| `newValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | 正在更改键的新值              |
| `url` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | 键更改的文档的地址            |
| `storageArea` {{readonlyInline}} | {{domxref("Storage")}}            | 受影响的存储对象              |

## 规范

{{Specifications}}
