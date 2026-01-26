---
title: Web Audio API の使用
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

[Web Audio API](/ja/docs/Web/API/Web_Audio_API) の入門を見てみましょう。ここではいくつかの概念を短く確認してから、簡単な boombox の例で、音声トラックの読み込み、再生と一時停止、音量やステレオ位置の変更の方法を学びましょう。

Web Audio API は {{HTMLElement("audio")}} メディア要素を置き換えるものではなく、むしろその機能を補完するものであり、 {{HTMLElement("canvas")}} が {{HTMLElement("img")}} 要素と並行して存在するのと似ています。どちらを利用するかは、その目的によります。音声トラックの再生を制御したいだけであれば、 `<audio>` メディア要素の方がよりよく、 Web Audio API よりも早く解決できるでしょう。再生だけでなくもっと複雑な音声処理が必要であれば、 Web Audio API ははるかに強力な制御を行うことができます。

Web Audio API の強力な要素の一つは、厳格な「音声の呼び出しの制限」がないことです。例えば、同時に 32 音や 64 音などの上限はありません。プロセッサーの能力があれば、1,000 以上の音を詰まることなく再生することもできます。

## コード例

boombox の外見は次の通りです。

![boombox の外見で、再生、パン、音量コントロールがあります](boombox.png)

これは古いカセットデッキで、再生ボタンがあり、音量とステレオ位置を変更することができる音量とパンのスライダーがあります。なお、もっと複雑にすることもできますが、この段階で簡単に学ぶには理想的なものです。

