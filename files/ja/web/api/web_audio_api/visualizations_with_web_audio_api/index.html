---
title: Visualizations with Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
tags:
  - API
  - Web Audio API
  - analyser
  - fft
  - visualization
  - waveform
translation_of: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---
<div class="summary">
<p>Web Audio API の最も興味深い機能の 1 つは、オーディオソースから周波数、波形、その他のデータを抽出し、それを使用してビジュアライゼーションを作成する機能です。この記事では、方法について説明し、いくつかの基本的な使用例を示します。</p>
</div>

<div class="note">
<p><strong>付記</strong>: すべてのコードスニペットの実際の例は、<a href="https://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a> のデモでご覧いただけます。</p>
</div>

<h2 id="Basic_concepts" name="Basic_concepts">基本的な概念</h2>

<p>オーディオソースからデータを抽出するには {{ domxref("AudioContext.createAnalyser()") }} メソッドを使用して作成された {{ domxref("AnalyserNode") }} が必要です。 例:</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
</pre>

<p>このノードは、ソースと destination の間のある時点でオーディオソースに接続されます。例:</p>

<pre class="brush: js">source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);</pre>

<div class="note">
<p><strong>付記</strong>: 入力がソースに対し、直接または別のノードを介して接続されているかぎり、アナライザの出力を別のノードに接続する必要はありません。</p>
</div>

<p>アナライザノードは、{{domxref("AnalyserNode.fftSize")}}プロパティ値（指定されていない場合は、デフォルトは 2048 です）として指定する内容に応じて、特定の周波数ドメインで高速フーリエ変換（fft）を使用してオーディオデータをキャプチャします。</p>

<div class="note">
<p><strong>付記</strong>: {{domxref("AnalyserNode.minDecibels")}}と{{domxref("AnalyserNode.maxDecibels")}}を使用して、fft データスケーリング範囲の最小値と最大値を指定することもできます。{{domxref("AnalyserNode.smoothingTimeConstant")}}。それらの使い方の詳細については、それらのページをお読みください。</p>
</div>

<p>データを取得するには、周波数データを取得するために{{domxref("AnalyserNode.getFloatFrequencyData()")}}および{{domxref("AnalyserNode.getByteFrequencyData()")}}メソッドを使用する必要があります。{{domxref("AnalyserNode.getByteTimeDomainData()")}}と{{domxref(" AnalyserNode.getFloatTimeDomainData()")}}を使用して波形データを取得します。</p>

<p>これらのメソッドはデータを指定された配列にコピーするので、データを受け取る前に新しい配列を作成して呼び出す必要があります。最初のものは 32 ビットの浮動小数点数を生成し、2番目と 3番目のものは 8 ビットの符号なし整数を生成するため、標準の JavaScript配列ではなく、扱うデータに応じて{{domxref("Float32Array")}}または {{domxref("Uint8Array")}}配列を使う必要があります。</p>

<p>たとえば、2048 の fft サイズを扱っているとします、fft の半分である{{domxref("AnalyserNode.frequencyBinCount")}}の値を返し、frequencyBinCount を引数として Uint8Array()を呼び出します。これがその fft サイズで収集するデータポイントの数です。</p>

<pre class="brush: js">analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);</pre>

<p>実際にデータを取得して配列にコピーするには、配列を引数として渡して、必要なデータ収集メソッドを呼び出します。 例:</p>

<pre class="brush: js">analyser.getByteTimeDomainData(dataArray);</pre>

<p>オーディオデータを配列に取り込んだ時点で可視化することができます。たとえば、HTML5 {{htmlelement("canvas")}}にプロットすることができます。</p>

<p>いくつかの具体例を見てみましょう。</p>

<h2 id="Creating_a_waveformoscilloscope" name="Creating_a_waveformoscilloscope">波形/オシロスコープの作成</h2>

<p>オシロスコープのビジュアライゼーション（ <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167">Voice-change-O-matic</a> の元のコードの <a href="http://soledadpenades.com/">Soledad Penadés</a> に感謝します）を作成するには、前のセクションで説明した標準パターンに従って、バッファを設定します。</p>

<pre class="brush: js">analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);</pre>

<p>次に、新しいビジュアライゼーションディスプレイの準備をするために、先に描画されたキャンバスをクリアします。</p>

<pre class="brush: js">canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);</pre>

<p>ここで <code>draw()</code> 関数を定義します。</p>

<pre class="brush: js">function draw() {</pre>

<p>ここで <code>requestAnimationFrame()</code> を使用して、描画関数が開始後にループを維持します。</p>

<pre class="brush: js">var drawVisual = requestAnimationFrame(draw);</pre>

<p>次に、TimeDomainData を取得し、配列にコピーします。</p>

<pre class="brush: js">analyser.getByteTimeDomainData(dataArray);</pre>

<p>次に、初期値としてキャンバスを単色で塗りつぶします。</p>

<pre class="brush: js">canvasCtx.fillStyle = 'rgb(200, 200, 200)';
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);</pre>

<p>描画する波の線幅と線の色を設定し、パスを描画します。</p>

<pre class="brush: js">canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
canvasCtx.beginPath();</pre>

