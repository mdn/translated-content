---
title: AudioWorkletNode.parameters
slug: Web/API/AudioWorkletNode/parameters
tags:
  - API
  - Audio
  - AudioParam
  - AudioWorkletNode
  - Property
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletNode.parameters
---
{{APIRef("Web Audio API")}}

{{domxref("AudioWorkletNode")}} 인터페이스의 읽기 전용 **`parameters`** 속성은 연관된 {{domxref("AudioParamMap")}}을 반환합니다 — 즉, {{domxref("AudioParam")}} 객체들의 유사 `Map` 컬렉션입니다. 이것들은 {{domxref("AudioWorkletProcessor")}}의 static {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter에 따라 근본적인 {{domxref("AudioWorkletProcessor")}}의 생성 중에 초기화됩니다.

## 구문

```js
audioWorkletNodeInstance.parameters
```

### 값

{{domxref("AudioParam")}} 인스턴스들을 포함하는 {{domxref("AudioParamMap")}} 객체. 이것들은 기본 `AudioNode` 들과 같은 방법으로 자동화 가능하고, 그들의 계산된 값들은 여러분의 {{domxref("AudioWorkletProcessor")}}의 {{domxref("AudioWorkletProcessor.process",
  "process")}} 메서드에서 사용될 수 있습니다.

## 예제

사용자 정의 `AudioParam` 들의 생성과 사용을 시연하기 위해, 우리는 {{domxref("AudioWorkletNode")}} 페이지의 예제를 확장할 것입니다. 저 글에서 우리는 백색소음을 출력하는 단순한 노드를 생성했습니다. 여기서 추가적으로, 우리는 출력의 볼륨을 직접 변경할 수 있도록 사용자 정의 gain 속성을 생성할 것입니다 (비록 여러분은 이를 달성하기 위해 {{domxref("GainNode")}}를 또한 사용할 수도 있지만요).

우선, 우리는 커스텀 `AudioWorkletProcessor`를 정의하고, 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함을 기억하세요.

우리는 static {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter를 추가함으로써 프로세서를 확장합니다. 이것은 초기화된 `AudioParam` 객체들로 이것의 `parameters` 를 채우기 위해 `AudioWorkletNode` 생성자에 의해 내부적으로 사용될 것입니다.

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

  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach(channel => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = (Math.random() * 2 - 1) *
          (parameters['customGain'].length > 1 ? parameters['customGain'][i] : parameters['customGain'][0])
        // 참고: 파라미터는 128개의 값 (각 128 샘플에 대한 하나의 값) 을 가진 배열을 포함하지만,
        // 만약 그 순간에 자동화가 스케쥴되어 있지 않다면
        // 모든 128개의 샘플에 대해 사용될 하나의 값을 포함할 수도 있습니다.
      }
    })
    return true
  }
}

registerProcessor('white-noise-processor', WhiteNoiseProcessor)
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, 프로세서의 이름을 전달하며 `AudioWorkletNode` 의 인스턴스를 생성하고, 노드를 오디오 그래프에 연결합니다.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('white-noise-processor.js')
const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor')
whiteNoiseNode.connect(audioContext.destination)
```

이제 우리는 노드의 gain을 다음과 같이 변경할 수 있습니다:

```js
const gainParam = whiteNoiseNode.parameters.get('customGain')
gainParam.setValueAtTime(0, audioContext.currentTime)
gainParam.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
