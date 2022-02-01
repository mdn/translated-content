---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
tags:
  - API
  - Audio
  - AudioWorkletNode
  - Experimental
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletNode
---
{{APIRef("Web Audio API")}}

> **참고:** 이 인터페이스는 [secure contexts](/ko/docs/Web/Security/Secure_Contexts) 바깥에서 이용 가능하지만, {{domxref("BaseAudioContext.audioWorklet")}} 속성은 그렇지 않습니다. 따라서 사용자 정의 {{domxref("AudioWorkletProcessor")}}는 [secure contexts](/ko/docs/Web/Security/Secure_Contexts) 바깥에서 정의될 수 없습니다.

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AudioWorkletNode`** 인터페이스는 사용자에 의해 정의된, 다른 노드들과 마찬가지로 오디오 라우팅 그래프에 연결될 수 있는, {{domxref("AudioNode")}}에 대한 base 클래스를 나타냅니다.  **`AudioWorkletNode`** 는 연관된 {{domxref("AudioWorkletProcessor")}}를 가지고 있는데, 이는 Web Audio 렌더링 스레드에서 실제적인 오디오 프로세싱을 합니다.

## 생성자

- {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}}
  - : `AudioWorkletNode` 객체의 새로운 인스턴스를 생성합니다.

## 속성

_또한 부모인 {{domxref("AudioNode")}}로부터 속성을 상속받습니다_.

- {{domxref("AudioWorkletNode.port")}} {{readonlyinline}}
  - : 노드와 노드에 연관된 {{domxref("AudioWorkletProcessor")}} 사이에서 양방향 소통을 위해 사용되는 {{domxref("MessagePort")}}를 반환합니다. 다른 쪽 끝은 프로세서의 {{domxref("AudioWorkletProcessor.port", "port")}} 속성 아래에서 사용 가능합니다.
- {{domxref("AudioWorkletNode.parameters")}} {{readonlyinline}}
  - : {{domxref("AudioParam")}} 객체들의 모임인 {{domxref("AudioParamMap")}}을 반환합니다. 이것들은 근본적인 `AudioWorkletProcessor` 의 생성 중에 초기화됩니다. 만약 `AudioWorkletProcessor` 가 정적 {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter를 가지고 있다면, 이것으로부터 반환되는 {{domxref("AudioParamDescriptor")}} 배열이 `AudioWorkletNode` 위에서 `AudioParam` 객체들을 생성하기 위해 사용됩니다. 이 메커니즘을 이용하여 여러분의 `AudioWorkletNode` 에서 접근 가능한 여러분만의 `AudioParam` 객체들을 만드는 것이 가능합니다. 그리고 나서 여러분은 연관된 `AudioWorkletProcessor`에서 그것들의 값을 사용할 수 있습니다.

### 이벤트 처리기

- {{domxref("AudioWorkletNode.onprocessorerror")}}
  - : 연관된 {{domxref("AudioWorkletProcessor")}}에서 오류가 나왔을 때 발생됩니다. 한 번 발생되고 나면, 프로세서와 그 결과로서 노드도 생애 주기동안 쭉 무음을 출력할 것입니다.

## 메서드

_부모인 {{domxref("AudioNode")}}로부터 메서드를 상속받습니다_.

_`AudioWorkletNode` 인터페이스는 자신만의 어떠한 메서드도 정의하지 않습니다._

## 예제

이 예제에서 우리는 백색소음을 출력하는 사용자 정의 `AudioWorkletNode` 를 생성합니다.

우선, 우리는 백색소음을 출력하는 사용자 정의 {{domxref("AudioWorkletProcessor")}}를 정의하고 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함에 주의하세요.

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

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, 프로세서의 이름을 `AudioWorkletNode` 에 전달하며 `AudioWorkletNode` 의 인스턴스를 생성하고, 이 노드를 오디오 그래프에 연결할 것입니다.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('white-noise-processor.js')
const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor')
whiteNoiseNode.connect(audioContext.destination)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
