---
title: 音声と動画の配信
slug: Web/Media/Guides/Audio_and_video_delivery
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

音声と動画のウェブ配信には、静的なメディアファイルから適応型ライブストリームまで、さまざま手法が存在します。この記事は、ウェブベースの多様なメディア配信の仕組みと主要ブラウザーとの互換性を探るための出発点となるものです。

## HTML の audio および video 要素

事前録音された音声ファイルであれライブストリームであれ、ブラウザーの {{ htmlelement("audio")}} および {{ htmlelement("video")}} 要素を通じて、それらを利用可能にする仕組みはほぼ同じです。現在、すべてのブラウザーに対応するには 2 つの形式を指定する必要がありますが、 Firefox や Opera での MP3 および MP4 形式の採用により、この状況は急速に変化しています。互換性情報は[ウェブ上のメディアの種類と形式のガイド](/ja/docs/Web/Media/Guides/Formats)で確認できます。

動画と音声を配信する場合、一般的なワークフローは通常、次のようになります。

1. ブラウザーの対応している形式を機能検出によって調べる（通常は前述の通り、 2 つの選択肢から選択）。
2. ブラウザーが指定された形式の再生をネイティブで対応していない場合、静止画を表示するか、代替技術を使用して動画を表示するかする。
3. メディアをどのように再生/インスタンス化するか特定する（例：{{ htmlelement("video") }}要素、あるいは `document.createElement('video')` など？）
4. メディアファイルをプレーヤーに配信する。

### HTML audio

```html
<audio controls preload="auto">
  <source src="audio-file.mp3" type="audio/mpeg" />

  <!-- MP3 に対応していないブラウザー向けの代替手段 -->
  <source src="audio-file.ogg" type="audio/ogg" />

  <!-- audio 要素に対応していないブラウザー向けの代替手段 -->
  <a href="audio-file.mp3">音声をダウンロード</a>
</audio>
```

上記のコードは、スムーズな再生のために使用可能な限り多くの音声の事前読み込みを試みようとするオーディオプレーヤーを作成します。

> [!NOTE]
> `preload`属性は、一部のモバイルブラウザーでは無視される可能性があります。

詳細については、[クロスブラウザー対応の音声の基本（HTML オーディオの詳細）](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#html_audio_in_detail)を参照してください。

### HTML video

```html
<video
  controls
  width="640"
  height="480"
  poster="initial-image.png"
  autoplay
  muted>
  <source src="video-file.mp4" type="video/mp4" />

  <!-- MP4 に対応していないブラウザー向けの代替手段 -->
  <source src="video-file.webm" type="video/webm" />

  <!-- 字幕ファイルを指定 -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- video 要素に対応していないブラウザー向けの代替手段 -->
  <a href="video-file.mp4">動画をダウンロード</a>
</video>
```

上記のコードは、 640x480 ピクセルの動画プレイヤーを生成し、動画が再生されるまでポスター画像を表示します。動画は自動再生されるように設定しますが、既定ではミュートにしておきます。

> [!NOTE]
> `autoplay`属性は一部のモバイルブラウザーで無視される場合があります。また、誤用された場合、自動再生機能は問題を引き起こす可能性があります。自動再生を適切に使用する方法については、[メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay)を必ず読むことを強く推奨します。

詳細については、 [\<video> 要素](/ja/docs/Web/HTML/Reference/Elements/video)および [クロスブラウザー対応動画プレイヤーの作成](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)を参照してください。

### JavaScript オーディオ

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audio-file.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audio-file.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

ブラウザーが対応している音声ファイルの型に応じて音声のソースを指定し、再生開始位置を5秒後に設定して再生を試みます。

> [!NOTE]
> ほとんどのブラウザーでは、ユーザーが開始したイベントによって発行されない限り、再生は無視されます。

また、 {{ htmlelement("audio") }} 要素に base64 エンコードされた WAV ファイルを渡すことで、その場で音声の生成を行うことができます。

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) はこの手法を用いて実装されています。

