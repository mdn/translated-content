---
title: Web Audio API 사용하기
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
tags:
  - API
  - Audio
  - Guide
  - Playback
  - Using
  - Web
  - Web Audio
  - Web Audio API
  - basics
  - sound
translation_of: Web/API/Web_Audio_API/Using_Web_Audio_API
---
<div>{{DefaultAPISidebar("Web Audio API")}}</div>

<p class="summary" id="webaudioapibasics"><span class="seoSummary"><a href="/ko/docs/Web/API/Web_Audio_API">Web Audio API</a> 시작하기를 한번 봐 봅시다. 우리는 몇 가지 개념들을 간략하게 살펴보고, 그 다음에 오디오 트랙의 로드, 재생, 정지하고 볼륨 및 스테레오 패닝을 변경할 수 있는 간단한 카세트 플레이어 예제를 공부할 것입니다.</span></p>

<p>{{HTMLElement("canvas")}}가 {{HTMLElement("img")}} 요소와 나란히 공존하는 것처럼, Web Audio API는 {{HTMLElement("audio")}} 미디어 요소를 대체하기보다는 보완합니다. 사용하는 경우에 따라 오디오를 구현하기 위해 무슨 도구를 사용해야 할 지가 결정될 것입니다. 단순히 오디오 트랙의 재생을 제어하려는 경우 <code>&lt;audio&gt;</code> 미디어 요소는 Web Audio API보다 더 빠르고 나은 해결책을 제공합니다. 더욱 복잡한 오디오 프로세싱을 수행하기를 원한다면, Web Audio API가 더욱 강한 기능과 제어를 제공합니다.</p>

<p>Web Audio API의 강력한 기능은 이것이 엄격한 "사운드 호출 제한(sound call limitation)"을 가지고 있지 않다는 것입니다. 예를 들어, 한 번에 32 또는 64개의 사운드 호출 제한이 없습니다. 일부 프로세서는 버벅거림 없이 1,000개 이상의 사운드를 동시에 재생할 수 있을 지도 모릅니다.</p>

<h2 id="Example_code">예제 코드</h2>

<p>우리의 카세트 플레이어는 다음과 같이 생겼습니다:</p>

<p><img alt="재생, 패닝, 그리고 볼륨 제어가 있는 카세트 플레이어" src="boombox.png" style="border-style: solid; border-width: 1px;"></p>

<p>플레이 재생 버튼과, 음량과 스테레오 패닝을 조절할 수 있는 볼륨 그리고 패닝 슬라이더가 있는 복고풍의 카세트 덱에 주목해 주세요. 우리는 이 라디오를 더욱 복잡하게 만들 수도 있지만, 이 단계에서의 간단한 학습을 위해서는 이것은 이상적입니다.</p>

<p><a href="https://codepen.io/Rumyra/pen/qyMzqN/">Codepen에서 최종 데모를 확인</a>하거나, <a href="https://github.com/mdn/webaudio-examples/tree/master/audio-basics">GitHub에서 소스 코드를 확인</a>하실 수 있습니다.</p>

<h2 id="Browser_support">브라우저 지원</h2>

<p>현대의 브라우저들은 Web Audio API의 대부분의 기능들에 대해 좋은 지원을 가지고 있습니다. 이 API에는 많은 기능들이 있으므로, 더욱 정확한 정보를 위해서는 각 참조 페이지 하단의 브라우저 호환성 목록을 확인해야 할 것입니다.</p>

<h2 id="Audio_graphs">오디오 그래프</h2>

<p>Web Audio API 내부의 모든 것은 오디오 그래프의 개념에 근거하고 있는데, 이는 노드로 구성되어 있습니다.</p>

<p>Web Audio API는 <strong>오디오 컨텍스트</strong>내에서 오디오 작업을 다루고, <strong>모듈러 라우팅</strong>(modular routing)을 허용하도록 설계되었습니다. 기본적인 오디오 작업은 <strong>오디오 노드</strong>와 함께 수행되는데, 이는 <strong>오디오 라우팅 그래프</strong>를 형성하기 위해 함께 연결되어 있습니다. 여러분은 조작할 사운드 소스인 입력 노드, 사운드를 원하는 대로 변경하는 수정 노드, 사운드를 저장하거나 듣게 허용하는 출력 노드(도착지)를 가지고 있습니다.</p>

