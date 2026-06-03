---
title: WaveShaperNode.WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
---

{{APIRef("Web Audio API")}}

[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 的 **`WaveShaperNode()`** 构造方法创建一个新的 {{domxref("WaveShaperNode")}}对象，是一个可以用来表示非线性畸变的{{domxref("AudioNode")}} 。

## 语法

```plain
var waveShaperNode = new WaveShaperNode(context, options)
```

### 参数

_继承_ _{{domxref("AudioNodeOptions")}} 字典的参数。_

- _context_
  - : {{domxref("AudioContext")}}的一个引用。
- _options_ {{optional_inline}}
  - : Options 参数如下：
    - `curve`: 用于波形形成效果的修正曲线。输入信号通常在 \[-1;1] 的范围间。
    - `oversample`: 指定在应用修正曲线时会被使用的过采样的类别（如果有的话）。有效的值有'`none`', '`2x`', 或者'`4x`'。缺省情况下是'`none`'。

### 返回值

一个新的{{domxref("WaveShaperNode")}}对象的实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
