---
title: AudioContext.createAnalyser()
slug: Web/API/BaseAudioContext/createAnalyser
translation_of: Web/API/BaseAudioContext/createAnalyser
original_slug: Web/API/AudioContext/createAnalyser
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>createAnalyser()</code>メソッドは、音声の時間と周波数を解析する{{ domxref("AnalyserNode") }}を生成します。これはデータの可視化などで使えます。</p>
</div>

<div class="note">
<p><strong>注:</strong> このノードの詳しい説明は、{{domxref("AnalyserNode")}}のページを参照してください。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();</pre>

<h3 id="Description" name="Description">戻り値</h3>

<p>{{domxref("AnalyserNode")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次のサンプルでは、基本的な<code>AudioContext</code>の<code>AnalyserNode</code>の生成、<code>requestAnimationFrame()</code>による時間データの周期的な収集と「オシロスコープのように」現在の音声を出力する方法を示しています。より完全な例と情報は、<a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>デモ(<a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.jsの128–205行目</a>)を参照してください。</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// 現在の音のオシロスコープのように描く

function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i &lt; bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

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

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createAnalyser-AnalyserNode', 'createAnalyser()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.BaseAudioContext.createAnalyser")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
