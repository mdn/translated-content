---
title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

**`OscillatorNode()`** 构造器创建了一个新的 {{domxref("OscillatorNode")}} 对象，也是 {{domxref("AudioNode")}} 类型，表示一个周期的波形，例如正弦波，用来在不同的对象中定义其可选属性的值

如果属性的默认值可接受，也可以选择使用 {{domxref("AudioContext.createOscillator()")}} 工厂方法构造 {{domxref("OscillatorNode")}} 对象。

## 语法

```plain
var oscillatorNode = new OscillatorNode(context, options)
```

### 参数

- `context`
  - : 指向 {{domxref("AudioContext")}} 的引用。
- `options` {{optional_inline}}
  - : 一个用来给 oscillator node 的属性指定值得对象，该对象中省略的属性都将采用默认值
    - `type`
      - : oscillator node 产生的波形的形状。可用的值有 '`sine`', '`square`', '`sawtooth`', '`triangle`' 和 '`custom`'，默认值是'sine'。
    - `detune`
      - : 音高微调值（cents）可以对给定的频率值进行偏移。默认值是 0.
    - `frequency`
      - : 周期性波形的频率 (in [hertz](https://zh.wikipedia.org/wiki/hertz))。默认值是 440.
    - `periodicWave`
      - : 任意的周期性波形，通过一个 {{domxref("PeriodicWave")}} 对象描述。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
