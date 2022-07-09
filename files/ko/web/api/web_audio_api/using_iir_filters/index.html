---
title: IIR 필터 사용하기
slug: Web/API/Web_Audio_API/Using_IIR_filters
tags:
  - API
  - Audio
  - Guide
  - IIRFilter
  - Using
  - Web Audio API
---
<div>{{DefaultAPISidebar("Web Audio API")}}</div>

<p class="summary"><a href="/ko/docs/Web/API/Web_Audio_API">Web Audio API</a>의 <strong><code>IIRFilterNode</code></strong> 인터페이스는 일반적인 <a href="https://en.wikipedia.org/wiki/infinite%20impulse%20response">무한 임펄스 응답</a> (IIR) 필터를 구현하는 {{domxref("AudioNode")}} 프로세서입니다; 이 유형의 필터는 음색 제어 장치와 그래픽 이퀄라이저를 구현하는 데 사용될 수 있으며, 필터 응답 파라미터들은 필요하면 조율될 수 있도록 명시될 수 있습니다. 이 글은 어떻게 이것을 구현하는지, 그리고 간단한 예제로 어떻게 이것을 사용하는지를 살펴봅니다.</p>

<h2 id="Demo">데모</h2>

<p>이 가이드를 위한 간단한 예제는 오디오 재생을 시작하거나 멈추는 재생/정지 버튼과, 사운드의 음색을 변경하는 IIR 필터를 켜고 끄는 토글 버튼을 제공합니다. 이것은 또한 오디오의 주파수 응답이 그려진 캔버스를 제공하므로, 여러분은 IIR 필터가 어떤 이펙트를 가지고 있는지를 볼 수 있습니다.</p>

<p><img alt="재생 버튼, 필터를 켜고 끄기 위한 토글 버튼, 필터가 적용된 이후에 반환된 필터 주파수들을 보여주는 선 그래프 기능을 가진 데모" src="iir-filter-demo.png"></p>

<p>여러분은 <a href="https://codepen.io/Rumyra/pen/oPxvYB/">Codepen에서 전체 데모</a>를 확인할 수 있습니다. <a href="https://github.com/mdn/webaudio-examples/tree/master/iirfilter-node">GitHub에서 소스 코드</a>도 볼 수 있습니다. 이것은 각각 다른 로우패스 주파수들에 대한 몇 가지 다른 계수 값들을 포함합니다 — 여러분은 각각 다른 이용 가능한 이펙트들을 확인해보기 위해 <code>filterNumber</code> 상수의 값을 0에서 3사이의 값으로 변경할 수 있습니다.</p>

<h2 id="Browser_support">브라우저 지원</h2>

<p>비록 IIR 필터가 <a href="/ko/docs/Web/API/BiquadFilterNode">Biquad 필터</a>같은, 더욱 오랫동안에 걸친 Web Audio API 기능들 중 몇 가지보다 더욱 최근에 구현되긴 했지만, <a href="/ko/docs/Web/API/IIRFilterNode">IIR 필터</a>는 현대 브라우저들에서 잘 지원됩니다.</p>

<h2 id="The_IIRFilterNode">IIRFilterNode</h2>

<p>Web Audio API는 이제 {{domxref("IIRFilterNode")}} 인터페이스를 가지고 있습니다. 하지만 이것은 무엇이고 어떻게 이것이 우리가 이미 가지고 있는 {{domxref("BiquadFilterNode")}}와 다를까요?</p>

<p>IIR 필터는 <strong>무한 임펄스 응답 필터</strong>입니다. 이것은 오디오와 디지털 신호 처리에서 사용되는 두 가지 주요한 유형의 필터 중 하나입니다. 다른 유형은 FIR — <strong>유한 임펄스 응답 필터</strong>입니다. <a href="https://dspguru.com/dsp/faqs/iir/basics/">여기 IIR 필터와 FIR 필터</a>에 대한 정말 좋은 개요가 있습니다.</p>

