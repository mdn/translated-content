---
title: MIDIAccess
slug: Web/API/MIDIAccess
---

{{SeeCompatTable}}{{APIRef("Web MIDI API")}}

[Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API) 的 **`MIDIAccess`** 接口提供查询 MIDI 输入和输出设备的列表以及获取这些设备的使用权限。

## 属性

- {{domxref("MIDIAccess.inputs")}} {{readonlyinline}}
  - : 返回 {{domxref("MIDIInputMap")}} 的实例，以提供对任何可用的 MIDI 输入端口的访问权限。
- {{domxref("MIDIAccess.outputs")}} {{readonlyinline}}
  - : 返回 {{domxref("MIDIOutputMap")}} 的实例，以提供任何可用的 MIDI 输出端口的访问权限。
- {{domxref("MIDIAccess.sysexEnabled")}} {{readonlyinline}}
  - : 一个布尔型的属性，指明系统是否对现有的 MIDIAccess 实例支持。

### 事件处理程序

- {{domxref("MIDIAccess.onstatechange")}}
  - : 当添加新的 MIDI 端口或者一个存在的端口状态发生改变时被调用。

## 例子

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
