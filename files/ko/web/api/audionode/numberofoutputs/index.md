---
title: AudioNode.numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
---

{{APIRef("Web Audio API")}}

{{ domxref("AudioNode") }} 인터페이스의 `numberOfOutputs` 속성은 노드에서 나오는 출력의 수를 반환합니다. 목적지 노드 (예: {{domxref("AudioDestinationNode") }}) 는 이 특성에 대해 0의 값을 가집니다.

## 구문

```js
var numOutputs = audioNode.numberOfOutputs;
```

### 값

integer ≥ 0.

## 예제

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfOutputs); // 1
console.log(gainNode.numberOfOutputs); // 1
console.log(audioCtx.destination.numberOfOutputs); // 0
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
