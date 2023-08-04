---
title: ChannelMergerNode()
slug: Web/API/ChannelMergerNode/ChannelMergerNode
---

{{APIRef("Web Audio API")}}

**`ChannelMergerNode()`** 构造函数生成新的 {{domxref("ChannelMergerNode")}} 对象实例。

## 语法

```js
var myNode = new ChannelMergerNode(context, options);
```

### 参数

_从字典_ _{{domxref("AudioNodeOptions")}} 继承。_

- _context_
  - : {{domxref("BaseAudioContext")}} 代表你想要关联的音频上下文。
- _options_ {{optional_inline}}

  - : 定义你希望 `ChannelMergerNode` 具有的属性的 [`ChannelMergerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-ChannelMergerOptions) 字典对象（它还继承了 [`AudioNodeOptions`](https://webaudio.github.io/web-audio-api/#idl-def-AudioNodeOptions) 字典中定义的选项）：

    - `numberOfInputs`: 定义了 {{domxref("ChannelMergerNode")}} 应该拥有的输入数量。如果没有指定，使用默认值 6。

### 返回值

一个新的 {{domxref("ChannelMergerNode")}} 对象实例。

## 例子

```js
var ac = new AudioContext();

var options = {
  numberOfInputs: 2,
};

var myMerger = new ChannelMergerNode(ac, options);
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}