[こちらから最終的なデモを Codepen で確認する](https://codepen.io/Rumyra/pen/qyMzqN/)か、[ソースコードを GitHub で](https://github.com/mdn/webaudio-examples/tree/master/audio-basics)見るかしてください。

## ブラウザーの対応

最新のブラウザーは Web Audio API のほとんどの機能によく対応しています。 API の機能はたくさんありますので、もっと正確な情報は、各リファレンスページのブラウザー互換性一覧表をチェックする必要があるでしょう。

## 音声グラフ

Web Audio API の中にあるすべてのものは音声グラフの概念に基づいており、ノードから成っています。

Web Audio API は**音声コンテキスト**に含まれる音声操作を扱い、**モジューラールーティング**が作れるように設計されています。基本的な音声の編集は**音声ノード**で行われ、それは互いに結びつき、**音声ルーティンググラフ**を構成します。加工する音を入力する入力ノード、望み通りに音を加工する加工ノード、音を保存したり聴いたりすることができる出力ノード (出力先) から成ります。

それぞれの音声ソースは、単一のコンテキストであっても、異なるチャンネルレイアウトに対応しています。このモジュラー設計によって、動的な効果を持つ複雑なオーディオ関数を作成することができます。

## 音声コンテキスト

Web Audio API で何かをすることができるようにするには、音声コンテキストのインスタンスを作成する必要があります。この後で、 API のすべての機能にアクセスすることができます。

```js
// 古いブラウザー向け
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
```

これを実行するとどうなるのでしょうか。 {{domxref("BaseAudioContext")}} が自動的に生成され、オンライン音声コンテキストに拡張されます。これを行うのは、ライブサウンドを再生しようとしているからです。

> [!NOTE]
> 音声データを処理したいだけ、例えば、バッファリングとストリーミングのみを行い再生するのでなければ、 {{domxref("OfflineAudioContext")}} を作成するようにしたほうが良いかもしれません。

## 音声の読み込み

作成した音声コンテキストには、そこで再生する音声が必要になります。これを行う API は少ししかありません。簡単な方法で始めてみましょう — boombox を使うと、曲のトラック全体を再生するのが普通です。また、アクセシビリティのために、そのトラックを DOM に公開したほうがいいしょう。このページの曲を公開するために {{htmlelement("audio")}} 要素を使用します。

```html
<audio src="myCoolTrack.mp3" type="audio/mpeg"></audio>
```

> [!NOTE]
> 読み込もうとしている音声ファイルが別なドメインにある場合は、 `crossorigin` 属性を使用する必要があるでしょう。詳しくは[オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS) を参照してください。

Web Audio API を使用してできるすばらしいことをすべて利用するためには、この要素で入力元をつかみ、作成したコンテキストに*送り込む*ことが必要です。幸いにもちょうどこれを行うメソッド — {{domxref("AudioContext.createMediaElementSource")}} が存在します。

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> 上記の `<audio>` 要素は DOM 内では {{domxref("HTMLMediaElement")}} 型のオブジェクトで表され、これは独自の機能のセットを持っています。これらはすべてそのままです。 Web Audio API で音声を利用できるようにするだけです。

## 音声の制御

ウェブ上で音声を再生するとき、ユーザーが制御できるようにすることが重要です。目的によって無数の選択肢がありますが、ここでは音声の再生と一時停止、トラックの音量と左右のパンの変更の機能を提供します。

JavaScript コードからプログラム的に音声を制御することは、ブラウザーの自動再生の対応方針の影響を受けますので、ユーザー (またはホワイトリスト) の許可がないとブロックされる場合があります。自動再生の方針は通常、明示的な許可かスクリプトが音声を再生できるようになる前のユーザーのページへの反応を必要とします。

これらの特別な要件が基本的に設定されているのは、予想外の音が迷惑で邪魔になり、アクセシビリティの問題を引き起こす可能性があるためです。これについては、記事[メディアと Web Audio API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay)をご覧ください。

このスクリプトはユーザー入力イベント (例えば再生ボタンのクリック) への応答で音声を再生しているため、良い形であり自動再生ブロックの問題はないでしょう。ですから、再生や一時停止機能についての話を始めましょう。再生ボタンはトラックの再生中には一時停止ボタンに変わります。

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

トラックを再生する前に、音声グラフを音声ソースまたは入力ノードから出力先へ接続する必要があります。

既に入力ノードについては、 audio 要素を API に渡すことで作成しました。ほとんどの場合は、出力ノード作成する必要はなく、他のノードを {{domxref("BaseAudioContext.destination")}} へ接続するだけです。

```js
track.connect(audioContext.destination);
```

これらのノードを図示するのによい方法は、音声グラフを描画することです。これは現在の音声グラフの見え方を表します。

![an audio graph with an audio element source connected to the default destination](graph1.jpg)

これで再生と一時停止機能を追加できるようになりました。

```js
// select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false,
);
```

また、トラックの再生が終了したらどうするかを考慮しておく必要があります。 `HTMLMediaElement` は `ended` イベントを再生終了時に一度発生させるので、これを待ち受けして関連するコードを実行します。

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## 音の加工

基本的な加工ノードを追加して、音を変化させてみましょう。これは Web Audio API が本当に役立ち始めるところです。まず最初に、音量を変化させてみましょう。これは音の波がどれだけ大きいかを表す {{domxref("GainNode")}} を使用すれば実現できます。

Web Audio API でノードを作成することができる方法は二通りあります。コンテキスト自身のファクトリメソッド (例えば `audioContext.createGain()`) を使用するか、ノードのコンストラクター (例えば `new GainNode()`) です。ここではファクトリメソッドを使用します。

```js
const gainNode = audioContext.createGain();
```

音声グラフを以前のものから更新する必要があり、入力を gain に接続してから、 gain ノードを出力先に接続します。

```js
track.connect(gainNode).connect(audioContext.destination);
```

これで音声グラフはこのようになります。

![an audio graph with an audio element source, connected to a gain node that modifies the audio source, and then going to the default destination](graph2.jpg)

gain の既定値は 1 です。これは現在の音量を同じに維持します。 gain は最小値がおよそ-3.4 で最大値はおよそ 3.4 です。ここで boombox は gain を最大 2 (元の音量の倍)、最小 0 (結果的に音声をミュートします) の範囲で動かせるようにします。

ユーザーがこれを制御できるようにしましょう。 — [range 入力](/ja/docs/Web/HTML/Reference/Elements/input/range)を使用します。

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> range 入力は、音声ノードの値を更新するのに実に手軽な入力型です。 range の値を音声ノードの引数に直接設定したり、使用したりすることができます。

それでは、ユーザーが値を変更したときに入力された値を取得して gain の値を更新するようにしましょう。

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false,
);
```

> [!NOTE]
> ノードオブジェクトの値 (例えば `GainNode.gain`) は単純な値ではなく、実際には {{domxref("AudioParam")}} 型のオブジェクト — これが引数と呼ばれています。なぜかといえば、 `GainNode.gain` の `value` プロパティを設定しなければならず、 `gain` を直接設定するだけではないからです。これによってはるかに柔軟になり、例えば特定の値のセットを引数で渡して、一定の期間にわたって変化させたりすることができます。

素晴らしい、ユーザーがトラックの音量を追更新できるようになりました。ミュート機能を追加したい場合も gain ノードは完全なノードです。

## アプリにステレオ位置を追加

学んだことを練習するために、もう一つの加工ノードを追加してみましょう。

ユーザーがステレオ機能を持っている場合、左右のスピーカーの間で音のバランスを変更する {{domxref("StereoPannerNode")}} ノードがあります。

`StereoPannerNode` は、左右間のステレオパンを行う単純な用途のためのものです。 {{domxref("PannerNode")}} というものもあり、こちらはもっと複雑な効果を生成するための、 3D 空間や音声の*空間化*などを大幅に制御することができます。これはゲームや 3D アプリなどで使用され、例えば頭上を飛ぶ鳥や、ユーザーの背後から聞こえる音などを生成します。

図示すると、音声グラフは次のようになります。

![入力ノード、2つの加工ノード (gain ノードと stereo panner ノード)、出力ノードを示した音声グラフを表す図です。](graphPan.jpg)

今回はノードを作成するコンストラクターメソッドを使用しましょう。この方法では、コンテキストとその特定のノードが取るオプションを渡す必要があります。

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> ノードを作成するコンストラクターメソッドは、いまのところすべてのブラウザーで対応されている訳ではありません。古いファクトリメソッドの方がより広く対応されています。

個々の値の範囲は -1 (はるか左) と 1 (はるか右) の間です。今回も range 型の入力でこの引数を変更できるようにしましょう。

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

以前行ったのと同じ方法で、この入力から得た値を使ってパンの値を調整します。

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener(
  "input",
  function () {
    panner.pan.value = this.value;
  },
  false,
);
```