<p>キャンバスの幅を配列の長さ(先ほど定義した frequencyBinCount と等しい)で除算することによって描かれる線の各セグメントの幅を決定し、次に、変数 x を定義して、パスの各セグメントを描画するために移動する位置を定義します。</p>

<pre class="brush: js">var sliceWidth = WIDTH * 1.0 / bufferLength;
var x = 0;</pre>

<p>次にループを実行して、バッファ内の各ポイントの波の小さなセグメントの位置を、配列からのデータポイント値に基づいて特定の高さに定義し、線を次の波セグメントが描画されるべき場所に移動させます。</p>

<pre class="brush: js">      for(var i = 0; i &lt; bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }</pre>

<p>最後に、キャンバスの右端の途中で線を終え、次に定義した線を描画します。</p>

<pre class="brush: js">      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };</pre>

<p>このコードの最後では、 <code>draw()</code> 関数を呼び出してプロセス全体を開始します。</p>

<pre class="brush: js">    draw();</pre>

<p>これにより、1秒に数回更新する素晴らしい波形表示が得られます。</p>

<p><img alt="a black oscilloscope line, showing the waveform of an audio signal" src="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API/wave.png" style="display: block; height: 96px; margin: 0px auto; width: 640px;"></p>

<h2 id="Creating_a_frequency_bar_graph" name="Creating_a_frequency_bar_graph">周波数棒グラフの作成</h2>

<p>次に作成する素敵な小さなサウンドビジュアライゼーションは、Winamp のような周波数棒グラフの 1 つです。私たちは Voice-change-O-matic で入手できるものを持っています。それがどのように行われたかを見てみましょう。</p>

<p>まず、アナライザとデータ配列を設定し、<code>clearRect()</code> で現在のキャンバス表示を消去します。これまでの唯一の違いは、fft サイズをもっと小さくすることです。これは、グラフの各バーを細い一筋ではなくバーのように見えるほど大きくするためです。</p>

<pre class="brush: js">analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);</pre>

<p>次に、<code>draw()</code> 関数をオフにし、<code>requestAnimationFrame()</code> でループを設定して、表示されたデータが更新されるようにしてから、各アニメーションフレームで表示をクリアします。</p>

<pre class="brush: js">    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);</pre>

<p>今度はバーの幅をキャンバスの幅をバーの数で割った値（バッファの長さ）に等しくなるように設定します。しかし、その幅を 2.5倍にしています。なぜなら、毎日聞いている音の大部分が特定の低い周波数帯にあるので、ほとんどの周波数がその中にオーディオを持たないものとして戻ってくるからです。空の棒グラフを表示したくないので、棒の位置をずらして、意味のある高さを持つものでキャンバスの表示を埋めます。</p>

<p>そして、変数 <code>barHeight</code> と、現在のバーを描画する画面上の横位置を記録する変数 <code>x</code> を設定します。</p>

<pre class="brush: js">var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;</pre>

<p>前と同じように、for ループを開始し、<code>dataArray</code> の各値について繰り返します。それぞれの値について、<code>barHeight</code> を配列の値に設定し、<code>barHeight</code> に基づいて塗りつぶしの色を設定し（高めのバーは明るくなります）、<code>barWidth</code> の幅および <code>barHeight/2</code> の高さを持つ棒を、キャンバスの水平方向 <code>x</code> ピクセルの位置に描画します（我々は最終的に各バーを半分にカットすることにしたので、キャンバスにすべて収まるようになりました）。</p>

<p>各バーを描画する垂直オフセット位置については説明が必要でしょう。<code>HEIGHT-barHeight/2</code> です。私は、垂直位置を 0 に設定した場合のように各バーが上から下に表示されるのではなく、キャンバスの下から出すようにしたいため、これを実行しています。そのため、毎回垂直位置に、キャンバスの高さから <code>barHeight/2</code> を引いたものをセットしています。したがって、各バーは、キャンバスの途中から下まで描画されます。</p>

<pre class="brush: js">      for(var i = 0; i &lt; bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };</pre>

<p>ここでも、コードの最後に <code>draw()</code> 関数を呼び出して、プロセス全体を動かすように設定します。</p>

<pre class="brush: js">draw();</pre>

<p>このコードでは、次のような結果が得られます。</p>

<p><img alt="a series of red bars in a bar graph, showing intensity of different frequencies in an audio signal" src="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API/bar-graph.png" style="height: 157px; width: 1260px;"></p>

<div class="note">
<p><strong>付記</strong>: この記事に記載されている例では、{{domxref("AnalyserNode.getByteFrequencyData()")}}と{{domxref("AnalyserNode.getByteTimeDomainData()")}}で使用法が示されています。実際の例は{{domxref("AnalyserNode.getFloatFrequencyData()")}}と{{domxref("AnalyserNode.getFloatTimeDomainData()")}}にあるので、私たちの <a href="http://mdn.github.io/voice-change-o-matic-float-data/">Voice-change-O-matic-float-data</a> デモを参照してください（<a href="https://github.com/mdn/voice-change-o-matic-float-data">ソースコード</a>も参照してください）— これは、元の <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a> とまったく同じですが、符号なしバイトデータではなく、Float データを使用しています。</p>
</div>

<p> </p>