<p>biquad 필터는 실제로는 무한 임펄스 응답 필터의 <em>특정한 유형</em>입니다. 이것은 흔히 쓰이는 유형이고 우리는 이미 Web Audio API에 노드로 이것을 가지고 있습니다. 만약 여러분이 이 노드를 선택한다면 힘든 일들은 이미 여러분을 위해 완료되어 있습니다. 예를 들자면, 만약 여러분이 사운드에서 낮은 주파수들을 여과하기를 원한다면, 여러분은 <a href="/ko/docs/Web/API/BiquadFilterNode/type">type</a>을 <code>highpass</code>로 설정하고 어떤 주파수를 여과할지 (또는 잘라낼지) 설정할 수 있습니다. <a href="https://www.earlevel.com/main/2003/02/28/biquads/">여기 biquad 필터가 어떻게 작동하는지에 대한 더 많은 정보가 있습니다</a>.</p>

<p>여러분이 {{domxref("IIRFilterNode")}}를 {{domxref("BiquadFilterNode")}} 대신에 사용할 때 여러분은 미리 프로그램된 유형을 단지 선택하는 것 보다는 필터를 직접 만드는 것입니다. 그래서 여러분은 하이패스 필터, 또는 로우패스 필터, 또는 더욱 맞춤형의 필터를 만들 수 있습니다. 그리고 이것이 IIR 필터가 유용해지는 지점입니다 — 만약 이미 이용 가능한 세팅중 아무 것도 여러분이 원하는 것에 대해 적합하지 못하다면 여러분은 여러분만의 필터를 만들 수 있습니다. 이것 뿐만이 아니라, 만약 여러분의 오디오 그래프가 내부에 하이패스와 밴드패스 필터를 필요로 한다면, 여러분은 이것을 위해 필요할 두 개의 biquad 필터 노드 대신에 단지 하나의 IIR 필터 노드를 사용할 수 있습니다.</p>

<p>IIR 필터 노드와 함께 필터가 필요로 하는 어떤 <code>feedforward</code>와 <code>feedback</code> 값을 설정할지는 여러분에게 달렸습니다 — 이것은 필터의 특징을 결정합니다. 불리한 면은 이것은 몇 가지 복잡한 수학을 수반한다는 것입니다.</p>

<p>만약 여러분이 더 배우기를 원한다면 여기 몇 가지 <a href="http://ece.uccs.edu/~mwickert/ece2610/lecture_notes/ece2610_chap8.pdf">IIR 필터 뒤의 수학들에 대한 정보</a>가 있습니다. 이는 신호 처리 이론의 영역에 들어갑니다 — 보고 이것이 여러분을 위한 것이 아닌 것처럼 느껴지더라도 걱정하지는 마세요.</p>

<p>만약 여러분이 IIR 필터 노드를 가지고 놀기를 원하고 그러기 위해 몇몇 값들이 필요하다면, <a href="https://www.dspguide.com/CH20.PDF">여기 이미 계산된 값들의 표</a>가 있습니다; 링크된 PDF의 페이지 4 &amp; 5에서 a<em>n</em>값들은 <code>feedForward</code>값을 나타내고 b<em>n</em>값들은 <code>feedback</code>을 나타냅니다. 만약 여러분이 다른 필터들과 어떻게 그것들이 디지털적으로 구현되는지에 대해 더 읽기를 원한다면 <a href="http://musicdsp.org/">musicdsp.org</a>는 또한 훌륭한 자원입니다.</p>

<p>이것 모두를 염두에 둔 채로, Web Audio API로 IIR 필터를 만드는 코드를 살펴봅시다.</p>

<h2 id="Setting_our_IIRFilter_co-efficients">IIR 필터 계수 설정하기</h2>

<p>IIR 필터를 만들 때, 우리는 <code>feedforward</code>와 <code>feedback</code> 계수를 옵션으로 (계수들은 우리가 값들을 표현하는 방법입니다) 전달합니다. 이 파라미터 둘 다는 배열이고, 둘 중 어느 것도 20개의 원소보다 클 수 없습니다.</p>

