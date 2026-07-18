---
title: ウェブオーディオ API によるビジュアル化
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: 32635edcbc8635a6ad1f7b771454e69316f2bd60
---

{{DefaultAPISidebar("Web Audio API")}}

ウェブオーディオ API の最も興味深い機能の 1 つは、音源から周波数、波形、その他のデータを抽出し、それを使用してビジュアル化する機能です。この記事では、その方法について説明し、いくつかの基本的な使用例を示します。

> [!NOTE]
> すべてのコードスニペットの実際の例は、[Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) のデモでご覧いただけます。

## 基本概念

音源からデータを抽出するには {{ domxref("AnalyserNode") }} が必要であり、これは {{ domxref("BaseAudioContext.createAnalyser") }} メソッドを使用して作成されます。

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

このノードは、ソースと出力先の間のある時点で音源に接続されます。

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> 入力がソースに対し、直接または別のノードを介して接続されているかぎり、アナライザーの出力を別のノードに接続する必要はありません。

アナライザーノードは、{{ domxref("AnalyserNode.fftSize") }} プロパティ値（指定されていない場合は、デフォルトは 2048 です）として指定する内容に応じて、特定の周波数ドメインで高速フーリエ変換 (fft) を使用してオーディオデータをキャプチャします。

> [!NOTE]
> 同時に、{{ domxref("AnalyserNode.minDecibels") }} および {{ domxref("AnalyserNode.maxDecibels") }} を使用して、FFTデータのスケーリング範囲の最小値と最大値を指定したり、{{ domxref("AnalyserNode.smoothingTimeConstant") }} を使用して、さまざまなデータ平滑化定数を指定したりすることもできます。これらの使い方の詳細については、それらのページをお読みください。

データを取得するには、周波数データを取得するために {{ domxref("AnalyserNode.getFloatFrequencyData()") }} および {{ domxref("AnalyserNode.getByteFrequencyData()") }} メソッドを使用する必要があります。{{ domxref("AnalyserNode.getByteTimeDomainData()") }} と {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} を使用して波形データを取得します。

これらのメソッドはデータを指定された配列にコピーするので、データを受け取る前に新しい配列を作成して呼び出す必要があります。最初のものは 32 ビットの浮動小数点数を生成し、2 番目と 3 番目のものは 8 ビットの符号なし整数を生成するため、標準の JavaScript 配列ではなく、扱うデータに応じて {{jsxref("Float32Array") }} または {{jsxref("Uint8Array") }} 配列を使う必要があります。

たとえば、2048 のサイズの fft を扱っているとします、fft の半分である {{ domxref("AnalyserNode.frequencyBinCount") }} の値を返し、frequencyBinCount を引数として Uint8Array() を呼び出します。これがその fft サイズで収集するデータポイントの数です。

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

実際にデータを取得して配列にコピーするには、配列を引数として渡して、必要なデータ収集メソッドを呼び出します。

```js
analyser.getByteTimeDomainData(dataArray);
```

オーディオデータを配列に取り込んだ時点で可視化することができます。たとえば、HTML の {{ htmlelement("canvas") }} にプロットすることができます。

いくつかの具体例を見てみましょう。

## 波形/オシロスコープの作成

