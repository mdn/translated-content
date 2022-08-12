---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
translation_of: Web/API/AudioParamDescriptor
---
{{APIRef("Web Audio API")}}

The **`AudioParamDescriptor`** dictionary of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) specifies properties for an {{domxref("AudioParam")}} objects. It is used to create custom `AudioParam`s on an {{domxref("AudioWorkletNode")}}. If the underlying {{domxref("AudioWorkletProcessor")}} has a {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} static getter, then the returned array of objects based on this dictionary is used internally by `AudioWorkletNode` constructor to populate its {{domxref("AudioWorkletNode.parameters", "parameters")}} property accordingly.

## 属性

- `name`
  - : The {{domxref("DOMString")}} which represents the name of the `AudioParam`. Under this name the `AudioParam` will be available in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node, and under this name the {{domxref("AudioWorkletProcessor.process")}} method will acquire the calculated values of this `AudioParam`.
- `automationRate` {{optional_inline}}
  - : Either [`"a-rate"`](/en-US/docs/Web/API/AudioParam#a-rate), or [`"k-rate"`](/en-US/docs/Web/API/AudioParam#k-rate) string which represents an automation rate of this `AudioParam`. Defaults to `"a-rate"`.
- `minValue` {{optional_inline}}
  - : A `float` which represents minimum value of the `AudioParam`. Defaults to `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : A `float` which represents maximum value of the `AudioParam`. Defaults to `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : A `float` which represents initial value of the `AudioParam`. Defaults to `0`.

## 例子

{{page("/en-US/docs/Web/API/AudioWorkletNode/parameters", "Examples")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.AudioParamDescriptor")}}