<p>다른 채널 레이아웃을 가진 몇몇 오디오 소스들은 심지어 단일 컨텍스트 내에서도 지원됩니다. 이 모듈러 디자인 때문에, 여러분은 역동적인 효과를 가진 복잡한 오디오 기능을 생성할 수 있습니다.</p>

<h2 id="Audio_context">오디오 컨텍스트</h2>

<p>Web Audio API로 무엇인가를 하기 위해서는 오디오 컨텍스트의 인스턴스를 생성할 필요가 있습니다. 이는 우리에게 API의 모든 기능에 접근할 수 있게 합니다.</p>

<pre class="brush: js">// 레거시 브라우저를 위해
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
</pre>

<p>우리가 이것을 할 때 무슨 일이 벌어질까요? {{domxref("BaseAudioContext")}}가 자동적으로 생성되고 온라인 오디오 컨텍스트로 확장됩니다. 우리는 라이브 사운드를 재생하기 때문에 이것을 원할 것입니다.</p>

<div class="note">
<p><strong>참고</strong>: 예를 들어, 만약 여러분이 단지 오디오 데이터를 처리하고, 그것을 버퍼링하고 스트리밍 하지만 재생하기를 원하지 않는다면, 여러분은 {{domxref("OfflineAudioContext")}}를 만드는 방법을 살펴볼 수 있습니다.</p>
</div>

<h2 id="Loading_sound">사운드 로딩하기</h2>

<p>이제, 생성된 오디오 컨텍스트는 재생할 사운드가 필요합니다. API를 사용해 사운드를 재생하는 몇 가지 방법이 있습니다. 간단한 방법으로 시작해 봅시다 — 우리는 카세트 플레이어를 가지고 있으므로, 노래의 전체 트랙을 재생하기를 원할 것입니다. 또한, 접근성을 위해서, 트랙을 DOM에 노출시키는 것은 좋습니다. 우리는 {{htmlelement("audio")}} 요소를 사용하여 페이지에 노래를 노출시킬 것입니다.</p>

<pre class="brush: html">&lt;audio src="myCoolTrack.mp3" &gt;&lt;/audio&gt;
</pre>

<div class="note">
<p><strong>참고</strong>: 만약 로딩한 사운드 파일이 다른 도메인에 있다면 <code>crossorigin</code> 특성을 사용할 필요가 있습니다; 더 많은 정보를 보시려면 <a href="/ko/docs/Web/HTTP/CORS">Cross Origin Resource Sharing (CORS)</a>를 참고해 보세요.</p>
</div>

<p>Web Audio API로 얻을 수 있는 모든 것을 사용하려면 이 요소에서 소스를 가져와 우리가 만든 컨텍스트에 연결해야 합니다. 운 좋게도 이걸 할 수 있는 메서드가 있습니다 — {{domxref("AudioContext.createMediaElementSource")}}입니다:</p>

<pre class="brush: js">// 오디오 요소를 얻습니다
const audioElement = document.querySelector('audio');

// 오디오 요소를 오디오 컨텍스트에 전달합니다
const track = audioContext.createMediaElementSource(audioElement);
</pre>

<div class="note">
<p><strong>참고</strong>: 위의 <code>&lt;audio&gt;</code> 요소는 {{domxref("HTMLMediaElement")}} 유형의 객체에 의해 DOM에 표현되는데, 이는 고유한 기능을 가지고 있습니다. 이것의 모든 것은 그대로 남아 있습니다; Web Audio API에서 사운드를 사용할 수 있도록 허용할 뿐입니다.</p>
</div>

<h2 id="Controlling_sound">사운드 제어하기</h2>

<p>웹에서 사운드가 재생될 때, 사용자가 사운드를 제어할 수 있게 허용하는 것은 중요합니다. 사용하는 경우에 따라, 무수한 옵션이 있지만, 우리는 사운드를 재생/정지하고, 트랙의 볼륨을 변경하고, 그리고 좌에서 우로 이동하는 기능을 제공할 것입니다.</p>

<p>JavaScript 코드에서 프로그래밍적으로 사운드를 제어하는 것은 브라우저의 자동 재생 지원 정책에 의해 다뤄지는데, 그러한 것은 허가가 사용자 (또는 화이트리스트)에 의해 승인되지 않은 채로 차단될 가능성이 있습니다. 자동 재생 정책은 보통 스크립트가 오디오를 재생하게 할 수 있게 하기 전에 페이지에서 명시적인 허가나 사용자의 허락 중 하나를 요구합니다.</p>