オシロスコープのビジュアル化（ [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167) の元のコードの [Soledad Penadés](https://soledadpenades.com/) に感謝します）を作成するには、前の節で説明した標準パターンに従って、バッファーを設定します。

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

次に、新しいビジュアル化表示の準備をするために、先に描画されたキャンバスをクリアします。

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

ここで `draw()` 関数を定義します。ここでは、以下のことを行います。

1. `requestAnimationFrame()` を使用して、描画関数が開始された後のループを維持します。
2. 時間領域のデータを取得し、配列にコピーします。
3. キャンバスを単色で塗りつぶして始めます。
4. 描画する波の線の太さとストロークの色を設定し、パスの描画を始めます。
5. 描画される線のそれぞれの区間の幅を算出するために、キャンバスの幅を配列の長さ（前述の通り FrequencyBinCount に等しい）で割り、次に、変数 x を定義して、パスの各区間を描画するために移動する位置を定義します。
6. 次にループで、バッファ内のそれぞれの点を結ぶ波の小さな区間の位置を、配列内のデータの点の値に基づいて具体的な高さに定義し、次の波の区間が描画されるべき場所まで線を引きます。
7. 最後に、キャンバスの右端の中央で線を終え、それから定義した線を描画します。

```js
function draw() {
  const drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);
  // 単色で塗りつぶし
  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  // パスを開始
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";
  canvasCtx.beginPath();
  // 波形の各点を描画
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * (HEIGHT / 2);

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  // 線を描き終える
  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}
```

このコードの最後では、 `draw()` 関数を呼び出してプロセス全体を開始します。

```js
draw();
```

これにより、1 秒に数回更新する素晴らしい波形表示が得られます。

![音声シグナルの波形を表示させる、オシロスコープの黒い波形の線](wave.png)

## 周波数棒グラフの作成

次に作成する素敵な小さなサウンドビジュアル化は、Winamp のような周波数棒グラフの 1 つです。私たちは Voice-change-O-matic で入手できるものを持っています。それがどのように行われたかを見てみましょう。

まず、アナライザーとデータ配列を設定し、`clearRect()` で現在のキャンバス表示を消去します。これまでとの唯一の違いは、fft サイズをもっと小さくすることです。これは、グラフの各バーを細い一筋ではなくバーのように見えるほど大きくするためです。

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

次に、`draw()` 関数をオフにし、`requestAnimationFrame()` でループを設定して、表示されたデータが更新されるようにしてから、各アニメーションフレームで表示をクリアします。

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  // ...
}
```

これで、`barWidth` をキャンバスの幅をバーの数（バッファの長さ）で割った値に設定します。ただし、その幅に 2.5 を乗じています。これは、私たちが日常的に耳にする音のほとんどが特定の低周波領域にあるため、周波数の大部分からは音声が得られないと判定されるからです。空のバーを大量に表示させるのは避けたいため、定期的に表示されるバーを目立つ高さだけ横方向にずらし、キャンバス全体を埋めるようにします。

そして、変数 `barHeight` と、現在のバーを描画する画面上の横位置を記録する変数 `x` を設定します。

```js
function draw() {
  // ...
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;
  // ...
}
```

前と同じように、for ループを開始し、`dataArray` の各値について繰り返します。それぞれの値について、`barHeight` を配列の値に設定し、`barHeight` に基づいて塗りつぶしの色を設定し（高めのバーは明るくなります）、`barWidth` の幅および `barHeight / 2` の高さを持つ棒を、キャンバスの水平方向 `x` ピクセルの位置に描画します（最終的に各バーを半分にカットすることにしたので、キャンバスにすべて収まるようになりました）。

各バーを描画する垂直オフセット位置については説明が必要でしょう。`HEIGHT - barHeight / 2` です。垂直位置を 0 に設定した場合のように各バーが上から下に表示されるのではなく、キャンバスの下から上に伸びるようにしたいため、これを実行しています。そのため、毎回垂直位置に、キャンバスの高さから `barHeight / 2` を引いたものを設定しています。したがって、各バーは、キャンバスの途中から下まで描画されます。

```js
function draw() {
  // ...
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] / 2;

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

    x += barWidth + 1;
  }
  // ...
}
```

ここでも、コードの最後に `draw()` 関数を呼び出して、プロセス全体を動かすように設定します。

```js
draw();
```

このコードでは、次のような結果が得られます。

![棒グラフ上の赤い棒の列で、音声シグナルにおける各周波数の強度を表示させています](bar-graph.png)

> [!NOTE]
> この記事に記載されている例では、{{ domxref("AnalyserNode.getByteFrequencyData()") }} と {{ domxref("AnalyserNode.getByteTimeDomainData()") }} で使用法が示されています。実際の例は {{ domxref("AnalyserNode.getFloatFrequencyData()") }} と {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} にあるので、[Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) デモを参照してください（[ソースコード](https://mdn.github.io/webaudio-examples/voice-change-o-matic-float-data)も参照してください）。これは、元の [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) とまったく同じですが、符号なしバイトデータではなく、Float データを使用しています。
