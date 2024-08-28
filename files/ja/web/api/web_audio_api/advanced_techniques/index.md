---
title: "高度なテクニック: オーディオの生成とシーケンス"
slug: Web/API/Web_Audio_API/Advanced_techniques
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Web Audio API")}}

このチュートリアルでは、音の作成と変更、時間とスケジューリングについて述べます。サンプルの読み込み、エンベロープ、フィルター、ウェーブテーブル、周波数変調を紹介します。これらの用語に慣れていて、ウェブオーディオAPIによるアプリケーションの入門を探しているなら、あなたは正しい場所に来ました。

> [!NOTE]
> 下記デモのソースコードは GitHub の MDN [webaudio-examples](https://github.com/mdn/webaudio-examples) リポジトリーの [step-sequencer](https://github.com/mdn/webaudio-examples/tree/master/step-sequencer) サブディレクトリーにあります。[ライブデモ](https://mdn.github.io/webaudio-examples/step-sequencer/)を見ることもできます。

## デモ

これからとても単純なステップシーケンサーを見ていきます。

![再生と BPM マスターコントロール、 4 つの異なる形で音色を制御する機能を備えたサウンドシーケンサーアプリケーションです。](sequencer.png)

実際には、ライブラリーを使う方が簡単です。ウェブオーディオ API は、それを前提に構築されています。もっと複雑なものを作ろうとしているのであれば、 [tone.js](https://tonejs.github.io/) が始めるには最適な場所でしょう。しかし、私たちは学習の練習として、最初の原理からこのようなデモを作成する方法を示したいと思います。

インターフェイスはマスターコントローラーで構成されており、シーケンサーを再生/停止したり、BPM（1　分間の拍数）を調整して「音楽」を速くしたり遅くしたりすることができます。

4 つの異なる音（ボイス）を鳴らすことができます。各ボイスには 4 つのボタンがあり、音楽の 1 小節のそれぞれの拍に 1 つずつ対応しています。それらが有効になると、音符が音になります。楽器が演奏すると、この拍の集合を移動され、小節をループします。

各ボイスにはローカルコントロールもあり、ボイスを作成するために使用する各テクニック特有のエフェクトや引数を操作することができます。使用しているメソッドは以下の通りです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">ボイス名</th>
      <th scope="col">技術</th>
      <th scope="col">関連するウェブオーディオ API の機能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"Sweep"</td>
      <td>発振器、周期波</td>
      <td>
        {{domxref("OscillatorNode")}},
        {{domxref("PeriodicWave")}}
      </td>
    </tr>
    <tr>
      <td>"Pulse"</td>
      <td>発振器の乗算</td>
      <td>{{domxref("OscillatorNode")}}</td>
    </tr>
    <tr>
      <td>"Noise"</td>
      <td>ランダムノイズバッファー、バイクワッドフィルター</td>
      <td>
        {{domxref("AudioBuffer")}},
        {{domxref("AudioBufferSourceNode")}},
        {{domxref("BiquadFilterNode")}}
      </td>
    </tr>
    <tr>
      <td>"Dial up"</td>
      <td>サンプル音を読み込んで再生</td>
      <td>
        {{domxref("BaseAudioContext/decodeAudioData")}},
        {{domxref("AudioBufferSourceNode")}}
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 私たちがこのインストゥルメントを作成したのは、音を良くするためではなく、デモコードを提供するためです。このデモは、そのようなインストの非常に単純化されたバージョンを表します。音はダイアルアップモデムに基づいています。このような機器がどのような音で鳴るのかご存じない方は、[こちらで試聴できます](https://soundcloud.com/john-pemberton/modem-dialup)。

## 音声コンテキストの作成

すぐに使用することになりますが、ウェブ音声 API アプリは音声コンテキストから始まります。

```js
const audioCtx = new AudioContext();
```

## "sweep" — 発振器、周期波、エンベロープ

"sweep" 音、つまりダイヤルアップした時に聞こえる最初の音を呼び出すために、音を生成する発振器を作成します。

{{domxref("OscillatorNode")}} で、基本的な波形（サイン波、矩形波、三角波、ノコギリ波）が決まります。しかし、既定値では標準の波形を使用する代わりに、 {{domxref("PeriodicWave")}} インターフェイスと波形テーブルに設定した値を使って自分自身で作成します。このカスタム波を発振器で使用するには、{{domxref("PeriodicWave/PeriodicWave", "PeriodicWave()")}} コンストラクターを使用します。

### 周期波

最初に、周期波を作成します。そのためには、 {{domxref("PeriodicWave/PeriodicWave", "PeriodicWave()")}} コンストラクターに実数と虚数の値を渡す必要があります。

```js
const wave = new PeriodicWave(audioCtx, {
  real: wavetable.real,
  imag: wavetable.imag,
});
```

> [!NOTE]
> この例では、波動テーブルは非常に多くの値があるため、別個の JavaScript ファイル (`wavetable.js`) で保持されています。 [Google Chrome Labs のウェブオーディオ API の例](https://github.com/GoogleChromeLabs/web-audio-samples/)で得られる[波形テーブルのリポジトリー](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/src/demos/wavetable-synth/wave-tables)から取りました。

### 発振器

これで {{domxref("OscillatorNode")}} を作成し、その波を作成したものに設定することができます。

```js
function playSweep(time) {
  const osc = new OscillatorNode(audioCtx, {
    frequency: 380,
    type: "custom",
    periodicWave: wave,
  });
  osc.connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + 1);
}
```

ここで関数に時刻の引数を渡していますが、これは後で掃除のスケジュールを立てるのに使用します。

### 振幅の制御

これは素晴らしいことですが、振幅エンベロープがあればいいと思いませんか？単純なものを作成して、ウェブオーディオ API でエンベロープを作成するのに必要なメソッドを使用してみましょう。

エンベロープにアタックとリリースがあるとします。インターフェイスの[範囲入力](/ja/docs/Web/HTML/Element/input/range)を使ってユーザーがこれらを制御できるようにします。

```html
<label for="attack">Attack</label>
<input
  name="attack"
  id="attack"
  type="range"
  min="0"
  max="1"
  value="0.2"
  step="0.1" />

<label for="release">Release</label>
<input
  name="release"
  id="release"
  type="range"
  min="0"
  max="1"
  value="0.5"
  step="0.1" />
```

これで JavaScript で変数を作成し、入力値が更新されたときにその変数を変更するようにします。

```js
let attackTime = 0.2;
const attackControl = document.querySelector("#attack");
attackControl.addEventListener(
  "input",
  (ev) => {
    attackTime = parseInt(ev.target.value, 10);
  },
  false,
);

let releaseTime = 0.5;
const releaseControl = document.querySelector("#release");
releaseControl.addEventListener(
  "input",
  (ev) => {
    releaseTime = parseInt(ev.target.value, 10);
  },
  false,
);
```

### 最終的な playSweep() 関数

これで `playSweep()` 関数を展開させることができました。 {{domxref("GainNode")}} を追加して、それを音声グラフに接続して、音に振幅の変化を加える必要があります。ゲインノードは 1 つのプロパティを持っています。 `gain` で {{domxref("AudioParam")}} 型です。

これは有用なことです。これで、ゲイン値に関する音声引数のメソッドのパワーを利用し始めることができます。ある時刻に値を設定することもできますし、 {{domxref("AudioParam.linearRampToValueAtTime")}} のようなメソッドで時間を値を変更することもできます。

前述のように、アタックとリリースには `linearRampToValueAtTime` メソッドを使用します。このメソッドには 2 つの引数を取ります。設定したい引数の値（この場合はゲイン）と、いつ設定するかです。この場合、いつかは入力コントロールで制御します。例えば下記の例では、アタック範囲を定義する時刻の間、ゲインは直線的に 1 に増加します。同様に、リリースの場合、ゲインは、リリース入力が設定されている時刻にわたって、直線的な割合で 0 に集合します。

```js
const sweepLength = 2;
function playSweep(time) {
  const osc = new OscillatorNode(audioCtx, {
    frequency: 380,
    type: "custom",
    periodicWave: wave,
  });

  const sweepEnv = new GainNode(audioCtx);
  sweepEnv.gain.cancelScheduledValues(time);
  sweepEnv.gain.setValueAtTime(0, time);
  sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
  sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

  osc.connect(sweepEnv).connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + sweepLength);
}
```

## "pulse" — 低周波発振器変調

これで sweep ができました。次に移動して、素敵なパルス音を見てみましょう。基本的な発振器で、 2 つ目の発振器で変調することで実現できます。

### 初期発振器

最初の {{domxref("OscillatorNode")}} はスイープ音と同じように設定しますが、独自の波形を設定するための波形テーブルを使用しません。

```js
const osc = new OscillatorNode(audioCtx, {
  type: "sine",
  frequency: pulseHz,
});
```

これで {{domxref("GainNode")}} を作成します。 2 つ目の低周波発振器で発振させる `gain` 値です。

```js
const amp = new GainNode(audioCtx, {
  value: 1,
});
```

### 第二の低周波発振器の作成

これで、最初のサイン波の増幅率を変えるために、 2 つ目の矩形波（またはパルス）発振器を作成します。

```js
const lfo = new OscillatorNode(audioCtx, {
  type: "square",
  frequency: 30,
});
```

### グラフの接続

ここで重要なのは、グラフを正しく接続することと、両方の発振器を起動することです。

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> また、作成するどちらの発振器にも既定値の波形テーブルを使用する必要はありません。前と同じように波形テーブルと周期波メソッドを使用できます。最小のノードで、多くの可能性があります。

### パルスのユーザーコントロール

UI コントロールのために、発振器の両方の周波数を公開し、範囲入力で制御できるようにしましょう。一方は音程を変更し、もう一方はパルスが最初の波をどのように変調するかを変更します。

```html
<label for="hz">Hz</label>
<input
  name="hz"
  id="hz"
  type="range"
  min="660"
  max="1320"
  value="880"
  step="1" />
<label for="lfo">LFO</label>
<input name="lfo" id="lfo" type="range" min="20" max="40" value="30" step="1" />
```

前回と同様に、ユーザーが引数の範囲を変更したときに、引数を変化させます。

```js
let pulseHz = 880;
const hzControl = document.querySelector("#hz");
hzControl.addEventListener(
  "input",
  (ev) => {
    pulseHz = parseInt(ev.target.value, 10);
  },
  false,
);

let lfoHz = 30;
const lfoControl = document.querySelector("#lfo");
lfoControl.addEventListener(
  "input",
  (ev) => {
    lfoHz = parseInt(ev.target.value, 10);
  },
  false,
);
```

### 最終的な playPulse() 関数

`playPulse()` 関数の全体は以下のようになります。

```js
const pulseTime = 1;
function playPulse(time) {
  const osc = new OscillatorNode(audioCtx, {
    type: "sine",
    frequency: pulseHz,
  });

  const amp = new GainNode(audioCtx, {
    value: 1,
  });

  const lfo = new OscillatorNode(audioCtx, {
    type: "square",
    frequency: lfoHz,
  });

  lfo.connect(amp.gain);
  osc.connect(amp).connect(audioCtx.destination);
  lfo.start();
  osc.start(time);
  osc.stop(time + pulseTime);
}
```

## "noise" — バイクワッドフィルター付きランダムノイズバッファー

ノイズを出すことが必要になりました。モデムにはすべてノイズがあります。音声データの場合、ノイズは単なる乱数なので、コードで作成するのは比較的簡単なことです。

### 音声バッファーの作成

しかし、ウェブオーディオ API が理解できる空のコンテナーを作成する必要があります。そこで {{domxref("AudioBuffer")}} オブジェクトの出番です。ファイルを取得してバッファーにデコードすることもできますし（チュートリアルの後半で説明します）、空のバッファーを作成してデータを入れることもできます。

ノイズについては、後者で説明します。最初に、作成するバッファーサイズを計算する必要があります。これには {{domxref("BaseAudioContext.sampleRate")}} プロパティが使用できます。

```js
const bufferSize = audioCtx.sampleRate * noiseDuration;
// 空のバッファーを作成
const noiseBuffer = new AudioBuffer({
  length: bufferSize,
  sampleRate: audioCtx.sampleRate,
});
```

これで -1 から 1 の間の乱数で埋めることができます。

```js
// バッファーにノイズを充填
const data = noiseBuffer.getChannelData(0);
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> なぜ -1～1 なのでしょうか？ファイルやスピーカーに音を出力する場合、 0dB が上限のスケール（メディアや DAC の固定的な数値の限界）を表す数値が必要です。浮動小数点の音声では、 1 は信号の数学的処理をするために「上限」に割り当てられる便利な数字です。そのため、発振器、ノイズジェネレーター、そして他の音源は、通常 -1 から 1 の範囲の双極信号を出力します。ブラウザーはこの範囲外の値をクランプします。

### バッファーソースの作成

これで音声バッファーができ、データが入りました。バッファーをソースとして使用できるノードをグラフに追加する必要があります。そのために {{domxref("AudioBufferSourceNode")}} を作成し、作成したデータを渡します。

```js
// 作成したデータのバッファーソースを作成
const noise = new AudioBufferSourceNode(audioCtx, {
  buffer: noiseBuffer,
});
```

これを音声グラフにつないで再生します。

```js
noise.connect(audioCtx.destination);
noise.start();
```

かなりヒスノイズというか、ちぐはぐな音であることにお気づきでしょう。ホワイトノイズを作成したのですから、そうあるべきです。値が-1から1まで広がっていますが、これはすべての周波数にピークがあることを意味しています。この関数を0.5から-0.5までの値のみに変更し、ピークを取り除き、不快感を縮小することも可能です。作成したノイズをフィルターに通してみましょう。

### バイクワッドフィルターを追加して混合

ピンクまたはブラウンノイズの範囲にあるものが必要です。高い周波数と単発の低い周波数をカットしたいのです。バンドパスバイクワッドフィルターを選びましょう。

> [!NOTE]
> ウェブオーディオ API には、 {{domxref("BiquadFilterNode")}} と {{domxref("IIRFilterNode")}} の 2 つの種類のフィルタノードがあります。ほとんどの場合、バイクワッドフィルタで十分です - ローパス、ハイパス、バンドパスなどの様々な種類があります。しかし、もっと特注のものを探しているのであれば、 IIR フィルターが良い選択肢かもしれません。詳しくは [IIR フィルターの使用](/ja/docs/Web/API/Web_Audio_API/Using_IIR_filters)を参照してください。

この配線は、前に見たのと同じです。 {{domxref("BiquadFilterNode")}} を作成し、必要なプロパティを設定し、グラフを通して接続します。例えば、バンドパス型で周波数を設定するには、中間周波数を調整します。しかし、ローパスでは、一番上の周波数を設定します。

```js
// 出力フィルター
const bandpass = new BiquadFilterNode(audioCtx, {
  type: "bandpass",
  frequency: bandHz,
});

// グラフへ接続
noise.connect(bandpass).connect(audioCtx.destination);
```

### ノイズユーザーコントロール

UI 上では、前回と同じように、ノイズの継続時間と帯域したい周波数を公開し、ユーザーが範囲入力とイベントハンドラーを使って調整できるようにします。

```html
<label for="duration">Duration</label>
<input
  name="duration"
  id="duration"
  type="range"
  min="0"
  max="2"
  value="1"
  step="0.1" />

<label for="band">Band</label>
<input
  name="band"
  id="band"
  type="range"
  min="400"
  max="1200"
  value="1000"
  step="5" />
```

```js
let noiseDuration = 1;
const durControl = document.querySelector("#duration");
durControl.addEventListener(
  "input",
  (ev) => {
    noiseDuration = parseFloat(ev.target.value);
  },
  false,
);

let bandHz = 1000;
const bandControl = document.querySelector("#band");
bandControl.addEventListener(
  "input",
  (ev) => {
    bandHz = parseInt(ev.target.value, 10);
  },
  false,
);
```

### 最終的な playNoise() 関数

`playNoise()` 関数の全体は次のようになります。

```js
function playNoise(time) {
  const bufferSize = audioCtx.sampleRate * noiseDuration; // set the time of the note

  // Create an empty buffer
  const noiseBuffer = new AudioBuffer({
    length: bufferSize,
    sampleRate: audioCtx.sampleRate,
  });

  // Fill the buffer with noise
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  // Create a buffer source for our created data
  const noise = new AudioBufferSourceNode(audioCtx, {
    buffer: noiseBuffer,
  });

  // Filter the output
  const bandpass = new BiquadFilterNode(audioCtx, {
    type: "bandpass",
    frequency: bandHz,
  });

  // Connect our graph
  noise.connect(bandpass).connect(audioCtx.destination);
  noise.start(time);
}
```

## "Dial-up" — 音の例の読み込み

これまで使用してきたメソッドを使って、いくつかの発振器を一緒に鳴らすことで、電話のダイヤル音 (DTMF) をエミュレートすることは、十分に簡単です。代わりに、この節ではサンプルファイルを読み込んで、その内容を見ていきます。

### サンプルの読み込み

使用する前にファイルが読み込まれ、バッファーにデコードされたことを確認したいので、 [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) 関数を作成してこれをできるようにしましょう。

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

そして、この関数を呼び出すときに [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子を使うことで、実行が完了したときに後続のコードを確実に実行することができます。

サンプルを設定するために、もう一つ `async` 関数を作成しましょう。この2つの非同期関数を素敵なプロミスパターンで結合することで、このファイルが読み込まれてバッファーされたときにさらなるアクションを実行することができます。

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> 上記の関数を簡単に変更し、ファイルの配列を引き継いでループさせ、複数のサンプルを読み込むことができます。このテクニックは、より複雑なインストゥルメントやゲームに便利でしょう。

We can now use `setupSample()` like so:

```js
setupSample().then((sample) => {
  // sample is our buffered file
  // …
});
```

サンプルを再生する準備ができたら、プログラムに UI を設定すれば、使えるようになります。

### サンプルの再生

他の音と同じように、 `playSample()` 関数を作成しましょう。今回は {{domxref("AudioBufferSourceNode")}} を作成し、取得しデコードしたバッファーデータを入れて再生します：

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioContext, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> **メモ:** `stop()` は {{domxref("AudioBufferSourceNode")}} で呼び出すことができますが、これはサンプルの再生が完了したときに自動的に行われます。

### ダイアルアップのユーザーコントロール

{{domxref("AudioBufferSourceNode")}} には [`playbackRate`](/ja/docs/Web/API/AudioBufferSourceNode/playbackRate) プロパティがあります。このプロパティを UI に公開し、サンプルを速くしたり遅くしたりできるようにしましょう。先ほどと同じような方法で行います。

```html
<label for="rate">Rate</label>
<input
  name="rate"
  id="rate"
  type="range"
  min="0.1"
  max="2"
  value="1"
  step="0.1" />
```

```js
let playbackRate = 1;
const rateControl = document.querySelector("#rate");
rateControl.addEventListener(
  "input",
  (ev) => {
    playbackRate = parseInt(ev.target.value, 10);
  },
  false,
);
```

### 最終的な playSample() 関数

次に `playSample()` 関数に `playbackRate` プロパティを更新する行を追加します。最終的にはこのようになります。

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = new AudioBufferSourceNode(audioCtx, {
    buffer: audioBuffer,
    playbackRate,
  });
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> この音声ファイルは [soundbible.com から引用](https://soundbible.com/1573-DTMF-Tones.html)しました。

## 時刻に合わせた音声の再生

デジタル音声アプリケーションでよくある問題は、ビートが一定に保たれ、時刻がずれないように音を再生することです。

`for` ループの中で再生するように音色をスケジュールすることもできますが、この場合の最大の問題は再生中に更新することで、そのための UI コントロールはすでに実装しています。また、楽器全体の BPM コントロールを検討するのも実にいいでしょう。音符がいつ演奏されるかを先に見て、それをキューに入れるのです。 `currentTime` プロパティで正確な時刻に始めることができ、変更も考えることができます。

> [!NOTE]
> この記事は、 [Chris Wilson's A Tale Of Two Clocks (2013)](https://web.dev/audio-scheduling/) の記事を大幅に縮小したもので、このメソッドについてもっと詳しく書かれています。ここですべてを繰り返す意味はありませんが、この記事を読んでこのメソッドを使用することを強くお勧めします。ここでのコードの多くは彼の[メトロノームの例](https://github.com/cwilso/metronome/blob/master/js/metronome.js)から引用しています。彼はこの記事の中で参照しています。

既定の BPM (beats per minute) を設定することから始めましょう。この BPM はユーザーも制御することができます。

```js
let tempo = 60.0;
const bpmControl = document.querySelector("#bpm");

bpmControl.addEventListener(
  "input",
  (ev) => {
    tempo = parseInt(ev.target.value, 10);
  },
  false,
);
```

そして、どれくらい先まで見ていくのか、どれくらい先のスケジュールを定義する変数を作成します。

```js
const lookahead = 25.0; // How frequently to call scheduling function (in milliseconds)
const scheduleAheadTime = 0.1; // How far ahead to schedule audio (sec)
```

音符を 1 拍分前に移動し、 4 番目（最後）の音符に到達したら最初の音符にループで戻る関数を作成してみましょう。

```js
let currentNote = 0;
let nextNoteTime = 0.0; // when the next note is due.

function nextNote() {
  const secondsPerBeat = 60.0 / tempo;

  nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  // Advance the beat number, wrap to zero when reaching 4
  currentNote = (currentNote + 1) % 4;
}
```

演奏する音符の参照キューと、前回作成した関数を使用して演奏する機能を作成したいと思います。

```js
const notesInQueue = [];

function scheduleNote(beatNumber, time) {
  // Push the note on the queue, even if we're not playing.
  notesInQueue.push({ note: beatNumber, time });

  if (pads[0].querySelectorAll("input")[beatNumber].checked) {
    playSweep(time);
  }
  if (pads[1].querySelectorAll("input")[beatNumber].checked) {
    playPulse(time);
  }
  if (pads[2].querySelectorAll("input")[beatNumber].checked) {
    playNoise(time);
  }
  if (pads[3].querySelectorAll("input")[beatNumber].checked) {
    playSample(audioCtx, dtmf, time);
  }
}
```

ここでは、現在の時刻を見て、次の音符の時刻と比較します。両者が一致すると、前回までの 2 つの関数を呼び出します。

{{domxref("AudioContext")}} オブジェクトインスタンスには [`currentTime`](/ja/docs/Web/API/BaseAudioContext/currentTime) プロパティがあり、最初にコンテキストを作成してから何秒経ったかを取得することができます。ステップシーケンサでタイミングをとるために使用します。これは非常に正確で、小数点以下 15 桁程度で正確な浮動小数点値を返します。

```js
let timerID;
function scheduler() {
  // While there are notes that will need to play before the next interval,
  // schedule them and advance the pointer.
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentNote, nextNoteTime);
    nextNote();
  }
  timerID = setTimeout(scheduler, lookahead);
}
```

`draw()` 関数も UI を更新するために必要で、そうすれば拍子がいつ進むかを見ることができます。

```js
let lastNoteDrawn = 3;
function draw() {
  let drawNote = lastNoteDrawn;
  const currentTime = audioCtx.currentTime;

  while (notesInQueue.length && notesInQueue[0].time < currentTime) {
    drawNote = notesInQueue[0].note;
    notesInQueue.shift(); // Remove note from queue
  }

  // We only need to draw if the note has moved.
  if (lastNoteDrawn !== drawNote) {
    pads.forEach((pad) => {
      pad.children[lastNoteDrawn * 2].style.borderColor = "var(--black)";
      pad.children[drawNote * 2].style.borderColor = "var(--yellow)";
    });

    lastNoteDrawn = drawNote;
  }
  // Set up to draw again
  requestAnimationFrame(draw);
}
```

## すべてを用意する

これで、あとはインストゥルメントを演奏する前にサンプルを読み込むだけです。ファイルが取得され、デコードされると消えるローディング画面を追加します。そして、プレイボタンのクリックイベントを使用してスケジューラーを開始できるようにします。

```js
// When the sample has loaded, allow play
const loadingEl = document.querySelector(".loading");
const playButton = document.querySelector("#playBtn");
let isPlaying = false;
setupSample().then((sample) => {
  loadingEl.style.display = "none";

  dtmf = sample; // to be used in our playSample function

  playButton.addEventListener("click", (ev) => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // Start playing

      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // kick off scheduling
      requestAnimationFrame(draw); // start the drawing loop.
      ev.target.dataset.playing = "true";
    } else {
      clearTimeout(timerID);
      ev.target.dataset.playing = "false";
    }
  });
});
```

## まとめ

これでブラウザー内に楽器ができました。これらのテクニックを発展させて、もっと手の込んだものを作成することができます。
