---
title: Visualizations with Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API の最も興味深い機能の 1 つは、オーディオソースから周波数、波形、その他のデータを抽出し、それを使用してビジュアライゼーションを作成する機能です。この記事では、方法について説明し、いくつかの基本的な使用例を示します。

> [!NOTE]
> すべてのコードスニペットの実際の例は、[Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) のデモでご覧いただけます。

## 基本的な概念

オーディオソースからデータを抽出するには {{ domxref("AudioContext.createAnalyser()") }} メソッドを使用して作成された {{ domxref("AnalyserNode") }} が必要です。 例:

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
```

このノードは、ソースと destination の間のある時点でオーディオソースに接続されます。例:

```js
source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> 入力がソースに対し、直接または別のノードを介して接続されているかぎり、アナライザの出力を別のノードに接続する必要はありません。

アナライザノードは、{{domxref("AnalyserNode.fftSize")}}プロパティ値（指定されていない場合は、デフォルトは 2048 です）として指定する内容に応じて、特定の周波数ドメインで高速フーリエ変換（fft）を使用してオーディオデータをキャプチャします。

> **メモ:** {{domxref("AnalyserNode.minDecibels")}}と{{domxref("AnalyserNode.maxDecibels")}}を使用して、fft データスケーリング範囲の最小値と最大値を指定することもできます。{{domxref("AnalyserNode.smoothingTimeConstant")}}。それらの使い方の詳細については、それらのページをお読みください。

データを取得するには、周波数データを取得するために{{domxref("AnalyserNode.getFloatFrequencyData()")}}および{{domxref("AnalyserNode.getByteFrequencyData()")}}メソッドを使用する必要があります。{{domxref("AnalyserNode.getByteTimeDomainData()")}}と{{domxref(" AnalyserNode.getFloatTimeDomainData()")}}を使用して波形データを取得します。

これらのメソッドはデータを指定された配列にコピーするので、データを受け取る前に新しい配列を作成して呼び出す必要があります。最初のものは 32 ビットの浮動小数点数を生成し、2 番目と 3 番目のものは 8 ビットの符号なし整数を生成するため、標準の JavaScript 配列ではなく、扱うデータに応じて{{domxref("Float32Array")}}または {{domxref("Uint8Array")}}配列を使う必要があります。

たとえば、2048 の fft サイズを扱っているとします、fft の半分である{{domxref("AnalyserNode.frequencyBinCount")}}の値を返し、frequencyBinCount を引数として Uint8Array()を呼び出します。これがその fft サイズで収集するデータポイントの数です。

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

実際にデータを取得して配列にコピーするには、配列を引数として渡して、必要なデータ収集メソッドを呼び出します。 例:

```js
analyser.getByteTimeDomainData(dataArray);
```

オーディオデータを配列に取り込んだ時点で可視化することができます。たとえば、HTML5 {{htmlelement("canvas")}}にプロットすることができます。

いくつかの具体例を見てみましょう。

## 波形/オシロスコープの作成