<p>이 특별한 요구는 필수적으로 가동 중인데 그 이유는 예기치 않은 사운드는 짜증나고 거슬릴 수 있고, 접근성 문제를 유발할 수 있기 때문입니다. <a href="/ko/docs/Web/Media/Autoplay_guide">미디어와 Web Audio API에 대한 자동 재생 가이드</a> 문서에서 이것에 대해 더 배울 수 있습니다.</p>

<p>우리의 스크립트는 사용자의 입력 이벤트 (예를 들자면 재생 버튼의 클릭)에 응답하여 오디오를 재생하므로, 우리는 이상이 없고 자동 재생 방지로부터 문제가 없어야만 합니다. 그러므로, 우리의 재생과 정지 기능을 살펴봄으로써 시작해 봅시다. 우리는 트랙이 재생중일 때 정지 버튼으로 바뀌는 재생 버튼을 가지고 있습니다:</p>

<pre class="brush: html">&lt;button data-playing="false" role="switch" aria-checked="false"&gt;
    &lt;span&gt;Play/Pause&lt;/span&gt;
&lt;/button&gt;
</pre>

<p>트랙을 재생하기 전에 우리는 오디오 소스/입력 노드에서 목적지로 오디오 그래프를 연결할 필요가 있습니다.</p>

<p>우리는 이미 오디오 요소를 API에 전달함으로써 입력 노드를 생성했습니다. 대개 여러분은 출력 노드를 생성할 필요가 없습니다, 여러분은 단지 다른 노드를, 여러분을 위해 상황을 다루는 {{domxref("BaseAudioContext.destination")}}에 연결할 수 있습니다.</p>

<pre class="brush: js">track.connect(audioContext.destination);
</pre>

<p>이 노드들을 시각화하는 좋은 방법은 오디오 그래프를 그리는 것입니다. 이것이 현재 우리의 오디오 그래프입니다:</p>

<p><img alt="기본 목적지에 연결된 오디오 요소 소스를 가진 오디오 그래프" src="graph1.jpg" style="border-style: solid; border-width: 1px;"></p>

<p>이제 우리는 재생과 정지 기능을 추가할 수 있습니다.</p>

<pre class="brush: js">// 재생 버튼을 선택합니다
const playButton = document.querySelector('button');

