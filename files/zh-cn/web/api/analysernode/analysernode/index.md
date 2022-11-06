---
title: AnalyserNode.AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
---

{{APIRef("'Web Audio API'")}}

The **`AnalyserNode`** constructor of the [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) creates a new {{domxref("AnalyserNode")}} object instance.

## Syntax

```plain
var analyserNode = new AnalyserNode(context, options)
```

### 参数

_继承参数自 {{domxref("AudioNodeOptions")}} 字典_.

- _context_
  - : {{domxref("AudioContext")}} 的引用。
- _options_ {{optional_inline}}

  - : Options are as follows:

    - `fftSize`: 用于频域分析的 FFT 初始尺寸。默认值是 2048。
    - `maxDecibels`: 用于 FFT 分析的初始最大功率（dB）。默认值是 -30。
    - `minDecibels`: 用于 FFT 分析的初始最小功率（dB）。默认值是 -100。
    - `smoothingTimeConstant`: 用于 FFT 分析的初始平滑常数。默认值是 0.8。

### 返回值

A new {{domxref("AnalyserNode")}} object instance.

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}
