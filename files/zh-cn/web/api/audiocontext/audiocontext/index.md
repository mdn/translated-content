---
title: AudioContext()
slug: Web/API/AudioContext/AudioContext
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

**`AudioContext()`** 构造方法创建了一个新的 {{domxref("AudioContext")}} 对象 它代表了一个由音频模块链接而成的音频处理图，每一个模块由 {{domxref("AudioNode")}} 表示。

## 语法

```plain
var audioContext = new AudioContext(options)
```

### 参数

- _options_ {{optional_inline}}
  - : Options 如下所示：
    - `latencyHint`: 这个参数表示了重放的类型，参数是播放效果和资源消耗的一种权衡。可接受的值有 "balanced", "interactive" 和"playback"，默认值为 "interactive"。意思是 "平衡音频输出延迟和资源消耗", "提供最小的音频输出延迟最好没有干扰"和 "对比音频输出延迟，优先重放不被中断"。我们也可以用一个双精度的值来定义一个秒级的延迟数值做到更精确的控制。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
