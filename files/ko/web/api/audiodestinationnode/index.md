---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
---

{{APIRef()}}

`AudioDestinationNode` 은 주어진 컨택스트의 음원의 종착점을 나타냅니다. 보통 스피커를 가리킵니다. 이는 또한 `OfflineAudioContext` 를 사용해 데이터가 녹음되는 노드가 되기도 합니다.

`AudioDestinationNode` has no output (as it _is_ the output, no more `AudioNode` can be linked after it in the audio graph) and one input. 입력받은 음원의 채널의 총 갯수는 반드시 0과 `maxChannelCount값의 사이에 있거나 예외(an exception is raised)가 발생한다.`

주어진 `AudioContext` 의 `AudioDestinationNode` 는 {{domxref("AudioContext.destination")}}프로퍼티를 통해 검색이 된다.

| Number of inputs       | `1`          |
| ---------------------- | ------------ |
| Number of outputs      | `0`          |
| Channel count mode     | `"explicit"` |
| Channel count          | `2`          |
| Channel interpretation | `"speakers"` |

## Properties

_Inherits properties from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : `unsigned long 형의 물리적인 디바이스로 다룰수 있는 최대 채널의 갯수.`

## Methods

_No specific method; inherits methods from its parent,_ _{{domxref("AudioNode")}}_.

## Example

`AudioDestinationNode를 사용하면 복잡한 세팅없이 몇줄의 코드로 오디오 그래프를 확인할 수 있습니다.`

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

To see a more complete implementation, check out one of our MDN Web Audio examples, such as [Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) or [Violent Theremin](http://mdn.github.io/violent-theremin/).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using the Web Audio API](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
