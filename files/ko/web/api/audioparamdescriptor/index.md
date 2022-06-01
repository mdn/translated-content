---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
tags:
  - API
  - Audio
  - AudioParamDescriptor
  - AudioWorkletProcessor
  - Dictionary
  - Reference
  - Web Audio API
  - parameterDescriptors
browser-compat: api.AudioParamDescriptor
---
{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AudioParamDescriptor`** dictionary는 {{domxref("AudioParam")}} 객체에 대한 속성들을 명시합니다.

이 dictionary는 {{domxref("AudioWorkletNode")}}에서 사용자 정의 `AudioParam` 을 생성하기 위해 사용됩니다. 만약 근본적인 {{domxref("AudioWorkletProcessor")}}가 {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} static getter를 가지고 있다면, 이 dictionary에 기반한 반환된 객체들의 배열이 `AudioWorkletNode` 생성자에 의해 내부적으로 사용되어 이에 맞춰 AudioWorkletNode의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성을 채웁니다.

## 속성

- `name`
  - : `AudioParam` 의 이름을 나타내는 {{domxref("DOMString")}}. 이 이름 아래에서 `AudioParam` 은 AudioWorkletNode의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성에서 사용 가능하게 될 것이고, 이 이름 아래에서 {{domxref("AudioWorkletProcessor.process")}} 메서드가 이 `AudioParam` 의 계산된 값을 획득할 것입니다.
- `automationRate` {{optional_inline}}
  - : 이 `AudioParam` 의 자동화율(automation rate)을 나타내는 string인데, [`"a-rate"`](/ko/docs/Web/API/AudioParam#a-rate) 또는 [`"k-rate"`](/ko/docs/Web/API/AudioParam#k-rate)입니다. 기본값은 `"a-rate"` 입니다.
- `minValue` {{optional_inline}}
  - : `AudioParam` 의 최소 값을 나타내는 `float`. 기본값은 `-3.4028235e38` 입니다.
- `maxValue` {{optional_inline}}
  - : `AudioParam` 의 최대 값을 나타내는 `float`. 기본값은 `3.4028235e38` 입니다.
- `defaultValue` {{optional_inline}}
  - : `AudioParam` 의 초기 값을 나타내는 `float`. 기본값은 `0` 입니다.

## 예제

아래의 코드는 사용자 정의 `AudioWorkletProcessor` 에서 정의된 static {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} 메서드에 의해 반환되는 이 유형의 descriptor를 보여줍니다 (이 코드는 [AudioWorkletNode.parameters](/en-US/docs/Web/API/AudioWorkletNode/parameters#examples) 예제의 일부입니다).

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors () {
    return [{
      name: 'customGain',
      defaultValue: 1,
      minValue: 0,
      maxValue: 1,
      automationRate: 'a-rate'
    }]
  }

...
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