### JavaScript 動画

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "video-file.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "video-file.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

ブラウザーが対応する動画ファイルの型に応じて動画のソースを指定し、それから動画の幅と高さを設定します。

## ウェブオーディオ API

この例では、 {{domxref("Window/fetch", "fetch()")}} API を使用して MP3 ファイルを取得し、ソースに読み込んで再生します。

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // 音声ファイルを読み込む
    const response = await fetch("viper.mp3");
    // デコード
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`音声ファイルを読み取れませんでした。エラー: ${err.message}`);
  }
}

const play = document.getElementById("play");
play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
  play.disabled = true;
});
```

[完全なサンプルをライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/)するか、[ソースを閲覧](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise)することができます。

ウェブオーディオ API の基本については、[ウェブオーディオ API の使用]で詳しく知ることができます。

## getUserMedia / ストリーム API

`getUserMedia`およびストリーム APIを使用して、ウェブカメラやマイクからのライブストリームを取得することもできます。これは WebRTC (Web Real-Time Communications) と呼ばれる広範な技術の一部を構成し、Chrome、Firefox、Operaの最新バージョンと互換性があります。

ウェブカメラからのストリームを取得するには、まず {{htmlelement("video")}} 要素を設定します。

```html
<video id="webcam" width="480" height="360"></video>
```

次に、対応していればウェブカメラのソースを video 要素に接続します。

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(() => {
      alert(
        "ストリームの取得に問題があります。 file:/// で動作しているか、アクセス を禁止してはいませんか？",
      );
    });
} else {
  alert("このブラウザーは getUserMedia に未対応です。");
}
```

詳しくは、 {{domxref("MediaDevices.getUserMedia")}} ページを読んでください。

## MediaStream の収録

新しい標準が展開され、ブラウザーが`getUserMedia`を使用してマイクやカメラからメディアを取得し、新しい MediaStream 収録 API で即座に記録できるようになります。 `getUserMedia` から受け取ったストリームを `MediaRecorder` オブジェクトに渡して、結果の出力を音声と映像のソースに供給します。

主要なメカニズムは次のような概要です。

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    const recorder = new MediaRecorder(stream);

    const data = [];
    recorder.ondataavailable = (e) => {
      data.push(e.data);
    };
    recorder.start();
    recorder.onerror = (e) => {
      throw e.error || new Error(e.name); // e.name is FF non-spec
    };
    recorder.onstop = (e) => {
      const audio = document.createElement("audio");
      audio.src = window.URL.createObjectURL(new Blob(data));
    };
    setTimeout(() => {
      rec.stop();
    }, 5000);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

詳しくは [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) を参照してください。

## Media Source 拡張 (MSE)