<p>계수를 설정할 때, <code>feedforward</code> 값들은 모두 0으로 설정될 수 없는데, 그렇지 않으면 아무 것도 필터로 전달되지 않을 것입니다. 이것과 같은 것은 가능합니다:</p>

<pre class="brush: js">let feedForward = [0.00020298, 0.0004059599, 0.00020298];
</pre>

<p><code>feedback</code> 값들은 0으로 시작할 수 없는데, 그렇지 않으면 첫번째 전달에서 아무 것도 되돌아오지 않을 것입니다:</p>

<pre class="brush: js">let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];
</pre>

<div class="note">
<p><strong>참고</strong>: 이 값들은 <a href="https://webaudio.github.io/web-audio-api/#filters-characteristics">Web Audio API 명세의 필터 특징들</a>에서 명시된 로우패스 필터에 기반하여 계산된 값들입니다. 이 필터 노드가 더욱 많은 인기를 얻고 있으므로 우리는 더 많은 계수 값들을 모을 수 있을 것입니다.</p>
</div>

<h2 id="Using_an_IIRFilter_in_an_audio_graph">오디오 그래프에서 IIR 필터 사용하기</h2>

<p>컨텍스트와 필터 노드를 만들어 봅시다:</p>

<pre class="brush: js">const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const iirFilter = audioCtx.createIIRFilter(feedForward, feedBack);
</pre>

<p>우리는 재생할 음원이 필요합니다. 우리는 사용자 정의 함수인 <code>playSoundNode()</code>를 사용하여 이것을 설정하는데, 이 함수는 존재하는 {{domxref("AudioBuffer")}}로부터 <a href="/en-US/docs/Web/API/BaseAudioContext/createBufferSource">버퍼 소스를 만들고</a>, 이것을 기본 목적지에 부착하고, 재생을 시작시키고, 이것을 반환합니다.</p>

<pre class="brush: js">function playSourceNode(audioContext, audioBuffer) {
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = audioBuffer;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  return soundSource;
}</pre>

<p>이 함수는 재생 버튼이 눌러졌을 때 호출됩니다. 재생 버튼 HTML은 다음같이 생겼습니다:</p>

<pre class="brush: html">&lt;button class="button-play" role="switch" data-playing="false" aria-pressed="false"&gt;Play&lt;/button&gt;</pre>

<p>그리고 <code>click</code> 이벤트 리스너는 다음과 같이 시작합니다:</p>