また音声グラフを調整して、すべてのノードを互いに接続しましょう。

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

アプリに行うべき残りの作業はについては、[こちらから Codepen 上で最終的なデモを確認して](https://codepen.io/Rumyra/pen/qyMzqN/)みてください。

## まとめ

素晴らしい！ boombox が出来上がり、「テープ」を再生したり、音量やステレオ位置を調整したりできるようにするために、かなり基本的な音声グラフの作業を行いました。

これは、音声をウェブサイトやウェブアプリに追加するために始める必要がある基本事項のかなりの部分を構成しています。 Web Audio API にはさらに多くの機能がありますが、ノードの概念を把握し、音声グラフをまとめると、より複雑な機能を見に行くことができます。

## 他の例

Web Audio API についてもっと学ぶことができる他の例があります。

[Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic) は、楽しい音声加工および音の視覚化を行うウェブアプリで、様々な効果や視覚化を選択することができます。このアプリケーションはかなり初歩的ですが、 Web Audio API の複数の機能を同時に使用する例を示しています。 ([Voice-change-O-matic をライブで実行](https://mdn.github.io/webaudio-examples/voice-change-o-matic/))

![音の波が表示され、音声効果や視覚化を選択することができるユーザーインターフェイス。](voice-change-o-matic.png)

他にも特に Web Audio API を紹介するために開発されたアプリケーションとして [Violent Theremin](https://mdn.github.io/violent-theremin/) があり、これはマウスポインターを動かすことで音高や音量を変更することができるシンプルなウェブアプリケーションです。これはサイケデリックなライトショーも提供します。 ([Violent Theremin のソースコードを見る](https://github.com/mdn/violent-theremin))

![虹色に埋め尽くされたページで、 Clear screen と mute と書かれた2つのボタンがあります。](violent-theremin.png)

他にも例としては [webaudio-examples リポジトリ](https://github.com/mdn/webaudio-examples)を参照してください。