playButton.addEventListener('click', function() {

    // 컨텍스트가 연기된(suspended) 상태에 있는지 검사합니다 (자동 재생 정책)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // 상태에 따라 트랙을 재생하거나 정지합니다
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);
</pre>

<p>우리는 또한 트랙이 재생을 마쳤을 때 무엇을 할 지를 고려할 필요가 있습니다. <code>HTMLMediaElement</code>는 재생이 완료되었을 때 <code>ended</code> 이벤트를 한 번 발생시키므로, 우리는 그에 맞춰 코드를 실행시킬 수 있습니다.</p>

<pre class="brush: js">audioElement.addEventListener('ended', () =&gt; {
    playButton.dataset.playing = 'false';
}, false);
</pre>

<h2 id="Modifying_sound">사운드 수정하기</h2>

<p>우리가 가지고 있는 사운드를 변경하기 위해, 몇몇 기본적인 수정 노드에 대해 공부해 봅시다. 여기가 Web Audio API가 정말 쓸모있어지기 시작하는 곳입니다. 우선, 볼륨을 변경해 봅시다. 이것은 {{domxref("GainNode")}}를 사용하여 구현될 수 있는데, 이는 음파가 얼마나 큰지를 표현합니다.</p>

<p>Web Audio API로 노드를 생성하는 두 가지 방법이 있습니다. 컨텍스트 그 자체에 있는 팩토리 메서드를 사용하거나 (예: <code>audioContext.createGain()</code>) 노드의 생성자(constructor)를  사용할 수 있습니다 (예: <code>new GainNode()</code>). 우리는 팩토리 메서드를 사용할 것입니다.</p>

<pre class="brush: js">const gainNode = audioContext.createGain();
</pre>

<p>이제 우리는 입력이 gain에 연결되고, 그리고 gain 노드가 목적지에 연결되도록 이전으로부터 우리의 오디오 그래프를 업데이트해야 합니다:</p>

<pre class="brush: js">track.connect(gainNode).connect(audioContext.destination);
</pre>

<p>이는 우리의 오디오 그래프를 다음과 같이 보이게 만들 것입니다:</p>

<p><img alt="오디오 소스를 수정하는 gain 노드가 연결되고, 그리고 나서 기본 목적지로 가는 오디오 요소 소스를 가진 오디오 그래프" src="graph2.jpg" style="border-style: solid; border-width: 1px;"></p>

<p>gain의 기본값은 1입니다; 이것은 현재 볼륨을 같게 유지할 것입니다. gain은 약 -3.4의 최소값과 약 3.4의 최대값으로 설정될 수 있습니다. 여기서 우리는 카세트 플레이어가 gain을 2까지 (기존 볼륨의 2배) 그리고 0까지 (이것은 효과적으로 사운드를 무음으로 만들 것입니다) 움직일 수 있게 허용할 것입니다.</p>

<p>사용자에게 이것을 하기 위한 제어 방법을 제공합시다 — 우리는 <a href="/en-US/docs/Web/HTML/Element/input/range">범위 입력</a>을 사용할 것입니다:</p>

<pre class="brush: html">&lt;input type="range" id="volume" min="0" max="2" value="1" step="0.01"&gt;
</pre>

<div class="note">
<p><strong>참고</strong>: 범위 입력은 오디오 노드의 값을 갱신하는 데 있어 정말로 유용한 입력 유형입니다. 여러분은 범위의 값을 명시할 수 있고 오디오 노드의 파라미터와 함께 이것을 바로 사용할 수 있습니다.</p>
</div>

<p>그러므로 이 입력값을 취하고 입력 노드가 유저에 의해 바뀐 값을 가지고 있을 때 gain 값을 업데이트해 봅시다:</p>

<pre class="brush: js">const volumeControl = document.querySelector('#volume');

volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);
</pre>

<div class="note">
<p><strong>참고</strong>: 노드 객체의 값 (예: <code>GainNode.gain</code>)은 단순한 값이 아닙니다. 이 값은 실제로는 {{domxref("AudioParam")}} 유형의 객체입니다 — 이것은 파라미터라고 불립니다. 이것이 바로 <code>gain</code>에 직접 값을 설정하기보다, <code>GainNode.gain</code>의 <code>value</code> 속성을 설정해야 하는 이유입니다. 이렇게 함은 이 객체가 좀 더 유연해 질 수 있게 하는데, 예를 들자면 파라미터에 주어진 시간 사이에서 변화시킬 값들의 집합을 전달하는 것을 고려해 볼 수 있겠습니다.</p>
</div>

<p>좋습니다, 이제 사용자는 트랙의 볼륨을 업데이트할 수 있습니다! gain 노드는 만약 여러분이 무음 기능을 추가하기를 원한다면 사용하기에 완벽한 노드입니다.</p>

<h2 id="Adding_stereo_panning_to_our_app">스테레오 패닝을 추가하기</h2>

<p>우리가 방금 배운 것을 연습하기 위해 또 다른 수정 노드를 추가해 봅시다.</p>

<p>{{domxref("StereoPannerNode")}} 노드가 있는데, 이는 만약 사용자가 스테레오를 사용할 수 있다면, 좌측과 우측 스피커 사이의 소리의 균형을 변화시킵니다.</p>

<p><strong>참고</strong>: <code>StereoPannerNode</code>는 여러분이 단지 좌에서 우로 스테레오 패닝을 원하는 단순한 상황을 위한 것입니다. {{domxref("PannerNode")}}도 있는데, 이는 더욱 복잡한 효과를 생성하기 위해, 3D 공간, 즉 사운드 <em>공간화</em> 제어의 훌륭한 방법을 고려합니다. 예를 들자면 이것은 머리 위를 나는 새나 사용자의 뒤로부터 오른 소리를 생성하기 위해 게임과 3D 앱에서 사용됩니다.</p>

<p>이것을 시각화하기 위해서, 우리는 우리의 오디오 그래프를 다음과 같이 보이게 만들 것입니다.</p>

