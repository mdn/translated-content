---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
---

{{APIRef("Web Audio API")}}

**`AudioBufferSourceNode`** 의 오디오 소스는 in-memory 의 {{domxref("AudioNode")}} 상에 저장된 데이터로 구성되어있다. 이는 오디오 소스 그 자체처럼 동작을 한다.

`AudioBufferSourceNode` 는 입력정보를 가지지 않고 정확히 하나의 출력정보를 가진다. 출력상의 여러 채널은 `AudioBufferSourceNode.buffer` 프로퍼티로로 동작할 {{domxref("AudioBuffer")}} 의 채널의 수와 일치한다. 만약에 `AudioBufferSourceNode.buffer`가 `null`이라면 출력은 오직 무음으로 출력이된다. {{domxref("AudioBufferSourceNode")}}는 오직 한번만 재생이 된다. 즉 `AudioBufferSourceNode.start()`가 한번만 호출될수 있다. 만약에 한번더 재생하기를 원한다면 또 다른 `AudioBufferSourceNode`를 생성해야 한다. 이 노드는 매우 간편히 생성가능하다. `AudioBuffer`는 다른 곳에서 접근해 재생이 가능하다. `AudioBufferSourceNode`s는 "fire and forget(쓰고 잊자)" 처럼 한번 쓰고 나면 해당노드의 모든 참조들이 없어지고 자동적으로 가비지 콜렉터로 가게된다.

여러번 실행을 하면 `AudioBufferSourceNode.stop()`을 통해 정지가 가능하다. 가장 최근의 실행된것이 이전의 것으로 대체가 되어 `AudioBufferSourceNode`버퍼의 마지막에 도착하지 않은 상태가 된다.

![The AudioBufferSourceNode takes the content of an AudioBuffer and m](webaudioaudiobuffersourcenode.png)

| Number of inputs  | `0`                                                  |
| ----------------- | ---------------------------------------------------- |
| Number of outputs | `1`                                                  |
| Channel count     | defined by the associated {{domxref("AudioBuffer")}} |

## Properties

_{{domxref("AudioNode")}}_ 를 부모로 가지는 프로퍼티.

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : {{domxref("AudioBuffer")}} 의 음원이 재생이 되거나 값이 NULL 이라면 채널하나을 무음으로 정의한다.
- {{domxref("AudioBufferSourceNode.playbackRate")}} {{readOnlyinline}}
  - : {{domxref("AudioParam")}}에는 두개의 파라메터가 있는 데 그중의 하나인 [a-rate](/ko/docs/Web/API/AudioParam#a-rate)을 재생이될 정보의 속도요소로 정의 한다. 출력에 수정된 음의 보정이 있지않으므로 이 는 샘플의 음을 변경하는데 사용이 가능하다.
- {{domxref("AudioBufferSourceNode.loop")}}
  - : Boolean값으로 음원이 재생되어 {{domxref("AudioBuffer")}}의 끝에 다달했음을 알리는 값이다. false를 기본값으로 가진다.
- {{domxref("AudioBufferSourceNode.loopStart")}}
  - : double값으로 {{domxref("AudioBuffer")}}가 재시작이 되는 경우 반드시 발생한다. 기본값은 0이다.
- {{domxref("AudioBufferSourceNode.loopEnd")}}
  - : double값으로 {{domxref("AudioBuffer")}}가 다시 재생이 되는 경우 재생을 멈춰야 한다(그리고 결국에는 다시 시작한다). 기본값은 0이다.

### Event handlers

- {{domxref("AudioBufferSourceNode.onended")}}
  - : event handlers로 ended 이벤트와 연관된 콜백함수를 가진다.

## Methods

_{{domxref("AudioNode")}}_ 를 부모로 가지는 매서드.

- {{domxref("AudioBufferSourceNode.start()")}}
  - : 음원이 재생되는 시작되는 시점.
- {{domxref("AudioBufferSourceNode.stop()")}}
  - : 음원이 재생되는 끝나는 시점.

## Examples

이 예제는 two-second buffer를 생성하여 화이트 노이즈로 채워 이를 `AudioBufferSourceNode을 통해 재생한다.`

> **참고:** You can also [run the code live](http://mdn.github.io/audio-buffer/), or [view the source](https://github.com/mdn/audio-buffer).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector("button");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// Stereo
var channels = 2;
// Create an empty two-second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function () {
  // Fill the buffer with white noise;
  //just random values between -1.0 and 1.0
  for (var channel = 0; channel < channels; channel++) {
    // This gives us the actual ArrayBuffer that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i < frameCount; i++) {
      // Math.random() is in [0; 1.0]
      // audio needs to be in [-1.0; 1.0]
      nowBuffering[i] = Math.random() * 2 - 1;
    }
  }

  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  var source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();
};
```

> **참고:** For a `decodeAudioData` example, see the {{domxref("AudioContext.decodeAudioData")}} page.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using the Web Audio API](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
