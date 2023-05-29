---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
---

{{APIRef("Web MIDI API")}}{{SeeCompatTable}}

The **`MIDIConnectionEvent`** interface of the [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API) is the event passed to the {{domxref("MIDIAccess.onstatechange","onstatechange")}} event of the {{domxref("MIDIAccess")}} interface and the {{domxref("MIDIPorts.onstatechange","onstatechange")}} event of the {{domxref("MIDIPorts")}} interface. This occurs any time a new port becomes available, or when a previously available port becomes unavailable. 例如，这个事件无论是在一个 MIDI 设备插入或拔出设备时都会触发。

## 构造函数

- {{domxref("MIDIConnectionEvent.MIDIConnectionEvent")}}
  - : 创建一个新的 `MIDIConnectionEvent` 对象。

## 属性

- {{domxref("MIDIConnectionEvent.port")}}
  - : 返回一个 {{domxref("MIDIPort")}} 实例的引用，指明其端口是否已经连接。

## 举例

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
