---
title: AnalyserNode.getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
tags:
  - API
  - AnalyserNode
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AnalyserNode.getFloatTimeDomainData
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>{{ domxref("AnalyserNode") }} 인터페이스의 <strong><code>getFloatTimeDomainData()</code></strong> 메서드는 전달된 {{domxref("Float32Array")}} 배열 내로 현재 파형, 즉 시간 영역 데이터를 복사합니다.</p>

<h2 id="Syntax">구문</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
var dataArray = new Float32Array(analyser.fftSize); // Float32Array는 fftSize와 같은 길이일 필요가 있습니다
analyser.getFloatTimeDomainData(dataArray); // getFloatTimeDomainData()로부터 반환된 데이터로 Float32Array를 채웁니다
</pre>


<h3 id="Parameters">매개변수</h3>

<dl>
 <dt><code>array</code></dt>
 <dd>시간 영역 데이터가 복사될 {{domxref("Float32Array")}}.<br>
 만약 배열이 {{domxref("AnalyserNode.frequencyBinCount")}}보다 더 적은 요소를 가지고 있다면, 초과한 요소는 탈락됩니다. 만약 이것이 필요한 것보다 더 많은 요소를 가지고 있다면, 초과한 요소는 무시됩니다.</dd>
</dl>

<h3 id="Return_value">반환 값</h3>

<p>없음.</p>

<h2 id="Example">예제</h2>

<p>다음의 예제는 <code>AnalyserNode</code>를 생성하기 위한 {{domxref("AudioContext")}}와 그리고 나서 반복적으로 시간 영역 데이터를 수집하고 현재 오디오 입력의 "오실로스코프 스타일의" 출력을 그리기 위한 {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}과 {{htmlelement("canvas")}}의 기본 사용을 보여줍니다. 더 완벽한 응용 예제/정보를 보려면 <a href="https://mdn.github.io/voice-change-o-matic-float-data/">Voice-change-O-matic-float-data</a> 데모를 확인하세요 (<a href="https://github.com/mdn/voice-change-o-matic-float-data">소스 코드</a>도 보세요). </p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 1024;
var bufferLength = analyser.fftSize;
console.log(bufferLength);
var dataArray = new Float32Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getFloatTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
  canvasCtx.beginPath();

  var sliceWidth = WIDTH * 1.0 / bufferLength;
  var x = 0;

  for(var i = 0; i &lt; bufferLength; i++) {
    var v = dataArray[i] * 200.0;
    var y = HEIGHT/2 + v;

    if(i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }
    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height/2);
  canvasCtx.stroke();
};

draw();</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Web Audio API 사용하기</a></li>
</ul>
