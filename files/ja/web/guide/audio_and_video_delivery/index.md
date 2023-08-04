---
title: 音声と動画の配信
slug: Web/Guide/Audio_and_video_delivery
l10n:
  sourceCommit: 4b4bb8dea94f7264a841e0eecb0dcc919236459d
---

静的な」メディアファイルからアダプティブなライブストリームまで、さまざまな方法で音声と動画をウェブ上に配信することができます。この記事は、ウェブベースのメディアの様々な配信メカニズムや、一般的なブラウザーへの互換性を探るための出発点として意図されています。

## audio および video 要素

録音された音声ファイルを扱う場合でも、ライブストリームを扱う場合でも、ブラウザーの {{ htmlelement("audio")}} と {{ htmlelement("video")}} 要素を通じてそれらを利用できるようにする仕組みはほとんど変わりません。現在、すべてのブラウザーで対応するには、 2 つの形式を指定する必要がありますが、 MP3 と MP4 の形式が Firefox と Opera で採用されたため、この状況は急速に変化しています。互換性に関する情報は、[ウェブ上のメディアタイプと形式のガイド](/ja/docs/Web/Media/Formats)で探すことができます。

動画と音声を配信する場合、一般的なワークフローは通常次のようなものです。

1. ブラウザーの機能検出で対応している形式を調べる（通常は上記のように 2 つから選択することになります）。
2. ブラウザーが指定された形式の再生にネイティブに対応していない場合は、静止画を表示するか、動画を表示するための代替技術を使用します。
3. どのようにメディアを再生/インスタンス化するかを確認します（例えば {{ htmlelement("video") }} 要素か `document.createElement('video')` か）。
4. メディアファイルをプレイヤーに配信する。

### HTML の音声

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg" />

  <!-- mp3 に対応していないブラウザーのための代替 -->
  <source src="audiofile.ogg" type="audio/ogg" />

  <!-- audio タグに対応していないブラウザーのための代替 -->
  <a href="audiofile.mp3">音声をダウンロード</a>
</audio>
```

上記のコードでは、スムーズな再生のために、できるだけ多くの音声を先読みさせようとする音声プレイヤーを作成しています。

> **メモ:** モバイルブラウザーによっては、 `preload` 属性が無視される場合があります。

詳しい情報は、[クロスブラウザーの音声の基本（HTML Audio の詳細）](/ja/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics#html5_audio_in_detail)

### HTML の動画

```html
<video
  controls
  width="640"
  height="480"
  poster="initialimage.png"
  autoplay
  muted>
  <source src="videofile.mp4" type="video/mp4" />

  <!-- mp4 に対応していないブラウザーのための代替 -->
  <source src="videofile.webm" type="video/webm" />

  <!-- 字幕ファイルを指定 -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track
    src="subtitles_no.vtt"
    kind="subtitles"
    srclang="no"
    label="Norwegian" />

  <!-- video タグに対応していないブラウザーのための代替 -->
  <a href="videofile.mp4">download video</a>
</video>
```

上記のコードでは、寸法が 640x480 ピクセルの動画プレイヤーを作成し、動画が再生されるまではポスター画像を表示しています。動画は自動再生されますが、既定ではミュートされるように指示しています。

> **メモ:** `autoplay` 属性は、一部のモバイルブラウザーで無視される場合があります。また、自動再生機能は、使い方を誤ると物議をかもす可能性があります。自動再生の賢い使用方法を知るために、[メディアとウェブ音声 API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)を読むことを強くお勧めします。

詳しい情報は [\<video> 要素](/ja/docs/Web/HTML/Element/video)と[クロスブラウザーの動画プレイヤーの作成](/ja/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)を参照してください。

### JavaScript の音声

```js
const myAudio = document.createElement("audio");

if (myAudio.canPlayType("audio/mpeg")) {
  myAudio.setAttribute("src", "audiofile.mp3");
} else if (myAudio.canPlayType("audio/ogg")) {
  myAudio.setAttribute("src", "audiofile.ogg");
}

myAudio.currentTime = 5;
myAudio.play();
```

ブラウザーで対応している音声ファイルの種類に応じて音声のソースを設定し、 5 秒後に再生ヘッドを設定して再生を試みます。

> **メモ:** 再生は、ユーザー主導のイベントによって発行されない限り、ほとんどのブラウザーで無視されます。

また、 {{ htmlelement("audio") }} 要素に base64 エンコードされた WAV ファイルを与えて、その場で音声を生成することも可能です。

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC…"></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) はこのテクニックを採用しています。[デモを試してみてください](https://speak-demo.herokuapp.com)。

### JavaScript の動画

```js
const myVideo = document.createElement("video");