<pre class="brush: js">playButton.addEventListener('click', function() {
    if (this.dataset.playing === 'false') {
        srcNode = playSourceNode(audioCtx, sample);
        ...
}, false);</pre>

<p>IIR 필터를 켜고 끄는 토글 버튼은 비슷한 방식으로 설정됩니다. 우선, HTML은:</p>

<pre>&lt;button class="button-filter" role="switch" data-filteron="false" aria-pressed="false" aria-describedby="label" disabled&gt;&lt;/button&gt;</pre>

<p>필터 버튼의 <code>click</code> 핸들러는 그리고 나서 <code>IIRFilter</code>를 그래프에 연결하는데, 이는 소스와 목적지 사이입니다:</p>

<pre class="brush: js">filterButton.addEventListener('click', function() {
    if (this.dataset.filteron === 'false') {
        srcNode.disconnect(audioCtx.destination);
        srcNode.connect(iirfilter).connect(audioCtx.destination);
        ...
}, false);</pre>

<h3 id="Frequency_response">주파수 응답</h3>

<p>우리는 {{domxref("IIRFilterNode")}} 인스턴스에서 이용 가능한 단 하나의 메서드 <code>getFrequencyResponse()</code>만을 가지고 있는데, 이는 필터 내로 전달되고 있는 오디오의 주파수에 무슨 일이 일어나는지 볼 수 있게 해 줍니다.</p>

<p>우리가 만든 필터의 주파수 플롯을 이 메서드로부터 얻은 데이터로 그려 봅시다.</p>

<p>우리는 세 개의 배열을 만들 필요가 있습니다. 규모 응답과 상(phase) 응답을 받기를 원하는 주파수 값의 배열 하나, 그리고 데이터를 받기 위한 두 개의 빈 배열입니다. 이 세 개 모두 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"><code>float32array</code></a> 유형이여야만 하고 같은 크기여야 합니다.</p>

<pre class="brush: js">// 주파수 응답에 대한 배열들
const totalArrayItems = 30;
let myFrequencyArray = new Float32Array(totalArrayItems);
let magResponseOutput = new Float32Array(totalArrayItems);
let phaseResponseOutput = new Float32Array(totalArrayItems);
</pre>

<p>첫번째 배열을 우리가 원하는 반환될 데이터인 주파수 값으로 채웁시다.</p>

<pre class="brush: js">myFrequencyArray = myFrequencyArray.map(function(item, index) {
    return Math.pow(1.4, index);
});
</pre>

<p>우리는 선형적인 접근을 택할 수도 있지만, 주파수를 가지고 작업할 때는 로그 접근을 취하는 것이 훨씬 나으므로, 배열 원소에서 더 커진 주파수 값들로 배열을 채웁시다.</p>

<p>이제 응답 데이터를 얻읍시다:</p>

<pre class="brush: js">iirFilter.getFrequencyResponse(myFrequencyArray, magResponseOutput, phaseResponseOutput);
</pre>

<p>우리는 이 데이터를 필터 주파수 플롯을 그리기 위해 사용할 수 있습니다. 우리는 2d 캔버스 컨텍스트에서 그렇게 할 것입니다.</p>

<pre class="brush: js">// 캔버스 요소를 만들고 dom에 추가합니다
const canvasContainer = document.querySelector('.filter-graph');
const canvasEl = document.createElement('canvas');
canvasContainer.appendChild(canvasEl);

// 2d 컨텍스트를 설정하고 크기를 설정합니다
const canvasCtx = canvasEl.getContext('2d');
const width = canvasContainer.offsetWidth;
const height = canvasContainer.offsetHeight;
canvasEl.width = width;
canvasEl.height = height;

// 배경을 채울 색상을 설정합니다
canvasCtx.fillStyle = 'white';
canvasCtx.fillRect(0, 0, width, height);

// 크기에 맞춰 여백을 설정합니다
const spacing = width/16;
const fontSize = Math.floor(spacing/1.5);

// 축을 그립니다
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = 'grey';

canvasCtx.beginPath();
canvasCtx.moveTo(spacing, spacing);
canvasCtx.lineTo(spacing, height-spacing);
canvasCtx.lineTo(width-spacing, height-spacing);
canvasCtx.stroke();

// 축은 gain(y축)과 주파수(x축)입니다 -&gt; 라벨을 만듭니다
canvasCtx.font = fontSize+'px sans-serif';
canvasCtx.fillStyle = 'grey';
canvasCtx.fillText('1', spacing-fontSize, spacing+fontSize);
canvasCtx.fillText('g', spacing-fontSize, (height-spacing+fontSize)/2);
canvasCtx.fillText('0', spacing-fontSize, height-spacing+fontSize);
canvasCtx.fillText('Hz', width/2, height-spacing+fontSize);
canvasCtx.fillText('20k', width-spacing, height-spacing+fontSize);

// 규모 응답 데이터를 순회하고 필터를 그립니다

canvasCtx.beginPath();

for(let i = 0; i &lt; magResponseOutput.length; i++) {

    if (i === 0) {
        canvasCtx.moveTo(spacing, height-(magResponseOutput[i]*100)-spacing );
    } else {
        canvasCtx.lineTo((width/totalArrayItems)*i, height-(magResponseOutput[i]*100)-spacing );
    }

}

canvasCtx.stroke();
</pre>

<h2 id="Summary">요약</h2>

<p>이것이 IIR 필터 데모의 전부입니다. 이것은 어떻게 기본을 사용하는지를 보여주고, 왜 이것이 유용한지와 어떻게 이것이 작동하는지를 이해하는 것을 도와주었을 것입니다.</p>