[メディアソース拡張](https://w3c.github.io/media-source/)は、 {{domxref("HTMLMediaElement")}} を拡張し、 JavaScript による再生用メディアストリームの生成を可能とする W3C 草案です。 JavaScript によるストリーム生成の許可は、適応型ストリーミングやライブストリームのタイムシフトなど、様々な用途を実現します。

### Encrypted Media 拡張 (EME)

[暗号化メディア拡張](https://w3c.github.io/encrypted-media/)は、保護されたコンテンツの再生を制御する API を指定された形で提供する `HTMLMediaElement` を拡張する W3C の提案です。

APIは、基本的なクリアキー復号から高価値動画（適切なユーザーエージェント実装を指定された場合）に至るまでの利用状況に幅広く対応します。ライセンス／キー交換はアプリケーション側で制御されるため、多様なコンテンツ復号・保護技術に対応する堅牢な再生アプリケーションの開発が容易になります。

EME の主な用途の一つは、ブラウザーが DRM （[デジタル著作権管理](https://ja.wikipedia.org/wiki/デジタル著作権管理)）を実装できるようにすることであり、これによりウェブベースのコンテンツ（特に動画）のコピーを防ぐのに役立ちます。

### 適応型ストリーミング

適応型ストリーミングを促進するため、新たな形式とプロトコルが展開されています。適応型ストリーミングメディアとは、ユーザーの利用できる帯域幅に応じて、帯域幅および通常はストリームの品質がリアルタイムで変化するというものです。適応型ストリーミングは、音声や動画のスムーズな配信が最優先されるライブストリーミングと組み合わせてよく使用されています。

適応型ストリーミングで主に使用される形式は [HLS](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) と [MPEG-DASH](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash) です。 MSE は DASH を念頭に設計されています。 MSE は [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) および [M2TS](https://en.wikipedia.org/wiki/M2ts) （いずれも DASH で対応しており、後者は HLS でもサポート）に基づいてバイトストリームを定義します。一般的に、標準規格に関心がある場合、柔軟性を求める場合、または現行のブラウザーの大半に対応したい場合には、 DASH の方が適しているでしょう。

> [!NOTE]
> 現在、Safari は DASH を対応していませんが、 dash.js は OS X Yosemite とともにリリース予定の新しいバージョンの Safari では作業します。

DASH はまた、メディアファイルの前処理や分割が要求されないオンデマンドプロファイルが含まる複数のプロファイルを指定された形で提供します。さらに、メディアを HLS と DASH の両方に変換するクラウドベースのサービスも複数あります。

詳しい情報は、[ウェブの音声や動画のライブストリーミング](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)を参照してくだ足。

## メディアプレイヤーのカスタマイズ

音声や動画プレイヤーの外観をブラウザー間で統一したい場合や、サイトに合わせて微調整したい場合があるでしょう。これを実現する一般的な手法は、 `controls` 属性を省略して既定のブラウザーコントロールを表示させず、 HTML と CSS で独自のコントロールを作成し、 JavaScript でそのコントロールをオーディオ/動画 API にリンクさせることです。

追加機能が必要な場合、再生速度調整、画質切り替え、音声スペクトラム表示など、既定のプレイヤーに存在しない機能を追加できます。プレイヤーのレスポンシブ対応方法も選択可能で、例えば特定の条件下ではプログレスバーを非表示にすることもできます。

クリック、タッチ、キーボードイベントを検知し、再生・一時停止・スクラブ措置をトリガーできます。ユーザー利便性とアクセシビリティのため、キーボード操作を実装することは多い。

例えば — 最初のステップとして、 HTML で音声と独自のコントロールを設定します。

```html
<audio id="my-audio" src="/shared-assets/audio/guitar.mp3"></audio>
<button id="my-control">play</button>
```

音声の再生と一時停止を検出するイベントを検知する JavaScript を少し追加します。

```js
const myAudio = document.getElementById("my-audio");
const myControl = document.getElementById("my-control");

function switchState() {
  if (myAudio.paused) {
    myAudio.play();
    myControl.textContent = "pause";
  } else {
    myAudio.pause();
    myControl.textContent = "play";
  }
}

function checkKey(e) {
  if (e.code === "Space") {
    // space bar
    switchState();
  }
}

myControl.addEventListener(
  "click",
  () => {
    switchState();
  },
  false,
);

window.addEventListener("keypress", checkKey, false);
```

{{EmbedLiveSample("customizing your media player", "", 200)}}

詳しくは、 [Creating your own custom audio player](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player) を参照してください。

## 音声と動画に関するその他のヒント

### メディアのダウンロードの停止

メディアの再生を停止するには、要素の `pause()` メソッドを呼び出すだけで十分ですが、ブラウザーはメディア要素がガベージコレクションによって破棄されるまでメディアのダウンロードを継続します。

ダウンロードするのを即座に止める方法はこちらです。

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

メディア要素の `src` 属性を削除し、 `load()` メソッドを呼び出すことで、動画に関連付けられたリソースを解放し、ネットワークからのダウンロードを停止します。属性を削除した後、 `load()` を呼び出す必要があるのは、 `src` 属性を削除するだけではロードアルゴリズムが起動しないためです。もし `<video>` 要素が `<source>` 要素の子要素を保有している場合、それらも `load()` を呼び出す前に除去される必要があります。

`src` 属性を空文字列に設定するだけでは、実際にはブラウザーが動画ソースを相対パスに設定しているかのように動作することに気を付けてください。これにより、ブラウザーは有効な動画であるとは考えにくいものに対して別のダウンロードする試行を行います。

### メディア内のシーク

メディア要素は、現在の再生位置をメディアコンテンツ内の特定のこの点に移動する機能を提供します。これは要素の`currentTime`プロパティの値を設定することで実現されます。要素のプロパティに関する詳細は {{ domxref("HTMLMediaElement") }} を参照してください。値には、再生を続ける時点の2つ目の点（2つ目）の秒単位の時間（秒）を設定します。

要素の `seekable` プロパティを使用すると、現在シーク可能なメディアの範囲を判別できます。これにより、シーク可能な時間範囲を含む {{ domxref("TimeRanges") }} オブジェクトが返されます。

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // Returns the starting time (in seconds)
mediaElement.seekable.end(0); // Returns the ending time (in seconds)
mediaElement.currentTime = 122; // Seek to 122 seconds
mediaElement.played.end(0); // Returns the number of seconds the browser has played
```

### 再生範囲の指定

{{ HTMLElement("audio") }} または {{ HTMLElement("video") }} 要素のメディア URI を指定する際、再生するメディアの箇所を指定するための追加情報をオプションで記載することができます。これを行うには、ハッシュ記号 ("#") に続けてメディアのフラグメント記述を付加します。

時間の範囲は次の構文で指定します。

```plain
#t=[starttime][,endtime]
```

時間は秒数（浮動小数点値として）またはコロンで区切られた時間（時間/分/秒）で指定することができます（例： 2 時間 5 分 1 秒の場合は 2:05:01）。

いくつか例を示します。

- `http://example.com/video.ogv#t=10,20`
  - : 動画を 10 秒から 20 秒の範囲で再生することを指定します。
- `http://example.com/video.ogv#t=,10.5`
  - : 動画を先頭から 10.5 秒まで再生することを指定します。
- `http://example.com/video.ogv#t=,02:00:00`
  - : 動画を先頭から 2 時間まで再生することを指定します。
- `http://example.com/video.ogv#t=60`
  - : 動画を 60 秒から再生を始めて、動画の最後まで再生することを指定します。

## エラー処理

エラーは、エラーの原因となったソースに相当する子要素 {{ HTMLElement("source") }} に配信されます。

これにより、読み込むのに失敗したソースを検出できます。これは有益なことかもしれません。次の HTML を考えてみましょう。

```html
<video>
  <source
    id="mp4_src"
    src="video.mp4"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source
    id="3gp_src"
    src="video.3gp"
    type='video/3gpp; codecs="mp4v.20.8, samr"' />
  <source
    id="ogg_src"
    src="video.ogv"
    type='video/ogv; codecs="theora, vorbis"' />
</video>
```

Firefox は特許問題のため、一部のプラットフォームで MP4 と 3GP に対応していません。そのため、 ID が "mp4_src" および "3gp_src" の {{ HTMLElement("source") }} 要素は、 Oggリソースが読み込まれる前に `error` イベントを受け取ります。ソースは出現順に試行され、いずれかが正常に読み込まれた後は、残りのソースはまったく試行されません。

### ブラウザーが指定された形式に対応しているか調べる

メディア形式の対応状況は [Can I Use](https://caniuse.com/) で利用できます。

- [Audio MP3 (`type="audio/mpeg"`)](https://caniuse.com/mp3)
- [Audio Ogg (`type="audio/ogg"`)](https://caniuse.com/ogg-vorbis)
- [Video MP4 (`type="video/mp4"`)](https://caniuse.com/mpeg4)
- [Video WebM (`type="video/webm"`)](https://caniuse.com/webm)
- [Video Ogg (`type="video/ogg"`)](https://caniuse.com/ogv)

[他のメディア形式](/ja/docs/Web/Media/Guides/Formats/Containers)を探すこともできます。

メディア形式が対応 していても、提供したファイルが再生されない場合、以下の 2 つの課題があります。

#### 1. メディアサーバーがファイルに正しい MIME タイプをつけて配信していません

これは通常は対応していますが、メディアサーバーの `.htaccess` ファイルに以下を追加する必要がある場合があります。

```plain
# AddType TYPE/SUBTYPE EXTENSION

AddType audio/mpeg mp3
AddType audio/mp4 m4a
AddType audio/ogg ogg
AddType audio/ogg oga

AddType video/mp4 mp4
AddType video/mp4 m4v
AddType video/ogg ogv
AddType video/webm webm
AddType video/webm webmv
```

#### 2. ファイルが適切にエンコードされていない

ファイルが適切にエンコードされていない可能性があります。以下のツールのいずれかをエンコード方式として使用するよう試してみてください。これらは非常に信頼性が高いと証明されています：

- [Audacity](https://sourceforge.net/projects/audacity/) — Free Audio Editor and Recorder
- [Miro](https://www.getmiro.com/) — 無料のオープンソースの音楽・動画プレーヤー
- [Handbrake](https://handbrake.fr/) — オープンソース動画トランスコーダー
- [Firefogg](https://www.firefogg.org/) — Firefox 向け動画・音声エンコード方式
- [FFmpeg2](https://www.ffmpeg.org/) — 多機能コマンド行エンコーダー
- [Vid.ly](https://m.vid.ly/) — 動画プレーヤー、トランスコーディングおよび配信
- [Internet Archive](https://archive.org/) — 無料のトランスコーディングとストレージ

### ソースが読み込まれていない状態の検出

すべての子要素 {{ HTMLElement("source") }} の読み込みが失敗したことを検出するには、メディア要素の `networkState` のこの属性の値を確認します。これが `HTMLMediaElement.NETWORK_NO_SOURCE` の場合、すべてのソースの読み込みが失敗したことを示します。

その時点で別のソースを追加する場合、メディア要素の子要素として新しい{{ HTMLElement("source") }}要素を挿入すると、 Geckoは 指定されたリソースの読み込みを試みます。

### デコードすることができるソースが存在しない場合に代替コンテンツを表示させる

現在のブラウザーでどのソースもデコードすることができなかった場合に動画の代替コンテンツを示す別の方法は、最後のソース要素にエラーハンドラーを追加することです。そうすれば動画を代替コンテンツに置き換えることができます。

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4" />
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS" />
  </a>
  <p>Click image to play a video demo of dynamic app search</p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastSource = sources[sources.length - 1];
lastSource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## 音声/動画 JavaScript ライブラリー

数多くの音声と動画の JavaScript ライブラリーが存在します。最も人気のあるライブラリーでは、すべてのブラウザで一貫したプレイヤーデザインが選べて、音声や動画をネイティブで対応してなくても、代替手段を指定されたブラウザ向けに提供する機能があります。
フォールバックでは過去には、 Adobe Flash や Microsoft Silverlight プラグインなど現在では廃止されたプラグインを用いて、非対応ブラウザー向けにメディアプレイヤーを提供してきましたが、これらは現行のコンピューターは対応していません。字幕用の [`<track>`](/ja/docs/Web/HTML/Reference/Elements/track) 要素などの機能も、メディアライブラリーを通じて提供可能です。

### 音声のみ

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### 動画のみ

- [flowplayer](https://flowplayer.com/): Gratis with a flowplayer logo watermark. Open source (GPL licensed.)
- [JWPlayer](https://jwpconnatix.com/): Requires registration to download. Open Source Edition (Creative Commons License.)
- [SublimeVideo](https://www.sublimevideo.net/): Requires registration. Form based set up with domain specific link to CDN hosted library.
- [Video.js](https://videojs.com/): Gratis and Open Source (Apache 2 Licensed.)

### 音声と動画

- [jPlayer](https://jPlayer.org/): Gratis and Open Source (MIT Licensed.)
- [mediaelement.js](https://www.mediaelementjs.com/): Gratis and Open Source (MIT Licensed.)

### ウェブオーディオ API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): 古いバージョンのウェブオーディオ API 向けのポリフィル。オープンソース（Apache 2.0 ライセンス）

## ガイド

- [クロスブラウザーの動画プレイヤーの作成](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
  - : {{ htmlelement("video") }} 要素を使用して、基本的なクロスブラウザー動画プレイヤーを作成するガイドです。
- [動画プレイヤーのスタイル設定の基本](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
  - : 前回の記事でクロスブラウザー対応の動画プレイヤーができたので、この記事はプレイヤーの基本的なレスポンシブスタイル設定を指定していきます。
- [クロスブラウザーの音声の基本](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : この記事では、クロスブラウザーで動作する HTML 音声プレーヤーの作成に関する基本ガイドが指定されています。関連付けられたすべての属性、プロパティ、イベントについて説明し、メディア API を使用して生成する独自のコントロールに関するクイックガイドも紹介します。
- [メディアのバッファリング、シーク、再生範囲](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : {{ htmlelement("audio") }} や {{ htmlelement("video") }} がどれだけダウンロード済みか、あるいは遅延なく再生可能かを把握することが役立つ場合があります。この良い例が、オーディオや動画プレーヤーのバッファー進捗バーです。この記事は、 [TimeRanges](/ja/docs/Web/API/TimeRanges) やメディア API のそれ以外にも機能を使用して、バッファー/シークバーを構築する方法について解説しています。
- [HTML の playbackRate の解説](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : `playbackRate` プロパティを使用すると、ウェブオーディオやウェブ動画の再生速度を変更できます。この記事はその詳細を説明します。
- [ウェブオーディオ API の使い方](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : ウェブオーディオAPIを使用して、音声ソースを取得、操作、再生する基本を説明します。

### ストリーミングメディア

- [ウェブの音声や動画のライブストリーミング](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : ライブストリーミング技術は、よくスポーツやコンサートなどのイベントの中継や、もっと一般的にはテレビやラジオの番組の配信などによく採用されています。よくストリーミングと略されるライブストリーミングは、コンピューターや機器へメディアを「ライブ」で転送するプロセスです。これは実に複雑で数多くの変量がある初期段階の主題ですので、この記事では主題を紹介し、どのように始めることができるかを説明します。
- [適応型ストリーミングメディアソースの設定](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : サーバー上で適応型ストリーミングメディアソースを設定し、 HTML のメディア要素内で利用できるようにしたい場合、どのように実現すればよいでしょうか？この記事では、最も一般的な 2 つの書式化である MPEG-DASH と HLS（HTTP ライブストリーミング）を例に、その方法を解説します。
- [HTML 5 動画用の DASH アダプティブストリーミング](/ja/docs/Web/API/Media_Source_Extensions_API/DASH_Adaptive_Streaming)
  - : DASH および WebM を使用した適応型ストリーミングの設定方法を詳細に説明します。

### 高度なトピック

- [HTML の動画へのキャプションと字幕の追加](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : この記事は、[Web_Video_Text_Tracks_Format](/ja/docs/Web/API/WebVTT_API) と {{ htmlelement("track") }} 要素を使用して、HTML の {{ htmlelement("video") }} にキャプションと字幕を追加する方法を説明します。
- [ウェブオーディオ API のクロスブラウザー対応](/ja/docs/Web/API/Web_Audio_API/Best_practices#cross_browser_legacy_support)
  - : クロスブラウザー対応のウェブオーディオ API コード作成ガイド
- [Easy audio capture with the MediaRecorder API](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : MediaStream 収録 API がメディアストリームを直接記録するために使用されている基本を説明します。

## リファレンス

- [video 要素](/ja/docs/Web/HTML/Reference/Elements/video)
- [HTMLVideoElement API](/ja/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/ja/docs/Web/API/MediaSource)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/ja/docs/Web/API/MediaDevices/getUserMedia)
- [イベント索引: メディア](/ja/docs/Web/API/Document_Object_Model/Events#メディア)