if (myVideo.canPlayType("video/mp4")) {
  myVideo.setAttribute("src", "videofile.mp4");
} else if (myVideo.canPlayType("video/webm")) {
  myVideo.setAttribute("src", "videofile.webm");
}

myVideo.width = 480;
myVideo.height = 320;
```

ブラウザーの対応している動画ファイルの種類に応じて動画のソースを設定し、動画の幅と高さを設定します。

## ウェブオーディオ API

```js
let context;
let request;
let source;

try {
  context = new AudioContext();
  request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3",
    true,
  );
  request.responseType = "arraybuffer";

  request.onload = () => {
    context.decodeAudioData(request.response, (buffer) => {
      source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      // autoplay
      source.start(0); // start was previously noteOn
    });
  };

  request.send();
} catch (e) {
  alert("web audio api not supported");
}
```

この例では、 XHR 経由で MP3 ファイルを取得し、それをソースに読み込んで再生しています（[自分で試してみてください](https://jsbin.com/facutone/1/edit?js)）。ウェブオーディオ API の基本的なことについては、[ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)を参照してください。

## getUserMedia / ストリーム API

また、`getUserMedia` とストリーム API を使用して、ウェブカメラやマイクからライブストリームを取得することも可能です。これは WebRTC (Web Real-Time Communications) として知られる幅広い技術の一部であり、Chrome、Firefox、Opera の最新バージョンと互換性があります。

ウェブカメラからストリームを取得するには、まず {{htmlelement("video")}} 要素を設定します。

```html
<video id="webcam" width="480" height="360"></video>
```

次に、対応している場合は、ウェブカメラのソースを動画要素に接続します。

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function onSuccess(stream) {
      const video = document.getElementById("webcam");
      video.autoplay = true;
      video.srcObject = stream;
    })
    .catch(function onError() {
      alert(
        "There has been a problem retrieving the streams - are you running on file:/// or did you disallow access?",
      );
    });
} else {
  alert("getUserMedia is not supported in this browser.");
}
```

詳しくは、 {{domxref("MediaDevices.getUserMedia")}} のページを参照してください。

## メディアストリームの収録

ブラウザーが `getUserMedia` を使用してマイクやカメラからメディアを取得し、新しいメディアレコーダー API を使用して即座に記録できるようにするための新しい標準が展開されています。 `getUserMedia` から受け取ったストリームを `MediaRecorder` オブジェクトに渡して、結果の出力を受け取り、音声や動画のソースに渡します。

主な仕組みは下記の通りです。

```js
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function onSuccess(stream) {
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
  .catch(function onError(error) {
    console.log(error.message);
  });
```

詳しくは[メディアレコーダー API](/ja/docs/Web/API/MediaStream_Recording_API)を参照してください。

## メディアソース拡張 (MSE)

