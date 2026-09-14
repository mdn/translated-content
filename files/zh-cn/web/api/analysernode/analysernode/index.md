---
title: AnalyserNode：AnalyserNode() 构造函数
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("'Web Audio API'")}}

[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 的 **`AnalyserNode()`** 构造函数用于创建一个新的 {{domxref("AnalyserNode")}} 对象实例。

## 语法

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### 参数

- `context`
  - : 对 {{domxref("AudioContext")}} 或 {{domxref("OfflineAudioContext")}} 的引用。
- `options` {{optional_inline}}
  - : 一个包含以下属性的对象，所有属性都是可选的：
    - `fftSize`
      - : 用于[频域](https://zh.wikipedia.org/wiki/频域)分析的期望初始[快速傅里叶变换](https://zh.wikipedia.org/wiki/快速傅里叶变换)大小。默认值为 `2048`。
    - `maxDecibels`
      - : 用于快速傅里叶变换（FFT）分析的期望初始最大功率（单位：[分贝](https://zh.wikipedia.org/wiki/分貝)）。默认值为 `-30`。
    - `minDecibels`
      - : 用于快速傅里叶变换（FFT）分析的期望初始最小功率（单位：分贝）。默认值为 `-100`。
    - `smoothingTimeConstant`
      - : 用于快速傅里叶变换（FFT）分析的期望初始平滑常数。默认值为 `0.8`。
    - `channelCount`
      - : 表示一个用于确定在与节点的任何输入连接进行[向上和向下混频](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#向上和向下混频)时所使用的通道数量的整数值。（更多信息参见 {{domxref("AudioNode.channelCount")}}）。其使用方式和精确定义取决于 `channelCountMode` 的取值。
    - `channelCountMode`
      - : 表示一个描述节点输入与输出之间通道匹配方式的[枚举](/zh-CN/docs/Glossary/Enumerated)值。（更多信息及默认值参见 {{domxref("AudioNode.channelCountMode")}}）。
    - `channelInterpretation`
      - : 表示一个描述通道含义的枚举值。该解释将决定音频[向上和向下混频](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#向上和向下混频)的方式。可选值为 `"speakers"` 或 `"discrete"`。（更多信息及默认值参见 {{domxref("AudioNode.channelCountMode")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 等效的工厂方法 {{domxref("BaseAudioContext.createAnalyser()")}}
