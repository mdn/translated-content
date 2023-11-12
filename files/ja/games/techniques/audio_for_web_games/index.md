---
title: ウェブゲーム用の音声
slug: Games/Techniques/Audio_for_Web_Games
---

{{GamesSidebar}}

音声はゲームの重要部分です。つまりこれはフィードバックと雰囲気を与えます。ウェブベースの音声は早くから成熟していますが、まだ多くのブラウザーに案内すべき違いがあります。ゲームエクスペリエンスにとってどの音声パーツが重要で、どれがあっても良いけど不要なものかを決めて、それに従って戦略を決めるのが必要となる事がよくあります。この記事ではウェブゲーム用の音声を実装するための詳細なガイドを提供し、現在なるべく広い範囲のプラットフォームで動作するものを観察します。

## モバイル音声の注意点

これまでウェブオーディオのサポートを提供するのに最も難しいプラットフォームはモバイルプラットフォームでした。不幸にもこれはゲームで遊ぶ人が良くいるプラットフォームです。デスクトップとモバイルのブラウザーにはいくつかの違いがあり、それがブラウザーベンダーに、ゲーム開発者が作業するのが難しくなるウェブオーディオの選択を起こすことがありました。これを見ていきましょう。

### 自動再生

ブラウザー自動再生ポリシーは、デスクトップ*および*モバイルブラウザーに影響を与えるようになりました。それについての詳細な情報があります [Google Developers サイトからこちら](https://developer.chrome.com/blog/autoplay/)。

音声付きの自動再生が許可されるのは、次のような場合であることは特筆すべきです。

- ユーザーがドメインと対話したことがあること。
- モバイルでは、ユーザーが[サイトを画面の内側へ追加した](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen)場合に許可されます。

多くのモバイルブラウザーは、ゲームが音声再生するように要求しても単に無視します。つまり音声の再生にはユーザーが開始するイベントが必要です。これは音声再生の構成を考慮する必要があるということです。これは通常、事前に音声を読み込んでユーザーが開始するイベントに準備しておくことで守られます。

受動的な音声の自動再生、例えばゲームが読み込まれるとすぐに始まる BGM の場合、ユーザーが開始したイベントを検知して再生を開始するのも 1 つの方法です。ゲーム中に使用できるアクティブなサウンドの場合は、"Start" ボタンなどが押された時点で再生させることもできます。

このように音声を再生するには、その一部を再生する必要があります。そのためには、音声サンプルの最後に一瞬の無音を入れるのが効果的です。この無音部分にジャンプして再生し、一時停止することで、JavaScript を使用して任意の時点でそのファイルを再生できるようになります。[自動再生ポリシーの最善の手法はこちら](/ja/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy)で詳しく説明されています。

> **メモ:** もしブラウザーがあなたに音量を変更することを許可するならば、ファイルを音量ゼロで再生することも可能でしょう（後述）。また、音声を再生後に即時停止することは、音声の小さな断片が再生されないことを保証しない、ということにも注意してください。

> **メモ:** モバイルのホーム画面にウェブアプリを追加することで特性が変化してしまうかもしれません。今のところ、 iOS 上の自動再生がこのケースに当てはまるようです。可能であれば、いくつかのデバイスとプラットフォームでコードがどう動くか試すべきです。

### 音量

ボリュームコントロールのプログラムはモバイルブラウザーで無効化されていることがあります。この理由はしばしばユーザーが OS レベルでボリュームをコントロールし、上書きが禁止されているためです。

### バッファリングと先読み

急騰するモバイルネットワークのデータ使用を軽減するための試みとして、再生開始前のバッファリングができなくなることが恐らくあります。バッファリングとは、ブラウザーが前もってメディアのダウンロードをする処理であり、円滑な再生を確実なものにするために度々必要になります。

{{domxref("HTMLMediaElement")}} インターフェイスが備える [多くのプロパティ](/ja/docs/Web/API/HTMLMediaElement#properties) はトラックが再生可能な状態にあるかどうかを決定する助けになります。

> **メモ:** 色々な意味でバッファリングの概念は時代遅れです。バイトレンジリクエストが許容される限り（これが既定の振る舞いです）、先行する内容のダウンロードの必要なしに音声の任意の点に飛ぶことができるべきです。しかしながら、先読みは依然として便利です。それなしでは、再生が始められるようになる前に、常にいくらかのクライアント・サーバー間通信が必要になるでしょう。

### 並行した音声再生

多くのゲームでは、複数の音声を同時に再生することが求められます。例えば、ゲーム内で様々なことが起こるために、バックグラウンドミュージックと効果音を一緒に再生することがあります。この状況は近々、 [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の採用でもっと上手くいくようになる予定ですが、現状最も広くサポートされている方法 ― 平凡な {{htmlelement("audio")}} 要素を使用すること ― は、モバイル端末上では不安定な結果になります。

### テストとサポート

ここでは、どのモバイルプラットフォームが前述した機能をサポートするかを表に示します。

<table class="standard-table">
  <caption>
    ウェブオーディオ機能のモバイル対応
  </caption>
  <thead>
    <tr>
      <th scope="row">モバイルブラウザー</th>
      <th scope="col">バージョン</th>
      <th scope="col">同時再生</th>
      <th scope="col">自動再生</th>
      <th scope="col">音量調整</th>
      <th scope="col">先読み</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome (Android)</th>
      <td>69+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Firefox (Android)</th>
      <td>62+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Edge Mobile</th>
      <td></td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Opera Mobile</th>
      <td>46+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Safari (iOS)</th>
      <td>7+</td>
      <td>Y/N*</td>
      <td>N</td>
      <td>N</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Android Browser</th>
      <td>67+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

[モバイルとデスクトップの HTMLMediaElement に対応している完全な互換性表](/ja/docs/Web/API/HTMLMediaElement#ブラウザーの互換性)があります。

> **メモ:** 音声の同時再生は私たちの[同時音声テストの例](https://jsfiddle.net/dmkyaq0r/)を使ってテストされますが、そこでは標準の音声 API を使って 3 つの音声の同時再生を試しています。

> **メモ:** 単純な自動再生機能は私たちの[自動再生テストの例](https://jsfiddle.net/vpdspp2b/)でテストされます。

> **メモ:** 音量の可変性は私たちの[音量テストの例](https://jsfiddle.net/7ta12vw4/)でテストされます。

## モバイルの回避処理

モバイルブラウザーは問題を抱えていますが、上に詳述した問題については回避する方法があります。

### 音声スプライト

音声スプライトは [CSS スプライト](/ja/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)から名前をとったもので、 CSS スプライトとは単一グラフィックリソースを連続したスプライトに分解して使う CSS のための視覚的なテクニックです。同じ原理を音声に適用することで、読み込みと再生に時間のかかる小さな音声ファイルの束ではなく、必要とする音声すべてを含む大きな音声ファイル一つを用いることができます。そのファイルから特定の音を再生するには、各音声スプライトの既知の開始・停止時間を指定するだけです。

利点は、一つの音声を前もって提供しておき、スプライトをすぐ使える状態にできることです。こうすることで、大きな一つの音声の再生と即時停止をするだけですみます。また、サーバーリクエスト数を減らすことと、帯域幅を節約することもできます。

```js
const myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

停止すべき時間を知るために、現在時間のサンプリングをする必要があるでしょう。もし個々の音声について 500ms 以上の間隔をあけるなら、 `timeUpdate` イベント（250ms 毎に発動します）を使うことで事足りるはずです。ファイルは厳密に必要であるよりわずかに長くなりますが、無音部分はよく圧縮されます。

ここに音声スプライトプレイヤーの例があります。 ― まずはHTMLでユーザーインターフェイスを構築しましょう:

```html
<audio id="myAudio" src="http://jPlayer.org/tmp/countdown.mp3"></audio>
<button data-start="18" data-stop="19">0</button>
<button data-start="16" data-stop="17">1</button>
<button data-start="14" data-stop="15">2</button>
<button data-start="12" data-stop="13">3</button>
<button data-start="10" data-stop="11">4</button>
<button data-start="8" data-stop="9">5</button>
<button data-start="6" data-stop="7">6</button>
<button data-start="4" data-stop="5">7</button>
<button data-start="2" data-stop="3">8</button>
<button data-start="0" data-stop="1">9</button>
```

今、開始・停止時間を秒単位で指定したボタンがあります。"countdown.mp3" という MP3 ファイルは 2 秒ごとに声に出された数字から成り、ここで意図していることは、対応するボタンが押された時にその数が再生されるということです。

このように動作する JavaScript を追加しましょう。

```js
const myAudio = document.getElementById("myAudio");
const buttons = document.getElementsByTagName("button");
let stopTime = 0;

for (const button of buttons) {
  button.addEventListener(
    "click",
    () => {
      myAudio.currentTime = button.getAttribute("data-start");
      stopTime = button.getAttribute("data-stop");
      myAudio.play();
    },
    false,
  );
}

myAudio.addEventListener(
  "timeupdate",
  () => {
    if (myAudio.currentTime > stopTime) {
      myAudio.pause();
    }
  },
  false,
);
```

> **メモ:** JSFiddle　上で[私たちの音声スプライトプレイヤーライブ](https://jsfiddle.net/59vwaame/)を試すことができます。

> **メモ:** 上に詳述したように、モバイルでは、スタートボタンが押されるといったようなユーザー開始イベントからコードを発動させる必要があるかもしれません。

> **メモ:** ビットレートに気をつけてください。低ビットレートのエンコードではファイルサイズは小さくなりますが、シーク精度も低くなります。

### バックグラウンドミュージック (BGM)

ゲーム内の音楽は感情に訴える強力な効果があります。あなたは様々な楽曲サンプルを組み合わせることができ、さらに、音声要素のボリュームをコントロールすることができることを想定すれば、異なる楽曲をクロスフェードさせることができます。 [`playbackRate()`](/ja/docs/Web/API/HTMLMediaElement/playbackRate) を使うことで、動きにより良く同期させるために、ピッチに影響なく音楽のスピードの調節もできます。

これは標準の {{htmlelement("audio")}} 要素を使って {{domxref("HTMLMediaElement")}} と連携しさえすれば可能となりますが、より発展した [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) を使えばもっと簡単で柔軟になります。次にこれについて見ていきましょう。

### ゲーム向けのウェブオーディオ API

ウェブオーディオ APIは、 Opera Mini を除く、最近のすべてのデスクトップおよびモバイルブラウザーで対応しています。このことを考慮すれば、多くの場面でウェブオーディオ API を使用することは受け入れられるアプローチです（ブラウザーの互換性については [Can I use Web Audio API ページ](https://caniuse.com/#feat=audio-api) を参照してください）。ウェブオーディオ API は、ゲーム音声に最適な、高度な音声 JavaScript API です。開発者は、音声の生成や音声サンプルの操作だけでなく、三次元のゲーム空間での音声の位置決めも可能です。

実現可能なクロスブラウザー戦略は、標準の `<audio>` 要素を使用して基本的な音声を提供し、対応している場合はウェブオーディオ API を使用して体験を拡張することでしょう。

> **メモ:** 重要なのは、 iOS Safari がウェブオーディオ API に対応していることです。つまり、iOS 向けのネイティブ品質の音声で、ウェブベースのゲームを書くことが可能になりました。

ウェブオーディオ API は音声再生の正確な時刻と制御を可能にするので、ゲームの没入感を高める重要な要素である、特定の瞬間にサンプルを再生するために使用することができます。ゲームの没入感を高めるには、爆発の後に轟音が続くのではなく、轟音と一緒に爆発してほしいものです。

### ウェブオーディオ API での BGM

`<audio>` 要素を使用して、ゲーム環境に反応して変化しない直線的な BGM を流すこともできますが、ウェブオーディオ API はよりダイナミックな音楽体験を搭載するのに理想的です。サスペンスを盛り上げるのか、プレイヤーを何らかの形で勇気づけるのかによって、音楽を変化させたい場合があります。音楽はゲーム体験の重要な要素であり、入力するゲームの型によっては、正しい音楽 を提供するために多大な労力を費やすことになるかもしれません。

音楽サウンドトラックをよりダイナミックにする方法の1つとして、ループやトラックに分割する方法があります。ウェブオーディオ API は、これらのパーツを同期させるのに非常に優れています。楽曲を構成する様々なトラックを保有したら、必要に応じてトラックを出し入れすることができます。

また、音楽にフィルターや エフェクトをかけることもできます。キャラクターは洞窟の中にいるのでしょうか？エコーを強くしましょう。水中のシーンがある場合は、音を消すフィルターを適用することもできます。

ここでは、ウェブオーディオ API のテクニックを使って、ベースとなるトラックから動的に音楽を調整する方法を見ていきましょう。

### トラックを読み込む

ウェブオーディオ API では、 {{domxref("XMLHttpRequest")}} または [Fetch API](/ja/docs/Web/API/Fetch_API) を使用して別個のトラックやループを個別に読み込むことができ、これは同期的にまたは並行してそれらを読み込むことができることを意味します。同期的に読み込むと、音楽の一部が早く準備でき、他のものが読み込まれている間に再生を開始することができます。

いずれにせよ、トラックやループを同期させたいと思うかもしれません。ウェブオーディオ API には、音声コンテキストを作成した瞬間に動き出す内部時計という概念があります。音声コンテキストを作成してから、最初の音声トラックが再生されるまでの時間を考慮する必要があります。このオフセットを記録し、再生中のトラックの現在時刻を問い合わせることで、別個の音声を同期させるのに十分な情報が得られます。

これを実際に見るために、別個のトラックをいくつか並べてみましょう。

```html
<section id="tracks">
  <ul>
    <li data-loading="true">
      <a href="leadguitar.mp3" class="track">Lead Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="guitar-play-label">
        <span id="guitar-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="bassguitar.mp3" class="track">Bass Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="bass-play-label">
        <span id="bass-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="drums.mp3" class="track">Drums</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="drums-play-label">
        <span id="drums-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="horns.mp3" class="track">Horns</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="horns-play-label">
        <span id="horns-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="clav.mp3" class="track">Clavi</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="clavi-play-label">
        <span id="clavi-play-label">Play</span>
      </button>
    </li>
  </ul>
  <p class="sourced">
    All tracks sourced from <a href="https://jplayer.org/">jplayer.org</a>
  </p>
</section>
```

これらのトラックはすべて同じテンポで、互いに同期するように設計されているので、それらを再生できるようにする*前に*、それらが読み込まれて API が利用可能であることを確認する必要があります。これは、 JavaScript の [`async`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 機能を使用して行うことができます。

再生が可能になったら、他のトラックが再生しているであろう正しい点から開始するようにし、同期させる必要があります。

それでは、音声コンテキストを作成しましょう。

```js
const audioCtx = new AudioContext();
```

ここで、{{htmlelement("li")}}要素をすべて選択してみましょう。後で、これらの要素を利用して、トラックのファイルパスや個々の再生ボタンにアクセスすることができます。

```js
const trackEls = document.querySelectorAll("li");
```

使用する前に、各ファイルが読み込まれてバッファーにデコードされたことを確認したいので、これを可能にする `async` 関数を作成しましょう。

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

そして、この関数を呼び出すときに `await` 演算子を使用することで、実行が完了したときに後続のコードを確実に実行することができます。

サンプルを設定するために、もうひとつ `async` 関数を作成しましょう。2 つの非同期関数をうまくプロミスパターンで組み合わせれば、各ファイルが読み込まれてバッファリングされたときに、さらにアクションを実行することができます。

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

また、 `playTrack()` 関数も作成しましょう。これは、一度ファイルを取得したときに呼び出すことができます。あるファイルの再生を開始したときに、どの程度先にある別のファイルを開始すればよいかを記録しておくために、ここではオフセットが必要です。

`start()` はオプションで 2 つの引数を見なされます。 1 つ目は再生を開始するタイミング、 2 つ目は再生する場所、つまりオフセットを指定します。

```js
let offset = 0;

function playTrack(audioBuffer) {
  const trackSource = audioCtx.createBufferSource();
  trackSource.buffer = audioBuffer;
  trackSource.connect(audioCtx.destination);

  if (offset === 0) {
    trackSource.start();
    offset = audioCtx.currentTime;
  } else {
    trackSource.start(0, audioCtx.currentTime - offset);
  }

  return trackSource;
}
```

最後に、`<li>` 要素をループして、それぞれ正しいファイルを取得し、"loading" テキストを隠して再生ボタンを表示することで、再生を許可してみましょう。

```js
trackEls.forEach((el, i) => {
  // Get children
  const anchor = el.querySelector("a");
  const loadText = el.querySelector("p");
  const playButton = el.querySelector("button");

  // Load file
  loadFile(anchor.href).then((track) => {
    // Set loading to false
    el.dataset.loading = "false";

    // Hide loading text
    loadText.style.display = "none";

    // Show button
    playButton.style.display = "inline-block";

    // Allow play on click
    playButton.addEventListener("click", () => {
      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      playTrack(track);
      playButton.dataset.playing = true;
    });
  });
});
```

> **メモ:** [デモの実際の動きを見る](https://mdn.github.io/webaudio-examples/multi-track/)ことや、[ソースコードを見る](https://github.com/mdn/webaudio-examples/tree/master/multi-track)ことができます。

ゲーム世界の文脈では、異なる状況で使用されるループやサンプルがあるかもしれません。よりシームレスな体験のために、他のトラックと同期させることができると便利です。

> **メモ:** この例では、次の曲を導入する前にビートが終了するのを待ちません。トラックの BPM (Beats Per Minute) がわかっていれば、このようにすることができます。

新しい曲の導入は、ビート／バー／フレーズなど、 BGM を分割したい単位で行うと、より自然に聞こえることがあります。

これを行うには、同期させたいトラックを再生する前に、次のビート／バーなどの開始までの時間を計算する必要があります。

以下は、テンポ（ビート／バーの秒単位の時間）が与えられたときに、次のパートを再生するまでの時間を計算するコードの一部です。結果の値を最初のパラメータとして `start()` 関数に渡すと、その関数は再生を開始する絶対時刻を受け取ります。2つ目の引数（新しいトラックのどこから再生を開始するか）は、関連のあるものであることに注意してください。

```js
if (offset === 0) {
  source.start();
  offset = context.currentTime;
} else {
  const relativeTime = context.currentTime - offset;
  const beats = relativeTime / tempo;
  const remainder = beats - Math.floor(beats);
  const delay = tempo - remainder * tempo;
  source.start(context.currentTime + delay, relativeTime + delay);
}
```

> **メモ:** こちらの JSFiddle で、私たちの[待ち時間計算機のコードを試す](https://jsfiddle.net/c87z11jj/2/)ことができます（今回はバーに同期しています）。

> **メモ:** 最初の引数が 0 またはコンテキスト `currentTime` よりも小さい場合、再生は直ちに開始されます。

### 場所つきの音声

場所つきの音声は、音声を没入感のあるゲーム体験の重要な一部にするための重要なテクニックになります。ウェブオーディオ API は、多くの音声ソースを三次元空間に配置できるだけでなく、その音声をよりリアルに見せるためのフィルターを適用することも可能です。

[`pannerNode`](/ja/docs/Web/API/PannerNode) はウェブオーディオ API の位置情報を利用し、ゲームの世界に関するさらなる情報をプレイヤーに関連付けることができるようになります。 `pannerNode` をより詳しく理解するための[チュートリアルがこちら](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)にあります。

以下のものに関連付けることができます。

- オブジェクトの位置関係
- オブジェクトの方向と動き
- 環境（洞窟、水中など）

これは、WebGL を使用してレンダリングされた三次元環境で特に有効で、ウェブオーディオ API を使用すると、音声をオブジェクトや視点に関連付けることが可能になります。

## 関連情報

- [ウェブオーディオ API (MDN)](/ja/docs/Web/API/Web_Audio_API)
- [`<audio>` (MDN)](/ja/docs/Web/HTML/Element/audio)
- [Developing Game Audio with the Web Audio API (HTML5Rocks)](https://www.html5rocks.com/en/tutorials/webaudio/games/)
- [Mixing Positional Audio and WebGL (HTML5Rocks)](https://www.html5rocks.com/en/tutorials/webaudio/positional_audio/)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