オシロスコープのビジュアライゼーション（ [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167) の元のコードの [Soledad Penadés](https://soledadpenades.com/) に感謝します）を作成するには、前のセクションで説明した標準パターンに従って、バッファを設定します。

```js
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```

次に、新しいビジュアライゼーションディスプレイの準備をするために、先に描画されたキャンバスをクリアします。

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

ここで `draw()` 関数を定義します。

```js
function draw() {
```

ここで `requestAnimationFrame()` を使用して、描画関数が開始後にループを維持します。

```js
var drawVisual = requestAnimationFrame(draw);
```

次に、TimeDomainData を取得し、配列にコピーします。

```js
analyser.getByteTimeDomainData(dataArray);
```

次に、初期値としてキャンバスを単色で塗りつぶします。

```js
canvasCtx.fillStyle = "rgb(200, 200, 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

描画する波の線幅と線の色を設定し、パスを描画します。

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0, 0, 0)";
canvasCtx.beginPath();
```

キャンバスの幅を配列の長さ(先ほど定義した frequencyBinCount と等しい)で除算することによって描かれる線の各セグメントの幅を決定し、次に、変数 x を定義して、パスの各セグメントを描画するために移動する位置を定義します。

```js
var sliceWidth = (WIDTH * 1.0) / bufferLength;
var x = 0;
```

次にループを実行して、バッファ内の各ポイントの波の小さなセグメントの位置を、配列からのデータポイント値に基づいて特定の高さに定義し、線を次の波セグメントが描画されるべき場所に移動させます。

```js
for (var i = 0; i < bufferLength; i++) {
  var v = dataArray[i] / 128.0;
  var y = (v * HEIGHT) / 2;

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
```

最後に、キャンバスの右端の途中で線を終え、次に定義した線を描画します。

```js
      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };
```

このコードの最後では、 `draw()` 関数を呼び出してプロセス全体を開始します。

```js
draw();
```

これにより、1 秒に数回更新する素晴らしい波形表示が得られます。

![a black oscilloscope line, showing the waveform of an audio signal](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API/wave.png)

## 周波数棒グラフの作成

次に作成する素敵な小さなサウンドビジュアライゼーションは、Winamp のような周波数棒グラフの 1 つです。私たちは Voice-change-O-matic で入手できるものを持っています。それがどのように行われたかを見てみましょう。

まず、アナライザとデータ配列を設定し、`clearRect()` で現在のキャンバス表示を消去します。これまでの唯一の違いは、fft サイズをもっと小さくすることです。これは、グラフの各バーを細い一筋ではなくバーのように見えるほど大きくするためです。

```js
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

次に、`draw()` 関数をオフにし、`requestAnimationFrame()` でループを設定して、表示されたデータが更新されるようにしてから、各アニメーションフレームで表示をクリアします。

```js
    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

今度はバーの幅をキャンバスの幅をバーの数で割った値（バッファの長さ）に等しくなるように設定します。しかし、その幅を 2.5 倍にしています。なぜなら、毎日聞いている音の大部分が特定の低い周波数帯にあるので、ほとんどの周波数がその中にオーディオを持たないものとして戻ってくるからです。空の棒グラフを表示したくないので、棒の位置をずらして、意味のある高さを持つものでキャンバスの表示を埋めます。

そして、変数 `barHeight` と、現在のバーを描画する画面上の横位置を記録する変数 `x` を設定します。

```js
var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;
```

前と同じように、for ループを開始し、`dataArray` の各値について繰り返します。それぞれの値について、`barHeight` を配列の値に設定し、`barHeight` に基づいて塗りつぶしの色を設定し（高めのバーは明るくなります）、`barWidth` の幅および `barHeight/2` の高さを持つ棒を、キャンバスの水平方向 `x` ピクセルの位置に描画します（我々は最終的に各バーを半分にカットすることにしたので、キャンバスにすべて収まるようになりました）。

各バーを描画する垂直オフセット位置については説明が必要でしょう。`HEIGHT-barHeight/2` です。私は、垂直位置を 0 に設定した場合のように各バーが上から下に表示されるのではなく、キャンバスの下から出すようにしたいため、これを実行しています。そのため、毎回垂直位置に、キャンバスの高さから `barHeight/2` を引いたものをセットしています。したがって、各バーは、キャンバスの途中から下まで描画されます。

```js
      for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
      }
    };
```

ここでも、コードの最後に `draw()` 関数を呼び出して、プロセス全体を動かすように設定します。

```js
draw();
```

このコードでは、次のような結果が得られます。

![a series of red bars in a bar graph, showing intensity of different frequencies in an audio signal](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API/bar-graph.png)

> [!NOTE]
> この記事に記載されている例では、{{domxref("AnalyserNode.getByteFrequencyData()")}}と{{domxref("AnalyserNode.getByteTimeDomainData()")}}で使用法が示されています。実際の例は{{domxref("AnalyserNode.getFloatFrequencyData()")}}と{{domxref("AnalyserNode.getFloatTimeDomainData()")}}にあるので、私たちの [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) デモを参照してください（[ソースコード](https://github.com/mdn/voice-change-o-matic-float-data)も参照してください）— これは、元の [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) とまったく同じですが、符号なしバイトデータではなく、Float データを使用しています。
