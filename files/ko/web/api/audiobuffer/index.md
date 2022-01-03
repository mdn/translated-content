---
title: AudioBuffer
slug: Web/API/AudioBuffer
translation_of: Web/API/AudioBuffer
---
<p>{{APIRef}}</p>
<div>
 <p><code>AudioBuffer는 </code>{{ domxref("AudioContext.decodeAudioData()") }} 혹은 {{ domxref("AudioContext.createBuffer()") }}를 통해 만들어진 로우 데이터를 메모리상에 두고 사용하는 기술이다. 일단 한번 AudioBuffer 에 들어간 정보는 {{ domxref("AudioBufferSourceNode") }}를 통해 재생이 가능하다.</p>
 <p>이 객체는 일반적으로 45초 이하의 오디오 정보를 가지고 있다. 더 긴 시간의 소리정보는 {{domxref("MediaElementAudioSourceNode")}}를 사용하는 것이 더 적합하다.  The buffer contains data in the following format:  non-interleaved IEEE754 32-bit linear PCM with a nominal range between <code>-1</code> and <code>+1</code>, that is, 32bits floating point buffer, with each samples between -1.0 and 1.0.  만약에  {{domxref("AudioBuffer")}} 가 멀티 채널을 가진다면 이는 버퍼를 나눠서 저장을 합니다.</p>
</div>
<h2 id="Properties">Properties</h2>
<dl>
 <dt>
  {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}</dt>
 <dd>
  버퍼에 저장된 샘플정보의 매 초당 배율을 float형으로 리턴한다.</dd>
 <dt>
  {{domxref("AudioBuffer.length")}} {{readonlyInline}}</dt>
 <dd>
  샘플프레임안의 버퍼에 저장된 PCM정보의 길이를 정수형으로 리턴한다.</dd>
 <dt>
  {{domxref("AudioBuffer.duration")}} {{readonlyInline}}</dt>
 <dd>
  버퍼에 저장된 PCM정보의 재생길이를 double형으로 리턴한다.</dd>
 <dt>
  {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}</dt>
 <dd>
  버퍼에 저장된 PCM정보에 의해 구분된 채널의 갯수를 정수형으로 리턴한다.</dd>
</dl>
<h2 id="Methods">Methods</h2>
<dl>
 <dt>
  {{domxref("AudioBuffer.getChannelData()")}}</dt>
 <dd>
  {{jsxref("Float32Array")}}에 담긴 PCM데이터와 channel 파라메로 정의된 채널 정보(첫번째 채널은 0)를 리턴한다.</dd>
 <dt>
  {{domxref("AudioBuffer.copyFromChannel()")}}</dt>
 <dd>
  특정 채널의 <span class="idlType"><code>AudioBuffer를 </code></span><code>destination배열로 복사를 한다.</code></dd>
 <dt>
  {{domxref("AudioBuffer.copyToChannel()")}}</dt>
 <dd>
  특정 채널의 <span class="idlType"><code>AudioBuffer에 </code></span><code>source배열로 부터 정보를 복사해 온다.</code></dd>
</dl>
<h2 id="Example">Example</h2>
<p>이 예제는 어떻게 <code>AudioBuffer 를 생성하고</code> 랜덤한 화이트 노이즈를 채우는 방법을 설명한다.  <a href="https://github.com/mdn/audio-buffer">audio-buffer demo</a> 에서 전체 소스를 확인 가능하고 <a href="http://mdn.github.io/audio-buffer/">running live</a> 실시간 테스트고 가능하다.</p>
<pre class="brush: js;highlight:[7,14,27]">// Stereo
var channels = 2;

// Create an empty two second stereo buffer at the
// sample rate of the AudioContext
var frameCount = audioCtx.sampleRate * 2.0;
var myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Fill the buffer with white noise;
  // just random values between -1.0 and 1.0
  for (var channel = 0; channel &lt; channels; channel++) {
    // This gives us the actual array that contains the data
    var nowBuffering = myArrayBuffer.getChannelData(channel);
    for (var i = 0; i &lt; frameCount; i++) {
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

}
</pre>

<h2 id="Specification">Specification</h2>

<p>{{Compat("api.AudioBuffer")}}</p>

<h2 id="See_also">See also</h2>
<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