<p><img alt="입력 노드, 두 개의 수정 노드 (gain 노드와 stereo panner 노드) 그리고 도착지 노드를 보여주는 오디오 그래프를 보여주는 이미지" src="graphpan.jpg" style="border-style: solid; border-width: 1px;"></p>

<p>이번엔 노드 생성의 생성자 메서드를 사용해 봅시다. 이 방법으로 할 때에는, 이 특정한 노드가 취할지도 모르는 어떠한 옵션들과 컨텍스트를 전달해야만 합니다.</p>

<pre class="brush: js">const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
</pre>

<div class="note">
<p><strong>노트</strong>: 노드 생성의 생성자 메서드는 이 시점에서 모든 브라우저에서 지원되지 않습니다. 오래된 팩토리 메서드는 더욱 널리 지원됩니다.</p>
</div>

<p>여기서 우리의 값은 범위가 -1 (극좌)에서 1 (극우)까지입니다. 이 파라미터를 달라지게 하기 위해 다시 범위 유형 입력을 사용합시다:</p>

<pre class="brush: html">&lt;input type="range" id="panner" min="-1" max="1" value="0" step="0.01"&gt;
</pre>

<p>패너의 값을 조정하기 위해 전에 했던 것과 같은 방법으로 우리는 이 입력으로부터의 값을 사용합니다:</p>

<pre class="brush: js">const pannerControl = document.querySelector('#panner');

pannerControl.addEventListener('input', function() {
    panner.pan.value = this.value;
}, false);
</pre>

<p>모든 노드를 같이 연결하기 위해, 우리의 오디오 그래프를 다시 조정해 봅시다:</p>

<pre class="brush: js">track.connect(gainNode).connect(panner).connect(audioContext.destination);
</pre>

<p>유일하게 남은 것은 테스트해보는 것입니다: <a href="https://codepen.io/Rumyra/pen/qyMzqN/">Codepen에서 최종 데모를 확인해 보세요.</a></p>

<h2 id="Summary">요약</h2>

<p>훌륭합니다! 우리는 우리의 '테이프'를 재생하는 카세트 플레이어를 가지고 있고, 볼륨과 스테레오 패닝을 조정할 수 있는데, 이는 우리에게 작동하는 상당히 기본적인 오디오 그래프를 제공합니다.</p>

<p>이것은 여러분의 웹사이트나 웹 앱에 오디오를 추가하기 위해 필요할 상당수의 기본을 구성합니다. Web Audio API에는 더 많은 기능이 있지만, 여러분이 한 번 노드의 개념을 잡고 오디오 그래프를 함께 합하면, 우리는 더욱 복잡한 기능을 보는 것으로 이동할 수 있습니다.</p>

<h2 id="More_examples">더 많은 예제</h2>

<p>Web Audio API에 대해 더 배우기 위해 이용해볼 수 있는 다른 예제들이 있습니다.</p>

<p><a href="https://github.com/mdn/voice-change-o-matic">Voice-change-O-matic</a>는 다른 효과와 시각화를 고를 수 있게 허용하는 재미있는 목소리 변조기와 소리 시각화 웹 앱입니다. 이 애플리케이션은 상당히 기본적이지만, 다수의 Web Audio API 기능의 동시 사용을 보여줍니다. (<a href="https://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic를 실행해 보세요</a>).</p>

<p><img alt="음파와, 목소리 효과와 시각화를 선택하기 위한 옵션이 보여지고 있는 UI" src="voice-change-o-matic.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>Web Audio API를 보여주기 위해 명확하게 개발된 또 다른 애플리케이션은 <a href="https://mdn.github.io/violent-theremin/">Violent Theremin</a>인데, 이는 마우스 포인터를 움직임으로써 음 높이(pitch)와 볼륨을 변경하는 것을 허용하는 간단한 웹 애플리케이션입니다. 이것은 또한 사이키델릭한 라이트 쇼를 제공합니다 (<a href="https://github.com/mdn/violent-theremin">Violent Theremin 소스 코드를 확인해 보세요</a>).</p>

<p><img alt="화면 지우기와 음소거라고 써진 두 개의 버튼을 가진, 무지개 색으로 가득 찬 페이지 " src="violent-theremin.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>또한 더 많은 예시를 보시려면 <a href="https://github.com/mdn/webaudio-examples">webaudio-examples repo</a>를 참고해 보세요.</p>
