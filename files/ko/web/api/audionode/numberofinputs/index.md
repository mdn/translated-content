---
title: AudioNode.numberOfInputs
slug: Web/API/AudioNode/numberOfInputs
---

{{APIRef("Web Audio API")}}

{{domxref("AudioNode")}} 인터페이스의 `numberOfInputs` 속성은 해당 노드에 공급되는 입력의 수를 반환합니다. 소스 노드는 `numberOfInputs` 속성의 값이 0인 노드로 정의됩니다.

## 구문

```js
var numInputs = audioNode.numberOfInputs;
```

### 값

integer ≥ 0.

## 예제

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfInputs); // 0
console.log(gainNode.numberOfInputs); // 1
console.log(audioCtx.destination.numberOfInputs); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio
  API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