[メディアソース](https://w3c.github.io/media-source/) は W3C の作業草案で、{{domxref("HTMLMediaElement")}} を拡張して JavaScript が再生用のメディアストリームを生成できるようにすることを計画しています。JavaScript でストリームを生成できるようにすることで、アダプティブストリーミングや時刻をずらしたライブストリームなど、様々な使用用途が容易になります。

### 暗号化メディア拡張 (EME)

[暗号化メディア拡張](https://w3c.github.io/encrypted-media/)は W3C による提案で、 `HTMLMediaElement` を拡張し、保護されたコンテンツの再生を制御するための API を提供するものです。

この API は、単純なクリアキーの復号から、（適切なユーザーエージェントが実装されたために）高価値の動画まで、使用用途に対応しています。ライセンスとキーの交換はアプリケーションによって制御されるため、さまざまなコンテンツの復号化および保護技術に対応した堅牢な再生アプリケーションを開発することが容易になります。

EME の主な使用方法の一つは、ブラウザーに DRM ([Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management)) を実装することです。 DRM は、ウェブ上のコンテンツ（特に動画）のコピーを防止するために役立ちます。

### アダプティブストリーム

アダプティブストリーミングを促進するために、新しい書式化とプロトコルが展開されています。アダプティブストリーミングメディアとは、ユーザーが利用できる帯域幅に反応して、ストリームの帯域幅と一般的な品質をリアルタイムで変更できることを意味しています。アダプティブストリーミングは、音声や動画のスムーズな配信が最も重要であるライブストリーミングと組み合わせて使用されることが多い。

アダプティブストリーミングに使用される主な形式は、 [HLS](/ja/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) と [MPEG-DASH](/ja/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash) です。 MSE は DASH を保有することを念頭に置いて設計されています。 MSE は [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) と [M2TS](https://en.wikipedia.org/wiki/M2ts) に従ってバイトストリームを定義します（DASH はどちらにも対応しており、 HLS は後者に対応しています）。一般的に言って、標準規格に関心があり、柔軟性を求めている場合、あるいはほとんどの現代のブラウザーに対応したい場合は、DASH を使用した方がよいかもしれません。

> **メモ:** 現在、Safari は DASH に対応していませんが、OSX Yosemite でリリースされる予定の新しいバージョンの Safari では dash.js が動作する予定です。

DASH も、メディアファイルの前処理や分割が不要な単純なオンデマンドプロファイルを含む、多くのプロファイルを提供しています。また、メディアを HLS と DASH の両方に変換してくれるクラウドベースのサービスも数多くあります。

詳しい情報は、[ウェブ音声と映像のライブストリーミング](/ja/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video)を参照してください。

## メディアプレイヤーのカスタマイズ

音声と動画のプレイヤーをブラウザー間で一貫した外見にしたいと考えたり、サイトに一致するように微調整したいと思ったりすることがあるかもしれません。これを実現する一般的な方法は、`controls` 属性を省略して既定のブラウザーコントロールを表示しないようにし、HTML と CSS を使用してカスタムコントロールを作成し、JavaScript でコントロールを音声/動画 API にリンクさせることです。

もし何か追加する必要があれば、再生速度、品質ストリームスイッチ、あるいは音声スペクトルなど、既定のプレイヤーには現在存在しない機能を追加することが可能です。たとえば、特定の条件下でプログレス バーを削除することもできます。

クリック、タッチ、およびキーボード イベントを検出し、再生、一時停止、スクラブなどのアクションを発生させることができます。ユーザーの利便性とアクセシビリティのために、キーボード制御を覚えておくことは、多くの場合、重要なことです。

簡単な例です。まず、 HTML で音声とカスタムコントロールを設定します。

```html
<audio
  id="my-audio"
  src="http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

音声を再生・一時停止するイベントを検出する JavaScript を少し追加します。

```js
window.onload = () => {
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
    if (e.keycode === 32) {
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
};
```

[この例をここで試してみる](https://jsbin.com/jujeladu/2/edit)ことができます。より詳しい情報は、[自分自身でカスタム音声プレイヤーを作成する](/ja/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player)をご覧下さい。

## 音声/動画のその他の豆知識

### メディアのダウンロードの中止

メディアの再生を止めるのは要素の `pause()` メソッドを呼び出すだけと簡単ですが、ブラウザーはメディア要素がガベージコレクションによって廃棄されるまで、メディアをダウンロードし続けます。

ここでは、ダウンロードを一度に中止させるトリックを紹介します。

```js
const mediaElement = document.querySelector("#myMediaElementID");
mediaElement.removeAttribute("src");
mediaElement.load();
```

メディア要素の `src` 属性を削除して load() メソッドを呼び出すと、動画に関連付けられたリソースが解放され、ネットワークからのダウンロードが中止されます。 `src` 属性を削除しただけでは load アルゴリズムを呼び出さないため、属性を削除した後に `load()` を呼び出す必要があります。もし `<video>` 要素が `<source>` 要素の子孫も保有している場合は、 `load()` を呼び出す前にそれらも削除する必要があります。

`src` 属性に空文字列を設定するだけでは、実際にはブラウザーが動画のソースを相対パスで設定しているかのように扱うことに注意してください。これにより、ブラウザーは有効な動画である可能性が低いものを、再度ダウンロードしようとします。

### メディアのシーク

メディア要素は、現在の再生位置をメディアのコンテンツにおける特定の位置に移動するためのサポートを提供します。これは、要素の `currentTime` プロパティの値を設定することで行います。要素のプロパティの詳細については、{{ domxref("HTMLMediaElement") }} を参照してください。この値には、再生を継続させたい時刻を秒単位で設定します。

要素の `seekable` プロパティを使用して、現在シークするために使用できるメディアの範囲を決定することができます。これは、シーク可能な時刻の範囲をリストアップした {{ domxref("TimeRanges") }} オブジェクトを返します。

```js
const mediaElement = document.querySelector("#mediaElementID");
mediaElement.seekable.start(0); // 開始時刻を返す（秒単位）
mediaElement.seekable.end(0); // 終了時刻を返す（秒単位）
mediaElement.currentTime = 122; // 122 秒目へシーク
mediaElement.played.end(0); // ブラウザーが再生した秒数を返す
```

### 再生範囲の指定

{{ HTMLElement("audio") }} または {{ HTMLElement("video") }} 要素に対してメディアの URI を指定するとき、オプションとして、再生するメディアの部分を指定するための追加情報を記述することができます。これを行うには、ハッシュマーク ("#") に続いてメディアフラグメントの記述を追加します。

時刻の範囲は、構文を使用して指定します。

```
#t=[starttime][,endtime]
```

時刻は、秒数（浮動小数点数）、またはコロンで区切られた時・分・秒数（2 時 5 分 1 秒なら 2:05:01 など）で指定します。

いくつか例を挙げます。

- `http://example.com/video.ogv#t=10,20`
  - : 動画を 10 秒目から 20 秒目の範囲で再生することを指定します。
- `http://example.com/video.ogv#t=,10.5`
  - : 動画を先頭から 10.5 秒目まで再生することを指定します。
- `http://example.com/video.ogv#t=,02:00:00`
  - : 動画を先頭から2時間分を再生することを指定します。
- `http://example.com/video.ogv#t=60`
  - : 動画の再生を 60 秒目から始めて、動画の終わりまで再生することを指定します。

## エラー処理

エラーは、エラーが発生したソースに対応する子要素 {{ HTMLElement("source") }} に配信されます。

これによって、どのソースが読み込まれなかったかを検出することができ、有益な場合があります。次のような HTML を考えてみましょう。

```html
<video>
<source id="mp4_src"
  src="video.mp4"
  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</source>
<source id="3gp_src"
  src="video.3gp"
  type='video/3gpp; codecs="mp4v.20.8, samr"'>
</source>
<source id="ogg_src"
  src="video.ogv"
  type='video/ogv; codecs="theora, vorbis"'>
</source>
</video>
```

Firefox は特許の関係で一部のプラットフォームでは MP4 と 3GP に対応していないため、 {{ HTMLElement("source") }} 要素で ID が "mp4_src" と "3gp_src" のものは、 Ogg リソースを読み込む前にエラーイベントを受信します。ソースは現れた順に読み込まれ、一度読み込みに成功すると、残りのソースはすべて試されません。

### ブラウザーが提供された形式に対応しているかどうかのチェック

以下の検証済みのソースを audo および video 要素内で使用して、対応を調べてください。

- Audio MP3 (`type="audio/mpeg"`): [http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3](https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3) ([MP3 音声をライブで再生](https://jsbin.com/gekatoge/1/edit))
- Audio MP4 (`type="audio/mp4"`): [http://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a](https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a) ([MP4 音声をライブで再生](https://jsbin.com/gekatoge/2/edit))
- Audio Ogg (`type="audio/ogg"`): [http://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg](https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg) ([OGG 音声をライブで再生](https://jsbin.com/gekatoge/4/edit))
- Video MP4 (`type="video/mp4"`): [http://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v](https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v) ([MP4 動画をライブで再生](https://jsbin.com/gekatoge/5/edit))
- Video WebM (`type="video/webm"`): [http://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm](https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm) ([WebM 動画をライブで再生](https://jsbin.com/gekatoge/6/edit))
- Video Ogg (`type="video/ogg"`): [http://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv](https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv) ([OGG 動画をライブで再生](https://jsbin.com/gekatoge/7/edit))

これらが再生されない場合、テストしているブラウザーが指定された形式に対応していないことになります。異なる形式を使用するか、代替手段を使用することを検討してください。

これがうまく動作するのに、提供しているファイルが動作しない場合、 2 つの可能性があります。

#### 1. メディアサーバーが、ファイルと共に正しい MIME 型を配信していない

通常これは対応していますが、メディアサーバーの `.htaccess` ファイルに以下のように追加する必要があるかもしれません。

```
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

#### 2. ファイルが正しくエンコードされていない

ファイルが正しくエンコードされていない可能性があります。以下のツールのいずれかを使用してエンコードしてみてください。これらのツールは、かなり有益であることが証明されています。

- [Audacity](https://sourceforge.net/projects/audacity/) — 無料音声エディター・レコーダー
- [Miro](https://www.getmiro.com/) — 無料、オープンソースの音楽・動画プレイヤー
- [Handbrake](https://handbrake.fr/) — オープンソースの動画変換
- [Firefogg](http://www.firefogg.org/) — Firefox 用動画と音声のエンコーディング
- [FFmpeg2](https://www.ffmpeg.org/) — 包括的なコマンドラインエンコーダー
- [Libav](https://libav.org/) — 包括的なコマンドラインエンコーダー
- [Vid.ly](https://m.vid.ly/) — 動画再生、変換、配信
- [Internet Archive](https://archive.org/) — 無料の変換とストレージ

### 読み込めたソースがない場合の検出

すべての子要素　{{ HTMLElement("source") }}　の読み込みに失敗したことを検出するには、メディア要素の `networkState` 属性の値を調べてください。これが `HTMLMediaElement.NETWORK_NO_SOURCE` であれば、すべてのソースの読み込みに失敗したことが分かります。

この時点で別のソースを追加する場合、メディア要素の子として新しい {{ HTMLElement("source") }} 要素を挿入すると、 Gecko は指定したリソースの読み込みを試みます。

### デコードしたソースがない場合、フォールバックコンテンツを表示する機能

現在のブラウザーでどのソースもデコードできなかった場合、動画の代替コンテンツを示すもう 1 つの方法は、最後の source 要素にエラーハンドラーを追加することです。そうすれば、動画を代替コンテンツに置き換えることができます。

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Dynamic app search in Firefox OS">
  </a>
  <p>Click image to play a video demo of dynamic app search</p>
</video>
```

```js
const v = document.querySelector("video");
const sources = v.querySelectorAll("source");
const lastsource = sources[sources.length - 1];
lastsource.addEventListener(
  "error",
  (ev) => {
    const d = document.createElement("div");
    d.innerHTML = v.innerHTML;
    v.parentNode.replaceChild(d, v);
  },
  false,
);
```

## 音声と動画の JavaScript ライブラリー

音声と動画の JavaScript ライブラリーは数多く存在します。最も人気のあるライブラリーでは、すべてのブラウザーで一貫したプレイヤーデザインを選ぶことができ、音声と動画をネイティブに対応していないブラウザー用の代替手段を提供します。代替手段は、歴史的には Adobe Flash や Microsoft Silverlight などの今では使われなくなったプラグインを使用して、非対応のブラウザーでメディアプレイヤーを提供してきましたが、これらは現代のコンピューターでは対応しなくなくなりました。他にも、字幕のための [`<track>`](/ja/docs/Web/HTML/Element/track) 要素のような機能も、メディアライブラリーを通して提供することができます。

### 音声のみ

- [SoundManager](http://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### 動画のみ

- [flowplayer](https://flowplayer.com/): 無料版には flowplayer ロゴのウォーターマークが入ります。オープンソース（GPL ライセンス）。
- [JWPlayer](https://www.jwplayer.com): ダウンロードするには登録が必要です。オープンソース版（クリエイティブ・コモンズ・ライセンス）。
- [SublimeVideo](https://www.sublimevideo.net/): 登録が必要です。 CDN でホストされているライブラリーへのドメイン特定のリンクを持つ、形式という形で集合します。
- [Video.js](https://videojs.com/): 無償かつオープンソース（Apache 2 ライセンス）。

### 音声と動画

- [jPlayer](https://jPlayer.org): 無償かつオープンソース（MIT ライセンス）。
- [mediaelement.js](https://www.mediaelementjs.com/): 無償かつオープンソース（Apache 2 ライセンス）。

### ウェブオーディオ API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch): 古いバージョンのウェブオーディオ API のためのポリフィル。オープンソース (Apache 2 ライセンス)。

## 基本的なチュートリアル

- [クロスブラウザー対応の動画プレイヤーの作成](/ja/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)
  - : {{ htmlelement ("video") }} 要素を使用した、基本的なクロスブラウザー対応の動画プレーヤーを作成するためのガイドです。
- [動画プレイヤーのスタイル付けの基本](/ja/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics)
  - : 前回の記事でクロスブラウザーに対応した動画プレイヤーを作成したため、この記事では、プレイヤーに基本的なレスポンシブスタイルを提供することについて見ていきます。
- [クロスブラウザー対応のオーディオの基本](/ja/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)
  - : この記事では、クロスブラウザーで動作する HTML 音声プレーヤーの作成に関する基本的なガイドと、関連するすべての属性、プロパティ、イベントの説明、およびメディア API を使用して作成するカスタム コントロールのクイック ガイドを提供します。
- [メディアのバッファリング、シーク、再生範囲](/ja/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges)
  - : 時には、{{ htmlelement("audio") }} や {{ htmlelement("video") }} がどれだけダウンロードされたか、あるいは遅延なく再生できるかを知ることは有益なことです。この良い例が、音声や 動画プレイヤーのバッファリング進捗バーです。この記事では、 [TimeRanges](/ja/docs/Web/API/TimeRanges) やメディア API の他の機能を使用して、バッファ/シークバーを構築する方法について説明します。
- [HTML の playbackRate の説明](/ja/docs/Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained)
  - : `playbackRate` プロパティを使うと、ウェブ音声や動画の再生速度や割合を変更することができます。この記事では、その詳細について説明します。
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : ウェブオーディオ API を使用して、音声ソースを取得、操作、再生するための基本的な方法を説明します。

## ストリーミングメディアのチュートリアル

- [ウェブの音声や映像のライブストリーミング](/ja/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video)
  - : ライブストリーミング技術は、スポーツやコンサートなどのライブイベントを中継するために多く採用されており、一般的にはテレビやラジオの番組がライブで出力されています。しばしば単にストリーミングと略され、ライブストリーミングは、コンピュータや機器にメディアを "ライブ "で送信するプロセスです。これは、変数が多く、かなり複雑で新しい主題であるので、この記事では、この主題に紹介し、どのように始めるかが分かるようにします。
- [アダプティブストリーミングメディアソースの設定](/ja/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources)
  - : 例えば、サーバー上にアダプティブストリーミングメディアソースを設定し、 HTML のメディア要素の中で利用したいとします。どのようにそれを行うのでしょうか？この記事では、最も一般的な 2 つの形式を見て、その方法を説明します。 MPEG-DASH と HLS (HTTP Live Streaming) です。
- [HTML 5 動画の DASH アダプティブストリーミング](/ja/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : DASH と WebM を使用したアダプティブストリーミングを設定する方法について詳しく説明します。

## 高度なチュートリアル

- [HTML 動画へのキャプションや字幕の追加](/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
  - : この記事では、 [Web_Video_Text_Tracks_Format](/ja/docs/Web/API/WebVTT_API) と {{ htmlelement("track") }} 要素を使って、 HTML でキャプションと字幕を追加する方法について説明します。
- [あらゆるブラウザーで動作するウェブオーディオ API コードの作成](/ja/docs/Web/Guide/Audio_and_video_delivery/Web_Audio_API_cross_browser)
  - : クロスブラウザー対応のウェブオーディオ API コードを書くためのガイドです。
- [メディアレコーダー API で音声を簡単に取り込む](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : メディアレコーダー API を使用して、メディアストリームを直接収録する基本的な方法について説明します。

> **メモ:** Firefox OS バージョン 1.3 以降では、ストリーミング動画配信のための [RTSP](https://ja.wikipedia.org/wiki/Real_Time_Streaming_Protocol) プロトコルに対応しています。古いバージョンのための代替手段は、代替コンテンツを提供するために Gecko に適した形式 (WebM など) とともに `<video>` を使用することでしょう。これに関するより多くの情報は、随時公開される予定です。

## 関連情報

- [video 要素](/ja/docs/Web/HTML/Element/video)
- [HTMLVideoElement API](/ja/docs/Web/API/HTMLVideoElement)
- [MediaSource API](/ja/docs/Web/API/MediaSource)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [メディアレコーダー API](/ja/docs/Web/API/MediaStream_Recording_API)
- [getUserMedia](/ja/docs/Web/API/MediaDevices/getUserMedia)
- [イベントリファレンス > メディア](/ja/docs/Web/Events#media)
