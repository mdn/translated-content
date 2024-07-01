---
title: AudioNode.disconnect()
slug: Web/API/AudioNode/disconnect
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} 인터페이스의 **`disconnect()`** 메서드는 하나 이상의 노드를 메서드가 호출된 노드로부터 연결 해제할 수 있게 합니다.

## 구문

```js
AudioNode.disconnect();

AudioNode.disconnect(output);

AudioNode.disconnect(destination);

AudioNode.disconnect(destination, output);

AudioNode.disconnect(destination, output, input);
```

### 반환 값

{{jsxref("undefined")}}

### 매개변수

`disconnect()` 메서드의 몇 가지 버전이 있는데, 각 버전은 매개변수의 다른 조합을 받아 어떤 노드를 어디에서 연결을 끊을지 제어합니다. 만약 매개변수가 제공되지 않았다면, 나가는 모든 연결들이 연결 해제됩니다.

- `destination` {{optional_inline}}
  - : 연결을 끊을 노드 혹은 노드들을 명시하는 {{domxref("AudioNode")}} 또는 {{domxref("AudioParam")}}. 만약 이 값이 `AudioNode` 라면, 하나의 노드가 연결 해제되고, 만약 선택적인 다른 매개변수가 있다면 (`output` 그리고/또는 `input`), 어떤 입력 그리고/또는 출력이 연결 해제되어야 하는지를 추가적으로 제한합니다. 만약 이 값이 `AudioParam` 이라면, 이 `AudioParam` 으로 향하는 연결이 제거되고, 이 계산된 파라미터에 대한 노드의 기여는 한 번 변화가 발생하고 나면 계속 0이 됩니다.
- `output` {{optional_inline}}
  - : 현재 `AudioNode` 로부터 어떤 출력이 연결 해제될지를 기술하는 인덱스. 인덱스 숫자는 출력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)을 참고해 보세요).
- `input` {{optional_inline}}
  - : 명시된 목적지 `AudioNode`로 가는 어떤 입력이 연결 해제될지를 기술하는 인덱스. 인덱스 숫자는 입력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)을 참고해 보세요).

### 예외

- `IndexSizeError` {{domxref("DOMException")}}
  - : 만약 `input` 혹은 `output` 으로 명시된 값이 유효하지 않다면 발생되며, 존재하지 않거나 허용되는 범위 밖에 있는 노드를 나타냅니다.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : `disconnect()` 가 호출된 노드가 명시된 `destination` 노드에 연결되어있지 않다면 발생됩니다.

## 예제

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

gainNode.disconnect();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
