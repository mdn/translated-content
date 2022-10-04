---
title: devicechange
slug: Web/API/MediaDevices/devicechange_event
---

每当媒体设备（例如相机，麦克风或扬声器）连接到系统或从系统中移除时，`devicechange` 事件就会被发送到 {{domxref("MediaDevices")}} 实例。这是一个没有附加属性的通用 {{domxref("Event")}} 。

## 一般信息

- 接口
  - : Event
- 是否冒泡
  - : No
- 是否可取消
  - : No
- 对象
  - : {{domxref('MediaDevices')}}
- 默认动作
  - : None

## 属性

| Property                              | Type                                 | Description                         |
| ------------------------------------- | ------------------------------------ | ----------------------------------- |
| `target`{{readonlyinline}}      | {{domxref("EventTarget")}} | 事件对象 (位于 DOM 树最上面的元素). |
| `type` {{readonlyinline}}       | {{domxref("DOMString")}}     | 事件类型。                          |
| `bubbles` {{readonlyinline}}    | {{domxref("Boolean")}}         | 是否冒泡                            |
| `cancelable` {{readonlyinline}} | {{domxref("Boolean")}}         | 是否可被取消                        |

## 相关事件

_无_.

## 样例

有关使用 `devicechange` 事件更新屏幕上设备列表的示例，请参阅 {{SectionOnPage("/en-US/docs/Web/API/MediaDevices/ondevicechange", "Example")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("MediaDevices.ondevicechange")}}
