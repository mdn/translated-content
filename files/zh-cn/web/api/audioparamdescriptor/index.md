---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
---

{{APIRef("Web Audio API")}}

The **`AudioParamDescriptor`** dictionary of the [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) specifies properties for an {{domxref("AudioParam")}} objects. It is used to create custom `AudioParam`s on an {{domxref("AudioWorkletNode")}}. If the underlying {{domxref("AudioWorkletProcessor")}} has a {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} static getter, then the returned array of objects based on this dictionary is used internally by `AudioWorkletNode` constructor to populate its {{domxref("AudioWorkletNode.parameters", "parameters")}} property accordingly.

## 属性

- `name`
  - : The {{domxref("DOMString")}} which represents the name of the `AudioParam`. Under this name the `AudioParam` will be available in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node, and under this name the {{domxref("AudioWorkletProcessor.process")}} method will acquire the calculated values of this `AudioParam`.
- `automationRate` {{optional_inline}}
  - : Either [`"a-rate"`](/zh-CN/docs/Web/API/AudioParam#a-rate), or [`"k-rate"`](/zh-CN/docs/Web/API/AudioParam#k-rate) string which represents an automation rate of this `AudioParam`. Defaults to `"a-rate"`.
- `minValue` {{optional_inline}}
  - : A `float` which represents minimum value of the `AudioParam`. Defaults to `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : A `float` which represents maximum value of the `AudioParam`. Defaults to `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : A `float` which represents initial value of the `AudioParam`. Defaults to `0`.

## 示例

下面的代码片段展示了自定义的 `AudioWorkletProcessor` 中的静态方法 {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} 返回该类型的描述符（这是 [AudioWorkletNode.parameters](/zh-CN/docs/Web/API/AudioWorkletNode/parameters#examples) 中完整示例的一部分）。

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }

  // …
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
