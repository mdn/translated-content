---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>{{ domxref("AnalyserNode") }} 接口的 <code>fftSize</code> 属性的值是一个无符号长整型的值，表示（信号）样本的窗口大小。当执行<a href="/en-US/docs/">快速傅里叶变换</a>（Fast Fourier Transfor (FFT)）时，这些（信号）样本被用来获取频域数据。</p>

<p>fftSize 属性的值必须是从 32 到 32768 范围内的 2 的非零幂; 其默认值为 2048.</p>

<div class="note">
<p><strong>注意</strong>: 如果其值不是 2 的幂，或者它在指定范围之外，则抛出异常 INDEX_SIZE_ERR.</p>
</div>

<h2 id="语法">语法</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
</pre>

<h3 id="值">值</h3>

<p>一个无符号长整型。</p>

<h2 id="例子">例子</h2>

<p>下面的例子展示了 <a href="/zh-CN/docs/Web/API/AudioContext"><code>AudioContext</code></a> 创建一个 <code>AnalyserNode</code>, 然后用 <a href="/zh-CN/docs/Web/API/Window/requestAnimationFrame"><code>requestAnimationFrame</code></a> 和 <a href="/zh-CN/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> 去反复收集当前音频的时域数据，并绘制为一个示波器风格的输出 (频谱).</p>

<p>更多的例子/信息，查看 <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a> 演示 (相关代码在 <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js 在 128 行~205 行</a>).</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// draw an oscilloscope of the current audio source

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

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.AnalyserNode.fftSize")}}

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
