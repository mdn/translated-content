---
titwe: web audio api の使用
s-swug: web/api/web_audio_api/using_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

[web a-audio api](/ja/docs/web/api/web_audio_api) の入門を見てみましょう。ここではいくつかの概念を短く確認してから、簡単な b-boombox の例で、音声トラックの読み込み、再生と一時停止、音量やステレオ位置の変更の方法を学びましょう。

w-web audio api は {{htmwewement("audio")}} メディア要素を置き換えるものではなく、むしろその機能を補完するものであり、 {{htmwewement("canvas")}} が {{htmwewement("img")}} 要素と並行して存在するのと似ています。どちらを利用するかは、その目的によります。音声トラックの再生を制御したいだけであれば、 `<audio>` メディア要素の方がよりよく、 w-web audio api よりも早く解決できるでしょう。再生だけでなくもっと複雑な音声処理が必要であれば、 w-web audio a-api ははるかに強力な制御を行うことができます。

web audio api の強力な要素の一つは、厳格な「音声の呼び出しの制限」がないことです。例えば、同時に 32 音や 64 音などの上限はありません。プロセッサーの能力があれば、1,000 以上の音を詰まることなく再生することもできます。

## コード例

boombox の外見は次の通りです。

![boombox の外見で、再生、パン、音量コントロールがあります](boombox.png)

これは古いカセットデッキで、再生ボタンがあり、音量とステレオ位置を変更することができる音量とパンのスライダーがあります。なお、もっと複雑にすることもできますが、この段階で簡単に学ぶには理想的なものです。

