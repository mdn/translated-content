---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
tags:
  - API
  - Audio
  - AudioWorklet
  - AudioWorkletProcessor
  - Interface
  - Reference
  - Web Audio API
  - sound
browser-compat: api.AudioWorkletProcessor
---
{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AudioWorkletProcessor`** 인터페이스는 사용자 정의 {{domxref("AudioWorkletNode")}} 뒤의 오디오 프로세싱 코드를 나타냅니다. 이것은 {{domxref("AudioWorkletGlobalScope")}} 안에 있으며 Web Audio 렌더링 스레드에서 실행됩니다. 결과적으로, 이것에 기반한 {{domxref("AudioWorkletNode")}}가 메인 스레드에서 실행됩니다.

## 생성자

> **참고:** `AudioWorkletProcessor` 와 이것으로부터 파생된 클래스들은 사용자에 의해 제공된 코드로부터 직접적으로 초기화될 수 없습니다. 대신, 이것들은 오직 연관된 {{domxref("AudioWorkletNode")}}들의 생성에 의해서만 내부적으로 생성됩니다. 파생된 클래스의 생성자는 options 객체와 함께 호출되므로, 여러분은 사용자 정의 초기화 절차를 수행할 수 있습니다 — 자세한 사항은 생성자 페이지를 참고하세요.

- {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}
  - : `AudioWorkletProcessor` 객체의 새 인스턴스를 생성합니다.

## 속성

- {{domxref("AudioWorkletProcessor.port", "port")}} {{readonlyinline}}
  - : 프로세서와 프로세서가 속한 {{domxref("AudioWorkletNode")}} 사이의 양방향 소통에 사용되는 {{domxref("MessagePort")}}를 반환합니다. 다른 쪽 끝은 이 노드의 {{domxref("AudioWorkletNode.port", "port")}} 속성 아래에서 사용 가능합니다.

## 메서드

_`AudioWorkletProcessor` 인터페이스는 이것이 소유하는 어떠한 메서드도 정의하지 않습니다. 그러나, 오디오 스트림을 처리하기 위해 호출되는 {{domxref("AudioWorkletProcessor.process", "process()")}} 메서드를 여러분은 반드시 제공해야만 합니다._

## 이벤트

_`AudioWorkletProcessor` 인터페이스는 어떠한 이벤트에도 응답하지 않습니다._

## 사용 일람

### 클래스 파생

사용자 정의 오디오 프로세싱 코드를 정의하려면, 여러분은 `AudioWorkletProcessor` 인터페이스로부터 클래스를 파생시켜야 합니다. 비록 인터페이스에 정의되어 있지 않기는 하나, 파생 클래스는 반드시 {{domxref("AudioWorkletProcessor.process", "process")}} 메서드를 가지고 있어야만 합니다. 이 메서드는 128 샘플 프레임의 각 블럭마다 호출되고 입력과 출력 배열과 만약 정의되어 있다면 사용자 정의 {{domxref("AudioParam")}}들의 계산된 값들을 매개변수로 받습니다. 여러분은 입력과 오디오 파라미터 값들을 기본적으로는 무음을 가지는 출력 배열을 채우기 위해 사용할 수 있습니다.

선택적으로, 만약 여러분이 사용자 정의 {{domxref("AudioParam")}}들을 여러분의 노드에서 원한다면, 여러분은 프로세서의 _static getter_ 로서 {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} 속성을 제공할 수 있습니다. 반환되는 {{domxref("AudioParamDescriptor")}} 기반 객체의 배열은 `AudioWorkletNode`의 초기화 동안 {{domxref("AudioParam")}}들을 생성하기 위해 내부적으로 사용됩니다 .

결과로 나오는 `AudioParam` 들은 노드의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성 안에 있으며 [`linearRampToValueAtTime`](/ko/docs/Web/API/AudioParam/linearRampToValueAtTime)과 같은 표준 메서드를 사용해 자동화될 수 있습니다. 이것들의 계산된 값들은 여러분이 노드 출력을 이에 맞춰 조절할 수 있도록 프로세서의 {{domxref("AudioWorkletProcessor.process", "process()")}} 메서드 안으로 전달될 것입니다.

### 오디오 프로세싱

사용자 정의 오디오 프로세싱 생성 메커니즘의 예제 알고리즘입니다.

1.  별도의 파일을 생성합니다.
2.  그 파일에서

    1.  `AudioWorkletProcessor` 클래스를 확장하고 (["클래스 파생" 섹션](#클래스_파생)을 참고하세요) 여러분만의 {{domxref("AudioWorkletProcessor.process", "process()")}} 메서드를 그 안에 제공하세요.
    2.  {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} 메서드를 사용해 프로세서를 등록하세요.

3.  오디오 컨텍스트의 {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} 속성에서 {{domxref("Worklet.addModule", "addModule()")}} 메서드를 사용하여 파일을 로드하세요.
4.  이 프로세서에 기반하는 {{domxref("AudioWorkletNode")}}를 생성하세요. 이 프로세서는 `AudioWorkletNode` 생성자에 의해 내부적으로 초기화될 것입니다.
5.  이 노드를 다른 노드들에 연결하세요.

## 예제

아래의 예제에서 우리는 백색소음을 출력하는 사용자 정의 {{domxref("AudioWorkletNode")}}를 생성합니다.

우선, 우리는 백색소음을 출력할 사용자 정의 `AudioWorkletProcessor` 를 정의하고, 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함에 주의하세요.

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach(channel => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1
      }
    })
    return true
  }
}

registerProcessor('white-noise-processor', WhiteNoiseProcessor)
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, 프로세서의 이름을 {{domxref("AudioWorkletNode")}}에 전달하며 {{domxref("AudioWorkletNode")}}의 인스턴스를 생성하고, 그리고 나서 이 노드를 오디오 그래프에 연결합니다.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('white-noise-processor.js')
const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor')
whiteNoiseNode.connect(audioContext.destination)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
