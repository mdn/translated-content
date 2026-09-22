---
title: BaseAudioContext：createConstantSource() 方法
slug: Web/API/BaseAudioContext/createConstantSource
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

{{domxref("BaseAudioContext")}} 接口的 **`createConstantSource()`** 方法创建一个 {{domxref("ConstantSourceNode")}} 对象，它是一个持续输出单声道（单通道）声音信号的音频源，其所有采样值都相同。

> [!NOTE]
> 推荐使用 {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}} 构造函数来创建 {{domxref("ConstantSourceNode")}}；请参见[创建 AudioNode](/zh-CN/docs/Web/API/AudioNode#创建_audionode)。

## 语法

```js-nolint
createConstantSource()
```

### 参数

无。

### 返回值

一个 {{domxref("ConstantSourceNode")}} 实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
