---
title: AudioWorkletNode.port
slug: Web/API/AudioWorkletNode/port
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

{{domxref("AudioWorkletNode")}} 인터페이스의 읽기 전용 **`port`** 속성은 연관된 {{domxref("MessagePort")}}를 반환합니다. 이것은 노드와 노드에 연관된 {{domxref("AudioWorkletProcessor")}} 사이에서 소통하기 위해 사용될 수 있습니다.

> **참고:** 채널의 다른 쪽 끝에 있는 포트는
> 프로세서의 {{domxref("AudioWorkletProcessor.port", "port")}} 속성 아래에서
> 사용 가능합니다.

## 구문

```js
audioWorkletNodeInstance.port;
```

### 값

`AudioWorkletNode` 와 이것에 연관된 `AudioWorkletProcessor`를 연결하는 {{domxref("MessagePort")}} 객체.

## 예제

양방향 소통 능력을 시연하기 위해서, 우리는 `AudioWorkletProcessor` 를 생성할 것인데, 이는 무음을 출력하고 이것의 `AudioWorkletNode` 으로부터의 핑 요청에 응답할 것입니다.

우선, 우리는 커스텀 `AudioWorkletProcessor` 를 정의하고, 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함에 주의하세요.

```js
// ping-pong-processor.js
class PingPongProcessor extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
    this.port.onmessage = (e) => {
      console.log(e.data);
      this.port.postMessage("pong");
    };
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("ping-pong-processor", PingPongProcessor);
```

이제 메인 스크립트 파일에서 우리는 프로세서를 로드하고, 프로세서의 이름을 전달하며 `AudioWorkletNode` 의 인스턴스를 생성하고, 노드를 오디오 그래프에 연결할 것입니다.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("ping-pong-processor.js");
const pingPongNode = new AudioWorkletNode(audioContext, "ping-pong-processor");
// 매 초 AudioWorkletNode로부터
// AudioWorkletProcessor에 'ping' 문자열을 포함하는 메시지를 보냅니다
setInterval(() => pingPongNode.port.postMessage("ping"), 1000);
pingPongNode.port.onmessage = (e) => console.log(e.data);
pingPongNode.connect(audioContext.destination);
```

이것은 `"ping"` 과 `"pong"` 문자열을 콘솔에 매 초 출력할 것입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
