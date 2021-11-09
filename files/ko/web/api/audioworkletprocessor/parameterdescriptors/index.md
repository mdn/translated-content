---
title: AudioWorkletProcessor.parameterDescriptors (static getter)
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
tags:
  - API
  - AudioWorkletProcessor
  - Experimental
  - Property
  - Reference
  - parameterDescriptors
browser-compat: api.AudioWorkletProcessor.parameterDescriptors
---
{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioWorkletProcessor")}}로부터 파생된 클래스의  **`parameterDescriptors`** 읽기 전용 속성은 _static getter_ 인데, 이는 {{domxref("AudioParamDescriptor")}} 기반 객체의 iterable을 반환합니다.

이 속성은 {{domxref("AudioWorkletProcessor")}} 인터페이스의 일부가 아니지만, 만약 정의된다면, 이것은 {{domxref("AudioWorkletProcessor")}} 생성자에 의해 연관된 {{domxref("AudioWorkletNode")}}의 {{domxref("AudioWorkletNode.parameters",
  "parameters")}} 속성에서 사용자 정의 {{domxref("AudioParam")}} 객체들의 리스트를 생성하기 위해 내부적으로 호출됩니다.

getter를 정의하는 것은 선택 사항입니다.

## 구문

```js
AudioWorkletProcessorSubclass.parameterDescriptors;
```

### Value

{{domxref("AudioParamDescriptor")}} 기반 객체들의 iterable. 이 객체들의 속성은 다음과 같습니다.

- `name`
  - : `AudioParam` 의 이름을 나타내는 {{domxref("DOMString")}}. 이 이름 아래에서 `AudioParam` 은 이 노드의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성에서 사용 가능하고, 이 이름 아래에서 {{domxref("AudioWorkletProcessor.process")}} 메서드는 이 `AudioParam` 의 계산된 값을 획득할 것입니다.
- `automationRate` {{optional_inline}}
  - : 이 `AudioParam` 의 자동화 비율을 나타내는 [`"a-rate"`](/ko/docs/Web/API/AudioParam#a-rate), 또는 [`"k-rate"`](/ko/docs/Web/API/AudioParam#k-rate) 문자열. 기본값은 `"a-rate"` 입니다.
- `minValue` {{optional_inline}}
  - : `AudioParam` 의 최소 값을 나타내는 `float`. 기본 값은 `-3.4028235e38` 입니다.
- `maxValue` {{optional_inline}}
  - : `AudioParam` 의 최대 값을 나타내는 `float`. 기본 값은 `3.4028235e38` 입니다.
- `defaultValue` {{optional_inline}}
  - : `AudioParam` 의 초기 값을 나타내는 `float`. 기본값은 `0` 입니다.

## 예제

어떻게 static `parameterDescriptors` getter를 사용자 정의 `AudioWorkletProcessor` 에 추가하는지를 보여주는 예제 코드를 보시려면 [`AudioWorkletNode.parameters`](/ko/docs/Web/API/AudioWorkletNode/parameters#examples) 를 참고해 보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
