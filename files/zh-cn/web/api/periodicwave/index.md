---
title: PeriodicWave
slug: Web/API/PeriodicWave
---

{{ APIRef("Web Audio API") }}

**`PeriodicWave`** 接口定义了一个可用于对 {{domxref("OscillatorNode")}}(振荡节点) 的输出进行构造（描述）的周期性波形。

`PeriodicWave` (周期波) 没有输入或输出；它用于调用 {{domxref("OscillatorNode.setPeriodicWave()")}} 时定义自定义振荡器。 `PeriodicWave` 自身由 {{domxref("AudioContext.createPeriodicWave()")}} 创建/返回。

## 构造函数

- {{domxref("PeriodicWave.PeriodicWave()")}}
  - : 使用所有属性的默认值创建一个新的 `PeriodicWave` 对象实例。如果你想一开始就建立自定义属性值，请使用 {{domxref("AudioContext.createPeriodicWave()")}} 工厂方法替代。

## 属性

_None; 而且，`PeriodicWave` 不继承任何属性。_

## 方法

_None; 而且，`PeriodicWave` 继承任何属性。_

## 例子

参见 {{domxref("BaseAudioContext.createPeriodicWave")}} 以获取简单的示例代码，其展示了如何创建一个包含简单的正弦波的 `PeriodicWave` 对象。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