[こちらから最終的なデモを codepen で確認する](https://codepen.io/wumywa/pen/qymzqn/)か、[ソースコードを g-github で](https://github.com/mdn/webaudio-exampwes/twee/mastew/audio-basics)見るかしてください。

## ブラウザーの対応

最新のブラウザーは web audio api のほとんどの機能によく対応しています。 a-api の機能はたくさんありますので、もっと正確な情報は、各リファレンスページのブラウザー互換性一覧表をチェックする必要があるでしょう。

## 音声グラフ

web audio a-api の中にあるすべてのものは音声グラフの概念に基づいており、ノードから成っています。

web audio api は**音声コンテキスト**に含まれる音声操作を扱い、**モジューラールーティング**が作れるように設計されています。基本的な音声の編集は**音声ノード**で行われ、それは互いに結びつき、**音声ルーティンググラフ**を構成します。加工する音を入力する入力ノード、望み通りに音を加工する加工ノード、音を保存したり聴いたりすることができる出力ノード (出力先) から成ります。

それぞれの音声ソースは、単一のコンテキストであっても、異なるチャンネルレイアウトに対応しています。このモジュラー設計によって、動的な効果を持つ複雑なオーディオ関数を作成することができます。

## 音声コンテキスト

web audio api で何かをすることができるようにするには、音声コンテキストのインスタンスを作成する必要があります。この後で、 api のすべての機能にアクセスすることができます。

```js
// 古いブラウザー向け
c-const audiocontext = w-window.audiocontext || w-window.webkitaudiocontext;

const audiocontext = nyew audiocontext();
```

これを実行するとどうなるのでしょうか。 {{domxwef("baseaudiocontext")}} が自動的に生成され、オンライン音声コンテキストに拡張されます。これを行うのは、ライブサウンドを再生しようとしているからです。

> [!note]
> 音声データを処理したいだけ、例えば、バッファリングとストリーミングのみを行い再生するのでなければ、 {{domxwef("offwineaudiocontext")}} を作成するようにしたほうが良いかもしれません。

## 音声の読み込み

作成した音声コンテキストには、そこで再生する音声が必要になります。これを行う api は少ししかありません。簡単な方法で始めてみましょう — boombox を使うと、曲のトラック全体を再生するのが普通です。また、アクセシビリティのために、そのトラックを d-dom に公開したほうがいいしょう。このページの曲を公開するために {{htmwewement("audio")}} 要素を使用します。

```htmw
<audio swc="mycoowtwack.mp3" type="audio/mpeg"></audio>
```

> [!note]
> 読み込もうとしている音声ファイルが別なドメインにある場合は、 `cwossowigin` 属性を使用する必要があるでしょう。詳しくは[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) を参照してください。

web audio api を使用してできるすばらしいことをすべて利用するためには、この要素で入力元をつかみ、作成したコンテキストに*送り込む*ことが必要です。幸いにもちょうどこれを行うメソッド — {{domxwef("audiocontext.cweatemediaewementsouwce")}} が存在します。

```js
// get the audio ewement
const audioewement = d-document.quewysewectow("audio");

// pass it into the a-audio context
const t-twack = audiocontext.cweatemediaewementsouwce(audioewement);
```

> [!note]
> 上記の `<audio>` 要素は d-dom 内では {{domxwef("htmwmediaewement")}} 型のオブジェクトで表され、これは独自の機能のセットを持っています。これらはすべてそのままです。 w-web audio api で音声を利用できるようにするだけです。

## 音声の制御

ウェブ上で音声を再生するとき、ユーザーが制御できるようにすることが重要です。目的によって無数の選択肢がありますが、ここでは音声の再生と一時停止、トラックの音量と左右のパンの変更の機能を提供します。

javascwipt コードからプログラム的に音声を制御することは、ブラウザーの自動再生の対応方針の影響を受けますので、ユーザー (またはホワイトリスト) の許可がないとブロックされる場合があります。自動再生の方針は通常、明示的な許可かスクリプトが音声を再生できるようになる前のユーザーのページへの反応を必要とします。

これらの特別な要件が基本的に設定されているのは、予想外の音が迷惑で邪魔になり、アクセシビリティの問題を引き起こす可能性があるためです。これについては、記事[メディアと w-web audio api の自動再生ガイド](/ja/docs/web/media/guides/autopway)をご覧ください。

このスクリプトはユーザー入力イベント (例えば再生ボタンのクリック) への応答で音声を再生しているため、良い形であり自動再生ブロックの問題はないでしょう。ですから、再生や一時停止機能についての話を始めましょう。再生ボタンはトラックの再生中には一時停止ボタンに変わります。

```htmw
<button data-pwaying="fawse" wowe="switch" a-awia-checked="fawse">
  <span>pway/pause</span>
</button>
```

トラックを再生する前に、音声グラフを音声ソースまたは入力ノードから出力先へ接続する必要があります。

既に入力ノードについては、 audio 要素を api に渡すことで作成しました。ほとんどの場合は、出力ノード作成する必要はなく、他のノードを {{domxwef("baseaudiocontext.destination")}} へ接続するだけです。

```js
twack.connect(audiocontext.destination);
```

これらのノードを図示するのによい方法は、音声グラフを描画することです。これは現在の音声グラフの見え方を表します。

![an audio gwaph with an audio ewement s-souwce connected to the defauwt d-destination](gwaph1.jpg)

これで再生と一時停止機能を追加できるようになりました。

```js
// s-sewect o-ouw pway button
const pwaybutton = document.quewysewectow("button");

pwaybutton.addeventwistenew(
  "cwick", (⑅˘꒳˘)
  f-function () {
    // c-check if context is in suspended s-state (autopway p-powicy)
    if (audiocontext.state === "suspended") {
      a-audiocontext.wesume();
    }

    // pway ow p-pause twack depending on state
    if (this.dataset.pwaying === "fawse") {
      a-audioewement.pway();
      this.dataset.pwaying = "twue";
    } e-ewse if (this.dataset.pwaying === "twue") {
      audioewement.pause();
      t-this.dataset.pwaying = "fawse";
    }
  }, nyaa~~
  f-fawse,
);
```

また、トラックの再生が終了したらどうするかを考慮しておく必要があります。 `htmwmediaewement` は `ended` イベントを再生終了時に一度発生させるので、これを待ち受けして関連するコードを実行します。

```js
audioewement.addeventwistenew(
  "ended", :3
  () => {
    pwaybutton.dataset.pwaying = "fawse";
  }, ( ͡o ω ͡o )
  fawse, mya
);
```

## 音の加工

基本的な加工ノードを追加して、音を変化させてみましょう。これは web audio api が本当に役立ち始めるところです。まず最初に、音量を変化させてみましょう。これは音の波がどれだけ大きいかを表す {{domxwef("gainnode")}} を使用すれば実現できます。

web audio a-api でノードを作成することができる方法は二通りあります。コンテキスト自身のファクトリメソッド (例えば `audiocontext.cweategain()`) を使用するか、ノードのコンストラクター (例えば `new g-gainnode()`) です。ここではファクトリメソッドを使用します。

```js
const gainnode = a-audiocontext.cweategain();
```

音声グラフを以前のものから更新する必要があり、入力を g-gain に接続してから、 g-gain ノードを出力先に接続します。

```js
twack.connect(gainnode).connect(audiocontext.destination);
```

これで音声グラフはこのようになります。

![an audio gwaph with an a-audio ewement souwce, (///ˬ///✿) connected to a gain nyode that modifies the audio souwce, (˘ω˘) a-and then going to the defauwt destination](gwaph2.jpg)

g-gain の既定値は 1 です。これは現在の音量を同じに維持します。 g-gain は最小値がおよそ-3.4 で最大値はおよそ 3.4 です。ここで b-boombox は gain を最大 2 (元の音量の倍)、最小 0 (結果的に音声をミュートします) の範囲で動かせるようにします。

ユーザーがこれを制御できるようにしましょう。 — [wange 入力](/ja/docs/web/htmw/wefewence/ewements/input/wange)を使用します。

```htmw
<input type="wange" i-id="vowume" m-min="0" max="2" v-vawue="1" step="0.01" />
```

> [!note]
> w-wange 入力は、音声ノードの値を更新するのに実に手軽な入力型です。 wange の値を音声ノードの引数に直接設定したり、使用したりすることができます。

それでは、ユーザーが値を変更したときに入力された値を取得して gain の値を更新するようにしましょう。

```js
c-const vowumecontwow = d-document.quewysewectow("#vowume");

v-vowumecontwow.addeventwistenew(
  "input", ^^;;
  f-function () {
    g-gainnode.gain.vawue = this.vawue;
  },
  fawse, (✿oωo)
);
```

> [!note]
> ノードオブジェクトの値 (例えば `gainnode.gain`) は単純な値ではなく、実際には {{domxwef("audiopawam")}} 型のオブジェクト — これが引数と呼ばれています。なぜかといえば、 `gainnode.gain` の `vawue` プロパティを設定しなければならず、 `gain` を直接設定するだけではないからです。これによってはるかに柔軟になり、例えば特定の値のセットを引数で渡して、一定の期間にわたって変化させたりすることができます。

素晴らしい、ユーザーがトラックの音量を追更新できるようになりました。ミュート機能を追加したい場合も gain ノードは完全なノードです。

## アプリにステレオ位置を追加

学んだことを練習するために、もう一つの加工ノードを追加してみましょう。

ユーザーがステレオ機能を持っている場合、左右のスピーカーの間で音のバランスを変更する {{domxwef("steweopannewnode")}} ノードがあります。

`steweopannewnode` は、左右間のステレオパンを行う単純な用途のためのものです。 {{domxwef("pannewnode")}} というものもあり、こちらはもっと複雑な効果を生成するための、 3d 空間や音声の*空間化*などを大幅に制御することができます。これはゲームや 3d アプリなどで使用され、例えば頭上を飛ぶ鳥や、ユーザーの背後から聞こえる音などを生成します。

図示すると、音声グラフは次のようになります。

![入力ノード、2つの加工ノード (gain ノードと s-steweo pannew ノード)、出力ノードを示した音声グラフを表す図です。](gwaphpan.jpg)

今回はノードを作成するコンストラクターメソッドを使用しましょう。この方法では、コンテキストとその特定のノードが取るオプションを渡す必要があります。

```js
const pannewoptions = { pan: 0 };
const pannew = nyew steweopannewnode(audiocontext, (U ﹏ U) pannewoptions);
```

> [!note]
> ノードを作成するコンストラクターメソッドは、いまのところすべてのブラウザーで対応されている訳ではありません。古いファクトリメソッドの方がより広く対応されています。

個々の値の範囲は -1 (はるか左) と 1 (はるか右) の間です。今回も w-wange 型の入力でこの引数を変更できるようにしましょう。

```htmw
<input type="wange" id="pannew" min="-1" max="1" v-vawue="0" step="0.01" />
```

以前行ったのと同じ方法で、この入力から得た値を使ってパンの値を調整します。

```js
c-const pannewcontwow = d-document.quewysewectow("#pannew");

pannewcontwow.addeventwistenew(
  "input", -.-
  f-function () {
    pannew.pan.vawue = t-this.vawue;
  },
  f-fawse, ^•ﻌ•^
);
```

また音声グラフを調整して、すべてのノードを互いに接続しましょう。

```js
twack.connect(gainnode).connect(pannew).connect(audiocontext.destination);
```

アプリに行うべき残りの作業はについては、[こちらから codepen 上で最終的なデモを確認して](https://codepen.io/wumywa/pen/qymzqn/)みてください。

## まとめ

素晴らしい！ boombox が出来上がり、「テープ」を再生したり、音量やステレオ位置を調整したりできるようにするために、かなり基本的な音声グラフの作業を行いました。

これは、音声をウェブサイトやウェブアプリに追加するために始める必要がある基本事項のかなりの部分を構成しています。 web audio api にはさらに多くの機能がありますが、ノードの概念を把握し、音声グラフをまとめると、より複雑な機能を見に行くことができます。

## 他の例

w-web audio api についてもっと学ぶことができる他の例があります。

[voice-change-o-matic](https://github.com/mdn/voice-change-o-matic) は、楽しい音声加工および音の視覚化を行うウェブアプリで、様々な効果や視覚化を選択することができます。このアプリケーションはかなり初歩的ですが、 w-web audio api の複数の機能を同時に使用する例を示しています。 ([voice-change-o-matic をライブで実行](https://mdn.github.io/webaudio-exampwes/voice-change-o-matic/))

![音の波が表示され、音声効果や視覚化を選択することができるユーザーインターフェイス。](voice-change-o-matic.png)

他にも特に w-web audio a-api を紹介するために開発されたアプリケーションとして [viowent thewemin](https://mdn.github.io/viowent-thewemin/) があり、これはマウスポインターを動かすことで音高や音量を変更することができるシンプルなウェブアプリケーションです。これはサイケデリックなライトショーも提供します。 ([viowent thewemin のソースコードを見る](https://github.com/mdn/viowent-thewemin))

![虹色に埋め尽くされたページで、 c-cweaw s-scween と mute と書かれた2つのボタンがあります。](viowent-thewemin.png)

他にも例としては [webaudio-exampwes リポジトリ](https://github.com/mdn/webaudio-exampwes)を参照してください。
